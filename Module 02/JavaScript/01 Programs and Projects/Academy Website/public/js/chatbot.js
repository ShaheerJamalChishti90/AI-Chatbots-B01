// chatbot.js

document.addEventListener("DOMContentLoaded", () => {
  // --- YEAR IN FOOTER ---
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- ELEMENTS ---
  const wrapper = document.getElementById("chatbotWrapper");
  const chatPanel = document.getElementById("chatPanel");
  const chatToggle = document.getElementById("chatToggle");
  const openChatBtn = document.getElementById("openChatBtn");
  const closeChat = document.getElementById("closeChat");
  const minimizeChat = document.getElementById("minimizeChat");
  const chatBody = document.getElementById("chatBody");
  const userInput = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");

  // --- OPEN / CLOSE ---
  function openPanel() {
    wrapper.setAttribute("aria-hidden", "false");
    chatPanel.classList.add("open");
    chatPanel.focus();
  }

  function closePanel() {
    wrapper.setAttribute("aria-hidden", "true");
    chatPanel.classList.remove("open");
  }

  if (chatToggle) chatToggle.addEventListener("click", openPanel);
  if (openChatBtn) openChatBtn.addEventListener("click", openPanel);
  if (closeChat) closeChat.addEventListener("click", closePanel);
  if (minimizeChat) {
    minimizeChat.addEventListener("click", () => {
      chatPanel.classList.toggle("minimized");
    });
  }

  // --- CHAT LOGIC ---
  function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = sender === "user" ? "msg user" : "msg bot";
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function handleMessage() {
    const query = userInput.value.trim();
    if (!query) return;

    // User message
    addMessage("user", query);

    // Find bot response from data.js
    let response = "Sorry, I don’t know the answer to that yet.";
    if (typeof chatbotData !== "undefined") {
      response = chatbotData[query] || response;
    }

    // Bot response with delay
    setTimeout(() => addMessage("bot", response), 500);

    userInput.value = "";
  }

  if (sendBtn) sendBtn.addEventListener("click", handleMessage);
  if (userInput) {
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleMessage();
    });
  }
});
