$src = "c:\Users\alper\Desktop\zodiacrf"
$dest = "c:\Users\alper\Desktop\zodiacrf_backup"

if (-not (Test-Path $dest)) {
    New-Item -ItemType Directory -Path $dest -Force | Out-Null
}

# Metin dosyası uzantıları
$extensions = @("*.html", "*.htm", "*.css", "*.js", "*.json", "*.xml", "*.txt", "*.md", "*.webmanifest", "*.svg")

foreach ($ext in $extensions) {
    # Alt dizinleri de kapsayacak şekilde dosyaları bul
    $files = Get-ChildItem -Path $src -Filter $ext -Recurse
    
    foreach ($file in $files) {
        # Orijinal dosyaya göre bağıl yolu hesapla
        $relPath = $file.FullName.Substring($src.Length + 1)
        $targetFile = Join-Path $dest $relPath
        $targetDir = Split-Path -Parent $targetFile
        
        if (-not (Test-Path $targetDir)) {
            New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
        }
        
        Copy-Item -Path $file.FullName -Destination $targetFile -Force
    }
}

Write-Host "Backup completed to: $dest"
