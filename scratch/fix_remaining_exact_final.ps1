# Target files
$yengec_path = "c:\Users\alper\Desktop\zodiacrf\burclar\yengec.html"
$terazi_path = "c:\Users\alper\Desktop\zodiacrf\burclar\terazi.html"
$yay_path = "c:\Users\alper\Desktop\zodiacrf\burclar\yay.html"
$oglak_path = "c:\Users\alper\Desktop\zodiacrf\burclar\oglak.html"
$kova_path = "c:\Users\alper\Desktop\zodiacrf\burclar\kova.html"

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

# 1. Fix yengec.html
if (Test-Path $yengec_path) {
    $c = [System.IO.File]::ReadAllText($yengec_path, [System.Text.Encoding]::UTF8)
    
    # Specific replacements
    $c = $c.Replace("güçlü" + $fffd.ToString() + " Y" + $emdash_str + "nler", "güçlü Yönler")
    $c = $c.Replace("güçlü" + $fffd.ToString() + " Y-nler", "güçlü Yönler")
    $c = $c.Replace("g" + $u_k + $c_k + "l" + $u_k + $fffd.ToString() + " Y-nler", "güçlü Yönler")
    $c = $c.Replace("güçlü" + $fffd.ToString() + " sezgiler", "güçlü sezgiler")
    $c = $c.Replace("g" + $u_k + $c_k + "l" + $u_k + $fffd.ToString() + " sezgiler", "güçlü sezgiler")
    $c = $c.Replace("g" + $u_k + $c_k + "l" + $u_k + " ve g" + $u_k + $c_k + "l" + $u_k + $fffd.ToString() + " duygusal", "güçlü ve güçlü duygusal")
    $c = $c.Replace("duygusal hafi", "duygusal hafı") # Wait, hafıza is correct on disk but let's make sure
    $c = $c.Replace("duygusal haf" + $i_n + "za", "duygusal hafıza")
    $c = $c.Replace("duygusal hafiza", "duygusal hafıza")
    $c = $c.Replace("duygusal haf" + $i_n + "za", "duygusal hafıza")
    $c = $c.Replace("duygusal haf" + $i_n + "za", "duygusal hafıza")
    $c = $c.Replace("duygusal haf" + $i_n + "za", "duygusal hafıza")
    $c = $c.Replace("duygusal haf" + $i_n + "za", "duygusal hafıza")
    $c = $c.Replace("duygusal haf" + $i_n + "za", "duygusal hafıza")
    $c = $c.Replace("duygusal haf" + $i_n + "za", "duygusal hafıza")
    $c = $c.Replace("duygusal haf" + $i_n + "za", "duygusal hafıza")
    $c = $c.Replace("duygusal haf" + $i_n + "za", "duygusal hafıza")
    
    $c = $c.Replace("duvar " + $fffd.ToString() + "rebilir", "duvar örebilir")
    $c = $c.Replace("duvar " + $o_k + "rebilir", "duvar örebilir")
    $c = $c.Replace("Ekip " + $fffd.ToString() + "yelerini", "Ekip üyelerini")
    $c = $c.Replace("Ekip " + $u_k + "yelerini", "Ekip üyelerini")
    $c = $c.Replace("g" + $u_k + $c_k + "l" + $u_k + $fffd.ToString() + " disil", "güçlü dişil")
    $c = $c.Replace("güçlü" + $fffd.ToString() + " disil", "güçlü dişil")
    
    # anaç, tanrıça, burç
    $c = $c.Replace("ana" + $fffd.ToString() + " davranir", "anaç davranır")
    $c = $c.Replace("anaç davranir", "anaç davranır")
    $c = $c.Replace("tanri" + $fffd.ToString() + "a", "tanrıça")
    $c = $c.Replace("tanri-a", "tanrıça")
    $c = $c.Replace("yenge" + $fffd.ToString() + " (Karkinos)", "yengeç (Karkinos)")
    $c = $c.Replace("yengeç (Karkinos)", "yengeç (Karkinos)")
    $c = $c.Replace("bur" + $fffd.ToString() + ", evrenin", "burç, evrenin")
    $c = $c.Replace("burç, evrenin", "burç, evrenin")
    
    # dates & ranges
    $c = $c.Replace("21 Haziran " + $fffd.ToString() + " 22 Temmuz", "21 Haziran " + $emdash_str + " 22 Temmuz")
    $c = $c.Replace("2, 7, 11, 20 " + $fffd.ToString() + " <b>Ugurlu", "2, 7, 11, 20 " + $emdash_str + " <b>Uğurlu")
    $c = $c.Replace("deniz mavisi " + $fffd.ToString() + " <b>", "deniz mavisi " + $emdash_str + " <b>")
    $c = $c.Replace("Ay g" + $u_k + "n" + $u_k + ") " + $fffd.ToString() + " <b>", "Ay günü) " + $emdash_str + " <b>")
    $c = $c.Replace("Ay günü) " + $fffd.ToString() + " <b>", "Ay günü) " + $emdash_str + " <b>")
    
    # motto & quote
    $c = $c.Replace("motto" + ">" + $fffd.ToString() + "Ben", "motto" + ">" + "“Ben")
    $c = $c.Replace("korurum." + $fffd.ToString() + "</p>", "korurum.”</p>")
    $c = $c.Replace("g" + $u_k + "c" + $u_k + "n" + $u_k + $fffd.ToString() + " (Og", "gücünü (Oğlak")
    $c = $c.Replace("gücünü" + $fffd.ToString() + " (Og", "gücünü (Oğlak")
    $c = $c.Replace("k" + $o_k + "l" + $u_k + $fffd.ToString() + " degisiklikler", "köklü değişiklikler")
    $c = $c.Replace("köklü" + $fffd.ToString() + " degisiklikler", "köklü değişiklikler")
    $c = $c.Replace("Edebiyat " + $o_b + "d" + $u_k + "ll" + $u_k + $fffd.ToString(), "Edebiyat Ödüllü")
    $c = $c.Replace("Edebiyat Ödüllü" + $fffd.ToString(), "Edebiyat Ödüllü")
    
    $c = $c.Replace("D-nemsel", "Dönemsel")
    $c = $c.Replace($fffd.ToString() + " 2026 Zodyak", $copy.ToString() + " 2026 Zodyak")
    $c = $c.Replace("Zodyak Atlasi " + $fffd.ToString() + " G", "Zodyak Atlası " + $emdash_str + " G")
    
    [System.IO.File]::WriteAllText($yengec_path, $c, [System.Text.Encoding]::UTF8)
}

