$path = "c:\Users\alper\Desktop\zodiacrf\burclar\yengec.html"
if (Test-Path $path) {
    $text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    
    $enc = [System.Text.Encoding]::GetEncoding(1252)
    $bytes = $enc.GetBytes($text)
    $recovered = [System.Text.Encoding]::UTF8.GetString($bytes)
    
    Write-Host "Length: $($recovered.Length)"
    Write-Host "Snippet (first 500 chars):"
    Write-Host $recovered.Substring(0, 500)
} else {
    Write-Host "File not found"
}
