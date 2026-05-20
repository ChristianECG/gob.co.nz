import sharp from 'sharp';
import { ogSvg } from '../lib/og';

export async function GET() {
  const svg = ogSvg({
    title: 'Boletín',
    subtitle: 'Correcciones documentadas a la industria tecnológica',
  });

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
}
