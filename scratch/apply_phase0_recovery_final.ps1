$projectDir = "c:\Users\alper\Desktop\zodiacrf"

# Helper for meta charset injection
function Inject-MetaCharset($filePath) {
    $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
    
    $dq = [char]0x22
    $sq = [char]0x27
    $pattern = '<meta\s+charset=[' + $dq + $sq + ']?UTF-8[' + $dq + $sq + ']?\s*/?>'
    
    if ($content -notmatch $pattern) {
        $metaStr = '<head>' + [char]0x0D + [char]0x0A + '  <meta charset=' + $dq + 'UTF-8' + $dq + '>'
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, '(?i)<head>', $metaStr)
        [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Injected meta charset into: $filePath"
    }
}

# Helper for ANSI to UTF-8 conversion
function Convert-ANSI-To-UTF8($filePath) {
    $enc1254 = [System.Text.Encoding]::GetEncoding(1254)
    $utf8 = [System.Text.Encoding]::UTF8
    
    $text = [System.IO.File]::ReadAllText($filePath, $enc1254)
    [System.IO.File]::WriteAllText($filePath, $text, $utf8)
    Write-Host "Converted ANSI to UTF-8: $filePath"
}

# Helper for Mojibake recovery (double UTF-8 encoded as Windows-1252)
function Fix-Mojibake($filePath) {
    $utf8 = [System.Text.Encoding]::UTF8
    $w1252 = [System.Text.Encoding]::GetEncoding(1252)
    
    $text = [System.IO.File]::ReadAllText($filePath, $utf8)
    
    $char_A_tilde = [char]0x00C3
    $char_A_diaeresis = [char]0x00C4
    $char_A_ring = [char]0x00C5
    $char_A_circumflex = [char]0x00C2
    
    if ($text.Contains($char_A_tilde) -or $text.Contains($char_A_diaeresis) -or $text.Contains($char_A_ring) -or $text.Contains($char_A_circumflex)) {
        $bytes = $w1252.GetBytes($text)
        $cleanText = $utf8.GetString($bytes)
        [System.IO.File]::WriteAllText($filePath, $cleanText, $utf8)
        Write-Host "Fixed Mojibake in: $filePath"
    }
}

