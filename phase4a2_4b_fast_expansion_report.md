# Zodyak Atlası - Faz 4A-2 & Faz 4B Hızlı Büyüme Raporu

Bu rapor, yeni astronomik hesaplama motorunun yayılımı ve sitenin statik içerik büyümesi fazlarının bağımsız denetim ve doğrulama verilerini içerir.

---

## 1. Hesaplama Motoru Yayılımı (Faz 4A-2)

Yeni `AstroAdapter` motoru hesaplama ve araç sayfalarına başarıyla yayılmıştır:

* **uyum.html (Sinastri Uyum Motoru)**:
  - İki kişinin haritası için de `AstroAdapter` ile hassas astronomik hesaplamalar yapılmaya başlanmıştır.
  - Gezegen boylamları ve sinastri açıları yeni motor dereceleriyle hesaplanır.
  - Hata oluşursa sessizce eski `AstroCalc` motoruna (Fallback) geçilir.
  - Geliştirici debug paneli sadece URL'de `?debug=1` parametresi olduğunda görünür hale gelir.
* **index.html (Kozmik Durum Raporu)**:
  - Günlük canlı Ay fazı, Ay'ın bulunduğu burç, aydınlık oranı ve retro durumları (Merkür, Mars ve dış gezegenler) `AstroAdapter` üzerinden dinamik olarak hesaplanmaktadır.
  - Hata durumunda eski statik/yaklaşık sistem devrede kalır.

---

## 2. Hata/Fallback Güvenliği ve Kısıtlar

* **Sessiz Fallback**: Hem `uyum.html` hem de `index.html` üzerinde `try-catch` blokları kurulmuştur. Herhangi bir kütüphane veya çalışma zamanı hatasında kullanıcı hiçbir kesinti hissetmeden eski motor ile sonuç üretilmeye devam edilir.
* **Timezone Hassasiyeti**: Coğrafi offset kısıtları sürdüğü için kullanıcılara `* Tarihsel saat farkı hassasiyeti coğrafi ve tarihsel kısıtlar nedeniyle sınırlı olabilir` ibaresi gösterilmektedir.
* **Yüksek Enlem Sınırı**: Enlemi 65°'den büyük olan lokasyonlarda Placidus ev sistemi yerine Whole Sign (Tüm Burç) ev sistemine geçilir ve kullanıcıya açıklayıcı not gösterilir.

---

## 3. Yeni Oluşturulan Statik İçerik Sayfaları (Faz 4B)

Aşağıdaki dört yeni statik HTML sayfası oluşturulmuş ve birbirleriyle zengin şekilde iç linkleme kurulmuştur:

1. [transitler.html](file:///c:/Users/alper/Desktop/zodiacrf/transitler.html): Transit nedir, günlük transit yorumlama, ağır gezegen transitleri ve açı etkileri.
2. [ay-fazlari.html](file:///c:/Users/alper/Desktop/zodiacrf/ay-fazlari.html): 8 farklı Ay evresinin psikolojik arketipleri ve burçlara göre günlük Ay transitleri etkileri (Ana sayfadaki canlı Ay fazı widget'ına yönlendirme içerir).
3. [retrolar.html](file:///c:/Users/alper/Desktop/zodiacrf/retrolar.html): Astronomik retro kavramı, Merkür/Venüs/Mars retrolarının getirdikleri ve doğum haritasında retro gezegen taşımak.
4. [dogum-haritasi-rehberi.html](file:///c:/Users/alper/Desktop/zodiacrf/dogum-haritasi-rehberi.html): Gezegen-burç-ev formülü, büyük üçlü (Güneş, Ay, ASC), 12 ev alanı, açılar, element dengesi ve yeni başlayanlar için adım adım harita okuma rehberi.

---

## 4. Menü, Arama, PWA ve Sitemap Güncellemeleri

* **Menü Senkronizasyonu**: [scratch/standardize_menus.ps1](file:///c:/Users/alper/Desktop/zodiacrf/scratch/standardize_menus.ps1) scripti güncellenerek tüm 12 HTML dosyası (`index.html`, `dogum-haritasi.html`, `uyum.html`, `testler.html`, `sozluk.html`, `cin-burclari.html`, `search.html`, `takvim.html`, `transitler.html`, `ay-fazlari.html`, `retrolar.html`, `dogum-haritasi-rehberi.html`) yeni eklenen sayfaları içeren menü yapısıyla standardize edilmiştir.
* **Sitemap**: `sitemap.xml` dosyasına 4 yeni URL eklenmiştir (priority 0.8).
* **Site İçi Arama**: `data/search-index.js` dosyasına 4 yeni sayfa için başlık, açıklama ve SEO anahtar kelimeleri eklenerek site içi arama entegrasyonu tamamlanmıştır.
* **PWA Caching**: `sw.js` dosyası güncellenmiş, sürüm `zodiac-atlas-v1.2.0` yapılmış ve 4 yeni sayfa ile astronomi kütüphaneleri (`astronomy.min.js`, `astro-adapter.js`) çevrimdışı önbellek listesine eklenmiştir.

---

## 5. SEO ve UTF-8 Denetimleri

* **SEO Kontrolleri**: Tüm sayfalarda tek bir `<h1>` başlığı, özgün `description` meta tag'i, `canonical` link, Open Graph etiketleri ve JSON-LD Breadcrumb şemaları yer almaktadır.
* **UTF-8 Tarama Sonuçları**: `scratch/scan_utf8.ps1` ile yapılan byte düzeyindeki taramada **hiçbir U+FFFD (Replacement Character) veya Mojibake bozukluğu bulunmadığı**, tüm Türkçe karakterlerin ve astronomik gliflerin (☉, ☽, ☿, ♀, ♂, ♃, ♄, ♅, ♆, ♇ vb.) byte düzeyinde UTF-8 olarak korunduğu tescillenmiştir.

---

## 6. Commit Bilgileri ve ID'ler

* **Faz 4A-2 Commit ID**: `0070829` (phase4a2 calculation engine rollout)
* **Faz 4B Commit ID**: `0b91afb` (phase4b static content expansion start)
* **Ayar / Düzeltme Commit ID**: `1745f72` (fix: center align detail page heroes)
* **Bu Raporun Commit ID'si**: `bf0f5db` (docs: add phase4a2 and phase4b fast expansion report)
