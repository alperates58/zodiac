// Burç Uyumu Hesaplama Mantığı

const signData = {
  "Koç": { element: "Ateş", mode: "Öncü", index: 0, polarity: "Eril" },
  "Boğa": { element: "Toprak", mode: "Sabit", index: 1, polarity: "Dişil" },
  "İkizler": { element: "Hava", mode: "Değişken", index: 2, polarity: "Eril" },
  "Yengeç": { element: "Su", mode: "Öncü", index: 3, polarity: "Dişil" },
  "Aslan": { element: "Ateş", mode: "Sabit", index: 4, polarity: "Eril" },
  "Başak": { element: "Toprak", mode: "Değişken", index: 5, polarity: "Dişil" },
  "Terazi": { element: "Hava", mode: "Öncü", index: 6, polarity: "Eril" },
  "Akrep": { element: "Su", mode: "Sabit", index: 7, polarity: "Dişil" },
  "Yay": { element: "Ateş", mode: "Değişken", index: 8, polarity: "Eril" },
  "Oğlak": { element: "Toprak", mode: "Öncü", index: 9, polarity: "Dişil" },
  "Kova": { element: "Hava", mode: "Sabit", index: 10, polarity: "Eril" },
  "Balık": { element: "Su", mode: "Değişken", index: 11, polarity: "Dişil" }
};

