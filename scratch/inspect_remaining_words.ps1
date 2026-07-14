$burclarDir = "c:\Users\alper\Desktop\zodiacrf\burclar"
$files = Get-ChildItem -Path $burclarDir -Filter "*.html"

$fffd = [char]0xFFFD

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $chars = $content.ToCharArray()
    
    $found = @()
    for ($i = 0; $i -lt $chars.Length; $i++) {
        if ([int]$chars[$i] -eq 0xFFFD) {
            $start = [Math]::Max(0, $i - 15)
            $len = [Math]::Min($chars.Length - $start, 30)
            $snippet = $content.Substring($start, $len).Replace("`r", "").Replace("`n", " ")
            $found += "  Index $($i): ... $($snippet) ..."
        }
    }
    
    if ($found.Count -gt 0) {
        Write-Host "File: $($file.Name) (Count: $($found.Count))"
        foreach ($line in $found) {
            Write-Host $line
        }
    }
}