# Helper for contextual U+FFFD and dash fixes in sign files using pure char-code concatenation
function Fix-SignLiteralWords($filePath) {
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
    
    $emdash_str = [string]$emdash
    $deg = [char]0x00B0
    $sq = [char]0x27

    # List of dictionary replacements
    $reps = @(
        # Quotes and motto starts
        @{ pat = 'motto\s*=\s*[' + [char]0x22 + [char]0x27 + ']?[\uFFFD\?]+'; val = 'motto="“' },
        @{ pat = 'motto\s*>\s*[\uFFFD\?]+'; val = 'motto">“' },
        @{ pat = '[\uFFFD\?]+</p>'; val = '”</p>' },
        
        # Degree symbols in dekan ranges
        @{ pat = '(\d+)[\uFFFD\?]+'; val = '$1' + $deg },
        
        # Date and dekan ranges (replacing U+FFFD with em-dash)
        @{ pat = '(\d+)\s*[\uFFFD\?]+\s*(\d+)'; val = '$1 ' + $emdash_str + ' $2' },
        @{ pat = '([a-zA-Z\u00F6\u00FC\u011F\u0131\u015F\u00E7\u00D6\u00DC\u011E\u0130\u015E\u00C7]+)\s+[\uFFFD\?]+\s+(\d+)'; val = '$1 ' + $emdash_str + ' $2' },
        @{ pat = '(\d+)\s+[\uFFFD\?]+\s+([a-zA-Z\u00F6\u00FC\u011F\u0131\u015F\u00E7\u00D6\u00DC\u011E\u0130\u015E\u00C7]+)'; val = '$1 ' + $emdash_str + ' $2' },
        
        # Month spellings
        @{ pat = '(?i)Eyl[\-—\u2014]?l'; val = 'Eyl' + $u_k + 'l' },
        @{ pat = '(?i)Kas[\-—\u2014]?m'; val = 'Kas' + $i_n + 'm' },
        @{ pat = '(?i)Aral[\-—\u2014]?k'; val = 'Aral' + $i_n + 'k' },
        @{ pat = '(?i)Subat'; val = $s_b + 'ubat' },
        @{ pat = '(?i)May[\-—\u2014]?s'; val = 'May' + $i_n + 's' },
        @{ pat = '(?i)A[\uFFFD\?]+ustos'; val = 'A' + $g_k + 'ustos' },
        
        # Navigation bar
        @{ pat = '[\uFFFD\?]+ Atlasa D[\uFFFD\?]+n'; val = $arrow_left.ToString() + ' Atlasa D' + $o_k + 'n' },
        @{ pat = '[\uFFFD\?]+ Zodyak <span>Atlasi</span>'; val = $star.ToString() + ' Zodyak <span>Atlas' + $i_n + '</span>' },
        @{ pat = '[\uFFFD\?]+ Zodyak'; val = $star.ToString() + ' Zodyak' },
        
        # Öncü / ÖNCÜ
        @{ pat = '[\uFFFD\?]+[O\u00D6]NC[U\u00DC]+[\uFFFD\?]*'; val = $o_b.ToString() + 'NC' + $u_b.ToString() },
        @{ pat = '[\uFFFD\?]+[O\u00D6]nc[u\u00FC]+[\uFFFD\?]*'; val = $o_b.ToString() + 'nc' + $u_k.ToString() },
        @{ pat = '[\uFFFD\?]+[o\u00F6]nc[u\u00FC]+[\uFFFD\?]*'; val = $o_k.ToString() + 'nc' + $u_k.ToString() },
        
        # dördüncü / dördüncü burcu
        @{ pat = 'd[\-—\u2014]rd[\-—\u2014][\u00F6nc\u00FC\uFFFD\?]+ burcu'; val = 'd' + $o_k + 'rd' + $u_k + 'nc' + $u_k + ' burcu' },
        @{ pat = 'd[\-—\u2014]rd[\-—\u2014][\u00F6nc\u00FC\uFFFD\?]+'; val = 'd' + $o_k + 'rd' + $u_k + 'nc' + $u_k },
        
        # Ördüğü / Ödüllendirmek / Önemli
        @{ pat = '[\uFFFD\?]+rd[\-—\u2014]?g[\uFFFD\?]*'; val = $o_k + 'rd' + $u_k + 'g' + $u_k },
        @{ pat = '[\uFFFD\?]+rdg'; val = $o_k + 'rd' + $u_k + 'g' + $u_k },
        @{ pat = '[\uFFFD\?]+d[\-—\u2014]?llendirmek'; val = $o_k + 'd' + $u_k + 'llendirmek' },
        
        # Ancak / Ancak Ay'
        @{ pat = '\bA[\uFFFD\?]+a\b'; val = 'Ancak' },
        @{ pat = '\bA[\uFFFD\?]+ak\b'; val = 'Ancak' },
        @{ pat = '\bA[\uFFFD\?]+a Ay' + $sq.ToString(); val = 'Ancak Ay' + $sq.ToString() },
        @{ pat = '\bA[\uFFFD\?]+ak Ay' + $sq.ToString(); val = 'Ancak Ay' + $sq.ToString() },
        
        # Oğlak / Oglak
        @{ pat = '\bOg[\uFFFD\?]+l[\uFFFD\?]+ak\b'; val = 'O' + $g_k + 'lak' },
        @{ pat = '\bO[\uFFFD\?]+lak\b'; val = 'O' + $g_k + 'lak' },
        
        # Hafıza
        @{ pat = '\bhaf[\uFFFD\?]+za\b'; val = 'haf' + $i_n + 'za' },
        @{ pat = '\bhafi[\uFFFD\?]+a\b'; val = 'haf' + $i_n + 'za' },
        
        # Üçüncü Göz / Üçüncü
        @{ pat = '[\uFFFD\?]{3}\s+G[\-—\u2014\uFFFD\?]*z'; val = $u_b + $c_k + $u_k + 'nc' + $u_k + ' G' + $o_k + 'z' },
        @{ pat = '[\uFFFD\?]{3}'; val = $u_b + $c_k + $u_k + 'nc' + $u_k },
        @{ pat = '[\uFFFD\?]{3}\u0131 G\u00F6z'; val = $u_b + $c_k + $u_k + 'nc' + $u_k + ' G' + $o_k + 'z' },
        @{ pat = '[\uFFFD\?]+[o\uFFFD]+nc[\uFFFD]+'; val = $u_b + $c_k + $u_k + 'nc' + $u_k },
        @{ pat = '[\uFFFD\?]+[c\u00E7][u\u00FC]nc[u\u00FC][\uFFFD\?]*'; val = $u_b + $c_k + $u_k + 'nc' + $u_k },
        
        # Ölçüsüzlük
        @{ pat = '[\uFFFD\?]+l[\uFFFD\?]+[\-—\u2014]zl[\-—\u2014]k'; val = $o_k + 'l' + $c_k + $u_k + 's' + $u_k + 'zl' + $u_k + 'k' },
        @{ pat = '[\uFFFD\?]+l[\uFFFD\?]+s[\-—\u2014]zl[\-—\u2014]k'; val = $o_k + 'l' + $c_k + $u_k + 's' + $u_k + 'zl' + $u_k + 'k' },
        
        # Gezegenler & Emojiler
        @{ pat = 'g[\uFFFD\?]+ En Iyi Anlastigi'; val = $handshake.ToString() + ' En Iyi Anlast' + $i_n + 'g' + $i_n },
        @{ pat = 'g[\uFFFD\?]+ Dengeleyen'; val = $scales.ToString() + ' Dengeleyen' },
        @{ pat = '[\uFFFD\?]+ Dengeleyen'; val = $scales.ToString() + ' Dengeleyen' },
        @{ pat = '[\uFFFD\?]+ [\uFFFD\?]+atisma Yasadigi'; val = $lightning.ToString() + ' ' + $c_b.ToString() + 'at' + $i_n + 'sma Ya' + $s_k + 'ad' + $i_n + 'g' + $i_n },
        @{ pat = '[\uFFFD\?]+ [\uFFFD\?]+atisma'; val = $lightning.ToString() + ' ' + $c_b.ToString() + 'at' + $i_n + 'sma' },
        @{ pat = 'g[\uFFFD\?]+ Basarili'; val = $briefcase.ToString() + ' Ba' + $s_k + 'ar' + $i_n + 'l' + $i_n },
        @{ pat = 'g[\uFFFD\?]+ Finansal'; val = $moneybag.ToString() + ' Finansal' },
        @{ pat = 'g[\uFFFD\?]+ Ezoterik'; val = $numbers.ToString() + ' Ezoterik' },
        @{ pat = 'g[\uFFFD\?]+ Manevi Mantrasi'; val = $meditation.ToString() + ' Manevi Mantras' + $i_n },
        @{ pat = 'g[\uFFFD\?]+ [\uFFFD\?]+amanik'; val = $pawprints.ToString() + ' ' + $s_b.ToString() + 'amanik' },
        @{ pat = 'g[\uFFFD\?]+ Beden'; val = $stethoscope.ToString() + ' Beden' },
        @{ pat = '[\uFFFD\?]+ Beden'; val = $stethoscope.ToString() + ' Beden' },
        @{ pat = '[\uFFFD\?]+ifali'; val = $herb.ToString() + ' ' + $s_b.ToString() + 'ifal' + $i_n },
        @{ pat = '[\uFFFD\?]+ifaci'; val = $s_b.ToString() + 'ifac' + $i_n },
        @{ pat = '[\uFFFD\?]+ans Elementleri'; val = $clover.ToString() + ' ' + $s_b.ToString() + 'ans Elementleri' },
        
        # Word-level prefix patterns
        @{ pat = '[\uFFFD\?]+zellik'; val = $o_k + 'zellik' },
        @{ pat = '[\uFFFD\?]+nem'; val = $o_k + 'nem' },
        @{ pat = '[\uFFFD\?]+ok'; val = $c_k + 'ok' },
        @{ pat = '[\uFFFD\?]+ekil'; val = $c_k + 'ekil' },
        @{ pat = '[\uFFFD\?]+alis'; val = $c_k + 'al' + $i_n + $s_k },
        @{ pat = '[\uFFFD\?]+ocuk'; val = $c_k + 'ocuk' },
        @{ pat = '[\uFFFD\?]+zg[u\u00FC]r'; val = $o_k + 'zg' + $u_k + 'r' },
        @{ pat = '[\uFFFD\?]+zg[u\u00FC]n'; val = $u_k + 'zg' + $u_k + 'n' },
        @{ pat = '[\uFFFD\?]+zg'; val = $u_k + 'zg' },
        @{ pat = '[\uFFFD\?]+lser'; val = $u_k + 'lser' },
        @{ pat = '[\uFFFD\?]+ans'; val = $s_k + 'ans' },
        @{ pat = '[\uFFFD\?]+akra'; val = $c_k + 'akra' },
        @{ pat = '[\uFFFD\?]+d[\-—\u2014]?ll'; val = $o_k + 'd' + $u_k + 'll' },
        @{ pat = '[\uFFFD\?]+nl'; val = $u_k + 'nl' },
        @{ pat = '[\uFFFD\?]+m[\-—\u2014]?r'; val = $o_k + 'm' + $u_k + 'r' },
        @{ pat = '[\uFFFD\?]+at[i\u0131]s'; val = $c_k + 'at' + $i_n + $s_k },
        @{ pat = '[\uFFFD\?]+ik'; val = $c_k + $i_n + 'k' },
        @{ pat = '[\uFFFD\?]+izm'; val = $c_k + 'izm' },
        @{ pat = '[\uFFFD\?]+gret'; val = $o_k + $g_k + 'ret' },
        @{ pat = '[\uFFFD\?]+gr[e\u0131]n'; val = $o_k + $g_k + 'ren' },
        @{ pat = '[\uFFFD\?]+zer'; val = $u_k + 'zer' },
        @{ pat = '[\uFFFD\?]+ret'; val = $u_k + 'ret' },
        @{ pat = '[\uFFFD\?]+ag'; val = $c_k + 'a' + $g_k },
        @{ pat = '[\uFFFD\?]+ev'; val = $c_k + 'ev' },
        @{ pat = '[\uFFFD\?]+ey'; val = $s_k + 'ey' },
        @{ pat = '[\uFFFD\?]+up'; val = $s_k + $u_k + 'p' },
        @{ pat = '[\uFFFD\?]+id'; val = $s_k + 'id' },
        @{ pat = '[\uFFFD\?]+en'; val = $s_k + 'en' },
        @{ pat = '[\uFFFD\?]+oz'; val = $c_k + $o_k + 'z' },
        @{ pat = '[\uFFFD\?]+if'; val = $c_k + 'if' },
        @{ pat = '[\uFFFD\?]+ek'; val = $c_k + 'ek' },
        @{ pat = '[\uFFFD\?]+dem'; val = $o_k + 'dem' },
        
        # Word-level suffix/literal patterns
        @{ pat = 'Yenge[\uFFFD\?]+'; val = 'Yenge' + $c_k },
        @{ pat = 'yenge[\uFFFD\?]+'; val = 'yenge' + $c_k },
        @{ pat = 'Ko[\uFFFD\?]+'; val = 'Ko' + $c_k },
        @{ pat = 'ko[\uFFFD\?]+'; val = 'ko' + $c_k },
        @{ pat = 'Bo[\uFFFD\?]+a'; val = 'Bo' + $g_k + 'a' },
        @{ pat = 'bo[\uFFFD\?]+a'; val = 'bo' + $g_k + 'a' },
        @{ pat = 'Ba[\uFFFD\?]+ak'; val = 'Ba' + $s_k + 'ak' },
        @{ pat = 'ba[\uFFFD\?]+ak'; val = 'ba' + $s_k + 'ak' },
        @{ pat = 'Bal[\uFFFD\?]+k'; val = 'Bal' + $i_n + 'k' },
        @{ pat = 'bal[\uFFFD\?]+k'; val = 'bal' + $i_n + 'k' },
        @{ pat = 'Tarih[\uFFFD\?]+i'; val = 'Tarih' + $c_k + 'i' },
        @{ pat = 'ge[\uFFFD\?]+misin'; val = 'ge' + $c_k + 'mi' + $s_k + 'in' },
        @{ pat = 'muhta[\uFFFD\?]+'; val = 'muhta' + $c_k },
        @{ pat = 'i[\uFFFD\?]+ d[\-—\u2014]?nya'; val = 'i' + $c_k + ' d' + $u_k + 'nya' },
        @{ pat = 'G[\uFFFD\?]+m[\uFFFD\?]+s'; val = 'G' + $u_k + 'm' + $u_k + 's' },
        @{ pat = 'g[\uFFFD\?]+n[\uFFFD\?]+'; val = 'g' + $u_k + 'n' + $u_k },
        @{ pat = 'g[\uFFFD\?]+c[\uFFFD\?]+'; val = 'g' + $u_k + 'c' + $u_k },
        @{ pat = 'd[\uFFFD\?]+nem'; val = 'd' + $o_k + 'nem' },
        @{ pat = 'b[\uFFFD\?]+t[\uFFFD\?]+n'; val = 'b' + $u_k + 't' + $u_k + 'n' },
        @{ pat = 's[\uFFFD\?]+z'; val = 's' + $o_k + 'z' },
        @{ pat = 'Y[\uFFFD\?]+nelim'; val = 'Y' + $o_k + 'nelim' },
        @{ pat = 'k[\uFFFD\?]+k'; val = 'k' + $o_k },
        @{ pat = 'l[\uFFFD\?]+ks'; val = 'l' + $u_k + 's' },
        @{ pat = 'g[\uFFFD\?]+venlik'; val = 'g' + $u_k + 'venlik' },
        @{ pat = 'Y[\uFFFD\?]+netici'; val = 'Y' + $o_k + 'netici' },
        @{ pat = 'y[\uFFFD\?]+ksek'; val = 'y' + $u_k + 'sek' },
        @{ pat = 'sorumlulu[\uFFFD\?]+u'; val = 'sorumlulu' + $g_k + 'u' },
        @{ pat = 'de[\uFFFD\?]+er'; val = 'de' + $g_k + 'er' },
        @{ pat = 'de[\uFFFD\?]+i[\uFFFD\?]+'; val = 'de' + $g_k + 'i' + $s_k },
        @{ pat = '[\uFFFD\?]+nce'; val = $o_k + 'nce' },
        @{ pat = '[\uFFFD\?]+rne[\uFFFD\?]+i'; val = $o_b + 'rne' + $g_k + 'i' },
        @{ pat = '[\uFFFD\?]+rne[\uFFFD\?]+in'; val = $o_b + 'rne' + $g_k + 'in' },
        @{ pat = 'ana[\uFFFD\?]+\s+davran'; val = 'ana' + $c_k + ' davran' },
        @{ pat = 'tanr[i\u0131][\-—\u2014\uFFFD\?]+a'; val = 'tanr' + $i_n + $c_k + 'a' },
        @{ pat = 'ihtiya[\uFFFD\?]+'; val = 'ihtiya' + $c_k },
        @{ pat = 'ana[\uFFFD\?]+'; val = 'ana' + $c_k },
        
        # Astrological-specific custom words
        @{ pat = '(?i)olagan[\-—\u2014]?st[\uFFFD\?]+'; val = 'ola' + $g_k + 'an' + $u_k + 'st' + $u_k },
        @{ pat = '(?i)sembol[\uFFFD\?]+'; val = 'sembol' + $u_k },
        @{ pat = '(?i)ust[\-—\u2014]?ne'; val = $u_k + 'st' + $u_k + 'ne' },
        @{ pat = '(?i)ust d[\-—\u2014]?zey'; val = $u_k + 'st d' + $u_k + 'zey' },
        @{ pat = '(?i)Ust d[\-—\u2014]?zey'; val = $u_b + 'st d' + $u_k + 'zey' },
        @{ pat = '(?i)ge[\-—\u2014]?mise'; val = 'ge' + $c_k + 'mi' + $s_k + 'e' },
        @{ pat = '(?i)Sat[\-—\u2014]?rn[\uFFFD\?]+n'; val = 'Sat' + $u_k + 'rn' + $sq.ToString() + $u_k + 'n' },
        @{ pat = '(?i)sag[\uFFFD\?]*l[\uFFFD\?]*igina'; val = 'sa' + $g_k + 'l' + $i_n + $g_k + $i_n + 'na' },
        @{ pat = '(?i)s[\-—\u2014]?zl[\uFFFD\?]+'; val = 's' + $o_k + 'zl' + $u_k },
        @{ pat = '(?i)k[\-—\u2014]?t[\-—\u2014]?l[\-—\u2014]?g[\uFFFD\?]+'; val = 'k' + $o_k + 't' + $u_k + 'l' + $u_k + $g_k + $u_k },
        
        # General patterns for güclü / gücünü / köklü / gücünü (very safe, matching length)
        @{ pat = '(?i)\bg[u\u00FCc\u00E7l\uFFFD\?]{4}\b'; val = 'g' + $u_k + $c_k + 'l' + $u_k },
        @{ pat = '(?i)\bg[u\u00FCc\u00E7l\uFFFD\?]{4}d[u\u00FC]r\b'; val = 'g' + $u_k + $c_k + 'l' + $u_k + 'd' + $u_k + 'r' },
        @{ pat = '(?i)\bg[u\u00FCc\u00E7\uFFFD\?]{3}\b'; val = 'g' + $u_k + $c_k + 'l' + $u_k },
        @{ pat = '(?i)\bg[u\u00FCc\u00E7\uFFFD\?]{3}n[u\u00FC]\b'; val = 'g' + $u_k + $c_k + 'l' + $u_k + 'n' + $u_k },
        @{ pat = '(?i)\bk[o\u00F6kl\uFFFD\?]{4}\b'; val = 'k' + $o_k + 'kl' + $u_k },
        
        # Dash corruptions
        @{ pat = '(?i)g[\uFFFD\?]*l[\uFFFD\?]*[\-—\u2014]d[\-—\u2014]r'; val = 'g' + $u_k + $c_k + 'l' + $u_k + 'd' + $u_k + 'r' },
        @{ pat = '(?i)gl[\-—\u2014]d[\-—\u2014]r'; val = 'g' + $u_k + $c_k + 'l' + $u_k + 'd' + $u_k + 'r' },
        @{ pat = '(?i)gl'; val = 'g' + $u_k + $c_k + 'l' + $u_k },
        @{ pat = '(?i)gc'; val = 'g' + $u_k + $c_k + 'l' + $u_k },
        @{ pat = '(?i)ge[\-—\u2014]miste'; val = 'ge' + $c_k + 'mi' + $s_k + 'te' },
        @{ pat = '(?i)hi[\-—\u2014]bir'; val = 'hi' + $c_k + 'bir' },
        @{ pat = '(?i)g[\-—\u2014]r[\-—\u2014]nmesine'; val = 'g' + $o_k + 'r' + $u_k + 'nmesine' },
        @{ pat = '(?i)G[\-—\u2014]n'; val = 'G' + $u_k + 'n' },
        @{ pat = '(?i)G[\-—\u2014]ky[\-—\u2014]z[\-—\u2014]n[\-—\u2014]n'; val = 'G' + $o_k + 'ky' + $u_k + 'z' + $u_k + 'n' + $u_k + 'n' },
        @{ pat = '(?i)b[\-—\u2014]l[\-—\u2014]m'; val = 'b' + $o_k + 'l' + $u_k + 'm' },
        @{ pat = '(?i)ana\b\s+davran'; val = 'ana' + $c_k + ' davran' }
    )

    $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
    
    # Run replacements
    foreach ($pair in $reps) {
        $pat = $pair.pat
        $val = $pair.val
        if ($pat -ne $null -and $pat -ne "") {
            $content = [System.Text.RegularExpressions.Regex]::Replace($content, $pat, $val)
        }
    }
    
    [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Fixed literal U+FFFD and dashes in: $filePath"
}

# --- EXECUTION ---

# 1. Inject meta charset="UTF-8" in all HTML files
Write-Host "--- Stage 1: Injecting Meta Charset ---"
$htmlFiles = Get-ChildItem -Path $projectDir -Filter "*.html" -Recurse
foreach ($file in $htmlFiles) {
    Inject-MetaCharset $file.FullName
}

# 2. Convert raw ANSI files to UTF-8
Write-Host "`n--- Stage 2: Converting ANSI files to UTF-8 ---"
Convert-ANSI-To-UTF8 (Join-Path $projectDir "gezegenler\gunes.html")
Convert-ANSI-To-UTF8 (Join-Path $projectDir "data\search-index.js")

# 3. Fix Mojibake (double-encoded UTF-8 files)
Write-Host "`n--- Stage 3: Fixing Mojibake ---"
$mojibakeFiles = @(
    "data\cities.js",
    "data\dictionary.js",
    "data\search-index.js",
    "data\daily-horoscopes.js",
    "evler\1-ev.html",
    "evler\2-ev.html",
    "evler\10-ev.html"
)
foreach ($rel in $mojibakeFiles) {
    $fullPath = Join-Path $projectDir $rel
    if (Test-Path $fullPath) {
        Fix-Mojibake $fullPath
    }
}

# 4. Clean U+FFFD and dashes in sign detail files
Write-Host "`n--- Stage 4: Cleaning U+FFFD and corruptions in sign details ---"
$signFiles = Get-ChildItem -Path (Join-Path $projectDir "burclar") -Filter "*.html"
foreach ($file in $signFiles) {
    Fix-SignLiteralWords $file.FullName
}

Write-Host "`n=== Phase 0 Final Recovery Completed Successfully ==="
