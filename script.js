function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value;
  if (message.trim() === '') return;


  const chatBox = document.getElementById('chat-box');
  const userMessage = document.createElement('div');
  userMessage.textContent = "You: " + message;
  chatBox.appendChild(userMessage);


  const botReply = document.createElement('div');
  botReply.textContent = "Bot: This is a static reply!";
  chatBox.appendChild(botReply);


  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
}