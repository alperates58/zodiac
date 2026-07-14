$projectDir = "c:\Users\alper\Desktop\zodiacrf"
$files = Get-ChildItem -Path $projectDir -Recurse -File

$fffd = [char]0xFFFD

foreach ($file in $files) {
    # Skip binary files or node_modules/git if any
    if ($file.FullName -like "*\node_modules\*" -or $file.FullName -like "*\.git\*" -or $file.FullName -like "*\scratch\*") {
        continue
    }
    
    # Check if text file
    try {
        $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
        $chars = $content.ToCharArray()
        $count = 0
        for ($i = 0; $i -lt $chars.Length; $i++) {
            if ([int]$chars[$i] -eq 0xFFFD) {
                $count++
            }
        }
        if ($count -gt 0) {
            Write-Host "File: $($file.FullName.Replace($projectDir, '')) - U+FFFD Count: $($count)"
        }
    } catch {
        # Skip binary files
    }
}