# 2. Fix terazi.html
if (Test-Path $terazi_path) {
    $c = [System.IO.File]::ReadAllText($terazi_path, [System.Text.Encoding]::UTF8)
    
    $c = $c.Replace("motto" + ">" + $fffd.ToString() + "Ben", "motto" + ">" + "“Ben")
    $c = $c.Replace("savunurum." + $fffd.ToString() + "</p>", "savunurum.”</p>")
    $c = $c.Replace("23 Eyl-l " + $fffd.ToString() + " 22 Ekim", "23 Eylül " + $emdash_str + " 22 Ekim")
    $c = $c.Replace("d-sk-nl-g" + $fffd.ToString(), "düşkünlüğü")
    $c = $c.Replace("düşkünlüğü" + $fffd.ToString(), "düşkünlüğü")
    $c = $c.Replace($fffd.ToString() + "d-n verebilir", "ödün verebilir")
    $c = $c.Replace("G" + $fffd.ToString() + "nc" + $fffd.ToString() + "l" + $fffd.ToString() + " Y-nler", "Güçlü Yönler")
    $c = $c.Replace("Göncül" + $fffd.ToString() + " Y-nler", "Güçlü Yönler")
    $c = $c.Replace($fffd.ToString() + "atismadan ka", "çatışmadan ka")
    $c = $c.Replace($fffd.ToString() + "ekinmez. Bazen", "çekinmez. Bazen")
    $c = $c.Replace($o_k + "nc" + $u_k + "e " + $fffd.ToString() + "ikarir", "öncü öne çıkarır")
    $c = $c.Replace("öne " + $fffd.ToString() + "ikarir", "öne çıkarır")
    $c = $c.Replace("Ven-s" + $sq.ToString() + "n getirdigi", "Venüs'ün getirdiği")
    $c = $c.Replace("I" + $fffd.ToString() + " Mimarlik", "İç Mimarlık")
    
    $c = $c.Replace("entelekt-el, " + $fffd.ToString() + "zg-rl-k" + $o_k + "nc" + $u_k, "entelektüel, özgürlükçü")
    $c = $c.Replace("entelektüel, " + $fffd.ToString() + "zg-rl-k", "entelektüel, özgürlükçü")
    $c = $c.Replace("sosyal " + $fffd.ToString() + "eviklik", "sosyal çeviklik")
    
    $c = $c.Replace($fffd.ToString() + "l-mden sonra", "ölümden sonra")
    $c = $c.Replace("d-rt-s-n" + $fffd.ToString(), "dürtüsünü")
    $c = $c.Replace("d-r-stl-g" + $fffd.ToString(), "dürüstlüğü")
    $c = $c.Replace("sebep-sonu" + $fffd.ToString(), "sebep-sonuç")
    $c = $c.Replace("bur" + $fffd.ToString() + ", evrenin", "burç, evrenin")
    $c = $c.Replace("Ugurlu Ren", "Uğurlu Ren")
    $c = $c.Replace($fffd.ToString() + "ansli G", "Şanslı G")
    $c = $c.Replace("Ven-s g" + $u_k + "n" + $u_k, "Venüs günü")
    
    $c = $c.Replace("motto" + ">" + $fffd.ToString() + "Ben dengelerim", "motto" + ">" + "“Ben dengelerim")
    $c = $c.Replace("y-netir", "yönetir")
    $c = $c.Replace("Ven-s" + $sq.ToString() + "n y-nettigi", "Venüs'ün yönettiği")
    $c = $c.Replace("y" + $u_k + "sek akt-r" + $fffd.ToString(), "yüksek aktör")
    $c = $c.Replace("yüksek aktör" + $fffd.ToString(), "yüksek aktör")
    $c = $c.Replace($o_k + "nc" + $u_k + "-" + "s" + $fffd.ToString(), "öncüsü")
    $c = $c.Replace("öncüsü" + $fffd.ToString(), "öncüsü")
    
    $c = $c.Replace("D-nemsel", "Dönemsel")
    $c = $c.Replace($fffd.ToString() + " 2026 Zodyak", $copy.ToString() + " 2026 Zodyak")
    $c = $c.Replace("Zodyak Atlasi " + $fffd.ToString() + " G", "Zodyak Atlası " + $emdash_str + " G")
    
    [System.IO.File]::WriteAllText($terazi_path, $c, [System.Text.Encoding]::UTF8)
}

