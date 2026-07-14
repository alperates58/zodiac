$arr = @(
    ,("pattern1", "replace1"),
    ,("pattern2", "replace2")
)
Write-Host "arr[0] is array: $($arr[0] -is [Array])"
Write-Host "arr[0][0]: $($arr[0][0])"
Write-Host "arr[0][1]: $($arr[0][1])"
