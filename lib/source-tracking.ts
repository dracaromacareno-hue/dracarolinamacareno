/**
 * Source tracking for WhatsApp prefilled messages.
 *
 * Carolina's WhatsApp number (+57 316 397 5232) is wired to her
 * GoHighLevel CRM, every message that arrives at that number becomes
 * a lead in GHL. The problem is GHL only sees the FIRST message text
 * the lead sent, with no native attribution data, so she cannot tell
 * Google Ads leads from Instagram leads from organic leads.
 *
 * Solution: every wa.me link the site renders appends a `[fuente: X]`
 * tag at the end of the prefilled message. When the patient sends that
 * message unchanged (the default behavior in WhatsApp), GHL captures
 * the tag and Carolina knows the channel.
 *
 * Detection priority (highest to lowest specificity):
 *  1. `gclid` URL param → Google Ads
 *  2. `utm_source=meta_ads` / `facebook` → Meta Ads
 *  3. `utm_source=instagram` / `ig` → Instagram (bio link or story)
 *  4. `utm_source=tiktok` → TikTok
 *  5. `utm_source=*` (anything else) → labeled with the source name
 *  6. `document.referrer` = AI assistant (ChatGPT, Gemini, Copilot,
 *      Perplexity, Claude, DeepSeek, Grok) → checked BEFORE search engines
 *      because Gemini/Copilot live on google./microsoft domains
 *  7. `document.referrer` contains 'google.' → Organic Google
 *  8. `document.referrer` contains 'bing.' → Organic Bing
 *  9. `document.referrer` contains 'instagram.com' → Instagram organic
 * 10. `document.referrer` contains 'facebook.com' → Facebook organic
 * 11. fallback → Directo (typed URL or unknown)
 *
 * Source value is sticky for the session (saved to sessionStorage on
 * first detection) so a user that opens 3 pages still attributes to
 * the original channel.
 */

const SESSION_KEY = 'dcm_source_v1';

export type SourceDetection = {
  /** Machine-readable source code, used in GA4 + ad labels */
  code: string;
  /** Human-readable label for the WhatsApp message tag (Spanish) */
  labelEs: string;
  /** Human-readable label for the WhatsApp message tag (English) */
  labelEn: string;
};

const DIRECT: SourceDetection = {
  code: 'direct',
  labelEs: 'directo',
  labelEn: 'direct',
};

function fromParams(params: URLSearchParams): SourceDetection | null {
  if (params.get('gclid')) {
    return { code: 'google_ads', labelEs: 'Google Ads', labelEn: 'Google Ads' };
  }
  if (params.get('fbclid')) {
    return { code: 'meta_ads', labelEs: 'Meta Ads', labelEn: 'Meta Ads' };
  }
  const utm = params.get('utm_source')?.toLowerCase();
  if (utm) {
    switch (utm) {
      case 'meta_ads':
      case 'facebook_ads':
      case 'fb_ads':
      case 'facebook':
        return { code: 'meta_ads', labelEs: 'Meta Ads', labelEn: 'Meta Ads' };
      case 'instagram':
      case 'ig':
      case 'ig_bio':
        return { code: 'instagram', labelEs: 'Instagram', labelEn: 'Instagram' };
      case 'tiktok':
      case 'tiktok_ads':
        return { code: 'tiktok', labelEs: 'TikTok', labelEn: 'TikTok' };
      case 'youtube':
        return { code: 'youtube', labelEs: 'YouTube', labelEn: 'YouTube' };
      case 'linkedin':
        return { code: 'linkedin', labelEs: 'LinkedIn', labelEn: 'LinkedIn' };
      case 'doctoralia':
        return { code: 'doctoralia', labelEs: 'Doctoralia', labelEn: 'Doctoralia' };
      case 'newsletter':
      case 'email':
        return { code: 'email', labelEs: 'email', labelEn: 'email' };
      case 'gbp':
      case 'gmb':
      case 'google_business':
        return { code: 'gbp', labelEs: 'Google Business', labelEn: 'Google Business' };
      default:
        return { code: `utm_${utm}`, labelEs: utm, labelEn: utm };
    }
  }
  return null;
}

