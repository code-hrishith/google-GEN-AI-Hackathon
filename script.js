// Get the HTML elements for the language switcher
const languageToggle = document.getElementById("language-toggle");
const languageMenu = document.getElementById("language-menu");

// Object containing all the text translations
const translations = {
  en: {
    emily: "Emily",
    newsfeed: "Newsfeed",
    yoga: "Yoga",
    groupchat: "GroupChat",
    mySpace: "My Space",
    profile: "Profile",
    logout: "Logout",
    heroH1: `"Healing Minds, Growing Strong"`,
    heroTagline: "Care for Every Thought",
    profSupportTitle: "Professional Support",
    profSupportP: "Skilled psychiatrists, compassionate counselors, and experienced therapists to address your unique needs. Let’s work together to build resilience and foster a supportive environment where you can thrive.",
    profSupportBtn: "Explore",
    aiChatbotTitle: "AI Chatbot",
    aiChatbotP: "Emily is an empathetic AI chatbot designed to provide psychological and mental health support with compassion and care.",
    aiChatbotBtn: "Let's Go",
    multiLangTitle: "Multilingual Support",
    multiLangP: "Offering multilingual options supporting diverse youth by allowing conversations in their preferred language.",
    peerConnectTitle: "Peer Connections",
    peerConnectP: "Private peer chat and group support foster safe environments for sharing experiences.",
    wellnessTitle: "Wellness Exercises",
    wellnessP: "Embrace the calming power of wellness Exercises tailored to promote mental relaxation. Through guided breathing exercises and yoga, unlock the benefits of a peaceful mind and revitalized spirit.",
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
    heroH1: `"मन को स्वस्थ करें, मजबूत बनें"`,
    heroTagline: "हर विचार की देखभाल",
    profSupportTitle: "पेशेवर सहायता",
    profSupportP: "आपकी अनूठी जरूरतों को पूरा करने के लिए कुशल मनोचिकित्सक, दयालु परामर्शदाता और अनुभवी चिकित्सक। आइए मिलकर लचीलापन बनाएं और एक सहायक वातावरण को बढ़ावा दें जहां आप आगे बढ़ सकें।",
    profSupportBtn: "अन्वेषण करें",
    aiChatbotTitle: "AI चैटबॉट",
    aiChatbotP: "एमिली एक सहानुभूतिपूर्ण AI चैटबॉट है जिसे करुणा और देखभाल के साथ मनोवैज्ञानिक और मानसिक स्वास्थ्य सहायता प्रदान करने के लिए डिज़ाइन किया गया है।",
    aiChatbotBtn: "चलिए शुरू करें",
    multiLangTitle: "बहुभाषी सहायता",
    multiLangP: "विविध युवाओं को उनकी पसंदीदा भाषा में बातचीत करने की अनुमति देकर बहुभाषी विकल्पों की पेशकश।",
    peerConnectTitle: "साथियों से जुड़ाव",
    peerConnectP: "निजी सहकर्मी चैट और समूह सहायता अनुभवों को साझा करने के लिए सुरक्षित वातावरण को बढ़ावा देते हैं।",
    wellnessTitle: "कल्याण व्यायाम",
    wellnessP: "मानसिक विश्राम को बढ़ावा देने के लिए तैयार किए गए कल्याण व्यायाम की शांत शक्ति को अपनाएं। निर्देशित श्वास व्यायाम और योग के माध्यम से, एक शांत मन और पुनर्जीवित आत्मा के लाभों को अनलॉक करें।",
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
    heroH1: `"ज़ेहनस दिउ शिफ़ा, बनिव मज़बूत"`,
    heroTagline: "प्रत्येक सोचुक ख्याल",
    profSupportTitle: "पेशेवर मदद",
    profSupportP: "माहिर मनोचिकित्सक, हमदर्द सलाहकार, और अनुभवी चिकित्सक आपकी अद्वितीय आवश्यकताओं को पूरा करने के लिए। आइए मिलकर लचीलापन बनाएं और एक सहायक वातावरण को बढ़ावा दें जहाँ आप फल-फूल सकें।",
    profSupportBtn: "दरियाफ्त करिव",
    aiChatbotTitle: "एआई चैटबॉट",
    aiChatbotP: "एमिली एक हमदर्द एआई चैटबॉट है जिसे हमदर्दी और देखभाल के साथ मनोवैज्ञानिक और मानसिक स्वास्थ्य सहायता प्रदान करने के लिए डिज़ाइन किया गया है।",
    aiChatbotBtn: "पकाव",
    multiLangTitle: "बहुभाषी मदद",
    multiLangP: "विभिन्न युवाओं का समर्थन करने वाले बहुभाषी विकल्प प्रदान करना, जिससे वे अपनी पसंदीदा भाषा में बातचीत कर सकें।",
    peerConnectTitle: "दोस्तन सیت رابطہ",
    peerConnectP: "निजी सहकर्मी चैट और समूह समर्थन अनुभव साझा करने के लिए सुरक्षित वातावरण को बढ़ावा देते हैं।",
    wellnessTitle: "بحالی ورزش",
    wellnessP: "मानसिक विश्राम को बढ़ावा देने के लिए तैयार की गई कल्याणकारी व्यायाम की शांत शक्ति को अपनाएं। निर्देशित साँस लेने के व्यायाम और योग के माध्यम से, एक शांत मन और पुनर्जीवित आत्मा का लाभ उठाएं।",
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

  // Update Hero Section
  document.getElementById("hero-h1").textContent = t.heroH1;
  document.getElementById("hero-tagline").textContent = t.heroTagline;
  
  // Update Feature Cards
  document.getElementById("prof-support-title").textContent = t.profSupportTitle;
  document.getElementById("prof-support-p").textContent = t.profSupportP;
  document.getElementById("prof-support-btn").textContent = t.profSupportBtn;
  
  document.getElementById("ai-chatbot-title").textContent = t.aiChatbotTitle;
  document.getElementById("ai-chatbot-p").textContent = t.aiChatbotP;
  document.getElementById("ai-chatbot-btn").textContent = t.aiChatbotBtn;

  document.getElementById("multi-lang-title").textContent = t.multiLangTitle;
  document.getElementById("multi-lang-p").textContent = t.multiLangP;

  document.getElementById("peer-connect-title").textContent = t.peerConnectTitle;
  document.getElementById("peer-connect-p").textContent = t.peerConnectP;

  document.getElementById("wellness-title").textContent = t.wellnessTitle;
  document.getElementById("wellness-p").textContent = t.wellnessP;

  // Update Footer
  document.getElementById("copyright").textContent = t.copyright;
}

// --- Event Listeners for the button ---

// Show/hide the menu when the globe icon is clicked
languageToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  languageMenu.classList.toggle("hidden");
});

// Change language when a menu item is clicked
languageMenu.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "A" && e.target.dataset.lang) {
    changeLanguage(e.target.dataset.lang);
    languageMenu.classList.add("hidden");
  }
});

// Hide the menu if the user clicks anywhere else on the page
document.addEventListener("click", () => {
  if (!languageMenu.classList.contains("hidden")) {
    languageMenu.classList.add("hidden");
  }
});

// Load the correct language when the page first loads
document.addEventListener("DOMContentLoaded", () => {
  changeLanguage(currentLanguage);
});