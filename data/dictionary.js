const dictionaryData = [
  {
    "term": "ASC (Ascendant / Yükselen Burç)",
    "category": "Temel Terimler",
    "def": "Doğum anında doğu ufkunda yükselen zodyak derecesidir. Dış dünyaya sunduğumuz maskeyi, fiziksel bedeni ve ilk izlenimi temsil eder."
  },
  {
    "term": "MC (Medium Coeli / Tepe Noktası)",
    "category": "Temel Terimler",
    "def": "Doğum haritasının en tepe noktası, 10. ev girişidir. Kariyer, toplumsal statü, başarı ve otorite figürlerini temsil eder."
  },
  {
    "term": "DSC (Descendant / Alçalan Burç)",
    "category": "Temel Terimler",
    "def": "Yükselen burcun tam karşısındaki zodyak derecesidir, 7. ev girişini belirler. İkili ilişkiler, ortaklıklar ve evlilik arayışlarımızı gösterir."
  },
  {
    "term": "IC (Imum Coeli / Ayak Ucu Noktası)",
    "category": "Temel Terimler",
    "def": "Tepe noktasının tam karşısında, haritanın en dip noktasıdır. 4. ev girişidir; aile, kökler, ev yaşamı ve bilinçdışı temellerle ilişkilidir."
  },
  {
    "term": "Retrograde (Retro / Geri Hareket)",
    "category": "Transitler",
    "def": "Dünya'dan bakıldığında bir gezegenin yörüngesinde geriye gidiyormuş gibi görünmesi durumudur. Aslında bir optik ilüzyondur; astrolojide içe dönme, gözden geçirme ve yavaşlama dönemidir."
  },
  {
    "term": "Efemeris (Ephemeris)",
    "category": "Hesaplama",
    "def": "Gök cisimlerinin zaman içindeki hassas astronomik konumlarını gösteren günlük veya yıllık gökyüzü tablolarıdır."
  },
  {
    "term": "Stellium (Gezegen Kümelenmesi)",
    "category": "Açı Kalıpları",
    "def": "Bir doğum haritasında aynı burç veya evde en az 3-4 adet gezegenin yan yana gelmesi durumudur. Haritada o alanda aşırı bir enerji yoğunlaşması yaratır."
  },
  {
    "term": "Açı (Aspect)",
    "category": "Açılar",
    "def": "Doğum haritasındaki gezegenlerin veya hassas noktaların birbirleriyle yaptıkları geometrik mesafelerdir. Kavuşum, kare, üçgen, sekstil ve karşıt temel açılardır."
  },
  {
    "term": "Kavuşum (Conjunction)",
    "category": "Açılar",
    "def": "İki gezegenin gökyüzünde aynı derecede yan yana gelmesidir (0°). Enerjilerin tamamen birleşmesini ve ortak bir frekansta çalışmasını temsil eder."
  },
  {
    "term": "Kare Açı (Square)",
    "category": "Açılar",
    "def": "İki gezegenin haritada 90 derecelik açıyla durmasıdır. Gerilim, mücadele ve kriz üretir; ancak bu kriz hayattaki büyük gelişimleri tetikler."
  },
  {
    "term": "Üçgen Açı (Trine)",
    "category": "Açılar",
    "def": "İki gezegenin haritada 120 derecelik açıyla durmasıdır. Doğal yetenekleri, akışı, şansı ve zahmetsiz uyumu temsil eder."
  },
  {
    "term": "Sekstil Açı (Sextile)",
    "category": "Açılar",
    "def": "İki gezegenin haritada 60 derecelik açıyla durmasıdır. Uyumlu bir akış ve değerlendirilmeyi bekleyen fırsatları simgeler."
  },
  {
    "term": "Karşıt Açı (Opposition)",
    "category": "Açılar",
    "def": "İki gezegenin haritada 180 derece karşı karşıya durmasıdır. Projeksiyon (aynalama), ilişkilerdeki gerilimler ve denge kurma ihtiyacı ile ilgilidir."
  },
  {
    "term": "Sinastri (Synastry)",
    "category": "Hesaplama",
    "def": "İki kişinin doğum haritalarının üst üste bindirilmesiyle yapılan ilişki uyumu analiz yöntemidir."
  },
  {
    "term": "Chiron (Kiron)",
    "category": "Gök Cisimleri",
    "def": "Satürn ile Uranüs arasında yörüngede dönen bir kuyruklu yıldız/asteroittir. Astrolojide 'Yaralı Şifacı' olarak bilinir; en derin yaramızı ve başkalarını şifalandırma potansiyelimizi gösterir."
  },
  {
    "term": "Lilith (Kara Ay)",
    "category": "Gök Cisimleri",
    "def": "Ay'ın Dünya'dan en uzak olduğu yörünge odağı (apogee) noktasıdır. Bastırılmış vahşi dişil enerjiyi, isyanı, tabuları ve gölge arzuları temsil eder."
  },
  {
    "term": "Dekan",
    "category": "Temel Terimler",
    "def": "Her burcun 10'ar derecelik üç eşit bölüme ayrılmasıdır. Her dekan, o burcun alt-yöneticisini ve farklı karakter vurgularını belirler."
  },
  {
    "term": "Kutup (Polarite)",
    "category": "Temel Terimler",
    "def": "Burçların Eril (Aktif/Dışadönük) ve Dişil (Pasif/İçedönük) olarak ikiye ayrılmasıdır. Ateş ve Hava burçları eril, Toprak ve Su burçları dişildir."
  },
  {
    "term": "Nitelik (Modality)",
    "category": "Temel Terimler",
    "def": "Burçların mevsimsel döngü içindeki hareket tarzıdır. Öncü (başlatan), Sabit (sürdüren) ve Değişken (uyum sağlayan) olarak üçe ayrılır."
  },
  {
    "term": "Presesyon (Ekinoks Kayması)",
    "category": "Hesaplama",
    "def": "Dünya'nın yalpalama hareketi sebebiyle ekinoks noktalarının takımyıldızlara göre gerilemesidir. Sideral ve Tropikal zodyak ayrımının ana nedenidir."
  }
]
;