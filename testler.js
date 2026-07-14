// Astroloji Testleri Veri ve Kontrol Mantığı

const quizzes = {
  element: {
    title: "Element Testi",
    category: "Karakter",
    icon: "△",
    description: "Hangi astrolojik elemente (Ateş, Toprak, Hava, Su) sahip olduğunuzu ve bunun etkilerini keşfedin.",
    questions: [
      {
        question: "Bir sorunla karşılaştığınızda ilk tepkiniz ne olur?",
        options: [
          { text: "Hemen harekete geçer, sorunu doğrudan çözmeye çalışırım.", category: "Ateş" },
          { text: "Durumu analiz eder, pratik ve somut bir plan hazırlarım.", category: "Toprak" },
          { text: "Çevremdekilerle konuşur, fikir alışverişinde bulunurum.", category: "Hava" },
          { text: "Sezgilerime güvenir, olayın bendeki duygusal etkisine bakarım.", category: "Su" }
        ]
      },
      {
        question: "Kendinizi en huzurlu ve enerjik hissettiğiniz yer neresidir?",
        options: [
          { text: "Hareketli, maceralı veya güneşli açık alanlar.", category: "Ateş" },
          { text: "Doğa ile iç içe, ormanlık veya toprak kokan sakin yerler.", category: "Toprak" },
          { text: "Kitapçılar, kafeler veya entelektüel tartışmaların olduğu ortamlar.", category: "Hava" },
          { text: "Deniz, göl kenarı veya sessiz, duygularımla baş başa kaldığım köşem.", category: "Su" }
        ]
      },
      {
        question: "Bir arkadaşınızın morali bozuk olduğunda ona nasıl yaklaşırsınız?",
        options: [
          { text: "Moralini düzeltmek için onu eğlendirmeye veya dışarı çıkarmaya çalışırım.", category: "Ateş" },
          { text: "Sorunu çözmek için somut yardımlar sunar, pratik destek veririm.", category: "Toprak" },
          { text: "Onunla konuşur, durumu mantıklı bir çerçeveye oturtmasına yardım ederim.", category: "Hava" },
          { text: "Sadece yanında olur, onu dinler ve duygusal olarak acısını paylaşırım.", category: "Su" }
        ]
      },
      {
        question: "Geleceğe dair hayallerinizde hangisi ön plandadır?",
        options: [
          { text: "Büyük başarılar elde etmek, lider olmak ve iz bırakmak.", category: "Ateş" },
          { text: "Maddi güvence, düzenli bir hayat ve konforlu bir yuva sahibi olmak.", category: "Toprak" },
          { text: "Yeni fikirler üretmek, sürekli öğrenmek ve insanlarla bağ kurmak.", category: "Hava" },
          { text: "Ruhsal huzura ulaşmak, sevdiklerimi korumak ve şifa bulmak/dağıtmak.", category: "Su" }
        ]
      },
      {
        question: "Bir karar alırken en çok neye güvenirsiniz?",
        options: [
          { text: "İlk anlık dürtüme ve heyecanıma.", category: "Ateş" },
          { text: "Geçmiş tecrübelerime ve somut verilere.", category: "Toprak" },
          { text: "Mantıklı analizlere ve akıl yürütmeye.", category: "Hava" },
          { text: "İçimden gelen o güçlü sese ve sezgilerime.", category: "Su" }
        ]
      }
    ],
    results: {
      "Ateş": {
        icon: "🔥",
        title: "Ateş Elementi Baskın",
        subtitle: "Sezgi, İlham ve Aksiyon",
        desc: `<p>Sizin dominant elementiniz <b>Ateş</b>. Bu, içinizde durdurulamaz bir yaşam enerjisi, cesaret ve ilham kıvılcımı taşıdığınızı gösterir. Hayata karşı son derece tutkulu, doğrudan ve sabırsızsınız. Sorunlar karşısında beklemek yerine ilk adımı atan siz olursunuz.</p>
               <p><b>Güçlü Yönleriniz:</b> Yüksek cesaret, inisiyatif alabilme, cömertlik, karizma ve insanlara ilham verme gücü.</p>
               <p><b>Kozmik Tavsiye:</b> Toprak eksikliği yaşıyor olabilirsiniz. Enerjinizi topraklamak için doğa yürüyüşleri yapın.</p>`
      },
      "Toprak": {
        icon: "🌱",
        title: "Toprak Elementi Baskın",
        subtitle: "İstikrar, Madde ve Gerçekçilik",
        desc: `<p>Sizin dominant elementiniz <b>Toprak</b>. Bu, hayatı son derece gerçekçi, planlı, güvenilir ve somut adımlarla yaşadığınızı gösterir. Kaosun içinde bile düzen yaratabilir, hedeflerinize sabır ve azimle tırmanabilirsiniz.</p>
               <p><b>Güçlü Yönleriniz:</b> Güvenilirlik, olağanüstü sabır, pratik zeka, sadakat ve üretkenlik.</p>
               <p><b>Kozmik Tavsiye:</b> Hayatın akışına daha fazla güvenin. Bazen plansız hareket etmek ruhunuza iyi gelecektir.</p>`
      },
      "Hava": {
        icon: "💨",
        title: "Hava Elementi Baskın",
        subtitle: "Zihin, İletişim ve Fikirler",
        desc: `<p>Sizin dominant elementiniz <b>Hava</b>. Bu, hayatı zihinsel süzgeçlerden geçirerek, merakla, öğrenerek ve paylaşarak yaşadığınızı gösterir. Kelimelerle aranız harikadır; sosyal ortamlara uyum sağlamakta ustasınızdır.</p>
               <p><b>Güçlü Yönleriniz:</b> Entelektüel kapasite, tarafsız bakış açısı, esneklik, iletişim gücü.</p>
               <p><b>Kozmik Tavsiye:</b> Kafanızdaki fikirleri hayata geçirmek için somut adımlar atın.</p>`
      },
      "Su": {
        icon: "💧",
        title: "Su Elementi Baskın",
        subtitle: "Duygu, Sezgi ve Empati",
        desc: `<p>Sizin dominant elementiniz <b>Su</b>. Bu, dünyayı derin duygusal bağlar, yüksek empati ve sezgilerinizle algıladığınızı gösterir. İnsanların söylemedikleri hisleri sezer, sevdiklerinizi şefkatle sarmalarsınız.</p>
               <p><b>Güçlü Yönleriniz:</b> Derin empati, şefkat, hayal gücü, sezgiler, sadakat.</p>
               <p><b>Kozmik Tavsiye:</b> Çevrenizdeki negatif enerjilere karşı kendinizi korumak için sınırlar çizmeyi öğrenin.</p>`
      }
    }
  },
  arketip: {
    title: "Kozmik Arketip Testi",
    category: "Karakter",
    icon: "👑",
    description: "Hangi ruhsal arketipin (Savaşçı, Bilge, Şifacı, Devrimci) sizi yönettiğini öğrenin.",
    questions: [
      {
        question: "Bir grupta çalışırken genellikle üstlendiğiniz rol hangisidir?",
        options: [
          { text: "Hedefleri belirler, ekibi cesaretlendirir ve yönlendiririm.", category: "Savaşçı" },
          { text: "Verileri inceler, planı organize eder ve mantıklı çözümler ararım.", category: "Bilge" },
          { text: "Herkesin iyi hissettiğinden emin olur, çatışmaları yatıştırırım.", category: "Şifacı" },
          { text: "Klasik kalıpları sorgular, tamamen farklı fikirler sunarım.", category: "Devrimci" }
        ]
      },
      {
        question: "Hayattaki en temel arayışınız nedir?",
        options: [
          { text: "Engelleri aşmak, gücümü kanıtlamak ve zafer kazanmak.", category: "Savaşçı" },
          { text: "Hakikati öğrenmek, evrenin ve bilginin sırlarına ulaşmak.", category: "Bilge" },
          { text: "Sevilmek, sevmek, insanlara yardım etmek ve huzuru bulmak.", category: "Şifacı" },
          { text: "Özgür olmak, sınırları yıkmak ve geleceği inşa etmek.", category: "Devrimci" }
        ]
      },
      {
        question: "Kritik bir kriz anında nasıl davranırsınız?",
        options: [
          { text: "Hemen sorumluluk alır, cesurca en ön safta mücadele ederim.", category: "Savaşçı" },
          { text: "Soğukkanlılığımı korur, durumu analiz edip en mantıklı planı yaparım.", category: "Bilge" },
          { text: "İnsanların korkularını yatıştırır, duygusal destek sağlarım.", category: "Şifacı" },
          { text: "Geleneksel yöntemleri bırakıp, tamamen alışılmadık bir çıkış yolu bulurum.", category: "Devrimci" }
        ]
      },
      {
        question: "Hangi kusur veya eksiklik sizi en çok rahatsız eder?",
        options: [
          { text: "Korkaklık, pasiflik ve inisiyatif alamama.", category: "Savaşçı" },
          { text: "Bilgisizlik, mantıksızlık ve plansızlık.", category: "Bilge" },
          { text: "Kabalık, sevgisizlik ve empati eksikliği.", category: "Şifacı" },
          { text: "Taklitçilik, sürü psikolojisi ve kısıtlanmalar.", category: "Devrimci" }
        ]
      },
      {
        question: "Hayat felsefenizi en iyi hangisi özetler?",
        options: [
          { text: "Mücadele etmeyen, kazanamaz.", category: "Savaşçı" },
          { text: "Bilgi en büyük güçtür.", category: "Bilge" },
          { text: "Sevgi her şeyi iyileştirir.", category: "Şifacı" },
          { text: "Sıradan olmak, en büyük hapishanedir.", category: "Devrimci" }
        ]
      }
    ],
    results: {
      "Savaşçı": { icon: "⚔️", title: "Arketipiniz: Savaşçı", subtitle: "Eylem ve Cesaret", desc: "<p>Savaşçı arketipi Mars enerjisiyle eylemi, liderliği ve engelleri yıkmayı simgeler. Cesursunuz.</p>" },
      "Bilge": { icon: "📖", title: "Arketipiniz: Bilge", subtitle: "Bilgi ve Strateji", desc: "<p>Bilge arketipi Satürn ve Merkür etkisiyle mantığı ve araştırmayı simgeler. Planlısınız.</p>" },
      "Şifacı": { icon: "🌿", title: "Arketipiniz: Şifacı", subtitle: "Şefkat ve Empati", desc: "<p>Şifacı arketipi Ay ve Neptün etkisiyle sevgiyi ve insanları iyileştirmeyi simgeler.</p>" },
      "Devrimci": { icon: "⚡", title: "Arketipiniz: Devrimci", subtitle: "Vizyon ve Özgünlük", desc: "<p>Devrimci arketipi Uranüs etkisiyle kuralları yıkmayı ve yeniliği simgeler.</p>" }
    }
  },
  planet: {
    title: "Yönetici Gezegen Testi",
    category: "Karakter",
    icon: "🪐",
    description: "Kişiliğinizi en çok etkileyen ve sizi yöneten kozmik gezegen arketipini keşfedin.",
    questions: [
      {
        question: "Hayatınızın genel kontrolünü neye göre şekillendirirsiniz?",
        options: [
          { text: "Hırs ve hedeflerime ulaşma azmine.", category: "Satürn" },
          { text: "İçimdeki heyecan ve macera tutkusuna.", category: "Jüpiter" },
          { text: "İlişkilerimdeki denge ve estetik arayışına.", category: "Venüs" },
          { text: "Bilinmeyen sırlar, tutku ve güce.", category: "Plüton" }
        ]
      },
      {
        question: "Bir sanat eserine baktığınızda sizi en çok ne etkiler?",
        options: [
          { text: "İçindeki derin uyum, güzellik ve estetik zevk.", category: "Venüs" },
          { text: "Sıra dışı, kuralları yıkan ve benzersiz tarzı.", category: "Uranüs" },
          { text: "Mistik, sınırları belirsiz ve ruhani derinlik.", category: "Neptün" },
          { text: "Tasarımındaki büyük emek, yapı ve ciddiyet.", category: "Satürn" }
        ]
      },
      {
        question: "Zorluklar karşısında şansınıza ne kadar güvenirsiniz?",
        options: [
          { text: "Şansıma inanırım, her şey eninde sonunda yoluna girer.", category: "Jüpiter" },
          { text: "Şansa inanmam, sadece emeğe ve kurallara güvenirim.", category: "Satürn" },
          { text: "Sezgilerimin beni akışa bırakmasına izin veririm.", category: "Neptün" },
          { text: "Zorlukları dönüştürerek kendi şansımı kendim yaratırım.", category: "Plüton" }
        ]
      },
      {
        question: "İdeal mesleğinizde hangisi en önemli kriterdir?",
        options: [
          { text: "Zihinsel üretim yapmak ve bilgiyi paylaşmak.", category: "Merkür" },
          { text: "Geleceğin teknolojilerini veya sıra dışı fikirleri tasarlamak.", category: "Uranüs" },
          { text: "İnsanlara şifa vermek, yaratıcı sanatlarla ilgilenmek.", category: "Neptün" },
          { text: "Büyük organizasyonları, şirketleri yönetmek.", category: "Satürn" }
        ]
      },
      {
        question: "Sizi en iyi özetleyen gezegensel kelime hangisidir?",
        options: [
          { text: "Uyanış ve Özgürlük.", category: "Uranüs" },
          { text: "Disiplin ve Sınırlar.", category: "Satürn" },
          { text: "İnanç ve İyimserlik.", category: "Jüpiter" },
          { text: "Sevgi ve Estetik.", category: "Venüs" }
        ]
      }
    ],
    results: {
      "Mars": { icon: "♂️", title: "Yönetici Gezegeniniz: Mars", subtitle: "Mücadele, Eylem ve İrade", desc: "<p>Cesur, iradeli ve savaşçısınız.</p>" },
      "Venüs": { icon: "♀️", title: "Yönetici Gezegeniniz: Venüs", subtitle: "Sevgi, Değer ve Estetik", desc: "<p>Uyumlu, nazik ve sanat seversiniz.</p>" },
      "Merkür": { icon: "☿", title: "Yönetici Gezegeniniz: Merkür", subtitle: "Zihin, İletişim ve Merak", desc: "<p>Zeki, meraklı ve konuşkansınız.</p>" },
      "Jüpiter": { icon: "♃", title: "Yönetici Gezegeniniz: Jüpiter", subtitle: "Bolluk, İnanç ve Genişleme", desc: "<p>Şanslı, iyimser ve kaşifsiniz.</p>" },
      "Satürn": { icon: "♄", title: "Yönetici Gezegeniniz: Satürn", subtitle: "Disiplin, Zaman ve Sorumluluk", desc: "<p>Sabırlı, disiplinli ve olgunsunuz.</p>" },
      "Uranüs": { icon: "♅", title: "Yönetici Gezegeniniz: Uranüs", subtitle: "Özgünlük ve Uyanış", desc: "<p>Sıra dışı, asi ve mucitsiniz.</p>" },
      "Neptün": { icon: "♆", title: "Yönetici Gezegeniniz: Neptün", subtitle: "İlham, Hayaller ve Sezgi", desc: "<p>Hassas, hayalperest ve sezgiselsiniz.</p>" },
      "Plüton": { icon: "♇", title: "Yönetici Gezegeniniz: Plüton", subtitle: "Güç, Dönüşüm ve Simya", desc: "<p>Tutkulu, güçlü ve dönüşümcüsünüz.</p>" }
    }
  },
  loveLanguage: {
    title: "Kozmik Aşk Dili Testi",
    category: "Aşk & İlişki",
    icon: "💞",
    description: "Aşkı yaşama, hissetme ve ifade etme tarzınızın hangi sevgi diline uyduğunu bulun.",
    questions: [
      {
        question: "Sevgilinizi mutlu etmek için en çok hangisini tercih edersiniz?",
        options: [
          { text: "Ona sarılmak, elini tutmak ve yakın olmak.", category: "Fiziksel Temas" },
          { text: "Onun işlerini kolaylaştıracak pratik yardımlarda bulunmak.", category: "Hizmet Eylemleri" },
          { text: "Onu ne kadar çok sevdiğimi ve özgün yönlerini öven sözler söylemek.", category: "Onay Sözcükleri" },
          { text: "Her şeyi kapatıp sadece baş başa vakit geçirmek.", category: "Nitelikli Zaman" }
        ]
      },
      {
        question: "İlişkide sevilmediğinizi en çok ne zaman hissedersiniz?",
        options: [
          { text: "Partnerim bana dokunmaktan veya sarılmaktan kaçındığında.", category: "Fiziksel Temas" },
          { text: "Bana yardım etmek yerine beni tek başıma bıraktığında.", category: "Hizmet Eylemleri" },
          { text: "Beni eleştirdiğinde veya takdir edici sözler söylemediğinde.", category: "Onay Sözcükleri" },
          { text: "Birlikteyken sürekli telefonuyla ilgilendiğinde.", category: "Nitelikli Zaman" }
        ]
      },
      {
        question: "Doğum gününüzde partnerinizden gelecek hangi jest sizi en çok mutlu eder?",
        options: [
          { text: "Sıcak bir kucaklaşma ve baş başa romantik bir an.", category: "Fiziksel Temas" },
          { text: "Benim yerime tüm günün işlerini planlayıp beni dinlendirmesi.", category: "Hizmet Eylemleri" },
          { text: "Bana yazdığı derin, anlamlı ve duygusal bir mektup.", category: "Onay Sözcükleri" },
          { text: "Zevklerimi düşünerek seçtiği, somut ve özel bir hediye.", category: "Hediye Alma" }
        ]
      },
      {
        question: "Aşağıdakilerden hangisi sizin için sevgiyi en iyi ifade eder?",
        options: [
          { text: "Fiziksel yakınlık ve tensel uyum.", category: "Fiziksel Temas" },
          { text: "Eylemlerle gösterilen sadakat ve emek.", category: "Hizmet Eylemleri" },
          { text: "Takdir edilmek ve sözel onay almak.", category: "Onay Sözcükleri" },
          { text: "Zamanın ve anın paylaşılması.", category: "Nitelikli Zaman" }
        ]
      },
      {
        question: "Aşk dilinizi en iyi tanımlayan kelime hangisidir?",
        options: [
          { text: "Dokunmak.", category: "Fiziksel Temas" },
          { text: "Yardım etmek.", category: "Hizmet Eylemleri" },
          { text: "Söylemek.", category: "Onay Sözcükleri" },
          { text: "Paylaşmak.", category: "Nitelikli Zaman" }
        ]
      }
    ],
    results: {
      "Fiziksel Temas": { icon: "🤝", title: "Aşk Diliniz: Fiziksel Temas", subtitle: "Tenin ve Yakınlığın Dili", desc: "<p>Sevgiyi en çok dokunarak ve sarılarak hissedersiniz. Venüs-Mars etkisidir.</p>" },
      "Hizmet Eylemleri": { icon: "🛠️", title: "Aşk Diliniz: Hizmet Eylemleri", subtitle: "Emeğin ve Desteğin Dili", desc: "<p>Eylemlerle ve yardımlaşmayla sevgiyi gösterirsiniz. Toprak enerjisidir.</p>" },
      "Onay Sözcükleri": { icon: "💬", title: "Aşk Diliniz: Onay Sözcükleri", subtitle: "Kelimelerin ve Takdirin Dili", desc: "<p>Sevilmeyi duymaya, takdir edilmeye ihtiyaç duyarsınız. Hava/Merkür enerjisidir.</p>" },
      "Nitelikli Zaman": { icon: "⏳", title: "Aşk Diliniz: Nitelikli Zaman", subtitle: "Anın ve Paylaşımın Dili", desc: "<p>Birlikte kaliteli anlar paylaşmak sizin için sevgidir. Su/Yay enerjisidir.</p>" },
      "Hediye Alma": { icon: "🎁", title: "Aşk Diliniz: Hediye Alma", subtitle: "Somut Hatıraların Dili", desc: "<p>Düşünülmüş somut hediyeler sizi çok değerli hissettirir. Boğa/Yengeç enerjisidir.</p>" }
    }
  },
  // 20 Yeni Test:
  aura: {
    title: "Aura Rengi Testi",
    category: "Karakter",
    icon: "🌈",
    description: "Hangi kozmik enerji alanına (Aura rengine) sahip olduğunuzu öğrenin.",
    questions: [
      {
        question: "İnsanlar sizin yanınızda genellikle nasıl hisseder?",
        options: [
          { text: "Sakin, huzurlu ve güvende.", category: "Mavi" },
          { text: "Enerjik, motive ve hareketli.", category: "Kırmızı" },
          { text: "Gözü kapalı inanmış, mistik ve gizemli.", category: "Mor" },
          { text: "Bilinçli, akıllı ve korunmuş.", category: "Altın" }
        ]
      },
      {
        question: "Kendinizi en iyi nasıl ifade edersiniz?",
        options: [
          { text: "Sanatla, kelimelerle ve dürüstçe.", category: "Mavi" },
          { text: "Liderlikle, eylemle ve cesurca.", category: "Kırmızı" },
          { text: "Rüyalarla, sezgilerle ve sessizlikle.", category: "Mor" },
          { text: "Öğreterek, mantıkla ve bilgelikle.", category: "Altın" }
        ]
      },
      {
        question: "Hayatta en çok hangi renklere çekilirsiniz?",
        options: [
          { text: "Mavi ve yeşil tonları.", category: "Mavi" },
          { text: "Kırmızı, turuncu ve parlak renkler.", category: "Kırmızı" },
          { text: "Mor, eflatun ve çivit mavisi.", category: "Mor" },
          { text: "Altın, sarı ve beyaz tonları.", category: "Altın" }
        ]
      },
      {
        question: "Öfkelendiğinizde enerjiniz nasıl yansır?",
        options: [
          { text: "Sessizce geri çekilir, konuşmak istemem.", category: "Mavi" },
          { text: "Sertçe patlar, hemen tepki veririm.", category: "Kırmızı" },
          { text: "Ruhsal olarak duvar örer, soğurum.", category: "Mor" },
          { text: "Mantıklı kalmaya çalışır, durumu yönetirim.", category: "Altın" }
        ]
      },
      {
        question: "Size göre en değerli yetenek hangisidir?",
        options: [
          { text: "İnsanları dinlemek ve anlamak.", category: "Mavi" },
          { text: "Harekete geçmek ve başarmak.", category: "Kırmızı" },
          { text: "Görünmeyeni hissetmek ve sezmek.", category: "Mor" },
          { text: "Bilgiye ulaşmak ve yol göstermek.", category: "Altın" }
        ]
      }
    ],
    results: {
      "Mavi": { icon: "💙", title: "Aura Renginiz: Mavi", subtitle: "Huzur ve İletişim", desc: "<p>Auranız mavi tonlarında parlıyor. İnsanlara huzur veren, dürüst ve arabulucu bir karaktere sahipsiniz.</p>" },
      "Kırmızı": { icon: "❤️", title: "Aura Renginiz: Kırmızı", subtitle: "Tutku ve Yaşam Gücü", desc: "<p>Auranız kırmızı parlıyor. Yüksek yaşam enerjisi, eylem gücü, hırs ve karizmatik bir liderlik taşıyorsunuz.</p>" },
      "Mor": { icon: "💜", title: "Aura Renginiz: Mor", subtitle: "Mistik ve Sezgisel", desc: "<p>Auranız mor parlıyor. Yüksek sezgiler, ruhsal derinlik, medyumsal algılar ve maneviyatla dolusunuz.</p>" },
      "Altın": { icon: "💛", title: "Aura Renginiz: Altın", subtitle: "Bilgelik ve Koruma", desc: "<p>Auranız altın renginde parlıyor. Yaşam boyu edindiğiniz bilgelik, güçlü zeka ve etrafınızı koruma gücünüz çok yüksek.</p>" }
    }
  },
  chakra: {
    title: "Çakra Blokaj Testi",
    category: "Ruhsal & Karma",
    icon: "☸️",
    description: "Hangi enerji merkezinizin (çakranızın) blokeli olduğunu keşfedin.",
    questions: [
      {
        question: "Son zamanlarda kendinizi en çok hangi konuda tıkanmış hissediyorsunuz?",
        options: [
          { text: "Güvenlik, para ve gelecek endişesinde.", category: "Kök" },
          { text: "Özgüven, irade ve kararsızlıkta.", category: "Solar" },
          { text: "Sevgisizlik, yalnızlık ve kırgınlıkta.", category: "Kalp" },
          { text: "Kendimi ifade etmekte ve konuşmakta.", category: "Boğaz" }
        ]
      },
      {
        question: "Vücudunuzda en sık nerede gerginlik hissedersiniz?",
        options: [
          { text: "Bacaklar, eklemler ve omurga tabanında.", category: "Kök" },
          { text: "Mide, karın ve sindirim bölgesinde.", category: "Solar" },
          { text: "Göğüs kafesi ve sırtımda.", category: "Kalp" },
          { text: "Boyun, omuzlar ve boğazımda.", category: "Boğaz" }
        ]
      },
      {
        question: "İnsanlarla ilişkilerinizde en çok neden korkarsınız?",
        options: [
          { text: "Terk edilmekten ve güvencesiz kalmaktan.", category: "Kök" },
          { text: "Kontrolü kaybetmekten ve başarısızlıktan.", category: "Solar" },
          { text: "İhanete uğramaktan ve tekrar kırılmaktan.", category: "Kalp" },
          { text: "Yanlış anlaşılmaktan ve dışlanmaktan.", category: "Boğaz" }
        ]
      },
      {
        question: "Kendinizi en rahat nasıl deşarj edersiniz?",
        options: [
          { text: "Toprağa dokunarak ve fiziksel hareketle.", category: "Kök" },
          { text: "Kendi başıma kalıp bir şeyler üreterek.", category: "Solar" },
          { text: "Sanatla ilgilenerek veya sevdiklerime sarılarak.", category: "Kalp" },
          { text: "Yazı yazarak veya şarkı söyleyerek.", category: "Boğaz" }
        ]
      },
      {
        question: "Sizi en çok ne motive eder?",
        options: [
          { text: "Maddi ve fiziksel güvence altında olmak.", category: "Kök" },
          { text: "Takdir edilmek ve irademi kanıtlamak.", category: "Solar" },
          { text: "Koşulsuz sevgi ve kabul görmek.", category: "Kalp" },
          { text: "Fikirlerimi özgürce dünyaya sunmak.", category: "Boğaz" }
        ]
      }
    ],
    results: {
      "Kök": { icon: "🔴", title: "Blokaj: Kök Çakra", subtitle: "Güvenlik ve Topraklanma Sorunu", desc: "<p>Kök çakranızda tıkanıklık olabilir. Gelecek korkusu ve güvensizlik yaşıyorsunuz. Dengelemek için doğada çıplak ayakla yürüyün ve kırmızı taşlar kullanın.</p>" },
      "Solar": { icon: "🟡", title: "Blokaj: Solar Pleksus", subtitle: "Özgüven ve İrade Sorunu", desc: "<p>Solar Pleksus çakranızda blokaj var. Kararsızlık ve onaylanma ihtiyacı yaşıyorsunuz. Dengelemek için spor yapın ve sarı kristaller taşıyın.</p>" },
      "Kalp": { icon: "🟢", title: "Blokaj: Kalp Çakrası", subtitle: "Sevgi ve Kabul Sorunu", desc: "<p>Kalp çakranızda blokaj olabilir. Geçmiş kırgınlıkları bırakmakta zorlanıyorsunuz. Dengelemek için affetme meditasyonları yapın ve yeşil kuvars kullanın.</p>" },
      "Boğaz": { icon: "🔵", title: "Blokaj: Boğaz Çakrası", subtitle: "İfade ve İletişim Sorunu", desc: "<p>Boğaz çakranızda tıkanıklık var. Duygularınızı dışarı aktaramıyorsunuz. Dengelemek için yazın, konuşun ve turkuaz/safir taşları taşıyın.</p>" }
    }
  },
  tarot: {
    title: "Tarot Kartı Testi",
    category: "Aşk & İlişki",
    icon: "🃏",
    description: "Hangi Tarot kartının sizin kozmik ruh ikiziniz olduğunu öğrenin.",
    questions: [
      {
        question: "Hayattaki en büyük gücünüz hangisidir?",
        options: [
          { text: "Fikirleri gerçeğe dönüştürme ve yaratma.", category: "Büyücü" },
          { text: "Uyum kurma, ilişkileri yönetme ve sevgi.", category: "Aşıklar" },
          { text: "Bilgelik, gelenekler ve yol gösterme.", category: "Aziz" },
          { text: "Krizleri yönetme ve köklü değişim başlatma.", category: "Kule" }
        ]
      },
      {
        question: "Özgürlük sizin için neyi ifade eder?",
        options: [
          { text: "Kendi projelerimi istediğim gibi başlatabilmeyi.", category: "Büyücü" },
          { text: "İlişkilerimde kısıtlanmadan kendim olabilmeyi.", category: "Aşıklar" },
          { text: "Kendi inançlarım doğrultusunda yaşayabilmeyi.", category: "Aziz" },
          { text: "Tüm eski bağları yıkıp sıfırdan başlayabilmeyi.", category: "Kule" }
        ]
      },
      {
        question: "Bir ilişkiden beklentiniz nedir?",
        options: [
          { text: "Zihinsel uyarım, ortak yaratıcılık ve dinamizm.", category: "Büyücü" },
          { text: "Ruhsal bütünleşme, aşk ve tam bir eşitlik.", category: "Aşıklar" },
          { text: "Güven, geleneksel bağlar ve sadakat.", category: "Aziz" },
          { text: "Tutku, krizler yoluyla dönüşüm ve derinlik.", category: "Kule" }
        ]
      },
      {
        question: "Bir sorunu çözerken hangi yöntemi kullanırsınız?",
        options: [
          { text: "Elimdeki tüm araçları ve yetenekleri birleştiririm.", category: "Büyücü" },
          { text: "Uzlaşma sağlar, orta yolu bulurum.", category: "Aşıklar" },
          { text: "Geçmiş tecrübelere ve kadim kurallara bakarım.", category: "Aziz" },
          { text: "Her şeyi yıkar, sıfırdan yepyeni bir düzen kurarım.", category: "Kule" }
        ]
      },
      {
        question: "Sizi en iyi tanımlayan sembol hangisidir?",
        options: [
          { text: "Sonsuzluk işareti ve asa.", category: "Büyücü" },
          { text: "İki elin birleşmesi veya kalp.", category: "Aşıklar" },
          { text: "Kadim bir kitap veya mabet.", category: "Aziz" },
          { text: "Yıldırım çarpan bir kule.", category: "Kule" }
        ]
      }
    ],
    results: {
      "Büyücü": { icon: "🪄", title: "Ruh Kartınız: Büyücü", subtitle: "Yaratıcılık ve İrade", desc: "<p>Sizin ruh ikiziniz Tarot'taki Büyücü kartıdır. Fikirlerinizi gerçeğe dönüştürme gücünüz çok yüksek. Hayatı şekillendirebilirsiniz.</p>" },
      "Aşıklar": { icon: "💖", title: "Ruh Kartınız: Aşıklar", subtitle: "Uyum, Aşk ve Seçimler", desc: "<p>Sizin ruh ikiziniz Aşıklar kartıdır. Hayatınızda ilişkiler, denge ve kalpten yapılan seçimler en ön plandadır.</p>" },
      "Aziz": { icon: "⛪", title: "Ruh Kartınız: Aziz (Hierophant)", subtitle: "Bilgelik ve İnanç", desc: "<p>Sizin ruh ikiziniz Aziz kartıdır. Kadim bilgilere saygı duyuyor, insanlara yol gösteriyor ve ahlaki değerleri koruyorsunuz.</p>" },
      "Kule": { icon: "⚡", title: "Ruh Kartınız: Kule", subtitle: "Radikal Değişim ve Yıkım", desc: "<p>Sizin ruh ikiziniz Kule kartıdır. Krizlerden korkmayan, eski yapıları yıkıp küllerinden yepyeni bir hayat kuran bir simyacısınız.</p>" }
    }
  },
  deity: {
    title: "Mitolojik Tanrı/Tanrıça Testi",
    category: "Ruhsal & Karma",
    icon: "🏛️",
    description: "Hangi antik mitolojik tanrı veya tanrıçanın enerjisini taşıdığınızı bulun.",
    questions: [
      {
        question: "Liderlik tarzınız nasıldır?",
        options: [
          { text: "Otoriter, kuralları koyan ve yöneten.", category: "Zeus" },
          { text: "Güzellik, karizma ve çekicilikle etkileyen.", category: "Afrodit" },
          { text: "Stratejik, mantıklı ve adil kararlar alan.", category: "Athena" },
          { text: "Gizemli, arka planda gücü elinde tutan.", category: "Hades" }
        ]
      },
      {
        question: "En çok nerede vakit geçirmeyi seversiniz?",
        options: [
          { text: "Zirvelerde, herkesin beni görebileceği konumlarda.", category: "Zeus" },
          { text: "Şık, estetik ve sanat dolu ortamlarda.", category: "Afrodit" },
          { text: "Kütüphanelerde, çalışma odalarında veya meclislerde.", category: "Athena" },
          { text: "Sessiz, derin ve kimsenin bilmediği gizli köşelerde.", category: "Hades" }
        ]
      },
      {
        question: "Hangi duygu sizi en çok yönetir?",
        options: [
          { text: "Gurur ve adaleti sağlama dürtüsü.", category: "Zeus" },
          { text: "Sevgi, tutku ve estetik zevk.", category: "Afrodit" },
          { text: "Mantık, öğrenme açlığı ve strateji.", category: "Athena" },
          { text: "Merak, derin sırlar ve gizli güç.", category: "Hades" }
        ]
      },
      {
        question: "Bir düşmanla nasıl mücadele edersiniz?",
        options: [
          { text: "Gücümü açıkça gösterir, yıldırımları üzerlerine fırlatırım.", category: "Zeus" },
          { text: "Cazibemle onu etkisiz hale getirir, manipüle ederim.", category: "Afrodit" },
          { text: "Stratejik bir plan yapar, onu aklımla yenerim.", category: "Athena" },
          { text: "Sessizce bekler, en zayıf anında yer altından vururum.", category: "Hades" }
        ]
      },
      {
        question: "Sizin için hayatın özü nedir?",
        options: [
          { text: "Düzen kurmak ve yönetmek.", category: "Zeus" },
          { text: "Aşkı ve güzelliği paylaşmak.", category: "Afrodit" },
          { text: "Bilgi üretmek ve kazanmak.", category: "Athena" },
          { text: "Görünmeyenin ardındaki gücü elde etmek.", category: "Hades" }
        ]
      }
    ],
    results: {
      "Zeus": { icon: "⚡", title: "Kozmik Tanrınız: Zeus", subtitle: "Otorite, Liderlik ve Güç", desc: "<p>Zeus'un göksel iradesini taşıyorsunuz. Liderlik etmek ve kuralları koymak sizin doğanızda var.</p>" },
      "Afrodit": { icon: "🕊️", title: "Kozmik Tanrıçanız: Afrodit", subtitle: "Aşk, Çekicilik ve Estetik", desc: "<p>Afrodit'in enerjisini taşıyorsunuz. Estetik, sevgi, güzellik ve insanları cazibenizle etkileme gücünüz yüksek.</p>" },
      "Athena": { icon: "🦉", title: "Kozmik Tanrıçanız: Athena", subtitle: "Zeka, Strateji ve Adalet", desc: "<p>Athena'nın rasyonel zekasına sahipsiniz. Akılcı kararlar alır, stratejik planlar yapar ve adaleti savunursunuz.</p>" },
      "Hades": { icon: "🗝️", title: "Kozmik Tanrınız: Hades", subtitle: "Gizem, Yeraltı ve Dönüşüm", desc: "<p>Hades'in gücünü taşıyorsunuz. Ketum, gizemli, derin sırları çözebilen ve krizlerden dönüşerek çıkan birisiniz.</p>" }
    }
  },
  star: {
    title: "Yıldız Tohumu (Starseed) Testi",
    category: "Ruhsal & Karma",
    icon: "🌌",
    description: "Ruhunuzun hangi yıldız sisteminden kök aldığını keşfedin.",
    questions: [
      {
        question: "Dünyaya karşı hissettiğiniz en baskın duygu hangisidir?",
        options: [
          { text: "Kendimi buraya yabancı hissediyorum, evimi özlüyorum.", category: "Pleiades" },
          { text: "Dünyayı ve doğayı korumak, iyileştirmek istiyorum.", category: "Sirius" },
          { text: "İnsanların bilincini yükseltmek için buradayım.", category: "Andromeda" },
          { text: "Zorluklarla mücadele edip adalet getirmek istiyorum.", category: "Orion" }
        ]
      },
      {
        question: "Rüyalarınızda en sık hangisini görürsünüz?",
        options: [
          { text: "Uçsuz bucaksız denizler, kristaller veya şefkatli varlıklar.", category: "Pleiades" },
          { text: "Antik tapınaklar, piramitler veya kutsal geometrik şekiller.", category: "Sirius" },
          { text: "Geleceğin teknolojileri, uzay gemileri veya gökyüzü şehirleri.", category: "Andromeda" },
          { text: "Kozmik savaşlar veya büyük mücadeleler.", category: "Orion" }
        ]
      },
      {
        question: "Hassas olduğunuz alan hangisidir?",
        options: [
          { text: "İnsanların negatif enerjilerinden ve kabalıktan çok kolay etkilenirim.", category: "Pleiades" },
          { text: "Doğanın ve hayvanların zarar görmesine dayanamam.", category: "Sirius" },
          { text: "Özgürlüğümün kısıtlanmasına ve kurallara tahammül edemem.", category: "Andromeda" },
          { text: "Haksızlığa ve cehalete karşı hemen öfkelenirim.", category: "Orion" }
        ]
      },
      {
        question: "En güçlü ruhsal yeteneğiniz hangisidir?",
        options: [
          { text: "İnsanlara şefkatle yaklaşmak ve onları sakinleştirmek.", category: "Pleiades" },
          { text: "Kutsal bilgiye ve sembollerin diline olan yatkınlık.", category: "Sirius" },
          { text: "Yenilikçi, özgür ve vizyoner fikirler üretmek.", category: "Andromeda" },
          { text: "Stratejik düşünme, koruyuculuk ve dayanıklılık.", category: "Orion" }
        ]
      },
      {
        question: "Hangi elementle bağınız daha güçlüdür?",
        options: [
          { text: "Su - akışkan ve duygusal arınma.", category: "Pleiades" },
          { text: "Toprak - kadim bilgi ve stabilite.", category: "Sirius" },
          { text: "Hava - zihinsel özgürlük ve fikirler.", category: "Andromeda" },
          { text: "Ateş - irade ve dönüşüm gücü.", category: "Orion" }
        ]
      }
    ],
    results: {
      "Pleiades": { icon: "✨", title: "Kökünüz: Pleiades", subtitle: "Şefkat ve Sevgi Taşıyıcısı", desc: "<p>Ruhunuz Ülker (Pleiades) yıldız kümesinden geliyor. Dünyaya sevgiyi, şefkati ve sanatsal duyarlılığı yaymak için buradasınız.</p>" },
      "Sirius": { icon: "🐺", title: "Kökünüz: Sirius", subtitle: "Kadim Bilgi Koruyucusu", desc: "<p>Ruhunuz Sirius yıldız sistemine bağlı. Antik uygarlıklar, kutsal geometri ve doğayı şifalandırma gücünüz yüksek.</p>" },
      "Andromeda": { icon: "🛸", title: "Kökünüz: Andromeda", subtitle: "Özgürlükçü ve Vizyoner", desc: "<p>Ruhunuz Andromeda galaksisine bağlı. Özgürlüğünüze düşkün, geleceğin teknolojilerine ve özgün fikirlerine açıksınız.</p>" },
      "Orion": { icon: "🛡️", title: "Kökünüz: Orion", subtitle: "Kozmik Savaşçı ve Işık İşçisi", desc: "<p>Ruhunuz Orion sisteminden geliyor. Hayattaki engellerle mücadele etmeyi bilen, adalet arayan ve dayanıklı birisiniz.</p>" }
    }
  },
  retro: {
    title: "Merkür Retrosu Testi",
    category: "Karakter",
    icon: "☄️",
    description: "Merkür Retrolarından nasıl etkilendiğinizi ve bununla başa çıkma yolunuzu öğrenin.",
    questions: [
      {
        question: "Retro dönemlerinde genellikle ne tür aksilikler yaşarsınız?",
        options: [
          { text: "Telefon, bilgisayar bozulur, mesajlar yanlış gider.", category: "Kaos" },
          { text: "Eski sevgililer, eski dostlar aniden ortaya çıkar.", category: "Denge" },
          { text: "Randevular ertelenir, işlerimde gecikmeler yaşanır.", category: "Sabır" },
          { text: "Hiçbir şey olmaz, her zamanki gibi hayatıma devam ederim.", category: "Simya" }
        ]
      },
      {
        question: "İletişimde en çok ne zaman zorlanırsınız?",
        options: [
          { text: "Kendimi yanlış ifade edip insanlarla tartıştığımda.", category: "Kaos" },
          { text: "Geçmiş konular tekrar açıldığında kafam karıştığında.", category: "Denge" },
          { text: "İşlerimin yavaşlaması beni sabırsızlaştırdığında.", category: "Sabır" },
          { text: "Ben zorlanmam, durumu analiz edip strateji geliştiririm.", category: "Simya" }
        ]
      },
      {
        question: "Retro dönemlerinde aldığınız kararlar genellikle nasıl sonuçlanır?",
        options: [
          { text: "Sonradan pişman olacağım aceleci kararlar olur.", category: "Kaos" },
          { text: "Eski sorunları çözmeme yarayan kararlar olur.", category: "Denge" },
          { text: "Çok yavaş ilerler ama sonunda sağlamlaşır.", category: "Sabır" },
          { text: "Fırsatları kazanca çevirdiğim stratejik adımlar olur.", category: "Simya" }
        ]
      },
      {
        question: "Zihninizi dinlendirmek için hangisini yaparsınız?",
        options: [
          { text: "Teknolojiden uzaklaşır, sessiz kalırım.", category: "Kaos" },
          { text: "Eski anıları, fotoğrafları veya günlükleri incelerim.", category: "Denge" },
          { text: "Planlarımı revize eder, sakince beklerim.", category: "Sabır" },
          { text: "Yeni planlar tasarlar, zihnimi projelerle meşgul ederim.", category: "Simya" }
        ]
      },
      {
        question: "Merkür Retrosu kelimesi size ne hissettiriyor?",
        options: [
          { text: "Kaygı, stres ve gerilim.", category: "Kaos" },
          { text: "Nostalji ve geçmişi temizleme fırsatı.", category: "Denge" },
          { text: "Yavaşlama ve dinlenme zorunluluğu.", category: "Sabır" },
          { text: "Abartılmış bir astrolojik bahane.", category: "Simya" }
        ]
      }
    ],
    results: {
      "Kaos": { icon: "🌀", title: "Retro Etkisi: Zihinsel Kaos", subtitle: "Aşırı Etkilenen", desc: "<p>Retrolardan en çok etkilenen gruptasınız. İletişim kazaları ve teknolojik sorunlar sizi yoruyor. Retro dönemlerinde önemli kararlar almaktan kaçının ve yavaşlayın.</p>" },
      "Denge": { icon: "⚖️", title: "Retro Etkisi: Nostalji ve Denge", subtitle: "Geçmişi Temizleyen", desc: "<p>Retrolar sizin için geçmişle hesaplaşma dönemidir. Eski dostlarla bağ kurmak ve yarım kalan işleri tamamlamak için mükemmel bir zamandır.</p>" },
      "Sabır": { icon: "🐢", title: "Retro Etkisi: Rutin Sıkışması", subtitle: "Sabır Sınavı", desc: "<p>Retrolar hayatınızı yavaşlatıyor. Sabretmeyi ve akışa teslim olmayı öğrenmeniz gerekiyor. Planlarınız aksasa da durup dinlenmek size iyi gelecektir.</p>" },
      "Simya": { icon: "⚗️", title: "Retro Etkisi: Fırsat Simyası", subtitle: "Dengede ve Etkilenmeyen", desc: "<p>Retrolar sizi etkileyemiyor. Soğukkanlı kalıp aksilikleri avantaja çevirmeyi biliyorsunuz. Zihinsel gücünüz çok yüksek.</p>" }
    }
  },
  karmic: {
    title: "Karmik Borç Testi",
    category: "Ruhsal & Karma",
    icon: "🌀",
    description: "Geçmiş yaşamlarınızdan getirdiğiniz karmik sınavınızı keşfedin.",
    questions: [
      {
        question: "Hayatınızda tekrar eden en belirgin sınav hangisidir?",
        options: [
          { text: "Acele edip yanlış kararlar almak ve pişman olmak.", category: "Sabır" },
          { text: "Başkalarına aşırı bağımlı olup kendi özgürlüğümü kaybetmek.", category: "Özgürlük" },
          { text: "Duygularımı ve fikirlerimi doğru zamanda ifade edememek.", category: "İfade" },
          { text: "İnsanlara güvenememek ve sürekli şüphe etmek.", category: "Güven" }
        ]
      },
      {
        question: "İlişkilerde sizi en çok ne yaralar?",
        options: [
          { text: "Partnerimin beni bekletmesi veya yavaşlığı.", category: "Sabır" },
          { text: "Beni kısıtlaması ve alanımı daraltması.", category: "Özgürlük" },
          { text: "Beni dinlememesi veya sözümü kesmesi.", category: "İfade" },
          { text: "Yalan söylenmesi ve arkamdan iş çevrilmesi.", category: "Güven" }
        ]
      },
      {
        question: "Bir hata yaptığınızda kendinizi nasıl savunursunuz?",
        options: [
          { text: "'Çok hızlı karar verdim, sabırsızlığıma geldi' derim.", category: "Sabır" },
          { text: "'Başkalarını memnun etmeye çalışıyordum' derim.", category: "Özgürlük" },
          { text: "'Kendimi doğru anlatamadım' derim.", category: "İfade" },
          { text: "'Güvenliğimi korumaya çalışıyordum' derim.", category: "Güven" }
        ]
      },
      {
        question: "Aşmanız gereken en büyük zaafınız hangisidir?",
        options: [
          { text: "Öfke patlamaları ve acelecilik.", category: "Sabır" },
          { text: "Hayır diyememek ve bağımlılık.", category: "Özgürlük" },
          { text: "Suskunluk veya kırıcı konuşmalar.", category: "İfade" },
          { text: "Aşırı kontrolcülük ve kıskançlık.", category: "Güven" }
        ]
      },
      {
        question: "Size göre ruhsal gelişim ne demektir?",
        options: [
          { text: "Zamanın ritmine uyum sağlayıp sabretmek.", category: "Sabır" },
          { text: "Kendi ayakları üzerinde durup bağımsız olmak.", category: "Özgürlük" },
          { text: "Kendi hakikatini dürüstçe dünyaya haykırmak.", category: "İfade" },
          { text: "Korkusuzca kalbini açıp güvenebilmek.", category: "Güven" }
        ]
      }
    ],
    results: {
      "Sabır": { icon: "⏳", title: "Karmik Borç: Sabır Sınavı", subtitle: "Aceleciliği Aşmak", desc: "<p>Geçmiş yaşamınızdan sabırsızlık borcu getirmişsiniz. Bu yaşamda işlerin yavaş ilerlemesi sizin sınavınızdır. Sakinleşmeyi öğrenmelisiniz.</p>" },
      "Özgürlük": { icon: "🔓", title: "Karmik Borç: Özgürlük Sınavı", subtitle: "Bağımlılıktan Özgürleşmek", desc: "<p>Geçmiş yaşamınızda ilişkilerde kendinizi feda etmişsiniz. Bu yaşamda kendi sınırlarınızı çizmeyi ve bağımsız olmayı öğrenmelisiniz.</p>" },
      "İfade": { icon: "📣", title: "Karmik Borç: İfade Sınavı", subtitle: "Hakikatini Konuşmak", desc: "<p>Geçmiş yaşamınızda susturulmuş veya kendinizi gizlemişsiniz. Bu yaşamda Boğaz çakranızı açarak dürüstçe kendi sesinizi bulmalısınız.</p>" },
      "Güven": { icon: "🔑", title: "Karmik Borç: Güven Sınavı", subtitle: "Kalbini Açmak", desc: "<p>Geçmiş yaşamınızda ihanete uğramış olabilirsiniz. Bu yaşamda aşırı şüpheyi aşarak insanlara sağlıklı sınırlar içinde güvenmeyi öğrenmelisiniz.</p>" }
    }
  },
  shadow: {
    title: "Kozmik Gölge Yön Testi",
    category: "Karakter",
    icon: "👤",
    description: "Bilinçaltınızda saklanan ve sizi engelleyen gölge yönünüzü keşfedin.",
    questions: [
      {
        question: "Başka insanlarda sizi en çok ne rahatsız eder?",
        options: [
          { text: "Aşırı gururlu olmaları ve sürekli böbürlenmeleri.", category: "Kibir" },
          { text: "Sorumluluk almaktan kaçıp kurban rolü oynamaları.", category: "Kaçış" },
          { text: "Hırslı, acımasız ve sadece başarı odaklı olmaları.", category: "Hırs" },
          { text: "Fevri, saldırgan ve kaba davranmaları.", category: "Öfke" }
        ]
      },
      {
        question: "Zor durumda kaldığınızda bilinçaltınız hangi savunmayı yapar?",
        options: [
          { text: "İnsanlardan üstün olduğumu düşünüp mesafelenirim.", category: "Kibir" },
          { text: "Hayallere dalar veya ortamdan uzaklaşırım (kaçarım).", category: "Kaçış" },
          { text: "Daha çok çalışarak ve kendimi yıpratarak başarıya odaklanırım.", category: "Hırs" },
          { text: "Öfkelenir, savunmaya geçerim.", category: "Öfke" }
        ]
      },
      {
        question: "Kendinizde en çok hangi duyguyu gizlemeye çalışırsınız?",
        options: [
          { text: "Yetersizlik hissimi ve sıradan görünme korkumu.", category: "Kibir" },
          { text: "Gerçek hayatın getirdiği sorumluluklardan korktuğumu.", category: "Kaçış" },
          { text: "Zayıf ve başarısız görünme endişemi.", category: "Hırs" },
          { text: "İçimdeki kontrolsüz öfkeyi.", category: "Öfke" }
        ]
      },
      {
        question: "İlişkilerinizde partneriniz size en çok hangi eleştiriyi yapar?",
        options: [
          { text: "Fazla gururlu veya inatçı olduğumu.", category: "Kibir" },
          { text: "Gerçeklerden kaçtığımı ve net olmadığımı.", category: "Kaçış" },
          { text: "Çok işkolik veya mesafeli olduğumu.", category: "Hırs" },
          { text: "Çabuk öfkelenip kırıcı davrandığımı.", category: "Öfke" }
        ]
      },
      {
        question: "Bilinçaltınızı en iyi hangi karanlık sembol temsil eder?",
        options: [
          { text: "Altın tahtta oturan yalnız bir kral/kraliçe.", category: "Kibir" },
          { text: "Ucu bucaksız, sisli bir deniz.", category: "Kaçış" },
          { text: "Tırmanılması imkansız, buzlu bir dağ.", category: "Hırs" },
          { text: "Aktif bir volkan.", category: "Öfke" }
        ]
      }
    ],
    results: {
      "Kibir": { icon: "🦁", title: "Gölge Yönünüz: Kibir (Ego)", subtitle: "Sıradanlık Korkusu", desc: "<p>Sizin gölgeniz Aslan etkisindeki egodur. Sıradan görünmekten korktuğunuz için kibre kapılabilirsiniz. Alçakgönüllülüğü öğrenmelisiniz.</p>" },
      "Kaçış": { icon: "🐟", title: "Gölge Yönünüz: Kaçış (Melankoli)", subtitle: "Gerçeklerden Kaçma", desc: "<p>Sizin gölgeniz Balık etkisindeki kaçıştır. Sorumluluklardan ve zor gerçeklerden hayal dünyasına sığınarak kaçıyorsunuz. Topraklanmalısınız.</p>" },
      "Hırs": { icon: "🐐", title: "Gölge Yönünüz: Aşırı Hırs (Katılık)", subtitle: "Zayıflık Korkusu", desc: "<p>Sizin gölgeniz Oğlak etkisindeki başarı hırsıdır. Duygularınızı bastırıyor, sürekli çalışıyorsunuz. Kalbinizi gevşetmeye izin verin.</p>" },
      "Öfke": { icon: "🐏", title: "Gölge Yönünüz: Yıkıcı Öfke", subtitle: "Sabırsızlık ve Saldırganlık", desc: "<p>Sizin gölgeniz Koç etkisindeki öfkedir. Dürtüsel tepkiler vererek ilişkilerinizi yakıp yıkabilirsiniz. Öfke kontrolü çalışmalısınız.</p>" }
    }
  },
  money: {
    title: "Bolluk Bilinci Testi",
    category: "Ruhsal & Karma",
    icon: "💰",
    description: "Finansal potansiyelinizi ve bolluk enerjinizle olan bağınızı analiz edin.",
    questions: [
      {
        question: "Banka hesabınızdaki para azaldığında ne hissedersiniz?",
        options: [
          { text: "Derin bir kaygı ve hemen kısıtlama ihtiyacı.", category: "Kıtlık" },
          { text: "Huzursuz olurum ama yeni para kazanma yolları düşünürüm.", category: "Denge" },
          { text: "Akışa güvenirim, para nasılsa geri gelir.", category: "Bolluk" },
          { text: "Garantili yatırımlarımı kontrol eder, sakin kalırım.", category: "Garantici" }
        ]
      },
      {
        question: "Lüks bir harcama yaptığınızda suçluluk duyar mısınız?",
        options: [
          { text: "Evet, her zaman kendimi suçlu hissederim.", category: "Kıtlık" },
          { text: "Bazen, ama bütçem dahilindeyse kendimi ödüllendiririm.", category: "Denge" },
          { text: "Asla, kendime değer verdiğim için mutlu olurum.", category: "Bolluk" },
          { text: "Sadece geleceğe yönelik faydalı bir yatırımsa yaparım.", category: "Garantici" }
        ]
      },
      {
        question: "Finansal riskler almak size ne hissettirir?",
        options: [
          { text: "Korku ve panik.", category: "Kıtlık" },
          { text: "Heyecan, ama temkinli adımlar atarım.", category: "Denge" },
          { text: "Büyük fırsatlar ve cesaret.", category: "Bolluk" },
          { text: "Mantıksızlık; riskten her zaman kaçınırım.", category: "Garantici" }
        ]
      },
      {
        question: "Zenginlik kavramı sizin için neyi çağrıştırır?",
        options: [
          { text: "Zorlukla kazanılan ve hemen kaybedilebilecek bir şeyi.", category: "Kıtlık" },
          { text: "Çalışmanın ve dengenin getirdiği konforu.", category: "Denge" },
          { text: "Evrensel bolluğun ve özgürlüğün akışını.", category: "Bolluk" },
          { text: "Geleceğimi güvenceye alan sarsılmaz bir kaleyi.", category: "Garantici" }
        ]
      },
      {
        question: "Sevdiklerinize para harcarken nasıl davranırsınız?",
        options: [
          { text: "Hesaplı ve oldukça temkinli davranırım.", category: "Kıtlık" },
          { text: "Dengeli harcarım, bütçemi aşmam.", category: "Denge" },
          { text: "Çok cömert davranırım, harcamaktan çekinmem.", category: "Bolluk" },
          { text: "Gerekli ve somut ihtiyaçları için harcarım.", category: "Garantici" }
        ]
      }
    ],
    results: {
      "Kıtlık": { icon: "📉", title: "Bolluk Bilinci: Kıtlık Korkusu", subtitle: "Kaygılı Yaklaşım", desc: "<p>Kıtlık bilinci geliştirmişsiniz. Para kaybetme korkusu bolluk akışını tıkıyor. Evrene ve kendinize güvenmeyi öğrenmelisiniz.</p>" },
      "Denge": { icon: "⚖️", title: "Bolluk Bilinci: Finansal Denge", subtitle: "Mantıklı Yönetim", desc: "<p>Finansal bilinciniz dengede. Gelir-gider dengesini iyi kuruyor, ne savurganlık yapıyor ne de kıtlık korkusu çekiyorsunuz.</p>" },
      "Bolluk": { icon: "📈", title: "Bolluk Bilinci: Milyoner Zihni", subtitle: "Bolluk Akışı", desc: "<p>Bolluk bilinciniz en üst seviyede. Paranın bir enerji olduğuna ve aktığına inanıyorsunuz. Çekim gücünüz çok yüksek.</p>" },
      "Garantici": { icon: "🏰", title: "Bolluk Bilinci: Garanti Kalesi", subtitle: "Tasarruf Ustası", desc: "<p>Siz paranızı somut güvenceler (emlak, altın) altında tutarak kendinizi koruyorsunuz. Maddi dünyada yıkılmazsınız.</p>" }
    }
  },
  intuition: {
    title: "Sezgi Gücü Testi",
    category: "Ruhsal & Karma",
    icon: "👁️",
    description: "İç sesinizin ve ruhsal sezgilerinizin ne seviyede olduğunu ölçün.",
    questions: [
      {
        question: "Yeni bir ortama girdiğinizde ilk neyi hissedersiniz?",
        options: [
          { text: "Ortamın havasını, insanların sakladığı gizli enerjileri.", category: "Medyum" },
          { text: "İnsanların üzüntü veya neşesini anında kendi bedenimde hissederim.", category: "Empat" },
          { text: "Mantıklı detayları, mimikleri ve düzeni incelerim.", category: "Rasyonel" },
          { text: "Genel ortamı süzer, sıradan bir gözlem yaparım.", category: "Baslangic" }
        ]
      },
      {
        question: "Gördüğünüz rüyalar genellikle nasıl sonuçlanır?",
        options: [
          { text: "Gelecekte aynen çıkan haberci rüyalar olur.", category: "Medyum" },
          { text: "Duygusal olarak beni çok etkileyen sembolik rüyalar olur.", category: "Empat" },
          { text: "Günlük hayattaki olayların yansıması olur.", category: "Rasyonel" },
          { text: "Rüyalarımı genellikle hatırlamam.", category: "Baslangic" }
        ]
      },
      {
        question: "Telefonunuz çaldığında kimin aradığını önceden tahmin eder misiniz?",
        options: [
          { text: "Evet, çok sık olur ve arayanı hissederim.", category: "Medyum" },
          { text: "Bazen, özellikle çok yakın olduğum insanlarda olur.", category: "Empat" },
          { text: "Nadiren, tesadüf olduğunu düşünürüm.", category: "Rasyonel" },
          { text: "Hemen hemen hiç olmaz.", category: "Baslangic" }
        ]
      },
      {
        question: "İçinizden gelen o ani hisse (önsezi) ne kadar güvenirsiniz?",
        options: [
          { text: "Gözü kapalı güvenirim, beni hiç yanıltmaz.", category: "Medyum" },
          { text: "Güvenirim ama mantığımla da test etmek isterim.", category: "Empat" },
          { text: "Sadece somut kanıtlarla uyuşuyorsa önemserim.", category: "Rasyonel" },
          { text: "Pek önemsemem, rastlantısal bakarım.", category: "Baslangic" }
        ]
      },
      {
        question: "Ruhsal veya mistik konulara olan ilginiz nedir?",
        options: [
          { text: "Hayatımın merkezindedir, sürekli araştırır hissederim.", category: "Medyum" },
          { text: "Severim, beni duygusal olarak besler.", category: "Empat" },
          { text: "Bilimsel ve felsefi olarak merak ederim.", category: "Rasyonel" },
          { text: "Pek ilgimi çekmez.", category: "Baslangic" }
        ]
      }
    ],
    results: {
      "Medyum": { icon: "🔮", title: "Sezgi Seviyeniz: Medyum", subtitle: "Durugörü ve Önsezi", desc: "<p>Sezgileriniz en üst seviyede. Olayları ve insanların niyetlerini önceden seziyor, haberci rüyalar görüyorsunuz. İç sesinize güvenin.</p>" },
      "Empat": { icon: "🌊", title: "Sezgi Seviyeniz: Empat", subtitle: "Duygusal Alıcı", desc: "<p>Siz adeta bir enerji süngerisiniz. İnsanların hislerini kendi hisleriniz gibi yaşıyorsunuz. Kendinizi korumak için sınırlar çizmeyi öğrenmelisiniz.</p>" },
      "Rasyonel": { icon: "📐", title: "Sezgi Seviyeniz: Rasyonel Sezgi", subtitle: "Analitik Algı", desc: "<p>Sezgilerinizi mantığınızla birleştiriyorsunuz. Bir şeyi hissetmek yetmez, kanıt ararsınız. İş hayatında bu analiz gücü büyük avantaj sağlar.</p>" },
      "Baslangic": { icon: "🌱", title: "Sezgi Seviyeniz: Başlangıç", subtitle: "Uykuda Olan Güç", desc: "<p>Sezgi gücünüz henüz tam uyanmamış. Zihnin gürültüsünü susturarak, meditasyon yaparak iç sesinizi daha net duymaya başlayabilirsiniz.</p>" }
    }
  },
  moon: {
    title: "Doğum Ay Fazı Testi",
    category: "Karakter",
    icon: "🌑",
    description: "Doğduğunuz andaki Ay'ın enerjisine göre karakter analiziniz.",
    questions: [
      {
        question: "Kendinizi en üretken hissettiğiniz dönem hangisidir?",
        options: [
          { text: "Yepyeni kararlar alıp işe başladığım ilk günler.", category: "YeniAy" },
          { text: "Planlarımı geliştirip büyüttüğüm aşamalar.", category: "Buyuyen" },
          { text: "İşlerimi tamamlayıp ortaya serdiğim gururlu anlar.", category: "Dolunay" },
          { text: "İçe çekilip analiz yaptığım, dinlendiğim dönemler.", category: "Kuculen" }
        ]
      },
      {
        question: "Hayata karşı yaklaşımınız nasıldır?",
        options: [
          { text: "Öncü, hevesli, sürekli yeni başlangıçlar arayan.", category: "YeniAy" },
          { text: "Kararlı, sabırlı ve büyümek isteyen.", category: "Buyuyen" },
          { text: "Farkındalığı yüksek, ilişkilerde denge arayan.", category: "Dolunay" },
          { text: "Bilge, sakin ve ruhsal derinliğe odaklanan.", category: "Kuculen" }
        ]
      },
      {
        question: "İlişkilerde neyi ararsınız?",
        options: [
          { text: "Heyecan, yenilik ve çocuksu coşku.", category: "YeniAy" },
          { text: "Gelişim, ortak hedefler ve büyüme.", category: "Buyuyen" },
          { text: "Derin bir ayna etkisi, tutku ve netlik.", category: "Dolunay" },
          { text: "Manevi birliktelik, sessiz anlaşma ve olgunluk.", category: "Kuculen" }
        ]
      },
      {
        question: "Bir hata yaptığınızda tavrınız ne olur?",
        options: [
          { text: "Hemen unutur, yepyeni bir sayfaya başlarım.", category: "YeniAy" },
          { text: "Hatadan ders çıkarır, daha çok çalışırım.", category: "Buyuyen" },
          { text: "Hatayı analiz eder, kendimle yüzleşirim.", category: "Dolunay" },
          { text: "Bunun kaderin bir parçası olduğunu kabul edip içime dönerim.", category: "Kuculen" }
        ]
      },
      {
        question: "Zaman kavramı sizin için neyi ifade eder?",
        options: [
          { text: "Sürekli akan yeni fırsatlar nehrini.", category: "YeniAy" },
          { text: "Adım adım tırmanılması gereken bir merdiveni.", category: "Buyuyen" },
          { text: "Tamamlanma ve hasat zamanını.", category: "Dolunay" },
          { text: "Ruhsal olarak olgunlaşma döngüsünü.", category: "Kuculen" }
        ]
      }
    ],
    results: {
      "YeniAy": { icon: "🌑", title: "Doğum Ay Fazınız: Yeni Ay", subtitle: "Öncü ve Taze Başlangıçlar", desc: "<p>Yeni Ay enerjisiyle doğmuşsunuz. Hayata karşı çocuksu bir hevesiniz var. Sürekli yeni projeler başlatır, geçmişi kolayca geride bırakırsınız.</p>" },
      "Buyuyen": { icon: "🌒", title: "Doğum Ay Fazınız: Büyüyen Ay", subtitle: "Gelişim ve Azim", desc: "<p>Büyüyen Ay enerjisi taşıyorsunuz. Başladığınız işleri büyütmek, sabırla çalışmak ve somut sonuçlar elde etmek sizin doğanızda var.</p>" },
      "Dolunay": { icon: "🌕", title: "Doğum Ay Fazınız: Dolunay", subtitle: "Farkındalık ve Parlama", desc: "<p>Dolunay fazında doğmuşsunuz. Karizmatik, farkındalığı yüksek ve ilişkilerde derin yüzleşmeler yaşayan birisiniz. Sahneye aitsiniz.</p>" },
      "Kuculen": { icon: "🌘", title: "Doğum Ay Fazınız: Küçülen Ay", subtitle: "Bilgelik ve Bırakma", desc: "<p>Küçülen Ay (Balsamik) enerjisi taşıyorsunuz. Ruhunuz yaşlı ve bilgedir. Maddi dünyadan ziyade ruhsal derinlikle ilgilenirsiniz.</p>" }
    }
  },
  animal: {
    title: "Astroloji Ruh Hayvanı Testi",
    category: "Karakter",
    icon: "🦁",
    description: "Zodyak enerjinize en yakın ruh hayvanınızı keşfedin.",
    questions: [
      {
        question: "Toplum içinde kendinizi nasıl konumlandırırsınız?",
        options: [
          { text: "Bağımsız, sürüsünü koruyan ama özgür bir lider.", category: "Kurt" },
          { text: "Merkezde duran, gücünü gösteren karizmatik lider.", category: "Aslan" },
          { text: "Her şeyi yukarıdan gözlemleyen, vizyoner ve mesafeli.", category: "Kartal" },
          { text: "Uyumlu, şakacı ve insanları iyileştiren sosyal biri.", category: "Yunus" }
        ]
      },
      {
        question: "En büyük hedefiniz hangisidir?",
        options: [
          { text: "Kendi özgür alanımı ve ailemi korumak.", category: "Kurt" },
          { text: "Zirveye ulaşmak, yönetmek ve iz bırakmak.", category: "Aslan" },
          { text: "Yüksek vizyonlara ulaşmak, sınırları aşmak.", category: "Kartal" },
          { text: "Sevgi alışverişinde bulunmak, ruhları iyileştirmek.", category: "Yunus" }
        ]
      },
      {
        question: "Korkularınızı nasıl yenersiniz?",
        options: [
          { text: "İç sesimi dinleyip sabırla strateji kurarak.", category: "Kurt" },
          { text: "Korkunun üzerine cesaretle giderek.", category: "Aslan" },
          { text: "Sorunu yukarıdan analiz edip mantık geliştirerek.", category: "Kartal" },
          { text: "Sevgiden ve dostlarımdan güç alarak.", category: "Yunus" }
        ]
      },
      {
        question: "Size göre en asil davranış hangisidir?",
        options: [
          { text: "Sadakat ve koruyuculuk.", category: "Kurt" },
          { text: "Cesaret ve cömertlik.", category: "Aslan" },
          { text: "Özgürlük ve vizyon.", category: "Kartal" },
          { text: "Empati ve şefkat.", category: "Yunus" }
        ]
      },
      {
        question: "Hangi doğa parçasında yaşamak isterdiniz?",
        options: [
          { text: "Karlı dağlar ve sessiz ormanlar.", category: "Kurt" },
          { text: "Güneşli, sıcak savanalar.", category: "Aslan" },
          { text: "Rüzgarlı yüksek uçurumlar, gökyüzü.", category: "Kartal" },
          { text: "Ucu bucaksız, ılık okyanuslar.", category: "Yunus" }
        ]
      }
    ],
    results: {
      "Kurt": { icon: "🐺", title: "Ruh Hayvanınız: Kurt", subtitle: "Sadakat ve Bağımsızlık", desc: "<p>Ruhunuz bir kurdun enerjisini taşıyor. Sadık, ailesini koruyan ancak kendi bağımsızlığına da son derece düşkün bir karaktere sahipsiniz.</p>" },
      "Aslan": { icon: "🦁", title: "Ruh Hayvanınız: Aslan", subtitle: "Cesaret ve Karizma", desc: "<p>Ruhunuz bir aslanla rezonansa sahip. Güçlü, cesur, gururlu ve etrafına doğal bir liderlik sergileyen birisiniz.</p>" },
      "Kartal": { icon: "🦅", title: "Ruh Hayvanınız: Kartal", subtitle: "Vizyon ve Yüksek Zeka", desc: "<p>Ruhunuz kartal enerjisi taşıyor. Olaylara yukarıdan bakar, büyük resmi görür ve hedeflerinize kimseye bağımlı olmadan uçarsınız.</p>" },
      "Yunus": { icon: "🐬", title: "Ruh Hayvanınız: Yunus", subtitle: "Şifa, Sevgi ve Empati", desc: "<p>Ruhunuz bir yunusla bağ kuruyor. Empati yeteneğiniz çok yüksek, şifacı, şakacı ve sosyal olarak çok sevilen birisiniz.</p>" }
    }
  },
  school: {
    title: "Astroloji Ekolü Testi",
    category: "Ruhsal & Karma",
    icon: "🏫",
    description: "Kozmik algınıza en uygun astroloji ekolünü keşfedin.",
    questions: [
      {
        question: "Astroloji çalışırken en çok hangi soruya yanıt ararsınız?",
        options: [
          { text: "Gelecekte somut olarak ne olacak?", category: "Klasik" },
          { text: "Karakterimi ve potansiyellerimi nasıl geliştiririm?", category: "Psikolojik" },
          { text: "Bu yaşamdaki ruhsal sınavım ve geçmiş yaşam borcum nedir?", category: "Karma" },
          { text: "Matematiksel formüllerle kesin olay zamanlarını nasıl bulurum?", category: "Uranyen" }
        ]
      },
      {
        question: "Size göre doğum haritası nedir?",
        options: [
          { text: "Kaderimizi ve yaşam yolumuzu gösteren kesin bir kılavuz.", category: "Klasik" },
          { text: "Bilinçaltımızın ve psikolojimizin göksel haritası.", category: "Psikolojik" },
          { text: "Ruhumuzun reenkarnasyon yolculuğunun karnesi.", category: "Karma" },
          { text: "Gezegenlerin matematiksel formüllerle konuşan koordinat düzlemi.", category: "Uranyen" }
        ]
      },
      {
        question: "Gelecek öngörüleri hakkında ne düşünüyorsunuz?",
        options: [
          { text: "Kader bellidir, önemli dönemeçler kesinlikle yaşanacaktır.", category: "Klasik" },
          { text: "Kader karakterimizdir, karakterimizi değiştirirsek kaderimiz değişir.", category: "Psikolojik" },
          { text: "Ektiğimizi biçeriz; geçmiş karma geleceğimizi şekillendirir.", category: "Karma" },
          { text: "Matematiksel formüller tam olay saatini hesaplamada hata yapmaz.", category: "Uranyen" }
        ]
      },
      {
        question: "Astrolojide en çok hangi gezegeni önemsersiniz?",
        options: [
          { text: "Satürn ve Jüpiter (Kaderin sınırları ve şansı).", category: "Klasik" },
          { text: "Güneş ve Ay (Bilinç ve bilinçaltı).", category: "Psikolojik" },
          { text: "Ay Düğümleri ve Plüton (Ruhsal sınavlar ve dönüşüm).", category: "Karma" },
          { text: "Uranüs ve Transneptünyen gezegenler (Sıra dışı noktalar).", category: "Uranyen" }
        ]
      },
      {
        question: "Sizi en çok hangi kelime motive eder?",
        options: [
          { text: "Gelenek ve kurallar.", category: "Klasik" },
          { text: "Farkındalık ve büyüme.", category: "Psikolojik" },
          { text: "Ruhsal arınma ve karma.", category: "Karma" },
          { text: "Formül ve kesinlik.", category: "Uranyen" }
        ]
      }
    ],
    results: {
      "Klasik": { icon: "📜", title: "Ekolünüz: Klasik Astroloji", subtitle: "Geleneksel ve Kaderci Dil", desc: "<p>Kozmik algınız Klasik Astroloji ekolüyle uyumlu. Geleneksel kurallara, somut öngörülere ve Satürn sınırlarına saygı duyuyorsunuz.</p>" },
      "Psikolojik": { icon: "🧠", title: "Ekolünüz: Psikolojik Astroloji", subtitle: "Karakter ve Öz-Farkındalık", desc: "<p>Kozmik algınız Psikolojik Astroloji ile uyumlu. Haritayı kaderci değil, potansiyelleri geliştiren psikolojik bir analiz aracı olarak görüyorsunuz.</p>" },
      "Karma": { icon: "🌀", title: "Ekolünüz: Karma Astroloji", subtitle: "Ruhsal Simya ve Tekamül", desc: "<p>Kozmik algınız Karma Astrolojiyle rezonans kuruyor. Hayata ruhun tekamül yolculuğu olarak bakıyor, düğümleri çözmek istiyorsunuz.</p>" },
      "Uranyen": { icon: "📐", title: "Ekolünüz: Uranyen Astroloji", subtitle: "Matematiksel ve Teknik Formüller", desc: "<p>Kozmik algınız Uranyen Astrolojiye uygun. Astroitler, orta noktalar ve matematiksel kesinliklerle çalışmayı seviyorsunuz.</p>" }
    }
  },
  house: {
    title: "Baskın Ev Testi",
    category: "Karakter",
    icon: "🏠",
    description: "Doğum haritanızda yaşamın hangi sahnesinin (evinin) daha baskın olduğunu bulun.",
    questions: [
      {
        question: "Zamanınızın çoğunu hangisine harcamayı seversiniz?",
        options: [
          { text: "Kendimi geliştirmeye, spora veya kişisel bakıma.", category: "Ev1" },
          { text: "Evimde dinlenmeye, ailemle vakit geçirmeye.", category: "Ev4" },
          { text: "Partnerimle olmaya veya sosyal ortaklıklar kurmaya.", category: "Ev7" },
          { text: "Kariyer hedeflerime ve işimde zirveye tırmanmaya.", category: "Ev10" }
        ]
      },
      {
        question: "Sizi en çok ne mutlu eder?",
        options: [
          { text: "Kendi kararlarımı özgürce uygulayabilmek.", category: "Ev1" },
          { text: "Huzurlu, güvenli ve köklü bir aile yaşamı.", category: "Ev4" },
          { text: "Sevildiğimi hissettiğim dengeli bir evlilik/ilişki.", category: "Ev7" },
          { text: "İşimde takdir edilmek ve yüksek bir toplumsal statü.", category: "Ev10" }
        ]
      },
      {
        question: "Bir kriz anında nereye sığınırsınız?",
        options: [
          { text: "Kendi gücüme güvenir, tek başıma savaşırım.", category: "Ev1" },
          { text: "Yuvama, ailemin yanına ve köklerime çekilirim.", category: "Ev4" },
          { text: "Partnerimle veya en yakın dostumla konuşurum.", category: "Ev7" },
          { text: "Daha çok çalışarak kendimi işime veririm.", category: "Ev10" }
        ]
      },
      {
        question: "Gelecek hayallerinizde hangisi baş köşededir?",
        options: [
          { text: "Kendimi tamamen gerçekleştirmiş olmak.", category: "Ev1" },
          { text: "Kendi evimi, yuvamı ve ailemi kurmuş olmak.", category: "Ev4" },
          { text: "Ruh eşimi bulup uyumlu bir ortaklık kurmak.", category: "Ev7" },
          { text: "Topluma yön veren prestijli bir lider olmak.", category: "Ev10" }
        ]
      },
      {
        question: "Size göre başarmak ne demektir?",
        options: [
          { text: "Kendi potansiyelimi zirveye çıkarmak.", category: "Ev1" },
          { text: "Köklerime sahip çıkıp huzuru bulmak.", category: "Ev4" },
          { text: "İlişkilerimde sevgiyi ve dengeyi yakalamak.", category: "Ev7" },
          { text: "Kariyer basamaklarını tırmanıp saygınlık kazanmak.", category: "Ev10" }
        ]
      }
    ],
    results: {
      "Ev1": { icon: "👤", title: "Baskın Yaşam Alanınız: 1. Ev", subtitle: "Benlik ve Başlangıçlar", desc: "<p>Doğum haritanızda 1. ev (Yükselen) vurgusu yüksek. Kendi kimliğinizi geliştirmek, bireysel bağımsızlığınız sizin can damarınızdır.</p>" },
      "Ev4": { icon: "🏠", title: "Baskın Yaşam Alanınız: 4. Ev", subtitle: "Yuva, Kökler ve Aile", desc: "<p>Doğum haritanızda 4. ev (İmum Coeli) vurgusu yüksek. Aileniz, eviniz, geçmiş kökleriniz ve bilinçaltı huzurunuz hayattaki önceliğinizdir.</p>" },
      "Ev7": { icon: "🤝", title: "Baskın Yaşam Alanınız: 7. Ev", subtitle: "İlişkiler ve Ortaklıklar", desc: "<p>Doğum haritanızda 7. ev (Descendant) vurgusu yüksek. Hayatı ikili ilişkiler, ortaklıklar ve evlilik aynasında deneyimliyorsunuz.</p>" },
      "Ev10": { icon: "🏆", title: "Baskın Yaşam Alanınız: 10. Ev", subtitle: "Kariyer ve Toplumsal Statü", desc: "<p>Doğum haritanızda 10. ev (Medium Coeli) vurgusu yüksek. Mesleki başarılarınız, itibarınız ve toplumsal liderliğiniz sizin zirvenizdir.</p>" }
    }
  },
  rising: {
    title: "Yükselen Maskesi Testi",
    category: "Karakter",
    icon: "🎭",
    description: "Yükselen burcunuzun dünyaya yansıttığı sosyal maskeyi analiz edin.",
    questions: [
      {
        question: "Yabancı bir ortama girdiğinizde takındığınız ilk maske nasıldır?",
        options: [
          { text: "Cesur, enerjik, hemen dikkat çeken ve heyecanlı.", category: "Ates" },
          { text: "Ağırbaşlı, sakin, güven veren ve temkinli.", category: "Toprak" },
          { text: "Güler yüzlü, konuşkan, meraklı ve sosyal.", category: "Hava" },
          { text: "Hassas, korumacı, sezgisel ve biraz mesafeli.", category: "Su" }
        ]
      },
      {
        question: "İnsanların sizin hakkınızdaki ilk izlenimi genellikle ne olur?",
        options: [
          { text: "Çok karizmatik, rekabetçi ve cesur olduğum.", category: "Ates" },
          { text: "Çok güvenilir, pratik zekalı ve sağlam durduğum.", category: "Toprak" },
          { text: "Çok sempatik, zeki ve entelektüel olduğum.", category: "Hava" },
          { text: "Çok şefkatli, gizemli ve hisli olduğum.", category: "Su" }
        ]
      },
      {
        question: "Fiziksel giyim tarzınızda neye dikkat edersiniz?",
        options: [
          { text: "Dikkat çekici, canlı renkler ve spor tarz.", category: "Ates" },
          { text: "Kaliteli, sade, klasik ve rahat kıyafetler.", category: "Toprak" },
          { text: "Sıra dışı, entelektüel ve renkli aksesuarlar.", category: "Hava" },
          { text: "Yumuşak kumaşlar, pastel tonlar ve deniz esintileri.", category: "Su" }
        ]
      },
      {
        question: "Bir tehlike anında vücudunuzun verdiği ilk tepki nedir?",
        options: [
          { text: "Adrenalin yükselmesi ve hemen eyleme geçmek.", category: "Ates" },
          { text: "Durup durumu analiz etmek, soğukkanlı kalmak.", category: "Toprak" },
          { text: "Hemen çevreyle iletişime geçip konuşmak/plan kurmak.", category: "Hava" },
          { text: "İçgüdüsel olarak kendimi ve sevdiklerimi koruma altına almak.", category: "Su" }
        ]
      },
      {
        question: "Sizin için ilk izlenimde hangisi en önemlidir?",
        options: [
          { text: "İrademi ve gücümü yansıtmak.", category: "Ates" },
          { text: "Güven ve saygınlık uyandırmak.", category: "Toprak" },
          { text: "Zihinsel bağ kurmak ve sempatik olmak.", category: "Hava" },
          { text: "Empati ve duygusal güvenlik hissi vermek.", category: "Su" }
        ]
      }
    ],
    results: {
      "Ates": { icon: "🔥", title: "Yükselen Maskeniz: Karizmatik Öncü", subtitle: "Ateş Elementi Maskesi", desc: "<p>Dış dünyaya yansıttığınız maske Koç, Aslan veya Yay özellikleri taşıyor. Cesur, lider, enerjik ve sabırsız görünüyorsunuz.</p>" },
      "Toprak": { icon: "🌱", title: "Yükselen Maskeniz: Güvenilir Liman", subtitle: "Toprak Elementi Maskesi", desc: "<p>Dış dünyaya yansıttığınız maske Boğa, Başak veya Oğlak özellikleri taşıyor. Sakin, kaliteli, gerçekçi ve ağırbaşlı duruyorsunuz.</p>" },
      "Hava": { icon: "💨", title: "Yükselen Maskeniz: Sosyal İletişimci", subtitle: "Hava Elementi Maskesi", desc: "<p>Dış dünyaya yansıttığınız maske İkizler, Terazi veya Kova özellikleri taşıyor. Sempatik, konuşkan, zeki ve entelektüel görünüyorsunuz.</p>" },
      "Su": { icon: "💧", title: "Yükselen Maskeniz: Duygusal Şifacı", subtitle: "Su Elementi Maskesi", desc: "<p>Dış dünyaya yansıttığınız maske Yengeç, Akrep veya Balık özellikleri taşıyor. Sezgisel, gizemli, şefkatli ve korumacı duruyorsunuz.</p>" }
    }
  },
  node: {
    title: "Kuzey Ay Düğümü Testi",
    category: "Ruhsal & Karma",
    icon: "🌓",
    description: "Kuzey Ay Düğümünüzün (KAD) size fısıldadığı ruhsal tekamül yolunu keşfedin.",
    questions: [
      {
        question: "Hayatta sizi en çok hangi davranış konfor alanınızda tutar?",
        options: [
          { text: "İlişkilerde uyumlu kalmak, çatışmadan kaçmak.", category: "Koc" },
          { text: "Krizlerle beslenmek, sürekli kaos yaratmak.", category: "Boğa" },
          { text: "İnançlara körü körüne sarılmak, büyük teoriler üretmek.", category: "İkizler" },
          { text: "İşkolik olmak, duyguları bastırmak ve başarı hırsı.", category: "Yengec" }
        ]
      },
      {
        question: "Ruhunuzun bu yaşamda öğrenmesi gereken en zor ders hangisidir?",
        options: [
          { text: "Bireysel cesaret göstermek ve tek başıma savaşabilmek.", category: "Koc" },
          { text: "Sakinleşmek, huzur bulmak ve parayı üretmek.", category: "Boğa" },
          { text: "Detayları dinlemek, pratik iletişim kurmak.", category: "İkizler" },
          { text: "Şefkat göstermek, ailemi beslemek ve hislerimi açmak.", category: "Yengec" }
        ]
      },
      {
        question: "Çevrenizdekiler size en çok hangi konuda destek olmanızı önerir?",
        options: [
          { text: "Daha kararlı ve net adımlar atmam konusunda.", category: "Koc" },
          { text: "Krizleri büyütmemem ve sakin kalmam konusunda.", category: "Boğa" },
          { text: "İnsanları dinlemem ve önyargısız olmam konusunda.", category: "İkizler" },
          { text: "Çalışmaya ara verip duygusal dünyama zaman ayırmam konusunda.", category: "Yengec" }
        ]
      },
      {
        question: "Hangi arketip sizin gelecekteki kahraman versiyonunuzu temsil eder?",
        options: [
          { text: "En önde savaşan cesur kahraman.", category: "Koc" },
          { text: "Doğada huzurla üreten bahçıvan/üretici.", category: "Boğa" },
          { text: "Çevresiyle bilgi paylaşan bilge öğretmen.", category: "İkizler" },
          { text: "Ailesini ve sevdiklerini koruyan şefkatli anne/baba.", category: "Yengec" }
        ]
      },
      {
        question: "Size göre hayat yolculuğu neyi amaçlar?",
        options: [
          { text: "Kendi irademi dürüstçe dünyaya göstermeyi.", category: "Koc" },
          { text: "Huzurlu, güvende ve konforlu kalarak üretmeyi.", category: "Boğa" },
          { text: "Merakla öğrenmeyi ve köprüler kurmayı.", category: "İkizler" },
          { text: "Koşulsuz sevmeyi ve aidiyet hissini bulmayı.", category: "Yengec" }
        ]
      }
    ],
    results: {
      "Koc": { icon: "🐏", title: "Yolunuz: Kuzey Ay Düğümü Koç", subtitle: "Cesaret ve Bireysellik Yolu", desc: "<p>Karmik yolunuz Koç yönündedir. Sürekli başkalarını memnun etmeye çalışmaktan (Güney Düğüm Terazi) sıyrılıp, kendi cesaretinizi göstermeyi öğrenmelisiniz.</p>" },
      "Boğa": { icon: "🐂", title: "Yolunuz: Kuzey Ay Düğümü Boğa", subtitle: "Huzur ve Üretim Yolu", desc: "<p>Karmik yolunuz Boğa yönündedir. Sürekli kriz, şüphe ve kaosla (Güney Düğüm Akrep) beslenmekten vazgeçip, sakinlik ve maddi/manevi huzur inşa etmelisiniz.</p>" },
      "İkizler": { icon: "♊", title: "Yolunuz: Kuzey Ay Düğümü İkizler", subtitle: "İletişim ve Merak Yolu", desc: "<p>Karmik yolunuz İkizler yönündedir. Dogmatik inançlardan, her şeyi bilme fanatizminden (Güney Düğüm Yay) sıyrılıp, insanları dinlemeyi ve öğrenmeyi seçmelisiniz.</p>" },
      "Yengec": { icon: "♋", title: "Yolunuz: Kuzey Ay Düğümü Yengeç", subtitle: "Şefkat ve Yuva Yolu", desc: "<p>Karmik yolunuz Yengeç yönündedir. Aşırı işkoliklik, statü hırsı ve duygusal katılıktan (Güney Düğüm Oğlak) sıyrılıp, kalbinizi açmayı ve sevdiklerinizi beslemeyi öğrenmelisiniz.</p>" }
    }
  },
  age: {
    title: "Ruh Yaşı Testi",
    category: "Karakter",
    icon: "⏳",
    description: "Ruhunuzun kozmik tekamül döngüsündeki yaşını ve olgunluğunu öğrenin.",
    questions: [
      {
        question: "Hayattaki sorumluluklar hakkında ne düşünüyorsunuz?",
        options: [
          { text: "Sorumluluklar eğlenceli olmalı, hayatı fazla ciddiye alamıyorum.", category: "Cocuk" },
          { text: "Merak ettiğim konuları öğrenmek sorumluluklarımdan daha önemli.", category: "Genç" },
          { text: "Bütün kuralları bilir, sorumluluklarımı disiplinle yerine getiririm.", category: "Olgun" },
          { text: "Hayatın geçici bir oyun olduğunu biliyorum, her şeye yukarıdan bakarım.", category: "Kadim" }
        ]
      },
      {
        question: "Boş zamanlarınızda sizi en çok ne dinlendirir?",
        options: [
          { text: "Oyun oynamak, gülmek ve çocuksu aktiviteler.", category: "Cocuk" },
          { text: "Seyahat etmek, yeni şeyler araştırmak.", category: "Genç" },
          { text: "Evimde düzen kurmak, geleceğimi planlamak.", category: "Olgun" },
          { text: "Doğada sessizce oturmak, meditasyon yapmak.", category: "Kadim" }
        ]
      },
      {
        question: "İnsan ilişkilerinde en büyük gücünüz nedir?",
        options: [
          { text: "İçtenliğim, coşkum ve önyargısız yapım.", category: "Cocuk" },
          { text: "Konuşkanlığım, zekam ve entelektüel merakım.", category: "Genç" },
          { text: "Güvenilirliğim, ciddiyetim ve sadakatim.", category: "Olgun" },
          { text: "Sakinliğim, yargısız dinleme gücüm ve bilgeliğim.", category: "Kadim" }
        ]
      },
      {
        question: "Gelecek planları yaparken motivasyonunuz nedir?",
        options: [
          { text: "Hayallerimi gerçekleştirmek ve heyecan yaşamak.", category: "Cocuk" },
          { text: "Yeni dünyalar keşfetmek ve sürekli öğrenmek.", category: "Genç" },
          { text: "Garantili ve prestijli bir statü kurmak.", category: "Olgun" },
          { text: "Ruhsal olarak özgürleşmek.", category: "Kadim" }
        ]
      },
      {
        question: "Ölüm ve yaşam döngüleri size neyi hissettiriyor?",
        options: [
          { text: "Bu konular bana ürkütücü geliyor, düşünmek istemem.", category: "Cocuk" },
          { text: "Felsefi olarak merak ediyor, araştırıyorum.", category: "Genç" },
          { text: "Doğal bir kural olduğunu biliyorum, hayatı ciddiyetle yaşıyorum.", category: "Olgun" },
          { text: "Çok tanıdık bir döngü, ruhun sonsuz yolculuğuna inanıyorum.", category: "Kadim" }
        ]
      }
    ],
    results: {
      "Cocuk": { icon: "🎈", title: "Ruh Yaşınız: Kozmik Çocuk", subtitle: "Neşeli ve Saf Enerji", desc: "<p>Ruhunuz çok taze ve oyunbaz. Hayata çocuksu bir coşkuyla yaklaşıyor, anı yaşıyorsunuz. İçinizdeki neşeyi hiç kaybetmeyin.</p>" },
      "Genç": { icon: "🚲", title: "Ruh Yaşınız: Genç Ruh", subtitle: "Meraklı Kaşif", desc: "<p>Ruhunuz öğrenme açlığıyla dolu bir kaşif. Gezmek, okumak, felsefe üretmek sizin can damarınızdır. Dünyayı merakla keşfediyorsunuz.</p>" },
      "Olgun": { icon: "💼", title: "Ruh Yaşınız: Olgun Ruh", subtitle: "Sorumluluk ve Yapı", desc: "<p>Ruhunuz olgun ve sorumluluk sahibidir. Hayatı ciddiye alıyor, kurallara uyuyor ve kalıcı yapılar inşa ediyorsunuz. Güvenilirsiniz.</p>" },
      "Kadim": { icon: "🧘", title: "Ruh Yaşınız: Kadim Ruh", subtitle: "Bilgelik ve Bütünlük", desc: "<p>Ruhunuz tekamülünü tamamlamak üzere olan kadim bir bilge. Dünyevi hırslar ilginizi çekmiyor; sadece huzur ve ruhsal birlik arıyorsunuz.</p>" }
    }
  },
  guide: {
    title: "Ruhsal Rehber Testi",
    category: "Ruhsal & Karma",
    icon: "👼",
    description: "Sizi görünmez dünyada koruyan ruhsal rehber arketipinizi bulun.",
    questions: [
      {
        question: "İçiniz daraldığında size en çok hangisi güç verir?",
        options: [
          { text: "Yukarıdan izlendiğimi ve korunduğumu hissetmek.", category: "Melek" },
          { text: "Okuduğum kadim bilgileri ve felsefeleri düşünmek.", category: "Ustat" },
          { text: "Doğaya çıkıp ağaçlara, toprağa dokunmak.", category: "Doga" },
          { text: "Atalarımın, aile büyüklerimin gücünü arkamda hissetmek.", category: "Atalar" }
        ]
      },
      {
        question: "Sezgileriniz size nasıl ulaşır?",
        options: [
          { text: "Ani rüyalar, sayılar veya sembolik işaretlerle.", category: "Melek" },
          { text: "Zihnimde aniden beliren derin mantıklı fikirlerle.", category: "Ustat" },
          { text: "Fiziksel hislerle; iç ürpermesi veya koku alarak.", category: "Doga" },
          { text: "İçimden gelen çok tanıdık, bilge bir sesle.", category: "Atalar" }
        ]
      },
      {
        question: "Size göre şifa nerede saklıdır?",
        options: [
          { text: "Dua etmekte, ilahi teslimiyette ve inançta.", category: "Melek" },
          { text: "Zihinsel aydınlanmada ve meditasyonda.", category: "Ustat" },
          { text: "Toprakta, bitkilerde ve doğal kristallerde.", category: "Doga" },
          { text: "Köklerimize sahip çıkmakta ve aile bağlarında.", category: "Atalar" }
        ]
      },
      {
        question: "En çok hangi kutsal alana çekilirsiniz?",
        options: [
          { text: "Gökyüzüne açık, ışıkla dolu mabetlere.", category: "Melek" },
          { text: "Sessiz kütüphanelere ve antik okullara.", category: "Ustat" },
          { text: "Derin ormanlara, mağaralara ve şelalelere.", category: "Doga" },
          { text: "Köy evlerine, ocak başına ve eski ocaklara.", category: "Atalar" }
        ]
      },
      {
        question: "Rehberinizin size vermesini istediğiniz en büyük hediye hangisidir?",
        options: [
          { text: "Sonsuz koruma ve güvence.", category: "Melek" },
          { text: "Kozmik sırlar ve bilgelik.", category: "Ustat" },
          { text: "Beden sağlığı ve yaşamsal enerji.", category: "Doga" },
          { text: "Köklülük, soy gücü ve gelenek.", category: "Atalar" }
        ]
      }
    ],
    results: {
      "Melek": { icon: "👼", title: "Rehberiniz: Koruyucu Melek", subtitle: "Işık ve Koruma Rehberi", desc: "<p>Sizi koruyan güç bir melek enerjisidir. Hayatın zor anlarında tüyler, sayılar (111, 444) veya sembollerle size korunduğunuzu hatırlatır.</p>" },
      "Ustat": { icon: "🧙", title: "Rehberiniz: Yükselmiş Üstat", subtitle: "Bilgelik ve Bilgi Rehberi", desc: "<p>Sizin rehberiniz ruhsal bir öğretmendir. Zihinsel aydınlanmalar, kitaplar ve derin felsefi düşünceler yoluyla size yol gösterir.</p>" },
      "Doga": { icon: "🧝", title: "Rehberiniz: Doğa Ruhu (Elementaller)", subtitle: "Toprak ve Şifa Rehberi", desc: "<p>Sizin rehberiniz doğanın enerjileridir. Toprakla, bitkilerle ve hayvanlarla bağ kurduğunuzda sezgileriniz en üst seviyeye çıkar.</p>" },
      "Atalar": { icon: "🌳", title: "Rehberiniz: Atalar (Soy Enerjisi)", subtitle: "Kök ve Gelenek Rehberi", desc: "<p>Sizin rehberiniz soyunuzdan gelen bilge atalarınızdır. Geleneklerinize, aile köklerinize sahip çıktığınızda onların gücünü arkanızda hissedersiniz.</p>" }
    }
  },
  crystal: {
    title: "Tılsımlı Taş Testi",
    category: "Ruhsal & Karma",
    icon: "💎",
    description: "Kozmik frekansınızı en iyi dengeleyen tılsımlı kristalinizi bulun.",
    questions: [
      {
        question: "Şu anda en çok neye ihtiyaç duyuyorsunuz?",
        options: [
          { text: "Ruhsal arınmaya, zihin sakinliğine ve uyku düzenine.", category: "Ametist" },
          { text: "Yüksek yaşam enerjisine, netliğe ve güce.", category: "Kuvars" },
          { text: "Bolluk bilincine, neşeye ve şansa.", category: "Sitrin" },
          { text: "Negatif enerjilerden korunmaya ve topraklanmaya.", category: "Hematit" }
        ]
      },
      {
        question: "Hangi doğal taşın dokusu sizi daha çok çeker?",
        options: [
          { text: "Mor renkli, kristalize ve mistik.", category: "Ametist" },
          { text: "Şeffaf, parlak ve ışığı yansıtan.", category: "Kuvars" },
          { text: "Sarı/bal rengi, sıcak ve parıldayan.", category: "Sitrin" },
          { text: "Metalik gri, ağır ve ayna gibi yansıyan.", category: "Hematit" }
        ]
      },
      {
        question: "Zihinsel olarak kendinizi en çok nerede yorulmuş hissedersiniz?",
        options: [
          { text: "Uykusuzluk ve aşırı düşünmekten.", category: "Ametist" },
          { text: "Zihinsel dağınıklık ve kararsızlıktan.", category: "Kuvars" },
          { text: "Motivasyon eksikliği ve neşesizlikten.", category: "Sitrin" },
          { text: "Başkalarının negatif enerjilerini taşımaktan.", category: "Hematit" }
        ]
      },
      {
        question: "Kristalinizi nerede taşımak istersiniz?",
        options: [
          { text: "Baş ucumda, rüyalarımı koruması için.", category: "Ametist" },
          { text: "Boynumda kolye olarak, gücümü artırması için.", category: "Kuvars" },
          { text: "Cüzdanımda veya çalışma masamda, bolluk çekmesi için.", category: "Sitrin" },
          { text: "Cebimde veya bileğimde, topraklaması için.", category: "Hematit" }
        ]
      },
      {
        question: "Tılsım kelimesi sizce ne demektir?",
        options: [
          { text: "Ruhsal olarak evrenle bütünleşmek.", category: "Ametist" },
          { text: "İçsel gücü ve iradeyi yükseltmek.", category: "Kuvars" },
          { text: "Bolluk ve neşe enerjisini davet etmek.", category: "Sitrin" },
          { text: "Negatif etkileri geri yansıtmak.", category: "Hematit" }
        ]
      }
    ],
    results: {
      "Ametist": { icon: "🔮", title: "Tılsımınız: Ametist", subtitle: "Ruhsal Arınma ve Sezgi", desc: "<p>Kozmik taşınız Ametist'tir. Üçüncü gözünüzü açar, uykusuzluğu dengeler ve zihinsel aşırılıkları arındırır.</p>" },
      "Kuvars": { icon: "💎", title: "Tılsımınız: Şeffaf Kuvars", subtitle: "Güç, Enerji ve Netlik", desc: "<p>Kozmik taşınız Şeffaf Kuvars'tır. Zihninizi netleştirir, enerjinizi yükseltir ve diğer kristallerin gücünü artırır.</p>" },
      "Sitrin": { icon: "💛", title: "Tılsımınız: Sitrin", subtitle: "Bolluk, Bereket ve Neşe", desc: "<p>Kozmik taşınız Sitrin'dir. Bolluk bilincinizi uyarır, cüzdanınıza para çeker ve yaşama sevinci aşılar.</p>" },
      "Hematit": { icon: "🔗", title: "Tılsımınız: Hematit", subtitle: "Topraklanma ve Koruma", desc: "<p>Kozmik taşınız Hematit'tir. Sizi negatif enerjilere karşı korur, bedeninizi topraklayarak stresi azaltır.</p>" }
    }
  },
  destiny: {
    title: "Kader Sayısı Testi",
    category: "Ruhsal & Karma",
    icon: "🔢",
    description: "Ruhsal yolculuğunuzu yöneten numerolojik kader sayınızı ve anlamını bulun.",
    questions: [
      {
        question: "Bir toplulukta en belirgin rolünüz hangisidir?",
        options: [
          { text: "Kararları alan ve herkesi yönlendiren lider.", category: "Sayi1" },
          { text: "Yaratıcı fikirler sunan, sanatsal ve neşeli kişi.", category: "Sayi3" },
          { text: "Sessizce gözlemleyen, felsefi ve derin düşünen.", category: "Sayi7" },
          { text: "İşleri organize eden, maddi gücü yöneten lider.", category: "Sayi8" }
        ]
      },
      {
        question: "Sizi en çok hangi başarı tatmin eder?",
        options: [
          { text: "Sıfırdan yepyeni bir marka kurmak ve öncü olmak.", category: "Sayi1" },
          { text: "Bir sanat eseri üretmek ve alkışlanmak.", category: "Sayi3" },
          { text: "Hayatın ve evrenin gizemlerini çözüp bilgeleşmek.", category: "Sayi7" },
          { text: "Büyük bir şirketi yönetmek ve maddi güce ulaşmak.", category: "Sayi8" }
        ]
      },
      {
        question: "Hangi kelime sizin hayattaki pusulanızdır?",
        options: [
          { text: "Bağımsızlık.", category: "Sayi1" },
          { text: "Yaratıcılık.", category: "Sayi3" },
          { text: "Hakikat.", category: "Sayi7" },
          { text: "Organizasyon.", category: "Sayi8" }
        ]
      },
      {
        question: "Öğrenmek istediğiniz en büyük sır hangisidir?",
        options: [
          { text: "Kendi potansiyelimi nasıl sınırsızca kullanırım?", category: "Sayi1" },
          { text: "Sanatımla kitleleri nasıl etkilerim?", category: "Sayi3" },
          { text: "Yaşamın ve ölümün ruhsal anlamı nedir?", category: "Sayi7" },
          { text: "Büyük sermayeleri ve sistemleri nasıl yönetirim?", category: "Sayi8" }
        ]
      },
      {
        question: "Kriz anlarında zihniniz nasıl çalışır?",
        options: [
          { text: "Hemen inisiyatif alır, tek başıma karar veririm.", category: "Sayi1" },
          { text: "Mizah ve yaratıcı çözümler üretirim.", category: "Sayi3" },
          { text: "Sessizleşir, derinlemesine analiz yaparım.", category: "Sayi7" },
          { text: "Sistemi organize eder, görev dağılımı yaparım.", category: "Sayi8" }
        ]
      }
    ],
    results: {
      "Sayi1": { icon: "1️⃣", title: "Kader Sayınız: 1", subtitle: "Yaratıcı Lider ve Öncü", desc: "<p>Kader sayınız 1'dir. Sıfırdan işler başlatmak, liderlik etmek ve bağımsız yaşamak sizin temel kaderinizdir.</p>" },
      "Sayi3": { icon: "3️⃣", title: "Kader Sayınız: 3", subtitle: "Sanatçı ve İletişim Ustası", desc: "<p>Kader sayınız 3'tür. Kelimelerle, sanatla, müzikle kendinizi ifade etmek ve dünyaya neşe saçmak sizin yolunuzdur.</p>" },
      "Sayi7": { icon: "7️⃣", title: "Kader Sayınız: 7", subtitle: "Filozof ve Hakikat Arayıcısı", desc: "<p>Kader sayınız 7'dir. Analitik düşünmek, ruhsal gizemleri çözmek ve bilgelik yolunda ilerlemek sizin kaderinizdir.</p>" },
      "Sayi8": { icon: "8️⃣", title: "Kader Sayınız: 8", subtitle: "Yönetici ve Finansal Güç", desc: "<p>Kader sayınız 8'dir. Maddi dünyayı organize etmek, büyük şirketleri yönetmek ve finansal güç kazanmak sizin yolunuzdur.</p>" }
    }
  },
  elementUyum: {
    title: "Hangi Elementle Aşk Yaşamalısın?",
    category: "Aşk & İlişki",
    icon: "🔥",
    description: "Aşk hayatında en mutlu olacağın partnerin astrolojik elementini keşfet.",
    questions: [
      {
        question: "Bir ilişkide en çok hangi hissi ararsın?",
        options: [
          { text: "Heyecan, tutku ve macera.", category: "Ates" },
          { text: "Sarsılmaz güven ve huzur.", category: "Toprak" },
          { text: "Entelektüel sohbet ve zihinsel bağ.", category: "Hava" },
          { text: "Duygusal derinlik ve telepatik empati.", category: "Su" }
        ]
      },
      {
        question: "Partnerinle yapacağın en ideal tatil planı hangisi?",
        options: [
          { text: "Bilinmeyen bir şehre plansızca gitmek veya kamp yapmak.", category: "Ates" },
          { text: "Sakin, konforlu bir dağ otelinde doğayla baş başa kalmak.", category: "Toprak" },
          { text: "Kültür turları yapmak, müzeleri ve festivalleri gezmek.", category: "Hava" },
          { text: "Sakin bir deniz/göl kıyısında dinlenmek.", category: "Su" }
        ]
      },
      {
        question: "İlişkide bir sorun çıktığında nasıl davranılmasını istersin?",
        options: [
          { text: "Hemen, o anda açıkça konuşulup çözülmesini.", category: "Ates" },
          { text: "Mantıklı, somut adımlarla ve sakince yaklaşılmasını.", category: "Toprak" },
          { text: "Fikir alışverişi yapılarak, empatiyle analiz edilmesini.", category: "Hava" },
          { text: "Duygusal olarak birbirimizi sarmalayıp, içtenlikle sarılmayı.", category: "Su" }
        ]
      }
    ],
    results: {
      "Ates": { icon: "🔥", title: "Ruh Eşin: Ateş Elementi", subtitle: "Tutku, Macera ve Enerji", desc: "<p>Senin aşk enerjin Ateş elementindeki (Koç, Aslan, Yay) biriyle parlar. Hayatına heyecan katacak, seni kısıtlamayacak ve seninle birlikte cesurca koşacak bir partnere ihtiyacın var.</p>" },
      "Toprak": { icon: "🌱", title: "Ruh Eşin: Toprak Elementi", subtitle: "Güven, Sadakat ve İstikrar", desc: "<p>Senin aşk enerjin Toprak elementindeki (Boğa, Başak, Oğlak) biriyle dengelenir. İlişkide en çok güvence, sadakat ve pratik adımlar arıyorsun.</p>" },
      "Hava": { icon: "💨", title: "Ruh Eşin: Hava Elementi", subtitle: "Zeka, Özgürlük ve Sosyallik", desc: "<p>Senin aşk enerjin Hava elementindeki (İkizler, Terazi, Kova) biriyle uyumludur. İlişkide zihinsel uyarım, ortak merak ve bolca konuşabilmek senin için çok önemli.</p>" },
      "Su": { icon: "💧", title: "Ruh Eşin: Su Elementi", subtitle: "Duygusallık, Empati ve Şefkat", desc: "<p>Senin aşk enerjin Su elementindeki (Yengeç, Akrep, Balık) biriyle derinleşir. Kelimelere dökülmeyen duygusal bağları, şefkati ve ruhsal birleşmeyi arıyorsun.</p>" }
    }
  },
  zodiacAura: {
    title: "Hangi Burç Senin Aura İkizin?",
    category: "Karakter",
    icon: "💫",
    description: "Enerji alanının (Auranın) en çok hangi burcun titreşimiyle benzediğini bul.",
    questions: [
      {
        question: "Dışarıya yaydığın en belirgin enerji hangisidir?",
        options: [
          { text: "Cesaret, coşku ve neşeli bir dinamizm.", category: "KocAslanYay" },
          { text: "Güven, dinginlik ve sarsılmaz bir kararlılık.", category: "BoğaBaşakOglak" },
          { text: "Zeka, espri gücü ve hızlı adapte olabilme.", category: "İkizlerTeraziKova" },
          { text: "Sezgi, gizem ve insanı dinlendiren bir empati.", category: "YengecAkrepBalık" }
        ]
      },
      {
        question: "Bir ortamda ilgiyi nasıl çekersin?",
        options: [
          { text: "Kahkahalarımla, özgüvenimle ve enerjimle.", category: "KocAslanYay" },
          { text: "Sakin, kaliteli ve ağırbaşlı duruşumla.", category: "BoğaBaşakOglak" },
          { text: "Tatlı dilimle ve ilginç sohbetlerimle.", category: "İkizlerTeraziKova" },
          { text: "Gizemli bakışlarımla ve hislerimle.", category: "YengecAkrepBalık" }
        ]
      },
      {
        question: "Ruhsal frekansını en çok ne yükseltir?",
        options: [
          { text: "Yeni hedefler koymak ve başarmak.", category: "KocAslanYay" },
          { text: "Doğayla bağ kurmak ve huzurlu olmak.", category: "BoğaBaşakOglak" },
          { text: "Yeni şeyler öğrenmek ve okumak.", category: "İkizlerTeraziKova" },
          { text: "Ruhsal çalışmalar yapmak ve yalnız kalmak.", category: "YengecAkrepBalık" }
        ]
      }
    ],
    results: {
      "KocAslanYay": { icon: "🔥", title: "Aura İkizin: Ateş Burçları", subtitle: "Kozmik Işık ve Coşku", desc: "<p>Senin auran bir Ateş burcu (Koç, Aslan, Yay) gibi ışıldıyor. Çevrene ilham veriyor, cesaret aşılıyor ve yaşam enerjini yüksek tutuyorsun.</p>" },
      "BoğaBaşakOglak": { icon: "🟢", title: "Aura İkizin: Toprak Burçları", subtitle: "Kozmik Denge ve Köklenme", desc: "<p>Senin auran bir Toprak burcu (Boğa, Başak, Oğlak) gibi dengeli. İnsanlar senin yanındayken güvende hissediyor ve sakinleşiyor.</p>" },
      "İkizlerTeraziKova": { icon: "⚡", title: "Aura İkizin: Hava Burçları", subtitle: "Kozmik Zihin ve Fikirler", desc: "<p>Senin auran bir Hava burcu (İkizler, Terazi, Kova) frekansında titreşiyor. Bilgi akışı, zihinsel uyanış ve sosyal uyum senin auranda gizli.</p>" },
      "YengecAkrepBalık": { icon: "🔮", title: "Aura İkizin: Su Burçları", subtitle: "Kozmik Sezgi ve Şifa", desc: "<p>Senin auran bir Su burcu (Yengeç, Akrep, Balık) gibi mistik. İnsanların gizli hislerini hissedebiliyor ve onlara ruhsal şifa sunuyorsun.</p>" }
    }
  },
  venusLove: {
    title: "Venüs Aşk Stilini Keşfet",
    category: "Aşk & İlişki",
    icon: "♀️",
    description: "Doğum haritandaki Venüs'ün aşkı ve sevgiyi nasıl yaşadığını ölç.",
    questions: [
      {
        question: "Sana göre gerçek aşkın en büyük kanıtı nedir?",
        options: [
          { text: "Benim için yapılan cesur jestler ve mücadele.", category: "Koc" },
          { text: "Sarsılmaz bir sadakat ve maddi-manevi güvence.", category: "Boğa" },
          { text: "Birlikte saatlerce sıkılmadan konuşabilmek.", category: "İkizler" },
          { text: "Duygularımı koruyan şefkatli bir aile hissi.", category: "Yengec" }
        ]
      },
      {
        question: "Partnerinde ilk neye bakarsın?",
        options: [
          { text: "Özgüvenine, enerjisine ve dik duruşuna.", category: "Koc" },
          { text: "Giyim tarzına, kalitesine ve sakinliğine.", category: "Boğa" },
          { text: "Espri yeteneğine ve entelektüel birikimine.", category: "İkizler" },
          { text: "Gözlerindeki samimiyete ve empati yeteneğine.", category: "Yengec" }
        ]
      },
      {
        question: "İlişkide nasıl şımartılmak istersin?",
        options: [
          { text: "Benimle maceralara atılarak ve heyecanla.", category: "Koc" },
          { text: "Şık hediyelerle ve güzel sofralarla.", category: "Boğa" },
          { text: "Bana ilginç bilgiler vererek ve eğlendirerek.", category: "İkizler" },
          { text: "Sıcak bir sarılmayla ve evde romantik anlarla.", category: "Yengec" }
        ]
      }
    ],
    results: {
      "Koc": { icon: "♈", title: "Venüs Stiliniz: Ateşli Aşık", subtitle: "Heyecan ve Fetih", desc: "<p>Venüs aşk tarzınız heyecanlı, doğrudan ve tutkuludur. Kovalamayı, ilk adımı atmayı ve ilişkide rutine girmemeyi seversiniz.</p>" },
      "Boğa": { icon: "♉", title: "Venüs Stiliniz: Güvenilir Liman", subtitle: "Sadakat ve Duyusallık", desc: "<p>Venüs aşk tarzınız konfor, sadakat ve tensel uyuma dayanır. İlişkide yavaş, sağlam ve ömür boyu sürecek bağlar ararsınız.</p>" },
      "İkizler": { icon: "♊", title: "Venüs Stiliniz: Entelektüel Flört", subtitle: "Zihin ve Eğlence", desc: "<p>Venüs aşk tarzınız zihinsel uyarım ve iletişim odaklıdır. Partnerinizle her konuyu tartışabilmeli, birlikte gülebilmelisiniz.</p>" },
      "Yengec": { icon: "♋", title: "Venüs Stiliniz: Şefkatli Koruyucu", subtitle: "Ruhsal Yuva", desc: "<p>Venüs aşk tarzınız tam bir aile şefkati içerir. Partnerinizi beslemek, korumak ve onunla derin duygusal sığınaklar kurmak istersiniz.</p>" }
    }
  },
  marsPassion: {
    title: "Mars Enerjin Tutkunu Nasıl İfade Ediyor?",
    category: "Aşk & İlişki",
    icon: "♂️",
    description: "Harekete geçme biçimini, iradeni ve tutkunu yöneten Mars enerjini bul.",
    questions: [
      {
        question: "Bir şeyi elde etmek istediğinde stratejin ne olur?",
        options: [
          { text: "Hiç beklemeden, doğrudan ve cesurca hedefe koşarım.", category: "MarsAtes" },
          { text: "Sabırla bekler, plan yapar ve doğru anı kollarım.", category: "MarsToprak" },
          { text: "Kelimelerimi ve zekamı kullanarak insanları ikna ederim.", category: "MarsHava" },
          { text: "Sezgilerimi kullanır, duygusal olarak hedefe yaklaşırım.", category: "MarsSu" }
        ]
      },
      {
        question: "Öfkeni dışarıya nasıl yansıtırsın?",
        options: [
          { text: "Sertçe patlarım ama hemen geçer.", category: "MarsAtes" },
          { text: "Kolay kolay öfkelenmem ama sinirlenince duvar gibi olurum.", category: "MarsToprak" },
          { text: "Laf sokarım, kelimelerle can yakarım.", category: "MarsHava" },
          { text: "İçime atar, sessizce küser veya soğuk davranırım.", category: "MarsSu" }
        ]
      },
      {
        question: "Fiziksel enerjini en iyi ne yeniler?",
        options: [
          { text: "Adrenalin dolu sporlar ve rekabet.", category: "MarsAtes" },
          { text: "Doğada yürümek, bahçe işleri veya uyumak.", category: "MarsToprak" },
          { text: "Yeni projeler üzerine düşünmek ve yazmak.", category: "MarsHava" },
          { text: "Ilık bir banyo yapmak, müzik dinlemek.", category: "MarsSu" }
        ]
      }
    ],
    results: {
      "MarsAtes": { icon: "🔥", title: "Mars Enerjiniz: Dinamik Savaşçı", subtitle: "Saf Aksiyon ve İrade", desc: "<p>Mars'ınız Ateş elementinde. Kararlı, sabırsız ve engelleri yıkıp geçen bir eylem gücüne sahipsiniz. Mücadeleden kaçmazsınız.</p>" },
      "MarsToprak": { icon: "🟢", title: "Mars Enerjiniz: Dayanıklı İnşaatçı", subtitle: "Sabır ve Güç", desc: "<p>Mars'ınız Toprak elementinde. Hedeflerinize sabırla, adım adım tırmanıyorsunuz. Fiziksel dayanıklılığınız ve odaklanma gücünüz çok yüksek.</p>" },
      "MarsHava": { icon: "⚡", title: "Mars Enerjiniz: Zihinsel Stratejist", subtitle: "Fikirlerin Gücü", desc: "<p>Mars'ınız Hava elementinde. Enerjinizi kelimelerle, tartışmalarla ve fikir üreterek harcıyorsunuz. İkna kabiliyetiniz en büyük silahınızdır.</p>" },
      "MarsSu": { icon: "🔮", title: "Mars Enerjiniz: Sezgisel Simyacı", subtitle: "Duyguların Gücü", desc: "<p>Mars'ınız Su elementinde. Eylemleriniz sezgilerinizle yönlenir. Sessizce, derinden hareket eder ve krizleri hislerinizle çözersiniz.</p>" }
    }
  },
  toxicZodiac: {
    title: "Kaçınman Gereken Toksik Burç Hangisi?",
    category: "Aşk & İlişki",
    icon: "⚠️",
    description: "İlişkilerinde senin enerjini sömürecek, uzak durman gereken burç tipini öğren.",
    questions: [
      {
        question: "İlişkilerde en çok hangi davranış seni çileden çıkarır?",
        options: [
          { text: "Bencillik, kaba sabırsızlık ve sürekli emir verilmesi.", category: "KocGölgesi" },
          { text: "Kararsızlık, sürekli nabza göre şerbet verilmesi ve samimiyetsizlik.", category: "TeraziGölgesi" },
          { text: "İşkoliklik, aşırı soğukluk ve sadece başarı odaklılık.", category: "OglakGölgesi" },
          { text: "Aşırı kıskançlık, şüphecilik ve manipülasyon.", category: "AkrepGölgesi" }
        ]
      },
      {
        question: "Hangi insan tipi senin enerjini anında aşağı çeker?",
        options: [
          { text: "Sürekli tartışma çıkaran, kavgacı tipler.", category: "KocGölgesi" },
          { text: "Kendi fikri olmayan, sürekli başkalarına uyum sağlayanlar.", category: "TeraziGölgesi" },
          { text: "Duygusuz, sadece mantık ve kurallarla konuşanlar.", category: "OglakGölgesi" },
          { text: "Sır saklayan, arkadan iş çeviren gizemli tipler.", category: "AkrepGölgesi" }
        ]
      },
      {
        question: "Bir ilişkiden ayrılma sebebin en çok hangisi olur?",
        options: [
          { text: "Saygısızlık ve sürekli ego savaşı yapılması.", category: "KocGölgesi" },
          { text: "Net olamama, yalanlar ve yapmacıklık.", category: "TeraziGölgesi" },
          { text: "Duygusal ihmal ve yalnız bırakılmak.", category: "OglakGölgesi" },
          { text: "Özgürlüğümün kısıtlanması ve aşırı kontrol.", category: "AkrepGölgesi" }
        ]
      }
    ],
    results: {
      "KocGölgesi": { icon: "🐏", title: "Toksik Eşleşmen: Saldırgan Öncü", subtitle: "Koç/Aslan Gölgesi", desc: "<p>Senin kaçınman gereken tip, bencil ve sabırsız olan Ateş gölgesidir. Senin sınırlarına saygı duymayan, sürekli kendi egosuyla parlamak isteyen tipler enerjini sömürür.</p>" },
      "TeraziGölgesi": { icon: "⚖️", title: "Toksik Eşleşmen: Kararsız Uyumcu", subtitle: "Terazi/İkizler Gölgesi", desc: "<p>Senin kaçınman gereken tip, net kararlar alamayan ve arkanda duramayan kararsız Hava gölgesidir. Nabza göre şerbet veren yapmacık tavırlar seni yorar.</p>" },
      "OglakGölgesi": { icon: "🐐", title: "Toksik Eşleşmen: Katı Kurumsal", subtitle: "Oğlak/Başak Gölgesi", desc: "<p>Senin kaçınman gereken tip, aşırı eleştirel, duygusuz ve işkolik Toprak gölgesidir. Duygusal derinliği olmayan, seni kurallarla sınırlayan tipler ruhunu sıkar.</p>" },
      "AkrepGölgesi": { icon: "🦂", title: "Toksik Eşleşmen: Kontrolcü Manipülatör", subtitle: "Akrep/Yengeç Gölgesi", desc: "<p>Senin kaçınman gereken tip, aşırı sahiplenici, kıskanç ve manipülatif Su gölgesidir. Seni kontrol etmeye çalışan, şüpheci tiplerden uzak durmalısın.</p>" }
    }
  },
  rulerGifts: {
    title: "Haritanın Gezegensel Hediyesi Nedir?",
    category: "Karakter",
    icon: "🎁",
    description: "Evrenin sana doğum haritan aracılığıyla bahşettiği en büyük gizli yeteneği bul.",
    questions: [
      {
        question: "Zor bir durumdan kurtulurken en çok hangi yeteneğini kullanırsın?",
        options: [
          { text: "İkna kabiliyetimi ve zekamı.", category: "Merkur" },
          { text: "Zorluklar karşısındaki sabrımı ve disiplinimi.", category: "Saturn" },
          { text: "Her koşulda iyimser kalıp şans yaratabilmemi.", category: "Jupiter" },
          { text: "İnsanları sakinleştirme ve şifa verme gücümü.", category: "Neptun" }
        ]
      },
      {
        question: "Sana göre başarıyı getiren en büyük güç nedir?",
        options: [
          { text: "Sürekli öğrenmek ve doğru bilgiye ulaşmak.", category: "Merkur" },
          { text: "Yılmadan çalışmak, sorumluluk almak.", category: "Saturn" },
          { text: "Fırsatları görmek ve cesur olmak.", category: "Jupiter" },
          { text: "Hayal kurmak ve ilhamı takip etmek.", category: "Neptun" }
        ]
      },
      {
        question: "İnsanlar seni en çok hangi özelliğinle takdir eder?",
        options: [
          { text: "Pratik zekam ve konuşkanlığımla.", category: "Merkur" },
          { text: "Sözümün eri olmamla ve olgunluğumla.", category: "Saturn" },
          { text: "Pozitif enerjim ve cömertliğimle.", category: "Jupiter" },
          { text: "Sanatsal yeteneğim ve hassasiyetimle.", category: "Neptun" }
        ]
      }
    ],
    results: {
      "Merkur": { icon: "☿", title: "Gezegensel Hediyeniz: Merkür Zekası", subtitle: "Kelimelerin Simyası", desc: "<p>Evren size Merkür'ün kıvrak zekasını hediye etmiş. İletişim gücünüz, yazma/konuşma yeteneğiniz ve hızlı analiz kabiliyetiniz en büyük tılsımınızdır.</p>" },
      "Saturn": { icon: "♄", title: "Gezegensel Hediyeniz: Satürn Dayanıklılığı", subtitle: "Zamanın Ustalığı", desc: "<p>Evren size Satürn'ün sarsılmaz sabrını hediye etmiş. Zorluklar karşısında yılmazsınız, zamanla olgunlaşarak büyük başarılar elde edersiniz.</p>" },
      "Jupiter": { icon: "♃", title: "Gezegensel Hediyeniz: Jüpiter Şansı", subtitle: "Bolluk ve Vizyon", desc: "<p>Evren size Jüpiter'in korumasını ve şansını hediye etmiş. Hayata her zaman iyimser bakabilir, kapılar kapansa da yepyeni kapılar açabilirsiniz.</p>" },
      "Neptun": { icon: "♆", title: "Gezegensel Hediyeniz: Neptün İlhamı", subtitle: "Mistik Şifa ve Sanat", desc: "<p>Evren size Neptün'ün sınırsız hayal gücünü ve sezgilerini hediye etmiş. Sanatta, müzikte ve insanları ruhsal olarak iyileştirmede doğuştan yeteneklisiniz.</p>" }
    }
  },
  nodesDestiny: {
    title: "Ay Düğümlerine Göre Ruh Eşin Kim?",
    category: "Aşk & İlişki",
    icon: "🌓",
    description: "Karmik kader çizgine (Kuzey-Güney Düğümlerine) göre ruh eşinin özelliklerini bul.",
    questions: [
      {
        question: "İlişkilerinde seni en çok ne büyütür ve geliştirir?",
        options: [
          { text: "Beni cesaretlendiren, kendi ayaklarım üzerinde durmamı sağlayan biri.", category: "KADKoc" },
          { text: "Beni sakinleştiren, dünyevi huzuru ve sadakati hissettiren biri.", category: "KADBoğa" },
          { text: "Benimle sürekli sohbet eden, dünyayı merakla gezen biri.", category: "KADİkizler" },
          { text: "Bana kalbini tamamen açan, koruyan ve aile olan biri.", category: "KADYengec" }
        ]
      },
      {
        question: "Partnerinde asla tahammül edemeyeceğin şey hangisidir?",
        options: [
          { text: "Bensiz karar alamayan, aşırı bağımlı ve yapmacık olması.", category: "KADKoc" },
          { text: "Sürekli kriz çıkarması, kıskançlığı ve şüpheciliği.", category: "KADBoğa" },
          { text: "Dogmatik olması, fikirlerimi küçümsemesi.", category: "KADİkizler" },
          { text: "İşkolik olup beni duygusal olarak ihmal etmesi.", category: "KADYengec" }
        ]
      },
      {
        question: "İdeal bir beraberlik senin için ne ifade eder?",
        options: [
          { text: "İki güçlü bireyin ortak ve özgür yolculuğunu.", category: "KADKoc" },
          { text: "Güvenli, konforlu ve huzurlu bir yaşam inşasını.", category: "KADBoğa" },
          { text: "Sürekli konuşulan, öğrenilen neşeli bir arkadaşlığı.", category: "KADİkizler" },
          { text: "Sıcak bir yuva hissini ve duygusal şifayı.", category: "KADYengec" }
        ]
      }
    ],
    results: {
      "KADKoc": { icon: "♈", title: "Karmik Eşiniz: Cesur Savaşçı", subtitle: "Bireyselliği Destekleyen Eş", desc: "<p>Kaderiniz size kendi gücünüzü bulduracak, seni cesaretlendirecek ve liderlik potansiyelini ortaya çıkaracak bir partneri getirecektir.</p>" },
      "KADBoğa": { icon: "♉", title: "Karmik Eşiniz: Sadık Bahçıvan", subtitle: "Huzur ve Güven Veren Eş", desc: "<p>Kaderiniz size kaoslardan uzak, sadık, sabırlı ve hayatı güzelleştiren, maddi güvence sağlayan bir ruh eşi getirecektir.</p>" },
      "KADİkizler": { icon: "♊", title: "Karmik Eşiniz: Bilge Öğretmen/Arkadaş", subtitle: "Merak ve İletişim Ortağı", desc: "<p>Kaderiniz size zihnini açacak, seninle dünyayı gezecek, ön yargısız konuşup öğretecek neşeli bir yol arkadaşı fısıldıyor.</p>" },
      "KADYengec": { icon: "♋", title: "Karmik Eşiniz: Şefkatli Koruyucu", subtitle: "Duygusal Yuva Kurucu", desc: "<p>Kaderiniz size kariyer hırslarını unutturacak, kalbini yumuşatacak ve sana gerçek şefkati hissettirecek bir aile kurucu eş getirecektir.</p>" }
    }
  },
  lilithShadow: {
    title: "Karanlık Lilith Gölgen Aşkta Seni Nasıl Etkiler?",
    category: "Aşk & İlişki",
    icon: "🖤",
    description: "Doğum haritandaki Lilith (Karanlık Ay) enerjisine göre ilişkilerdeki gölge yönünü bul.",
    questions: [
      {
        question: "Aşkta en karanlık dürtün hangisidir?",
        options: [
          { text: "Partnerimi tamamen kontrol etme ve sahiplenme arzusu.", category: "Kontrol" },
          { text: "Reddedilme korkusuyla ilişkiden ilk benim kaçmam.", category: "Kacis" },
          { text: "Beni kısıtlamaya çalışan partnerime karşı yıkıcı asilik göstermek.", category: "Isyan" },
          { text: "İncindiğimde intikam almayı planlamak.", category: "Intikam" }
        ]
      },
      {
        question: "Partnerinle tartıştığında en sık verdiğin tepki nedir?",
        options: [
          { text: "Onu manipüle edecek duygusal oyunlar oynamak.", category: "Kontrol" },
          { text: "Sessizce duvar örüp iletişimi tamamen kesmek.", category: "Kacis" },
          { text: "Kuralları hiçe sayıp köprüleri anında yakmak.", category: "Isyan" },
          { text: "Zayıf noktasını bulup oradan vurmak.", category: "Intikam" }
        ]
      },
      {
        question: "İlişkilerdeki en büyük tabun hangisidir?",
        options: [
          { text: "Zayıf ve çaresiz görünmek.", category: "Kontrol" },
          { text: "Tamamen bağlanıp bağımsızlığımı kaybetmek.", category: "Kacis" },
          { text: "Bir başkasının kontrolü altına girmek.", category: "Isyan" },
          { text: "Haksızlığa uğrayıp sessiz kalmak.", category: "Intikam" }
        ]
      }
    ],
    results: {
      "Kontrol": { icon: "🦂", title: "Lilith Gölgeniz: Akrep/Plütonik Kontrol", subtitle: "Sahiplenme ve Kıskançlık", desc: "<p>Karanlık yönünüz ilişkilerde aşırı kontrol ve şüpheciliktir. Güvenmeyi öğrenmeli, partnerinizi özgür bırakabilmelisiniz.</p>" },
      "Kacis": { icon: "🌫️", title: "Lilith Gölgeniz: Değişken Kaçış", subtitle: "Bağlanma Korkusu", desc: "<p>Karanlık yönünüz derin bağ kurmaktan kaçmaktır. Kırılmaktan korktuğunuz için ilişkiler ciddileşince uzaklaşıyorsunuz.</p>" },
      "Isyan": { icon: "⚡", title: "Lilith Gölgeniz: Uranyen İsyan", subtitle: "Köprüleri Yakan Asilik", desc: "<p>Karanlık yönünüz sırf özgür olmak adına ilişkileri sabote etmektir. Uyum sağlamayı kısıtlanmak olarak görmekten vazgeçmelisiniz.</p>" },
      "Intikam": { icon: "🔥", title: "Lilith Gölgeniz: Karmik Hesaplaşma", subtitle: "İntikam ve Gurur", desc: "<p>Karanlık yönünüz incindiğinizde intikam alma arzusudur. Affetmeyi öğrenmeli, negatif enerjiyi serbest bırakmalısınız.</p>" }
    }
  },
  fortunePart: {
    title: "Şans Noktan Sana Nereden Para Getirecek?",
    category: "Ruhsal & Karma",
    icon: "💰",
    description: "Doğum haritandaki Pars Fortunae (Şans Noktası) konumunun zenginlik vaadini keşfet.",
    questions: [
      {
        question: "Kendinizi en üretken ve şanslı hissettiğiniz iş yapma biçimi hangisidir?",
        options: [
          { text: "Kendi projelerimi başlatıp cesurca risk aldığımda.", category: "AtesPara" },
          { text: "Toprakla, gayrimenkulle veya somut üretimlerle uğraştığımda.", category: "ToprakPara" },
          { text: "Yazı yazarken, konuşurken veya ticaret yaparken.", category: "HavaPara" },
          { text: "İlhamla, sanatla veya insanlara şifa verirken.", category: "SuPara" }
        ]
      },
      {
        question: "Paraya bakış açınız nasıldır?",
        options: [
          { text: "Hızlı kazanılmalı ve büyük yatırımlarla risk alınmalı.", category: "AtesPara" },
          { text: "Sabırla biriktirilmeli ve garantili yerlerde tutulmalı.", category: "ToprakPara" },
          { text: "Fikirlerimi ve ağımı büyütmek için bir araç olarak görülmeli.", category: "HavaPara" },
          { text: "İhtiyacı olanlara yardım etmek ve ruhsal konfor için kullanılmalı.", category: "SuPara" }
        ]
      },
      {
        question: "Hangi alanda çalışmak ruhunuzu doyurur?",
        options: [
          { text: "Girişimcilik, spor veya liderlik rollerinde.", category: "AtesPara" },
          { text: "Finans, tarım, mimarlık veya üretim sektörlerinde.", category: "ToprakPara" },
          { text: "Eğitim, yazılım, PR veya yayıncılıkta.", category: "HavaPara" },
          { text: "Psikoloji, tıp, müzik veya ruhsal şifacılıkta.", category: "SuPara" }
        ]
      }
    ],
    results: {
      "AtesPara": { icon: "🔥", title: "Şans Noktanız: Girişimcilik ve Cesaret", subtitle: "Öncü Kazançlar", desc: "<p>Şans noktanız Ateş evlerinde. Zenginliğiniz kendi işinizi kurmaktan, cesur yatırımlardan ve liderlik rollerinden gelecektir.</p>" },
      "ToprakPara": { icon: "🌱", title: "Şans Noktanız: Somut Değerler", subtitle: "Gayrimenkul ve Tarım", desc: "<p>Şans noktanız Toprak evlerinde. Zenginliğiniz arsa, konut yatırımları, bankacılık ve sabırlı birikimlerle gelecektir.</p>" },
      "HavaPara": { icon: "💨", title: "Şans Noktanız: Bilgi ve Ticaret", subtitle: "Zihinsel Sermaye", desc: "<p>Şans noktanız Hava evlerinde. Zenginliğiniz ticaret, yazılım, eğitim, danışmanlık ve geniş sosyal çevreniz sayesinde gelecektir.</p>" },
      "SuPara": { icon: "💧", title: "Şans Noktanız: İlham ve Şifacılık", subtitle: "Mistik Kazançlar", desc: "<p>Şans noktanız Su evlerinde. Zenginliğiniz psikoloji, tıp, sanat, müzik ve insanlara şifa veren ruhsal mesleklerden gelecektir.</p>" }
    }
  },
  elementCareer: {
    title: "Elementine Göre Gizli Yeteneğin Nedir?",
    category: "Karakter",
    icon: "💎",
    description: "Zodyak elementinin sana verdiği, iş ve kariyer hayatında fark yaratacak gücünü keşfet.",
    questions: [
      {
        question: "İş yerinde kriz çıktığında ilk yaptığın şey nedir?",
        options: [
          { text: "Hemen insiyatif alır, ekibi harekete geçiririm.", category: "AtesYet" },
          { text: "Sakinleşir, bütçeyi ve planı revize ederim.", category: "ToprakYet" },
          { text: "Herkesi toplar, beyin fırtınası başlatırım.", category: "HavaYet" },
          { text: "Çalışanların moralini düzeltir, motivasyon veririm.", category: "SuYet" }
        ]
      },
      {
        question: "Seni en çok ne tür projeler heyecanlandırır?",
        options: [
          { text: "Sıfırdan kurulan, vizyoner ve riskli projeler.", category: "AtesYet" },
          { text: "Net adımları olan, bütçesi sağlam işler.", category: "ToprakYet" },
          { text: "Yazım, çizim veya yoğun iletişim gerektiren projeler.", category: "HavaYet" },
          { text: "İnsanların hayatına dokunan şefkatli projeler.", category: "SuYet" }
        ]
      },
      {
        question: "Çalışma arkadaşların seni hangi kelimeyle tanımlar?",
        options: [
          { text: "Cesur ve İlham Veren.", category: "AtesYet" },
          { text: "Güvenilir ve Disiplinli.", category: "ToprakYet" },
          { text: "Zeki ve Konuşkan.", category: "HavaYet" },
          { text: "Empatik ve Şifacı.", category: "SuYet" }
        ]
      }
    ],
    results: {
      "AtesYet": { icon: "🚀", title: "Gizli Yeteneğiniz: Vizyoner Liderlik", subtitle: "Ateş Gücü", desc: "<p>İş hayatındaki en büyük gücünüz cesaretiniz ve ekibi motive etme yeteneğinizdir. Girişimcilikte ve kriz yönetiminde rakipsizsiniz.</p>" },
      "ToprakYet": { icon: "📈", title: "Gizli Yeteneğiniz: Pratik Organizasyon", subtitle: "Toprak Gücü", desc: "<p>İş hayatındaki en büyük gücünüz planlama ve bütçelemedir. Kaotik projeleri düzene sokmakta ve dayanıklılıkta zirvedesiniz.</p>" },
      "HavaYet": { icon: "💡", title: "Gizli Yeteneğiniz: Stratejik İletişim", subtitle: "Hava Gücü", desc: "<p>İş hayatındaki en büyük gücünüz ağ kurma ve pazarlamadır. Fikirleri satmakta, yazılımda ve eğitimde harikalar yaratırsınız.</p>" },
      "SuYet": { icon: "🌊", title: "Gizli Yeteneğiniz: Sezgisel Danışmanlık", subtitle: "Su Gücü", desc: "<p>İş hayatındaki en büyük gücünüz yüksek empati ve sezgidir. İnsan kaynaklarında, psikolojide ve şifa işlerinde çok başarılı olursunuz.</p>" }
    }
  },
  descendantPartner: {
    title: "Alçalan Burcuna Göre İdeal Eş Adayın Nasıl Biri?",
    category: "Aşk & İlişki",
    icon: "🤝",
    description: "Doğum haritandaki 7. ev (Descendant) çizgisine göre seni dengeleyecek partneri bul.",
    questions: [
      {
        question: "Kendinizde en çok hangi özelliğin eksik olduğunu hissedersiniz?",
        options: [
          { text: "Kararlılık ve cesaret.", category: "Koc7" },
          { text: "Huzur ve pratik düzen.", category: "Boğa7" },
          { text: "Sosyal iletişim ve neşe.", category: "İkizler7" },
          { text: "Şefkat ve duyguları açma cesareti.", category: "Yengec7" }
        ]
      },
      {
        question: "Eşinizde aradığınız en önemli dengeleyici unsur nedir?",
        options: [
          { text: "Beni eyleme geçirecek motivasyonu sağlaması.", category: "Koc7" },
          { text: "Beni maddi ve manevi olarak güvende tutması.", category: "Boğa7" },
          { text: "Zihnimi açması, benimle saatlerce konuşması.", category: "İkizler7" },
          { text: "Beni sarıp sarmalaması, aile sıcaklığı sunması.", category: "Yengec7" }
        ]
      },
      {
        question: "İlişkilerdeki en büyük zayıflığınız hangisidir?",
        options: [
          { text: "Çok kararsız olmak ve kendimi feda etmek.", category: "Koc7" },
          { text: "Sürekli kriz çıkarmak, şüphelenmek.", category: "Boğa7" },
          { text: "Fikirlerimde çok inatçı ve dogmatik olmak.", category: "İkizler7" },
          { text: "Çok işkolik olup hayatı kaçırmak.", category: "Yengec7" }
        ]
      }
    ],
    results: {
      "Koc7": { icon: "♈", title: "İdeal Eşiniz: Cesur ve Tutkulu", subtitle: "Alçalan Koç", desc: "<p>Sizi dengeleyecek partner cesur, doğrudan ve inisiyatif alan biri olmalıdır. Sizin kararsızlığınızı netlikle dengeleyecektir.</p>" },
      "Boğa7": { icon: "♉", title: "İdeal Eşiniz: Sadık ve Huzurlu", subtitle: "Alçalan Boğa", desc: "<p>Sizi dengeleyecek partner sadık, sakin ve maddi güvence sunan biri olmalıdır. Sizin içsel krizlerinizi huzurla yatıştıracaktır.</p>" },
      "İkizler7": { icon: "♊", title: "İdeal Eşiniz: Meraklı ve Entelektüel", subtitle: "Alçalan İkizler", desc: "<p>Sizi dengeleyecek partner konuşkan, zeki ve neşeli biri olmalıdır. Fikirlerinizi tazeleyecek ve zihninizi açacaktır.</p>" },
      "Yengec7": { icon: "♋", title: "İdeal Eşiniz: Şefkatli ve Aile Odaklı", subtitle: "Alçalan Yengeç", desc: "<p>Sizi dengeleyecek partner duygusal, korumacı ve sıcak biri olmalıdır. Sizin işkolik ve katı yapınızı yumuşatacaktır.</p>" }
    }
  },
  chironHealer: {
    title: "Şiron Yarana Göre En Büyük Şifa Gücün Nedir?",
    category: "Ruhsal & Karma",
    icon: "🩹",
    description: "Doğum haritandaki Şiron (Kuyruklu Yıldız) konumuna göre ruhsal şifa yeteneğini keşfet.",
    questions: [
      {
        question: "Çocukluğunuzdan beri hissettiğiniz en derin yara hangisidir?",
        options: [
          { text: "Kendimi yetersiz, başarısız ve güçsüz hissetmek.", category: "KocSiron" },
          { text: "Maddi olarak yetersiz kalma korkusu, değersizlik hissi.", category: "BoğaSiron" },
          { text: "Fikirlerimin dinlenmemesi, yanlış anlaşılmak.", category: "İkizlerSiron" },
          { text: "Bir yere ait olamama, sevilmeme korkusu.", category: "YengecSiron" }
        ]
      },
      {
        question: "Başkalarına en kolay hangi konuda yardım edersiniz?",
        options: [
          { text: "Onların özgüvenini ve cesaretini yükseltmede.", category: "KocSiron" },
          { text: "Maddi durumlarını organize etmede, özdeğer kazandırmada.", category: "BoğaSiron" },
          { text: "Kelimelerle şifa vermede, dertlerini dinleyip çözüm bulmada.", category: "İkizlerSiron" },
          { text: "Duygusal yaralarını sarmada, onlara aile gibi hissettirmede.", category: "YengecSiron" }
        ]
      },
      {
        question: "Şifa kelimesi sizin için neyi çağrıştırır?",
        options: [
          { text: "Kendini gerçekleştirip korkusuz olmak.", category: "KocSiron" },
          { text: "Kendi değerini bilip bolluğa açılmak.", category: "BoğaSiron" },
          { text: "Dürüstçe konuşup anlaşılabilmek.", category: "İkizlerSiron" },
          { text: "Koşulsuz sevilmek ve yuvada hissetmek.", category: "YengecSiron" }
        ]
      }
    ],
    results: {
      "KocSiron": { icon: "♈", title: "Şifa Gücünüz: Cesaret ve Kimlik", subtitle: "Kendini Gerçekleştirme Şifacısı", desc: "<p>Kendi yetersizlik yaranızı aşarak, insanlara cesaret aşılayan ve kendi kimliklerini bulmalarına yardım eden muhteşem bir şifacısınız.</p>" },
      "BoğaSiron": { icon: "♉", title: "Şifa Gücünüz: Özdeğer ve Bolluk", subtitle: "Maddi/Manevi Denge Şifacısı", desc: "<p>Kendi değersizlik yaranızı aşarak, insanlara özdeğer kazandıran ve maddi dünyada köklenmelerine yardım eden bir şifacısınız.</p>" },
      "İkizlerSiron": { icon: "♊", title: "Şifa Gücünüz: Kelimelerin Gücü", subtitle: "İletişim ve Zihin Şifacısı", desc: "<p>İletişim yaranızı aşarak, kelimelerinizle insanlara şifa dağıtan, onları dinleyip zihinlerini sakinleştiren bilge bir danışmansınız.</p>" },
      "YengecSiron": { icon: "♋", title: "Şifa Gücünüz: Koşulsuz Sevgi", subtitle: "Duygusal Yuva Şifacısı", desc: "<p>Ait olamama yaranızı aşarak, insanlara sıcak bir liman olan, onları şefkatle sarmalayıp kalplerini iyileştiren bir şifacısınız.</p>" }
    }
  },
  zodiacEnemy: {
    title: "Zodyaktaki Ezeli Düşmanın Hangi Burç?",
    category: "Aşk & İlişki",
    icon: "⚔️",
    description: "Karakter yapına en zıt, hayatta seni en çok zorlayacak burç tipini öğren.",
    questions: [
      {
        question: "Bir insanda asla katlanamayacağın özellik hangisidir?",
        options: [
          { text: "Aşırı inatçılık ve kuralcılık.", category: "KovaGölge" },
          { text: "Duygusuz, sadece mantık ve çıkarlarla hareket edilmesi.", category: "BalıkGölge" },
          { text: "Sürekli dikkat çekme hırsı ve gurur.", category: "AkrepGölge" },
          { text: "Sürekli kısıtlanmak ve detaylarda boğulmak.", category: "YayGölge" }
        ]
      },
      {
        question: "Hangi tartışma tarzı seni çileden çıkarır?",
        options: [
          { text: "Buz gibi mesafeli kalınarak hiç konuşulmaması.", category: "KovaGölge" },
          { text: "Aşırı mantıklı konuşulup hislerimin önemsenmemesi.", category: "BalıkGölge" },
          { text: "Böbürlenerek üste çıkılmaya çalışılması.", category: "AkrepGölge" },
          { text: "Sürekli hatalarımın yüzüme vurulup eleştirilmem.", category: "YayGölge" }
        ]
      },
      {
        question: "İş hayatında hangi ortak tipiyle asla çalışamazsın?",
        options: [
          { text: "Kuralları hiçe sayan, sürekli isyan eden biriyle.", category: "KovaGölge" },
          { text: "Çok katı, esneklikten yoksun ve duygusuz biriyle.", category: "BalıkGölge" },
          { text: "Sürekli kendini öven bencil biriyle.", category: "AkrepGölge" },
          { text: "Detayları hiç önemsemeyen dağınık biriyle.", category: "YayGölge" }
        ]
      }
    ],
    results: {
      "KovaGölge": { icon: "♒", title: "Ezeli Düşmanınız: Kova/Uranüs", subtitle: "Mesafe ve Asilik", desc: "<p>Sizin ezeli düşmanınız Kova burcudur. Onların duygusal mesafe koyan, sürekli kurallara karşı çıkan yapısı sizin düzeninizi ve duygusal beklentilerinizi yıpratır.</p>" },
      "BalıkGölge": { icon: "♓", title: "Ezeli Düşmanınız: Başak/Satürn", subtitle: "Katılık ve Mantık", desc: "<p>Sizin ezeli düşmanınız Başak veya Oğlak tipleridir. Onların aşırı detaycı, duygusuz ve pratik hesapları sizin hayal gücünüzü ve akışınızı engeller.</p>" },
      "AkrepGölge": { icon: "♌", title: "Ezeli Düşmanınız: Aslan/Güneş", subtitle: "Bencillik ve Gurur", desc: "<p>Sizin ezeli düşmanınız Aslan burcudur. Onların sürekli sahne ışığı arayan, bencil ve gururlu tavırları sizin derinlik ve sadakat arayışınızla çatışır.</p>" },
      "YayGölge": { icon: "♍", title: "Ezeli Düşmanınız: Başak/Merkür", subtitle: "Detaylar ve Eleştiri", desc: "<p>Sizin ezeli düşmanınız Başak burcudur. Onların sürekli kusur arayan, eleştirel ve kuralcı yapısı sizin özgürce büyük resmi görme arzunuzu kısıtlar.</p>" }
    }
  },
  astrologyCity: {
    title: "Hangi Antik Şehirde Yaşamalıydın?",
    category: "Ruhsal & Karma",
    icon: "🏛️",
    description: "Ruhsal frekansına ve burç elementine göre geçmişte hangi antik kentte ait olduğunu bul.",
    questions: [
      {
        question: "Sana en çok ilham veren antik mimari yapı hangisidir?",
        options: [
          { text: "Büyük piramitler ve sırlar dolu mabetler.", category: "Iskenderiye" },
          { text: "Görkemli tiyatrolar, sanat ve felsefe meydanları.", category: "Atina" },
          { text: "Savaş arenaları, surlar ve büyük saraylar.", category: "Roma" },
          { text: "Babil'in asma bahçeleri ve doğayla iç içe yapılar.", category: "Babil" }
        ]
      },
      {
        question: "Geçmiş yaşamında ne tür bir meslek icra ediyordun?",
        options: [
          { text: "Büyük kütüphanede sırlar ve yıldızlar üzerine çalışan bir gökbilimci.", category: "Iskenderiye" },
          { text: "Meydanlarda halkla felsefe tartışan bir düşünür.", category: "Atina" },
          { text: "Orduları yöneten cesur bir general veya komutan.", category: "Roma" },
          { text: "Bitkilerle şifa hazırlayan mistik bir hekim/şifacı.", category: "Babil" }
        ]
      },
      {
        question: "Ruhunu en çok ne dinlendirir?",
        options: [
          { text: "Kadim parşömenleri okumak ve yalnız kalmak.", category: "Iskenderiye" },
          { text: "Tiyatro izlemek, sanat tartışmak.", category: "Atina" },
          { text: "Zaferler kazanmak ve hedeflere ulaşmak.", category: "Roma" },
          { text: "Yıldızların altında, doğa kokusuyla uyumak.", category: "Babil" }
        ]
      }
    ],
    results: {
      "Iskenderiye": { icon: "📚", title: "Eviniz: İskenderiye", subtitle: "Bilim ve Yıldızların Şehri", desc: "<p>Ruhunuz antik İskenderiye kütüphanesine ait. Yıldızların sırlarını çözmek, astronomi ve gizemli bilgilerle ilgilenmek sizin kodlarınızda var.</p>" },
      "Atina": { icon: "🏛️", title: "Eviniz: Antik Atina", subtitle: "Felsefe, Sanat ve Demokrasi", desc: "<p>Ruhunuz antik Atina'ya ait. Demokrasi meydanlarında felsefe tartışmak, tiyatro izlemek ve entelektüel sohbetler ruhunuzun gıdasıdır.</p>" },
      "Roma": { icon: "🛡️", title: "Eviniz: İmparatorluk Roması", subtitle: "Güç, Hırs ve Zafer", desc: "<p>Ruhunuz antik Roma'ya ait. Büyük hedeflere ulaşmak, orduları yönetmek, kurallar koymak ve zaferler kazanmak sizin gücünüzdür.</p>" },
      "Babil": { icon: "🌴", title: "Eviniz: Kadim Babil", subtitle: "Doğa ve Mistik Şifa", desc: "<p>Ruhunuz kadim Babil'in asma bahçelerine ait. Yıldız gözlemleri yapmak, bitkilerin şifasını kullanmak ve doğayla rezonans kurmak sizin ruhunuzdur.</p>" }
    }
  },
  zodiacColor: {
    title: "Şans Getiren Kozmik Rengin Hangisi?",
    category: "Karakter",
    icon: "🎨",
    description: "Karakter enerjini ve yıldız haritanı en çok destekleyen tılsımlı rengi bul.",
    questions: [
      {
        question: "Kendinizi en güçlü ve çekici hissetmek istediğinizde hangi rengi giyersiniz?",
        options: [
          { text: "Kırmızı veya ateş tonları.", category: "Kirmizi" },
          { text: "Derin mor, lacivert veya siyah.", category: "Mor" },
          { text: "Altın sarısı, turuncu veya bronz.", category: "Altin" },
          { text: "Zümrüt yeşili, toprak tonları.", category: "Yesil" }
        ]
      },
      {
        question: "Evinizin yatak odasını hangi renkle dekore etmek istersiniz?",
        options: [
          { text: "Canlı ve sıcak renklerle.", category: "Kirmizi" },
          { text: "Mistik mor ve loş tonlarla.", category: "Mor" },
          { text: "Şık altın çerçeveler ve sıcak renklerle.", category: "Altin" },
          { text: "Huzurlu yeşiller ve toprak tonlarıyla.", category: "Yesil" }
        ]
      },
      {
        question: "Size göre şans neyi ifade eder?",
        options: [
          { text: "Cesurca savaşıp kazanmayı.", category: "Kirmizi" },
          { text: "Ruhsal olarak evrenle uyumda olmayı.", category: "Mor" },
          { text: "Lüks ve konforlu bir hayata ulaşmayı.", category: "Altin" },
          { text: "Sakin, dengeli ve sağlıklı kalmayı.", category: "Yesil" }
        ]
      }
    ],
    results: {
      "Kirmizi": { icon: "🔴", title: "Şans Renginiz: Kozmik Kırmızı", subtitle: "Cesaret ve Canlılık", desc: "<p>Tılsımlı renginiz Kırmızıdır. Mars enerjisini taşır. Özgüveninizi yükseltmek ve eyleme geçmek için kırmızı aksesuarlar taşıyın.</p>" },
      "Mor": { icon: "🟣", title: "Şans Renginiz: Kozmik Mor", subtitle: "Sezgi ve Mistik Güç", desc: "<p>Tılsımlı renginiz Mor ve Çivit Mavisidir. Neptün enerjisini taşır. Sezgilerinizi ve ruhsal korumanızı güçlendirir.</p>" },
      "Altin": { icon: "🟡", title: "Şans Renginiz: Kozmik Altın", subtitle: "Prestij, Bolluk ve Güneş", desc: "<p>Tılsımlı renginiz Altın Sarısıdır. Güneş enerjisini taşır. Auranızı parlatır, bolluk bilincini ve neşeyi çeker.</p>" },
      "Yesil": { icon: "🟢", title: "Şans Renginiz: Kozmik Yeşil", subtitle: "Huzur, Şifa ve Toprak", desc: "<p>Tılsımlı renginiz Zümrüt Yeşili ve Toprak tonlarıdır. Venüs enerjisini taşır. Kalp çakranızı dengeler, huzur ve sağlık getirir.</p>" }
    }
  },
  decansSub: {
    title: "Burcunun Hangi Dekanındasın?",
    category: "Karakter",
    icon: "📐",
    description: "Doğum tarihine göre burcunun alt yöneticisini (Dekanını) ve gizli etkisini hesapla.",
    questions: [
      {
        question: "Burcunuzun başlangıç tarihine yakın mı doğdunuz yoksa sonuna doğru mu?",
        options: [
          { text: "İlk 10 gün içinde doğdum (1. Dekan).", category: "Dekan1" },
          { text: "Ortadaki 10 gün içinde doğdum (2. Dekan).", category: "Dekan2" },
          { text: "Son 10 gün içinde doğdum (3. Dekan).", category: "Dekan3" },
          { text: "Tam bilmiyorum ama ortalarda bir yerdedir.", category: "Dekan2" }
        ]
      },
      {
        question: "Kendi burcunun özelliklerini ne kadar taşıyorsun?",
        options: [
          { text: "Birebir taşıyorum, tam burcumun insanıyım.", category: "Dekan1" },
          { text: "Biraz daha mantıklı ve analitik yönlerim var.", category: "Dekan2" },
          { text: "Çok daha sezgisel, mistik ve değişken hislere sahibim.", category: "Dekan3" },
          { text: "Yükselen burcumun etkileri daha baskın.", category: "Dekan2" }
        ]
      },
      {
        question: "Öğrenmek istediğiniz en büyük yetenek hangisidir?",
        options: [
          { text: "Burcumun getirdiği temel liderlik gücünü.", category: "Dekan1" },
          { text: "Zihinsel strateji kurma ve düzenleme gücünü.", category: "Dekan2" },
          { text: "Ruhsal olarak insanları okuma sezgisini.", category: "Dekan3" },
          { text: "Maddi bolluk yaratma pratikliğini.", category: "Dekan2" }
        ]
      }
    ],
    results: {
      "Dekan1": { icon: "🎯", title: "Burç Dekanınız: 1. Dekan", subtitle: "Saf Burç Enerjisi", desc: "<p>Burcunuzun ilk 10 derecesinde doğmuşsunuz. Burcunuzun tüm özelliklerini en saf ve güçlü şekilde taşıyorsunuz. Yönetici gezegeninizin etkisi katıksızdır.</p>" },
      "Dekan2": { icon: "📊", title: "Burç Dekanınız: 2. Dekan", subtitle: "Merkür/Satürn Alt Etkisi", desc: "<p>Burcunuzun ortasındaki 10 derecede doğmuşsunuz. Burcunuzun özelliklerine ek olarak daha analitik, planlı ve mantıklı yönleriniz gelişmiştir.</p>" },
      "Dekan3": { icon: "🔮", title: "Burç Dekanınız: 3. Dekan", subtitle: "Jüpiter/Neptün Alt Etkisi", desc: "<p>Burcunuzun son 10 derecesinde doğmuşsunuz. Burcunuza ek olarak çok daha sezgisel, mistik, kaşif ve sanatsal alt yöneticilere sahipsiniz.</p>" }
    }
  },
  retroDefense: {
    title: "Retro Savunma Kalkanın Nedir?",
    category: "Ruhsal & Karma",
    icon: "🛡️",
    description: "Gezegen retrolarında (Merkür, Venüs, Mars) kendini koruyacak kozmik kalkanını bul.",
    questions: [
      {
        question: "Gezegenler gerilemeye başladığında enerjini korumak için ne yaparsın?",
        options: [
          { text: "Sessizleşir, meditasyon yapar ve içime dönerim.", category: "AmetistKalkan" },
          { text: "İşlerimi yavaşlatır, detayları tekrar kontrol ederim.", category: "PlanKalkan" },
          { text: "Sosyal medyadan ve teknolojiden uzaklaşırım.", category: "DetoxKalkan" },
          { text: "Pozitif düşünür, kristallerimin enerjisine sığınırım.", category: "KristalKalkan" }
        ]
      },
      {
        question: "Retro dönemlerinde seni en çok ne korur?",
        options: [
          { text: "Ruhsal inancım ve dualarım.", category: "AmetistKalkan" },
          { text: "Yarım kalmış eski planlarımı bitirme ciddiyetim.", category: "PlanKalkan" },
          { text: "Yalnız kalıp dinlenme kararım.", category: "DetoxKalkan" },
          { text: "Tılsımlı taşlarım ve tütsülerim.", category: "KristalKalkan" }
        ]
      },
      {
        question: "Sana göre kalkan kelimesi neyi ifade eder?",
        options: [
          { text: "Ruhsal auranın temizlenmesini.", category: "AmetistKalkan" },
          { text: "Mantıklı adımlarla tedbir almayı.", category: "PlanKalkan" },
          { text: "Dış dünyadan gelen gürültüyü kapatmayı.", category: "DetoxKalkan" },
          { text: "Doğal taşların koruyucu frekansını.", category: "KristalKalkan" }
        ]
      }
    ],
    results: {
      "AmetistKalkan": { icon: "🔮", title: "Kalkanınız: Ruhsal Teslimiyet", subtitle: "Ametist ve Meditasyon", desc: "<p>Retrolara karşı en büyük gücünüz içsel dengenizdir. Meditasyon yaparak ve Ametist kristali kullanarak auranızı koruyabilirsiniz.</p>" },
      "PlanKalkan": { icon: "📋", title: "Kalkanınız: Stratejik Planlama", subtitle: "Satürn Koruyucu Kalkanı", desc: "<p>Sizin kalkanınız mantığınızdır. Retro dönemlerinde detayları çift kontrol ederek, acele kararlar almayarak tüm krizleri aşarsınız.</p>" },
      "DetoxKalkan": { icon: "📴", title: "Kalkanınız: Dijital Detoks", subtitle: "Sessizlik ve İçe Çekilme", desc: "<p>Retro dönemlerinde sosyal medyayı kapatmak, gürültülü ortamlardan uzaklaşmak ve yalnız kalmak sizin en büyük şifanızdır.</p>" },
      "KristalKalkan": { icon: "💎", title: "Kalkanınız: Tılsımlı Frekans", subtitle: "Kristallerin Gücü", desc: "<p>Şeffaf Kuvars veya Siyah Turmalin gibi koruyucu kristaller taşıyarak retroların getirdiği elektromanyetik kaosları dengelersiniz.</p>" }
    }
  },
  plutoPower: {
    title: "Plütonik Güç Noktan Nerede?",
    category: "Karakter",
    icon: "♇",
    description: "Doğum haritandaki Plüton gücünün hangi alanda gizli olduğunu keşfet.",
    questions: [
      {
        question: "Hayatınızda en çok hangi alanda kriz yaşayıp küllerinizden yeniden doğdunuz?",
        options: [
          { text: "Bireysel gücümü kanıtlamada, kendi kimliğimi bulmada.", category: "Pluto1" },
          { text: "Maddi kayıplarda, parayı tekrar sıfırdan kazanırken.", category: "Pluto2" },
          { text: "İlişkilerimde, evlilik veya ortaklıklarda yaşadığım krizlerle.", category: "Pluto7" },
          { text: "Kariyerimde, statümde ve iş hayatımdaki engelleri aşarken.", category: "Pluto10" }
        ]
      },
      {
        question: "Dönüşüm kelimesi sizce ne demektir?",
        options: [
          { text: "Kendi gücünü fark edip korkusuzca ayağa kalkmak.", category: "Pluto1" },
          { text: "Maddi bağımlılıklardan sıyrılıp özgürleşmek.", category: "Pluto2" },
          { text: "İlişkilerdeki toksik bağları koparıp yenilenmek.", category: "Pluto7" },
          { text: "Topluma yön veren sarsılmaz bir lider haline gelmek.", category: "Pluto10" }
        ]
      },
      {
        question: "En büyük iradenizi ne zaman gösterirsiniz?",
        options: [
          { text: "Bana 'yapamazsın' dendiğinde, kendimi kanıtlamak için.", category: "Pluto1" },
          { text: "Finansal olarak dibe vurduğumda, ayağa kalkmak için.", category: "Pluto2" },
          { text: "İlişkilerim bittiğinde, kendimi yeniden inşa etmek için.", category: "Pluto7" },
          { text: "İş hayatında büyük engellerle karşılaştığımda.", category: "Pluto10" }
        ]
      }
    ],
    results: {
      "Pluto1": { icon: "♇", title: "Güç Noktanız: 1. Ev (Beden ve Kimlik)", subtitle: "Küllerinden Doğan Kahraman", desc: "<p>Plüton gücünüz benliğinizde gizli. Hayatta yaşadığınız tüm kişisel krizlerden karakterinizi güçlendirerek, adeta bir anka kuşu gibi çıkarsınız.</p>" },
      "Pluto2": { icon: "💰", title: "Güç Noktanız: 2. Ev (Maddi Değerler)", subtitle: "Finansal Simyacı", desc: "<p>Plüton gücünüz finansal alanda gizli. Parayı kaybetseniz bile sıfırdan çok daha büyüğünü kazanma ve yönetme gücünüz yüksektir.</p>" },
      "Pluto7": { icon: "🤝", title: "Güç Noktanız: 7. Ev (İlişkiler)", subtitle: "Dönüştürücü Ortaklıklar", desc: "<p>Plüton gücünüz ilişkiler aynasında gizli. Hayatınızdaki en büyük dönüşümleri ikili ilişkilerde yaşar, toksik bağları keserek büyürsünüz.</p>" },
      "Pluto10": { icon: "👑", title: "Güç Noktanız: 10. Ev (Kariyer ve Statü)", subtitle: "Güçlü Lider", desc: "<p>Plüton gücünüz kariyerinizde gizli. Meslek hayatınızda karşılaştığınız tüm büyük engelleri sarsılmaz bir iradeyle aşarak zirveye ulaşırsınız.</p>" }
    }
  },
  moonIntuition: {
    title: "Ay Fazına Göre Altıncı Hissin Ne Diyor?",
    category: "Ruhsal & Karma",
    icon: "🌙",
    description: "İçgüdülerini ve sezgilerini yöneten doğum Ay konumuna göre altıncı hissinin gücünü ölç.",
    questions: [
      {
        question: "İçinizden gelen o güçlü önsezi genellikle ne zaman tetiklenir?",
        options: [
          { text: "Yeni kararlar alıp heyecanlandığımda.", category: "YeniAySezgi" },
          { text: "Planlarımı adım adım uygularken.", category: "BuyuyenSezgi" },
          { text: "İlişkilerimdeki krizlerle yüzleştiğimde.", category: "DolunaySezgi" },
          { text: "Geceleri, yalnız kalıp rüyalara daldığımda.", category: "KaranlikSezgi" }
        ]
      },
      {
        question: "Sizce sezgi ne demektir?",
        options: [
          { text: "Hızlıca eyleme geçiren içsel kıvılcım.", category: "YeniAySezgi" },
          { text: "Beni hatalardan koruyan mantıklı iç ses.", category: "BuyuyenSezgi" },
          { text: "İnsanların sakladığı gerçekleri gören ayna.", category: "DolunaySezgi" },
          { text: "Görünmeyen evrenin ruhsal rehberliği.", category: "KaranlikSezgi" }
        ]
      },
      {
        question: "Rüyalarınızın hayatınızdaki etkisi nedir?",
        options: [
          { text: "Rüyalarım bana yeni fikirler verir.", category: "YeniAySezgi" },
          { text: "Günlük hayattaki planlarımı hatırlatır.", category: "BuyuyenSezgi" },
          { text: "Karşımdaki insanların niyetlerini rüyamda görürüm.", category: "DolunaySezgi" },
          { text: "Çok derin, mistik ve haberci rüyalar görürüm.", category: "KaranlikSezgi" }
        ]
      }
    ],
    results: {
      "YeniAySezgi": { icon: "🌑", title: "Sezginiz: İlham Kıvılcımı", subtitle: "Yeni Ay Sezgisi", desc: "<p>Sezgileriniz size anlık ilhamlar olarak gelir. Yeni projelere başlamadan önce hissettiğiniz o çocuksu heyecan en doğru rehberinizdir.</p>" },
      "BuyuyenSezgi": { icon: "🌒", title: "Sezginiz: Pratik Rehberlik", subtitle: "Büyüyen Ay Sezgisi", desc: "<p>Sezgilerinizi mantığınızla birleştiriyorsunuz. Kararlarınızda adım adım ilerlerken hissettiğiniz o uyarıcı ses sizi hatalardan korur.</p>" },
      "DolunaySezgi": { icon: "🌕", title: "Sezginiz: Durugörü Aynası", subtitle: "Dolunay Sezgisi", desc: "<p>İnsanların sakladıkları niyetlerini, yalanları ve gerçek duyguları anında hissediyorsunuz. İlişkilerde sezgileriniz bir ayna gibidir.</p>" },
      "KaranlikSezgi": { icon: "🌘", title: "Sezginiz: Mistik Derinlik", subtitle: "Küçülen/Balsamik Ay Sezgisi", desc: "<p>Sezgileriniz tamamen ruhsal boyuttan besleniyor. Rüyalarınız çok güçlüdür, durugörü yeteneğiniz gelişmiştir. İç sesinizi her zaman dinleyin.</p>" }
    }
  },
  synastryMatch: {
    title: "Haritanın Sinastri Seviyesi Nedir?",
    category: "Aşk & İlişki",
    icon: "🗺️",
    description: "Doğum haritandaki yerleşimlere göre ilişkilerdeki genel uyum seviyeni test et.",
    questions: [
      {
        question: "İlişkilerinde en sık karşılaştığın uyum sorunu hangisidir?",
        options: [
          { text: "İletişim kopukluğu, birbirimizi anlayamamak.", category: "MerkurUyum" },
          { text: "Duygusal mesafeler, sevildiğimi hissedememek.", category: "VenusUyum" },
          { text: "Gelecek hedeflerimizin ve değerlerimizin farklı olması.", category: "SaturnUyum" },
          { text: "Güç savaşları ve aşırı kıskançlık krizleri.", category: "PlutoUyum" }
        ]
      },
      {
        question: "Bir ilişkide en çok ne zaman mutlu olursunuz?",
        options: [
          { text: "Birlikte entelektüel olarak sohbet edip güldüğümüzde.", category: "MerkurUyum" },
          { text: "Şefkatle kucaklaşıp duygusal olarak güvende hissettiğimde.", category: "VenusUyum" },
          { text: "Geleceğe yönelik ortak ve sağlam planlar yaptığımızda.", category: "SaturnUyum" },
          { text: "Yoğun bir tutku ve bağlılık hissettiğimde.", category: "PlutoUyum" }
        ]
      },
      {
        question: "Size göre ideal partner hangi gezegenin enerjisini taşımalıdır?",
        options: [
          { text: "Merkür - konuşkan, zeki ve neşeli.", category: "MerkurUyum" },
          { text: "Venüs - nazik, estetik ve sevgi dolu.", category: "VenusUyum" },
          { text: "Satürn - olgun, sadık ve güvenilir.", category: "SaturnUyum" },
          { text: "Plüton - tutkulu, güçlü ve derin.", category: "PlutoUyum" }
        ]
      }
    ],
    results: {
      "MerkurUyum": { icon: "☿", title: "Sinastri Gücünüz: Zihinsel Uyum", subtitle: "Merkür Sinastrisi", desc: "<p>İlişkilerinizde en önemli bağ zihinsel uyumdur. Partnerinizle konuşabildiğiniz, gülebildiğiniz sürece tüm zorlukları aşabilirsiniz.</p>" },
      "VenusUyum": { icon: "♀️", title: "Sinastri Gücünüz: Kalp ve Aşk Uyumu", subtitle: "Venüs Sinastrisi", desc: "<p>İlişkilerinizde sevgi akışı ve romantizm en üst seviyededir. Nazik, estetik ve kalpten bağlar kurduğunuzda harika bir eş olursunuz.</p>" },
      "SaturnUyum": { icon: "♄", title: "Sinastri Gücünüz: Sarsılmaz Sadakat", subtitle: "Satürn Sinastrisi", desc: "<p>Sizin ilişkileriniz uzun vadeli ve güvenilirdir. Geçici hevesler yerine, ömür boyu sürecek sarsılmaz bir hayat inşası ararsınız.</p>" },
      "PlutoUyum": { icon: "♇", title: "Sinastri Gücünüz: Yoğun Tutku ve Simya", subtitle: "Plüton Sinastrisi", desc: "<p>İlişkileriniz son derece yoğun, tutkulu ve dönüştürücüdür. Ruhsal derinliği olan, krizlerden güçlenerek çıkan bağlar kurarsınız.</p>" }
    }
  },
  moonSignSecret: {
    title: "Ay Burcunun Gizli İhtiyacı Nedir?",
    category: "Karakter",
    icon: "🌙",
    description: "Bilinçaltındaki duygusal açlığını ve seni neyin güvende hissettirdiğini keşfet.",
    questions: [
      {
        question: "Büyük bir hayal kırıklığı yaşadığında seni en çok ne sakinleştirir?",
        options: [
          { text: "Tek başıma kalıp kendimi koruma altına almak.", category: "YengecAy" },
          { text: "Zihnimi meşgul edecek kitaplar okumak veya yazmak.", category: "İkizlerAy" },
          { text: "Lüks ve konforlu bir yemek yiyip dinlenmek.", category: "BoğaAy" },
          { text: "Hırslanıp daha büyük hedefler koymak.", category: "KocAy" }
        ]
      },
      {
        question: "Duygularını etrafındaki insanlara ne kadar açarsın?",
        options: [
          { text: "Sadece çok güvendiğim aileme ve dostlarıma.", category: "YengecAy" },
          { text: "Hemen hemen herkese, konuşarak rahatlarım.", category: "İkizlerAy" },
          { text: "Duygularımı pek göstermem, mesafeli ve sakinimdir.", category: "BoğaAy" },
          { text: "Duygularımı doğrudan ve coşkulu bir şekilde yaşarım.", category: "KocAy" }
        ]
      },
      {
        question: "Sana göre gerçek güvence nedir?",
        options: [
          { text: "Sıcak bir yuva ve sevdiklerimin yanımda olması.", category: "YengecAy" },
          { text: "Her türlü bilgiye ve fikre özgürce ulaşabilmek.", category: "İkizlerAy" },
          { text: "Banka hesabımdaki para ve somut yatırımlarım.", category: "BoğaAy" },
          { text: "Kendi gücüm ve kimseden emir almamak.", category: "KocAy" }
        ]
      }
    ],
    results: {
      "YengecAy": { icon: "♋", title: "Duygusal İhtiyacınız: Şefkat ve Yuva", subtitle: "Su Ay Enerjisi", desc: "<p>Duygusal olarak kendinizi en çok sevdiklerinizi korurken ve sıcak bir yuva hissi içindeyken güvende hissedersiniz.</p>" },
      "İkizlerAy": { icon: "♊", title: "Duygusal İhtiyacınız: Zihinsel Uyarım", subtitle: "Hava Ay Enerjisi", desc: "<p>Duygusal huzurunuz merakınızı beslemekten ve sürekli fikir alışverişinde bulunmaktan geçer. Suskunluk sizi yorar.</p>" },
      "BoğaAy": { icon: "♉", title: "Duygusal İhtiyacınız: Somut İstikrar", subtitle: "Toprak Ay Enerjisi", desc: "<p>Sizin için duygusal güvenlik maddi istikrar, konfor ve sadakatle eşdeğerdir. Plansızlık sizi kaygılandırır.</p>" },
      "KocAy": { icon: "♈", title: "Duygusal İhtiyacınız: Bağımsızlık ve İrade", subtitle: "Ateş Ay Enerjisi", desc: "<p>Duygularınızı doğrudan, sabırsızca ve cesurca yaşarsınız. Kısıtlanmak ve kontrol edilmek duygusal dengenizi bozar.</p>" }
    }
  },
  zodiacTalent: {
    title: "Gizli Sanatsal Yeteneğin Nedir?",
    category: "Karakter",
    icon: "🎨",
    description: "Doğum haritandaki Venüs ve Neptün rezonansına göre gizli yaratıcı yeteneğini bul.",
    questions: [
      {
        question: "Sanatın hangi dalı ruhunu daha çok besler?",
        options: [
          { text: "Şiir, senaryo veya felsefi yazılar.", category: "Yazarlik" },
          { text: "Müzik, enstrüman çalmak veya şarkı söylemek.", category: "Muzik" },
          { text: "Resim yapmak, tasarım veya el sanatları.", category: "Tasarim" },
          { text: "Tiyatro, oyunculuk veya sahne performansları.", category: "Sahne" }
        ]
      },
      {
        question: "Hayal gücün en çok ne zaman aktiftir?",
        options: [
          { text: "Zihnimde kelimeler uçuştuğunda ve yalnızken.", category: "Yazarlik" },
          { text: "Bir melodi dinlediğimde veya doğadayken.", category: "Muzik" },
          { text: "Renkleri ve şekilleri birleştirdiğimde.", category: "Tasarim" },
          { text: "Kitlelerin önünde, heyecanlı anlarda.", category: "Sahne" }
        ]
      },
      {
        question: "İdeal yaratım sürecin nasıldır?",
        options: [
          { text: "Kendi iç dünyama çekilip sessizce yazarak.", category: "Yazarlik" },
          { text: "İlhamın ve ritmin beni yönlendirmesine izin vererek.", category: "Muzik" },
          { text: "Somut malzemelerle çalışıp ortaya bir tasarım koyarak.", category: "Tasarim" },
          { text: "Bedenimi ve sesimi kullanarak kendimi yansıtarak.", category: "Sahne" }
        ]
      }
    ],
    results: {
      "Yazarlik": { icon: "✍️", title: "Gizli Yeteneğiniz: Şiirsel Yazarlık", subtitle: "Kelimelerin Gücü", desc: "<p>Kelimelerle aranız harika. Sezgilerinizi ve düşüncelerinizi kağıda dökerek harika şiirler, hikayeler veya makaleler yazabilirsiniz.</p>" },
      "Muzik": { icon: "🎵", title: "Gizli Yeteneğiniz: Müzikal Deha", subtitle: "Ritim ve Melodi", desc: "<p>Neptün frekansınız müzikle rezonans kuruyor. Enstrüman çalma, şarkı söyleme veya beste yapma potansiyeliniz çok yüksektir.</p>" },
      "Tasarim": { icon: "🎨", title: "Gizli Yeteneğiniz: Görsel Tasarım", subtitle: "Renkler ve Şekiller", desc: "<p>Estetik gözünüz çok gelişmiş. Resim, iç mimarlık, moda veya el sanatları gibi görsellik gerektiren her alanda parlayabilirsiniz.</p>" },
      "Sahne": { icon: "🎭", title: "Gizli Yeteneğiniz: Sahne Performansı", subtitle: "Beden ve İfade", desc: "<p>Güneş enerjiniz sahneye uygun. Tiyatro, oyunculuk veya hitabet gücünüzle insanları etkileme potansiyeline sahipsiniz.</p>" }
    }
  },
  chironWound: {
    title: "Şiron Yarana Göre En Büyük Korkun?",
    category: "Ruhsal & Karma",
    icon: "🩹",
    description: "Haritandaki yaralı şifacı Şiron'a göre ruhunun en derin korkusunu keşfet.",
    questions: [
      {
        question: "Seni en çok hangi düşünce uykusuz bırakır?",
        options: [
          { text: "Hiçbir zaman yeterince iyi ve başarılı olamama korkusu.", category: "Yetersizlik" },
          { text: "Terk edilip yapayalnız kalma endişesi.", category: "Yalnizlik" },
          { text: "İnsanlar tarafından aldatılmak ve aptal yerine konmak.", category: "Ihanet" },
          { text: "Özgürlüğümü tamamen kaybedip bir yere hapsolmak.", category: "Kisitlanma" }
        ]
      },
      {
        question: "Geçmişte yaşadığın en derin kırılma noktası neyle ilgiliydi?",
        options: [
          { text: "Bireysel gücümü kanıtlayamamakla.", category: "Yetersizlik" },
          { text: "Bir gruptan veya aileden dışlanmakla.", category: "Yalnizlik" },
          { text: "En güvendiğim insanın arkamdan iş çevirmesiyle.", category: "Ihanet" },
          { text: "İstemediğim kurallara boyun eğmek zorunda kalmakla.", category: "Kisitlanma" }
        ]
      },
      {
        question: "Bu korkuyu aşmak için neye ihtiyaç duyarsın?",
        options: [
          { text: "Kendi başarılarımı kendim takdir etmeye.", category: "Yetersizlik" },
          { text: "Ruhsal olarak kendimle barışık kalabilmeye.", category: "Yalnizlik" },
          { text: "Karşımdakilerin niyetlerini sezgisel olarak okumaya.", category: "Ihanet" },
          { text: "Kendi sınırlarımı çizip bağımsız olmaya.", category: "Kisitlanma" }
        ]
      }
    ],
    results: {
      "Yetersizlik": { icon: "🐏", title: "En Derin Korkunuz: Başarısızlık", subtitle: "Şiron Koç Yarası", desc: "<p>En derin korkunuz yetersizlik ve kendini kanıtlayamamaktır. Kendinizi başkalarıyla kıyaslamayı bırakarak bu yarayı şifalandırabilirsiniz.</p>" },
      "Yalnizlik": { icon: "🦀", title: "En Derin Korkunuz: Dışlanmak ve Yalnızlık", subtitle: "Şiron Yengeç Yarası", desc: "<p>En derin korkunuz aidiyetinizi kaybetmek ve sevilmemektir. Kendi içinizdeki yuvayı keşfederek bu korkuyu aşabilirsiniz.</p>" },
      "Ihanet": { icon: "🦂", title: "En Derin Korkunuz: Güvenini Kaybetmek", subtitle: "Şiron Akrep Yarası", desc: "<p>En derin korkunuz ihanete uğramak ve aldatılmaktır. Aşırı kontrolü bırakıp evrensel akışa güvenmeyi öğrenmelisiniz.</p>" },
      "Kisitlanma": { icon: "🏺", title: "En Derin Korkunuz: Özgürlüğün Kaybı", subtitle: "Şiron Kova Yarası", desc: "<p>En derin korkunuz kısıtlanmak ve sıradanlaşmaktır. Kendi özgünlüğünüzü kabul ederek topluma katkı sunmaya odaklanmalısınız.</p>" }
    }
  },
  spiritualFrekans: {
    title: "Ruhsal Frekansın Hangi Seviyede?",
    category: "Ruhsal & Karma",
    icon: "🧘",
    description: "Manevi bilincinin ve enerjisel frekansının (Hawkins Ölçeği) seviyesini ölç.",
    questions: [
      {
        question: "Sana kötülük yapan birine karşı içindeki ilk duygu ne olur?",
        options: [
          { text: "Öfke duyar ve intikam almak isterim.", category: "FrekansDusus" },
          { text: "Üzülürüm ama bunun onun karması olduğunu kabul ederim.", category: "FrekansNötr" },
          { text: "Onu affeder ve enerjimi kirletmemek için uzaklaşırım.", category: "FrekansYuksek" },
          { text: "Ona şefkatle dua eder, ruhunun şifalanmasını dilerim.", category: "FrekansKozmik" }
        ]
      },
      {
        question: "Geleceğe baktığında içini kaplayan en baskın his nedir?",
        options: [
          { text: "Korku, kaygı ve belirsizlik.", category: "FrekansDusus" },
          { text: "Sakinlik, planlarımın yürüyeceğine olan mantıklı inanç.", category: "FrekansNötr" },
          { text: "İyimserlik, güzel kapıların açılacağına olan inanç.", category: "FrekansYuksek" },
          { text: "Tam bir teslimiyet ve ilahi plana güven.", category: "FrekansKozmik" }
        ]
      },
      {
        question: "Meditasyon veya dua ederken ne hissedersiniz?",
        options: [
          { text: "Zihnimi susturmakta zorlanırım, konsantre olamam.", category: "FrekansDusus" },
          { text: "Zihnim sakinleşir, bedenim rahatlar.", category: "FrekansNötr" },
          { text: "Ruhsal bir neşe ve kalbimde bir genişleme hissederim.", category: "FrekansYuksek" },
          { text: "Evrenle tamamen birleştiğimi, zamansızlığı hissederim.", category: "FrekansKozmik" }
        ]
      }
    ],
    results: {
      "FrekansDusus": { icon: "📉", title: "Frekansınız: Gelişmekte Olan (Öfke/Korku)", subtitle: "Düşük Frekans Eğilimi", desc: "<p>Frekansınız şu an dünyevi kaygılar ve öfkeyle tıkanmış durumda. Auranızı temizlemek için tuz banyoları yapın ve affetme çalışmaları yapın.</p>" },
      "FrekansNötr": { icon: "⚖️", title: "Frekansınız: Dengeli Bilinç (Cesaret/Mantık)", subtitle: "Nötr Frekans Seviyesi", desc: "<p>Frekansınız cesaret ve mantık seviyesinde (200-350 Hz). Hayata gerçekçi bakıyor, krizleri akılla yönetiyorsunuz.</p>" },
      "FrekansYuksek": { icon: "💖", title: "Frekansınız: Sevgi ve Kabul (Aydınlanma)", subtitle: "Yüksek Frekans Seviyesi", desc: "<p>Frekansınız sevgi ve kabul seviyesinde (500 Hz). Çevrenize pozitif enerji yayıyor, kolayca affediyor ve şansı çekiyorsunuz.</p>" },
      "FrekansKozmik": { icon: "🌟", title: "Frekansınız: Kozmik Birleşme (Huzur)", subtitle: "Mistik Frekans Seviyesi", desc: "<p>Frekansınız en üst ruhsal boyutlarda (600+ Hz). Tam bir teslimiyet, yüksek sezgi ve evrensel bütünlük içindesiniz. Doğal bir şifacısınız.</p>" }
    }
  },
  astrologyFood: {
    title: "Hangi Astrolojik Beslenme Tipi Sana Göre?",
    category: "Karakter",
    icon: "🍏",
    description: "Zodyak elementine göre vücudunun ihtiyaç duyduğu diyet ve beslenme tarzını bul.",
    questions: [
      {
        question: "Yemek yerken en çok hangisine dikkat edersiniz?",
        options: [
          { text: "Hızlı, pratik ve bana anında enerji vermesine.", category: "AtesDiyet" },
          { text: "Lezzetli, kaliteli, gurme ve doyurucu olmasına.", category: "ToprakDiyet" },
          { text: "Hafif, sindirimi kolay ve sosyal ortamlarda yenmesine.", category: "HavaDiyet" },
          { text: "Sıvı bazlı, ruhumu dinlendiren ve taze besinlere.", category: "SuDiyet" }
        ]
      },
      {
        question: "Vücudunuz en çok hangi beslenme hatasında reaksiyon verir?",
        options: [
          { text: "Aşırı baharatlı ve çok hızlı yediğimde midem yanar.", category: "AtesDiyet" },
          { text: "Aşırı karbonhidrat ve şeker tükettiğimde kilo alırım.", category: "ToprakDiyet" },
          { text: "Plansız ve kuru beslendiğimde gaz/şişkinlik yaşarım.", category: "HavaDiyet" },
          { text: "Tuzlu yediğimde vücudum ödem toplar.", category: "SuDiyet" }
        ]
      },
      {
        question: "İdeal öğününüz hangisidir?",
        options: [
          { text: "Protein ağırlıklı, ızgara et/tavuk ve taze salata.", category: "AtesDiyet" },
          { text: "Kök sebzeler, zeytinyağlılar ve kaliteli bir gurme tabağı.", category: "ToprakDiyet" },
          { text: "Smoothie'ler, hafif salatalar ve kuruyemişler.", category: "HavaDiyet" },
          { text: "Deniz ürünleri, çorbalar ve bol sulu meyveler.", category: "SuDiyet" }
        ]
      }
    ],
    results: {
      "AtesDiyet": { icon: "🥩", title: "Beslenme Tipiniz: Protein ve Canlılık", subtitle: "Ateş Elementi Diyeti", desc: "<p>Metabolizmanız hızlıdır. Yağsız proteinler, taze sebzeler ve asit dengesini koruyacak hafif besinler tüketmelisiniz. Hızlı yemekten kaçının.</p>" },
      "ToprakDiyet": { icon: "🥦", title: "Beslenme Tipiniz: Kök Sebzeler ve Lifli Gıdalar", subtitle: "Toprak Elementi Diyeti", desc: "<p>Sindirim sisteminiz yavaştır. Lifli gıdalar, yeşil yapraklı sebzeler ve organik besinler tüketmeli, karbonhidratı azaltmalısınız.</p>" },
      "HavaDiyet": { icon: "🥗", title: "Beslenme Tipiniz: Hafif ve Taze Öğünler", subtitle: "Hava Elementi Diyeti", desc: "<p>Sinir sisteminiz hassastır. Smoothie, taze meyve suları, kuruyemişler ve sindirimi kolay hafif salatalar tüketmelisiniz. Bol su için.</p>" },
      "SuDiyet": { icon: "🐟", title: "Beslenme Tipiniz: Deniz Ürünleri ve Ödem Önleyiciler", subtitle: "Su Elementi Diyeti", desc: "<p>Vücudunuz ödem toplamaya yatkındır. Tuzu azaltmalı, bol su içmeli, deniz ürünleri ve potasyum içeren taze meyveler tüketmelisiniz.</p>" }
    }
  },
  zodiacHouseStyle: {
    title: "Evinin Dekorasyon Burcu Hangisi?",
    category: "Karakter",
    icon: "🛋️",
    description: "Yaşam alanındaki zevklerine göre evinin hangi burç tarzında olması gerektiğini öğren.",
    questions: [
      {
        question: "Bir salon tasarlarken koltuk seçiminiz hangisi olurdu?",
        options: [
          { text: "Çok kaliteli, deri veya kadife, sarsılmaz derecede konforlu.", category: "BoğaTarz" },
          { text: "Modern, teknolojik, minimalist ve çok fonksiyonlu.", category: "KovaTarz" },
          { text: "Sıcak renkli, büyük, şık ve gösterişli.", category: "AslanTarz" },
          { text: "Yumuşacık, bol yastıklı, içine gömüleceğim pastel tonlar.", category: "YengecTarz" }
        ]
      },
      {
        question: "Evinizde en çok hangi detaya önem verirsiniz?",
        options: [
          { text: "Aydınlatmanın kalitesine ve doğal malzemelere.", category: "BoğaTarz" },
          { text: "Kitaplığımın büyüklüğüne ve akıllı ev aletlerine.", category: "KovaTarz" },
          { text: "Duvarlardaki şık tablolara ve altın varaklı aynalara.", category: "AslanTarz" },
          { text: "Anısı olan fotoğraflara ve mumlara.", category: "YengecTarz" }
        ]
      },
      {
        question: "Evinizin atmosferi nasıl hissettirmeli?",
        options: [
          { text: "Huzurlu, kaliteli ve köklü.", category: "BoğaTarz" },
          { text: "Özgür, modern ve zihni açan.", category: "KovaTarz" },
          { text: "Prestijli, görkemli ve lüks.", category: "AslanTarz" },
          { text: "Sıcacık bir yuva, korunaklı ve şefkatli.", category: "YengecTarz" }
        ]
      }
    ],
    results: {
      "BoğaTarz": { icon: "🪵", title: "Ev Tarzınız: Rustik ve Gurme", subtitle: "Boğa/Toprak Teması", desc: "<p>Eviniz doğal ahşap malzemeler, toprak renkleri, sarsılmaz konforlu koltuklar ve kaliteli detaylarla (Boğa tarzı) dekore edilmelidir.</p>" },
      "KovaTarz": { icon: "🏢", title: "Ev Tarzınız: Loft ve Minimalist", subtitle: "Kova/Hava Teması", desc: "<p>Eviniz geniş camlar, modern metalik detaylar, büyük kitaplıklar ve teknolojik aletlerle (Kova tarzı) dekore edilmelidir.</p>" },
      "AslanTarz": { icon: "👑", title: "Ev Tarzınız: Görkemli ve Klasik", subtitle: "Aslan/Ateş Teması", desc: "<p>Eviniz altın varaklar, büyük aynalar, şık aydınlatmalar ve görkemli tablolarla (Aslan tarzı) adeta bir saray gibi parlamalıdır.</p>" },
      "YengecTarz": { icon: "🕯️", title: "Ev Tarzınız: Sıcacık Retro Yuva", subtitle: "Yengeç/Su Teması", desc: "<p>Eviniz pastel tonlar, aile fotoğrafları, yumuşak battaniyeler ve loş mum ışıklarıyla (Yengeç tarzı) tam bir sığınak olmalıdır.</p>" }
    }
  },
  zodiacArchetypeAşk: {
    title: "Aşkta Hangi Göksel Arketipsin?",
    category: "Aşk & İlişki",
    icon: "💘",
    description: "İlişkilerinde partnerine sunduğun göksel arketipini (Aşık, Savaşçı, Şifacı vb.) bul.",
    questions: [
      {
        question: "Aşık olduğunda partnerine kendini nasıl gösterirsin?",
        options: [
          { text: "Onun için dünyayı fethedecek cesur bir kahraman gibi.", category: "AtesAsk" },
          { text: "Ona ömür boyu sığınabileceği güvenli bir liman gibi.", category: "ToprakAsk" },
          { text: "Onu sürekli eğlendiren, zeki bir entelektüel gibi.", category: "HavaAsk" },
          { text: "Duygularını şiirsel yaşayan, ruhsal bir şifacı gibi.", category: "SuAsk" }
        ]
      },
      {
        question: "İlişkideki en güçlü yönün hangisidir?",
        options: [
          { text: "Tutkum ve sevgilimi her koşulda savunma cesaretim.", category: "AtesAsk" },
          { text: "Sadakatim, sabrım ve pratik çözümlerim.", category: "ToprakAsk" },
          { text: "İletişim gücüm, partnerimin zihnini açabilmem.", category: "HavaAsk" },
          { text: "Derin empati yeteneğim ve partnerimi şifalandırmam.", category: "SuAsk" }
        ]
      },
      {
        question: "İlişkide seni en çok ne mutlu eder?",
        options: [
          { text: "Birlikte maceralara koşmak ve heyecanlanmak.", category: "AtesAsk" },
          { text: "Güvenli ve huzurlu bir yuva inşa etmek.", category: "ToprakAsk" },
          { text: "Fikirlerimizi özgürce paylaşabilmek.", category: "HavaAsk" },
          { text: "Ruhsal olarak telepatik bir bağ kurmak.", category: "SuAsk" }
        ]
      }
    ],
    results: {
      "AtesAsk": { icon: "⚔️", title: "Aşk Arketipiniz: Tutkulu Savaşçı", subtitle: "Mars/Güneş Etkisi", desc: "<p>Aşkta fethedici ve koruyucusunuz. Sevgilinizi sonuna kadar savunur, ilişkiye yüksek enerji ve tutku katarsınız.</p>" },
      "ToprakAsk": { icon: "🏰", title: "Aşk Arketipiniz: Güvenli Kale", subtitle: "Satürn/Venüs Etkisi", desc: "<p>Aşkta sarsılmaz bir sadakat sunarsınız. Partnerinizin hayatını pratik olarak düzene sokar, ona güvenli bir gelecek inşa edersiniz.</p>" },
      "HavaAsk": { icon: "💡", title: "Aşk Arketipiniz: İlham Veren Arkadaş", subtitle: "Merkür/Uranüs Etkisi", desc: "<p>Aşkta zihinsel bağ kurarsınız. Partnerinizin en yakın yol arkadaşı olur, onu sürekli entelektüel olarak beslersiniz.</p>" },
      "SuAsk": { icon: "🌊", title: "Aşk Arketipiniz: Ruhsal Şifacı", subtitle: "Neptün/Ay Etkisi", desc: "<p>Aşkta sınırları kaldırırsınız. Partnerinizi koşulsuz sever, onun duygusal yaralarını şefkatle iyileştirirsiniz.</p>" }
    }
  },
  synastryDanger: {
    title: "Aşkta En Büyük Sinastri Tehliken Nedir?",
    category: "Aşk & İlişki",
    icon: "💔",
    description: "Doğum haritandaki gerilimli açılara göre ilişkilerini yıpratan temel hatayı bul.",
    questions: [
      {
        question: "İlişkilerinde en sık karşılaştığın kısır döngü hangisidir?",
        options: [
          { text: "Partnerimin beni aşırı kısıtlaması ve özgürlüğümü yitirmem.", category: "KisitlanmaTehlike" },
          { text: "İletişimsizlik yüzünden sürekli yanlış anlaşılmak.", category: "MerkurTehlike" },
          { text: "Aşırı kıskançlık ve güç savaşlarında yıpranmak.", category: "PlutoTehlike" },
          { text: "Partnerime aşırı fedakarlık yapıp kendimi unutmam.", category: "NeptunTehlike" }
        ]
      },
      {
        question: "Bir tartışma esnasında kendini nasıl korursun?",
        options: [
          { text: "Köprüleri yakar, ilişkiden anında uzaklaşırım.", category: "KisitlanmaTehlike" },
          { text: "Laf sokar, kelimelerle duvar örerim.", category: "MerkurTehlike" },
          { text: "Karşımdakini manipüle edip kontrolü almaya çalışırım.", category: "PlutoTehlike" },
          { text: "Sessizce ağlar, kurban rolüne bürünürüm.", category: "NeptunTehlike" }
        ]
      },
      {
        question: "Sana göre bir ilişkiyi ne bitirir?",
        options: [
          { text: "Bana nefes alacak alan bırakılmaması.", category: "KisitlanmaTehlike" },
          { text: "Zihinsel olarak kopmamız ve konuşamamamız.", category: "MerkurTehlike" },
          { text: "Güvenin kırılması ve kontrol savaşları.", category: "PlutoTehlike" },
          { text: "Nankörlük ve emeğimin hiç görülmemesi.", category: "NeptunTehlike" }
        ]
      }
    ],
    results: {
      "KisitlanmaTehlike": { icon: "⚠️", title: "Sinastri Tehlikeniz: Uranyen Kopuş", subtitle: "Özgürlük vs. Bağlılık", desc: "<p>En büyük ilişkiniz tehlikesi, kısıtlanma korkusuyla en ufak krizde köprüleri yakıp kaçma eğiliminizdir. Bağlanmayı öğrenmelisiniz.</p>" },
      "MerkurTehlike": { icon: "📣", title: "Sinastri Tehlikeniz: İletişim Kazaları", subtitle: "Merkür Kare Açısı", desc: "<p>En büyük ilişkiniz tehlikesi, zihinsel inatçılık ve dinlememektir. İletişimi ego savaşına çevirmekten kaçınmalısınız.</p>" },
      "PlutoTehlike": { icon: "🦂", title: "Sinastri Tehlikeniz: Plütonik Güç Savaşı", subtitle: "Aşırı Kıskançlık ve Manipülasyon", desc: "<p>En büyük ilişkiniz tehlikesi, partnerinizi tamamen kontrol etme arzusudur. Güvenmeyi öğrenmeli ve kontrolü serbest bırakmalısınız.</p>" },
      "NeptunTehlike": { icon: "🌊", title: "Sinastri Tehlikeniz: Neptünyen İllüzyon", subtitle: "Aşırı Fedakarlık ve Kurban Rolü", desc: "<p>En büyük ilişkiniz tehlikesi, partnerinizi gözünüzde fazla büyütüp kendinizi feda etmenizdir. Sağlıklı sınırlar çizmelisiniz.</p>" }
    }
  },
  fortuneCareer: {
    title: "Şans Noktana Göre Girişimcilik Alanın",
    category: "Karakter",
    icon: "📈",
    description: "Doğum haritandaki Şans Noktasına göre kendi işini kurabileceğin alanı keşfet.",
    questions: [
      {
        question: "Bir iş kuracak olsanız hangisini tercih ederdiniz?",
        options: [
          { text: "Teknoloji, yazılım veya geleceğin inovatif projeleri.", category: "Teknoloji" },
          { text: "Tasarım, moda, güzellik veya lüks restoran.", category: "Estetik" },
          { text: "Eğitim, akademi, danışmanlık veya yayıncılık.", category: "Danismanlik" },
          { text: "Sağlık, organik tarım, şifa veya gıda sektörü.", category: "Sifa" }
        ]
      },
      {
        question: "İş hayatında sizi en çok ne motive eder?",
        options: [
          { text: "Kuralları yıkmak ve tamamen özgün bir marka olmak.", category: "Teknoloji" },
          { text: "Eserimin estetik olarak beğenilmesi ve lüks standartlar.", category: "Estetik" },
          { text: "İnsanların zihnini açmak ve onlara yol göstermek.", category: "Danismanlik" },
          { text: "İnsanların bedenine ve ruhuna şifa vermek.", category: "Sifa" }
        ]
      },
      {
        question: "Girişimci olarak en güçlü yönünüz hangisidir?",
        options: [
          { text: "Geleceğin trendlerini önceden görebilmem.", category: "Teknoloji" },
          { text: "Marka kalitesini ve estetik zevki yönetebilmem.", category: "Estetik" },
          { text: "İkna gücüm, hitabetim ve geniş sosyal çevrem.", category: "Danismanlik" },
          { text: "Sezgilerim, insan ilişkilerim ve sabrım.", category: "Sifa" }
        ]
      }
    ],
    results: {
      "Teknoloji": { icon: "💻", title: "Girişim Alanınız: Geleceğin Teknolojileri", subtitle: "Uranüs Şans Noktası", desc: "<p>Sizin şans noktanız yazılım, yapay zeka, alternatif enerji veya global inovatif girişimlerden büyük kazanç vaat ediyor.</p>" },
      "Estetik": { icon: "✨", title: "Girişim Alanınız: Lüks ve Tasarım", subtitle: "Venüs Şans Noktası", desc: "<p>Sizin şans noktanız moda, iç mimarlık, kozmetik, lüks marka yönetimi veya sanat ticareti alanında parlamanızı sağlayacaktır.</p>" },
      "Danismanlik": { icon: "🎤", title: "Girişim Alanınız: Eğitim ve Danışmanlık", subtitle: "Merkür/Jüpiter Şans Noktası", desc: "<p>Sizin şans noktanız eğitim kurumları, uluslararası ticaret, yayıncılık veya profesyonel koçluk/danışmanlık işlerinde başarı getirecektir.</p>" },
      "Sifa": { icon: "🌿", title: "Girişim Alanınız: Şifa ve Organik Yaşam", subtitle: "Ay/Neptün Şans Noktası", desc: "<p>Sizin şans noktanız sağlık, tıp, psikoloji, organik gıda veya doğa koruma projelerinde kendi işinizi kurmanızı destekliyor.</p>" }
    }
  },
  zodiacTravel: {
    title: "Kozmik Enerjine Göre Hangi Ülkeye Seyahat Etmelisin?",
    category: "Karakter",
    icon: "✈️",
    description: "Karakter elementine ve enerjine en uygun kozmik tatil ülkesini bul.",
    questions: [
      {
        question: "Bir seyahatte senin için en vazgeçilmez şey nedir?",
        options: [
          { text: "Adrenalin, macera ve keşfedilmemiş yollar.", category: "Izlanda" },
          { text: "Harika yemekler, lüks ve konforlu oteller.", category: "Italya" },
          { text: "Müzeler, yoğun tarih ve sürekli yeni bilgiler.", category: "Ingiltere" },
          { text: "Ruhsal tapınaklar, mistik hava ve sessizlik.", category: "Hindistan" }
        ]
      },
      {
        question: "Valizine ilk koyacağın şey hangisidir?",
        options: [
          { text: "Yürüyüş botlarım ve macera kıyafetlerim.", category: "Izlanda" },
          { text: "Şık kıyafetlerim ve fotoğraf makinem.", category: "Italya" },
          { text: "Kitaplarım ve gezi rehberim.", category: "Ingiltere" },
          { text: "Meditasyon günlüğüm ve rahat giysilerim.", category: "Hindistan" }
        ]
      },
      {
        question: "Sana en çok huzur veren coğrafya hangisidir?",
        options: [
          { text: "Aktif yanardağlar, buzullar ve vahşi doğa.", category: "Izlanda" },
          { text: "Üzüm bağları, tarihi şık köyler ve deniz kıyıları.", category: "Italya" },
          { text: "Kozmopolit şehirler, tarihi kütüphaneler.", category: "Ingiltere" },
          { text: "Ganj nehri kıyıları, mistik dağlar.", category: "Hindistan" }
        ]
      }
    ],
    results: {
      "Izlanda": { icon: "🇮🇸", title: "Kozmik Rotanız: İzlanda", subtitle: "Ateş ve Buzun Macera Ülkesi", desc: "<p>Kozmik enerjiniz İzlanda'nın aktif volkanları, buzulları ve aurora ışıklarıyla rezonans kuruyor. Vahşi doğada enerji bulacaksınız.</p>" },
      "Italya": { icon: "🇮🇹", title: "Kozmik Rotanız: İtalya", subtitle: "Estetik, Gurme ve Sanat", desc: "<p>Kozmik enerjiniz İtalya'nın zarafeti, şık kıyıları, gurme mutfağı ve Venüsyen tarihi ile rezonans kuruyor.</p>" },
      "Ingiltere": { icon: "🇬🇧", title: "Kozmik Rotanız: İngiltere", subtitle: "Tarih, Kütüphaneler ve Entelektüel Bilgi", desc: "<p>Kozmik enerjiniz İngiltere'nin köklü tarihi, kütüphaneleri ve entelektüel zihni ile rezonans kuruyor.</p>" },
      "Hindistan": { icon: "🇮🇳", title: "Kozmik Rotanız: Hindistan", subtitle: "Maneviyat ve Mistik Şifa", desc: "<p>Kozmik enerjiniz Hindistan'ın ruhani tapınakları, yoga merkezleri ve mistik havasıyla bütünleşiyor. Ruhsal arınma yaşayacaksınız.</p>" }
    }
  },
  moonPhaseLife: {
    title: "Yaşam Döngünde Hangi Ay Fazı Etkin?",
    category: "Ruhsal & Karma",
    icon: "🌓",
    description: "Şu anki ruhsal durumuna göre hayatının hangi hasat veya başlangıç döngüsünde olduğunu bul.",
    questions: [
      {
        question: "Şu anki hayatında kendini en çok hangi aşamada hissediyorsunuz?",
        options: [
          { text: "Yepyeni kararlar alıp hayatımı sıfırdan kurduğum bir eşikte.", category: "YeniAyFaz" },
          { text: "Aldığım kararları büyütmek için çok çalıştığım zorlu bir süreçte.", category: "BuyuyenFaz" },
          { text: "Emeklerimin sonucunu net bir şekilde gördüğüm, aydınlandığım zirvede.", category: "DolunayFaz" },
          { text: "Eski yükleri bırakıp içe çekildiğim, dinlendiğim olgun bir dönemde.", category: "BalsamikFaz" }
        ]
      },
      {
        question: "Şu an en çok neye ihtiyaç duyuyorsunuz?",
        options: [
          { text: "Cesaret ve yepyeni başlangıçlar yapacak heyecana.", category: "YeniAyFaz" },
          { text: "Sabır ve disiplinle çalışmaya devam etmeye.", category: "BuyuyenFaz" },
          { text: "Kendimle ve ilişkilerimle dürüstçe yüzleşmeye.", category: "DolunayFaz" },
          { text: "Ruhsal arınmaya, geçmişi bırakıp uyumaya.", category: "BalsamikFaz" }
        ]
      },
      {
        question: "Enerjiniz şu günlerde nasıl seyrediyor?",
        options: [
          { text: "Çocuksu bir sabırsızlık ve eylem isteği var.", category: "YeniAyFaz" },
          { text: "Odaklanmış, istikrarlı ama biraz yorgun.", category: "BuyuyenFaz" },
          { text: "Çok yüksek, göz önünde, duygusal dalgalanmalar yüksek.", category: "DolunayFaz" },
          { text: "İçe dönük, sessiz ve mistik konulara açık.", category: "BalsamikFaz" }
        ]
      }
    ],
    results: {
      "YeniAyFaz": { icon: "🌑", title: "Döngünüz: Yeni Ay Fazı", subtitle: "Sıfır Noktası ve Tohumlar", desc: "<p>Şu an yaşamınızda yepyeni bir sayfa açılıyor. Eski döngü bitti; şimdi cesurca yeni adımlar atma ve tohum ekme zamanıdır.</p>" },
      "BuyuyenFaz": { icon: "🌒", title: "Döngünüz: Büyüyen Ay Fazı", subtitle: "Emek ve Mücadele", desc: "<p>Şu an ektiğiniz tohumları büyütme zamanı. Zorluklar karşısında sabretmeli, disiplinle çalışmaya devam etmelisiniz. Hasat yakındır.</p>" },
      "DolunayFaz": { icon: "🌕", title: "Döngünüz: Dolunay Fazı", subtitle: "Hasat ve Büyük Farkındalık", desc: "<p>Şu an yaşamınızın aydınlanma zirvesindesiniz. Emeğinizin sonuçlarını görüyor, ilişkilerinizde büyük yüzleşmeler yaşıyorsunuz. Görünür olun.</p>" },
      "BalsamikFaz": { icon: "🌘", title: "Döngünüz: Balsamik (Karanlık) Ay", subtitle: "Arınma ve Bırakma", desc: "<p>Şu an dinlenme ve geçmişi temizleme zamanı. Yeni başlangıçlar yapmadan önce ruhunuzu dinlendirmeli, eski yükleri sevgiyle bırakmalısınız.</p>" }
    }
  },
  karmaSoul: {
    title: "Geçmiş Yaşamında Kimdin?",
    category: "Ruhsal & Karma",
    icon: "⏳",
    description: "Güney Ay Düğümüne ve ruh hafızana göre geçmiş enkarnasyonundaki rolünü bul.",
    questions: [
      {
        question: "Doğuştan sahip olduğun, hiç öğrenmeden yapabildiğin şey hangisidir?",
        options: [
          { text: "İnsanları yönetmek, kurallar koymak ve otorite kurmak.", category: "Yonetici" },
          { text: "Resim yapmak, tasarlamak veya güzellik katmak.", category: "Sanatci" },
          { text: "Yazı yazmak, bilgiyi saklamak veya öğretmenlik.", category: "Katip" },
          { text: "İnsanların acısını hissetmek, bitkilerle şifa yapmak.", category: "Sifaci" }
        ]
      },
      {
        question: "Dünyaya karşı hissettiğin en eski nostaljik bağ hangisidir?",
        options: [
          { text: "Antik saraylar, taht odaları ve zırhlar.", category: "Yonetici" },
          { text: "Sanat atölyeleri, tiyatrolar ve şık balolar.", category: "Sanatci" },
          { text: "Tozlu parşömenler, antik kütüphaneler.", category: "Katip" },
          { text: "Derin ormanlar, kulübeler ve şifalı otlar.", category: "Sifaci" }
        ]
      },
      {
        question: "Bu yaşamda en çok neden kaçınırsınız?",
        options: [
          { text: "Otorite altında ezilmekten, emir almaktan.", category: "Yonetici" },
          { text: "Sıradan, zevksiz ve çirkin ortamlarda kalmaktan.", category: "Sanatci" },
          { text: "Cahil insanlarla vakit kaybetmekten.", category: "Katip" },
          { text: "Şehir hayatının gürültüsünden ve kalabalıktan.", category: "Sifaci" }
        ]
      }
    ],
    results: {
      "Yonetici": { icon: "👑", title: "Geçmiş Rolünüz: Antik Yönetici/General", subtitle: "Otorite ve Güç Sahibi", desc: "<p>Geçmiş yaşamınızda orduları, sarayları veya büyük sistemleri yöneten bir otoriteydiniz. Bu yüzden bu yaşamda bağımsızlığınıza çok düşkünsünüz.</p>" },
      "Sanatci": { icon: "🎨", title: "Geçmiş Rolünüz: Saray Sanatçısı/Modacı", subtitle: "Zarafet ve Estetik Koruyucusu", desc: "<p>Geçmiş yaşamınızda saraylarda tasarımlar yapan, müzik veya resim üreten bir sanatçıydınız. Güzellik anlayışınız oradan geliyor.</p>" },
      "Katip": { icon: "📜", title: "Geçmiş Rolünüz: Mabet Katibi/Kütüphaneci", subtitle: "Kadim Bilgiyi Koruyan Bilge", desc: "<p>Geçmiş yaşamınızda kutsal tapınaklarda veya kütüphanelerde bilgiyi koruyan, parşömenler yazan bir rahiptiniz. Bilgiye olan aşkınız köklüdür.</p>" },
      "Sifaci": { icon: "🌿", title: "Geçmiş Rolünüz: Şaman/Doğa Şifacısı", subtitle: "Bitkilerin ve Ruhların Şifacısı", desc: "<p>Geçmiş yaşamınızda köylerde veya kabilelerde bitkilerin enerjisiyle insanları iyileştiren bir şamamdınız. Sezgileriniz oradan mirastır.</p>" }
    }
  },
  astrologyCrystalAşk: {
    title: "Aşkta Şanş Getiren Kristalin Hangisi?",
    category: "Aşk & İlişki",
    icon: "💎",
    description: "İlişkilerindeki tıkanıklıkları açacak ve ruh eşini çekecek şanslı taşını bul.",
    questions: [
      {
        question: "Aşk hayatınızda en çok hangi sorunu çözmek istersiniz?",
        options: [
          { text: "Kırgınlıkları bırakıp kalbimi sevgiye açmayı.", category: "PembeKuvars" },
          { text: "Aşkta daha cesur ve tutkulu adımlar atmayı.", category: "Karnelyan" },
          { text: "İlişkilerde zihinsel sakinlik ve doğru iletişim kurmayı.", category: "Lapis" },
          { text: "Toksik ilişkilerden ve nazardan korunmayı.", category: "SiyahTurmalin" }
        ]
      },
      {
        question: "İdeal sevgilinin sana hissettirmesini istediğin duygu hangisidir?",
        options: [
          { text: "Koşulsuz sevgi, şefkat ve değer.", category: "PembeKuvars" },
          { text: "Heyecan, sönmeyen bir tutku ve arzu.", category: "Karnelyan" },
          { text: "Dürüstlük, zihinsel uyum ve dostluk.", category: "Lapis" },
          { text: "Sarsılmaz bir güven ve sadakat koruması.", category: "SiyahTurmalin" }
        ]
      },
      {
        question: "Kristalini nerede taşımak istersin?",
        options: [
          { text: "Kalbime yakın bir kolye olarak.", category: "PembeKuvars" },
          { text: "Bileklik olarak, sürekli tenime dokunarak.", category: "Karnelyan" },
          { text: "Küpe olarak, sezgilerimi duymam için.", category: "Lapis" },
          { text: "Cebimde, koruyucu bir kalkan gibi.", category: "SiyahTurmalin" }
        ]
      }
    ],
    results: {
      "PembeKuvars": { icon: "💗", title: "Aşk Kristaliniz: Pembe Kuvars", subtitle: "Koşulsuz Sevgi ve Kalp Şifası", desc: "<p>Kalp çakranızı açarak geçmiş yaraları şifalandırır. Ruh eşinizi çekmek ve özdeğerinizi yükseltmek için pembe kuvars kolye takın.</p>" },
      "Karnelyan": { icon: "🧡", title: "Aşk Kristaliniz: Karnelyan (Akik)", subtitle: "Tutku, Cesaret ve Cazibe", desc: "<p>Sakral çakranızı uyararak çekiciliğinizi, yaşama sevincinizi ve aşkta cesurca adım atma iradenizi yükseltir.</p>" },
      "Lapis": { icon: "💙", title: "Aşk Kristaliniz: Lapis Lazuli", subtitle: "Dürüst İletişim ve Zihinsel Bağ", desc: "<p>Boğaz çakranızı açarak partnerinizle dürüst, net ve entelektüel konuşmalar kurmanızı destekler.</p>" },
      "SiyahTurmalin": { icon: "🖤", title: "Aşk Kristaliniz: Siyah Turmalin", subtitle: "Toksik Bağlardan Korunma", desc: "<p>İlişkilerinizde nazar, kıskançlık ve manipülatif enerjileri bloke ederek size sarsılmaz bir duygusal güvence sağlar.</p>" }
    }
  },
  venusSecret: {
    title: "Partnerinin Seni Çekici Bulma Sebebi?",
    category: "Aşk & İlişki",
    icon: "💖",
    description: "Venüs enerjine göre insanların sana aşık olmasını sağlayan gizli çekim gücünü bul.",
    questions: [
      {
        question: "Flört ederken en etkili silahın hangisidir?",
        options: [
          { text: "Cesur bakışlarım, özgüvenim ve enerjim.", category: "Karizma" },
          { text: "Sempatik, neşeli ve zeki sohbetlerim.", category: "Zeka" },
          { text: "Sakin, kaliteli ve gizemli havam.", category: "Gizem" },
          { text: "Şefkatim, yüksek empatim ve koruyucu yapım.", category: "Sefkat" }
        ]
      },
      {
        question: "İnsanlar senin yanındayken en çok neden etkilenir?",
        options: [
          { text: "Lider ruhumdan ve cesaretimden.", category: "Karizma" },
          { text: "Espri yeteneğimden ve neşeli zekamdan.", category: "Zeka" },
          { text: "Söylemediğim sırlarım ve derinliğimden.", category: "Gizem" },
          { text: "Onları ne kadar iyi dinleyip şifa verdiğimden.", category: "Sefkat" }
        ]
      },
      {
        question: "Aşkta yaydığın frekans hangisidir?",
        options: [
          { text: "Tutku ve heyecan.", category: "Karizma" },
          { text: "Eğlence ve entelektüel paylaşım.", category: "Zeka" },
          { text: "Cazibe ve derin sırlar.", category: "Gizem" },
          { text: "Huzur ve koşulsuz kabul.", category: "Sefkat" }
        ]
      }
    ],
    results: {
      "Karizma": { icon: "🔥", title: "Çekim Gücünüz: Canlı Karizma", subtitle: "Güneş/Mars Cazibesi", desc: "<p>İnsanlar sizin özgüveninize, cesaretinize ve girdiğiniz ortamı aydınlatan yaşam enerjinize aşık oluyor. Doğal bir lidersiniz.</p>" },
      "Zeka": { icon: "💡", title: "Çekim Gücünüz: Kıvrak Zeka ve Neşe", subtitle: "Merkür Cazibesi", desc: "<p>İnsanlar sizin sempatik, konuşkan, zeki yapınıza ve onları sürekli güldürebilen espri gücünüze hayran kalıyor.</p>" },
      "Gizem": { icon: "👁️", title: "Çekim Gücünüz: Büyüleyici Gizem", subtitle: "Plüton Cazibesi", desc: "<p>İnsanlar sizin ketum, derin ve sırlar dolu auranızdan etkileniyor. Sizi çözmek istemek onlar için durdurulamaz bir çekim yaratıyor.</p>" },
      "Sefkat": { icon: "🌊", title: "Çekim Gücünüz: Ruhsal Şefkat", subtitle: "Ay/Neptün Cazibesi", desc: "<p>İnsanlar sizin yüksek empatinize, onları yargısızca dinleyen şefkatli kalbinize ve yaydığınız ruhsal huzura aşık oluyor.</p>" }
    }
  },
  marsConflict: {
    title: "Mars Enerjine Göre Çatışmaları Nasıl Yönetirsin?",
    category: "Karakter",
    icon: "⚔️",
    description: "Doğum haritandaki Mars konumuna göre stres ve kavga anlarındaki savunma mekanizmanı bul.",
    questions: [
      {
        question: "Biri sana haksızlık yaptığında verdiğin ilk tepki ne olur?",
        options: [
          { text: "Hemen sesimi yükseltir, hakkımı doğrudan ararım.", category: "MarsAtes1" },
          { text: "Sakin kalır, durumu analiz edip mantıkla yaklaşırım.", category: "MarsToprak1" },
          { text: "Lafımla onu ezer, tartışmayı zihinsel olarak kazanırım.", category: "MarsHava1" },
          { text: "Sessizce geri çekilir, ona içten içe kırılırım.", category: "MarsSu1" }
        ]
      },
      {
        question: "Öfken geçtikten sonra nasıl hissedersin?",
        options: [
          { text: "Hemen unuturum, kin tutmam.", category: "MarsAtes1" },
          { text: "Uzun süre mesafeli kalır, güvenimi geri kazanmasını beklerim.", category: "MarsToprak1" },
          { text: "Konuyu zihnimde sürekli analiz eder, tartışmayı tekrar yaşarım.", category: "MarsHava1" },
          { text: "Geçmiş kırgınlıkları asla unutmam, içimde saklarım.", category: "MarsSu1" }
        ]
      },
      {
        question: "Sana göre haklı çıkmak ne demektir?",
        options: [
          { text: "İrademi ve gücümü herkese göstermek.", category: "MarsAtes1" },
          { text: "Somut delillerle haklılığımı kanıtlamak.", category: "MarsToprak1" },
          { text: "Tartışmayı mantıklı argümanlarla çürütmek.", category: "MarsHava1" },
          { text: "Karşımdakinin vicdan azabı çekmesini sağlamak.", category: "MarsSu1" }
        ]
      }
    ],
    results: {
      "MarsAtes1": { icon: "🔥", title: "Çatışma Tarzınız: Doğrudan Patlama", subtitle: "Ateş Mars İradesi", desc: "<p>Kavgaları doğrudan, cesurca ve sabırsızca yönetirsiniz. Samimisiniz ama öfkenizi kontrol etmeyi, sakinleşmeyi öğrenmelisiniz.</p>" },
      "MarsToprak1": { icon: "🌱", title: "Çatışma Tarzınız: Soğukkanlı Sabır", subtitle: "Toprak Mars İradesi", desc: "<p>Kolay kolay sinirlenmezsiniz ama öfkelendiğinizde sarsılmaz bir duvar örersiniz. Karşı tarafın güveninizi kazanması çok zordur.</p>" },
      "MarsHava1": { icon: "⚡", title: "Çatışma Tarzınız: Kelime Savaşı", subtitle: "Hava Mars İradesi", desc: "<p>Tartışmaları kelimelerinizle ve zekanızla yönetirsiniz. Laf sokmakta ve argümanlarla karşı tarafı çürütmekte ustasınızdır.</p>" },
      "MarsSu1": { icon: "💧", title: "Çatışma Tarzınız: Pasif Direniş", subtitle: "Su Mars İradesi", desc: "<p>Öfkenizi doğrudan gösteremezsiniz. İçinize atarak pasif-agresif tepkiler verirsiniz. Duygularınızı dürüstçe konuşmalısınız.</p>" }
    }
  },
  saturnLesson: {
    title: "Satürn Sınavına Göre En Büyük Engelin?",
    category: "Ruhsal & Karma",
    icon: "♄",
    description: "Doğum haritandaki öğretmen Satürn'ün sana bu yaşamda verdiği en büyük dersi bul.",
    questions: [
      {
        question: "Hayatında en çok hangi alanda sürekli gecikmeler ve engeller yaşıyorsun?",
        options: [
          { text: "Kendime güvenmekte ve inisiyatif almakta.", category: "KocSaturn" },
          { text: "Maddi güvence kurmakta ve kendi değerimi bilmekte.", category: "BoğaSaturn" },
          { text: "Yakın çevreyle iletişim kurmakta, fikirlerimi anlatmakta.", category: "İkizlerSaturn" },
          { text: "Duygusal bağ kurmakta ve yuvada hissetmekte.", category: "YengecSaturn" }
        ]
      },
      {
        question: "Bu engeli aşmak için en çok neye ihtiyaç duyarsın?",
        options: [
          { text: "Korkusuzca ilk adımı atıp cesur olmaya.", category: "KocSaturn" },
          { text: "Sabırla birikim yapıp kendi ayaklarım üzerinde durmaya.", category: "BoğaSaturn" },
          { text: "Daha çok okumaya, yazmaya ve kendimi doğru ifade etmeye.", category: "İkizlerSaturn" },
          { text: "Geçmiş yaralarımı affedip kalbimi açmaya.", category: "YengecSaturn" }
        ]
      },
      {
        question: "Satürn size göre neyi temsil eder?",
        options: [
          { text: "Bireysel cesaret sınavını.", category: "KocSaturn" },
          { text: "Maddi dünyada ustalaşma dersini.", category: "BoğaSaturn" },
          { text: "Zihinsel olgunlaşma sınavını.", category: "İkizlerSaturn" },
          { text: "Duygusal olgunluğa ulaşma dersini.", category: "YengecSaturn" }
        ]
      }
    ],
    results: {
      "KocSaturn": { icon: "♈", title: "Satürn Sınavınız: Özgüven ve Cesaret", subtitle: "Özgüveni İnşa Etmek", desc: "<p>En büyük sınavınız kendinize inanmaktır. Korkularınızın üzerine cesaretle giderek iradenizi kanıtlamayı öğrenmelisiniz.</p>" },
      "BoğaSaturn": { icon: "♉", title: "Satürn Sınavınız: Maddi İstikrar", subtitle: "Değersizlik Hissini Aşmak", desc: "<p>En büyük sınavınız para ve özdeğerdir. Maddi dünyada sabırla çalışmalı, kendi değerinizi başkalarının parasıyla ölçmemelisiniz.</p>" },
      "İkizlerSaturn": { icon: "♊", title: "Satürn Sınavınız: İletişim ve Zihin", subtitle: "Kelimelerin Sorumluluğu", desc: "<p>En büyük sınavınız zihniniz ve konuşmalarınızdır. Fikirlerinizi korkmadan paylaşmalı, zihinsel dağınıklığı disipline etmelisiniz.</p>" },
      "YengecSaturn": { icon: "♋", title: "Satürn Sınavınız: Duygusal Katılık", subtitle: "Kalbini Yumuşatmak", desc: "<p>En büyük sınavınız duygularınızdır. Kendinizi korumak için ördüğünüz soğuk duvarları yıkarak sevdiklerinize şefkat göstermeyi öğrenmelisiniz.</p>" }
    }
  },
  neptuneDream: {
    title: "Rüyalarının Arkasındaki Neptünyen İlham?",
    category: "Ruhsal & Karma",
    icon: "🌊",
    description: "Doğum haritandaki hayaller ve bilinçaltı gezegeni Neptün'ün rüyalarına etkisini bul.",
    questions: [
      {
        question: "Rüyalarınız genellikle nasıl bir atmosfere sahiptir?",
        options: [
          { text: "Çok parlak, fantastik ve uçtuğum rüyalar.", category: "FanteziRüya" },
          { text: "Korkutucu, sırlar ve dedektiflik içeren rüyalar.", category: "KabusRüya" },
          { text: "Gelecekte aynen çıkan veya haberci olan rüyalar.", category: "HaberciRüya" },
          { text: "Uyumlu, sevdiklerimle huzurlu olduğum rüyalar.", category: "HuzurRüya" }
        ]
      },
      {
        question: "Uyanır uyanmaz rüyalarınız hakkında ne yaparsınız?",
        options: [
          { text: "Hemen hayal gücümü tetikler, yeni fikirler türetirim.", category: "FanteziRüya" },
          { text: "Zihnimde analiz eder, ne anlama geldiğini araştırırım.", category: "KabusRüya" },
          { text: "Günlüğüme yazar, gelecekteki çıkma ihtimalini beklerim.", category: "HaberciRüya" },
          { text: "Sessizce hisseder, günün enerjisine odaklanırım.", category: "HuzurRüya" }
        ]
      },
      {
        question: "Rüya dünyası sizin için neyi ifade eder?",
        options: [
          { text: "Sınırsız yaratıcılık havuzunu.", category: "FanteziRüya" },
          { text: "Bilinçaltımın çözülmesi gereken şifrelerini.", category: "KabusRüya" },
          { text: "Ruhsal rehberlerimin benimle konuşma şeklini.", category: "HaberciRüya" },
          { text: "Zihnimin ve bedenimin dinlenme sığınağını.", category: "HuzurRüya" }
        ]
      }
    ],
    results: {
      "FanteziRüya": { icon: "🦄", title: "Neptün İlhamınız: Fantastik Sanat", subtitle: "Sınırsız Hayal Gücü", desc: "<p>Rüyalarınız size yaratıcı sanatlar, müzik ve yazarlık için sınırsız ilham kaynağı sunuyor. Rüyalarınızı sanatla gerçeğe dönüştürün.</p>" },
      "KabusRüya": { icon: "🕵️", title: "Neptün İlhamınız: Bilinçaltı Dedektifi", subtitle: "Psikolojik Çözümleme", desc: "<p>Rüyalarınız bilinçaltınızdaki gizli korkuları temizliyor. Rüyalarınızın şifrelerini çözerek psikolojik olarak dönüşebilirsiniz.</p>" },
      "HaberciRüya": { icon: "🔮", title: "Neptün İlhamınız: Durugörü Kapısı", subtitle: "Geleceğin Haberleri", desc: "<p>Rüyalarınız ruhsal rehberlerinizin size mesaj iletme şeklidir. Haberci rüyalar görüyorsunuz; rüya günlüğü tutmalısınız.</p>" },
      "HuzurRüya": { icon: "🌸", title: "Neptün İlhamınız: Ruhsal Dinlenme", subtitle: "Aura Şifası", desc: "<p>Rüyalarınız uykuda ruhunuzu ve auranızı şifalandırıyor. Sabahları huzurla uyanmak sizin en doğal kozmik hakkınızdır.</p>" }
    }
  },
  zodiacMotto: {
    title: "Ruhunun Zodyaktaki Gerçek Mottosu?",
    category: "Karakter",
    icon: "🗣️",
    description: "Karakter yapını ve ruhsal amacını özetleyen kozmik mottonu keşfet.",
    questions: [
      {
        question: "Seni hayatta en iyi özetleyen eylem hangisidir?",
        options: [
          { text: "Cesurca başlatmak ve savaşmak.", category: "KocMotto" },
          { text: "Sabırla köklenmek ve üretmek.", category: "BoğaMotto" },
          { text: "Merakla öğrenmek ve anlatmak.", category: "İkizlerMotto" },
          { text: "Sezgilerimle hissetmek ve şifa vermek.", category: "BalıkMotto" }
        ]
      },
      {
        question: "Hayattaki en büyük zaferin ne olmasını istersin?",
        options: [
          { text: "Kimsenin cesaret edemediği hedeflere ulaşmak.", category: "KocMotto" },
          { text: "Kendi maddi ve manevi kalemi inşa etmek.", category: "BoğaMotto" },
          { text: "Kozmik hakikati öğrenip insanlara öğretmek.", category: "İkizlerMotto" },
          { text: "Ruhsal olarak huzura ulaşıp koşulsuz sevmek.", category: "BalıkMotto" }
        ]
      },
      {
        question: "Ruhunu en iyi tanımlayan cümle hangisidir?",
        options: [
          { text: "Ben başlatırım ve kazanırım.", category: "KocMotto" },
          { text: "Ben biriktirir ve korurum.", category: "BoğaMotto" },
          { text: "Ben öğrenir ve paylaşırım.", category: "İkizlerMotto" },
          { text: "Ben hisseder ve şifalandırırım.", category: "BalıkMotto" }
        ]
      }
    ],
    results: {
      "KocMotto": { icon: "♈", title: "Kozmik Mottonuz: 'Başlatırım ve Savaşırım'", subtitle: "Ateş Gücü Mottosu", desc: "<p>Ruhunuzun mottosu cesaretle başlatmaktır. Hayatta engellerle savaşarak gücünüzü kanıtlamak sizin yaşam amacınızdır.</p>" },
      "BoğaMotto": { icon: "♉", title: "Kozmik Mottonuz: 'İnşa Eder ve Korurum'", subtitle: "Toprak Gücü Mottosu", desc: "<p>Ruhunuzun mottosu köklenmektir. Maddi ve manevi değerler yaratmak, sadık kalmak ve korumak sizin can damarınızdır.</p>" },
      "İkizlerMotto": { icon: "♊", title: "Kozmik Mottonuz: 'Merak Eder ve Paylaşırım'", subtitle: "Hava Gücü Mottosu", desc: "<p>Ruhunuzun mottosu öğrenmektir. Dünyayı merakla keşfetmek, bağlar kurmak ve bilgiyi kitlelere yaymak sizin amacınızdır.</p>" },
      "BalıkMotto": { icon: "♓", title: "Kozmik Mottonuz: 'Hisseder ve Şifalandırırım'", subtitle: "Su Gücü Mottosu", desc: "<p>Ruhunuzun mottosu şifadır. Koşulsuz sevmek, sezgilere güvenmek ve dünyadaki acıları dindirmek sizin ruhsal misyonunuzdur.</p>" }
    }
  },
  toxicZodiacAşk: {
    title: "Aşkta Seni Sömüren Toksik Çekim?",
    category: "Aşk & İlişki",
    icon: "🦂",
    description: "Aşk hayatında mantığına aykırı olsa da seni kendine çeken toksik burç arketipini bul.",
    questions: [
      {
        question: "Aşkta en çok hangi hatalı çekime kapılırsın?",
        options: [
          { text: "Beni umursamayan, aşırı özgür ve serseri tiplere.", category: "UranusToksik" },
          { text: "Beni tamamen kontrol etmeye çalışan, aşırı kıskanç tiplere.", category: "PlutoToksik" },
          { text: "Bana yalan söyleyen, kurtarılmayı bekleyen melankolik tiplere.", category: "NeptunToksik" },
          { text: "Beni sürekli eleştiren, soğuk ve mesafeli tiplere.", category: "SaturnToksik" }
        ]
      },
      {
        question: "İlişkide seni en çok ne yorar?",
        options: [
          { text: "Sürekli terk edilme korkusuyla yaşamak.", category: "UranusToksik" },
          { text: "Güç savaşları ve kıskançlık krizleriyle boğuşmak.", category: "PlutoToksik" },
          { text: "Partnerimin sorunlarını çözmekten kendimi unutmam.", category: "NeptunToksik" },
          { text: "Kendimi yetersiz hissetmek ve onay alamamak.", category: "SaturnToksik" }
        ]
      },
      {
        question: "Bu toksik çekimi aşmak için neye ihtiyaç duyarsın?",
        options: [
          { text: "Kendime ait bağımsız bir hayat kurmaya.", category: "UranusToksik" },
          { text: "Kontrolü bırakıp güvenli bağlar kurmaya.", category: "PlutoToksik" },
          { text: "Kurban rolünden çıkıp sağlıklı sınırlar çizmeye.", category: "NeptunToksik" },
          { text: "Özdeğerimi yükseltip kendimi sevmeye.", category: "SaturnToksik" }
        ]
      }
    ],
    results: {
      "UranusToksik": { icon: "⚡", title: "Toksik Çekiminiz: Kaçan Serseri", subtitle: "Kova/Uranüs Çekimi", desc: "<p>Aşkta sizi en çok çeken ama sonunda sömüren tip, bağlanmaktan kaçan asilerdir. Özgürlük maskesi altındaki soğukluk sizi yorar.</p>" },
      "PlutoToksik": { icon: "🦂", title: "Toksik Çekiminiz: Karanlık Manipülatör", subtitle: "Akrep/Plüton Çekimi", desc: "<p>Aşkta sizi kendine çeken ama yıpratan tip, sahiplenici kontrolcülerdir. Tutku adı altındaki manipülasyonlar enerjinizi sömürür.</p>" },
      "NeptunToksik": { icon: "🌫️", title: "Toksik Çekiminiz: Kurtarılmayı Bekleyen Melankolik", subtitle: "Balık/Neptün Çekimi", desc: "<p>Aşkta sizi sömüren tip, kurban rolü oynayan melankoliklerdir. Onları kurtarmaya çalışırken kendi hayatınızı feda edersiniz.</p>" },
      "SaturnToksik": { icon: "♄", title: "Toksik Çekiminiz: Soğuk Yargıç", subtitle: "Oğlak/Satürn Çekimi", desc: "<p>Aşkta sizi yoran tip, sürekli kusur arayan mesafeli tiplerdir. Onların onayını almaya çalışırken özgüveninizi kaybedersiniz.</p>" }
    }
  },
  starseedMission: {
    title: "Yıldız Tohumu Olarak Dünyadaki Misyonun?",
    category: "Ruhsal & Karma",
    icon: "🌌",
    description: "Bu enkarnasyonunda dünyaya getirdiğin kozmik ruhsal misyonunu keşfet.",
    questions: [
      {
        question: "Dünyada en çok hangi enerjiyi eksik hissediyorsun?",
        options: [
          { text: "Sevgi, şefkat ve empati.", category: "SevgiMisyon" },
          { text: "Bilinç, zihinsel uyanış ve bilgi.", category: "UyanisMisyon" },
          { text: "Adalet, cesaret ve koruyuculuk.", category: "KorumaMisyon" },
          { text: "Doğayla bağ kurma, beden şifası.", category: "SifaMisyon" }
        ]
      },
      {
        question: "İnsanlığa sunabileceğiniz en büyük katkı hangisidir?",
        options: [
          { text: "Onların kalplerini yumuşatmak ve şefkat göstermek.", category: "SevgiMisyon" },
          { text: "Yeni fikirler üretip onları cehaletten kurtarmak.", category: "UyanisMisyon" },
          { text: "Haksızlıklara karşı durup düzen kurmak.", category: "KorumaMisyon" },
          { text: "Bedenlerini ve toprak anamızı şifalandırmak.", category: "SifaMisyon" }
        ]
      },
      {
        question: "Ruhsal misyonunuzu en iyi hangi kelime özetler?",
        options: [
          { text: "Şefkat.", category: "SevgiMisyon" },
          { text: "Uyanış.", category: "UyanisMisyon" },
          { text: "Adalet.", category: "KorumaMisyon" },
          { text: "Bütünleşme.", category: "SifaMisyon" }
        ]
      }
    ],
    results: {
      "SevgiMisyon": { icon: "✨", title: "Ruhsal Misyonunuz: Koşulsuz Sevgi Taşıyıcısı", subtitle: "Pleiades Frekansı", desc: "<p>Dünyadaki misyonunuz kalpleri iyileştirmektir. Kabalığa ve sevgisizliğe karşı şefkat yaymak sizin kozmik görevinizdir.</p>" },
      "UyanisMisyon": { icon: "🛸", title: "Ruhsal Misyonunuz: Bilinç Uyanış Öncüsü", subtitle: "Andromeda Frekansı", desc: "<p>Dünyadaki misyonunuz zihinleri açmaktır. İnsanlara yeni fikirler, teknolojik vizyonlar ve kalıpları kıran uyanışlar getirmek için buradasınız.</p>" },
      "KorumaMisyon": { icon: "🛡️", title: "Ruhsal Misyonunuz: Kozmik Adalet Koruyucusu", subtitle: "Orion Frekansı", desc: "<p>Dünyadaki misyonunuz haksızlıklara karşı durmak ve zayıfları korumaktır. Cesaretinizle topluma liderlik etmelisiniz.</p>" },
      "SifaMisyon": { icon: "🌿", title: "Ruhsal Misyonunuz: Doğa ve Beden Şifacısı", subtitle: "Sirius Frekansı", desc: "<p>Dünyadaki misyonunuz toprak anamızı ve insan bedenini şifalandırmaktır. Doğal tarım, bitkisel şifa ve kristaller sizin alanınızdır.</p>" }
    }
  },
  zodiacShadowSide: {
    title: "Karanlık Gölge Kişiliğin Nedir?",
    category: "Karakter",
    icon: "👤",
    description: "Jungian psikolojisi ve astroloji ışığında yüzleşmekten kaçındığın gölge yönünü bul.",
    questions: [
      {
        question: "İnsanlarda seni en çok çileden çıkaran davranış hangisidir?",
        options: [
          { text: "Bencil olmaları ve sadece kendilerini düşünmeleri.", category: "BencillikGolge" },
          { text: "Aşırı kontrolcü ve kibirli olmaları.", category: "KibirGolge" },
          { text: "Sorumsuz olmaları ve sürekli kaçmaları.", category: "KacisGolge" },
          { text: "Duygusuz, soğuk ve mesafeli davranmaları.", category: "SoguklukGolge" }
        ]
      },
      {
        question: "Biri seni eleştirdiğinde içindeki ilk tepki genellikle hangisidir?",
        options: [
          { text: "Hırçınlaşır ve hemen savunmaya geçerim.", category: "BencillikGolge" },
          { text: "Belli etmem ama içten içe intikam planı yaparım.", category: "KibirGolge" },
          { text: "Önemsememiş gibi yapıp konuyu değiştiririm.", category: "KacisGolge" },
          { text: "Tamamen mantık duvarları örüp mesafemi koyarım.", category: "SoguklukGolge" }
        ]
      },
      {
        question: "Kendi içinde en çok hangi duyguyla yüzleşmekte zorlanırsın?",
        options: [
          { text: "Öfke ve sabırsızlık.", category: "BencillikGolge" },
          { text: "Kıskançlık ve güçsüz görünme korkusu.", category: "KibirGolge" },
          { text: "Başarısızlık ve reddedilme acısı.", category: "KacisGolge" },
          { text: "Duygusal olarak savunmasız kalma endişesi.", category: "SoguklukGolge" }
        ]
      }
    ],
    results: {
      "BencillikGolge": { icon: "🌋", title: "Gölgeniz: Dürtüsel Hırçınlık", subtitle: "Koç/Mars Gölgesi", desc: "<p>Gölge yönünüz öfke patlamaları ve sabırsızlıktır. Haklı çıkmak için yıkıcı davranmaktan kaçınmalı, içsel barışı bulmalısınız.</p>" },
      "KibirGolge": { icon: "👑", title: "Gölgeniz: Gizli Kibir ve Kontrol", subtitle: "Aslan/Akrep Gölgesi", desc: "<p>Gölge yönünüz her şeyi kontrol etme arzusu ve gizli kibirdir. Kusursuz görünmeye çalışmak yerine kırılganlığınızı kabul etmelisiniz.</p>" },
      "KacisGolge": { icon: "🌫️", title: "Gölgeniz: Kararsız Kaçış", subtitle: "İkizler/Terazi Gölgesi", desc: "<p>Gölge yönünüz krizlerden kaçmak ve sorumluluk almamaktır. İnsanları memnun etmek için kendi doğrularınızı feda etmemelisiniz.</p>" },
      "SoguklukGolge": { icon: "❄️", title: "Gölgeniz: Duygusal Katılık", subtitle: "Oğlak/Satürn Gölgesi", desc: "<p>Gölge yönünüz insanlara duygusal duvarlar örmektir. İncitilmekten korktuğunuz için soğuk davranmayı bırakıp sevgiyi kabul etmelisiniz.</p>" }
    }
  },
  zodiacLeadership: {
    title: "Hangi Liderlik Arketipine Sahipsin?",
    category: "Karakter",
    icon: "👔",
    description: "Bir gruptayken veya iş hayatındayken takındığın doğal liderlik rolünü keşfet.",
    questions: [
      {
        question: "Bir kriz anında ekibine karşı nasıl bir duruş sergilersin?",
        options: [
          { text: "Hemen inisiyatif alır, komutayı elime alırım.", category: "OtoriterLider" },
          { text: "Herkesin fikrini dinler, ortak paydada buluşurum.", category: "DemokratLider" },
          { text: "Sakinleşip verileri ve mantıklı çözümleri sunarım.", category: "AnalitikLider" },
          { text: "Ekibimin duygusal durumunu rahatlatmaya odaklanırım.", category: "SefkatliLider" }
        ]
      },
      {
        question: "İnsanları motive etmek için en çok neyi kullanırsın?",
        options: [
          { text: "Vizyonumu ve coşkumu.", category: "OtoriterLider" },
          { text: "Birliktelik duygusunu ve diplomasiyi.", category: "DemokratLider" },
          { text: "Doğru planları ve mantıklı hedefleri.", category: "AnalitikLider" },
          { text: "Empatiyi ve onlara değer verdiğimi göstermeyi.", category: "SefkatliLider" }
        ]
      },
      {
        question: "Sana göre başarılı bir liderin en önemli özelliği nedir?",
        options: [
          { text: "Cesur adımlar atabilmesi ve öncülük etmesi.", category: "OtoriterLider" },
          { text: "Adil olması ve ekibini dinlemesi.", category: "DemokratLider" },
          { text: "Stratejik düşünebilmesi ve hata yapmaması.", category: "AnalitikLider" },
          { text: "Ekibine ilham verip onları koruması.", category: "SefkatliLider" }
        ]
      }
    ],
    results: {
      "OtoriterLider": { icon: "🗡️", title: "Liderliğiniz: Cesur Öncü", subtitle: "Ateş Elementi Liderliği", desc: "<p>İnisiyatif alan, cesur ve vizyoner bir lidersiniz. Ekibinizi coşkuyla sürüklersiniz ancak başkalarının hızına saygı duymayı öğrenmelisiniz.</p>" },
      "DemokratLider": { icon: "🤝", title: "Liderliğiniz: Dengeleyici Diplomat", subtitle: "Hava Elementi Liderliği", desc: "<p>Adil, paylaşımcı ve iletişime açık bir lidersiniz. Herkesin kendini değerli hissetmesini sağlarsınız. Karar anlarında daha net olmalısınız.</p>" },
      "AnalitikLider": { icon: "📈", title: "Liderliğiniz: Stratejik Mimar", subtitle: "Toprak Elementi Liderliği", desc: "<p>Mantıklı, planlı ve hedefe odaklı bir lidersiniz. Krizleri verilerle yönetirsiniz. Ekibinize karşı bazen daha esnek olmalısınız.</p>" },
      "SefkatliLider": { icon: "💖", title: "Liderliğiniz: İlham Veren Koruyucu", subtitle: "Su Elementi Liderliği", desc: "<p>Empati gücü yüksek, şefkatli ve destekleyici bir lidersiniz. Ekibinizin manevi bağlarını güçlü tutarsınız. Profesyonel sınırları korumalısınız.</p>" }
    }
  },
  zodiacIntroExtro: {
    title: "İçe Dönük mü Dışa Dönük müsün?",
    category: "Karakter",
    icon: "🔋",
    description: "Kozmik haritandaki element dengesine göre enerjini nereden şarj ettiğini bul.",
    questions: [
      {
        question: "Yoğun ve yorucu bir haftadan sonra enerjini en iyi nasıl toplarsın?",
        options: [
          { text: "Evimde yalnız kalıp film izleyerek veya uyuyarak.", category: "IceDonuk" },
          { text: "Yakın bir dostumla sakin ve derin bir kahve sohbetiyle.", category: "DengeliMizac" },
          { text: "Kalabalık bir arkadaş grubuna katılıp eğlenerek.", category: "DisaDonuk" },
          { text: "Doğada tek başıma veya keşif gezileri yaparak.", category: "MaceraMizac" }
        ]
      },
      {
        question: "Yeni insanlarla tanıştığın bir sosyal ortamda nasılsındır?",
        options: [
          { text: "Genelde izleyici kalırım, konuşulmadıkça söze girmem.", category: "IceDonuk" },
          { text: "Sakin ve nazikçe sohbet ederim, gözlem yaparım.", category: "DengeliMizac" },
          { text: "Hemen kaynaşır, sohbeti başlatır ve ortamı canlandırırım.", category: "DisaDonuk" },
          { text: "İlginç insanlarla derin ve felsefi konulara dalarım.", category: "MaceraMizac" }
        ]
      },
      {
        question: "Düşüncelerini genellikle nasıl işlersin?",
        options: [
          { text: "Kendi içimde uzun uzun düşünür, sonra karar veririm.", category: "IceDonuk" },
          { text: "Gerektiği kadar düşünür, mantığıma güvenirim.", category: "DengeliMizac" },
          { text: "Sesli düşünürüm, insanlarla konuşurken fikirlerim netleşir.", category: "DisaDonuk" },
          { text: "İlham anlarını ve iç sesimi takip ederim.", category: "MaceraMizac" }
        ]
      }
    ],
    results: {
      "IceDonuk": { icon: "🔌", title: "Mizacınız: Korunaklı İçe Dönük", subtitle: "Toprak & Su Enerjisi", desc: "<p>Enerjinizi kendi iç dünyanızdan alıyorsunuz. Yalnızlık sizin için bir ceza değil, en büyük şifa ve yaratıcılık kaynağıdır.</p>" },
      "DengeliMizac": { icon: "⚖️", title: "Mizacınız: Dengeli Ambiwert", subtitle: "Dengeli Element Dağılımı", desc: "<p>Hem yalnız kalmaktan hem de sosyal ortamlardan keyif alıyorsunuz. Enerjinizi iki durum arasında mükemmel şekilde dengeliyorsunuz.</p>" },
      "DisaDonuk": { icon: "⚡", title: "Mizacınız: Sosyal Dışa Dönük", subtitle: "Ateş & Hava Enerjisi", desc: "<p>Enerjinizi insanlarla iletişimden ve hareketten alıyorsunuz. Yalnız kalmak enerjinizi düşürebilir; paylaştıkça çoğalıyorsunuz.</p>" },
      "MaceraMizac": { icon: "🌍", title: "Mizacınız: Özgür Gezgin", subtitle: "Jüpiter/Yay Etkisi", desc: "<p>Sınırları sevmeyen, keşif odaklı bir mizacınız var. Sosyallikten ziyade yenilikler, yollar ve felsefeler enerjinizi tazeler.</p>" }
    }
  },
  zodiacEmpati: {
    title: "Empati Seviyen ve Korunma Tarzın",
    category: "Karakter",
    icon: "🛡️",
    description: "Başkalarının enerjilerini ne kadar emdiğini ve auranı nasıl koruduğunu test et.",
    questions: [
      {
        question: "Üzgün veya öfkeli bir insanın yanına gittiğinde ne hissedersin?",
        options: [
          { text: "Onun acısını veya öfkesini bedenimde hissederim, enerjim düşer.", category: "YuksekEmpat" },
          { text: "Üzülürüm ama kendi duygusal dengemi korumayı bilirim.", category: "DengeliEmpat" },
          { text: "Mantıklı çözümler üretmeye odaklanırım, duygusal etkilenmem.", category: "ZihinselEmpat" },
          { text: "Enerjimi sömüreceğini hissedersem anında uzaklaşırım.", category: "KalkanEmpat" }
        ]
      },
      {
        question: "Filmlerdeki acıklı sahnelere tepkin genellikle nasıldır?",
        options: [
          { text: "Karakterin yerine kendimi koyup gözyaşlarına boğulurum.", category: "YuksekEmpat" },
          { text: "Duygulanırım ama bunun bir kurgu olduğunu hatırlarım.", category: "DengeliEmpat" },
          { text: "Senaryoyu ve oyunculuğu analiz etmeye başlarım.", category: "ZihinselEmpat" },
          { text: "Duygusal olarak yorulmamak için bu tarz filmleri izlemem.", category: "KalkanEmpat" }
        ]
      },
      {
        question: "Enerjini tüketen insanlara karşı nasıl önlem alırsın?",
        options: [
          { text: "Sınır çizmekte zorlanırım, genelde onları dinlemeye devam ederim.", category: "YuksekEmpat" },
          { text: "Nazikçe mesafe koyar ve kendi alanıma çekilirim.", category: "DengeliEmpat" },
          { text: "İlişkiyi mantıklı düzeyde tutar, kişiselleştirmem.", category: "ZihinselEmpat" },
          { text: "Aramı tamamen keser, auranın sınırlarını sert çizerim.", category: "KalkanEmpat" }
        ]
      }
    ],
    results: {
      "YuksekEmpat": { icon: "🌊", title: "Empatiniz: Sünger Empat (Aşırı Duyarlı)", subtitle: "Neptün/Su Rezonansı", desc: "<p>Çevrenizdeki tüm enerjileri sünger gibi emiyorsunuz. Kendinizi korumak için tuz banyoları yapmalı ve zihinsel koruma kalkanları kurmalısınız.</p>" },
      "DengeliEmpat": { icon: "🌸", title: "Empatiniz: Dengeli Şifacı", subtitle: "Kalp Çakrası Dengesi", desc: "<p>İnsanları derinden anlıyor ama onların yüklerini taşımıyorsunuz. Hem empati kurup hem de auranızı koruyabilen nadir insanlardansınız.</p>" },
      "ZihinselEmpat": { icon: "💡", title: "Empatiniz: Bilişsel Analizci", subtitle: "Merkür/Hava Rezonansı", desc: "<p>Duygusal olarak sürüklenmek yerine, insanları akıl yoluyla anlıyorsunuz. Sorunlara pratik ve mantıklı çözümler sunma gücünüz yüksektir.</p>" },
      "KalkanEmpat": { icon: "🛡️", title: "Empatiniz: Aura Kalkanı", subtitle: "Satürn/Akrep Korunması", desc: "<p>Enerjinizi sömürmeye çalışan insanları anında seziyor ve araya aşılmaz sınırlar koyuyorsunuz. Güvenliğiniz sizin için en üst sıradadır.</p>" }
    }
  },
  zodiacStres: {
    title: "Stres Anındaki Savunma Mekanizman?",
    category: "Karakter",
    icon: "🌪️",
    description: "Kozmik baskı ve yoğun stres altındayken ilkel zihninin verdiği savunma tepkisini bul.",
    questions: [
      {
        question: "Beklenmedik çok büyük bir sorunla karşılaştığında ilk ne yaparsın?",
        options: [
          { text: "Hemen öfkelenir, sorunu çözmek için kavgaya girişirim.", category: "SavasTepkisi" },
          { text: "Paniklerim, sorundan kaçıp uzaklaşmanın yollarını ararım.", category: "KacTepkisi" },
          { text: "Şok geçiririm, ne yapacağımı bilemeden kalakalırım.", category: "DonTepkisi" },
          { text: "Herkesi sakinleştirmeye çalışıp durumu idare etmeye odaklanırım.", category: "UyumTepkisi" }
        ]
      },
      {
        question: "Yoğun stres altındayken uykuların nasıl etkilenir?",
        options: [
          { text: "Uykusuz kalırım, beynim sürekli çözüm üretmeye çalışır.", category: "SavasTepkisi" },
          { text: "Kabuslar görürüm, uykum sürekli bölünür.", category: "KacTepkisi" },
          { text: "Aşırı uyurum, hayattan kaçmak için yataktan çıkmam.", category: "DonTepkisi" },
          { text: "Partnerime veya aileme sarılarak uyumaya çalışırım.", category: "UyumTepkisi" }
        ]
      },
      {
        question: "Seni strese sokan insanlara karşı tavrın hangisidir?",
        options: [
          { text: "Doğrudan yüzleşir, eleştirilerimi sertçe söylerim.", category: "SavasTepkisi" },
          { text: "İletişimi tamamen keser, onlardan kaçarım.", category: "KacTepkisi" },
          { text: "Görmezden gelir, içimde yok sayarım.", category: "DonTepkisi" },
          { text: "Orta yolu bulmak için alttan alır, uyum gösteririm.", category: "UyumTepkisi" }
        ]
      }
    ],
    results: {
      "SavasTepkisi": { icon: "⚔️", title: "Savunmanız: Savaş (Fight)", subtitle: "Mars/Koç Enerjisi", desc: "<p>Stres anında savunma mekanizmanız mücadele etmektir. Enerjiniz yükselir ve doğrudan eyleme geçersiniz. Sakinleşmeyi öğrenmelisiniz.</p>" },
      "KacTepkisi": { icon: "🏃", title: "Savunmanız: Kaç (Flight)", subtitle: "İkizler/Yay Enerjisi", desc: "<p>Stresli durumlardan zihinsel veya fiziksel olarak uzaklaşma eğilimindesiniz. Sorunlarla yüzleşmek yerine kaçmak geçici bir çözümdür.</p>" },
      "DonTepkisi": { icon: "🧊", title: "Savunmanız: Don (Freeze)", subtitle: "Oğlak/Balık Enerjisi", desc: "<p>Baskı altında kendinizi tamamen kapatıp eylemsiz kalıyorsunuz. İç dünyanıza çekilip fırtınanın dinmesini beklersiniz. İradeyi güçlendirmelisiniz.</p>" },
      "UyumTepkisi": { icon: "🤝", title: "Savunmanız: Uyumlan (Fawn)", subtitle: "Terazi/Yengeç Enerjisi", desc: "<p>Stresi azaltmak için insanları memnun etmeye ve ortamı sakinleştirmeye çalışıyorsunuz. Kendinizi unutarak başkalarına uyum göstermemelisiniz.</p>" }
    }
  },
  zodiacZeka: {
    title: "Zodyaktaki Çoklu Zeka Tipin Hangisi?",
    category: "Karakter",
    icon: "🧠",
    description: "Gardner Çoklu Zeka Kuramı ve astroloji ışığında en baskın zeka türünü öğren.",
    questions: [
      {
        question: "Öğrenirken veya çalışırken en çok hangi yöntemi kullanırsın?",
        options: [
          { text: "Mantıksal analizler, tablolar ve matematiksel formüller.", category: "SayisalZeka" },
          { text: "Kelimeler, yazmak, okumak ve sunum yapmak.", category: "SozelZeka" },
          { text: "Görseller, çizimler, haritalar ve zihin tasarımları.", category: "GorselZeka" },
          { text: "İnsan ilişkileri, empati ve hislerimi takip etmek.", category: "SosyalZeka" }
        ]
      },
      {
        question: "Bir sorunu çözerken zihnin nasıl çalışır?",
        options: [
          { text: "Sebep-sonuç ilişkilerini adım adım incelerim.", category: "SayisalZeka" },
          { text: "Sorunu insanlarla konuşarak veya yazarak netleştiririm.", category: "SozelZeka" },
          { text: "Zihnimde üç boyutlu canlandırıp pratik çözüm üretirim.", category: "GorselZeka" },
          { text: "Sezgilerimi dinler, insanların duygularına göre hareket ederim.", category: "SosyalZeka" }
        ]
      },
      {
        question: "Boş zamanlarında hangisini yapmak zihnini daha çok açar?",
        options: [
          { text: "Satranç oynamak, kodlama veya bulmaca çözmek.", category: "SayisalZeka" },
          { text: "Kitap okumak, günlük yazmak veya yeni bir dil öğrenmek.", category: "SozelZeka" },
          { text: "Tasarım yapmak, resim veya fotoğrafçılıkla ilgilenmek.", category: "GorselZeka" },
          { text: "Dostlarımla dertleşmek veya psikoloji okumak.", category: "SosyalZeka" }
        ]
      }
    ],
    results: {
      "SayisalZeka": { icon: "🔢", title: "Zeka Tipiniz: Mantıksal & Matematiksel", subtitle: "Kova/Başak Rezonansı", desc: "<p>Zihniniz mantık, analiz ve örüntülerle çalışıyor. Detayları birleştirme, problem çözme ve strateji üretmede üstünsünüz.</p>" },
      "SozelZeka": { icon: "📖", title: "Zeka Tipiniz: Dilsel & Sözel", subtitle: "İkizler/Terazi Rezonansı", desc: "<p>Kelimelerin gücüne sahipsiniz. Yazmak, konuşmak, ikna etmek ve bilgiyi etkili sunmak en büyük entelektüel gücünüzdür.</p>" },
      "GorselZeka": { icon: "🎨", title: "Zeka Tipiniz: Görsel & Mekansal", subtitle: "Boğa/Aslan Rezonansı", desc: "<p>Zihniniz resimler ve şekillerle düşünüyor. Estetik algınız çok gelişmiştir. Tasarım, mimari ve sanat alanında dehasınız.</p>" },
      "SosyalZeka": { icon: "❤️", title: "Zeka Tipiniz: Sosyal & Duygusal", subtitle: "Yengeç/Balık Rezonansı", desc: "<p>İnsan sarrafısınız. EQ (Duygusal Zeka) seviyeniz çok yüksektir. Empati gücünüzle insanları yönetme ve şifalandırmada ustasınız.</p>" }
    }
  },
  zodiacParaFelsefesi: {
    title: "Parayla Olan Kozmik İlişkin Nedir?",
    category: "Karakter",
    icon: "💰",
    description: "Finansal alışkanlıklarına göre doğum haritandaki 2. ev bolluk bilincini ölç.",
    questions: [
      {
        question: "Eline toplu bir para geçtiğinde ilk yapacağın şey nedir?",
        options: [
          { text: "Hemen geleceğe yatırım yapmak veya bankaya yatırmak.", category: "Biriktirici" },
          { text: "Hayattan keyif alacağım lüks bir tatil veya alışveriş yapmak.", category: "Keyifci" },
          { text: "İşimi büyütmek veya yeni projelere yatırmak.", category: "Yatirimci" },
          { text: "İhtiyacı olan sevdiklerime veya hayır kurumlarına yardım etmek.", category: "Paylasimci" }
        ]
      },
      {
        question: "Para harcamak sana ne hissettirir?",
        options: [
          { text: "Hafif bir kaygı, güvencemin azaldığını hissederim.", category: "Biriktirici" },
          { text: "Büyük bir özgürlük ve yaşama sevinci.", category: "Keyifci" },
          { text: "Paranın döneceğini bildiğim için mantıklı bir yatırım hissi.", category: "Yatirimci" },
          { text: "Başkalarını mutlu etmenin verdiği ruhsal huzur.", category: "Paylasimci" }
        ]
      },
      {
        question: "Sana göre gerçek zenginlik nedir?",
        options: [
          { text: "Banka hesabındaki sarsılmaz finansal güvence.", category: "Biriktirici" },
          { text: "Konforlu, kaliteli ve lüks bir yaşam sürebilmek.", category: "Keyifci" },
          { text: "Üretkenlik, sürekli büyüyen projeler ve finansal bağımsızlık.", category: "Yatirimci" },
          { text: "Ruhsal huzur, sevgi ve sevdiklerimle paylaşabilmek.", category: "Paylasimci" }
        ]
      }
    ],
    results: {
      "Biriktirici": { icon: "🔒", title: "Bolluk Felsefeniz: Güvenli Kale", subtitle: "Oğlak/Toprak Bolluk Bilinci", desc: "<p>Parayı güvenlik olarak görüyorsunuz. Tasarruflu ve tedbirlisiniz ancak kıtlık bilincine düşmeden paranın akışına güvenmelisiniz.</p>" },
      "Keyifci": { icon: "🥂", title: "Bolluk Felsefeniz: Venüsyen Konfor", subtitle: "Boğa/Terazi Bolluk Bilinci", desc: "<p>Para sizin için konfor ve güzellik aracıdır. Kaliteli yaşamı seviyorsunuz. Bütçenizi kontrol etmekte bazen zorlanabilirsiniz.</p>" },
      "Yatirimci": { icon: "📈", title: "Bolluk Felsefeniz: Kozmik Akış Yatırımcısı", subtitle: "Koç/Yay Bolluk Bilinci", desc: "<p>Parayı büyümesi gereken bir enerji olarak görüyorsunuz. Cesur yatırımlar yapar, fırsatları iyi değerlendirirsiniz.</p>" },
      "Paylasimci": { icon: "🤲", title: "Bolluk Felsefeniz: Manevi Bereket", subtitle: "Yengeç/Balık Bolluk Bilinci", desc: "<p>Zenginliği paylaştıkça artan bir kozmik yasa olarak yaşıyorsunuz. Cömertsiniz; bereketi çekersiniz ama kendinizi de unutmamalısınız.</p>" }
    }
  },
  zodiacKarar: {
    title: "Karar Alırken Hangi Filtreyi Kullanıyorsun?",
    category: "Karakter",
    icon: "⚖️",
    description: "Hayatının dönüm noktalarında kararlarını akıl, sezgi veya çevre dengesine göre nasıl verdiğini bul.",
    questions: [
      {
        question: "Hayatını değiştirecek büyük bir karar alırken hangisine güvenirsin?",
        options: [
          { text: "Verilere, artılara ve eksilere, tamamen mantığıma.", category: "MantikliKarar" },
          { text: "İlk andaki güçlü iç sesime ve sezgilerime.", category: "SezgiselKarar" },
          { text: "Güvendiğim bilge insanların ve ailemin tavsiyelerine.", category: "SosyalKarar" },
          { text: "Hızlıca eyleme geçip yolda öğrenmeye.", category: "DeneyselKarar" }
        ]
      },
      {
        question: "Yanlış bir karar aldığını fark ettiğinde tepkin ne olur?",
        options: [
          { text: "Durumu hemen analiz eder, hatamı bulup düzeltirim.", category: "MantikliKarar" },
          { text: "Bunun yaşanması gereken bir karma olduğunu kabul ederim.", category: "SezgiselKarar" },
          { text: "Çevremdekilerin desteğiyle yaraları sarmaya çalışırım.", category: "SosyalKarar" },
          { text: "Vakit kaybetmeden yeni bir yola saparım.", category: "DeneyselKarar" }
        ]
      },
      {
        question: "Kararsız kaldığında seni ne kurtarır?",
        options: [
          { text: "Excel tabloları yapmak ve sakin kafayla düşünmek.", category: "MantikliKarar" },
          { text: "Yalnız kalıp meditasyon yapmak ve rüyalarımı dinlemek.", category: "SezgiselKarar" },
          { text: "Dostlarımla uzun uzun dertleşmek.", category: "SosyalKarar" },
          { text: "Yazı tura atmak veya içimden gelen ilk şeyi yapmak.", category: "DeneyselKarar" }
        ]
      }
    ],
    results: {
      "MantikliKarar": { icon: "🧐", title: "Karar Filtreniz: Rasyonel Akıl", subtitle: "Başak/Kova Filtresi", desc: "<p>Kararlarınızı rasyonel verilere dayandırıyorsunuz. Duygularınızın aklınızı çelmesine izin vermezsiniz. Hata yapma oranınız düşüktür.</p>" },
      "SezgiselKarar": { icon: "🔮", title: "Karar Filtreniz: Kozmik Sezgi", subtitle: "Akrep/Balık Filtresi", desc: "<p>Sezgileriniz size en doğru yolu fısıldıyor. Mantığınız aksini söylese bile içinizdeki o hissi takip edip kazanırsınız.</p>" },
      "SosyalKarar": { icon: "🤝", title: "Karar Filtreniz: Ortak Uyum", subtitle: "Terazi/Yengeç Filtresi", desc: "<p>Kararlarınızda ilişkilerinizi ve sevdiklerinizin mutluluğunu önemsiyorsunuz. Çevrenizle uyumlu adımlar atmayı tercih edersiniz.</p>" },
      "DeneyselKarar": { icon: "⚡", title: "Karar Filtreniz: Hızlı İrade", subtitle: "Koç/Yay Filtresi", desc: "<p>Düşünerek vakit kaybetmezsiniz. Eyleme geçip sonuçları yaşayarak tecrübe edersiniz. Cesur ve dinamik bir yapınız var.</p>" }
    }
  },
  zodiacEgoSelf: {
    title: "Ego ve Yüksek Benlik Dengen Nedir?",
    category: "Karakter",
    icon: "🧘",
    description: "Egonun dünyevi istekleri ile ruhunun yüksek amacı arasındaki denge durumunu analiz et.",
    questions: [
      {
        question: "Biri seni haksız yere suçladığında egon nasıl tepki verir?",
        options: [
          { text: "Gururum kırılır, öfkeyle kendimi kanıtlamaya çalışırım.", category: "EgoAgirlikli" },
          { text: "Üzülürüm ama sessiz kalıp hakikatin ortaya çıkmasını beklerim.", category: "DengeliBenlik" },
          { text: "Durumu onun olgunlaşmamış bilincine bağlar, şefkat duyarım.", category: "YuksekSelf" },
          { text: "Hemen kendimi koruma altına alıp durumdan sıyrılırım.", category: "GeciciEgo" }
        ]
      },
      {
        question: "Hayattaki en büyük arzun hangisidir?",
        options: [
          { text: "Toplumda tanınmak, başarılı olmak ve takdir edilmek.", category: "EgoAgirlikli" },
          { text: "Maddi dünyada konfor kurarken manevi olarak da gelişmek.", category: "DengeliBenlik" },
          { text: "İnsanlığa karşılıksız hizmet edip aydınlanmak.", category: "YuksekSelf" },
          { text: "Kendi halimde, huzurlu ve bağımsız bir yaşam sürmek.", category: "GeciciEgo" }
        ]
      },
      {
        question: "Meditasyon veya içsel dönüşüm çalışmaları sana ne kazandırır?",
        options: [
          { text: "Daha başarılı ve odaklanmış bir birey olmamı sağlar.", category: "EgoAgirlikli" },
          { text: "Zihnimi sakinleştirir, stresimi azaltır.", category: "DengeliBenlik" },
          { text: "Egomu eritip evrensel bütünlüğü hissetmemi sağlar.", category: "YuksekSelf" },
          { text: "Kendi enerjimi korumamı ve dengelenmemi destekler.", category: "GeciciEgo" }
        ]
      }
    ],
    results: {
      "EgoAgirlikli": { icon: "🛡️", title: "Dengeniz: Dünyevi Ego Koruyucusu", subtitle: "Egonun Gücü", desc: "<p>Egonuz şu an dünyada hayatta kalmak ve kendini kanıtlamak için aktif. Yüksek benliğinizin sesini duymak için sessizleşmelisiniz.</p>" },
      "DengeliBenlik": { icon: "⚖️", title: "Dengeniz: Mükemmel Denge", subtitle: "Dünya & Ruh Uyumlaşması", desc: "<p>Hem dünyevi sorumluluklarınızı yerine getiriyor hem de ruhsal gelişiminize önem veriyorsunuz. Ego ve Yüksek Benliğiniz uyum içindedir.</p>" },
      "YuksekSelf": { icon: "🌟", title: "Dengeniz: Yüksek Benlik Rehberliği", subtitle: "Egonun Ötesi", desc: "<p>Egonuzun sınırlarını aşmış, ruhsal amacınızla bütünleşmiş durumdasınız. Çevrenize ilham veren bir ışık taşıyıcısısınız.</p>" },
      "GeciciEgo": { icon: "🪵", title: "Dengeniz: Korunaklı Bireysellik", subtitle: "Kozmik Sınırlar", desc: "<p>Egonuzu kendinizi korumak için bir kalkan olarak kullanıyorsunuz. İnsanlara güvenmeyi öğrendikçe bu kalkanı gevşetebilirsiniz.</p>" }
    }
  },
  zodiacArkadaşlık: {
    title: "Arkadaş Gruplarındaki Sosyal Rolün?",
    category: "Karakter",
    icon: "👥",
    description: "Arkadaş ortamlarında üstlendiğin gizli sosyal rolü (Gözlemci, Neşe Kaynağı vb.) keşfet.",
    questions: [
      {
        question: "Arkadaş grubunda bir etkinlik planlanırken senin rolün genellikle nedir?",
        options: [
          { text: "Mekanı seçer, herkesi organize eder ve planı yaparım.", category: "PlanlayiciRol" },
          { text: "Espriler yapar, grubu eğlendirir ve neşe katarım.", category: "NeseRol" },
          { text: "Fikirlerimi söylerim ama kararı çoğunluğa bırakırım.", category: "DengeRol" },
          { text: "Genelde sessiz kalır, plana uyarım.", category: "GozlemciRol" }
        ]
      },
      {
        question: "Gruptan iki kişi tartıştığında ne yaparsın?",
        options: [
          { text: "Araya girer, haklıyı haksızı belirler ve düzeni kurarım.", category: "PlanlayiciRol" },
          { text: "Ortamı yumuşatacak bir espri yapıp konuyu değiştiririm.", category: "NeseRol" },
          { text: "İki tarafı da dinler, arabuluculuk yapıp barıştırırım.", category: "DengeRol" },
          { text: "Karışmam, sessizce tartışmanın bitmesini beklerim.", category: "GozlemciRol" }
        ]
      },
      {
        question: "Arkadaşların seni en çok hangi özelliğin için arar?",
        options: [
          { text: "Zor zamanlarında pratik yardımıma koşan güvenilirliğim için.", category: "PlanlayiciRol" },
          { text: "Birlikte eğlenmek ve dertleri unutmak için.", category: "NeseRol" },
          { text: "Onları yargılamadan dinleyip doğru tavsiyeler vermem için.", category: "DengeRol" },
          { text: "Sakin ve güvenilir duruşum için.", category: "GozlemciRol" }
        ]
      }
    ],
    results: {
      "PlanlayiciRol": { icon: "👑", title: "Sosyal Rolünüz: Güvenilir Direk", subtitle: "Oğlak/Koç Arkadaşlığı", desc: "<p>Grubun doğal lideri ve organize edici gücüsünüz. Herkes zor anında size güvenir. Yükü tek başınıza taşımamalısınız.</p>" },
      "NeseRol": { icon: "🎉", title: "Sosyal Rolünüz: Neşe ve İlham Kaynağı", subtitle: "İkizler/Yay Arkadaşlığı", desc: "<p>Grubun enerji ve kahkaha merkezisiniz. Sizin olmadığınız buluşmalar sıkıcı geçer. Pozitif auranız en büyük gücünüzdür.</p>" },
      "DengeRol": { icon: "⚖️", title: "Sosyal Rolünüz: Arabulucu Bilge", subtitle: "Terazi/Yengeç Arkadaşlığı", desc: "<p>Grubun sırdaşı ve denge unsurunuz. Empati yeteneğinizle tüm kırgınlıkları iyileştirirsiniz. Harika bir dinleyicisiniz.</p>" },
      "GozlemciRol": { icon: "👁️", title: "Sosyal Rolünüz: Gizemli Gözlemci", subtitle: "Başak/Akrep Arkadaşlığı", desc: "<p>Az konuşan ama her detayı fark eden derin gözlemcisiniz. Söz aldığınızda tam hedeften vurursunuz. Sessiz gücünüz saygı uyandırır.</p>" }
    }
  }
};

