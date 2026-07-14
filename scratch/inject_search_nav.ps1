$files = @("index.html", "dogum-haritasi.html", "uyum.html", "testler.html", "sozluk.html", "cin-burclari.html")
foreach ($f in $files) {
    $path = Join-Path "c:\Users\alper\Desktop\zodiacrf" $f
    if (Test-Path $path) {
        $c = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
        if (-not $c.Contains("search.html")) {
            $link = '      <a href="search.html">Arama 🔍</a>' + "`r`n    </nav>"
            $c = $c -replace "\s*</nav>", $link
            [System.IO.File]::WriteAllText($path, $c, [System.Text.Encoding]::UTF8)
            Write-Host "Injected into: $f"
        }
    }
}
