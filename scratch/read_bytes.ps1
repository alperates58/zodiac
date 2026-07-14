$path = "c:\Users\alper\Desktop\zodiacrf\burclar\yengec.html"
if (Test-Path $path) {
    $bytes = [System.IO.File]::ReadAllBytes($path)
    # Search for "ÅŸifacÄ±lÄ±kta" bytes:
    # Å = U+00C5. In UTF-8, C3 85.
    # Ÿ = U+0178. In UTF-8, C5 B8. Or is it U+015F (ş) written in UTF-8?
    # Let's print the first 500 bytes of the file in hex to see what's going on!
    $hex = ""
    for ($i=0; $i -lt 1000 -and $i -lt $bytes.Length; $i++) {
        $hex += "{0:X2} " -f $bytes[$i]
    }
    Write-Host "Bytes: $hex"
} else {
    Write-Host "File not found"
}