let currentQuizType = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let activeQuizCategory = 'Tümü';

const setupArea = document.getElementById("setupArea");
const questionArea = document.getElementById("questionArea");
const loadingArea = document.getElementById("loadingArea");
const resultArea = document.getElementById("resultArea");
const quizList = document.getElementById("quizList");
const quizFilters = document.getElementById("quizFilters");

function renderQuizFilters() {
  const categories = ['Tümü', 'Karakter', 'Aşk & İlişki', 'Ruhsal & Karma'];
  quizFilters.innerHTML = categories.map(cat => 
    `<button type="button" class="${cat === activeQuizCategory ? 'active' : ''}" onclick="filterQuizzes('${cat}')">${cat}</button>`
  ).join('');
}

function renderQuizList() {
  const visibleKeys = activeQuizCategory === 'Tümü' 
    ? Object.keys(quizzes) 
    : Object.keys(quizzes).filter(key => quizzes[key].category === activeQuizCategory);
    
  quizList.innerHTML = visibleKeys.map(key => {
    const q = quizzes[key];
    return `
      <div class="select-card" onclick="startQuiz('${key}')">
        <div class="select-icon">${q.icon || '✦'}</div>
        <h3>${q.title}</h3>
        <p>${q.description || ''}</p>
      </div>
    `;
  }).join('');
}

