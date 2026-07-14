$fffd = [char]0xFFFD
$inputStr = "Yenge" + $fffd
$pat = "Yenge\uFFFD"
$val = "Yengeç"
$result = [System.Text.RegularExpressions.Regex]::Replace($inputStr, $pat, $val)
Write-Host "Result: $result"
Write-Host "Length: $($result.Length)"
