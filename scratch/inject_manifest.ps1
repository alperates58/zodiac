$files = @(
    "index.html",
    "dogum-haritasi.html",
    "uyum.html",
    "testler.html",
    "sozluk.html",
    "cin-burclari.html",
    "search.html"
)

foreach ($f in $files) {
    $path = Join-Path "c:\Users\alper\Desktop\zodiacrf" $f
    if (Test-Path $path) {
        $c = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
        if (-not $c.Contains("manifest.webmanifest")) {
            $link = '  <link rel="manifest" href="manifest.webmanifest">' + "`r`n</head>"
            $c = $c.Replace("</head>", $link)
            [System.IO.File]::WriteAllText($path, $c, [System.Text.Encoding]::UTF8)
            Write-Host "Injected manifest into: $f"
        }
    }
}
