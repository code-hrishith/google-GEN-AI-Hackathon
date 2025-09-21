// Get the HTML elements for the language switcher
const languageToggle = document.getElementById("language-toggle");
const languageMenu = document.getElementById("language-menu");

// Object containing all the text translations for the News page
const translations = {
  en: {
    emily: "Emily",
    newsfeed: "Newsfeed",
    yoga: "Yoga",
    groupchat: "GroupChat",
    mySpace: "My Space",
    profile: "Profile",
    logout: "Logout",
    pageTitle: "Newsfeed",
    supportTitle: "Support for Youth",
    event1Title: "Group session",
    event2Title: "Happy session",
    event3Title: "Awareness Drive",
    detailsBtn: "Details",
    card1Title: "What is depression and what can I do about it?",
    card1P: "Depression is a mental health condition that causes chronic feelings of emptiness, sadness, or an inability to feel pleasure. These feelings may seem to happen for no clear reason.",
    card2Title: "What to know about anxiety",
    card2P: "Anxiety disorders are a category of mental health diagnoses that involve excessive nervousness, fear, apprehension, and worry. These symptoms can interfere with a person’s quality of life but are very treatable.",
    card3Title: "Why stress happens and how to manage it",
    card3P: "Stress is a natural reaction to specific demands and events, but ongoing stress can affect a person’s health and wellbeing. Tips for managing stress include exercise, setting priorities, counseling, and more.",
    readMoreBtn: "Read more",
    campaignTitle: "Awareness Campaign",
    campaignP: "Join our community outreach program this November.",
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
    pageTitle: "न्यूज़फ़ीड",
    supportTitle: "युवाओं के लिए समर्थन",
    event1Title: "समूह सत्र",
    event2Title: "खुशी सत्र",
    event3Title: "जागरूकता अभियान",
    detailsBtn: "विवरण",
    card1Title: "अवसाद क्या है और मैं इसके बारे में क्या कर सकता हूँ?",
    card1P: "अवसाद एक मानसिक स्वास्थ्य स्थिति है जो खालीपन, उदासी, या खुशी महसूस करने में असमर्थता की पुरानी भावनाओं का कारण बनती है। ये भावनाएँ बिना किसी स्पष्ट कारण के होती दिख सकती हैं।",
    card2Title: "चिंता के बारे में क्या जानना चाहिए",
    card2P: "चिंता विकार मानसिक स्वास्थ्य निदान की एक श्रेणी है जिसमें अत्यधिक घबराहट, भय, आशंका और चिंता शामिल है। ये लक्षण किसी व्यक्ति के जीवन की गुणवत्ता में हस्तक्षेप कर सकते हैं लेकिन बहुत उपचार योग्य हैं।",
    card3Title: "तनाव क्यों होता है और इसे कैसे प्रबंधित करें",
    card3P: "तनाव विशिष्ट मांगों और घटनाओं के प्रति एक स्वाभाविक प्रतिक्रिया है, लेकिन चल रहा तनाव किसी व्यक्ति के स्वास्थ्य और भलाई को प्रभावित कर सकता है। तनाव के प्रबंधन के लिए सुझावों में व्यायाम, प्राथमिकताएं निर्धारित करना, परामर्श और बहुत कुछ शामिल हैं।",
    readMoreBtn: "और पढ़ें",
    campaignTitle: "जागरूकता अभियान",
    campaignP: "इस नवंबर हमारे सामुदायिक आउटरीच कार्यक्रम में शामिल हों।",
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
    pageTitle: "खबर",
    supportTitle: "नौजवानन खٲطرٕ حمایت",
    event1Title: "ग्रुप سیشن",
    event2Title: "خوشی سیشن",
    event3Title: "بیداری مہم",
    detailsBtn: "تفصیلات",
    card1Title: "ڈپریشن کیا چھُ تہ بہ أمس متعلق کیا کرِتھ ہیکہ؟",
    card1P: "ڈپریشن چھِ اَکھ ذہنی صحت حالت یَتھ مَنٛز ہر وقت خالی پن، اُداسی، یا خوشی محسوس کرنس مَنٛز ناکٲمی ہیو احساسات چھِ آسان۔ یہٕ احساسات ہیٚکن بغیر کانہہ واضح وجہٕ گژھتھ۔",
    card2Title: "پریشٲنی متعلق کیا زانُن چھُ ضروری",
    card2P: "پریشٲنی ہٕنٛدؠ بیمارؠ چھِ ذہنی صحتچ تشخیصک اَکھ قسم یَتھ مَنٛز حدٕ کھوتہٕ زیادٕ گھبراہٹ، خوف، تہ تشویش شٲمل چھِ۔ یم علامات ہیٚکن اِنسانس معیارِ زندگی متٲثر کٔرِتھ مگر یم قٲبلہِ علاج چھِ۔",
    card3Title: "تناو کیا چھُ گژھان تہ امک انتظام کوپاری کرُن",
    card3P: "تناو چھُ مخصوص مطالباتو تہ واقعاتن خٲطرٕ اَکھ قدرتی ردعمل، مگر لگاتار تناو ہیٚکہ اِنسانی صحتس تہ بہبودس متٲثر کٔرِتھ۔ تناو کم کرنہٕ خٲطرٕ چھِ ورزش، ترجیحات مقرر کرنؠ، تہ صلاح شٲمل۔",
    readMoreBtn: "مزید پڑھو",
    campaignTitle: "بیداری مہم",
    campaignP: "یَتھ نومبرس مَنٛز أسہِ سٕنٛدِس کمیونٹی آوٹ ریچ پروگرامس مَنٛز شٲمِل گژھِو۔",
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
  // NOTE: This part requires you to add the correct IDs to your HTML file
  document.getElementById("page-title").textContent = t.pageTitle;
  document.getElementById("support-title").textContent = t.supportTitle;
  document.getElementById("event1-title").textContent = t.event1Title;
  document.getElementById("event2-title").textContent = t.event2Title;
  document.getElementById("event3-title").textContent = t.event3Title;
  document.getElementById("details-btn1").textContent = t.detailsBtn;
  document.getElementById("details-btn2").textContent = t.detailsBtn;
  document.getElementById("details-btn3").textContent = t.detailsBtn;

  // Update News Cards
  document.getElementById("card1-title").textContent = t.card1Title;
  document.getElementById("card1-p").textContent = t.card1P;
  document.getElementById("card1-btn").textContent = t.readMoreBtn;
  
  document.getElementById("card2-title").textContent = t.card2Title;
  document.getElementById("card2-p").textContent = t.card2P;
  document.getElementById("card2-btn").textContent = t.readMoreBtn;

  document.getElementById("card3-title").textContent = t.card3Title;
  document.getElementById("card3-p").textContent = t.card3P;
  document.getElementById("card3-btn").textContent = t.readMoreBtn;
  
  document.getElementById("campaign-title").textContent = t.campaignTitle;
  document.getElementById("campaign-p").textContent = t.campaignP;

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