const elementInteractions = {
  "Ateş-Ateş": {
    love: 90, friend: 85, comm: 80,
    text: "İki Ateş elementinin bir araya gelmesi adeta devasa bir şenlik ateşi yaratır. İlişkinizde tutku, macera, ilham ve doğrudanlık en üst seviyededir. Birbirinizi anında anlar ve cesaretlendirirsiniz.",
    challenge: "Büyük egoların çarpışması kaçınılmazdır. İki tarafın da liderlik dürtüsü ve sabırsızlığı ilişkiyi bir güç savaşına dönüştürebilir. Öfke anlarında durulmayı öğrenmelisiniz."
  },
  "Ateş-Toprak": {
    love: 65, friend: 75, comm: 70,
    text: "Ateş ve Toprak bir araya geldiğinde lav oluşabilir. Toprak, Ateş'in çılgın projelerini somutlaştırmak ve düzene sokmak ister. Ateş ise Toprak'a yaşam enerjisi ve risk alma cesareti aşılar.",
    challenge: "Toprak'ın aşırı temkinli ve yavaş yapısı Ateş'i boğabilir. Ateş'in ani kararları ve savurganlığı ise Toprak'ın güvence ihtiyacını sarsar. Birbirinizi değiştirmeye çalışmamalısınız."
  },
  "Ateş-Hava": {
    love: 95, friend: 90, comm: 95,
    text: "Hava, Ateş'in yanmasını ve yayılmasını sağlayan en önemli unsurdur. Zihinsel olarak mükemmel anlaşırsınız. Hava'nın yaratıcı fikirleri Ateş'in eylem gücüyle birleştiğinde hayranlık uyandırıcı işler çıkar.",
    challenge: "Ateş fazla dürtüsel davranırken, Hava sadece zihinde kalıp eyleme geçmeyebilir. Duygusal derinlik oluşturmakta zorlanabilir, ilişkiyi fazla arkadaşça yaşayabilirsiniz."
  },
  "Ateş-Su": {
    love: 70, friend: 60, comm: 65,
    text: "Ateş ve Su bir araya geldiğinde buhar (sis) oluşur. Aşırı tutkulu, duygusal ve çekici bir zıtlık ilişkisidir. Birbirinizi çekici bulursunuz ancak duygusal dünyalarınız tamamen farklı dilleri konuşur.",
    challenge: "Su'yun aşırı hassasiyeti ve içine kapanması Ateş'in sert tavırlarıyla incinebilir. Ateş ise Su'yun ruhsal dalgalanmalarını anlamakta zorlanır. Birbirinizi söndürmemeye özen göstermelisiniz."
  },
  "Toprak-Toprak": {
    love: 80, friend: 85, comm: 80,
    text: "İki Toprak elementinin birleşimi sarsılmaz bir kale inşa eder. Güven, sadakat, finansal planlama, düzenli bir yaşam ve konfor sizin ortak paydanızdır. Birbirinize gözünüz kapalı güvenirsiniz.",
    challenge: "Bu ilişkinin en büyük düşmanı monotonluktur. Hayata fazla ciddiyetle yaklaşıp, eğlenceyi ve esnekliği unutabilirsiniz. İlişkinize macera ve romantizm katmak için çaba göstermelisiniz."
  },
  "Toprak-Hava": {
    love: 60, friend: 70, comm: 75,
    text: "Toprak ve Hava, pratiklik ve entelektüel zekanın birleşimidir. Hava fikirler üretir, Toprak ise bu fikirleri somutlaştırarak hayata geçirir. İş ortaklıkları için son derece verimlidir.",
    challenge: "Hava'nın sürekli değişen fikirleri ve havai yapısı Toprak'a güvensiz gelebilir. Toprak'ın katı kuralları ve rutin sevgisi ise Hava'nın özgürlük alanını daraltır."
  },
  "Toprak-Su": {
    love: 90, friend: 95, comm: 90,
    text: "Toprak ve Su, doğanın en bereketli birleşimidir; verimli toprakları oluşturur. Su, sert Toprak'ı yumuşatır ve ona duygusal derinlik kazandırır. Toprak ise akışkan Su'ya güvenli bir yatak ve sınırlar sağlar.",
    challenge: "Aşırı sahiplenici ve bağımlı bir ilişki yapısı geliştirebilirsiniz. Birbirinizin konfor alanında kaybolmamalı, dış dünyaya ve sosyal hayata açık kalmaya özen göstermelisiniz."
  },
  "Hava-Hava": {
    love: 80, friend: 90, comm: 95,
    text: "İki Hava elementinin birleşmesi gökyüzündeki özgür rüzgarlar gibidir. Felsefe, sanat, politika, sosyallik ve iletişim ana odak noktanızdır. Birlikte saatlerce konuşabilir, dünyayı gezebilirsiniz.",
    challenge: "İlişkide somutluk ve duygusal derinlik eksik kalabilir. Sözler verilir ama eyleme dökülmekte zorlanılır. Günlük hayatın pratik sorumluluklarını (ev işleri, faturalar vb.) yönetmekte zorlanabilirsiniz."
  },
  "Hava-Su": {
    love: 65, friend: 70, comm: 70,
    text: "Hava ve Su birleşimi yağmur veya fırtına yaratabilir. Biri zihinle (Hava), diğeri ise kalple (Su) kararlar alır. Hava mantıklı açıklamalar yaparken, Su sadece hissetmek ve anlaşılmak ister.",
    challenge: "Hava'nın rasyonel ve bazen mesafeli duruşu Su'yu yalnız hissettirebilir. Su'yun duygusal sitemleri ise Hava'ya mantıksız ve boğucu gelebilir. Kalp ile akıl arasında köprü kurmalısınız."
  },
  "Su-Su": {
    love: 85, friend: 85, comm: 80,
    text: "İki Su elementinin bir araya gelmesi ucu bucaksız, derin bir okyanus oluşturur. Telepatik düzeyde anlaşır, birbirinizin acılarını ve neşelerini anında hissedersiniz. Romantizm ve şefkat en üst düzeydedir.",
    challenge: "Duyguların girdabında boğulma tehlikesi vardır. İki tarafın da gerçekçi olamaması maddi veya pratik krizlere yol açabilir. Karamsarlık dönemlerinde birbirinizi dibe çekebilirsiniz."
  }
};

function getCombinationKey(elA, elB) {
  const key1 = `${elA}-${elB}`;
  const key2 = `${elB}-${elA}`;
  if (elementInteractions[key1]) return key1;
  if (elementInteractions[key2]) return key2;
  return key1;
}

