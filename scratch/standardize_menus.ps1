$files = @(
    "index.html",
    "dogum-haritasi.html",
    "uyum.html",
    "testler.html",
    "sozluk.html",
    "cin-burclari.html",
    "search.html",
    "takvim.html",
    "transitler.html",
    "ay-fazlari.html",
    "retrolar.html",
    "dogum-haritasi-rehberi.html"
)

# Load the menu HTML from the external file as UTF-8
$menuPath = "c:\Users\alper\Desktop\zodiacrf\scratch\menu.txt"
$menuHtml = [System.IO.File]::ReadAllText($menuPath, [System.Text.Encoding]::UTF8)

foreach ($f in $files) {
    $path = Join-Path "c:\Users\alper\Desktop\zodiacrf" $f
    if (Test-Path $path) {
        $c = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
        
        # mainNav block replacement
        $pattern = '(?s)<nav class="nav" id="mainNav"[^>]*>.*?</nav>'
        $newNav = "<nav class=" + '"' + "nav" + '"' + " id=" + '"' + "mainNav" + '"' + " aria-label=" + '"' + "Ana navigasyon" + '"' + ">`r`n" + $menuHtml + "`r`n    </nav>"
        
        $c = [System.Text.RegularExpressions.Regex]::Replace($c, $pattern, $newNav)
        
        # Write back as clean UTF-8
        [System.IO.File]::WriteAllText($path, $c, [System.Text.Encoding]::UTF8)
        Write-Host "Standardized menu in: $f"
    }
}

Write-Host "All menus standardized successfully with proper UTF-8 encoding!"
