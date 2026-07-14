$burclarDir = "c:\Users\alper\Desktop\zodiacrf\burclar"
$files = Get-ChildItem -Path $burclarDir -Filter "*.html"

# Turkish chars
$c_k = [char]0x00E7
$c_b = [char]0x00C7
$g_k = [char]0x011F
$g_b = [char]0x011E
$i_n = [char]0x0131
$i_b = [char]0x0130
$o_k = [char]0x00F6
$o_b = [char]0x00D6
$s_k = [char]0x015F
$s_b = [char]0x015E
$u_k = [char]0x00FC
$u_b = [char]0x00DC

$glyphs = @{
    "koc.html" = [char]0x2648
    "boga.html" = [char]0x2649
    "ikizler.html" = [char]0x264A
    "yengec.html" = [char]0x264B
    "aslan.html" = [char]0x264C
    "basak.html" = [char]0x264D
    "terazi.html" = [char]0x264E
    "akrep.html" = [char]0x264F
    "yay.html" = [char]0x2650
    "oglak.html" = [char]0x2651
    "kova.html" = [char]0x2652
    "balik.html" = [char]0x2653
}

# Special chars & emojis using surrogate pairs
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
$emdash = [char]0x2014

$dq = [char]0x22

$reps = @(
    @('\uFFFD Atlasa D\uFFFDn', "$arrow_left Atlasa D${o_k}n"),
    @('\uFFFD Zodyak <span>Atlasi</span>', "$star Zodyak <span>Atlas${i_n}</span>"),
    @('g\?\?\? En Iyi Anlastigi', "$handshake En Iyi Anlast${i_n}g${i_n}"),
    @('g\?\?\? Dengeleyen', "$scales Dengeleyen"),
    @('\?\? Dengeleyen', "$scales Dengeleyen"),
    @('\? \?atisma Yasadigi', "$lightning ${c_b}at${i_n}sma Ya${s_k}ad${i_n}g${i_n}"),
    @('\? \?atisma', "$lightning ${c_b}at${i_n}sma"),
    @('g\?\?\? Basarili', "$briefcase Ba${s_k}ar${i_n}l${i_n}"),
    @('g\?\?\? Finansal', "$moneybag Finansal"),
    @('<div class=' + $dq + 'tarot-symbol' + $dq + '>g\?\?\?</div>', '<div class=' + $dq + 'tarot-symbol' + $dq + '>' + $crystalball + '</div>'),
    @('<div class=' + $dq + 'tarot-symbol' + $dq + '>\?\?</div>', '<div class=' + $dq + 'tarot-symbol' + $dq + '>' + $crystalball + '</div>'),
    @('g\?\?\? Ezoterik', "$numbers Ezoterik"),
    @('g\?\?\?\? Manevi Mantrasi', "$meditation Manevi Mantras${i_n}"),
    @('g\?\?\? \?\?amanik', "$pawprints ${s_b}amanik"),
    @('g\?\?\? Beden', "$stethoscope Beden"),
    @('\?\? Beden', "$stethoscope Beden"),
    @('\?\?ifali', "$herb ${s_b}ifal${i_n}"),
    @('\?\?ifaci', "${s_b}ifac${i_n}"),
    @('\?\?ans Elementleri', "$clover ${s_b}ans Elementleri"),
    @('\?akra', "${c_b}akra"),
    @('Alper ATE\?\?', "Alper ATE${s_b}"),
    
    # Unicode replacement character U+FFFD (escaped as \uFFFD in .NET Regex)
    @('Yenge\uFFFD', "Yenge${c_k}"),
    @('Ko\uFFFD', "Ko${c_k}"),
    @('Bo\uFFFDa', "Bo${g_k}a"),
    @('Ba\uFFFDak', "Ba${s_k}ak"),
    @('O\uFFFDlak', "O${g_k}lak"),
    @('Bal\uFFFDk', "Bal${i_n}k"),
    @('Bal\uFFFDK', "Bal${i_n}k"),
    @('Tarih\uFFFDi', "Tarih${c_k}i"),
    @('ge\uFFFDmisin', "ge${c_k}mi${s_k}in"),
    @('muhta\uFFFD', "muhta${c_k}"),
    @('\bi\uFFFD\b', "i${c_k}"),
    @('G\uFFFDm\uFFFDs', "G${u_k}m${u_k}s"),
    @('g\uFFFDn\uFFFD', "g${u_k}n${u_k}"),
    @('g\uFFFD\uFFFD', "g${u_k}${c_k}"),
    @('d\uFFFDnem', "d${o_k}nem"),
    @('b\uFFFDt\uFFFDn', "b${u_k}t${u_k}n"),
    @('\b\uFFFDzellik', "${o_k}zellik"),
    @('\b\uFFFDnemli', "${o_k}nemli"),
    @('\bs\uFFFDz\b', "s${o_k}z"),
    @('Y\uFFFDnelim', "Y${o_k}nelim"),
    @('k\uFFFDk', "k${o_k}"),
    @('l\uFFFDks', "l${u_k}s"),
    @('g\uFFFDvenlik', "g${u_k}venlik"),
    @('Y\uFFFDnetici', "Y${o_k}netici"),
    @('g\uFFFDc\uFFFD', "g${u_k}c${u_k}"),
    @('y\uFFFDksek', "y${u_k}sek"),
    @('\uFFFDrd\uFFFDu\uFFFDu', "${o_k}rd${u_k}g${u_k}"),
    @('\uFFFDrd\uFFFDu', "${o_k}rd${u_k}"),
    @('sorumlulu\uFFFDu', "sorumlulu${g_k}u"),
    @('de\uFFFDer', "de${g_k}er"),
    @('de\uFFFDi\uFFFD', "de${g_k}i${s_k}"),
    @('\b\uFFFDnce\b', "${o_k}nce"),
    @('\b\uFFFDrne\uFFFDi\b', "${o_b}rne${g_k}i"),
    @('\b\uFFFDrne\uFFFDiin\b', "${o_b}rne${g_k}in"),
    @('\b\uFFFDrne\uFFFDin\b', "${o_b}rne${g_k}in"),
    @('Atlasa D\uFFFDn', "Atlasa D${o_k}n"),
    @('\b\uFFFD\b', [string]$emdash)
)

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # 1. Glyphs kurtarma
    $fileName = $file.Name.ToLower()
    if ($glyphs.ContainsKey($fileName)) {
        $correctGlyph = [string]$glyphs[$fileName]
        $pattern = '(?s)<div class=' + $dq + 'hero-glyph' + $dq + '>.*?</div>'
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, $pattern, '<div class=' + $dq + 'hero-glyph' + $dq + '>' + $correctGlyph + '</div>')
    }

    # 2. Kelime ve Emoji Düzeltmeleri
    foreach ($pair in $reps) {
        $pat = [string]$pair[0]
        $val = [string]$pair[1]
        if ($pat -ne "") {
            $content = [System.Text.RegularExpressions.Regex]::Replace($content, $pat, $val)
        }
    }

    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Fixed corruptions in: $($file.Name)"
}

Write-Host "All corrections complete!"
