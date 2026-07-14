$files = @(
    "index.html",
    "dogum-haritasi.html",
    "uyum.html",
    "testler.html",
    "sozluk.html",
    "cin-burclari.html",
    "search.html",
    "takvim.html"
)

# Harfleri Unicode char kodlarıyla tanımlayarak powershell yorumlayıcı kodlama hatasını engelliyoruz:
$c_kucuk = [char]0x00E7
$c_buyuk = [char]0x00C7
$g_kucuk = [char]0x011F
$i_noktasiz = [char]0x0131
$o_kucuk = [char]0x00F6
$u_kucuk = [char]0x00FC
$search_emoji = [char]0xD83D + [char]0xDD0D

$menuHtml = "      <a href=`"index.html#burclar`">12 Bur$c_kucuk</a>`r`n" +
            "      <a href=`"dogum-haritasi.html`">Do${g_kucuk}um Haritas${i_noktasiz}</a>`r`n" +
            "      <a href=`"uyum.html`">Bur${c_kucuk} Uyumu</a>`r`n" +
            "      <a href=`"testler.html`">Astroloji Testleri</a>`r`n" +
            "      <a href=`"sozluk.html`">S${o_kucuk}zl${u_kucuk}k</a>`r`n" +
            "      <a href=`"cin-burclari.html`">${c_buyuk}in Bur${c_kucuk}lar${i_noktasiz}</a>`r`n" +
            "      <a href=`"takvim.html`">Kozmik Takvim</a>`r`n" +
            "      <a href=`"search.html`">Arama $search_emoji</a>"

foreach ($f in $files) {
    $path = Join-Path "c:\Users\alper\Desktop\zodiacrf" $f
    if (Test-Path $path) {
        # UTF-8 olarak yükle
        $c = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
        
        # mainNav bloğunu bul ve içeriğini değiştir
        $pattern = '(?s)<nav class="nav" id="mainNav"[^>]*>.*?</nav>'
        
        $newNav = "<nav class=" + '"' + "nav" + '"' + " id=" + '"' + "mainNav" + '"' + " aria-label=" + '"' + "Ana navigasyon" + '"' + ">`r`n" + $menuHtml + "`r`n    </nav>"
        
        $c = [System.Text.RegularExpressions.Regex]::Replace($c, $pattern, $newNav)
        
        # UTF-8 olarak geri yaz
        [System.IO.File]::WriteAllText($path, $c, [System.Text.Encoding]::UTF8)
        Write-Host "Fixed and standardized menu in: $f"
    }
}

Write-Host "Turkish character menu fix complete!"
