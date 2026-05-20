import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const erratas = await getCollection('erratas');
  const sorted = erratas.sort((a, b) => b.data.status_since - a.data.status_since);
  const base = context.site?.toString().replace(/\/$/, '') ?? '';

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Boletín — correcciones documentadas a la industria tecnológica',
    home_page_url: base + '/',
    feed_url: base + '/feed.json',
    description: 'Registro de posiciones revisadas, promesas incumplidas, predicciones fallidas y consensos disueltos.',
    language: 'es',
    items: sorted.map((entry) => ({
      id: base + `/errata/${entry.data.slug}/`,
      url: base + `/errata/${entry.data.slug}/`,
      title: entry.data.title,
      content_text: entry.data.correction,
      summary: entry.data.declaration,
      date_published: new Date(entry.data.status_since, 0, 1).toISOString(),
      tags: [entry.data.type, ...entry.data.tags],
      _boletin: {
        type: entry.data.type,
        origin: entry.data.origin,
        origin_year: entry.data.origin_year,
        cause: entry.data.cause,
        status_since: entry.data.status_since,
        sources: entry.data.sources ?? [],
      },
    })),
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: { 'Content-Type': 'application/feed+json; charset=utf-8' },
  });
}
