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

$emdash = [char]0x2014
$emdash_str = [string]$emdash
$dq = [char]0x22

$reps = @(
    # 1. Unicode replacement char (\uFFFD) ve Başlık/Emoji kurtarma
    @('\uFFFD Atlasa D\uFFFDn', "← Atlasa D${o_k}n"),
    @('\uFFFD Zodyak <span>Atlasi</span>', "✦ Zodyak <span>Atlas${i_n}</span>"),
    @('\uFFFD Zodyak', "✦ Zodyak"),
    @('zodyak <span>atlasi</span>', "zodyak <span>atlas${i_n}</span>"),
    @('Zodyak <span>Atlasi</span>', "Zodyak <span>Atlas${i_n}</span>"),
    @('\uFFFDHissederim', "“Hissederim"),
    @('Hissederim ve Korurum\uFFFD', "Hissederim ve Korurum”"),
    @('Hissederim ve Korurum', "Hissederim ve Korurum"),
    @('21 Haziran \\u2014 22 Temmuz', '21 Haziran ' + $emdash_str + ' 22 Temmuz'),
    @('21 Haziran \\? 22 Temmuz', '21 Haziran ' + $emdash_str + ' 22 Temmuz'),
    @('21 Haziran ' + $emdash_str + ' 22 Temmuz', '21 Haziran ' + $emdash_str + ' 22 Temmuz'),
    
    # 2. U+FFFD ile bozulan kelimeler
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
    
    # 3. İki kelime arasında veya kelime ortasında kalıp em-dash (—) veya tire (-) olmuş harfler
    @('d-rd-nc\uFFFD', "d${o_k}rd${u_k}nc${u_k}"),
    @('d' + $emdash_str + 'rd' + $emdash_str + 'nc\uFFFD', "d${o_k}rd${u_k}nc${u_k}"),
    @('d-rd-nc', "d${o_k}rd${u_k}nc${u_k}"),
    @('d' + $emdash_str + 'rd' + $emdash_str + 'nc', "d${o_k}rd${u_k}nc${u_k}"),
    @('\bNC N\uFFFDTEL\uFFFDK\b', "${o_b}NC${u_b} N${i_b}TEL${i_b}K"),
    @('\bNC N-TEL-K\b', "${o_b}NC${u_b} N${i_b}TEL${i_b}K"),
    @('\bNC N' + $emdash_str + 'TEL' + $emdash_str + 'K\b', "${o_b}NC${u_b} N${i_b}TEL${i_b}K"),
    @('\bnc\b', "${o_k}nc${u_k}"),
    @('\b\uFFFDnc\uFFFD\b', "${o_k}nc${u_k}"),
    @('\brd-g\uFFFD', "${o_k}rd${u_k}g${u_k}"),
    @('\brd' + $emdash_str + 'g\uFFFD', "${o_k}rd${u_k}g${u_k}"),
    @('\brd' + $emdash_str + 'g', "${o_k}rd${u_k}g${u_k}"),
    @('\bi d-nya\b', "i${c_k} d${u_k}nya"),
    @('\bi d' + $emdash_str + 'nya\b', "i${c_k} d${u_k}nya"),
    @('g(|u)l(|u)-d-r', "g${u_k}${c_k}l${u_k}d${u_k}r"),
    @('g(|u)l(|u)' + $emdash_str + 'd' + $emdash_str + 'r', "g${u_k}${c_k}l${u_k}d${u_k}r"),
    @('gl-d-r', "g${u_k}${c_k}l${u_k}d${u_k}r"),
    @('gl' + $emdash_str + 'd' + $emdash_str + 'r', "g${u_k}${c_k}l${u_k}d${u_k}r"),
    @('gl', "g${u_k}${c_k}l${u_k}"),
    @('gc', "g${u_k}c${u_k}"),
    @('ge-miste', "ge${c_k}mi${s_k}te"),
    @('ge' + $emdash_str + 'miste', "ge${c_k}mi${s_k}te"),
    @('hi-bir', "hi${c_k}bir"),
    @('hi' + $emdash_str + 'bir', "hi${c_k}bir"),
    @('\bana\b davranir', "ana${c_k} davranir"),
    @('\bana\b davran${i_n}r', "ana${c_k} davran${i_n}r"),
    @('g-r-nmesine', "g${o_k}r${u_k}nmesine"),
    @('g' + $emdash_str + 'r' + $emdash_str + 'nmesine', "g${o_k}r${u_k}nmesine"),
    @('G-n', "G${u_k}n"),
    @('G' + $emdash_str + 'n', "G${u_k}n"),
    @('G-ky-z-n-n', "G${o_k}ky${u_k}z${u_k}n${u_k}n"),
    @('G' + $emdash_str + 'ky' + $emdash_str + 'z' + $emdash_str + 'n' + $emdash_str + 'n', "G${o_k}ky${u_k}z${u_k}n${u_k}n"),
    @('\b-nc-\b', "${o_k}nc${u_k}"),
    @('\b' + $emdash_str + 'nc' + $emdash_str + '\b', "${o_k}nc${u_k}"),
    @('\b-nc\uFFFD', "${o_k}nc${u_k}"),
    @('\b' + $emdash_str + 'nc\uFFFD', "${o_k}nc${u_k}"),
    @('\b-nc\b', "${o_k}nc${u_k}"),
    @('\b' + $emdash_str + 'nc\b', "${o_k}nc${u_k}"),
    @('b-l-m', "b${o_k}l${u_k}m"),
    @('b' + $emdash_str + 'l' + $emdash_str + 'm', "b${o_k}l${u_k}m")
)

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Kelime ve karakter düzeltmeleri
    foreach ($pair in $reps) {
        $pat = [string]$pair[0]
        $val = [string]$pair[1]
        if ($pat -ne "") {
            $content = [System.Text.RegularExpressions.Regex]::Replace($content, $pat, $val)
        }
    }

    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Fixed final encodings in: $($file.Name)"
}

Write-Host "All final encoding corrections complete!"
