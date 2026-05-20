import { getCollection } from 'astro:content';

export async function GET() {
  const erratas = await getCollection('erratas');
  const sorted = erratas.sort((a, b) => b.data.status_since - a.data.status_since);

  const data = {
    meta: {
      title: 'Boletín',
      description: 'Correcciones documentadas a la industria tecnológica',
      url: 'https://gob.co.nz',
      generated: new Date().toISOString(),
      total: sorted.length,
    },
    entries: sorted.map((entry) => ({
      slug: entry.data.slug,
      title: entry.data.title,
      type: entry.data.type,
      declaration: entry.data.declaration,
      origin: entry.data.origin,
      origin_year: entry.data.origin_year,
      correction: entry.data.correction,
      cause: entry.data.cause,
      status_since: entry.data.status_since,
      tags: entry.data.tags,
      sources: entry.data.sources ?? [],
      url: `https://gob.co.nz/errata/${entry.data.slug}/`,
    })),
  };

  return new Response(JSON.stringify(data, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
