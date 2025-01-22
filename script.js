// DOM Elements
const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Backend API URL
const BACKEND_API_URL = "http://localhost:3000/generate-message"; // 替换为你的后端地址

// Append message to chat log
function appendMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.textContent = text;
  chatLog.appendChild(messageDiv);
  chatLog.scrollTop = chatLog.scrollHeight; // 自动滚动到底部
}

// Send user input to backend and get bot response
async function handleSend() {
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  // 显示用户消息
  appendMessage(userMessage, "user");
  userInput.value = "";

  try {
    // 调用后端
    const response = await fetch(BACKEND_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: userMessage }),
    });

    const data = await response.json();
    const botMessage = data.reply || "I'm sorry, I couldn't understand that.";
    
    // 显示机器人回复
    appendMessage(botMessage, "bot");
  } catch (error) {
    appendMessage("Error: Unable to connect to server.", "bot");
    console.error("Error:", error);
  }
}

// 绑定发送按钮和 Enter 键
send-btn.addEventListener("click", handleSend);
user-input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSend();
});
