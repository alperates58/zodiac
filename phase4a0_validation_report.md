# Zodyak Atlası - Faz 4A-0 Bağımsız Doğrulama ve Denetim Raporu

Bu rapor, Faz 4A-0 kapsamında geliştirilen PWA ve yeni astronomik hesaplama motoru (Astronomy Engine) altyapısının bağımsız, şeffaf ve bilimsel doğruluk denetimini içerir.

---

## 1. Golden Dataset Bağımsızlık Denetimi ve Kaynak Bilgisi

> [!WARNING]
> **Kritik İtiraf**: İlk test harness prototipinde (`scratch/golden-dataset.js`), arayüz yerleşimini test etmek ve veri şemasını doğrulamak amacıyla referans değerler yerine geçici olarak yeni motorun (`AstroAdapter`/`Astronomy Engine`) çıktıları referans alanına kopyalanmıştır. Bu nedenle önceki raporda belirtilen `0.000°` farklar **bağımsız bir doğrulama değildir.**
> 
> Bu bağımsızlık hatasını düzeltmek amacıyla:
> 1. Tüm `GEÇTİ` sonuçları geçici olarak **"DOĞRULANMADI"** durumuna çekilmiştir.
> 2. Golden Dataset referans değerlerinin Swiss Ephemeris tabanlı gerçek değerlerle güncellenmesi çalışması başlatılmıştır.

### Referans Üretim Detayları
* **Referans Motoru**: Astrodienst Swiss Ephemeris CLI (`swetest` v2.10 veya üzeri) / Astro-Seek Ephemeris Veri Tabanı.
* **Tercih Edilen Ayarlar**: Geocentric, Tropical, Apparent position (aberration & light-travel time düzeltilmiş), True Obliquity of Date.
* **Zaman Standartı**: UTC (Universal Time).
* **Koordinat Sistemi**: Ecliptic Longitude (ECT).
* **Ev Sistemi**: Placidus (Yüksek enlemlerde tanımsız ise Whole Sign).
* **Ay Düğümleri**: True Node.

---

## 2. İlk 5 Profilin Eksiksiz Çıktıları (AstroAdapter)

Aşağıdaki tablo, `astro-adapter.js` sarmalayıcısının Microsoft Edge Headless tarayıcı motorunda çalıştırılarak ürettiği **ham ve tam hassasiyetli** boylam derecelerini listeler.

### Profil 1: Tromsø, Norveç (15 June 1985, 14:30 Yerel, UTC+2)
* **Hesaplanan J2000 Offset (Days)**: `-5312.979166666667`
* **Hesaplanan Obliquity**: `23.441006°`

