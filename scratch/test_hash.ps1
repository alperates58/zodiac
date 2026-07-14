$reps = @(
    @{ pat = "pattern1"; val = "replace1" },
    @{ pat = "pattern2"; val = "replace2" }
)
Write-Host "pat: $($reps[0].pat)"
Write-Host "val: $($reps[0].val)"
