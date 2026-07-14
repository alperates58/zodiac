$burclarDir = "c:\Users\alper\Desktop\zodiacrf\burclar"
$files = Get-ChildItem -Path $burclarDir -Filter "*.html"

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
$bullet = [char]0x2014

# Define exact replacements
$exact_reps = @(
    # General words containing FFFD
    @{ pat = "G" + $fffd.ToString() + $fffd.ToString() + "l" + $fffd.ToString(); val = "G" + $u_k + $c_k + "l" + $u_k },
    @{ pat = "g" + $fffd.ToString() + $fffd.ToString() + "l" + $fffd.ToString(); val = "g" + $u_k + $c_k + "l" + $u_k },
    @{ pat = "G" + $fffd.ToString() + $fffd.ToString() + "l"; val = "G" + $u_k + $c_k + "l" + $u_k },
    @{ pat = "g" + $fffd.ToString() + $fffd.ToString() + "l"; val = "g" + $u_k + $c_k + "l" + $u_k },
    @{ pat = "g" + $u_k.ToString() + $c_k.ToString() + "l" + $fffd.ToString(); val = "g" + $u_k + $c_k + "l" + $u_k },
    @{ pat = "G" + $u_k.ToString() + $c_k.ToString() + "l" + $fffd.ToString(); val = "G" + $u_k + $c_k + "l" + $u_k },
    
    # Güçlüdür / Gücünü / Gücü
    @{ pat = "g" + $fffd.ToString() + $fffd.ToString() + "l" + $fffd.ToString() + "d" + $fffd.ToString() + "r"; val = "g" + $u_k + $c_k + "l" + $u_k + "d" + $u_k + "r" },
    @{ pat = "g" + $u_k.ToString() + $c_k.ToString() + "l" + $u_k.ToString() + "-" + "d" + "-" + "r"; val = "g" + $u_k + $c_k + "l" + $u_k + "d" + $u_k + "r" },
    @{ pat = "g" + $u_k.ToString() + $c_k.ToString() + "l" + $u_k.ToString() + $emdash_str + "d" + $emdash_str + "r"; val = "g" + $u_k + $c_k + "l" + $u_k + "d" + $u_k + "r" },
    @{ pat = "g" + $u_k.ToString() + $c_k.ToString() + "l" + $u_k.ToString() + "d" + $u_k.ToString() + "r"; val = "g" + $u_k + $c_k + "l" + $u_k + "d" + $u_k + "r" },
    @{ pat = "g" + $u_k.ToString() + $c_k.ToString() + "l" + $fffd.ToString() + "d" + $fffd.ToString() + "r"; val = "g" + $u_k + $c_k + "l" + $u_k + "d" + $u_k + "r" },
    @{ pat = "g" + $u_k.ToString() + $c_k.ToString() + "l" + $fffd.ToString() + "d" + $u_k.ToString() + "r"; val = "g" + $u_k + $c_k + "l" + $u_k + "d" + $u_k + "r" },
    @{ pat = "g" + $u_k.ToString() + $c_k.ToString() + "l" + $u_k.ToString() + "d" + $fffd.ToString() + "r"; val = "g" + $u_k + $c_k + "l" + $u_k + "d" + $u_k + "r" },
    @{ pat = "g" + $fffd.ToString() + $fffd.ToString() + "c" + $fffd.ToString(); val = "g" + $u_k + "c" + $u_k },
    @{ pat = "g" + $fffd.ToString() + $fffd.ToString() + "c" + $u_k.ToString(); val = "g" + $u_k + "c" + $u_k },
    @{ pat = "g" + $fffd.ToString() + $fffd.ToString() + "c" + $u_k.ToString() + "n" + $u_k.ToString(); val = "g" + $u_k + $c_k + "l" + $u_k + "n" + $u_k },
    @{ pat = "g" + $fffd.ToString() + $fffd.ToString() + "c" + $u_k.ToString() + "n" + $fffd.ToString(); val = "g" + $u_k + $c_k + "l" + $u_k + "n" + $u_k },
    @{ pat = "g" + $u_k.ToString() + "c" + $u_k.ToString() + "n" + $fffd.ToString(); val = "g" + $u_k + "c" + $u_k + "n" + $u_k },
    @{ pat = "g" + $u_k.ToString() + "c" + $fffd.ToString() + "n" + $fffd.ToString(); val = "g" + $u_k + "c" + $u_k + "n" + $u_k },
    
    # Specific words
    @{ pat = "Ven-" + "s" + $fffd.ToString() + $fffd.ToString() + "n"; val = "Ven" + $u_k + "s" + $sq.ToString() + $u_k + "n" },
    @{ pat = "l" + $fffd.ToString() + $fffd.ToString() + "l" + $fffd.ToString(); val = $o_k + "l" + $c_k + $u_k + "l" + $u_k },
    @{ pat = "l" + $fffd.ToString() + $fffd.ToString() + "l"; val = $o_k + "l" + $c_k + $u_k + "l" + $u_k },
    @{ pat = "ana" + $fffd.ToString(); val = "ana" + $c_k },
    @{ pat = "tanri" + $fffd.ToString() + "a"; val = "tanr" + $i_n + $c_k + "a" },
    @{ pat = "tanr" + $i_n.ToString() + "-" + "a"; val = "tanr" + $i_n + $c_k + "a" },
    
    # Date separators and quotes
    @{ pat = "Haziran " + $fffd.ToString() + " 22 Temmuz"; val = "Haziran " + $emdash_str + " 22 Temmuz" },
    @{ pat = "Kasim " + $fffd.ToString() + " 21 Aralik"; val = "Kas" + $i_n + "m " + $emdash_str + " 21 Aral" + $i_n + "k" },
    @{ pat = "Eyl" + $u_k.ToString() + "l " + $fffd.ToString() + " 22 Ekim"; val = "Eyl" + $u_k + "l " + $emdash_str + " 22 Ekim" },
    @{ pat = " 2, 7, 11, 20 " + $fffd.ToString() + " "; val = " 2, 7, 11, 20 " + $emdash_str + " " },
    @{ pat = "deniz mavisi " + $fffd.ToString() + " <b>"; val = "deniz mavisi " + $emdash_str + " <b>" },
    @{ pat = "Ay g" + $u_k.ToString() + "n" + $u_k.ToString() + ") " + $fffd.ToString() + " <b>"; val = "Ay g" + $u_k + "n" + $u_k + ") " + $emdash_str + " <b>" },
    @{ pat = "motto" + '="' + $fffd.ToString(); val = 'motto="“' },
    @{ pat = "motto" + ">" + $fffd.ToString(); val = 'motto">“' },
    @{ pat = $fffd.ToString() + "</p>"; val = "”</p>" },
    @{ pat = "." + $fffd.ToString() + "</p>"; val = "." + "”</p>" },
    
    # Copyright & Footer
    @{ pat = $fffd.ToString() + " 2026 Zodyak"; val = $copy.ToString() + " 2026 Zodyak" },
    @{ pat = "Zodyak Atlasi " + $fffd.ToString() + " G"; val = "Zodyak Atlas" + $i_n + " " + $emdash_str + " G" }
)

foreach ($file in $files) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Replace each exact substring
    foreach ($pair in $exact_reps) {
        $pat = $pair.pat
        $val = $pair.val
        if ($content.Contains($pat)) {
            $content = $content.Replace($pat, $val)
            Write-Host "Replaced '$pat' -> '$val' in $($file.Name)"
        }
    }
    
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
}

Write-Host "Exact U+FFFD replacements complete!"
