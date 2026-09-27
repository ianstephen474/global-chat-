function sendMessage() {
  const input = document.getElementById("message");
  const chat = document.getElementById("chat");

  if (input.value.trim() === "") return;

  const message = document.createElement("div");
  message.textContent = input.value;
  message.className = "message";

  chat.appendChild(message);
  input.value = "";
}
