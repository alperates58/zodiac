# Zodyak Atlası - UTF-8 ve Mojibake Tarama Betiği
# Bu betik, projedeki tüm dosyaları tarayarak bozuk karakterleri tespit eder.

$mojibake = @(
    "Ã¼", "Ã§", "Ã¶", "Ä±", "Å", "Ä", 
    "Ã‡", "Ã", "Ã", "Ã", "Ã", 
    "â", "ï¿½"
)

$flagged = 0

Get-ChildItem -Recurse -Include *.html, *.css, *.js, *.json, *.webmanifest, *.xml, *.txt, *.md -Exclude *node_modules*, *.git* | ForEach-Object {
    $file = $_.FullName
    $content = [System.IO.File]::ReadAllText($file, [System.Text.Encoding]::UTF8)
    
    # U+FFFD kontrolü
    if ($content -match "\uFFFD") {
        Write-Host "[HATA] U+FFFD (Replacement Character) Tespit Edildi: $file" -ForegroundColor Red
        $flagged++
    }
    
    # Mojibake desen kontrolü
    foreach ($pattern in $mojibake) {
        if ($content.Contains($pattern)) {
            # Dosyadaki desenin kodlama hatası mı yoksa rapor/örnek metin mi olduğunu kontrol et (bu tarayıcı dosyasının kendisi hariç)
            if ($file -notmatch "scan_utf8" -and $file -notmatch "phase4a0_validation_report" -and $file -notmatch "encoding_report" -and $file -notmatch "walkthrough") {
                Write-Host "[UYARI] Mojibake Deseni ($pattern) Bulundu: $file" -ForegroundColor Yellow
                $flagged++
                break
            }
        }
    }
}

if ($flagged -eq 0) {
    Write-Host "[BAŞARILI] Tüm dosyalar byte düzeyinde temiz! UTF-8 koruması aktif." -ForegroundColor Green
} else {
    Write-Host "[UYARI] Toplam $flagged dosyada olası karakter kodlama sorunu tespit edildi." -ForegroundColor Orange
}