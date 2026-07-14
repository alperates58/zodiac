$burclarDir = "c:\Users\alper\Desktop\zodiacrf\burclar"
$files = Get-ChildItem -Path $burclarDir -Filter "*.html"

# Turkish characters
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
$sq = [char]0x27

$reps = @(
    # Degree symbols in dekan ranges
    @{ pat = '0[\uFFFD\?]+ - 10[\uFFFD\?]+'; val = '0° - 10°' },
    @{ pat = '10[\uFFFD\?]+ - 20[\uFFFD\?]+'; val = '10° - 20°' },
    @{ pat = '20[\uFFFD\?]+ - 30[\uFFFD\?]+'; val = '20° - 30°' },
    @{ pat = '0° - 10°'; val = '0° - 10°' },
    @{ pat = '10° - 20°'; val = '10° - 20°' },
    @{ pat = '20° - 30°'; val = '20° - 30°' },

    # Specific double corrupted Öncü Nitelik / Öncü niteliğin
    @{ pat = $fffd.ToString() + $o_k.ToString() + $fffd.ToString() + ' Nitelik'; val = 'Öncü Nitelik' },
    @{ pat = $fffd.ToString() + $o_k.ToString() + $fffd.ToString() + ' niteligin'; val = 'öncü niteliğin' },
    @{ pat = $fffd.ToString() + $o_k.ToString() + $fffd.ToString() + ' niteli' + $g_k.ToString() + 'in'; val = 'öncü niteliğin' },
    @{ pat = '?' + $o_k.ToString() + '? Nitelik'; val = 'Öncü Nitelik' },
    @{ pat = '?' + $o_k.ToString() + '? niteligin'; val = 'öncü niteliğin' },
    @{ pat = $fffd.ToString() + $o_b.ToString() + $fffd.ToString() + ' N' + $i_b.ToString() + 'TEL' + $i_b.ToString() + 'K'; val = 'ÖNCÜ NİTELİK' },
    @{ pat = $fffd.ToString() + $o_b.ToString() + $fffd.ToString() + ' NİTELİK'; val = 'ÖNCÜ NİTELİK' },
    @{ pat = '?' + $o_b.ToString() + '? NİTELİK'; val = 'ÖNCÜ NİTELİK' },
    @{ pat = $fffd.ToString() + $fffd.ToString() + ' Nitelik'; val = 'Öncü Nitelik' },
    @{ pat = $fffd.ToString() + $fffd.ToString() + ' niteligin'; val = 'öncü niteliğin' },
    @{ pat = '?? Nitelik'; val = 'Öncü Nitelik' },
    @{ pat = '?? niteligin'; val = 'öncü niteliğin' },
    
    # Specific dördüncü / dördüncü burcu
    @{ pat = 'd-rd-' + $fffd.ToString() + ' burcu'; val = 'dördüncü burcu' },
    @{ pat = 'd-rd-' + $fffd.ToString(); val = 'dördüncü' },
    @{ pat = 'd' + $emdash_str + 'rd' + $emdash_str + $o_k.ToString() + 'nc' + $u_k.ToString() + $fffd.ToString(); val = 'dördüncü' },
    @{ pat = 'd-rd-' + $o_k.ToString() + 'nc' + $u_k.ToString() + $fffd.ToString(); val = 'dördüncü' },
    @{ pat = 'd' + $emdash_str + 'rd' + $emdash_str + $o_k.ToString() + 'nc' + $u_k.ToString(); val = 'dördüncü' },
    @{ pat = 'd-rd-' + $o_k.ToString() + 'nc' + $u_k.ToString(); val = 'dördüncü' },
    @{ pat = 'd-rd-?'; val = 'dördüncü' },
    @{ pat = 'd' + $emdash_str + 'rd' + $emdash_str + '?'; val = 'dördüncü' },
    
    # Ördüğü / Ödüllendirmek / Önemli
    @{ pat = $fffd.ToString() + $o_k.ToString() + 'rd' + $u_k.ToString() + 'g' + $u_k.ToString(); val = 'ördüğü' },
    @{ pat = '?' + $o_k.ToString() + 'rd' + $u_k.ToString() + 'g' + $u_k.ToString(); val = 'ördüğü' },
    @{ pat = $fffd.ToString() + 'rd' + $u_k.ToString() + 'g' + $u_k.ToString(); val = 'ördüğü' },
    @{ pat = '?rd' + $u_k.ToString() + 'g' + $u_k.ToString(); val = 'ördüğü' },
    @{ pat = $fffd.ToString() + 'd' + $fffd.ToString() + 'llendirmek'; val = 'ödüllendirmek' },
    @{ pat = $fffd.ToString() + 'd' + $u_k.ToString() + 'llendirmek'; val = 'ödüllendirmek' },
    @{ pat = '?d' + $u_k.ToString() + 'llendirmek'; val = 'ödüllendirmek' },
    
    # Ancak Ay' / Ancak
    @{ pat = 'A' + $fffd.ToString() + 'a Ay' + $sq.ToString(); val = 'Ancak Ay' + $sq.ToString() },
    @{ pat = 'A' + $fffd.ToString() + 'ak Ay' + $sq.ToString(); val = 'Ancak Ay' + $sq.ToString() },
    @{ pat = 'A?a Ay' + $sq.ToString(); val = 'Ancak Ay' + $sq.ToString() },
    @{ pat = 'A' + $fffd.ToString() + 'a '; val = 'Ancak ' },
    @{ pat = 'A' + $fffd.ToString() + 'ak '; val = 'Ancak ' },
    
    # Oğlak / Oğlak' / Oglak
    @{ pat = 'Og' + $fffd.ToString() + 'l' + $fffd.ToString() + 'ak'; val = 'Oğlak' },
    @{ pat = 'Og?l?ak'; val = 'Oğlak' },
    @{ pat = 'O' + $fffd.ToString() + 'lak'; val = 'Oğlak' },
    @{ pat = 'O?lak'; val = 'Oğlak' },
    
    # Hafıza / Hafızası
    @{ pat = 'haf' + $fffd.ToString() + 'za'; val = 'hafıza' },
    @{ pat = 'hafi' + $fffd.ToString() + 'a'; val = 'hafıza' },
    @{ pat = 'haf?za'; val = 'hafıza' },
    
    # Üçüncü Göz / Üçüncü
    @{ pat = $fffd.ToString() + $fffd.ToString() + $fffd.ToString() + ' G' + $fffd.ToString() + 'z'; val = 'Üçüncü Göz' },
    @{ pat = $fffd.ToString() + $fffd.ToString() + $fffd.ToString() + ' G' + $o_k.ToString() + 'z'; val = 'Üçüncü Göz' },
    @{ pat = '??? G' + $o_k.ToString() + 'z'; val = 'Üçüncü Göz' },
    @{ pat = '??? G?z'; val = 'Üçüncü Göz' },
    @{ pat = '???' + $i_n.ToString() + ' G' + $o_k.ToString() + 'z'; val = 'Üçüncü Göz' },
    @{ pat = '???'; val = 'Üçüncü' }
)

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Apply replacements
    foreach ($pair in $reps) {
        $pat = $pair.pat
        $val = $pair.val
        if ($pat -ne $null -and $pat -ne "") {
            $content = $content.Replace($pat, $val)
        }
    }
    
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Applied contextual cleaning to: $($file.Name)"
}

Write-Host "Contextual U+FFFD resolution complete!"
