const connectButton = document.getElementById("connect");
const disconnectButton = document.getElementById("disconnect");
const sendButton = document.getElementById("send");
const messageInput = document.getElementById("message");
const connectionStatus = document.getElementById("connectionStatus");
const response = document.getElementById("response");

let websocket;

connectButton.addEventListener("click", function() {
  websocket = new WebSocket("wss://echo.websocket.events/");

  websocket.addEventListener("open", function(event) {
    connectionStatus.innerHTML = "Connected";
  });

  websocket.addEventListener("close", function(event) {
    connectionStatus.innerHTML = "Disconnected";
  });

  websocket.addEventListener("message", function(event) {
    response.innerHTML = "Parrot's response: " + event.data;
  });
});

disconnectButton.addEventListener("click", function() {
  websocket.close();
});

sendButton.addEventListener("click", function() {
  if (websocket.readyState === WebSocket.OPEN) {
    websocket.send(messageInput.value);
  } else {
    alert("WebSocket is not connected.");
  }
});
