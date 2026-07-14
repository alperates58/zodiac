$path = "c:\Users\alper\Desktop\zodiacrf\burclar\yengec.html"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

$chars = $content.ToCharArray()
Write-Host "Total U+FFFD found: $(($chars | Where-Object { [int]$_ -eq 0xFFFD }).Count)"

# Print the 20 characters before and after each U+FFFD
for ($i = 0; $i -lt $chars.Length; $i++) {
    if ([int]$chars[$i] -eq 0xFFFD) {
        $start = [Math]::Max(0, $i - 20)
        $len = [Math]::Min(40, $chars.Length - $start)
        $snippet = $content.Substring($start, $len).Replace("`r", " ").Replace("`n", " ")
        Write-Host "U+FFFD at index $($i): ... $($snippet) ..."
    }
}
