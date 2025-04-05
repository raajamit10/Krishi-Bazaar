// Weather API Integration (simulated)
function fetchWeather() {
    // Mock weather data
    const mockWeather = {
        location: "Farm Location",
        temp: (20 + Math.floor(Math.random() * 15)) + "°C",
        description: ["Sunny", "Partly Cloudy", "Cloudy", "Rainy"][Math.floor(Math.random() * 4)],
        humidity: (50 + Math.floor(Math.random() * 40)) + "%",
        wind: (5 + Math.floor(Math.random() * 15)) + " km/h " + ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][Math.floor(Math.random() * 8)],
        rain: Math.floor(Math.random() * 30) + "%",
        icon: ["sun", "cloud", "cloud-rain", "sun"][Math.floor(Math.random() * 4)]
    };
    
    document.getElementById("weatherLocation").textContent = mockWeather.location;
    document.getElementById("weatherTemp").textContent = mockWeather.temp;
    document.getElementById("weatherDesc").textContent = mockWeather.description;
    document.getElementById("weatherHumidity").textContent = mockWeather.humidity;
    document.getElementById("weatherWind").textContent = mockWeather.wind;
    document.getElementById("weatherRain").textContent = mockWeather.rain;
    
    // Set appropriate weather icon
    const iconMap = {
        "sun": "fa-sun",
        "cloud": "fa-cloud",
        "cloud-rain": "fa-cloud-rain",
        "rain": "fa-cloud-showers-heavy"
    };
    
    const iconElement = document.querySelector("#weatherIcon i");
    iconElement.className = "fas " + (iconMap[mockWeather.icon] || "fa-sun");
}

// Chatbot functionality
function toggleChatbot() {
    const chatbotContainer = document.getElementById("chatbotContainer");
    const chatbotToggler = document.getElementById("chatbotToggler");
    
    if (chatbotContainer.style.display === "block") {
        chatbotContainer.style.display = "none";
        chatbotToggler.style.display = "flex";
    } else {
        chatbotContainer.style.display = "block";
        chatbotToggler.style.display = "none";
    }
}

function sendMessage() {
    const userInput = document.getElementById("userInput");
    const message = userInput.value.trim();
    
    if (message === "") return;
    
    // Add user message to chat
    addMessage(message, "user");
    
    // Process message and generate response
    setTimeout(() => {
        const response = generateResponse(message);
        addMessage(response, "bot");
    }, 500);
    
    // Clear input
    userInput.value = "";
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById("chatbotMessages");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender}-message`;
    messageElement.textContent = text;
    messagesContainer.appendChild(messageElement);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateResponse(message) {
    // Simple response generator
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("wheat")) {
        return "For wheat cultivation, the optimal sowing time is October-November. It requires well-drained loamy soil with pH 6.0-7.5. Recommended varieties include HD 2967 and WH 1105.";
    } 
    else if (lowerMessage.includes("maize")) {
        return "Maize can be grown in Kharif (June-July) or Rabi (Oct-Nov) seasons. It grows best in temperatures between 21-27°C. Use HQPM 1 or Pusa Composite 3 varieties for better yield.";
    }
    else if (lowerMessage.includes("weather")) {
        return "Current weather at your location: " + document.getElementById("weatherTemp").textContent + 
               ", " + document.getElementById("weatherDesc").textContent.toLowerCase() + 
               " with " + document.getElementById("weatherRain").textContent + " chance of rain.";
    }
    else if (lowerMessage.includes("subsidy")) {
        return "The PM-KISAN scheme provides ₹6,000/year to farmers. Other schemes include Soil Health Card (100% subsidy) and Micro Irrigation Fund (55% subsidy). Visit https://pmkisan.gov.in for more details.";
    }
    else if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        return "Hello! How can I assist you with your agricultural queries today?";
    }
    else {
        return "I'm an agricultural assistant. I can help with crop cultivation advice, weather information, and government subsidy details. Could you please be more specific about your query?";
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize weather
    fetchWeather();
    
    // Chatbot toggler
    document.getElementById('chatbotToggler').addEventListener('click', toggleChatbot);
    document.getElementById('closeChatbot').addEventListener('click', toggleChatbot);
    
    // Send message button
    document.getElementById('sendMessage').addEventListener('click', sendMessage);
    
    // Send message on Enter key
    document.getElementById('userInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Refresh weather button
    document.getElementById('refreshWeather').addEventListener('click', fetchWeather);
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});