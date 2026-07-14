$src = "c:\Users\alper\Desktop\zodiacrf"

# Taranacak dosyaların listesi
$files = @(
    "index.html",
    "dogum-haritasi.html",
    "uyum.html",
    "testler.html",
    "sozluk.html",
    "cin-burclari.html",
    "takvim.html",
    "search.html",
    "style.css",
    "style-detail.css",
    "script.js",
    "testler.js",
    "uyum.js",
    "astro-calc.js",
    "horoscope-tabs.js",
    "sw.js",
    "manifest.webmanifest",
    "data\cities.js",
    "data\dictionary.js",
    "data\search-index.js",
    "data\daily-horoscopes.js",
    "data\compatibility-detail.js",
    "burclar\koc.html",
    "burclar\boga.html",
    "burclar\ikizler.html",
    "burclar\yengec.html",
    "burclar\aslan.html",
    "burclar\basak.html",
    "burclar\terazi.html",
    "burclar\akrep.html",
    "burclar\yay.html",
    "burclar\oglak.html",
    "burclar\kova.html",
    "burclar\balik.html",
    "gezegenler\ay.html",
    "gezegenler\gunes.html",
    "gezegenler\mars.html",
    "gezegenler\merkur.html",
    "gezegenler\venus.html",
    "evler\1-ev.html",
    "evler\2-ev.html",
    "evler\10-ev.html"
)

$utf8Throw = New-Object System.Text.UTF8Encoding($false, $true) # Throw on invalid UTF-8

$report = @()
$report += "| Dosya | Mevcut kodlama | Geçerli UTF-8 | Mojibake | U+FFFD | Muhtemel kaynak | Güvenli otomatik onarım |"
$report += "|---|---|---|---|---|---|---|"

# Char codes to prevent shell encoding issues in regex
$char_A_tilde = [char]0x00C3
$char_A_diaeresis = [char]0x00C4
$char_A_ring = [char]0x00C5
$char_A_circumflex = [char]0x00C2

foreach ($f in $files) {
    $path = Join-Path $src $f
    if (-not (Test-Path $path)) {
        continue
    }
    
    # 1. BOM Kontrolü
    $bytes = [System.IO.File]::ReadAllBytes($path)
    $hasBOM = $false
    if ($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
        $hasBOM = $true
    }
    
    # 2. Geçerli UTF-8 Kontrolü
    $isValidUTF8 = $true
    $text = ""
    try {
        $text = [System.IO.File]::ReadAllText($path, $utf8Throw)
    } catch {
        $isValidUTF8 = $false
        # ANSI / Win-1254 olarak oku
        try {
            $enc1254 = [System.Text.Encoding]::GetEncoding(1254)
            $text = [System.IO.File]::ReadAllText($path, $enc1254)
        } catch {
            $text = ""
        }
    }
    
    # 3. Mojibake Kontrolü
    $hasMojibake = $false
    if ($text) {
        # Eğer çift kodlama karakterleri varsa
        if ($text.Contains($char_A_tilde) -or $text.Contains($char_A_diaeresis) -or $text.Contains($char_A_ring) -or $text.Contains($char_A_circumflex)) {
            $hasMojibake = $true
        }
    }
    
    # 4. U+FFFD Kontrolü
    $hasFFFD = $false
    $fffdCount = 0
    if ($text) {
        $chars = $text.ToCharArray()
        foreach ($c in $chars) {
            if ([int]$c -eq 0xFFFD) {
                $hasFFFD = $true
                $fffdCount++
            }
        }
    }
    
    # 5. Mevcut Kodlama Tespiti
    $encodingStr = "UTF-8"
    if ($hasBOM) { $encodingStr = "UTF-8 BOM" }
    elseif (-not $isValidUTF8) { $encodingStr = "Windows-1254 / ANSI" }
    
    # 6. Muhtemel Kaynak ve Güvenli Onarım
    $source = "Temiz UTF-8"
    $repair = "Gerekmiyor"
    
    if ($hasMojibake) {
        $source = "Çift Kodlama (UTF-8 as ANSI)"
        $repair = "Windows-1252 -> UTF-8 dönüşümü"
    } elseif ($hasFFFD) {
        $source = "Karakter Kaybı (U+FFFD)"
        $repair = "Metin şablonu/sözlük ile onarım"
    } elseif (-not $isValidUTF8) {
        $source = "ANSI / Windows-1254"
        $repair = "UTF-8 Kodlamasına Dönüştürme"
    }
    
    $validStr = "Hayır"
    if ($isValidUTF8) { $validStr = "Evet" }
    
    $mojibakeStr = "Hayır"
    if ($hasMojibake) { $mojibakeStr = "Evet" }
    
    $fffdStr = "Hayır"
    if ($hasFFFD) { $fffdStr = "Evet ($fffdCount)" }
    
    $report += "| $f | $encodingStr | $validStr | $mojibakeStr | $fffdStr | $source | $repair |"
}

# Raporu kaydet
$reportPath = Join-Path $src "scratch\encoding_report.md"
[System.IO.File]::WriteAllLines($reportPath, $report, [System.Text.Encoding]::UTF8)

Write-Host "Encoding analysis complete! Report saved to scratch\encoding_report.md"
