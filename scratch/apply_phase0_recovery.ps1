$projectDir = "c:\Users\alper\Desktop\zodiacrf"

# Helper for meta charset injection
function Inject-MetaCharset($filePath) {
    $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
    
    # Check if <meta charset="UTF-8"> or similar is there
    $dq = [char]0x22
    $sq = [char]0x27
    $pattern = '<meta\s+charset=[' + $dq + $sq + ']?UTF-8[' + $dq + $sq + ']?\s*/?>'
    
    if ($content -notmatch $pattern) {
        # Insert <meta charset="UTF-8"> right after <head>
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
    
    # Read using Windows-1254 (Turkish ANSI)
    $text = [System.IO.File]::ReadAllText($filePath, $enc1254)
    
    # Write using UTF-8
    [System.IO.File]::WriteAllText($filePath, $text, $utf8)
    Write-Host "Converted ANSI to UTF-8: $filePath"
}

# Helper for Mojibake (Double UTF-8 encoded as Windows-1252) recovery
function Fix-Mojibake($filePath) {
    $utf8 = [System.Text.Encoding]::UTF8
    $w1252 = [System.Text.Encoding]::GetEncoding(1252)
    
    $text = [System.IO.File]::ReadAllText($filePath, $utf8)
    
    # Check if double encoded sequences are present
    $char_A_tilde = [char]0x00C3
    $char_A_diaeresis = [char]0x00C4
    $char_A_ring = [char]0x00C5
    $char_A_circumflex = [char]0x00C2
    
    if ($text.Contains($char_A_tilde) -or $text.Contains($char_A_diaeresis) -or $text.Contains($char_A_ring) -or $text.Contains($char_A_circumflex)) {
        # Convert UTF-8 string back to Windows-1252 bytes
        $bytes = $w1252.GetBytes($text)
        # Decode those bytes as UTF-8
        $cleanText = $utf8.GetString($bytes)
        
        [System.IO.File]::WriteAllText($filePath, $cleanText, $utf8)
        Write-Host "Fixed Mojibake in: $filePath"
    }
}

# Helper for literal word replacements in sign detail files
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

    # We define literal string replacements as hash tables to prevent array flattening
    $reps = @(
        # Navigation bar
        @{ pat = $fffd.ToString() + ' Atlasa D' + $fffd.ToString(); val = $arrow_left.ToString() + ' Atlasa D' + $o_k.ToString() + 'n' },
        @{ pat = $fffd.ToString() + ' Atlasa D' + $o_k.ToString() + 'n'; val = $arrow_left.ToString() + ' Atlasa D' + $o_k.ToString() + 'n' },
        @{ pat = $fffd.ToString() + ' Zodyak <span>Atlasi</span>'; val = $star.ToString() + ' Zodyak <span>Atlas' + $i_n.ToString() + '</span>' },
        @{ pat = $fffd.ToString() + ' Zodyak'; val = $star.ToString() + ' Zodyak' },
        @{ pat = 'Zodyak <span>Atlasi</span>'; val = 'Zodyak <span>Atlas' + $i_n.ToString() + '</span>' },
        
        # Sign words
        @{ pat = 'Yenge' + $fffd.ToString(); val = 'Yenge' + $c_k.ToString() },
        @{ pat = 'Ko' + $fffd.ToString(); val = 'Ko' + $c_k.ToString() },
        @{ pat = 'Bo' + $fffd.ToString() + 'a'; val = 'Bo' + $g_k.ToString() + 'a' },
        @{ pat = 'Ba' + $fffd.ToString() + 'ak'; val = 'Ba' + $s_k.ToString() + 'ak' },
        @{ pat = 'O' + $fffd.ToString() + 'lak'; val = 'O' + $g_k.ToString() + 'lak' },
        @{ pat = 'Bal' + $fffd.ToString() + 'k'; val = 'Bal' + $i_n.ToString() + 'k' },
        @{ pat = 'Bal' + $fffd.ToString() + 'K'; val = 'Bal' + $i_n.ToString() + 'k' },
        @{ pat = 'Tarih' + $fffd.ToString() + 'i'; val = 'Tarih' + $c_k.ToString() + 'i' },
        @{ pat = 'ge' + $fffd.ToString() + 'misin'; val = 'ge' + $c_k.ToString() + 'mi' + $s_k.ToString() + 'in' },
        @{ pat = 'muhta' + $fffd.ToString(); val = 'muhta' + $c_k.ToString() },
        @{ pat = ' i' + $fffd.ToString() + ' '; val = ' i' + $c_k.ToString() + ' ' },
        @{ pat = 'i' + $fffd.ToString() + ' d' + $u_k.ToString() + 'nya'; val = 'i' + $c_k.ToString() + ' d' + $u_k.ToString() + 'nya' },
        @{ pat = 'i' + $fffd.ToString() + ' d' + $emdash_str + 'nya'; val = 'i' + $c_k.ToString() + ' d' + $u_k.ToString() + 'nya' },
        @{ pat = 'G' + $fffd.ToString() + 'm' + $fffd.ToString() + 's'; val = 'G' + $u_k.ToString() + 'm' + $u_k.ToString() + 's' },
        @{ pat = 'g' + $fffd.ToString() + 'n' + $fffd.ToString(); val = 'g' + $u_k.ToString() + 'n' + $u_k.ToString() },
        @{ pat = 'g' + $fffd.ToString() + $fffd.ToString(); val = 'g' + $u_k.ToString() + $c_k.ToString() },
        @{ pat = 'd' + $fffd.ToString() + 'nem'; val = 'd' + $o_k.ToString() + 'nem' },
        @{ pat = 'b' + $fffd.ToString() + 't' + $fffd.ToString() + 'n'; val = 'b' + $u_k.ToString() + 't' + $u_k.ToString() + 'n' },
        @{ pat = $fffd.ToString() + 'zellik'; val = $o_k.ToString() + 'zellik' },
        @{ pat = $fffd.ToString() + 'nemli'; val = $o_k.ToString() + 'nemli' },
        @{ pat = 's' + $fffd.ToString() + 'z'; val = 's' + $o_k.ToString() + 'z' },
        @{ pat = 'Y' + $fffd.ToString() + 'nelim'; val = 'Y' + $o_k.ToString() + 'nelim' },
        @{ pat = 'k' + $fffd.ToString() + 'k'; val = 'k' + $o_k.ToString() },
        @{ pat = 'l' + $fffd.ToString() + 'ks'; val = 'l' + $u_k.ToString() + 's' },
        @{ pat = 'g' + $fffd.ToString() + 'venlik'; val = 'g' + $u_k.ToString() + 'venlik' },
        @{ pat = 'Y' + $fffd.ToString() + 'netici'; val = 'Y' + $o_k.ToString() + 'netici' },
        @{ pat = 'g' + $fffd.ToString() + 'c' + $fffd.ToString(); val = 'g' + $u_k.ToString() + 'c' + $u_k.ToString() },
        @{ pat = 'y' + $fffd.ToString() + 'ksek'; val = 'y' + $u_k.ToString() + 'sek' },
        @{ pat = 'sorumlulu' + $fffd.ToString() + 'u'; val = 'sorumlulu' + $g_k.ToString() + 'u' },
        @{ pat = 'de' + $fffd.ToString() + 'er'; val = 'de' + $g_k.ToString() + 'er' },
        @{ pat = 'de' + $fffd.ToString() + 'i' + $fffd.ToString(); val = 'de' + $g_k.ToString() + 'i' + $s_k.ToString() },
        @{ pat = $fffd.ToString() + 'nce'; val = $o_k.ToString() + 'nce' },
        @{ pat = $fffd.ToString() + 'rne' + $fffd.ToString() + 'i'; val = $o_b.ToString() + 'rne' + $g_k.ToString() + 'i' },
        @{ pat = $fffd.ToString() + 'rne' + $fffd.ToString() + 'iin'; val = $o_b.ToString() + 'rne' + $g_k.ToString() + 'in' },
        @{ pat = $fffd.ToString() + 'rne' + $fffd.ToString() + 'in'; val = $o_b.ToString() + 'rne' + $g_k.ToString() + 'in' },
        
        # Headings and emojis
        @{ pat = 'g' + $fffd.ToString() + $fffd.ToString() + $fffd.ToString() + ' En Iyi Anlastigi'; val = $handshake.ToString() + ' En Iyi Anlast' + $i_n.ToString() + 'g' + $i_n.ToString() },
        @{ pat = 'g' + $fffd.ToString() + $fffd.ToString() + $fffd.ToString() + ' Dengeleyen'; val = $scales.ToString() + ' Dengeleyen' },
        @{ pat = $fffd.ToString() + $fffd.ToString() + ' Dengeleyen'; val = $scales.ToString() + ' Dengeleyen' },
        @{ pat = $fffd.ToString() + ' ' + $fffd.ToString() + 'atisma Yasadigi'; val = $lightning.ToString() + ' ' + $c_b.ToString() + 'at' + $i_n.ToString() + 'sma Ya' + $s_k.ToString() + 'ad' + $i_n.ToString() + 'g' + $i_n.ToString() },
        @{ pat = $fffd.ToString() + ' ' + $fffd.ToString() + 'atisma'; val = $lightning.ToString() + ' ' + $c_b.ToString() + 'at' + $i_n.ToString() + 'sma' },
        @{ pat = 'g' + $fffd.ToString() + $fffd.ToString() + $fffd.ToString() + ' Basarili'; val = $briefcase.ToString() + ' Ba' + $s_k.ToString() + 'ar' + $i_n.ToString() + 'l' + $i_n.ToString() },
        @{ pat = 'g' + $fffd.ToString() + $fffd.ToString() + $fffd.ToString() + ' Finansal'; val = $moneybag.ToString() + ' Finansal' },
        @{ pat = 'g' + $fffd.ToString() + $fffd.ToString() + $fffd.ToString() + ' Ezoterik'; val = $numbers.ToString() + ' Ezoterik' },
        @{ pat = 'g' + $fffd.ToString() + $fffd.ToString() + $fffd.ToString() + $fffd.ToString() + ' Manevi Mantrasi'; val = $meditation.ToString() + ' Manevi Mantras' + $i_n.ToString() },
        @{ pat = 'g' + $fffd.ToString() + $fffd.ToString() + $fffd.ToString() + ' ' + $fffd.ToString() + $fffd.ToString() + 'amanik'; val = $pawprints.ToString() + ' ' + $s_b.ToString() + 'amanik' },
        @{ pat = 'g' + $fffd.ToString() + $fffd.ToString() + $fffd.ToString() + ' Beden'; val = $stethoscope.ToString() + ' Beden' },
        @{ pat = $fffd.ToString() + $fffd.ToString() + ' Beden'; val = $stethoscope.ToString() + ' Beden' },
        @{ pat = $fffd.ToString() + $fffd.ToString() + 'ifali'; val = $herb.ToString() + ' ' + $s_b.ToString() + 'ifal' + $i_n.ToString() },
        @{ pat = $fffd.ToString() + $fffd.ToString() + 'ifaci'; val = $s_b.ToString() + 'ifac' + $i_n.ToString() },
        @{ pat = $fffd.ToString() + $fffd.ToString() + 'ans Elementleri'; val = $clover.ToString() + ' ' + $s_b.ToString() + 'ans Elementleri' },
        @{ pat = $fffd.ToString() + 'akra'; val = $c_b.ToString() + 'akra' },
        @{ pat = 'Alper ATE' + $fffd.ToString() + $fffd.ToString(); val = 'Alper ATE' + $s_b.ToString() },
        
        # Dash corruptions
        @{ pat = 'd-rd-nc' + $fffd.ToString(); val = 'd' + $o_k.ToString() + 'rd' + $u_k.ToString() + 'nc' + $u_k.ToString() },
        @{ pat = 'd' + $emdash_str + 'rd' + $emdash_str + 'nc' + $fffd.ToString(); val = 'd' + $o_k.ToString() + 'rd' + $u_k.ToString() + 'nc' + $u_k.ToString() },
        @{ pat = 'd-rd-nc'; val = 'd' + $o_k.ToString() + 'rd' + $u_k.ToString() + 'nc' + $u_k.ToString() },
        @{ pat = 'd' + $emdash_str + 'rd' + $emdash_str + 'nc'; val = 'd' + $o_k.ToString() + 'rd' + $u_k.ToString() + 'nc' + $u_k.ToString() },
        @{ pat = 'd' + $emdash_str + 'rd' + $emdash_str + $o_k.ToString() + 'nc' + $u_k.ToString() + $fffd.ToString(); val = 'd' + $o_k.ToString() + 'rd' + $u_k.ToString() + 'nc' + $u_k.ToString() },
        @{ pat = 'd-rd-nc' + $fffd.ToString(); val = 'd' + $o_k.ToString() + 'rd' + $u_k.ToString() + 'nc' + $u_k.ToString() },
        @{ pat = 'd' + $emdash_str + 'rd' + $emdash_str + $o_k.ToString() + 'nc' + $u_k.ToString(); val = 'd' + $o_k.ToString() + 'rd' + $u_k.ToString() + 'nc' + $u_k.ToString() },
        @{ pat = 'NC N' + $fffd.ToString() + 'TEL' + $fffd.ToString() + 'K'; val = $o_b.ToString() + 'NC' + $u_b.ToString() + ' N' + $i_b.ToString() + 'TEL' + $i_b.ToString() + 'K' },
        @{ pat = 'NC N-TEL-K'; val = $o_b.ToString() + 'NC' + $u_b.ToString() + ' N' + $i_b.ToString() + 'TEL' + $i_b.ToString() + 'K' },
        @{ pat = 'NC N' + $emdash_str + 'TEL' + $emdash_str + 'K'; val = $o_b.ToString() + 'NC' + $u_b.ToString() + ' N' + $i_b.ToString() + 'TEL' + $i_b.ToString() + 'K' },
        @{ pat = 'nc' + $fffd.ToString() + ' Nitelik'; val = $o_b.ToString() + 'nc' + $u_b.ToString() + ' Nitelik' },
        @{ pat = $fffd.ToString() + 'nc' + $fffd.ToString() + ' Nitelik'; val = $o_b.ToString() + 'nc' + $u_b.ToString() + ' Nitelik' },
        @{ pat = 'nc'; val = $o_k.ToString() + 'nc' + $u_k.ToString() },
        @{ pat = 'rd-g' + $fffd.ToString(); val = $o_k.ToString() + 'rd' + $u_k.ToString() + 'g' + $u_k.ToString() },
        @{ pat = 'rd' + $emdash_str + 'g' + $fffd.ToString(); val = $o_k.ToString() + 'rd' + $u_k.ToString() + 'g' + $u_k.ToString() },
        @{ pat = 'rd' + $emdash_str + 'g'; val = $o_k.ToString() + 'rd' + $u_k.ToString() + 'g' + $u_k.ToString() },
        @{ pat = 'i d-nya'; val = 'i' + $c_k.ToString() + ' d' + $u_k.ToString() + 'nya' },
        @{ pat = 'i d' + $emdash_str + 'nya'; val = 'i' + $c_k.ToString() + ' d' + $u_k.ToString() + 'nya' },
        @{ pat = 'g(' + $u_k.ToString() + ')l(' + $u_k.ToString() + ')-d-r'; val = 'g' + $u_k.ToString() + $c_k.ToString() + 'l' + $u_k.ToString() + 'd' + $u_k.ToString() + 'r' },
        @{ pat = 'g(' + $u_k.ToString() + ')l(' + $u_k.ToString() + ')' + $emdash_str + 'd' + $emdash_str + 'r'; val = 'g' + $u_k.ToString() + $c_k.ToString() + 'l' + $u_k.ToString() + 'd' + $u_k.ToString() + 'r' },
        @{ pat = 'gl-d-r'; val = 'g' + $u_k.ToString() + $c_k.ToString() + 'l' + $u_k.ToString() + 'd' + $u_k.ToString() + 'r' },
        @{ pat = 'gl' + $emdash_str + 'd' + $emdash_str + 'r'; val = 'g' + $u_k.ToString() + $c_k.ToString() + 'l' + $u_k.ToString() + 'd' + $u_k.ToString() + 'r' },
        @{ pat = 'gl'; val = 'g' + $u_k.ToString() + $c_k.ToString() + 'l' + $u_k.ToString() },
        @{ pat = 'gc'; val = 'g' + $u_k.ToString() + 'c' + $u_k.ToString() },
        @{ pat = 'ge-miste'; val = 'ge' + $c_k.ToString() + 'mi' + $s_k.ToString() + 'te' },
        @{ pat = 'ge' + $emdash_str + 'miste'; val = 'ge' + $c_k.ToString() + 'mi' + $s_k.ToString() + 'te' },
        @{ pat = 'hi-bir'; val = 'hi' + $c_k.ToString() + 'bir' },
        @{ pat = 'hi' + $emdash_str + 'bir'; val = 'hi' + $c_k.ToString() + 'bir' },
        @{ pat = 'ana davranir'; val = 'ana' + $c_k.ToString() + ' davranır' },
        @{ pat = 'ana davran' + $i_n.ToString() + 'r'; val = 'ana' + $c_k.ToString() + ' davranır' },
        @{ pat = 'g-r-nmesine'; val = 'g' + $o_k.ToString() + 'r' + $u_k.ToString() + 'nmesine' },
        @{ pat = 'g' + $emdash_str + 'r' + $emdash_str + 'nmesine'; val = 'g' + $o_k.ToString() + 'r' + $u_k.ToString() + 'nmesine' },
        @{ pat = 'G-n'; val = 'G' + $u_k.ToString() + 'n' },
        @{ pat = 'G' + $emdash_str + 'n'; val = 'G' + $u_k.ToString() + 'n' },
        @{ pat = 'G-ky-z-n-n'; val = 'G' + $o_k.ToString() + 'ky' + $u_k.ToString() + 'z' + $u_k.ToString() + 'n' + $u_k.ToString() + 'n' },
        @{ pat = 'G' + $emdash_str + 'ky' + $emdash_str + 'z' + $emdash_str + 'n' + $emdash_str + 'n'; val = 'G' + $o_k.ToString() + 'ky' + $u_k.ToString() + 'z' + $u_k.ToString() + 'n' + $u_k.ToString() + 'n' },
        @{ pat = 'b-l-m'; val = 'b' + $o_k.ToString() + 'l' + $u_k.ToString() + 'm' },
        @{ pat = 'b' + $emdash_str + 'l' + $emdash_str + 'm'; val = 'b' + $o_k.ToString() + 'l' + $u_k.ToString() + 'm' },
        
        # Raw question marks inside text (restoring original Turkish letters)
        @{ pat = 'Yenge? burcu'; val = 'Yenge' + $c_k.ToString() + ' burcu' },
        @{ pat = 'Tarih?i'; val = 'Tarih' + $c_k.ToString() + 'i' },
        @{ pat = 'ge?misin'; val = 'ge' + $c_k.ToString() + 'mi' + $s_k.ToString() + 'in' },
        @{ pat = 'muhta?'; val = 'muhta' + $c_k.ToString() },
        @{ pat = 'i? d?nya'; val = 'i' + $c_k.ToString() + ' d' + $u_k.ToString() + 'nya' },
        @{ pat = 'g?venlik'; val = 'g' + $u_k.ToString() + 'venlik' },
        @{ pat = 'Y?netici'; val = 'Y' + $o_k.ToString() + 'netici' },
        @{ pat = 'g?c?'; val = 'g' + $u_k.ToString() + 'c' + $u_k.ToString() },
        @{ pat = 'y?ksek'; val = 'y' + $u_k.ToString() + 'sek' },
        @{ pat = '?rd?g?'; val = $o_k.ToString() + 'rd' + $u_k.ToString() + 'g' + $u_k.ToString() }
    )

    $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
    foreach ($pair in $reps) {
        $pat = $pair.pat
        $val = $pair.val
        if ($pat -ne $null -and $pat -ne "") {
            $content = $content.Replace($pat, $val)
        }
    }
    [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Fixed literal U+FFFD and dashes in: $filePath"
}

# --- EXECUTION STAGE ---

# 1. Inject meta charset="UTF-8" in all HTML files recursivly
Write-Host "--- Stage 1: Injecting Meta Charset ---"
$htmlFiles = Get-ChildItem -Path $projectDir -Filter "*.html" -Recurse
foreach ($file in $htmlFiles) {
    Inject-MetaCharset $file.FullName
}

# 2. Convert raw ANSI files to UTF-8
Write-Host "`n--- Stage 2: Converting ANSI files to UTF-8 ---"
Convert-ANSI-To-UTF8 (Join-Path $projectDir "gezegenler\gunes.html")
Convert-ANSI-To-UTF8 (Join-Path $projectDir "data\search-index.js") # Make sure index file is clean UTF-8 first

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

Write-Host "`n=== Phase 0 Recovery Completed Successfully ==="
