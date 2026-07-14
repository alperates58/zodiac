$directories = @(
    "c:\Users\alper\Desktop\zodiacrf\burclar",
    "c:\Users\alper\Desktop\zodiacrf\gezegenler",
    "c:\Users\alper\Desktop\zodiacrf\evler"
)

$enc1252 = [System.Text.Encoding]::GetEncoding(1252)

foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) { continue }
    $files = Get-ChildItem -Path $dir -Filter "*.html"
    
    foreach ($file in $files) {
        # Dosyayı UTF-8 string olarak oku
        $text = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
        
        # Bozuk karakterleri Windows-1252 ile byte dizisine çevir (bu sayede orijinal UTF-8 byte dizilimi elde edilir)
        $bytes = $enc1252.GetBytes($text)
        
        # Orijinal byte dizisini doğrudan dosyaya yaz
        [System.IO.File]::WriteAllBytes($file.FullName, $bytes)
        
        Write-Host "Recovered encoding for: $($file.FullName)"
    }
}

Write-Host "All directories recovered successfully!"
