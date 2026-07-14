$path = "c:\Users\alper\Desktop\zodiacrf\burclar\yengec.html"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# Characters
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

$fffd = [char]0xFFFD
$emdash = [char]0x2014
$emdash_str = [string]$emdash
$deg = [char]0x00B0
$sq = [char]0x27

# Define test regex replacements
$reps = @(
    # motto
    @{ pat = 'motto\s*>\s*[\uFFFD\?]+'; val = 'motto="“' },
    @{ pat = '[\uFFFD\?]+</p>'; val = '”</p>' },
    
    # date
    @{ pat = '(\d+)\s*[\uFFFD\?]+\s*(\d+)'; val = '$1 ' + $emdash_str + ' $2' },
    @{ pat = '([a-zA-Z\u00F6\u00FC\u011F\u0131\u015F\u00E7\u00D6\u00DC\u011E\u0130\u015E\u00C7]+)\s+[\uFFFD\?]+\s+(\d+)'; val = '$1 ' + $emdash_str + ' $2' },
    @{ pat = '(\d+)\s+[\uFFFD\?]+\s+([a-zA-Z\u00F6\u00FC\u011F\u0131\u015F\u00E7\u00D6\u00DC\u011E\u0130\u015E\u00C7]+)'; val = '$1 ' + $emdash_str + ' $2' },
    
    # güclü / gücü / gücünü / köklü
    @{ pat = '(?i)\bg[u\u00FCc\u00E7\uFFFD\?]*l[u\u00FC\uFFFD\?]*d[u\u00FC\uFFFD\?]*r\b'; val = 'g' + $u_k + $c_k + 'l' + $u_k + 'd' + $u_k + 'r' },
    @{ pat = '(?i)\bg[u\u00FCc\u00E7\uFFFD\?]*l[u\u00FC\uFFFD\?]*\b'; val = 'g' + $u_k + $c_k + 'l' + $u_k },
    @{ pat = '(?i)\bg[u\u00FCc\u00E7\uFFFD\?]{3}\b'; val = 'g' + $u_k + $c_k + 'l' + $u_k },
    @{ pat = '(?i)\bg[u\u00FCc\u00E7\uFFFD\?]{2}l[u\u00FC\uFFFD\?]*\b'; val = 'g' + $u_k + $c_k + 'l' + $u_k },
    @{ pat = '(?i)\bg[u\u00FCc\u00E7\uFFFD\?]{3}n[u\u00FC\uFFFD\?]*\b'; val = 'g' + $u_k + $c_k + 'l' + $u_k + 'n' + $u_k },
    
    # anaç / kiskanç / şans / çakra / ödem / özellik / önem
    @{ pat = 'ana[\uFFFD\?]+'; val = 'ana' + $c_k },
    @{ pat = 'tanr[i\u0131][\-—\u2014\uFFFD\?]+a'; val = 'tanr' + $i_n + $c_k + 'a' },
    @{ pat = '[\uFFFD\?]+ansli'; val = $s_k + 'ansl' + $i_n },
    @{ pat = '[\uFFFD\?]+ans'; val = $s_k + 'ans' },
    @{ pat = '[\uFFFD\?]+akra'; val = $c_k + 'akra' },
    @{ pat = '[\uFFFD\?]+dem'; val = $o_k + 'dem' },
    @{ pat = '[\uFFFD\?]+zellik'; val = $o_k + 'zellik' },
    @{ pat = '[\uFFFD\?]+nem'; val = $o_k + 'nem' },
    @{ pat = '[\uFFFD\?]+ok'; val = $c_k + 'ok' },
    @{ pat = '[\uFFFD\?]+ekil'; val = $c_k + 'ekil' }
)

foreach ($pair in $reps) {
    $content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, $pair.pat, $pair.val)
    [System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
}

# Run inspect
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$chars = $content.ToCharArray()
$found = 0
for ($i = 0; $i -lt $chars.Length; $i++) {
    if ([int]$chars[$i] -eq 0xFFFD) {
        $found++
        $start = [Math]::Max(0, $i - 15)
        $len = [Math]::Min($chars.Length - $start, 30)
        $snippet = $content.Substring($start, $len).Replace("`r", "").Replace("`n", " ")
        Write-Host "Index $($i): ... $($snippet) ..."
    }
}
Write-Host "Remaining U+FFFD in yengec.html: $($found)"