function fromReferrer(referrer: string): SourceDetection | null {
  if (!referrer) return null;
  const ref = referrer.toLowerCase();

  // AI assistants FIRST. Gemini (gemini.google.com) and Copilot
  // (copilot.microsoft.com) live under google./microsoft domains, so if the
  // search-engine checks below ran first they would be mislabeled as
  // "Google orgánico" / generic host. All AI codes share the `ai_*`-style
  // family below so GA4/GHL can group them with one regex:
  //   chatgpt|gemini|copilot|perplexity|claude|deepseek|grok
  // NOTE: Google AI Overviews / AI Mode cannot be separated here, they come
  // as referrer google.com and fall into google_organic. That is a known blind
  // spot, only the "¿cómo nos encontró?" question catches those.
  if (ref.includes('chatgpt.com') || ref.includes('chat.openai.com') || ref.includes('openai.com')) {
    return { code: 'chatgpt', labelEs: 'ChatGPT', labelEn: 'ChatGPT' };
  }
  if (ref.includes('gemini.google.com') || ref.includes('bard.google.com')) {
    return { code: 'gemini', labelEs: 'Gemini', labelEn: 'Gemini' };
  }
  if (ref.includes('copilot.microsoft.com') || ref.includes('copilot.cloud.microsoft')) {
    return { code: 'copilot', labelEs: 'Copilot', labelEn: 'Copilot' };
  }
  if (ref.includes('perplexity.ai')) {
    return { code: 'perplexity', labelEs: 'Perplexity AI', labelEn: 'Perplexity AI' };
  }
  if (ref.includes('claude.ai') || ref.includes('anthropic.com')) {
    return { code: 'claude_ai', labelEs: 'Claude AI', labelEn: 'Claude AI' };
  }
  if (ref.includes('deepseek.com')) {
    return { code: 'deepseek', labelEs: 'DeepSeek', labelEn: 'DeepSeek' };
  }
  if (ref.includes('grok.com') || ref.includes('x.ai')) {
    return { code: 'grok', labelEs: 'Grok', labelEn: 'Grok' };
  }

  // Search engines
  if (ref.includes('google.')) {
    return { code: 'google_organic', labelEs: 'Google (orgánico)', labelEn: 'Google (organic)' };
  }
  if (ref.includes('bing.com')) {
    return { code: 'bing_organic', labelEs: 'Bing (orgánico)', labelEn: 'Bing (organic)' };
  }
  if (ref.includes('duckduckgo.com')) {
    return { code: 'ddg_organic', labelEs: 'DuckDuckGo', labelEn: 'DuckDuckGo' };
  }

  // Social / referral
  if (ref.includes('instagram.com')) {
    return { code: 'instagram_organic', labelEs: 'Instagram', labelEn: 'Instagram' };
  }
  if (ref.includes('facebook.com') || ref.includes('fb.com')) {
    return { code: 'facebook_organic', labelEs: 'Facebook', labelEn: 'Facebook' };
  }
  if (ref.includes('tiktok.com')) {
    return { code: 'tiktok_organic', labelEs: 'TikTok', labelEn: 'TikTok' };
  }
  if (ref.includes('linkedin.com')) {
    return { code: 'linkedin_organic', labelEs: 'LinkedIn', labelEn: 'LinkedIn' };
  }
  if (ref.includes('youtube.com')) {
    return { code: 'youtube_organic', labelEs: 'YouTube', labelEn: 'YouTube' };
  }
  if (ref.includes('doctoralia.')) {
    return { code: 'doctoralia', labelEs: 'Doctoralia', labelEn: 'Doctoralia' };
  }
  // Some other referring site we don't recognize, record the hostname
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, '');
    return { code: `ref_${host}`, labelEs: host, labelEn: host };
  } catch {
    return null;
  }
}

/**
 * Detect the visit source, prefer sessionStorage value if already set
 * (first-touch attribution: the channel that *brought* the user wins).
 */
export function detectSource(): SourceDetection {
  if (typeof window === 'undefined') return DIRECT;

  // 1. Return sticky session value if available
  try {
    const cached = sessionStorage.getItem(SESSION_KEY);
    if (cached) {
      const parsed = JSON.parse(cached) as SourceDetection;
      if (parsed && parsed.code) return parsed;
    }
  } catch {
    // sessionStorage may be blocked in some browsers, fall through
  }

  // 2. Detect from URL params
  const params = new URLSearchParams(window.location.search);
  const fromUrl = fromParams(params);
  if (fromUrl) {
    persist(fromUrl);
    return fromUrl;
  }

  // 3. Detect from referrer
  const ref = document.referrer || '';
  const fromRef = fromReferrer(ref);
  if (fromRef) {
    persist(fromRef);
    return fromRef;
  }

  // 4. Default, direct
  persist(DIRECT);
  return DIRECT;
}

function persist(detection: SourceDetection) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(detection));
  } catch {
    // ignore
  }
}

/**
 * Short identifier of the page the lead clicked from, e.g. a visitor on
 * /blog/duele-implante-dental-mitos yields `duele-implante-dental-mitos`.
 *
 * The channel alone (Google orgánico, ChatGPT, Instagram) cannot answer
 * "which article brings patients", every organic lead looks identical.
 * Appending the page slug makes that auditable by filtering the first
 * message text in GHL.
 *
 * Only the last path segment is used to keep the tag discreet: the locale
 * prefix and the section (/blog/, /servicios/) are dropped, slugs are
 * unique across the site anyway.
 */
function pageSlug(): string {
  if (typeof window === 'undefined') return '';
  const segments = window.location.pathname
    .split('/')
    .filter((s) => s && s !== 'en');
  return segments.length ? segments[segments.length - 1] : 'home';
}

/**
 * Append a `[fuente: X | p: slug]` tag to a WhatsApp prefilled message.
 *
 * Carolina sees the tag at the end of the lead's first message in GHL
 * and can immediately attribute the lead to the right channel and to the
 * exact page that produced it.
 */
export function appendSourceTag(
  baseMessage: string,
  locale: 'es' | 'en' = 'es',
  detection?: SourceDetection,
): string {
  const d = detection ?? detectSource();
  const label = locale === 'es' ? d.labelEs : d.labelEn;
  const prefix = locale === 'es' ? 'fuente' : 'source';
  const slug = pageSlug();
  const page = slug ? ` | p: ${slug}` : '';
  return `${baseMessage} [${prefix}: ${label}${page}]`;
}

/**
 * Convenience helper: build a wa.me URL with the source tag already
 * baked into the prefilled text.
 */
export function buildWaUrl(opts: {
  phone: string; // e.g. '573163975232' (no + sign)
  message: string; // base message in the right locale
  locale?: 'es' | 'en';
}): string {
  const locale = opts.locale ?? 'es';
  const tagged = appendSourceTag(opts.message, locale);
  return `https://wa.me/${opts.phone}?text=${encodeURIComponent(tagged)}`;
}
