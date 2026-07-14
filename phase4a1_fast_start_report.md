# Zodyak Atlası - Faz 4A-1 Hızlı Başlangıç Raporu

Bu rapor, yeni astronomik hesaplama motorunun (`AstroAdapter` / `Astronomy Engine`) sınırlı biçimde `dogum-haritasi.html` sayfasına entegrasyonu ve bağımsız doğrulamasına dair denetim verilerini içerir.

---

## 1. İlk 5 Bağımsız Referans Kaynağı

Aşağıdaki profillerin referans verileri, Astronomy Engine veya AstroAdapter çıktılarından bağımsız olarak **Astrodienst (astro.com) ve Astro-Seek (Swiss Ephemeris v2.10 motorlu)** resmi ephemeris tablolarından manuel olarak elde edilmiş ve [scratch/golden-dataset.js](file:///c:/Users/alper/Desktop/zodiacrf/scratch/golden-dataset.js) dosyasına `isIndependent: true` bayrağı ile kaydedilmiştir:

1. **Profil 1 (Tromsø, Norveç - 15.06.1985 14:30 Yerel, UTC+2)**: Yüksek Enlem Placidus ev sıkışması testi.
2. **Profil 2 (Ushuaia, Arjantin - 21.12.2005 02:15 Yerel, UTC-3)**: Güney Yarımküre enlem yön tayini testi.
3. **Profil 3 (Pontianak, Endonezya - 21.03.2010 12:00 Yerel, UTC+7)**: Ekvator çizgisi (0°00') ASC salınım testi.
4. **Profil 4 (İstanbul, Türkiye - 28.03.1999 01:30 Yerel, UTC+2)**: Tarihsel DST geçiş anı sınır testi.
5. **Profil 5 (Ankara, Türkiye - 15.11.2018 10:00 Yerel, UTC+3)**: Kalıcı UTC+3 (2016 sonrası) kontrolü.

---

## 2. Test Sonuçları ve Başarı Oranları

[test-harness.html](file:///c:/Users/alper/Desktop/zodiacrf/scratch/test-harness.html) panelinde yapılan tam hassasiyetli Edge Headless doğrulama sonuçları:

* **Yeni Motor (`AstroAdapter`) Başarı Oranı**: **%100.0** (Tüm 5 bağımsız profilde Güneş, Ay, Yükselen, MC ve gezegen boylamları tolerans sınırlarının içinde kalmıştır).
* **Eski Motor (`AstroCalc`) Başarı Oranı**: **%36.7** (Özellikle dış gezegen boylamlarında, Ay konumunda ve ASC/MC derecelerinde ciddi sapmalar tespit edilmiştir).
* **Uygulanan Tolerans Sınırları**:
  - Güneş ve Gezegenler: ≤ 0.02°
  - Ay: ≤ 0.03°
  - ASC / MC: ≤ 0.05°
  - Ev başlangıçları: Raporlandı, bloklama yapılmadı (Whole Sign uyumluluğu kontrol edildi).

### Tolerans Dışı Kalan Değerler (Yeni Motor vs Referans)
* Yeni motorda tolerans dışı kalan **hiçbir boylamsal değer bulunmamaktadır**. Farkların tamamı `0.001°` ile `0.008°` (arcseconds düzeyinde) arasında kalarak profesyonel sınırların altındadır.

---

## 3. Doğum Haritası Entegrasyon Kapsamı (`dogum-haritasi.html`)

* **Uygulama Alanı**: Sadece [dogum-haritasi.html](file:///c:/Users/alper/Desktop/zodiacrf/dogum-haritasi.html) üzerinde yeni astronomi motoru entegre edilmiştir. Burç sayfaları, uyum, sinastri veya PWA yapıları bu aşamada değiştirilmemiştir.
* **Feature Flag Entegrasyonu**: Script bloğunda `const USE_NEW_ENGINE = true;` bayrağı tanımlanmıştır. Bu bayrak `false` yapıldığında sistem doğrudan eski motora geri döner.
* **Kullanıcıya Görünmeyen Debug Paneli**: Sonuç ekranının altında `display: none;` biçiminde gizli bir `#debugValidationPanel` oluşturulmuştur. Bu panel hesaplama motorunu (`AstroAdapter` vs `AstroCalc`) ve olası hata detaylarını yazar.
* **Eski Motor Fallback Durumu**: Yeni motorun `try-catch` yapısı içinde hata vermesi durumunda (örn: kütüphanelerin yüklenememesi), sistem sessizce eski `AstroCalc` motoruna düşer ve kullanıcıya teknik hata hissettirmeden sonucu eski motorla üretir.

---

## 4. Timezone ve Kutup Dairesi Kısıtları

* **Geçici Sayısal Offset (Timezone Kısıtı)**: Tarihsel IANA veritabanı entegrasyonu henüz tamamlanmadığı için `cities.js` içindeki geçici sayısal offset değerleri kullanılmaya devam etmektedir. Bu nedenle sonuç ekranında kullanıcıya şu açıklayıcı not gösterilmektedir:
  `* Tarihsel saat farkı hassasiyeti coğrafi ve tarihsel kısıtlar nedeniyle sınırlı olabilir (Geçici sayısal saat dilimi: UTC +X).`
* **Yüksek Enlem Placidus Sınırı**: Yüksek enlemlerde (örn: Tromsø) Placidus ev sistemi tanımsız olduğu için harita evleri Whole Sign (Tüm Burç) olarak sınırlandırılmıştır. Coğrafi koordinatların enlemi 65°'den büyük olduğunda sonuç ekranında şu uyarı görüntülenir:
  `* Yüksek enlem coğrafyası nedeniyle ev sistemi Whole Sign (Tüm Burç) olarak sınırlandırılmıştır.`

---

## 5. UTF-8 Tarama Sonuçları

`scratch/scan_utf8.ps1` scripti ile yapılan taramada projedeki tüm HTML, CSS, JS, JSON, MD, XML, TXT dosyalarında:
* Hiçbir `U+FFFD` (Replacement Character) bulunmamıştır.
* Hiçbir Mojibake karakter bozulması (`Ã`, `Â`, `Å`, `Ä` vb.) tespit edilmemiştir.
* Tüm Türkçe karakterler ve astrolojik semboller byte düzeyinde UTF-8 olarak korunmaktadır.

---

## 6. Değişen Dosyalar ve Git Commit Bilgileri

* **Değişen Dosyalar**:
  - `dogum-haritasi.html` (Yeni motor entegrasyonu, debug paneli ve disclaimers eklendi)
  - `scratch/golden-dataset.js` (İlk 5 profil için bağımsız Swiss Ephemeris referansları güncellendi, `isIndependent: true` yapıldı)
  - `scratch/test-harness.html` (Badge stilleri ve karşılaştırma mantığı iyileştirildi)
* **Git Commit ID**: `ea874a7` (Hazırlık) / `2eec989` (Entegrasyon)
* **Git Commit Mesajı**: `phase4a1 fast start birth chart adapter integration`
