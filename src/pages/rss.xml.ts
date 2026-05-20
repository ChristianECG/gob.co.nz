import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const erratas = await getCollection('erratas');
  const sorted = erratas.sort((a, b) => b.data.status_since - a.data.status_since);

  return rss({
    title: 'Boletín — correcciones documentadas a la industria tecnológica',
    description: 'Registro de posiciones revisadas, promesas incumplidas, predicciones fallidas y consensos disueltos.',
    site: context.site!,
    items: sorted.map((entry) => ({
      title: entry.data.title,
      pubDate: new Date(entry.data.status_since, 0, 1),
      description: entry.data.correction,
      link: `/errata/${entry.data.slug}/`,
      categories: [entry.data.type, ...entry.data.tags],
    })),
  });
}
