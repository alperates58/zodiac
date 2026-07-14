$fffd = [char]0xFFFD
$inputStr = "Yenge" + $fffd
$pattern = "Yenge" + $fffd
$result = $inputStr.Replace($pattern, "Yengeç")
Write-Host "Result: $result"
Write-Host "Length: $($result.Length)"
