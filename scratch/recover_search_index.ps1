$path = "c:\Users\alper\Desktop\zodiacrf\data\search-index.js"
if (Test-Path $path) {
    $enc1252 = [System.Text.Encoding]::GetEncoding(1252)
    $text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    $bytes = $enc1252.GetBytes($text)
    [System.IO.File]::WriteAllBytes($path, $bytes)
    Write-Host "Recovered encoding for: search-index.js"
} else {
    Write-Host "File not found"
}
