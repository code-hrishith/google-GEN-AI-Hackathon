const chatWindow = document.getElementById("chat-window");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const languageToggle = document.getElementById("language-toggle");
const languageMenu = document.getElementById("language-menu");

const translations = {
  en: {
    MySpace: "My Space",
    emily: "Emily",
    newsfeed: "Newsfeed",
    yoga: "Yoga",
    groupchat: "GroupChat",
    profile: "Profile",
    logout:"logout",
    headerTitle: "Your AI Companion",
    headerSubtitle: "Always here to listen & support",
    inputPlaceholder: "Type your message...",
    welcomeMessage:
      "👋 Hello! I'm your AI Companion. I'm here to listen and offer support.",
    aiResponses: [
      "I can sense that you’re going through a very heavy and painful time right now. Your feelings matter, and it’s important you don’t carry this alone.  From what you’ve shared, it seems your mental health needs deeper support. I strongly suggest talking to a psychiatrist who can help you find the right care and healing. Would you like me to guide you to one through मनोHeal?",
    ],
  },
  hi: {
    MySpace: "मेरी जगह",
    emily: "एमिली",
    newsfeed: "न्यूज़फ़ीड",
    yoga: "योग",
    groupchat: "समूह चैट",
    profile: "प्रोफ़ाइल",
    logout:"लॉग आउट",
    headerTitle: "आपका AI साथी",
    headerSubtitle: "सुनने और समर्थन करने के लिए हमेशा यहाँ",
    inputPlaceholder: "अपना संदेश टाइप करें...",
    welcomeMessage:
      "👋 नमस्ते! मैं आपका AI साथी हूँ। मैं सुनने और समर्थन देने के लिए यहाँ हूँ।",
    aiResponses: [
      "👋 नमस्ते! आज आपके मन में क्या है?",
      "यह सुनने में मुश्किल लगता है। मैं यहाँ सुनने के लिए हूँ।",
      "मैं समझता हूँ। ऐसा महसूस करना स्वाभाविक है। 😊",
      "आप अपने लिए अभी कौन सी एक छोटी सी चीज कर सकते हैं?",
      "💡 यह एक दिलचस्प बात है। क्या आप और बता सकते हैं?",
      "खुद के प्रति दयालु रहें। आप बहुत अच्छा कर रहे हैं।",
      "इन बातों पर चर्चा करने के लिए साहस चाहिए। मैं आपके विश्वास की सराहना करता हूँ।",
    ],
  },
  ks: {
    MySpace: "म्योन जाय",
    emily: "एमिली",
    newsfeed: "खबर",
    yoga: "योग",
    groupchat: "ग्रुप चैट",
    profile: "प्रोफ़ाइल",
    logout: "लॉग आउट",
    headerTitle: "तुहन्द एआई साथी",
    headerSubtitle: "हमेशा बोज़न تہ مدد کرنس تیار",
    inputPlaceholder: "پنُن پیغام لێکھِو...",
    welcomeMessage:
      "👋 अस्सलाम अलैकुम! بہ چھُس تُہُند एआई साथी। بہ چھُس یَتہِ بوزُن تہ مدد فراہم کرنہٕ خٲطرٕ۔",
    aiResponses: [
        "👋 अस्सलाम अलैकुम! تُہِندِس دِماغس منز کیا چھُ آز؟",
        "यह बوزتھ چھُ مشکل لگان۔ بہ چھُس یَتہِ بوزنہٕ خٲطرٕ۔",
        "بہ چھُس سمجھان۔ ییِتھ محسوس کرن چھُ قدرتی۔ 😊",
        "توہیہ پانہٕ خٲطرٕ کیا اَکھ لۄکُٹ چیز کٔرِتھ ہیٚکِو وُنِکیس؟",
        "💡 यह چھُ اَکھ دلچسپ کتھ۔ کیا توہیہ مزید وٲنِتھ ہیٚکِو؟",
        "پننہٕ پانس سیت مہربان روزیو۔ توہیہ چھُ واریاہ اصل کران۔",
        "یمن کتھن پیٹھ بحث کرنہٕ خٲطرٕ چھِ ہمتچ ضرورت۔ بہ چھُس تُہِندِس اعتمادٕچ قدر کران۔",
    ],
  },
};

let currentLanguage = localStorage.getItem("language") || "en";

function changeLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  localStorage.setItem("language", lang);

  const t = translations[lang];

  // This assumes the nav links have IDs. If not, you'd need to add them.
  document.querySelector('.main-nav a[href="/mood"]').textContent =
    t.MySpace;
  document.querySelector(
    '.main-nav a[href="/AIChatbot"]'
  ).textContent = t.emily;
  document.querySelector('.main-nav a[href="/news"]').textContent =
    t.newsfeed;
  document.querySelector('.main-nav a[href="/yoga"]').textContent = t.yoga;
  document.querySelector('.main-nav a[href="/group_chat_2"]').textContent =
    t.groupchat;

  document.getElementById("profile-btn").textContent = t.profile;
  document.getElementById("logout-btn").textContent = t.logout;
  document.getElementById("chat-header-title").textContent = t.headerTitle;
  document.getElementById("chat-header-subtitle").textContent =
    t.headerSubtitle;
  document.getElementById("message-input").placeholder = t.inputPlaceholder;

  // Clear chat and show new welcome message
  chatWindow.innerHTML = "";
  setTimeout(() => {
    addMessage(t.welcomeMessage, "ai");
  }, 100);
}

function getCurrentTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function showTypingIndicator() {
  if (chatWindow.querySelector(".typing-indicator")) return;
  const indicatorWrapper = document.createElement("div");
  indicatorWrapper.classList.add(
    "flex",
    "justify-start",
    "typing-indicator",
    "animate-fade-in-slide-up"
  );
  indicatorWrapper.innerHTML = `<div class="max-w-md"><div class="glass-bubble p-4 rounded-2xl rounded-bl-none shadow-md"><div class="flex items-center space-x-1"><div class="typing-dot w-2 h-2 bg-gray-400 rounded-full"></div><div class="typing-dot w-2 h-2 bg-gray-400 rounded-full"></div><div class="typing-dot w-2 h-2 bg-gray-400 rounded-full"></div></div></div></div>`;
  chatWindow.appendChild(indicatorWrapper);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function hideTypingIndicator() {
  const indicator = chatWindow.querySelector(".typing-indicator");
  if (indicator) indicator.remove();
}


function addMessage(message, sender) {
  const messageWrapper = document.createElement("div");

  messageWrapper.classList.add(
    "flex",
    sender === "user" ? "justify-end" : "justify-start",
    "animate-fade-in-slide-up"
  );

  let bubbleClasses =
    sender === "user"
      ? "bg-gradient-to-br from-accent-rose to-accent-pink text-white rounded-br-none shadow-lg shadow-rose-500/30"
      : "glass-bubble text-primary-text rounded-bl-none shadow-md";
  let textClasses = sender === "user" ? "font-semibold" : "font-normal";
  let timestampClasses =
    sender === "user" ? "text-rose-200" : "text-secondary-text";

  messageWrapper.innerHTML = `<div class="max-w-md"><div class="p-4 rounded-2xl ${bubbleClasses}"><p class="text-sm ${textClasses}">${message}</p></div><p class="text-xs ${timestampClasses} mt-1.5 ${
    sender === "user" ? "text-right" : "text-left"
  }">${getCurrentTime()}</p></div>`;
  chatWindow.appendChild(messageWrapper);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// function sendMessage() {
//   const message = messageInput.value.trim();
//   if (message === "") return;
//   addMessage(message, "user");
//   messageInput.value = "";
//   messageInput.disabled = true;
//   sendButton.classList.remove("pulse-active");
//   showTypingIndicator();
//   setTimeout(() => {
//     hideTypingIndicator();
//     const currentResponses = translations[currentLanguage].aiResponses;
//     addMessage(
//       currentResponses[Math.floor(Math.random() * currentResponses.length)],
//       "ai"
//     );
//     messageInput.disabled = false;
//     messageInput.focus();
//   }, 1500 + Math.random() * 800);
// }


async function sendMessage() {
  const message = messageInput.value.trim();
  if (message === "") return;

  // Add user message to chat
  addMessage(message, "user");
  messageInput.value = "";
  messageInput.disabled = true;
  sendButton.classList.remove("pulse-active");
  showTypingIndicator();

  try {
    // 🔹 POST request to backend endpoint
    const response = await fetch("http://localhost:8000/users/chatAI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }), // send user message
    });

    const data = await response.json();

    hideTypingIndicator();

    // Add AI reply
    addMessage(data.reply || "⚠️ No response received.", "ai");
  } catch (err) {
    hideTypingIndicator();
    console.error("❌ Error:", err);
    addMessage("⚠️ Error contacting server.", "ai");
  } finally {
    messageInput.disabled = false;
    messageInput.focus();
  }
}



sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") sendMessage();
});
messageInput.addEventListener("input", () => {
  sendButton.classList.toggle("pulse-active", messageInput.value.trim() !== "");
});

languageToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  languageMenu.classList.toggle("hidden");
});

languageMenu.addEventListener("click", (e) => {
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

// Initialize UI with saved language
document.addEventListener("DOMContentLoaded", () => {
  changeLanguage(currentLanguage);
});

// --------------------------------------------------------------------------------------------------------------------------------------------