function calculateCompatibility() {
  const signA = document.getElementById("signA").value;
  const signB = document.getElementById("signB").value;
  
  const dataA = signData[signA];
  const dataB = signData[signB];
  
  // Element etkileşimi anahtarını al (Örn: "Ateş-Hava")
  const comboKey = getCombinationKey(dataA.element, dataB.element);
  const interaction = elementInteractions[comboKey];
  
  // Açısal ilişkiye göre skorları modifiye et
  // Astroloji 12 evden oluştuğu için 12'li indeks farkına bakılır
  const diff = Math.abs(dataA.index - dataB.index);
  const aspectDist = Math.min(diff, 12 - diff); // 0 ile 6 arasında bir mesafe
  
  let loveMod = 0;
  let friendMod = 0;
  let commMod = 0;
  let aspectText = "";

  switch(aspectDist) {
    case 0: // Kavuşum (Aynı Burç)
      loveMod = 5; friendMod = 5; commMod = 0;
      aspectText = `Aynı burçtan iki karakterin bir araya gelmesi adeta bir ayna etkisi yaratır. Birbirinizin tüm iyi ve kötü yönlerini kendinizde görürsünüz. Bu durum derin bir yakınlık getirdiği gibi, tahammülsüzlük de yaratabilir.`;
      break;
    case 1: // Adjacent (Yan yana burçlar)
      loveMod = -10; friendMod = -5; commMod = -5;
      aspectText = `Yan yana bulunan burçlar birbirlerinin görmediği kör noktalardır. Birbirinizden tamamen farklı yapılara sahipsinizdir. Bu ilişkide ortak dil bulmak için çaba sarf etmeniz ve farklılıklara saygı duymanız gerekir.`;
      break;
    case 2: // Sekstil (60 derece - Dost elementler)
      loveMod = 10; friendMod = 10; commMod = 10;
      aspectText = `Astrolojide sekstil (60 derecelik) açı uyumu vardır. Enerjileriniz birbiriyle doğal bir akış halindedir. Birbirinize fırsatlar sunar, konuşurken sıkılmaz ve birlikte üretmekten keyif alırsınız.`;
      break;
    case 3: // Kare (90 derece - Aynı nitelikte çatışma)
      loveMod = -15; friendMod = -15; commMod = -20;
      aspectText = `Astrolojide kare (90 derecelik) gerilim açısı altındasınız. Karakterleriniz arasında sürekli bir gelişim mücadelesi ve gerginlik oluşabilir. Birbirinizi dönüştürmek ve değiştirmek istersiniz.`;
      break;
    case 4: // Üçgen (120 derece - Aynı element)
      loveMod = 15; friendMod = 15; commMod = 15;
      aspectText = `Astrolojide üçgen (120 derecelik) en şanslı açı uyumuna sahipsiniz. Aynı elementten gelen güçleriniz sayesinde çaba sarf etmeden anlaşır, ortak zevkleri paylaşır ve huzurlu bir liman oluşturursunuz.`;
      break;
    case 5: // 150 derece (Uyumsuzluk açısı)
      loveMod = -10; friendMod = -10; commMod = -10;
      aspectText = `Birbirinizi anlamakta ve ortak nokta bulmakta zorlandığınız, tamamen zıt ve farklı frekanstaki burç ilişkisidir. Karşılıklı ödünler vererek bir düzen kurabilirsiniz.`;
      break;
    case 6: // Karşıt (180 derece - Zıt burçlar)
      loveMod = 15; friendMod = -5; commMod = 5;
      aspectText = `Zıt kutupların çekim gücüne sahipsiniz. Karşıt (180 derecelik) açı ilişkisidir. Tamamlanma veya tamamen çatışma potansiyeliniz vardır. "Ben" ve "Biz" dengesini kurmayı öğrenmelisiniz.`;
      break;
  }

  // Kutup (Yin-Yang) Analizi
  const polA = dataA.polarity;
  const polB = dataB.polarity;
  const polKey = polA === polB ? (polA === "Eril" ? "Eril-Eril" : "Dişil-Dişil") : "Eril-Dişil";
  const polarityText = compatibilityDetails.polarities[polKey] || "";

  // Nitelik (Modality) Analizi
  const modA = dataA.mode;
  const modB = dataB.mode;
  const modKey1 = `${modA}-${modB}`;
  const modKey2 = `${modB}-${modA}`;
  const modalityText = compatibilityDetails.modalities[modKey1] || compatibilityDetails.modalities[modKey2] || "";

  // Detaylı element verileri
  const elemDetails = compatibilityDetails.elements[comboKey] || { love: "", friend: "", work: "", conflict: "" };

  // Skorları sınırlandır (maks 99%, min 40%)
  const loveFinal = Math.min(99, Math.max(40, interaction.love + loveMod));
  const friendFinal = Math.min(99, Math.max(40, interaction.friend + friendMod));
  const commFinal = Math.min(99, Math.max(40, interaction.comm + commMod));

  // Sonuç ekranına yaz
  document.getElementById("loveScore").textContent = `${loveFinal}%`;
  document.getElementById("friendScore").textContent = `${friendFinal}%`;
  document.getElementById("commScore").textContent = `${commFinal}%`;

  document.getElementById("analysisTitle").textContent = `${signA} & ${signB} Kozmik Uyumu`;
  
  // 1. Genel Analiz
  document.getElementById("elementAnalysis").innerHTML = `<b>Element Etkileşimi (${comboKey}) - ${elemDetails.title || ''}:</b> ${interaction.text}`;
  document.getElementById("generalAnalysis").innerHTML = `<b>Açısal Konum Analizi:</b> ${aspectText}`;
  document.getElementById("polarityAnalysis").innerHTML = `<b>Nitelik & Polarite Dinamiği:</b> ${modalityText} ${polarityText}`;

  // 2. Aşk & Evlilik
  document.getElementById("loveDetailText").innerHTML = elemDetails.love || interaction.text;

  // 3. Arkadaşlık & İletişim
  document.getElementById("friendDetailText").innerHTML = elemDetails.friend || interaction.text;

  // 4. İş & Ortaklık
  document.getElementById("workDetailText").innerHTML = elemDetails.work || interaction.text;

  // 5. Çatışmalar & Tavsiyeler
  document.getElementById("challengeAnalysis").innerHTML = `<b>Kozmik Mücadeleler:</b> ${interaction.challenge}`;
  
  // Tavsiyeleri oluştur
  let recommendations = "<h4>Kozmik Tavsiyeler:</h4><ul>";
  if (comboKey.includes("Ateş")) {
    recommendations += "<li>Gurur yapmadan ilk adımı atmayı ve özür dilemeyi alışkanlık haline getirin.</li>";
  }
  if (comboKey.includes("Su")) {
    recommendations += "<li>Duygularınızı içinizde biriktirip küsmek yerine açıkça ifade etmeyi deneyin.</li>";
  }
  if (comboKey.includes("Toprak")) {
    recommendations += "<li>Monotonluğu kırmak için beklenmedik küçük tatil planları ve sürprizler yapın.</li>";
  }
  if (comboKey.includes("Hava")) {
    recommendations += "<li>Hayalleri sadece zihinde bırakmayıp eyleme dönüştürmek için somut planlar yapın.</li>";
  }
  recommendations += "<li>Birbirinizin kişisel özgürlük sınırlarına saygı duyun ve esnek olun.</li></ul>";
  document.getElementById("conflictActionSteps").innerHTML = recommendations;

  // İlk alt sekmeyi (Genel Analiz) aktif et
  showSubTab('overview');

  // Sonuç kutusunu göster ve kaydır
  const res = document.getElementById("compResult");
  res.style.display = "block";
  res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Alt sekmeleri yöneten fonksiyon
window.showSubTab = function(tabName) {
  // İçerikleri gizle
  document.querySelectorAll('.sub-tab-content').forEach(el => el.style.display = 'none');
  // Hedef içeriği göster
  const activeContent = document.getElementById('subTab' + tabName.charAt(0).toUpperCase() + tabName.slice(1));
  if (activeContent) activeContent.style.display = 'block';
  
  // Buton aktifliklerini temizle
  document.querySelectorAll('.sub-tab-btn').forEach(el => el.classList.remove('active'));
  // Hedef butonu aktif et
  const activeBtn = document.getElementById('subTabBtn_' + tabName);
  if (activeBtn) activeBtn.classList.add('active');
};
