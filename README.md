Weather App
Ask DeepWiki

A modern weather application developed with Next.js and the OpenWeather API. It allows users to search for a city and view real-time weather data, including temperature, humidity, and wind speed, presented in a clean and responsive interface.

✨ Live Demo

View the live project here: https://weather-app-olive-one-99.vercel.app

🚀 Features

City Search: Find weather information for any city.
Real-time Weather Data: Displays current temperature, humidity, and wind speed.
Dynamic Icons: Weather icons change automatically based on the current conditions.
Error Handling: Provides a clear message if a city cannot be found.
Secure API Requests: Protects the OpenWeather API key by routing requests through a Next.js API route.
Responsive Design: Adapts to various screen sizes for a seamless experience.

🛠️ Technologies Used

Next.js 16 (App Router)
React 19
TypeScript
OpenWeather API
Custom CSS

🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites

Node.js (v20 or later)
An API key from OpenWeather. The free "Current Weather Data" plan is sufficient.
Installation & Setup
Clone the repository:

git clone https://github.com/Sun-89/weather-app.git
Navigate to the project directory:

cd weather-app
Install the dependencies:

npm install
Set up environment variables: Create a file named .env.local in the root of the project and add your OpenWeather API key:

API_KEY=your_openweathermap_api_key
Start the development server:

npm run dev
Open http://localhost:3000 in your browser to see the application.

🔐 API Key Security

To protect the OpenWeather API key, it is never exposed on the client side. All API calls are proxied through a Next.js API route located at pages/api/weather.js. The server-side route fetches the data from the OpenWeather API and then sends it to the client, ensuring the key remains private.

📁 Project Structure

Here is a brief overview of the key files and directories:

weather-app/
├── app/
│   ├── page.tsx        # Main page component (UI)
│   └── layout.tsx      # Root layout for the application
├── pages/
│   └── api/
│       └── weather.js  # API route to securely fetch weather data
├── public/
│   └── images/         # Static assets (weather icons, search icon)
├── styles/
│   └── index.css       # Main stylesheet for the application
└── .env.local          # Environment variables (API key)


👨‍💻 Author
Kevin - Junior Developer
Portfolio: https://sun-89.github.io/PortfolioPro/