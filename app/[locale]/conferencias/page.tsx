import { redirect } from 'next/navigation';

export default async function ConferenciasRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const prefix = locale === 'es' ? '' : '/en';
  redirect(`${prefix}/casos-clinicos`);
}
