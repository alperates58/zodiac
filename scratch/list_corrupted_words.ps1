$burclarDir = "c:\Users\alper\Desktop\zodiacrf\burclar"
$files = Get-ChildItem -Path $burclarDir -Filter "*.html"

$fffd = [char]0xFFFD

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Use regex to find all words containing U+FFFD or standalone ? used as corruption
    # Word character class in .NET regex: \w, plus Turkish chars, plus U+FFFD and ?
    # Let's match any sequence of chars that has at least one U+FFFD
    $pattern = '\b[a-zA-Z0-9\u00E7\u00C7\u011F\u011E\u0131\u0130\u00F6\u00D6\u015F\u015E\u00FC\u00DC\uFFFD\-\u2014\?]*\uFFFD[a-zA-Z0-9\u00E7\u00C7\u011F\u011E\u0131\u0130\u00F6\u00D6\u015F\u015E\u00FC\u00DC\uFFFD\-\u2014\?]*\b'
    
    $matches = [System.Text.RegularExpressions.Regex]::Matches($content, $pattern)
    $words = @()
    foreach ($m in $matches) {
        $words += $m.Value
    }
    
    $uniqueWords = $words | Select-Object -Unique
    if ($uniqueWords.Count -gt 0) {
        Write-Host "File: $($file.Name)"
        foreach ($w in $uniqueWords) {
            # Print char codes of the corrupted word to be 100% sure
            $charCodes = ""
            foreach ($c in $w.ToCharArray()) {
                $cp = [int]$c
                $charCodes += "U+$($cp.ToString('X4')) "
            }
            Write-Host "  Word: '$($w)' ($($charCodes.Trim()))"
        }
    }
}
