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
$house = [char]0xD83C + [char]0xDFE0 # 🏠 House emoji in UTF-16 surrogate pair

# Define lists of safe replacements
# (represented as arrays of @{ pat = ...; val = ... })
$reps = @(
    # Houses specific
    @{ pat = "g" + $fffd.ToString() + $fffd.ToString() + $fffd.ToString(); val = $house.ToString() },
    @{ pat = "gY?" + $fffd.ToString(); val = $house.ToString() },
    @{ pat = "gY?"; val = $house.ToString() },
    @{ pat = "g" + $fffd.ToString() + $fffd.ToString() + "l"; val = $house.ToString() },
    
    # Header logo and atlas
    @{ pat = $fffd.ToString() + "?" + $fffd.ToString() + " Zodyak"; val = $star.ToString() + " Zodyak" },
    @{ pat = $fffd.ToString() + "o" + $fffd.ToString() + " Zodyak"; val = $star.ToString() + " Zodyak" },
    @{ pat = "o Zodyak"; val = $star.ToString() + " Zodyak" },
    @{ pat = "? Atlasa"; val = $star.ToString() + " Atlasa" },
    @{ pat = $fffd.ToString() + "? Atlasa"; val = $star.ToString() + " Atlasa" },
    @{ pat = "Atlasa D" + $fffd.ToString() + "n"; val = "Atlasa D" + $o_k + "n" },
    @{ pat = "Atlasa D" + $o_k.ToString() + "n" + $fffd.ToString(); val = "Atlasa D" + $o_k + "n" },
    
    # Mottos and closing quotes
    @{ pat = "motto" + '="' + $fffd.ToString(); val = 'motto="“' },
    @{ pat = "motto" + ">" + $fffd.ToString(); val = 'motto">“' },
    @{ pat = "?oBenlik"; val = "“Benlik" },
    @{ pat = "?oBen"; val = "“Ben" },
    @{ pat = "?o"; val = "“" },
    @{ pat = $fffd.ToString() + "</p>"; val = "”</p>" },
    @{ pat = $fffd.ToString() + $fffd.ToString() + "</p>"; val = "”</p>" },
    @{ pat = $fffd.ToString() + $fffd.ToString() + $fffd.ToString() + "</p>"; val = "”</p>" },
    @{ pat = "." + $fffd.ToString() + "</p>"; val = "." + "”</p>" },
    @{ pat = "." + $fffd.ToString() + $fffd.ToString() + "</p>"; val = "." + "”</p>" },
    @{ pat = "." + $fffd.ToString() + $fffd.ToString() + $fffd.ToString() + "</p>"; val = "." + "”</p>" },
    @{ pat = "?</p>"; val = "”</p>" },
    @{ pat = "??</p>"; val = "”</p>" },
    @{ pat = "??"; val = "”" },
    
    # Date separators and degree symbols
    @{ pat = " 5, 14, 23 " + $fffd.ToString() + " "; val = " 5, 14, 23 " + $emdash_str + " " },
    @{ pat = " 9, 18, 27 " + $fffd.ToString() + " "; val = " 9, 18, 27 " + $emdash_str + " " },
    @{ pat = " 7, 11, 22, 29 " + $fffd.ToString() + " "; val = " 7, 11, 22, 29 " + $emdash_str + " " },
    @{ pat = " 4, 8, 22, 28 " + $fffd.ToString() + " "; val = " 4, 8, 22, 28 " + $emdash_str + " " },
    @{ pat = " 6, 15, 24, 33 " + $fffd.ToString() + " "; val = " 6, 15, 24, 33 " + $emdash_str + " " },
    @{ pat = " 3, 9, 12, 30 " + $fffd.ToString() + " "; val = " 3, 9, 12, 30 " + $emdash_str + " " },
    @{ pat = " 2, 7, 11, 20 " + $fffd.ToString() + " "; val = " 2, 7, 11, 20 " + $emdash_str + " " },
    @{ pat = " ? " + "<b>Ugurlu Renkler"; val = " " + $emdash_str + " <b>Uğurlu Renkler" },
    @{ pat = " ? " + "<b>U" + $c_k.ToString() + "yurlu Renkler"; val = " " + $emdash_str + " <b>Uğurlu Renkler" },
    @{ pat = " ? " + "<b>U" + $c_k.ToString() + "Yurlu Renkler"; val = " " + $emdash_str + " <b>Uğurlu Renkler" },
    @{ pat = " ? " + "<b>UYurlu"; val = " " + $emdash_str + " <b>Uğurlu" },
    @{ pat = " ? " + "<b>U" + $fffd.ToString() + "Yurlu"; val = " " + $emdash_str + " <b>Uğurlu" },
    @{ pat = " ? " + "<b>U" + $fffd.ToString() + $fffd.ToString() + "urlu"; val = " " + $emdash_str + " <b>Uğurlu" },
    @{ pat = " ? " + "<b>U" + $fffd.ToString() + "gurlu"; val = " " + $emdash_str + " <b>Uğurlu" },
    @{ pat = " ? " + "<b>Ugurlu"; val = " " + $emdash_str + " <b>Uğurlu" },
    
    # Other separators
    @{ pat = " turuncu " + $fffd.ToString() + " <b>"; val = " turuncu " + $emdash_str + " <b>" },
    @{ pat = " koyu lacivert " + $fffd.ToString() + " <b>"; val = " koyu lacivert " + $emdash_str + " <b>" },
    @{ pat = " pastel tonlar " + $fffd.ToString() + " <b>"; val = " pastel tonlar " + $emdash_str + " <b>" },
    @{ pat = " a-ik mavi " + $fffd.ToString() + " <b>"; val = " açık mavi " + $emdash_str + " <b>" },
    @{ pat = " açık mavi " + $fffd.ToString() + " <b>"; val = " açık mavi " + $emdash_str + " <b>" },
    @{ pat = " turkuaz " + $fffd.ToString() + " <b>"; val = " turkuaz " + $emdash_str + " <b>" },
    @{ pat = " kahverengi " + $fffd.ToString() + " <b>"; val = " kahverengi " + $emdash_str + " <b>" },
    
    # Days separators
    @{ pat = " g" + $u_k.ToString() + "n" + $u_k.ToString() + ") " + $fffd.ToString() + " <b>"; val = " günü) " + $emdash_str + " <b>" },
    @{ pat = " günü) " + $fffd.ToString() + " <b>"; val = " günü) " + $emdash_str + " <b>" },
    @{ pat = " g" + $u_k.ToString() + "n" + $u_k.ToString() + ") " + $fffd.ToString() + " <b>"; val = " günü) " + $emdash_str + " <b>" },
    
    # Specific words
    # öğretim
    @{ pat = $fffd.ToString() + "Yretim"; val = $o_k + "ğretim" },
    @{ pat = "Yretim"; val = $o_k + "ğretim" },
    @{ pat = "yretim"; val = $o_k + "ğretim" },
    @{ pat = $fffd.ToString() + "gretim"; val = $o_k + "ğretim" },
    
    # öldüğünde / öldüğü
    @{ pat = $fffd.ToString() + "ld-G" + $u_b.ToString() + "nde"; val = $o_k + "ldüğünde" },
    @{ pat = $fffd.ToString() + "ld-g-nde"; val = $o_k + "ldüğünde" },
    @{ pat = $fffd.ToString() + "ld-G" + $u_b.ToString(); val = $o_k + "ldüğü" },
    @{ pat = $fffd.ToString() + "ld-g-"; val = $o_k + "ldüğü" },
    
    # ölümlü / ölümsüz
    @{ pat = $fffd.ToString() + "l-ml" + $u_k.ToString(); val = $o_k + "lümlü" },
    @{ pat = $fffd.ToString() + "l-ml" + $u_k.ToString() + "ler"; val = $o_k + "lümlüler" },
    @{ pat = $fffd.ToString() + "l-ms-z"; val = $o_k + "lümsüz" },
    @{ pat = $fffd.ToString() + "l-ms-zl-g" + $u_k.ToString() + "n" + $u_k.ToString(); val = $o_k + "lümsüzlüğünü" },
    @{ pat = $fffd.ToString() + "l-ms-zl-g" + $u_k.ToString(); val = $o_k + "lümsüzlüğü" },
    @{ pat = $fffd.ToString() + "l-ms-zl-k"; val = $o_k + "lümsüzlük" },
    @{ pat = $fffd.ToString() + "l-mden"; val = $o_k + "lümden" },
    
    # dürtüsünü / dürüstlüğü
    @{ pat = "d-rt-s-n" + $fffd.ToString(); val = "dürtüsünü" },
    @{ pat = "d-r-stl-g" + $fffd.ToString(); val = "dürüstlüğü" },
    
    # öncüsü / ödüllü / ömür
    @{ pat = $o_k.ToString() + "nc" + $u_k.ToString() + "-s" + $fffd.ToString(); val = "öncüsü" },
    @{ pat = "nc-s" + $fffd.ToString(); val = "öncüsü" },
    @{ pat = "dll" + $fffd.ToString(); val = "ödüllü" },
    @{ pat = $fffd.ToString() + "d-ll" + $fffd.ToString(); val = "ödüllü" },
    @{ pat = "mr-n" + $fffd.ToString(); val = "ömrünü" },
    
    # üzgün / özgünlüğü
    @{ pat = "stresli, " + $fffd.ToString() + "zG" + $fffd.ToString() + "n"; val = "stresli, üzgün" },
    @{ pat = "stresli, " + $fffd.ToString() + "zG?n"; val = "stresli, üzgün" },
    @{ pat = $fffd.ToString() + "zG" + $fffd.ToString() + "nl" + $fffd.ToString() + "g" + $fffd.ToString(); val = "özgünlüğü" },
    @{ pat = "zGnl-g" + $fffd.ToString(); val = "özgünlüğü" },
    
    # çabuk / çakra / çizerim / çizer / çelişir / çeşitlendirir
    @{ pat = $fffd.ToString() + "abuk"; val = $c_k + "abuk" },
    @{ pat = $fffd.ToString() + "akra"; val = $c_k + "akra" },
    @{ pat = $fffd.ToString() + "izerim"; val = $c_k + "izerim" },
    @{ pat = $fffd.ToString() + "izer"; val = $c_k + "izer" },
    @{ pat = $fffd.ToString() + "elisir"; val = $c_k + "elişir" },
    @{ pat = $fffd.ToString() + "esitlendirir"; val = $c_k + "eşitlendirir" },
    @{ pat = $fffd.ToString() + "arpmalara"; val = $c_k + "arpmalara" },
    
    # ön plandadır / özen
    @{ pat = $fffd.ToString() + "n plandadir"; val = $o_k + "n plandadır" },
    @{ pat = $fffd.ToString() + "n planda"; val = $o_k + "n planda" },
    @{ pat = $fffd.ToString() + "zen g"; val = $o_k + "zen g" },
    @{ pat = $fffd.ToString() + "zen,"; val = $o_k + "zen," },
    
    # üstüne / üst düzey / üstünde / üstlenildiği
    @{ pat = $fffd.ToString() + "st-ne"; val = $u_k + "stüne" },
    @{ pat = $fffd.ToString() + "st d-zey"; val = $u_k + "st düzey" },
    @{ pat = $fffd.ToString() + "st-nde"; val = $u_k + "stünde" },
    @{ pat = $fffd.ToString() + "stlenildigi"; val = $u_k + "stlenildiği" },
    
    # geçmişe / geçmişte
    @{ pat = "ge" + $fffd.ToString() + "mi" + $fffd.ToString() + "Ye"; val = "geçmişe" },
    @{ pat = "gemiYe"; val = "geçmişe" },
    @{ pat = "ge" + $fffd.ToString() + "mi" + $fffd.ToString() + "te"; val = "geçmişte" },
    
    # kemik sağlığına
    @{ pat = "kemik sag" + $fffd.ToString() + "l" + $fffd.ToString() + "igina"; val = "kemik sağlığına" },
    
    # sözlü / kötülüğü / ödün / çatışmadan
    @{ pat = "s" + $fffd.ToString() + "zl" + $fffd.ToString(); val = "sözlü" },
    @{ pat = "szl"; val = "sözlü" },
    @{ pat = "K-t-l-g" + $fffd.ToString(); val = "Kötülüğü" },
    @{ pat = $fffd.ToString() + "d-n verebilir"; val = "ödün verebilir" },
    @{ pat = $fffd.ToString() + "atismadan"; val = "çatışmadan" },
    
    # René Descartes
    @{ pat = "Ren" + $fffd.ToString() + " Descartes"; val = "René Descartes" },
    @{ pat = "D-s-n-yorum, " + $fffd.ToString() + "yleyse"; val = "Düşünüyorum, öyleyse" },
    
    # footer / copyright
    @{ pat = $fffd.ToString() + " 2026 Zodyak"; val = $copy.ToString() + " 2026 Zodyak" },
    @{ pat = "Zodyak Atlasi " + $fffd.ToString() + " G"; val = "Zodyak Atlası " + $emdash_str + " G" },
    @{ pat = "Zodyak Atlas" + $i_n.ToString() + " " + $fffd.ToString() + " G"; val = "Zodyak Atlası " + $emdash_str + " G" },
    
    # general sign names or typos
    # gücünü
    @{ pat = "g" + $u_k.ToString() + "c" + $u_k.ToString() + "n" + $fffd.ToString(); val = "gücünü" },
    @{ pat = "g" + $u_k.ToString() + "c" + $u_k.ToString() + "n" + $u_k.ToString() + $fffd.ToString(); val = "gücünü" },
    @{ pat = "g" + $u_k.ToString() + "c" + $u_k.ToString() + "n" + $u_k.ToString(); val = "gücünü" },
    
    # güçlü / güçlüdür
    @{ pat = "g" + $u_k.ToString() + $c_k.ToString() + "l" + $u_k.ToString() + $fffd.ToString(); val = "güçlü" },
    @{ pat = "g" + $u_k.ToString() + $c_k.ToString() + "l" + $u_k.ToString() + "-" + "d" + "-" + "r"; val = "güçlüdür" },
    @{ pat = "g" + $u_k.ToString() + $c_k.ToString() + "l" + $u_k.ToString() + "d" + $u_k.ToString() + "r"; val = "güçlüdür" },
    @{ pat = "g" + $u_k.ToString() + $c_k.ToString() + "l" + $u_k.ToString() + "d" + $u_k.ToString() + "r" + $fffd.ToString(); val = "güçlüdür" },
    @{ pat = "g" + $u_k.ToString() + $c_k.ToString() + "l" + $u_k.ToString() + "n" + $u_k.ToString() + $fffd.ToString(); val = "güçlülüğü" },
    
    # bağlılık
    @{ pat = "bag" + $u_k.ToString() + $c_k.ToString() + "l" + $u_k.ToString() + "ilik"; val = "bağlılık" },
    @{ pat = "bag" + $u_k.ToString() + $c_k.ToString() + "l" + $u_k.ToString() + "i"; val = "bağlı" },
    
    # inşaa -> inşa
    @{ pat = "in" + $fffd.ToString() + "Ya"; val = "inşa" },
    
    # general FFFD cleanup at word ends
    @{ pat = "tanr" + $i_n.ToString() + "a" + $fffd.ToString(); val = "tanrıça" },
    @{ pat = "tanr" + $i_n.ToString() + $c_k.ToString() + "a" + $fffd.ToString(); val = "tanrıça" },
    @{ pat = "kiskan" + $c_k.ToString() + $fffd.ToString(); val = "kıskanç" },
    @{ pat = "kiskan" + $fffd.ToString(); val = "kıskanç" }
)

# Apply to all files
foreach ($file in $allFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    
    # Apply replacements
    foreach ($pair in $reps) {
        $pat = $pair.pat
        $val = $pair.val
        if ($content.Contains($pat)) {
            $content = $content.Replace($pat, $val)
        }
    }
    
    # Re-save
    [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
    Write-Host "Processed spelling fixes in $($file.FullName.Replace($projectDir, ''))"
}

Write-Host "`nAll spelling fixes applied!"
