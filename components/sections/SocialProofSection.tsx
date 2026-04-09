import AnimatedSection from '../AnimatedSection';

export default function SocialProofSection({ locale }: { locale: string }) {
  const badges = [
    {
      icon: '📸',
      value: '+10K',
      label: locale === 'es' ? 'Seguidores en Instagram' : 'Instagram Followers',
      sub: '@dracarolinamacareno',
      link: 'https://instagram.com/dracarolinamacareno',
    },
    {
      icon: '⭐',
      value: '5.0',
      label: locale === 'es' ? 'Valoración promedio' : 'Average rating',
      sub: locale === 'es' ? 'Google Reviews' : 'Google Reviews',
      link: '#',
    },
    {
      icon: '🏆',
      value: '17+',
      label: locale === 'es' ? 'Años de experiencia' : 'Years of experience',
      sub: locale === 'es' ? 'Desde 2002' : 'Since 2002',
      link: '#',
    },
    {
      icon: '📖',
      value: '1',
      label: locale === 'es' ? 'Libro publicado' : 'Published book',
      sub: locale === 'es' ? '"El poder de tu sonrisa"' : '"The power of your smile"',
      link: '#',
    },
  ];

  return (
    <section className="py-16 bg-[#070B14] border-t border-[#1F2937]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <a
                href={badge.link}
                target={badge.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center p-6 bg-[#0D1321] border border-[#1F2937] rounded-lg hover:border-[#C9A461]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A461]/5"
              >
                <span className="text-3xl mb-3">{badge.icon}</span>
                <span
                  className="text-2xl sm:text-3xl font-bold text-[#C9A461] mb-1"
                  style={{ fontFamily: 'var(--font-playfair-display, serif)' }}
                >
                  {badge.value}
                </span>
                <span className="text-[#F5F5F0] text-sm font-medium mb-1">{badge.label}</span>
                <span className="text-[#9CA3AF] text-xs">{badge.sub}</span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
