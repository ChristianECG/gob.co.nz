import sharp from 'sharp';
import { getCollection } from 'astro:content';
import { ogSvg } from '../../lib/og';

const typeLabels: Record<string, string> = {
  'posicion-revisada': 'Posición revisada',
  'promesa-incumplida': 'Promesa incumplida',
  'prediccion-fallida': 'Predicción fallida',
  'consenso-disuelto': 'Consenso disuelto',
};

const typeColors: Record<string, string> = {
  'posicion-revisada': '#7a9fd4',
  'promesa-incumplida': '#c47a7a',
  'prediccion-fallida': '#c4a84a',
  'consenso-disuelto': '#6ab88a',
};

export async function getStaticPaths() {
  const erratas = await getCollection('erratas');
  return erratas.map((entry) => ({
    params: { slug: entry.data.slug },
    props: { entry },
  }));
}

export async function GET({ props }: { props: any }) {
  const { entry } = props;
  const d = entry.data;

  const svg = ogSvg({
    title: d.title,
    subtitle: d.correction,
    type: d.type,
    typeLabel: typeLabels[d.type],
    typeColor: typeColors[d.type],
  });

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
}
