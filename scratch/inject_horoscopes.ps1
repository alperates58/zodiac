$baseDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectDir = Split-Path -Parent $baseDir
$burclarDir = Join-Path $projectDir "burclar"

$files = Get-ChildItem -Path $burclarDir -Filter "*.html"

foreach ($file in $files) {
    $content = Get-Content -Raw -Path $file.FullName
    
    # Zaten eklenmişse atla
    if ($content -match "horoscopeSection") {
        Write-Host "$($file.Name) already has horoscope section. Skipping."
        continue
    }
    
    # </div>\r?\n\s*</main> bul ve önüne ekle
    $newSection = @"
      <!-- Bölüm 9: Dönemsel Burç Yorumları -->
      <section class="detail-section" id="horoscopeSection"></section>

    </div>
  </main>
"@
    
    # detail-main kapanışını değiştir
    $content = $content -replace "(?ms)</div>\s*</main>", $newSection
    
    # script ekle
    $scriptBlock = @"
  <script src="../horoscope-tabs.js"></script>
</body>
"@
    $content = $content -replace "</body>", $scriptBlock
    
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Injected horoscope tab code into: $($file.Name)"
}

Write-Host "Injection complete!"
