const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage("user", message);
  respondToMessage(message);
  userInput.value = "";
});

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function respondToMessage(message) {
  addMessage("bot", "Tänker... 🤖");

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    chatBox.lastChild.remove(); 
    addMessage("bot", data.reply);
  } catch (error) {
    chatBox.lastChild.remove();
    addMessage("bot", "Oj! Något gick fel. 😢");
    console.error("Fel vid API-anrop:", error);
  }
}
