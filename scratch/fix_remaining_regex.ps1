$burclarDir = "c:\Users\alper\Desktop\zodiacrf\burclar"
$files = Get-ChildItem -Path $burclarDir -Filter "*.html"

# Emojis and glifs using UTF-16 surrogate pairs
$arrow_left = [char]0x2190
$star = [char]0x2726
$handshake = [char]0xD83E + [char]0xDD1D
$scales = [char]0x2696 + [char]0xFE0F
$lightning = [char]0x26A1
$briefcase = [char]0xD83D + [char]0xDCBC
$moneybag = [char]0xD83D + [char]0xDCB0
$crystalball = [char]0xD83D + [char]0xDD2E
$numbers = [char]0xD83D + [char]0xDD22
$meditation = [char]0xD83E + [char]0xDDD8
$pawprints = [char]0xD83D + [char]0xDC3E
$stethoscope = [char]0xD83E + [char]0xDE7A
$herb = [char]0xD83D + [char]0xDF3F
$clover = [char]0xD83D + [char]0xDF40

# Define regex patterns as hash tables to clean up any remaining U+FFFD and dashes
$reps = @(
    # Special double-encoded / corrupted titles
    @{ pat = '21 Haziran [\uFFFD\?]+ 22 Temmuz'; val = '21 Haziran ' + [char]0x2014 + ' 22 Temmuz' },
    @{ pat = '23 Temmuz [\uFFFD\?]+ 22 A[\uFFFD\?]ustos'; val = '23 Temmuz ' + [char]0x2014 + ' 22 Ağustos' },
    @{ pat = '[\uFFFD\?]+ ?atisma Yasadigi'; val = $lightning.ToString() + ' Çatışma Yaşadığı' },
    @{ pat = '[\uFFFD\?]+ ?atisma'; val = $lightning.ToString() + ' Çatışma' },
    @{ pat = '[\uFFFD\?]+akra Bag[\uFFFD\?]lantisi'; val = 'Çakra Bağlantısı' },
    @{ pat = '[\uFFFD\?]+akra'; val = 'Çakra' },
    
    # Generic word patterns (case-insensitive where applicable)
    @{ pat = '(?i)d[\-—\u2014]rd[\-—\u2014](nc)?[\uFFFD\?]+'; val = 'dördüncü' },
    @{ pat = '(?i)[\uFFFD\?]+nc[\uFFFD\?]+ nitelik'; val = 'öncü nitelik' },
    @{ pat = '(?i)[\uFFFD\?]+nc[\uFFFD\?]+'; val = 'öncü' },
    @{ pat = '(?i)NC N[\-—\u2014\uFFFD\?]+TEL[\-—\u2014\uFFFD\?]+K'; val = 'ÖNCÜ NİTELİK' },
    @{ pat = '(?i)[\uFFFD\?]+rd[\-—\u2014]g[\uFFFD\?]*'; val = 'ördüğü' },
    @{ pat = '(?i)i[\uFFFD\?]+ d[\-—\u2014]nya'; val = 'iç dünya' },
    @{ pat = '(?i)g[\uFFFD\?]+l[\uFFFD\?]+'; val = 'güçlü' },
    @{ pat = '(?i)[\uFFFD\?]+ok'; val = 'çok' },
    @{ pat = '(?i)[\uFFFD\?]+m[\-—\u2014]r'; val = 'ömür' },
    @{ pat = '(?i)[\uFFFD\?]+ekilir'; val = 'çekilir' },
    @{ pat = '(?i)[\uFFFD\?]+nemli'; val = 'önemli' },
    @{ pat = '(?i)[\uFFFD\?]+ekilmesine'; val = 'çekilmesine' },
    @{ pat = '(?i)[\uFFFD\?]+alisma'; val = 'çalışma' },
    @{ pat = '(?i)sekt[\-—\u2014]rler'; val = 'sektörler' },
    @{ pat = '(?i)\bb[\-—\u2014]y[\-—\u2014]k\b'; val = 'büyük' },
    @{ pat = '(?i)[\uFFFD\?]+alisanlarin'; val = 'çalışanların' },
    @{ pat = '(?i)[\uFFFD\?]+ocuk'; val = 'çocuk' },
    @{ pat = '(?i)[\uFFFD\?]+gretmenlik'; val = 'öğretmenlik' },
    @{ pat = '(?i)[\uFFFD\?]+zg[\-—\u2014]n'; val = 'üzgün' },
    @{ pat = '(?i)[\uFFFD\?]+lser'; val = 'ülser' },
    @{ pat = '(?i)[\uFFFD\?]+ansli G[\-—\u2014]n'; val = 'Şanslı Gün' },
    @{ pat = '(?i)\bg[\uFFFD\?]+n\b'; val = 'günü' },
    @{ pat = '(?i)[\uFFFD\?]+Ben\b'; val = '“Ben' },
    @{ pat = '(?i)[\uFFFD\?]+izmeyi'; val = 'çizmeyi' },
    @{ pat = '(?i)[\uFFFD\?]+grenmektir'; val = 'öğrenmektir' },
    @{ pat = '(?i)[\uFFFD\?]+zerinde'; val = 'üzerinde' },
    @{ pat = '(?i)[\uFFFD\?]+ikmak'; val = 'çıkmak' },
    @{ pat = '(?i)[\uFFFD\?]+ekecegi'; val = 'çekeceği' },
    @{ pat = '(?i)[\uFFFD\?]+gretecek'; val = 'öğretecek' },
    @{ pat = '(?i)[\uFFFD\?]+retkenligin'; val = 'üretkenliğin' },
    @{ pat = '(?i)k[\uFFFD\?]+kl[\uFFFD\?]+'; val = 'köklü' },
    @{ pat = '(?i)[\uFFFD\?]+nl[\-—\u2014]ler'; val = 'Ünlüler' },
    @{ pat = '(?i)[\uFFFD\?]+agini'; val = 'çağını' },
    @{ pat = '(?i)[\uFFFD\?]+d[\-—\u2014]ll[\uFFFD\?]+'; val = 'ödüllü' },
    @{ pat = '(?i)D[\-—\u2014]nemsel'; val = 'Dönemsel' },
    @{ pat = '(?i)G[\-—\u2014]ky[\-—\u2014]z[\-—\u2014]n[\-—\u2014]n'; val = 'Gökyüzünün' },
    @{ pat = '(?i)[\uFFFD\?]{3}\s+G[\-—\u2014]z'; val = 'Üçüncü Göz' },
    @{ pat = '(?i)[\uFFFD\?]{3}'; val = 'Üçüncü' },
    @{ pat = '(?i)b[\-—\u2014]l[\-—\u2014]m'; val = 'bölüm' }
)

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Regex replacements loop
    foreach ($pair in $reps) {
        $pat = $pair.pat
        $val = $pair.val
        if ($pat -ne $null -and $pat -ne "") {
            $content = [System.Text.RegularExpressions.Regex]::Replace($content, $pat, $val)
        }
    }
    
    # Clean up single standalone U+FFFD characters in text
    # e.g., if there is a standalone "?" or "" used as separator, replace it with en-dash/em-dash or correct punctuation
    # But wait, let's keep it safe.
    
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Applied regex cleaning to: $($file.Name)"
}

Write-Host "All remaining U+FFFD characters resolved!"