function filterQuizzes(cat) {
  activeQuizCategory = cat;
  renderQuizFilters();
  renderQuizList();
}

function startQuiz(type) {
  currentQuizType = type;
  currentQuestionIndex = 0;
  userAnswers = [];
  
  setupArea.style.display = "none";
  questionArea.style.display = "block";
  resultArea.style.display = "none";
  loadingArea.style.display = "none";
  
  renderQuestion();
}

function renderQuestion() {
  const quiz = quizzes[currentQuizType];
  const q = quiz.questions[currentQuestionIndex];
  
  // Progress bar güncelle
  const progressPercent = (currentQuestionIndex / quiz.questions.length) * 100;
  document.getElementById("progressFill").style.width = `${progressPercent}%`;
  
  // Soru no ve metni
  document.getElementById("questionNumber").textContent = `Soru ${String(currentQuestionIndex + 1).padStart(2, '0')} / ${quiz.questions.length}`;
  document.getElementById("questionText").textContent = q.question;
  
  // Seçenekler
  const optionsList = document.getElementById("optionsList");
  optionsList.innerHTML = q.options.map(opt => 
    `<button class="option-btn" onclick="selectOption('${opt.category}')">${opt.text}</button>`
  ).join('');
}

function selectOption(category) {
  userAnswers.push(category);
  
  const quiz = quizzes[currentQuizType];
  if (currentQuestionIndex < quiz.questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    showLoadingAndCalculate();
  }
}

