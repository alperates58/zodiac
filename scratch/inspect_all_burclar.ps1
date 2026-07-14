$burclarDir = "c:\Users\alper\Desktop\zodiacrf\burclar"
$files = Get-ChildItem -Path $burclarDir -Filter "*.html"

$fffd = [char]0xFFFD

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $chars = $content.ToCharArray()
    $found = 0
    for ($i = 0; $i -lt $chars.Length; $i++) {
        if ([int]$chars[$i] -eq 0xFFFD) {
            $found++
            $start = [Math]::Max(0, $i - 30)
            $len = [Math]::Min($chars.Length - $start, 60)
            $snippet = $content.Substring($start, $len).Replace("`r", "").Replace("`n", " ")
            Write-Host "File: $($file.Name) - Index $($i): ... $($snippet) ..."
        }
    }
}
