// Zodyak Atlası Detaylı Burç Uyum Veritabanı
// Bu dosya, tüm burç kombinasyonları için sayfalarca detaylı analiz sunar.

const compatibilityDetails = {
  elements: {
    "Ateş-Ateş": {
      title: "Kozmik Volkan: Sonsuz Tutku ve Hareket",
      love: "İki Ateş elementinin aşkı, adeta gökyüzünü aydınlatan bir havai fişek gösterisi gibidir. İlişki, ilk andan itibaren yüksek bir çekim, hız ve heyecanla başlar. Birbirinizin macera arayışını, bağımsızlık ihtiyacını ve hayata karşı duyulan coşkuyu derinden anlarsınız. Yatak odasında tutku hiç sönmez; her gün yeni bir macera gibidir. Ancak bu aşkın uzun ömürlü olması, iki tarafın da saman alevi gibi parlayan öfkelerini kontrol etmesine bağlıdır. Evlilik hayatı, monotonluktan uzak, sürekli seyahatler ve yeni projelerle dolu olur.",
      friend: "Arkadaşlıkta birbirinizi sürekli gaza getiren, cesaretlendiren ve çılgın fikirlerin peşinden koşan bir ikilisiniz. Birlikte spor yapmak, seyahate çıkmak veya yeni bir girişim başlatmak için mükemmel bir ortaksınız. Rekabetçi yapınız aranızda tatlı bir yarış oluşturabilir.",
      work: "İş hayatında vizyoner, cesur ve risk alan bir çiftsiniz. Yeni pazarlar keşfetmek ve marka yaratmak konusunda üstünüze yoktur. Ancak bütçe yönetimi, faturalar ve rutin operasyonel işler söz konusu olduğunda iki taraf da sıkılabilir. Parayı hızla kazanıp aynı hızla harcama eğilimindesiniz.",
      conflict: "En büyük çatışma kaynağınız ego savaşları ve sabırsızlıktır. İki taraf da her zaman haklı olmak ve liderliği elinde tutmak ister. Öfke anlarında kırıcı sözler söylenebilir. Tavsiye: Tartışma çıktığında birbirinize alan tanıyın ve gurur yapmadan özür dilemeyi öğrenin."
    },
    "Ateş-Toprak": {
      title: "Toprak ve Lav: Somut Değerler ve İlham Veren Güç",
      love: "Ateş ve Toprak bir araya geldiğinde, Ateş'in enerjisi Toprak'ın dayanıklı yapısıyla şekillenir. Toprak, Ateş'in hayali projelerini gerçeğe dönüştürmek için sağlam bir zemin hazırlar; ona güven ve aidiyet sunar. Ateş ise Toprak'ın hayatına neşe, dinamizm ve cesaret katar. Aşkınız, fiziksel çekimden ziyade zamanla inşa edilen derin bir saygı ve kararlılık üzerine kurulur. Evlilikte son derece başarılı bir çift olursunuz; Ateş evi neşelendirirken, Toprak düzeni ve güvenliği sağlar.",
      friend: "Arkadaşlıkta güvenilir ve birbirini tamamlayan bir çiftsiniz. Ateş ne zaman moral olarak düşse Toprak onu sakinleştirir. Toprak ne zaman rutine sıkışsa Ateş onu dışarı çıkarır. Fikir alışverişleriniz oldukça yapıcıdır.",
      work: "Mükemmel bir ortaklık potansiyeli vardır. Hava ve Toprak gibi, Ateş de yaratıcı gücü temsil ederken Toprak bunu paraya ve mülke dönüştürür. Ateş satışı ve vizyonu yönetir, Toprak ise finansı ve operasyonu kontrol eder. Risk yönetimi çok dengelidir.",
      conflict: "Toprak'ın yavaşlığı ve kuralları Ateş'i çıldırtabilir. Ateş'in ise plansız harcamaları ve ani kararları Toprak'ın güvence ihtiyacını sarsar. Tavsiye: Ateş sabırlı olmayı, Toprak ise esnekliği ve değişimi kabul etmeyi öğrenmelidir."
    },
    "Ateş-Hava": {
      title: "Yükselen Rüzgar: Zihinsel Uyum ve Durdurulamaz Vizyon",
      love: "Ateş'in yanması için oksijene (Hava) ihtiyacı vardır. Bu nedenle Hava burcu, Ateş burcunu sürekli besler, zihnini açar ve ona yeni ufuklar gösterir. İletişiminiz mükemmeldir; sabahlara kadar konuşabilir, hayattan ve felsefeden bahsedebilirsiniz. İlişkinizde özgürlük çok önemlidir. Birbirinizi kısıtlamaz, aksine bireysel gelişim alanlarınızı desteklersiniz. Aşkınız entelektüel derinlik ve entrika doludur. Evlilikte arkadaş kalabilen, modern ve sosyal bir çift olursunuz.",
      friend: "Sosyal çevrelerin gözde arkadaş grubusunuz. Birlikte partiler düzenlemek, sanatsal etkinliklere katılmak ve entelektüel tartışmalar yapmak en büyük keyfinizdir. Birbirinizi asla sıkmazsınız.",
      work: "Fikir üretme ve tanıtım konusunda harikasınız. Hava stratejiyi yazar, Ateş ise sahaya çıkıp projeyi satar. Pazarlama, reklam ve teknoloji sektörlerinde muazzam işler başarabilirsiniz. Ancak ikinizin de ayaklarının yere basması için bir Toprak elementine ihtiyaç duyulabilir.",
      conflict: "Ateş çok dürtüsel ve duygusal kararlar alırken, Hava aşırı rasyonel ve mesafeli kalabilir. Ateş, Hava'yı duygusuz olmakla suçlayabilir. Tavsiye: Duygusal derinlik oluşturmaya çalışın ve sadece kelimelerle değil, eylemlerinizle de sevginizi gösterin."
    },
    "Ateş-Su": {
      title: "Buhar ve Sis: Kozmik Çekim ve Duygusal Fırtınalar",
      love: "Astrolojide en büyük çekimlerden biri zıt kutuplar olan Ateş ve Su arasında yaşanır. Su, Ateş'in parıltısına ve cesaretine hayran olur. Ateş ise Su'yun derin gizemine, şefkatine ve sezgiselliğine çekilir. Ancak bu ilişki lavın suya düşmesi gibidir; ya buharlaşıp muazzam bir enerji üretirsiniz ya da su ateşi söndürür. Aşkınız dramatik, şiirsel ve yoğundur. Evlilik hayatı, iniş çıkışlı duygusal fırtınalara ve yoğun tutkulara sahne olur.",
      friend: "Arkadaşlıkta empati kurmakta zorlanabilirsiniz. Ateş'in doğrudanlığı Su'yun kırılgan kalbini incitebilir. Su'yun içine kapanması ise Ateş'i sabırsızlandırır. Ancak derin bir sırdaşlık bağı kurulabilir.",
      work: "Yaratıcı projelerde duygusal zeka ile vizyoner gücü birleştirebilirsiniz. Ancak finansal yönetimde krizler çıkabilir. Su sezgisel kararlar alırken, Ateş dürtüsel davranır. Ortak bir mantık çerçevesi kurulmalıdır.",
      conflict: "Su'yun alınganlığı ve sessiz protestoları, Ateş'in patlamalarıyla birleştiğinde ilişki yıpranabilir. Tavsiye: Ateş konuşurken ses tonunu yumuşatmalı, Su ise kırgınlıklarını biriktirmeden doğrudan ifade etmelidir."
    },
    "Toprak-Toprak": {
      title: "Sarsılmaz Kale: Mutlak Güven ve Maddi İstikrar",
      love: "İki Toprak elementinin aşkı, kökleri yüzyıllar öncesine dayanan ulu bir çınar ağacı gibidir. İlişkinizin temel direği güven, sadakat ve geleceği garanti altına alma arzusudur. Maceralardan ve ani değişikliklerden hoşlanmazsınız. Birlikte evinizi güzelleştirmek, lezzetli yemekler yemek ve finansal yatırımlar yapmak en büyük mutluluğunuzdur. Cinsellik, tensel duyarlılık ve konfor çerçevesinde yaşanır. Evlilik hayatınız son derece düzenli, planlı ve ömür boyu sürecek bir güvence sunar.",
      friend: "Birbirinizin hayatındaki en kararlı ve sadık arkadaşlarsınız. Zor günlerde ilk aranan kişi siz olursunuz. Birlikte doğa yürüyüşleri yapmak, antika toplamak veya bahçe işleriyle uğraşmak bağınızı güçlendirir.",
      work: "İş dünyasının en istikrarlı ve başarılı ortaklığıdır. Bütçe planlaması, risk analizi ve disiplinli çalışma sayesinde kurduğunuz her iş büyür. Adım adım, sabırla zenginlik inşa edersiniz.",
      conflict: "En büyük tehlike monotonluk ve esneklik noksanlığıdır. İlişki bir süre sonra iş ortaklığına veya ev arkadaşlığına dönüşebilir. Tavsiye: Rutinlerinizi kırın, sürpriz tatiller planlayın ve hayatı biraz daha az ciddiye alın."
    },
    "Toprak-Hava": {
      title: "Kum Fırtınası: Mantık ve Pratik Zekanın Karşılaşması",
      love: "Hava zihni, Toprak ise maddeyi temsil eder. Bu aşk, entelektüel bir saygıyla başlar. Hava'nın sıra dışı fikirleri, entelektüel birikimi Toprak'ı cezbeder. Toprak'ın hayata karşı gerçekçi, ayakları yere basan ve planlı duruşu ise Hava'ya kaybolduğu rüzgarlarda güvenli bir liman sunar. Birbirinizden çok şey öğrenirsiniz. Evlilik hayatınız pratik zeka, mantıklı bütçe yönetimi ve sosyal aktivitelerle dengeli bir şekilde yürür.",
      friend: "Entelektüel bir arkadaşlık bağıdır. Birlikte kitaplar hakkında konuşmak, satranç oynamak veya felsefi tartışmalar yapmak için harika bir ikilisiniz. Duygusal dramalardan uzak, rasyonel bir dostluktur.",
      work: "Tasarım, mühendislik ve mimari alanlarında mükemmel bir iş birliğidir. Hava teoriyi ve mimariyi çizer, Toprak ise inşaatı yapar. Hava'nın uçuşan fikirleri Toprak'ın realizmiyle filtrelenir ve karlı projelere dönüşür.",
      conflict: "Hava'nın sürekli değişen kararları ve kararsızlığı Toprak'ı yorar. Toprak'ın aşırı kuralları ve yeniliğe direnci ise Hava'yı boğar. Tavsiye: Hava verdiği sözleri tutmalı, Toprak ise yeni fikirlere ön yargısız yaklaşmalıdır."
    },
    "Toprak-Su": {
      title: "Bereketli Toprak: Duygusal Derinlik ve Yapıcı Güç",
      love: "Astrolojideki en uyumlu ve üretken element birleşimlerinden biridir. Su, kuru ve sert olan Toprak'ı duygularıyla sular, yumuşatır ve ona hissetmeyi öğretir. Toprak ise akışkan ve sınırsız olan Su'ya koruyucu sınırlar çizer, ona hayatta bir yön duygusu kazandırır. İlişkiniz son derece romantik, şefkatli ve besleyicidir. Birbirinizi değiştirmeye ihtiyaç duymadan, doğal bir uyumla tamamlarsınız. Evlilik hayatınız bereketli, huzurlu, çocukları besleyen ve koruyan harika bir yuva yaratır.",
      friend: "Duygusal olarak birbirinizi en çok kollayan arkadaşlarsınız. Birlikte yemek yapmak, dertleşmek ve ev ortamında vakit geçirmek dostluğunuzun temelidir. Aranızda ömür boyu kopmayacak bir bağ vardır.",
      work: "Son derece güvenli ve kazançlı projeler üretebilirsiniz. Toprak finansal yapıyı kurar, Su ise müşteri ilişkilerini ve empati gerektiren süreçleri yönetir. Sezgi ile mantık birleşir.",
      conflict: "Çatışmalar genellikle aşırı sahiplenme ve birbirine bağımlı hale gelme durumlarında çıkar. Tavsiye: İlişkide bireysel özgürlük alanlarınızı korumaya çalışın ve sosyal çevrenizi geniş tutun."
    },
    "Hava-Hava": {
      title: "Özgür Rüzgarlar: Zihinsel Özgürlük ve Sosyal Sinerji",
      love: "İki Hava burcunun aşkı, bulutların üzerinde süzülmek gibidir. İlişkinizde kıskançlık, kısıtlama veya boğucu kurallar yer almaz. Birbirinizin en yakın dostu, entelektüel yoldaşı ve fikir ortağısınızdır. Birlikte dünyayı gezmek, yeni kültürler keşfetmek ve sivil toplum örgütlerinde çalışmak ilişkinizi canlı tutar. Evlilik hayatınız bol misafir ağırlanan, kütüphanesi zengin ve modern bir yapıda olur.",
      friend: "Grup aktivitelerinin, derneklerin ve entelektüel kulüplerin aranan ikilisinizdir. Bitmek bilmeyen bir sohbet trafiğiniz vardır. Birbirinize sürekli yeni makaleler, kitaplar ve videolar gönderirsiniz.",
      work: "Medya, iletişim, yazılım ve eğitim sektörlerinde devrim yaratabilirsiniz. Fikir üretme konusunda sınır tanımazsınız. Ancak bu fikirlerin somut kazanca dönüşmesi için disiplinli bir finans yöneticisine ihtiyaç duyarsınız.",
      conflict: "Duygusal derinlik oluşturmakta ve taahhüt vermekte zorlanabilirsiniz. Sorumluluklardan kaçma eğiliminiz vardır. Tavsiye: Hayatın pratik ve maddi sorumluluklarını paylaşmayı öğrenin ve duygularınızı daha açık yaşayın."
    },
    "Hava-Su": {
      title: "Yağmur Bulutu: Akıl ve Kalbin Çelişkili Dansı",
      love: "Hava ve Su bir araya geldiğinde gökyüzünde yağmur bulutları oluşur. Hava mantığı, analiz etmeyi ve konuşmayı temsil ederken; Su hissetmeyi, sezgileri ve sessizliği temsil eder. Çekici ama bir o kadar da çaba gerektiren bir ilişkidir. Hava, Su'yun duygusal iniş çıkışlarını mantık çerçevesine oturtmaya çalışır. Su ise Hava'nın zihinsel teorilerinde boğulup şefkat arar. Evlilikte empati köprüsü kurulursa birbirini muazzam geliştiren bir çift olurlar.",
      friend: "Fikirsel olarak birbirinizi besleseniz de duygusal olarak anlaşmak zaman alabilir. Hava olayları fazla entelektüalize ederken, Su kalbiyle hisseder. Birbirinize sınır çizmekte zorlanabilirsiniz.",
      work: "Yazarlık, psikoloji ve sanat alanlarında yaratıcı işbirlikleri yapabilirsiniz. Su duyguyu katar, Hava ise bunu kelimelere dökerek formüle eder. Ancak finansal ortaklıklarda gerçekçi olunmalıdır.",
      conflict: "Hava'nın mesafeli duruşu Su'yu değersiz hissettirir. Su'yun duygusal sitemleri ise Hava'yı yorar. Tavsiye: Hava partnerine sarılıp onu sadece dinlemeyi öğrenmeli, Su ise olaylara daha rasyonel bakmalıdır."
    },
    "Su-Su": {
      title: "Derin Okyanus: Telepatik Uyum ve Sonsuz Empati",
      love: "İki Su elementinin birleşmesi, sınırların ortadan kalktığı kozmik bir birleşmedir. Birbirinizin ne hissettiğini konuşmadan, sadece gözlerinize bakarak anlarsınız. İlişkide şefkat, merhamet, romantizm ve mistisizm en üst düzeydedir. Yatak odası, ruhsal bir birleşme tapınağı gibidir. Birbirinize derin bir sadakatle bağlanırsınız. Evlilik hayatınız son derece huzurlu, duygusal açıdan güvenli ve adeta dış dünyadan izole bir sığınak gibidir.",
      friend: "Birbirinizin en yakın sırdaşı ve ruh ikizisinizdir. Dertleşmek saatlerce sürebilir. Birlikte meditasyon yapmak, su kenarında yürümek veya sanatsal hobilerle uğraşmak en büyük bağınızdır.",
      work: "Yardımlaşma dernekleri, şifa sanatları, psikoloji ve yaratıcı sanatlar için mükemmeldir. Ancak ticari ortaklıklarda aşırı duygusal ve esnek davranabilirsiniz. Parayı yönetmekte zorlanabilirsiniz.",
      conflict: "Birbirinizin negatif duygularından fazla etkilenip depresif döngülere girebilirsiniz. Sorunları çözmek yerine küsüp kabuğunuza çekilebilirsiniz. Tavsiye: Mantıklı ve objektif olmayı öğrenin ve sorunları ertelemeden konuşun."
    }
  },
  
  modalities: {
    "Öncü-Öncü": "İki tarafın da liderlik ve başlatma enerjisi çok yüksektir. İlişkide kimin yönü belirleyeceği konusunda tatlı bir rekabet oluşabilir. Birbirinizi sürekli harekete geçirirsiniz.",
    "Öncü-Sabit": "Öncü taraf yeni fikirler üretirken, Sabit taraf bu fikirleri kalıcı hale getirir ve korur. Ancak Sabit'in inatçılığı ile Öncü'nün sabırsızlığı çatışma yaratabilir.",
    "Öncü-Değişken": "Öncü yön gösterir, Değişken ise bu yöne uyum sağlar ve esneklik katar. Oldukça dinamik ve birbirini yormayan bir ritminiz vardır.",
    "Sabit-Sabit": "İlişkide sarsılmaz bir sadakat ve kararlılık hakimdir. Ancak inatçılık seviyeniz çok yüksektir. İki taraf da geri adım atmakta zorlanır.",
    "Sabit-Değişken": "Değişken taraf ilişkideki tıkanıklıkları açar ve esneklik sağlar. Sabit ise ilişkiye güven ve stabilite kazandırır. Dengeli bir ilişkidir.",
    "Değişken-Değişken": "Sürekli değişen, esnek ve özgür bir ilişkidir. Birbirinizi kısıtlamazsınız. Ancak odaklanmakta ve geleceğe yönelik kalıcı planlar yapmakta zorlanabilirsiniz."
  },
  
  polarities: {
    "Eril-Eril": "Yüksek aksiyon, zihinsel veya fiziksel enerji ve bağımsızlık temalı bir ilişkidir. Rekabetçilik ve özgürlük ön plandadır.",
    "Eril-Dişil": "Geleneksel Yin-Yang dengesi. Biri daha eylemci ve zihinselken (Eril), diğeri daha alıcı, sezgisel ve koruyucudur (Dişil). Birbirini doğal olarak tamamlarlar.",
    "Dişil-Dişil": "Duygusal derinlik, şefkat, sezgisellik, içe dönüklük ve ev konforu temalı bir ilişkidir. Birbirini derinden besleyen ve koruyan bir yapıdır."
  }
};
