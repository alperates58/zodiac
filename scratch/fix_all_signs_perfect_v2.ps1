$projectDir = "c:\Users\alper\Desktop\zodiacrf"
$files = Get-ChildItem -Path (Join-Path $projectDir "burclar") -Filter "*.html"
$evler = Get-ChildItem -Path (Join-Path $projectDir "evler") -Filter "*.html"
$allFiles = $files + $evler

# Character codes
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
$copy = [char]0x00A9
$star = [char]0x2726
$house = [char]0xD83C + [char]0xDFE0 # 🏠 House emoji

$reps = @(
    # 1. House emoji replacement (for g??? or similar)
    @{ pat = '(?i)g[\uFFFD\?]{2,4}'; val = $house.ToString() },
    
    # 2. General navigation and logos
    @{ pat = '[\uFFFD\?]+ Zodyak <span>Atlasi</span>'; val = $star.ToString() + ' Zodyak <span>Atlas' + $i_n + '</span>' },
    @{ pat = '[\uFFFD\?]+ Atlasa D[\uFFFD\?]+n'; val = $star.ToString() + ' Atlasa D' + $o_k + 'n' },
    @{ pat = 'Atlasa D[\uFFFD\?]+n'; val = 'Atlasa D' + $o_k + 'n' },
    
    # 3. Mottos and Quotes
    @{ pat = 'motto\s*=\s*[' + [char]0x22 + [char]0x27 + ']?[\uFFFD\?]+'; val = 'motto="“' },
    @{ pat = 'motto\s*>\s*[\uFFFD\?]+'; val = 'motto">“' },
    @{ pat = '[\uFFFD\?]+</p>'; val = '”</p>' },
    
    # 4. Dates & Numbers range separators
    @{ pat = '(\d+)\s*[\uFFFD\?]+\s*(\d+)'; val = '$1 ' + $emdash_str + ' $2' },
    @{ pat = '([a-zA-Z\u00F6\u00FC\u011F\u0131\u015F\u00E7\u00D6\u00DC\u011E\u0130\u015E\u00C7]+)\s+[\uFFFD\?]+\s+(\d+)'; val = '$1 ' + $emdash_str + ' $2' },
    @{ pat = '(\d+)\s+[\uFFFD\?]+\s+([a-zA-Z\u00F6\u00FC\u011F\u0131\u015F\u00E7\u00D6\u00DC\u011E\u0130\u015E\u00C7]+)'; val = '$1 ' + $emdash_str + ' $2' },
    
    # 5. Month spellings
    @{ pat = '(?i)Eyl[\-—\u2014]?l'; val = 'Eyl' + $u_k + 'l' },
    @{ pat = '(?i)Kas[\-—\u2014]?m'; val = 'Kas' + $i_n + 'm' },
    @{ pat = '(?i)Aral[\-—\u2014]?k'; val = 'Aral' + $i_n + 'k' },
    @{ pat = '(?i)Subat'; val = $s_b + 'ubat' },
    @{ pat = '(?i)May[\-—\u2014]?s'; val = 'May' + $i_n + 's' },
    @{ pat = '(?i)A[\uFFFD\?]+ustos'; val = 'A' + $g_k + 'ustos' },
    
    # 6. Specific word roots containing FFFD (Non-boundary)
    # güçlü / güçlüdür / gücü / gücünü
    @{ pat = '(?i)g[\uFFFD\?]+l[\uFFFD\?]+d[\uFFFD\?]+r'; val = 'g' + $u_k + $c_k + 'l' + $u_k + 'd' + $u_k + 'r' },
    @{ pat = '(?i)g[\uFFFD\?]+l[\uFFFD\?]+'; val = 'g' + $u_k + $c_k + 'l' + $u_k },
    @{ pat = '(?i)g[\uFFFD\?]+c[\uFFFD\?]+n[\uFFFD\?]+'; val = 'g' + $u_k + $c_k + 'l' + $u_k + 'n' + $u_k }, # Wait, gücünü or güçlü?
    # Let's specify gücünü and gücünü
    @{ pat = '(?i)g[\uFFFD\?]+c[\uFFFD\?]+n[\uFFFD\?]+'; val = 'g' + $u_k + 'c' + $u_k + 'n' + $u_k },
    @{ pat = '(?i)g[\uFFFD\?]+c[\uFFFD\?]+'; val = 'g' + $u_k + 'c' + $u_k },
    
    # köklü / özgünlüğü / özgün / üzgün
    @{ pat = '(?i)k[\uFFFD\?]+l[\uFFFD\?]+'; val = 'k' + $o_k + 'kl' + $u_k },
    @{ pat = '(?i)[\uFFFD\?]+zG[\uFFFD\?]+nl[\-—\u2014]?g[\uFFFD\?]+'; val = $o_k + 'zg' + $u_k + 'nl' + $u_k + $g_k + $u_k },
    @{ pat = '(?i)zGnl[\-—\u2014]?g[\uFFFD\?]+'; val = $o_k + 'zg' + $u_k + 'nl' + $u_k + $g_k + $u_k },
    @{ pat = 'stresli,\s+[\uFFFD\?]+zG[\uFFFD\?]+n'; val = 'stresli, ' + $u_k + 'zg' + $u_k + 'n' }, # üzgün
    @{ pat = '(?i)[\uFFFD\?]+zG[\uFFFD\?]+n'; val = $o_k + 'zg' + $u_k + 'n' }, # özgün
    
    # figürü / ömrünü / özgürlükçü
    @{ pat = '(?i)fig[\-—\u2014]?r[\uFFFD\?]+'; val = 'fig' + $u_k + 'r' + $u_k },
    @{ pat = '(?i)[\uFFFD\?]+m[\-—\u2014]?r[\-—\u2014]?n[\uFFFD\?]+'; val = $o_k + 'mr' + $u_k + 'n' + $u_k },
    @{ pat = '(?i)[\uFFFD\?]+zg[\-—\u2014]?r[\-—\u2014]?l[\-—\u2014]?k[\uFFFD\?]+'; val = $o_k + 'zg' + $u_k + 'rl' + $u_k + 'k' + $c_k + $u_k },
    
    # gençlik / ölümsüzlük / Uğurlu / Şanslı / Çarşamba
    @{ pat = '(?i)gen[\-—\u2014]?lik'; val = 'gen' + $c_k + 'lik' },
    @{ pat = '(?i)[\uFFFD\?]+l[\-—\u2014]?ms[\-—\u2014]?zl[\-—\u2014]?k'; val = $o_k + 'lümsüzlük' },
    @{ pat = '(?i)U[\uFFFD\?]+[Y\u011E]urlu'; val = 'U' + $g_k + 'urlu' },
    @{ pat = '(?i)[\uFFFD\?]+ansl[\uFFFD\?]+'; val = $s_k + 'ansl' + $i_n },
    @{ pat = '(?i)[\uFFFD\?]+arsamba'; val = $c_b + 'ar' + $s_k + 'amba' },
    
    # öncüsü / ödüllü / ömür / öncü / önel (öne) / özen
    @{ pat = '(?i)[\uFFFD\?]+nc[\uFFFD\?]+[\-—\u2014]?s[\uFFFD\?]+'; val = $o_k + 'nc' + $u_k + 's' + $u_k },
    @{ pat = '(?i)[\uFFFD\?]+d[\-—\u2014]?ll[\uFFFD\?]+'; val = $o_k + 'd' + $u_k + 'll' + $u_k },
    @{ pat = '(?i)[\uFFFD\?]+m[\-—\u2014]?r'; val = $o_k + 'm' + $u_k + 'r' },
    @{ pat = '(?i)[\uFFFD\?]+nc[\uFFFD\?]+'; val = $o_k + 'nc' + $u_k },
    @{ pat = '(?i)[\uFFFD\?]+ne\s+[\uFFFD\?]+ikar'; val = $o_k + 'ne ' + $c_k + 'ıkar' },
    @{ pat = '(?i)[\uFFFD\?]+zen'; val = $o_k + 'zen' },
    
    # üstüne / üst düzey / üstünde / üstlenildiği
    @{ pat = '(?i)[\uFFFD\?]+st[\-—\u2014]?ne'; val = $u_k + 'stüne' },
    @{ pat = '(?i)[\uFFFD\?]+st\s+d[\-—\u2014]?zey'; val = $u_k + 'st düzey' },
    @{ pat = '(?i)[\uFFFD\?]+st[\-—\u2014]?nde'; val = $u_k + 'stünde' },
    @{ pat = '(?i)[\uFFFD\?]+stlenildigi'; val = $u_k + 'stlenildiği' },
    
    # geçmişe / geçmişte
    @{ pat = '(?i)ge[\uFFFD\?]+mi[\uFFFD\?]+e'; val = 'ge' + $c_k + 'mişe' },
    @{ pat = '(?i)ge[\uFFFD\?]+mi[\uFFFD\?]+te'; val = 'ge' + $c_k + 'mişte' },
    
    # sağlığına / kemik / sözlü / kötülüğü / ödün / çatışmadan
    @{ pat = '(?i)sag[\uFFFD\?]+l[\uFFFD\?]+igina'; val = 'sa' + $g_k + 'l' + $i_n + $g_k + $i_n + 'na' },
    @{ pat = '(?i)s[\uFFFD\?]+zl[\uFFFD\?]+'; val = 's' + $o_k + 'zlü' },
    @{ pat = '(?i)k[\-—\u2014]?t[\-—\u2014]?l[\-—\u2014]?g[\uFFFD\?]+'; val = 'k' + $o_k + 't' + $u_k + 'l' + $u_k + $g_k + $u_k },
    @{ pat = '(?i)[\uFFFD\?]+d[\-—\u2014]?n\s+ver'; val = $o_k + 'dün ver' },
    @{ pat = '(?i)[\uFFFD\?]+atismadan'; val = $c_k + 'atışmadan' },
    
    # René Descartes
    @{ pat = 'Ren[\uFFFD\?]+\s+Descartes'; val = 'René Descartes' },
    @{ pat = 'D[\uFFFD\?]+s[\uFFFD\?]+n[\uFFFD\?]+yorum'; val = 'Düşünüyorum' },
    @{ pat = '[\uFFFD\?]+yleyse\s+varim'; val = 'öyleyse varım' },
    
    # çizerim / çizer / çelişir / çeşitlendirir / çatışma / öfke / öfkeli / öfkelenme
    @{ pat = '(?i)[\uFFFD\?]+izerim'; val = $c_k + 'izerim' },
    @{ pat = '(?i)[\uFFFD\?]+izer'; val = $c_k + 'izer' },
    @{ pat = '(?i)[\uFFFD\?]+elisir'; val = $c_k + 'elişir' },
    @{ pat = '(?i)[\uFFFD\?]+esitlendirir'; val = $c_k + 'eşitlendirir' },
    @{ pat = '(?i)[\uFFFD\?]+atisma'; val = $c_k + 'atışma' },
    @{ pat = '(?i)[\uFFFD\?]+fkelenme'; val = $o_k + 'fkelenme' },
    @{ pat = '(?i)[\uFFFD\?]+fkeli'; val = $o_k + 'fkeli' },
    @{ pat = '(?i)[\uFFFD\?]+fke'; val = $o_k + 'fke' },
    
    # bağlılık / bağlı
    @{ pat = '(?i)bag[\uFFFD\?]+l[\uFFFD\?]+l[\uFFFD\?]+k'; val = 'ba' + $g_k + 'l' + $i_n + 'l' + $i_n + 'k' },
    @{ pat = '(?i)bag[\uFFFD\?]+l[\uFFFD\?]+'; val = 'ba' + $g_k + 'l' + $i_n },
    
    # başlangıç / başlangıçlar
    @{ pat = '(?i)ba[\uFFFD\?]+langi[\uFFFD\?]+'; val = 'ba' + $s_k + 'lang' + $i_n + $c_k },
    
    # dış görünüş / dış
    @{ pat = '(?i)d[\uFFFD\?]+[\s_]+g[\uFFFD\?]+r[\uFFFD\?]+n[\uFFFD\?]+'; val = 'dış görünüş' },
    @{ pat = '(?i)d[\uFFFD\?]+\s+'; val = 'dış ' },
    
    # iç dünya / içsel
    @{ pat = '(?i)i[\uFFFD\?]+\s+d[\uFFFD\?]+nya'; val = 'iç dünya' },
    @{ pat = '(?i)i[\uFFFD\?]+sel'; val = 'içsel' },
    
    # tanrıça / kıskanç
    @{ pat = '(?i)tanr[i\u0131][\-—\u2014\uFFFD\?]+a'; val = 'tanrıça' },
    @{ pat = '(?i)kiskan[\uFFFD\?]+'; val = 'kıskanç' },
    @{ pat = '(?i)ana[\uFFFD\?]+'; val = 'ana' + $c_k },
    @{ pat = '(?i)bur[\uFFFD\?]+'; val = 'bur' + $c_k },
    
    # copyright / footer
    @{ pat = '[\uFFFD\?]+\s+2026\s+Zodyak'; val = $copy.ToString() + ' 2026 Zodyak' },
    @{ pat = 'Zodyak Atlasi\s+[\uFFFD\?]+\s+G'; val = 'Zodyak Atlası ' + $emdash_str + ' G' }
)

foreach ($file in $allFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Run regex replacements
    foreach ($pair in $reps) {
        $pat = $pair.pat
        $val = $pair.val
        if ($pat -ne $null -and $pat -ne "") {
            $content = [System.Text.RegularExpressions.Regex]::Replace($content, $pat, $val)
        }
    }
    
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Regex fixes applied to: $($file.Name)"
}

Write-Host "`nAll files perfect fix complete!"
