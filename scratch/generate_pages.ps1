$baseDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectDir = Split-Path -Parent $baseDir

$gezegenlerDir = Join-Path $projectDir "gezegenler"
$evlerDir = Join-Path $projectDir "evler"

if (-not (Test-Path $gezegenlerDir)) { New-Item -ItemType Directory -Path $gezegenlerDir }
if (-not (Test-Path $evlerDir)) { New-Item -ItemType Directory -Path $evlerDir }

# 1. Gezegen Sayfalarını Üret
$planetsPath = Join-Path $projectDir "data\planets.json"
if (Test-Path $planetsPath) {
    $planets = Get-Content -Raw -Path $planetsPath | ConvertFrom-Json
    foreach ($p in $planets) {
        $house_cards = ""
        foreach ($hp in $p.housePositions) {
            $house_cards += @"

            <div class="trait-card">
              <h4>$($hp.num)</h4>
              <p>$($hp.desc)</p>
            </div>
"@
        }

        $accent_color = $p.accentColor
        if ($accent_color -eq $null) { $accent_color = "#d4af37" }
        $accent_rgb = "212,175,55"
        if ($accent_color -eq "#ef476f") { $accent_rgb = "239,71,111" }
        elseif ($accent_color -eq "#8296c9") { $accent_rgb = "130,150,201" }

        $html_content = @"
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Astrolojide $($p.name) anlamı, yönettikleri, haritadaki gücü, mitolojisi ve evlerdeki yorumları.">
  <title>$($p.name): $($p.descTitle) — Zodyak Atlası</title>
  <link rel="stylesheet" href="../style-detail.css">
  <style>
    :root {
      --accent-color: $($accent_color);
      --accent-glow: rgba($($accent_rgb), 0.35);
    }
  </style>
</head>
<body>
  <header class="detail-header">
    <a href="../index.html" class="back-link">← Atlasa Dön</a>
    <a href="../index.html" class="detail-logo">✦ Zodyak <span>Atlası</span></a>
  </header>

  <main>
    <section class="detail-hero">
      <div class="detail-starfield"></div>
      <div class="hero-glyph">$($p.glyph)</div>
      <h1>$($p.name)</h1>
      <p class="hero-motto">“$($p.motto)”</p>
      <div class="badges">
        <span class="badge accent-badge">Yönettiği Burç: $($p.ruler)</span>
        <span class="badge">Zodyak Turu: $($p.cycle)</span>
        <span class="badge">Doğal Evi: $($p.house)</span>
        <span class="badge">Metal: $($p.metal)</span>
      </div>
    </section>

    <div class="detail-main">
      <section class="detail-section">
        <div class="section-sidebar">
          <h2>Kozmik Sembolizm</h2>
          <p>Her gezegen haritada bir psikolojik dürtüyü ve aktörü temsil eder.</p>
        </div>
        <div class="section-content">
          <h3>$($p.descTitle)</h3>
          <p>$($p.descText)</p>
          <p>$($p.astroDetails)</p>
        </div>
      </section>

      <section class="detail-section">
        <div class="section-sidebar">
          <h2>$($p.astroTitle2)</h2>
          <p>Gök cisminin fiziksel ve bilimsel yörünge özellikleri.</p>
        </div>
        <div class="section-content">
          <h3>$($p.astroTitle)</h3>
          <p>$($p.astroText)</p>
          <p>$($p.astroText2)</p>
        </div>
      </section>

      <section class="detail-section">
        <div class="section-sidebar">
          <h2>Evlerdeki Anlamı</h2>
          <p>$($p.name) gezegeninin bulunduğu ev, yaşam enerjinizin en aktif olduğu hayat sahnesini gösterir.</p>
        </div>
        <div class="section-content">
          <div class="trait-grid">$($house_cards)
          </div>
        </div>
      </section>

      <section class="detail-section">
        <div class="section-sidebar">
          <h2>Mitolojik Köken</h2>
          <p>Kadim kültürlerde gezegenin arkasındaki mitolojik öyküler.</p>
        </div>
        <div class="section-content">
          <h3>$($p.mythTitle)</h3>
          <p>$($p.mythText)</p>
        </div>
      </section>
    </div>
  </main>

  <footer class="detail-footer">
    <p>© 2026 Zodyak Atlası — Gökyüzünün Kadim Bilgeliği</p>
  </footer>
</body>
</html>
"@
        $filePath = Join-Path $gezegenlerDir "$($p.slug).html"
        [System.IO.File]::WriteAllText($filePath, $html_content, [System.Text.Encoding]::UTF8)
        Write-Host "Generated planet page: $($p.slug).html"
    }
}

# 2. Ev Sayfalarını Üret
$housesPath = Join-Path $projectDir "data\houses.json"
if (Test-Path $housesPath) {
    $houses = Get-Content -Raw -Path $housesPath | ConvertFrom-Json
    foreach ($h in $houses) {
        $html_content = @"
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Astrolojide $($h.name) anlamı, temsil ettiği yaşam alanları, gezegen konumları.">
  <title>$($h.name): $($h.topic) — Zodyak Atlası</title>
  <link rel="stylesheet" href="../style-detail.css">
</head>
<body>
  <header class="detail-header">
    <a href="../index.html" class="back-link">← Atlasa Dön</a>
    <a href="../index.html" class="detail-logo">✦ Zodyak <span>Atlası</span></a>
  </header>

  <main>
    <section class="detail-hero">
      <div class="detail-starfield"></div>
      <div class="hero-glyph">🏠</div>
      <h1>$($h.name)</h1>
      <p class="hero-motto">“$($h.topic)”</p>
      <div class="badges">
        <span class="badge accent-badge">Doğal Burcu: $($h.ruler)</span>
        <span class="badge">Deneyim Alanı: Somut Yaşam Sahneleri</span>
      </div>
    </section>

    <div class="detail-main">
      <section class="detail-section">
        <div class="section-sidebar">
          <h2>Ev Konusu</h2>
          <p>Gökyüzünün doğum anındaki 12 bölümünden biri.</p>
        </div>
        <div class="section-content">
          <h3>Temsil Ettiği Alanlar</h3>
          <p>$($h.desc)</p>
          <p>$($h.details)</p>
        </div>
      </section>

      <section class="detail-section">
        <div class="section-sidebar">
          <h2>Gezegen Vurguları</h2>
          <p>Bu eve düşen gezegenler buradaki hayat tecrübelerini nasıl şekillendirir?</p>
        </div>
        <div class="section-content">
          <h3>Gezegen Konumları</h3>
          <p>$($h.planets)</p>
        </div>
      </section>
    </div>
  </main>

  <footer class="detail-footer">
    <p>© 2026 Zodyak Atlası — Gökyüzünün Kadim Bilgeliği</p>
  </footer>
</body>
</html>
"@
        $filePath = Join-Path $evlerDir "$($h.slug).html"
        [System.IO.File]::WriteAllText($filePath, $html_content, [System.Text.Encoding]::UTF8)
        Write-Host "Generated house page: $($h.slug).html"
    }
}

Write-Host "Page generation complete!"