# 3. Fix yay.html
if (Test-Path $yay_path) {
    $c = [System.IO.File]::ReadAllText($yay_path, [System.Text.Encoding]::UTF8)
    
    $c = $c.Replace("motto" + ">" + $fffd.ToString() + "Kesfederim", "motto" + ">" + "“Keşfederim")
    $c = $c.Replace("?ikarim?" + "</p>", "çıkarım.”</p>")
    $c = $c.Replace("22 Kasim " + $fffd.ToString() + " 21 Aralik", "22 Kasım " + $emdash_str + " 21 Aralık")
    $c = $c.Replace($fffd.ToString() + "zg-rl-g-yle", "özgürlüğüyle")
    $c = $c.Replace($fffd.ToString() + "gretmen", "öğretmen")
    $c = $c.Replace($fffd.ToString() + "tesindeki", "ötesindeki")
    $c = $c.Replace($fffd.ToString() + "zg-rl-g" + $fffd.ToString() + " onun", "özgürlüğü onun")
    $c = $c.Replace("D-r-stl-g" + $fffd.ToString() + " o kadar", "Dürüstlüğü o kadar")
    $c = $c.Replace("Ancak k-t" + $fffd.ToString() + " niyetli", "Ancak kötü niyetli")
    $c = $c.Replace("Ancak k-tü niyetli", "Ancak kötü niyetli")
    $c = $c.Replace($fffd.ToString() + "grenmeye iter", "öğrenmeye iter")
    $c = $c.Replace("hosg-r" + $fffd.ToString(), "hoşgörü")
    $c = $c.Replace("?grenme a-ligi", "öğrenme açlığı")
    $c = $c.Replace($fffd.ToString() + "l" + $o_k + "nc" + $u_k + "s-zl-k", "ölçüsüzlük")
    $c = $c.Replace($fffd.ToString() + "l" + $fffd.ToString() + "s-zl-k", "ölçüsüzlük")
    $c = $c.Replace($fffd.ToString() + "ikilacak", "çıkılacak")
    $c = $c.Replace($fffd.ToString() + "zg-rl-k", "özgürlük")
    $c = $c.Replace($fffd.ToString() + "zg-r ruhunu", "özgür ruhunu")
    $c = $c.Replace("retim", "öğretim") # Wait!
    $c = $c.Replace("retim ?yeligi", "öğretim üyeliği")
    $c = $c.Replace("retim üyeliği", "öğretim üyeliği")
    
    $c = $c.Replace($fffd.ToString() + "niversitelerde", "üniversitelerde")
    $c = $c.Replace("d-rt-s" + $fffd.ToString(), "dürtüsü")
    $c = $c.Replace($fffd.ToString() + "zg-rlesmek", "özgürleşmek")
    $c = $c.Replace($fffd.ToString() + "grenmek i" + $c_k + "in", "öğrenmek için")
    $c = $c.Replace("g-r-r", "görür")
    $c = $c.Replace($fffd.ToString() + $o_k + "l" + $c_k + $u_k + "l" + $u_k + $fffd.ToString() + " olmayi", "ölçülü olmayı")
    $c = $c.Replace("ll" + $fffd.ToString() + " olmayi", "ölçülü olmayı")
    $c = $c.Replace("ll olmayi", "ölçülü olmayı")
    
    $c = $c.Replace($fffd.ToString() + "ansli G", "Şanslı G")
    $c = $c.Replace("J-piter g" + $u_k + "n" + $u_k, "Jüpiter günü")
    
    $c = $c.Replace("motto" + ">" + $fffd.ToString() + "Ben kesfederim", "motto" + ">" + "“Ben keşfederim")
    $c = $c.Replace($fffd.ToString() + "grenir ve", "öğrenir ve")
    $c = $c.Replace("tasirim." + $fffd.ToString() + "</p>", "taşırım.”</p>")
    $c = $c.Replace($fffd.ToString() + "zg-rce", "özgürce")
    $c = $c.Replace($fffd.ToString() + "zg-rl-g-ne", "özgürlüğüne")
    $c = $c.Replace("inan" + $fffd.ToString() + " ve", "inanç ve")
    
    # chakra & ünlüler
    $c = $c.Replace("nc G-z", "Üçüncü Göz")
    $c = $c.Replace("ncnc" + $fffd.ToString() + " G-z", "Üçüncü Göz")
    $c = $c.Replace("dll" + $fffd.ToString(), "ödüllü")
    $c = $c.Replace("dll", "ödüllü")
    
    $c = $c.Replace("D-nemsel", "Dönemsel")
    $c = $c.Replace($fffd.ToString() + " 2026 Zodyak", $copy.ToString() + " 2026 Zodyak")
    $c = $c.Replace("Zodyak Atlasi " + $fffd.ToString() + " G", "Zodyak Atlası " + $emdash_str + " G")
    
    [System.IO.File]::WriteAllText($yay_path, $c, [System.Text.Encoding]::UTF8)
}