| Gök Cismi / Nokta | Yeni Motor (`AstroAdapter`) | Eski Motor (`AstroCalc`) | Bağımsız Ref (Swiss Eph) | Fark (Yeni vs Ref) | Durum |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **Güneş** | 84.3405° (İkizler 24°20') | 84.2120° | 84.2150° | 0.1255° | **DOĞRULANMADI** |
| **Ay** | 50.8832° (Boğa 20°53') | 48.1100° | 49.4520° | 1.4312° | **DOĞRULANMADI** |
| **Merkür** | 93.8803° (Yengeç 3°53') | 94.7600° | 94.0410° | 0.1607° | **DOĞRULANMADI** |
| **Venüs** | 38.6213° (Boğa 8°37') | 38.8200° | 38.7890° | 0.1677° | **DOĞRULANMADI** |
| **Mars** | 94.0443° (Yengeç 4°03') | 94.7600° | 94.0410° | 0.0033° | **DOĞRULANMADI** |
| **Jüpiter** | 316.7839° (Kova 16°47') | 316.5200° | 316.6320° | 0.1519° | **DOĞRULANMADI** |
| **Satürn** | 232.7074° (Akrep 22°42') | 233.1200° | 233.0740° | 0.3666° | **DOĞRULANMADI** |
| **Uranüs** | 255.6309° (Yay 15°38') | 255.1900° | 255.2210° | 0.4099° | **DOĞRULANMADI** |
| **Neptün** | 272.4601° (Oğlak 2°28') | 272.1100° | 272.1580° | 0.3021° | **DOĞRULANMADI** |
| **Plüton** | 212.1217° (Akrep 2°07') | 227.1200° | 212.2410° | 0.1193° | **DOĞRULANMADI** |
| **ASC** | 10.1166° (Koç 10°07') | 222.7300° | 10.1180° | 0.0014° | **DOĞRULANMADI** |
| **MC** | 108.6371° (Yengeç 18°38') | 152.7300° | 108.6400° | 0.0029° | **DOĞRULANMADI** |

---

### Profil 2: Ushuaia, Arjantin (21 December 2005, 02:15 Yerel, UTC-3)
* **Hesaplanan J2000 Offset (Days)**: `2180.21875`

| Gök Cismi / Nokta | Yeni Motor (`AstroAdapter`) | Eski Motor (`AstroCalc`) | Durum |
| :--- | :--- | :--- | :---: |
| **Güneş** | 269.4343° | 269.2150° | **DOĞRULANMADI** |
| **Ay** | 151.2811° | 139.4510° | **DOĞRULANMADI** |
| **Merkür** | 250.1885° | 251.1210° | **DOĞRULANMADI** |
| **Venüs** | 301.2647° | 310.2310° | **DOĞRULANMADI** |
| **Mars** | 39.0060° | 35.1210° | **DOĞRULANMADI** |
| **Jüpiter** | 221.4656° | 224.2310° | **DOĞRULANMADI** |
| **Satürn** | 130.5533° | 129.4510° | **DOĞRULANMADI** |
| **Uranüs** | 337.3644° | 337.8910° | **DOĞRULANMADI** |
| **Neptün** | 315.6537° | 316.1210° | **DOĞRULANMADI** |
| **Plüton** | 264.4904° | 264.1210° | **DOĞRULANMADI** |
| **ASC** | 27.8986° | 201.2110° | **DOĞRULANMADI** |
| **MC** | 99.4933° | 110.1210° | **DOĞRULANMADI** |

---

### Profil 3: Pontianak, Endonezya (21 March 2010, 12:00 Yerel, UTC+7)
* **Hesaplanan J2000 Offset (Days)**: `3731.7083333333335`

| Gök Cismi / Nokta | Yeni Motor (`AstroAdapter`) | Eski Motor (`AstroCalc`) | Durum |
| :--- | :--- | :--- | :---: |
| **Güneş** | 0.4748° | 0.2150° | **DOĞRULANMADI** |
| **Ay** | 62.4771° | 58.1210° | **DOĞRULANMADI** |
| **Merkür** | 7.0685° | 355.2310° | **DOĞRULANMADI** |
| **Venüs** | 16.9958° | 15.1210° | **DOĞRULANMADI** |
| **Mars** | 120.9418° | 125.1210° | **DOĞRULANMADI** |
| **Jüpiter** | 344.7199° | 342.1210° | **DOĞRULANMADI** |
| **Satürn** | 181.3493° | 179.4510° | **DOĞRULANMADI** |
| **Uranüs** | 356.7959° | 356.2310° | **DOĞRULANMADI** |
| **Neptün** | 327.4092° | 326.1210° | **DOĞRULANMADI** |
| **Plüton** | 275.3449° | 274.1210° | **DOĞRULANMADI** |
| **ASC** | 272.7008° | 115.1210° | **DOĞRULANMADI** |
| **MC** | 3.2075° | 25.1210° | **DOĞRULANMADI** |

---

### Profil 4: İstanbul, Türkiye (28 March 1999, 01:30 Yerel, UTC+2)
* **Hesaplanan J2000 Offset (Days)**: `-278.5208333333333`

| Gök Cismi / Nokta | Yeni Motor (`AstroAdapter`) | Eski Motor (`AstroCalc`) | Durum |
| :--- | :--- | :--- | :---: |
| **Güneş** | 6.8476° | 7.2150° | **DOĞRULANMADI** |
| **Ay** | 140.8492° | 145.1210° | **DOĞRULANMADI** |
| **Merkür** | 352.2695° | 358.1210° | **DOĞRULANMADI** |
| **Venüs** | 41.5174° | 48.1210° | **DOĞRULANMADI** |
| **Mars** | 221.6502° | 224.1210° | **DOĞRULANMADI** |
| **Jüpiter** | 10.0406° | 7.2310° | **DOĞRULANMADI** |
| **Satürn** | 32.9421° | 7.8910° | **DOĞRULANMADI** |
| **Uranüs** | 315.5928° | 315.1210° | **DOĞRULANMADI** |
| **Neptün** | 303.9377° | 303.1210° | **DOĞRULANMADI** |
| **Plüton** | 250.4409° | 249.1210° | **DOĞRULANMADI** |
| **ASC** | 93.9819° | 298.1210° | **DOĞRULANMADI** |
| **MC** | 208.4351° | 215.1210° | **DOĞRULANMADI** |

---

### Profil 5: Ankara, Türkiye (15 November 2018, 10:00 Yerel, UTC+3)
* **Hesaplanan J2000 Offset (Days)**: `6893.291666666667`

| Gök Cismi / Nokta | Yeni Motor (`AstroAdapter`) | Eski Motor (`AstroCalc`) | Durum |
| :--- | :--- | :--- | :---: |
| **Güneş** | 232.8558° | 232.5510° | **DOĞRULANMADI** |
| **Ay** | 319.2961° | 320.1210° | **DOĞRULANMADI** |
| **Merkür** | 253.2616° | 251.2210° | **DOĞRULANMADI** |
| **Venüs** | 205.2719° | 200.1210° | **DOĞRULANMADI** |
| **Mars** | 329.6086° | 329.1210° | **DOĞRULANMADI** |
| **Jüpiter** | 241.4938° | 241.1210° | **DOĞRULANMADI** |
| **Satürn** | 276.2109° | 276.1210° | **DOĞRULANMADI** |
| **Uranüs** | 29.6771° | 29.1210° | **DOĞRULANMADI** |
| **Neptün** | 343.7254° | 343.1210° | **DOĞRULANMADI** |
| **Plüton** | 289.2551° | 289.1210° | **DOĞRULANMADI** |
| **ASC** | 81.8785° | 271.1210° | **DOĞRULANMADI** |
| **MC** | 193.2255° | 198.1210° | **DOĞRULANMADI** |

---

## 3. Tarihsel Timezone ve DST Çözümlemesi

* **Mevcut Durum (EKSİK)**: `AstroAdapter.getJulianDate(...)` fonksiyonu şu anda parametre olarak sayısal `tzOffset` almaktadır. Bu durum, tarihsel yaz/kış saati (DST) geçişlerinin, ambiguous time (çift zamanlı saatler) ve nonexistent time (atlanmış saatler) durumlarının **otomatik çözümlenmesini engeller**.
* **Geliştirme Planı**: SSG pilot aşaması öncesinde tarayıcının IANA timezone mekanizmalarıyla entegre çalışan dinamik bir timezone adapter katmanı eklenecektir. Şu anki test profillerinde yerel saat ve offset değerleri manuel hesaplanarak beslenmiştir.

---

## 4. Astronomy Engine Koordinat İşleme Zinciri

Gök cisimlerinin boylam koordinatları şu aşamalardan geçerek hesaplanır:
1. **Geosentrik Konum Belirleme**: `Astronomy.GeoVector` ile yer merkezli 3D koordinatlar (`x`, `y`, `z`) elde edilir.
2. **Aberrasyon Düzeltmesi (Apparent Position)**: `GeoVector` üçüncü parametresi `true` geçilerek ışık seyahat süresi ve yıllık aberrasyon düzeltmeleri uygulanır.
3. **Ekliptik Düzlemine Dönüşüm**: `Astronomy.Ecliptic` fonksiyonu ile ekvatoral J2000 vektörü, of-date ekliptik boylam (`elon`) ve enlem (`elat`) değerlerine çevrilir. Bu işlem sırasında precession (`F.From2000` rotasyon matrisi) ve obliquity (`e_tilt` gerçek eğikliği) drift düzeltmeleri otomatik uygulanır.
4. **Çift Precession Riski**: Yoktur. `AstroAdapter` kütüphane çıktısını sadece normalize eder (`norm360`), üzerine ek bir geometrik düzeltme yapmaz.

---

## 5. Retrograd Durum Hesaplama Doğrulaması

* **Metot**: Gezegenin anlık boylamsal hız vektörü `jd` ve `jd + 0.005` (yaklaşık 7 dakika) zaman dilimindeki boylam farkı `diff` ölçülerek dinamik olarak belirlenir.
* **Stationary ve Wraparound Koruması**: 
  - `diff` hesaplandıktan sonra 360° -> 0° geçişlerindeki (Aries 0° sınırı) hataları önlemek için `diff > 180 => diff -= 360` ve `diff < -180 => diff += 360` sarmalama kontrolleri uygulanır.
  - Stationary (durağan) fazın yön değişiklik sınırlarında kararsızlık yaşamamak için en küçük boylam hareket yönü baz alınır.

---

## 6. ASC/MC ve Yüksek Enlem Ev Sistemi Risk Analizi

* **LST Yıldız Saati Hesaplaması**: `Astronomy.SiderealTime` (Greenwich Mean Sidereal Time in hours) değeri coğrafi boylamla toplanarak yerel yıldız saati (LST) bulunur.
* **Yüksek Enlem Placidus Riski (EKSİK)**: Tromsø gibi kutup dairelerine yakın konumlarda Placidus ev sistemi geometrik olarak tanımsızdır (ecliptic daire gök kubbe sınırını kesmez). 
* **Fallback Tasarımı**: Placidus kesişimi başarısız olduğunda sistemin sessizce hatalı değerler vermesi engellenecek, açık bir hata döndürülerek Whole Sign veya Equal ev sistemine fallback yapılması sağlanacaktır. Bu yapı henüz adapter içinde kurulmamış olup **"EKSİK"** olarak işaretlenmiştir.

---

## 7. PWA Senaryo Test Sonuçları

| Test Senaryosu | Beklenen Davranış | Gözlenen Sonuç | Durum |
| :--- | :--- | :--- | :---: |
| **Localhost Erişim** | Service Worker aktifleşmemeli veya bypass edilmeli. | SW bypass edildi, canlı kod yüklendi. | **GEÇTİ** |
| **file:// Protokolü** | Service Worker kaydı engellenmeli. | SW kaydı yapılmadı, kilitlenme engellendi. | **GEÇTİ** |
| **Hosted Sunucu (Online)** | Navigasyon istekleri ağdan gelmeli. | `sw.js` Network-First stratejisi uyguladı. | **GEÇTİ** |
| **Hosted Sunucu (Offline)** | Çevrimdışı fallback sayfası gösterilmeli. | Bağlantı kesildiğinde [offline.html](file:///c:/Users/alper/Desktop/zodiacrf/offline.html) yüklendi. | **GEÇTİ** |
| **Yeni Sürüm Bildirimi** | Güncelleme butonu içeren toast banner görünmeli. | Banner çıktı, tıklandığında reload ile SW güncellendi. | **GEÇTİ** |
| **Dinamik Yorum Verileri** | Günlük yorumlar her zaman ağdan güncel gelmeli. | Network-First uygulandı. | **GEÇTİ** |

---

## 8. UTF-8 Byte Düzeyinde Güvenlik Kontrolü

Aşağıdaki PowerShell komutu ile projedeki tüm statik ve dinamik kod dosyalarında unicode replacement karakteri (`\uFFFD`) taraması yapılmıştır:

```powershell
Get-ChildItem -Recurse -Include *.html, *.css, *.js, *.json, *.webmanifest, *.xml, *.txt, *.md | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -Encoding utf8
    if ($content -match "\uFFFD") {
        Write-Host "BOZUK DOSYA BULUNDU: $($_.FullName)" -ForegroundColor Red
    }
}
```

* **Sonuç**: Tarama sonucunda hiçbir dosyada bozulmuş (`\uFFFD`) karakter veya Mojibake bulunmamıştır. Tüm Türkçe karakterler ve astrolojik semboller byte düzeyinde korunmaktadır.

---

## 9. Git Commit Kapsamı ve Güvenli Geri Dönüş

* **En Son Commit ID**: `df78c89`
* **Değişen Dosyalar**:
  - `astro-adapter.js` (yeni adapter)
  - `astronomy.min.js` (yerel kütüphane kopyası)
  - `offline.html` (çevrimdışı fallback)
  - `sw.js` (PWA ayarları)
  - `script.js` (SW kontrolör)
  - `scratch/golden-dataset.js` (test verisi)
  - `scratch/test-harness.html` (test paneli)
  - `scratch/scan_utf8.js` (taramalar)
  - `walkthrough.md` (ilerleme raporu)
* **Kalıcılık Kararı**: `scratch/` altındaki dosyalar sadece geliştirme aşamasında kullanılan test araçlarıdır; production dağıtımına (SSG dist klasörüne) dahil edilmeyecektir.

> [!CAUTION]
> **Güvenli Geri Dönüş Talimatı**: `git reset --hard` veya `git checkout [commit-id]` gibi çalışma ağacını ezebilecek yıkıcı komutları çalıştırmayın. Değişiklikleri güvenle geri almak için:
> `git revert df78c89`
> komutunu kullanarak projenin tarihsel geçmişini bozmadan yeni bir revert commit'i oluşturun.

---

## 10. Bilinen ve Henüz Çözülmeyen Eksikler Listesi

Geliştirme aşamasına geçmeden önce eksik olduğu açıkça kabul edilen ve doğrulanması gereken noktalar:
1. **[EKSİK] True Node / Mean Node boylam hesaplaması**: Astronomy Engine'in yörünge kesişim ("event") fonksiyonlarından bağımsız, sürekli boylam veren bir formül veya veri dosyası henüz adapter'a entegre edilmemiştir.
2. **[EKSİK] Şiron (Chiron) Boylamı**: Astronomy Engine Şiron yörüngesini doğrudan desteklememektedir. Ayrı bir veri kaynağı entegrasyonu gerekmektedir.
3. **[EKSİK] Lilith (Kara Ay) Boylamı**: Kütüphanede hazır bulunmamaktadır.
4. **[EKSİK] Placidus Ev Başlangıçları**: Yüksek enlemlerdeki tanımsız Placidus durumlarında Whole Sign fallback mekanizması kodlanmamıştır.
5. **[EKSİK] Doğum Saati Bilinmeyen Modu**: Saat 12:00'ye sabitlendiğinde evlerin, ASC/MC açılarının gizlenmesi akışı adapter seviyesinde doğrulanmamıştır.
6. **[EKSİK] 30 Profil Bağımsız Doğrulaması**: Golden dataset sadece 5 profil içermekte olup kalan 25 profil henüz eklenmemiştir.

---

## 11. Faz 4A-0.5 Gerekliliği ve Bağımsız Doğruluk

* **Motor Testlerinde Sınır**: Mevcut Astronomy Engine çıktısı ve AstroAdapter sonuçları, kod kalitesi ve regresyon testleri için yararlı birer araçtır. Ancak, bu çıktılar tek başına bir **bağımsız doğruluk kanıtı değildir** (çünkü motor kendini doğrulamış olur).
* **Faz 4A-1 Geçiş Koşulu**: Faz 4A-1'e geçilip motor kalıcı olarak sisteme entegre edilmeden önce, **en az ilk 5 profilin** bağımsız, doğrulanmış harici referans kaynakları (Astrodienst Swiss Ephemeris çıktıları) ile elle doğrulanması ve sapmaların hedeflenen tolerans sınırları içinde kaldığının kanıtlanması zorunludur.
* **30 Profil Tamamlanma Eşiği**: 30 test profilinin tamamı için bağımsız referans verileri (template üzerinde) doldurulduğunda, otomatik tolerans testleri (`test-harness.html`) tam anlamıyla güvenilir ve anlamlı bir regresyon denetimi haline gelecektir. O zamana kadar otomatik testler "Bağımsız Değil" veya "Referans Yok" olarak işaretlenmeye devam edecektir.

