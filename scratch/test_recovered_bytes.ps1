$path = "c:\Users\alper\Desktop\zodiacrf\burclar\yengec.html"
if (Test-Path $path) {
    $text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    
    $enc = [System.Text.Encoding]::GetEncoding(1252)
    $bytes = $enc.GetBytes($text)
    $recovered = [System.Text.Encoding]::UTF8.GetString($bytes)
    
    # Get bytes of recovered string in UTF-8
    $recBytes = [System.Text.Encoding]::UTF8.GetBytes($recovered)
    
    # Print first 200 bytes in hex
    $hex = ""
    for ($i=0; $i -lt 300 -and $i -lt $recBytes.Length; $i++) {
        $hex += "{0:X2} " -f $recBytes[$i]
    }
    Write-Host "Recovered Bytes: $hex"
} else {
    Write-Host "File not found"
}
