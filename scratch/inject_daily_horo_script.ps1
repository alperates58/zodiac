$burclarDir = "c:\Users\alper\Desktop\zodiacrf\burclar"
$files = Get-ChildItem -Path $burclarDir -Filter "*.html"

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    if (-not $content.Contains("daily-horoscopes.js")) {
        # Script etiketini enjekte et
        $target = '<script src="../horoscope-tabs.js"></script>'
        $replacement = '<script src="../data/daily-horoscopes.js"></script>' + "`r`n  " + '<script src="../horoscope-tabs.js"></script>'
        
        $content = $content.Replace($target, $replacement)
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Injected daily-horoscopes.js script link into: $($file.Name)"
    } else {
        Write-Host "Already has daily-horoscopes.js: $($file.Name)"
    }
}

Write-Host "Injection complete!"