function showLoadingAndCalculate() {
  questionArea.style.display = "none";
  loadingArea.style.display = "block";
  
  setTimeout(() => {
    loadingArea.style.display = "none";
    showResults();
  }, 2200); // 2.2 saniye simüle edilen kozmik hesaplama
}

function showResults() {
  // Puanları hesapla
  const counts = {};
  userAnswers.forEach(cat => {
    counts[cat] = (counts[cat] || 0) + 1;
  });
  
  // En yüksek kategoriyi bul
  let dominantCategory = null;
  let maxCount = -1;
  
  Object.keys(counts).forEach(cat => {
    if (counts[cat] > maxCount) {
      maxCount = counts[cat];
      dominantCategory = cat;
    }
  });
  
  const quiz = quizzes[currentQuizType];
  const result = quiz.results[dominantCategory];
  
  document.getElementById("resultIcon").textContent = result.icon;
  document.getElementById("resultTitle").textContent = result.title;
  document.getElementById("resultSubtitle").textContent = result.subtitle;
  document.getElementById("resultDesc").innerHTML = result.desc;
  
  resultArea.style.display = "block";
  resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function resetQuiz() {
  startQuiz(currentQuizType);
}

function gotoMainMenu() {
  setupArea.style.display = "block";
  questionArea.style.display = "none";
  loadingArea.style.display = "none";
  resultArea.style.display = "none";
  filterQuizzes(activeQuizCategory);
}

// Sayfa yüklendiğinde testleri listele
document.addEventListener("DOMContentLoaded", () => {
  renderQuizFilters();
  renderQuizList();
});
