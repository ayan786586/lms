const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const chatContainer = document.getElementById("chat-container");
const chatToggleBtn = document.getElementById("chat-toggle");
const closeChatBtn = document.getElementById("close-chat");

const lawyers = [
    { name: "Alice Smith", specialization: "Family Law" },
    { name: "Bob Johnson", specialization: "Corporate Law" },
    { name: "Carol Davis", specialization: "Criminal Law" }
];

function appendMessage(message, sender) {
    const messageElem = document.createElement("p");
    messageElem.className = sender === "user" ? "user-message" : "bot-message";
    messageElem.textContent = message;
    chatMessages.appendChild(messageElem);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    appendMessage(message, "user");
    userInput.value = "";

    setTimeout(() => {
        let response = "";

        if (message.toLowerCase().includes("list lawyers") || message.toLowerCase().includes("available lawyers")) {
            response = "Here are the available lawyers:\n";
            lawyers.forEach(lawyer => {
                response += `- ${lawyer.name} (${lawyer.specialization})\n`;
            });
        } else if (message.toLowerCase().includes("schedule appointment")) {
            response = "Please provide the lawyer's name and the appointment date.";
        } else if (message.toLowerCase().includes("appointments")) {
            response = "You have no appointments scheduled.";
        } else {
            response = "I didn't understand that. You can ask about available lawyers, schedule an appointment, or view appointments.";
        }

        appendMessage(response, "bot");
    }, 1000);
}

// Toggle chat visibility
chatToggleBtn.addEventListener("click", () => {
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
        chatContainer.style.display = "block";
    } else {
        chatContainer.style.display = "none";
    }
});

// Close the chat window
closeChatBtn.addEventListener("click", () => {
    chatContainer.style.display = "none";
});