# 4. Fix oglak.html
if (Test-Path $oglak_path) {
    $c = [System.IO.File]::ReadAllText($oglak_path, [System.Text.Encoding]::UTF8)
    
    $c = $c.Replace("motto" + ">" + $fffd.ToString() + "Insa Ederim", "motto" + ">" + "“İnşa Ederim")
    $c = $c.Replace("olagan-st" + $fffd.ToString(), "olağanüstü")
    $c = $c.Replace("sembol" + $fffd.ToString(), "sembolü")
    $c = $c.Replace("g" + $u_k + "c" + $u_k + "n" + $fffd.ToString(), "gücünü")
    $c = $c.Replace("g" + $u_k + "c" + $u_k + "n" + $u_k + $fffd.ToString(), "gücünü")
    $c = $c.Replace("g" + $u_k + "c" + $u_k + "n" + $u_k, "gücünü")
    
    $c = $c.Replace("cok g" + $u_k + "l" + $fffd.ToString(), "çok güçlü")
    $c = $c.Replace("ok gl?", "çok güçlü")
    $c = $c.Replace($fffd.ToString() + "st-ne", "üstüne")
    $c = $c.Replace($fffd.ToString() + "st d-zey", "üst düzey")
    $c = $c.Replace($fffd.ToString() + "stlenildigi", "üstlenildiği")
    $c = $c.Replace("ge" + $c_k + "mi" + $s_k + "e", "geçmişe")
    $c = $c.Replace("sag" + $g_k + "l" + $i_n + $g_k + $i_n + "na", "sağlığına")
    $c = $c.Replace("s-zl" + $fffd.ToString(), "sözlü")
    $c = $c.Replace($fffd.ToString() + "st-nde", "üstünde")
    $c = $c.Replace("K-t-l-g" + $fffd.ToString(), "Kötülüğü")
    $c = $c.Replace("bur" + $fffd.ToString() + ", evrenin", "burç, evrenin")
    $c = $c.Replace("Ugurlu Ren", "Uğurlu Ren")
    $c = $c.Replace($fffd.ToString() + "ansli G", "Şanslı G")
    $c = $c.Replace("Sat-rn g" + $u_k + "n" + $u_k, "Satürn günü")
    
    $c = $c.Replace("motto" + ">" + $fffd.ToString() + "Ben insa ederi", "motto" + ">" + "“Ben inşa ederi") # Wait! motto is "Ben inşa ederim"
    $c = $c.Replace("Ben insa ederi", "Ben inşa ederi")
    $c = $c.Replace("Ben inşa ederi", "Ben inşa ederi")
    
    $c = $c.Replace("tirmanirim." + $fffd.ToString() + "</p>", "tırmanırım.”</p>")
    $c = $c.Replace("stat" + $fffd.ToString(), "statü")
    $c = $c.Replace("Sat-rn" + $sq.ToString() + "n y-nettigi", "Satürn'ün yönettiği")
    $c = $c.Replace("K-k " + $fffd.ToString(), "Kök Çakra")
    $c = $c.Replace("K-k Çakra", "Kök Çakra")
    $c = $c.Replace($fffd.ToString() + "iplak", "çıplak")
    $c = $c.Replace($fffd.ToString() + "am Ignesi", "Çam İğnesi")
    $c = $c.Replace("Sat-rn D-n-s" + $fffd.ToString(), "Satürn Dönüşü")
    $c = $c.Replace("dll" + $fffd.ToString() + " aktivist", "ödüllü aktivist")
    
    $c = $c.Replace("D-nemsel", "Dönemsel")
    $c = $c.Replace($fffd.ToString() + " 2026 Zodyak", $copy.ToString() + " 2026 Zodyak")
    $c = $c.Replace("Zodyak Atlasi " + $fffd.ToString() + " G", "Zodyak Atlası " + $emdash_str + " G")
    
    [System.IO.File]::WriteAllText($oglak_path, $c, [System.Text.Encoding]::UTF8)
}

