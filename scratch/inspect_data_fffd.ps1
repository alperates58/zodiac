$files = @(
    "data\cities.js",
    "data\daily-horoscopes.js",
    "data\dictionary.js",
    "data\search-index.js",
    "evler\1-ev.html",
    "evler\10-ev.html",
    "evler\2-ev.html"
)
$projectDir = "c:\Users\alper\Desktop\zodiacrf"

foreach ($rel in $files) {
    $full = Join-Path $projectDir $rel
    if (Test-Path $full) {
        $content = [System.IO.File]::ReadAllText($full, [System.Text.Encoding]::UTF8)
        $chars = $content.ToCharArray()
        Write-Host "File: $rel"
        for ($i = 0; $i -lt $chars.Length; $i++) {
            if ([int]$chars[$i] -eq 0xFFFD) {
                $start = [Math]::Max(0, $i - 20)
                $len = [Math]::Min($chars.Length - $start, 40)
                $snippet = $content.Substring($start, $len).Replace("`r", "").Replace("`n", " ")
                Write-Host "  Index $($i): ... $($snippet) ..."
            }
        }
    }
}
