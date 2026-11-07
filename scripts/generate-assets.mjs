import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

const LOGO_SRC = path.join(ROOT_DIR, 'logo.png');
const FAVICON_SRC = path.join(ROOT_DIR, 'favicon.png');

async function generateAssets() {
  console.log('--- Iniciando geração e conversão de assets da Rede Oásis ---');

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  // 1. Copiar e otimizar logo.png principal para public/
  console.log('[1/5] Processando logo.png...');
  await sharp(LOGO_SRC)
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(path.join(PUBLIC_DIR, 'logo.png'));

  // Versão compacta da logo para navbar
  await sharp(LOGO_SRC)
    .resize({ height: 120, fit: 'inside' })
    .png({ quality: 90 })
    .toFile(path.join(PUBLIC_DIR, 'logo-navbar.png'));

  // 2. Copiar favicon.png original para public/
  console.log('[2/5] Processando favicon.png original...');
  await sharp(FAVICON_SRC)
    .png({ quality: 95 })
    .toFile(path.join(PUBLIC_DIR, 'favicon.png'));

  // 3. Gerar tamanhos padrão para navegadores e dispositivos
  console.log('[3/5] Gerando variações de favicon...');
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
  ];

  for (const item of sizes) {
    const dest = path.join(PUBLIC_DIR, item.name);
    await sharp(FAVICON_SRC)
      .resize(item.size, item.size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toFile(dest);
    console.log(`  ✓ ${item.name} (${item.size}x${item.size}) gerado`);
  }

  // 4. Gerar favicon.ico multi-resolução (16, 32, 48)
  console.log('[4/5] Gerando favicon.ico multi-resolução...');
  const icoBuffer = await pngToIco([
    path.join(PUBLIC_DIR, 'favicon-16x16.png'),
    path.join(PUBLIC_DIR, 'favicon-32x32.png'),
    path.join(PUBLIC_DIR, 'favicon-48x48.png'),
  ]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer);
  console.log('  ✓ favicon.ico criado com sucesso!');

  // 5. Gerar site.webmanifest
  console.log('[5/5] Gerando site.webmanifest...');
  const manifest = {
    name: 'Rede Oásis — Infraestrutura Biológica Descentralizada',
    short_name: 'Rede Oásis',
    description: 'Investimento verde vivo em rede regional para infraestruturas de missão crítica.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f1a0f',
    theme_color: '#228B22',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };

  fs.writeFileSync(
    path.join(PUBLIC_DIR, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('  ✓ site.webmanifest gerado com sucesso!');

  console.log('--- Todas as conversões e gerações foram concluídas com sucesso! ---');
}

generateAssets().catch((err) => {
  console.error('Erro na geração de assets:', err);
  process.exit(1);
});
