$files = @(
    "index.html",
    "dogum-haritasi.html",
    "uyum.html",
    "testler.html",
    "sozluk.html",
    "cin-burclari.html",
    "search.html",
    "takvim.html"
)

$menuHtml = @"
      <a href="index.html#burclar">12 Burç</a>
      <a href="dogum-haritasi.html">Doğum Haritası</a>
      <a href="uyum.html">Burç Uyumu</a>
      <a href="testler.html">Astroloji Testleri</a>
      <a href="sozluk.html">Sözlük</a>
      <a href="cin-burclari.html">Çin Burçları</a>
      <a href="takvim.html">Kozmik Takvim</a>
      <a href="search.html">Arama 🔍</a>
"@

foreach ($f in $files) {
    $path = Join-Path "c:\Users\alper\Desktop\zodiacrf" $f
    if (Test-Path $path) {
        $c = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
        
        # mainNav bloğunu bul ve içeriğini değiştir
        # Regex: (?s)<nav class="nav" id="mainNav"[^>]*>.*?</nav>
        $pattern = '(?s)<nav class="nav" id="mainNav"[^>]*>.*?</nav>'
        
        $newNav = "<nav class=" + '"' + "nav" + '"' + " id=" + '"' + "mainNav" + '"' + " aria-label=" + '"' + "Ana navigasyon" + '"' + ">`r`n" + $menuHtml + "`r`n    </nav>"
        
        $c = [System.Text.RegularExpressions.Regex]::Replace($c, $pattern, $newNav)
        
        [System.IO.File]::WriteAllText($path, $c, [System.Text.Encoding]::UTF8)
        Write-Host "Standardized menu in: $f"
    }
}

Write-Host "All menus standardized!"
