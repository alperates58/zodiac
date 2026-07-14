$path = "c:\Users\alper\Desktop\zodiacrf\burclar\yengec.html"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

Write-Host "Chars around 1534:"
for ($i = 1525; $i -lt 1555; $i++) {
    $c = $content[$i]
    $cp = [int]$c
    Write-Host "Index $($i): '$($c)' (U+$($cp.ToString('X4')))"
}
