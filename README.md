#  Krishi Bazaar

### Smart Agriculture Knowledge Hub — a unified platform for crop and weather insights

Krishi Bazaar is a multi-page web platform that brings the information farmers need into one place: crop guides, weather, market prices, government schemes, plant-disease diagnosis and soil advice, plus a built-in farming assistant chatbot.

> **Goal:** Give farmers one simple, easy-to-use hub instead of making them search across many different websites.

## ✨ Features

### 🏠 Krishi Madad Dashboard
A home page with quick-access cards for every service — Fasal, Mausam Purvanuman, Subsidy Portal, Market Value, Disease Prevention, Soil Information and Labh.

### 🌾 Fasal Yojana — Crop Guide
Information on 10 major Indian crops (Wheat, Rice, Maize, Cotton, Sugarcane, Millets, Pulses, Tea, Coffee, Mustard), each tagged by season: **Rabi**, **Kharif** or **Annual**.

### 🌦️ Weather Widget
A weather card showing temperature, conditions, humidity, wind and chance of rain, with a refresh button. Links to live satellite weather maps.

### 💰 Market Prices and Subsidies
Direct links to official government sources — **Agmarknet** for daily mandi prices and **india.gov.in** for farmer schemes.

### 🩺 PlantMD — Disease Diagnosis
- Searchable plant-disease database with dropdown filters
- Symptom-based checker that suggests possible matches
- Treatment and management guidance

### 🌱 Soil Advisor
- **Soil Encyclopedia:** soil types, properties, crop guide, water, testing and contaminants
- **Soil Quality Calculator:** enter pH, organic matter and soil type to get tailored recommendations (e.g. add lime, compost or sand)
- **Location-based soil lookup** using browser geolocation

### 🤖 AgroSmart AI Assistant
A chatbot that answers common questions on crop cultivation (sowing time, soil, varieties), weather and government subsidies like PM-KISAN.

### 📱 Responsive Design
Works across mobile, tablet and desktop.

---

## 🛠️ Tech Stack

- **HTML5** — page structure
- **CSS3** — styling and responsive layouts
- **JavaScript (ES6)** — interactivity, search and filtering, calculator logic, chatbot
- **Chart.js** — data visualization
- **Font Awesome** — icons
- **Geolocation API** — location detection

---

## 📂 Project Structure

```
Krishi-Bazaar/
│
└── Main_Site/
    ├── index.html      # Home page and dashboard
    ├── exp1.css        # Home page styles
    ├── exp1.js         # Home page weather widget and chatbot
    │
    ├── crop.html       # Fasal Yojana — crop guide
    ├── crop.css
    ├── crop.js
    │
    ├── disease.html    # PlantMD — disease diagnosis
    └── ptp.html        # Soil Advisor and calculator
```

---

## 🚀 Getting Started

No installation or build step needed.

### 1. Clone the repository

```bash
git clone https://github.com/raajamit10/Krishi-Bazaar.git
cd Krishi-Bazaar/Main_Site
```

### 2. Open the site

Open `index.html` in any browser, or use the **Live Server** extension in VS Code for auto-reload.

---

## 📝 Note

Weather and location-based soil data currently use **simulated sample data** for demonstration. Connecting live APIs is the next planned step.

---

## 🔮 Future Improvements

- Live weather using the OpenWeatherMap API
- Live soil data using the SoilGrids API
- Live mandi prices from the Agmarknet / data.gov.in API
- Marketplace for buying and selling produce
- Hindi and regional language support
- Rebuild the front-end in React
- AI-powered chatbot and photo-based disease detection

---

## 👨‍💻 Built By

**Amit Raj**

B.Tech Computer Science & Engineering — Roorkee Institute of Technology

[GitHub](https://github.com/raajamit10) · [LinkedIn](https://www.linkedin.com/in/amit-raj-078b37324/)

---

⭐ If you found this project useful, consider giving it a star!
