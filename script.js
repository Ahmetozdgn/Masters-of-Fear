// Kart verilerini tanımlıyoruz
const cards = [
  {
    active: true,
    cardClass: "",
    id: "ashwilliams",
    title: "Ash Williams",
    titleImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/washwilliamstext.png?ssl=1",
    popImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/ash.png?ssl=1",
    cardImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/ashu.png?ssl=1",
    charClss: "hero",
  },
  {
    active: true,
    cardClass: "",
    id: "freddy",
    title: "Freddy Krueger",
    titleImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/fredtext-1.png?ssl=1",
    popImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/fredc.png?ssl=1",
    cardImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/fredn.png?ssl=1",
    charClss: "villain",
  },
  {
    active: true,
    cardClass: "center",
    id: "jason",
    title: "Jason Voorhees",
    titleImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/jasontxt.png?ssl=1",
    popImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/jasont.png?ssl=1",
    cardImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/jasonm.png?ssl=1",
    charClss: "villain",
  },
  {
    active: true,
    cardClass: "pumpkin",
    id: "pumpkinhead",
    title: "Pumpkinhead",
    titleImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/pumptxt.png?ssl=1",
    popImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/pumpup.png?ssl=1",
    cardImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/pumpa.png?ssl=1",
    charClss: "demon",
  },
  {
    active: true,
    cardClass: "ellen",
    id: "ellenripley",
    title: "Ellen Ripley",
    titleImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/ellentxt.png?ssl=1",
    popImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/ellent-1.png?ssl=1",
    cardImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/ellenbv.png?ssl=1",
    charClss: "hero",
  },
  {
    active: true,
    cardClass: "chucky",
    id: "chucky",
    title: "Chucky",
    titleImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/chuckytxt.png?ssl=1",
    popImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/chucka-1.png?ssl=1",
    cardImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/chucka.png?ssl=1",
    charClss: "villain",
  },
  {
    active: true,
    cardClass: "alien",
    id: "alien",
    title: "Alien",
    titleImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/alientxt.png?ssl=1",
    popImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/alienp.png?ssl=1",
    cardImg:
      "https://i0.wp.com/nscovell.files.wordpress.com/2023/01/aliena-1.png?ssl=1",
    charClss: "villain",
  },
];

// Rastgele yüzde değeri hesaplayan fonksiyon
function getRandomPercentage() {
  return Math.ceil(Math.random() * 15) + "%";
}

// Kartları oluşturma fonksiyonu
function createCards() {
  const section = document.getElementById("n8");

  cards.forEach((i) => {
    if (i.active) {
      // Ana kart div'i
      const card = document.createElement("div");
      card.classList.add("card");
      card.id = i.id;

      // classCont div'i
      const classCont = document.createElement("div");
      classCont.classList.add("classCont");
      card.appendChild(classCont);

      // Başlık resmi
      const titleImg = document.createElement("img");
      titleImg.src = i.titleImg;
      card.appendChild(titleImg);

      // Üst kısım div'i
      const topDiv = document.createElement("div");
      topDiv.classList.add("top");
      if (i.cardClass) {
        topDiv.classList.add(i.cardClass);
      }
      topDiv.style.backgroundImage = `url(${i.popImg})`;
      card.appendChild(topDiv);

      // Kan efekti div'i
      const bloodDiv = document.createElement("div");
      bloodDiv.classList.add("blood");
      bloodDiv.style.bottom = getRandomPercentage();
      card.appendChild(bloodDiv);

      // Alt kısım div'i
      const bottomDiv = document.createElement("div");
      bottomDiv.classList.add("bottom");
      bottomDiv.style.backgroundImage = `url(${i.cardImg})`;
      card.appendChild(bottomDiv);

      // Kartı bölüme ekle
      section.appendChild(card);
    }
  });
}

// Yağmur efektini oluşturma fonksiyonu
function createRain() {
  const rainDrop = document.createElement("div");
  rainDrop.classList.add("rain-drop");

  // Rastgele yatay pozisyon
  rainDrop.style.left = Math.random() * 100 + "vw";
  // Animasyon süresini artırdık (3-5 saniye arası)
  const duration = Math.random() * 2 + 3;
  rainDrop.style.animationDuration = duration + "s";
  // Rastgele gecikme süresi
  const delay = Math.random() * 5;
  rainDrop.style.animationDelay = delay + "s";

  document.body.appendChild(rainDrop);

  // Animasyon bittiğinde damlayı kaldır
  setTimeout(() => {
    rainDrop.remove();
  }, (duration + delay) * 1000);
}

// Yazıdan damlaları oluşturma fonksiyonu
function createTextDrips() {
  const heading = document.querySelector("h1.dripping-text");
  const text = heading.textContent;
  heading.textContent = "";

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    span.style.position = "relative";

    // Damlaları ekliyoruz
    const drip = document.createElement("div");
    drip.classList.add("drip");
    drip.style.left = "50%";
    drip.style.transform = "translateX(-50%)";
    drip.style.animationDelay = `${Math.random() * 2}s`;

    span.appendChild(drip);
    heading.appendChild(span);
  }
}

// Sayfa yüklendiğinde kartları ve efektleri oluştur
document.addEventListener("DOMContentLoaded", () => {
  createCards();

  // Yazıdan damlaların akmasını başlatıyoruz
  createTextDrips();

  // Yağmur efektini başlatıyoruz
  for (let i = 0; i < 100; i++) {
    createRain();
  }
  // Damlaların sürekli oluşması için
  setInterval(createRain, 500); // Damlaların oluşma aralığını artırdık
});
