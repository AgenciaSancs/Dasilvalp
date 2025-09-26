import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const imageUrls = [
  "https://i.postimg.cc/9fvdxBDn/Logo-simples-circular-esmaltaria-preto-1.png",
  "https://i.postimg.cc/T20Zd0Nn/capa-dasilva.png",
  "https://i.postimg.cc/pXYYbc0t/capa-cell-dasilva.png",
  "https://i.postimg.cc/7Pd7j8Ds/imagem-2025-09-03-112210245.png",
  "https://i.postimg.cc/cH609Q8P/Gemini-Generated-Image-ifwy1uifwy1uifwy.png",
  "https://i.postimg.cc/8Cb24WfR/imagem-2025-09-03-120951564.png",
  "https://i.postimg.cc/XNy68ds5/waze.png",
  "https://i.postimg.cc/N01rm5Wv/maps.png",
  "https://i.postimg.cc/ZRnn8Cpf/arte-1.png",
  "https://i.postimg.cc/Bv2YsB6F/arte-2.png",
  "https://i.postimg.cc/J0JR969B/Logo-simples-circular-esmaltaria-preto-3.png",
  "https://i.postimg.cc/qBskpYN1/Logo-simples-circular-esmaltaria-preto-5.png",
  "https://i.postimg.cc/d3cw2M0S/Logo-simples-circular-esmaltaria-preto-6.png",
  "https://i.postimg.cc/KzKbTGD2/Logo-EMTHOS.png",
  "https://i.postimg.cc/vBPmmhfT/Gemini-Generated-Image-1twygd1twygd1twy.png"
];

const cdnDir = path.join(process.cwd(), 'public', 'cdn');
const manifestPath = path.join(cdnDir, 'manifest.json');

async function fetchImages() {
  await fs.mkdir(cdnDir, { recursive: true });
  const manifest = {};

  for (const url of imageUrls) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`Failed to fetch ${url}: ${response.statusText}`);
        continue;
      }
      const buffer = await response.arrayBuffer();
      const fileExtension = path.extname(new URL(url).pathname) || '.png';
      const hash = crypto.createHash('sha256').update(url).digest('hex');
      const filename = `${hash}${fileExtension}`;
      const filepath = path.join(cdnDir, filename);
      await fs.writeFile(filepath, Buffer.from(buffer));
      manifest[url] = `/cdn/${filename}`;
      console.log(`Downloaded ${url} -> /cdn/${filename}`);
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
    }
  }

  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('Image manifest created at', manifestPath);
}

fetchImages();
