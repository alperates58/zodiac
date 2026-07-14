$burclarDir = "c:\Users\alper\Desktop\zodiacrf\burclar"
$files = Get-ChildItem -Path $burclarDir -Filter "*.html"

$reps = @(
    # Degree symbols
    @{ pat = '(\d+)[\uFFFD\?]+'; val = '$1°' },
    
    # Prefix corruptions
    @{ pat = '[\uFFFD\?]+(s|S)ans'; val = 'şans' },
    @{ pat = '[\uFFFD\?]+(a|A)kra'; val = 'çakra' },
    @{ pat = '[\uFFFD\?]+(c|C)ocuk'; val = 'çocuk' },
    @{ pat = '[\uFFFD\?]+(o|O)k\b'; val = 'çok' },
    @{ pat = '[\uFFFD\?]+(o|O)n\b'; val = 'ön' },
    @{ pat = '[\uFFFD\?]+(o|O)nce'; val = 'önce' },
    @{ pat = '[\uFFFD\?]+(o|O)nem'; val = 'önem' },
    @{ pat = '[\uFFFD\?]+(o|O)m[\-—\u2014]r'; val = 'ömür' },
    @{ pat = '[\uFFFD\?]+(e|E)kil'; val = 'çekil' },
    @{ pat = '[\uFFFD\?]+(a|A)lisa'; val = 'çalışa' },
    @{ pat = '[\uFFFD\?]+(a|A)lism'; val = 'çalışm' },
    @{ pat = '[\uFFFD\?]+(g|G)ret'; val = 'öğret' },
    @{ pat = '[\uFFFD\?]+(z|Z)g[\-—\u2014]n'; val = 'üzgün' },
    @{ pat = '[\uFFFD\?]+(l|L)ser'; val = 'ülser' },
    @{ pat = '[\uFFFD\?]+(u|U)yelerini'; val = 'üyelerini' },
    @{ pat = '[\uFFFD\?]+(i|I)zmeyi'; val = 'çizmeyi' },
    @{ pat = '[\uFFFD\?]+(i|I)kmak'; val = 'çıkmak' },
    @{ pat = '[\uFFFD\?]+(e|E)cegi'; val = 'çekeceği' },
    @{ pat = '[\uFFFD\?]+(a|A)gini'; val = 'çağını' },
    @{ pat = '[\uFFFD\?]+(d|D)[\-—\u2014]ll'; val = 'ödüll' },
    @{ pat = '[\uFFFD\?]+(u|U)nl'; val = 'ünl' },
    @{ pat = '[\uFFFD\?]+(e|E)kic'; val = 'çekic' },
    @{ pat = '[\uFFFD\?]+(e|E)y\b'; val = 'şey' },
    @{ pat = '[\uFFFD\?]+(u|U)phe'; val = 'şüphe' },
    @{ pat = '[\uFFFD\?]+(i|I)ddet'; val = 'şiddet' },
    @{ pat = '[\uFFFD\?]+(e|E)nlik'; val = 'şenlik' },
    @{ pat = '[\uFFFD\?]+(o|O)z'; val = 'çöz' },
    @{ pat = '[\uFFFD\?]+(i|I)ft'; val = 'çift' },
    @{ pat = '[\uFFFD\?]+(e|E)vki'; val = 'şevki' },
    
    # Suffix corruptions
    @{ pat = 'ihtiya[\uFFFD\?]+'; val = 'ihtiyaç' },
    @{ pat = 'yenge[\uFFFD\?]+'; val = 'yengeç' },
    @{ pat = 'ko[\uFFFD\?]+'; val = 'koç' },
    @{ pat = 'tanri[\-—\u2014]a'; val = 'tanrıça' },
    @{ pat = 'A[\uFFFD\?]+a\b'; val = 'Ancak' },
    @{ pat = 'k[\uFFFD\?]+s[\uFFFD\?]+k'; val = 'küçük' },
    @{ pat = 'd-rd-\?'; val = 'dördüncü' },
    @{ pat = 'd-rd-[\uFFFD\?]{1,2}'; val = 'dördüncü' },
    @{ pat = '[\uFFFD\?]{1,2}[\uFFFD\?]{1,2} Nitelik'; val = 'Öncü Nitelik' },
    @{ pat = '[\uFFFD\?]{1,2}[\uFFFD\?]{1,2} niteligin'; val = 'öncü niteliğin' },
    @{ pat = '[\uFFFD\?]+rdg'; val = 'ördüğü' },
    @{ pat = 'gl[\uFFFD\?]+'; val = 'güçlü' },
    @{ pat = 'gl-d-r'; val = 'güçlüdür' },
    @{ pat = 'gl[\-—\u2014]d[\-—\u2014]r'; val = 'güçlüdür' },
    @{ pat = 'dem'; val = 'ödem' }
)

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Regex replacements
    foreach ($pair in $reps) {
        $pat = $pair.pat
        $val = $pair.val
        if ($pat -ne $null -and $pat -ne "") {
            $content = [System.Text.RegularExpressions.Regex]::Replace($content, $pat, $val)
        }
    }
    
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Applied regex cleaning stage 2 to: $($file.Name)"
}

Write-Host "Stage 2 U+FFFD regex resolution complete!"
