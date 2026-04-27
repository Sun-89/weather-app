This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


        🌦️ Weather App – Next.js
Application météo moderne développée avec Next.js 16, React, et l’API OpenWeather.
Elle permet de rechercher une ville et d’afficher en temps réel :

la température

l’humidité

la vitesse du vent

une icône météo dynamique

un message d’erreur si la ville n’existe pas

🚀 Démo en ligne
👉 Lien du projet : (https://weather-app-olive-one-99.vercel.app)  
👉 Portfolio : (https://sun-89.github.io/PortfolioPro/)

        🛠️ Technologies utilisées

Next.js 16 (App Router)

React

TypeScript

API Routes Next.js (pour cacher la clé API)

CSS

OpenWeather API

        📦 Installation
Cloner le projet :

bash
git clone https://github.com/Sun-89/weather-app.git
cd weather-app
Installe les dépendances :

bash
npm install
Crée un fichier .env.local :

Lancer le serveur :

bash
npm run dev
L’application sera disponible sur :


http://localhost:3000
        🔐 Sécurité
La clé API est protégée grâce à une API Route Next.js :

const apiKey = process.env.API_KEY;
Elle n’est jamais exposée côté client.

        📁 Structure du projet
Code
weather-app/
 ├── app/
 │    ├── page.tsx
 │    └── layout.tsx
 ├── pages/
 │    └── api/
 │         └── weather.js
 ├── public/
 │    └── images/
 ├── styles/
 │    └── index.css
 └── .env.local


        ✨ Fonctionnalités

Recherche de ville

Affichage dynamique de la météo

Icônes météo automatiques

Gestion des erreurs (ville introuvable)

Design responsive

API sécurisée


👨‍💻 Auteur
Kevin  
Développeur junior 
👉 (https://sun-89.github.io/PortfolioPro/)