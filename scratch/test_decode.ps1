$path = "c:\Users\alper\Desktop\zodiacrf\burclar\yengec.html"
if (Test-Path $path) {
    $text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    
    # Denenecek kod sayfaları
    $encodings = @(1252, 1254, 28591, 28599)
    
    foreach ($codepage in $encodings) {
        try {
            $enc = [System.Text.Encoding]::GetEncoding($codepage)
            $bytes = $enc.GetBytes($text)
            $recovered = [System.Text.Encoding]::UTF8.GetString($bytes)
            
            # Çocuk ve şifacılıkta kelimelerini ara
            if ($recovered -match "Çocuk" -and $recovered -match "şifacılıkta") {
                Write-Host "SUCCESS with codepage: $codepage"
                $lines = $recovered -split "`r`n"
                Write-Host "Line 101: $($lines[100])"
                Write-Host "Line 105: $($lines[104])"
                break
            } else {
                Write-Host "Failed with codepage: $codepage"
            }
        } catch {
            Write-Host "Error with codepage: $codepage"
        }
    }
} else {
    Write-Host "File not found!"
}
