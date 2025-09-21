// Get the HTML elements for the language switcher
const languageToggle = document.getElementById("language-toggle");
const languageMenu = document.getElementById("language-menu");

// Object containing all the text translations for the Yoga page
const translations = {
  en: {
    emily: "Emily",
    newsfeed: "Newsfeed",
    yoga: "Yoga",
    groupchat: "GroupChat",
    mySpace: "My Space",
    profile: "Profile",
    logout: "Logout",
    pageTitle: "Yoga & Meditation",
    pageSubtitle: "Find balance and peace with our curated collection of yoga and meditation sessions.",
    card1Title: "Morning Flow for Energy",
    card1Level: "Beginner",
    card1Desc: "A gentle 15-minute yoga session to awaken your body and mind, setting a positive tone for the day.",
    card2Title: "Meditation for Anxiety Relief",
    card2Level: "All Levels",
    card2Desc: "This 10-minute guided meditation helps to calm a busy mind and release anxious thoughts.",
    card3Title: "Restorative Bedtime Yoga",
    card3Level: "Beginner",
    card3Desc: "Unwind and prepare for a restful sleep with this 20-minute restorative yoga practice using pillows for support.",
    startBtn: "Start Session",
    copyright: "© 2025 मनोHEAL",
  },
  hi: {
    emily: "एमिली",
    newsfeed: "न्यूज़फ़ीड",
    yoga: "योग",
    groupchat: "समूह चैट",
    mySpace: "मेरी जगह",
    profile: "प्रोफ़ाइल",
    logout: "लॉग आउट",
    pageTitle: "योग और ध्यान",
    pageSubtitle: "हमारे योग और ध्यान सत्रों के संग्रहित संग्रह के साथ संतुलन और शांति पाएं।",
    card1Title: "ऊर्जा के लिए सुबह का प्रवाह",
    card1Level: "शुरुआती",
    card1Desc: "दिन के लिए एक सकारात्मक स्वर निर्धारित करते हुए, आपके शरीर और मन को जगाने के लिए एक सौम्य 15 मिनट का योग सत्र।",
    card2Title: "चिंता राहत के लिए ध्यान",
    card2Level: "सभी स्तर",
    card2Desc: "यह 10 मिनट का निर्देशित ध्यान एक व्यस्त मन को शांत करने और चिंतित विचारों को छोड़ने में मदद करता है।",
    card3Title: "पुनर्स्थापनात्मक सोने के समय का योग",
    card3Level: "शुरुआती",
    card3Desc: "समर्थन के लिए तकियों का उपयोग करके इस 20 मिनट के पुनर्स्थापनात्मक योग अभ्यास के साथ आराम करें और एक आरामदायक नींद के लिए तैयार हों।",
    startBtn: "सत्र शुरू करें",
    copyright: "© 2025 मनोHEAL",
  },
  ks: {
    emily: "एमिली",
    newsfeed: "खबर",
    yoga: "योग",
    groupchat: "ग्रुप चैट",
    mySpace: "म्योन जाय",
    profile: "प्रोफ़ाइल",
    logout: "लॉग आउट",
    pageTitle: "یوگا تہٕ مراقبہ",
    pageSubtitle: "أسہِ سٕندِ یوگا تہٕ مراقبہٕ سیشنن ہٕندِس مجموعس سٕتہِ توازن تہٕ امن حٲصِل کٔرِو۔",
    card1Title: "توانائی خٲطرٕ صبحک بہاو",
    card1Level: "اِبتدٲئی",
    card1Desc: "اَکھ نرم 15 منٹن ہُنٛد یوگا سیشن تُہُنٛد جسم تہٕ ذہن جاگراونک خٲطرٕ، یُس دۄہس اَکھ مثبت رنگ دِیہ۔",
    card2Title: "پریشٲنی دور کرنہٕ خٲطرٕ مراقبہٕ",
    card2Level: "تمام سطح",
    card2Desc: "یہٕ 10 منٹن ہُنٛد ہدایت یافتہ مراقبہٕ چھُ اَکھ مصروف ذہن پرسکون کرنس تہٕ پریشان کن خیالن نِش نجات حٲصِل کرنس مَنٛز مدد کران۔",
    card3Title: "آرام دہ نِندرِ خٲطرٕ بحالی یوگا",
    card3Level: "اِبتدٲئی",
    card3Desc: "اَتھ 20 منٹن ہٕندِس بحالی یوگا مشق سٕتہِ آرام کٔرِو تہٕ اَکھ آرام دہ نِندرِ خٲطرٕ تیار گژھِو، یَتھ مَنٛز تکین ہُنٛد اِستِعمال چھُ یِوان کرنہٕ۔",
    startBtn: "سیشن شۆروٗع کٔرِو",
    copyright: "© 2025 मनोHEAL",
  },
};

// Get the user's saved language from browser storage, or default to English
let currentLanguage = localStorage.getItem("language") || "en";

// Function to update all text on the page
function changeLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  localStorage.setItem("language", lang);

  const t = translations[lang];

  // Update Nav
  document.querySelector('.main-nav a[href="/AIChatbot"]').textContent = t.emily;
  document.querySelector('.main-nav a[href="/news"]').textContent = t.newsfeed;
  document.querySelector('.main-nav a[href="/yoga"]').textContent = t.yoga;
  document.querySelector('.main-nav a[href="/group_chat_2"]').textContent = t.groupchat;
  document.querySelector('.main-nav a[href="/mood"]').textContent = t.mySpace;

  // Update Header CTA
  document.getElementById("profile-btn").textContent = t.profile;
  document.getElementById("logout-btn").textContent = t.logout;

  // Update Page Content
  document.getElementById("page-title").textContent = t.pageTitle;
  document.getElementById("page-subtitle").textContent = t.pageSubtitle;
  
  // Update Yoga Cards
  document.getElementById("card1-title").textContent = t.card1Title;
  document.getElementById("card1-level").textContent = t.card1Level;
  document.getElementById("card1-desc").textContent = t.card1Desc;
  document.getElementById("card1-btn").textContent = t.startBtn;
  
  document.getElementById("card2-title").textContent = t.card2Title;
  document.getElementById("card2-level").textContent = t.card2Level;
  document.getElementById("card2-desc").textContent = t.card2Desc;
  document.getElementById("card2-btn").textContent = t.startBtn;

  document.getElementById("card3-title").textContent = t.card3Title;
  document.getElementById("card3-level").textContent = t.card3Level;
  document.getElementById("card3-desc").textContent = t.card3Desc;
  document.getElementById("card3-btn").textContent = t.startBtn;

  // Update Footer
  document.getElementById("copyright").textContent = t.copyright;
}

// Event Listeners for the language switcher button
languageToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  languageMenu.classList.toggle("hidden");
});

languageMenu.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "A" && e.target.dataset.lang) {
    changeLanguage(e.target.dataset.lang);
    languageMenu.classList.add("hidden");
  }
});

document.addEventListener("click", () => {
  if (!languageMenu.classList.contains("hidden")) {
    languageMenu.classList.add("hidden");
  }
});

// Load the correct language when the page first loads
document.addEventListener("DOMContentLoaded", () => {
  changeLanguage(currentLanguage);
});