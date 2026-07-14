$path = "c:\Users\alper\Desktop\zodiacrf\burclar\yengec.html"
$lines = [System.IO.File]::ReadAllLines($path, [System.Text.Encoding]::UTF8)
$line = $lines[44]

Write-Host "Line 45: $line"
$chars = $line.ToCharArray()
for ($i = 0; $i -lt $chars.Length; $i++) {
    $c = $chars[$i]
    $cp = [int]$c
    if ($cp -gt 127 -or $c -eq '?') {
        Write-Host "Char at index $($i): '$($c)' (U+$($cp.ToString('X4')))"
    }
}
