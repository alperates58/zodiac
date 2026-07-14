$burclarDir = "c:\Users\alper\Desktop\zodiacrf\burclar"
$files = Get-ChildItem -Path $burclarDir -Filter "*.html"

# Characters
$fffd = [char]0xFFFD
$emdash = [char]0x2014
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
$emdash_str = [string]$emdash

$dq = [char]0x22

# We define literal string replacements
$reps = @(
    # Brand and Nav
    @("$fffd Atlasa D$fffdn", "$arrow_left Atlasa D${o_k}n"),
    @("$fffd Atlasa D${o_k}n", "$arrow_left Atlasa D${o_k}n"),
    @("$fffd Zodyak <span>Atlasi</span>", "$star Zodyak <span>Atlas${i_n}</span>"),
    @("$fffd Zodyak", "$star Zodyak"),
    @("Zodyak <span>Atlasi</span>", "Zodyak <span>Atlas${i_n}</span>"),
    
    # Sign specific corrupted words
    @("Yenge$fffd", "Yenge${c_k}"),
    @("Ko$fffd", "Ko${c_k}"),
    @("Bo${fffd}a", "Bo${g_k}a"),
    @("Ba${fffd}ak", "Ba${s_k}ak"),
    @("O${fffd}lak", "O${g_k}lak"),
    @("Bal${fffd}k", "Bal${i_n}k"),
    @("Bal${fffd}K", "Bal${i_n}k"),
    @("Tarih${fffd}i", "Tarih${c_k}i"),
    @("ge${fffd}misin", "ge${c_k}mi${s_k}in"),
    @("muhta$fffd", "muhta${c_k}"),
    @(" i$fffd ", " i${c_k} "),
    @("i${fffd} d${u_k}nya", "i${c_k} d${u_k}nya"),
    @("i${fffd} d${emdash}nya", "i${c_k} d${u_k}nya"),
    @("G${fffd}m${fffd}s", "G${u_k}m${u_k}s"),
    @("g${fffd}n${fffd}", "g${u_k}n${u_k}"),
    @("g${fffd}${fffd}", "g${u_k}${c_k}"),
    @("d${fffd}nem", "d${o_k}nem"),
    @("b${fffd}t${fffd}n", "b${u_k}t${u_k}n"),
    @("${fffd}zellik", "${o_k}zellik"),
    @("${fffd}nemli", "${o_k}nemli"),
    @("s${fffd}z", "s${o_k}z"),
    @("Y${fffd}nelim", "Y${o_k}nelim"),
    @("k${fffd}k", "k${o_k}"),
    @("l${fffd}ks", "l${u_k}s"),
    @("g${fffd}venlik", "g${u_k}venlik"),
    @("Y${fffd}netici", "Y${o_k}netici"),
    @("g${fffd}c${fffd}", "g${u_k}c${u_k}"),
    @("y${fffd}ksek", "y${u_k}sek"),
    @("sorumlulu${fffd}u", "sorumlulu${g_k}u"),
    @("de${fffd}er", "de${g_k}er"),
    @("de${fffd}i${fffd}", "de${g_k}i${s_k}"),
    @("${fffd}nce", "${o_k}nce"),
    @("${fffd}rne${fffd}i", "${o_b}rne${g_k}i"),
    @("${fffd}rne${fffd}iin", "${o_b}rne${g_k}in"),
    @("${fffd}rne${fffd}in", "${o_b}rne${g_k}in"),
    
    # Headings and emojis
    @("g${fffd}${fffd}${fffd} En Iyi Anlastigi", "$handshake En Iyi Anlast${i_n}g${i_n}"),
    @("g${fffd}${fffd}${fffd} Dengeleyen", "$scales Dengeleyen"),
    @("${fffd}${fffd} Dengeleyen", "$scales Dengeleyen"),
    @("${fffd} ${fffd}atisma Yasadigi", "$lightning ${c_b}at${i_n}sma Ya${s_k}ad${i_n}g${i_n}"),
    @("${fffd} ${fffd}atisma", "$lightning ${c_b}at${i_n}sma"),
    @("g${fffd}${fffd}${fffd} Basarili", "$briefcase Ba${s_k}ar${i_n}l${i_n}"),
    @("g${fffd}${fffd}${fffd} Finansal", "$moneybag Finansal"),
    @("g${fffd}${fffd}${fffd} Ezoterik", "$numbers Ezoterik"),
    @("g${fffd}${fffd}${fffd}${fffd} Manevi Mantrasi", "$meditation Manevi Mantras${i_n}"),
    @("g${fffd}${fffd}${fffd} ${fffd}${fffd}amanik", "$pawprints ${s_b}amanik"),
    @("g${fffd}${fffd}${fffd} Beden", "$stethoscope Beden"),
    @("${fffd}${fffd} Beden", "$stethoscope Beden"),
    @("${fffd}${fffd}ifali", "$herb ${s_b}ifal${i_n}"),
    @("${fffd}${fffd}ifaci", "${s_b}ifac${i_n}"),
    @("${fffd}${fffd}ans Elementleri", "$clover ${s_b}ans Elementleri"),
    @("${fffd}akra", "${c_b}akra"),
    @("Alper ATE${fffd}${fffd}", "Alper ATE${s_b}"),
    
    # Dash corruptions
    @("d-rd-nc$fffd", "d${o_k}rd${u_k}nc${u_k}"),
    @("d${emdash}rd${emdash}nc$fffd", "d${o_k}rd${u_k}nc${u_k}"),
    @("d-rd-nc", "d${o_k}rd${u_k}nc${u_k}"),
    @("d${emdash}rd${emdash}nc", "d${o_k}rd${u_k}nc${u_k}"),
    @("d${emdash}rd${emdash}${o_k}nc${u_k}$fffd", "d${o_k}rd${u_k}nc${u_k}"),
    @("d-rd-nc$fffd", "d${o_k}rd${u_k}nc${u_k}"),
    @("d${emdash}rd${emdash}${o_k}nc${u_k}", "d${o_k}rd${u_k}nc${u_k}"),
    @("NC N${fffd}TEL${fffd}K", "${o_b}NC${u_b} N${i_b}TEL${i_b}K"),
    @("NC N-TEL-K", "${o_b}NC${u_b} N${i_b}TEL${i_b}K"),
    @("NC N${emdash}TEL${emdash}K", "${o_b}NC${u_b} N${i_b}TEL${i_b}K"),
    @("nc$fffd Nitelik", "${o_b}nc${u_b} Nitelik"),
    @("${fffd}nc${fffd} Nitelik", "${o_b}nc${u_b} Nitelik"),
    @("${fffd}nc${fffd} Nitelik", "${o_b}nc${u_b} Nitelik"),
    @("nc", "${o_k}nc${u_k}"),
    @("rd-g$fffd", "${o_k}rd${u_k}g${u_k}"),
    @("rd${emdash}g$fffd", "${o_k}rd${u_k}g${u_k}"),
    @("rd${emdash}g", "${o_k}rd${u_k}g${u_k}"),
    @("i d-nya", "i${c_k} d${u_k}nya"),
    @("i d${emdash}nya", "i${c_k} d${u_k}nya"),
    @("g(${u_k})l(${u_k})-d-r", "g${u_k}${c_k}l${u_k}d${u_k}r"),
    @("g(${u_k})l(${u_k})${emdash}d${emdash}r", "g${u_k}${c_k}l${u_k}d${u_k}r"),
    @("gl-d-r", "g${u_k}${c_k}l${u_k}d${u_k}r"),
    @("gl${emdash}d${emdash}r", "g${u_k}${c_k}l${u_k}d${u_k}r"),
    @("gl", "g${u_k}${c_k}l${u_k}"),
    @("gc", "g${u_k}c${u_k}"),
    @("ge-miste", "ge${c_k}mi${s_k}te"),
    @("ge${emdash}miste", "ge${c_k}mi${s_k}te"),
    @("hi-bir", "hi${c_k}bir"),
    @("hi${emdash}bir", "hi${c_k}bir"),
    @("ana davranir", "ana${c_k} davranir"),
    @("ana davran${i_n}r", "ana${c_k} davran${i_n}r"),
    @("g-r-nmesine", "g${o_k}r${u_k}nmesine"),
    @("g${emdash}r${emdash}nmesine", "g${o_k}r${u_k}nmesine"),
    @("G-n", "G${u_k}n"),
    @("G${emdash}n", "G${u_k}n"),
    @("G-ky-z-n-n", "G${o_k}ky${u_k}z${u_k}n${u_k}n"),
    @("G${emdash}ky${emdash}z${emdash}n${emdash}n", "G${o_k}ky${u_k}z${u_k}n${u_k}n"),
    @("b-l-m", "b${o_k}l${u_k}m"),
    @("b${emdash}l${emdash}m", "b${o_k}l${u_k}m"),
    
    # Raw question marks inside text (restoring original Turkish letters)
    @("Yenge? burcu", "Yenge${c_k} burcu"),
    @("Tarih?i", "Tarih${c_k}i"),
    @("ge?misin", "ge${c_k}mi${s_k}in"),
    @("muhta?", "muhta${c_k}"),
    @("i? d?nya", "i${c_k} d${u_k}nya"),
    @("g?venlik", "g${u_k}venlik"),
    @("Y?netici", "Y${o_k}netici"),
    @("g?c?", "g${u_k}c${u_k}"),
    @("y?ksek", "y${u_k}sek"),
    @("?rd?g?", "${o_k}rd${u_k}g${u_k}")
)

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Literal replacements loop
    foreach ($pair in $reps) {
        $pat = [string]$pair[0]
        $val = [string]$pair[1]
        if ($pat -ne "") {
            $content = $content.Replace($pat, $val)
        }
    }

    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Fixed literal words in: $($file.Name)"
}

Write-Host "All literal word corrections complete!"