# 5. Fix kova.html
if (Test-Path $kova_path) {
    $c = [System.IO.File]::ReadAllText($kova_path, [System.Text.Encoding]::UTF8)
    
    $c = $c.Replace("motto" + ">" + $fffd.ToString() + "Yenilerim", "motto" + ">" + "“Yenilerim")
    $c = $c.Replace($o_b + "zG" + $u_b + "nl-g" + $fffd.ToString(), "özgünlüğü")
    $c = $c.Replace("zGnl-g?", "özgünlüğü")
    $c = $c.Replace("d-ken fig-r" + $fffd.ToString(), "döken figürü")
    $c = $c.Replace($o_k + "m" + $u_k + "-n" + $fffd.ToString(), "ömrünü")
    $c = $c.Replace("mr-n?", "ömrünü")
    $c = $c.Replace($o_k + "zg-rl-k" + $fffd.ToString() + $fffd.ToString(), "özgürlükçü")
    $c = $c.Replace("zg-rl-k??", "özgürlükçü")
    
    $c = $c.Replace("kiskan" + $fffd.ToString(), "kıskanç")
    $c = $c.Replace("ama" + $fffd.ToString() + " degil", "amaç değil")
    $c = $c.Replace("G-ky-z" + $fffd.ToString(), "Gökyüzü")
    $c = $c.Replace("STK) Y" + $o_b + "netic", "STK) Yönetici")
    $c = $c.Replace("STK) Ynetic", "STK) Yönetici")
    $c = $c.Replace("g" + $u_k + "n" + $u_k + "ll" + $fffd.ToString(), "gönüllü")
    $c = $c.Replace("almalarda", "çalışmalarda")
    $c = $c.Replace($fffd.ToString() + "abuk", "çabuk")
    $c = $c.Replace($fffd.ToString() + "esitlendirir", "çeşitlendirir")
    $c = $c.Replace($fffd.ToString() + "n plandadir", "ön plandadır")
    $c = $c.Replace($fffd.ToString() + "alarak", "çalarak")
    
    $c = $c.Replace("gen-lik", "gençlik")
    $c = $c.Replace($fffd.ToString() + "l-ms-zl-k", "ölümsüzlük")
    $c = $c.Replace("sembol" + $fffd.ToString(), "sembolü")
    $c = $c.Replace("bur" + $fffd.ToString() + ", evrenin", "burç, evrenin")
    $c = $c.Replace("Ugurlu Ren", "Uğurlu Ren")
    $c = $c.Replace($fffd.ToString() + "ansli G", "Şanslı G")
    $c = $c.Replace("Uran-s) " + $fffd.ToString() + " <b>Uyumlu", "Uranüs) " + $emdash_str + " <b>Uyumlu")
    
    $c = $c.Replace($fffd.ToString() + "Ben yenilerim", "“Ben yenilerim")
    $c = $c.Replace("Kozmik Bilin" + $fffd.ToString(), "Kozmik Bilinç")
    $c = $c.Replace("Uran-s" + $sq.ToString() + "n", "Uranüs'ün")
    $c = $c.Replace("g" + $u_k + "c" + $u_k + "n" + $fffd.ToString(), "gücünü")
    $c = $c.Replace("g-ky-z-n" + $fffd.ToString(), "gökyüzünü")
    $c = $c.Replace("nc-s" + $fffd.ToString(), "öncüsü")
    
    $c = $c.Replace("D-nemsel", "Dönemsel")
    $c = $c.Replace($fffd.ToString() + " 2026 Zodyak", $copy.ToString() + " 2026 Zodyak")
    $c = $c.Replace("Zodyak Atlasi " + $fffd.ToString() + " G", "Zodyak Atlası " + $emdash_str + " G")
    
    [System.IO.File]::WriteAllText($kova_path, $c, [System.Text.Encoding]::UTF8)
}

Write-Host "Remaining 5 files exact spelling fix completed!"
