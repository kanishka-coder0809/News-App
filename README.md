
# 📰 News App

A simple, responsive **News Application** built with **HTML, CSS, JavaScript** and powered by the **NewsAPI**.
This project is deployed on **Netlify** with serverless functions for secure API key handling.


## ✨ Features

* 🔎 Search news by keyword
* 🌍 Filter news by categories (India, Technology, Sports, etc.)
* 📱 Responsive design (mobile-friendly with hamburger menu)
* 🖼️ Displays news cards with image, title, description, and source
* 🔗 Clickable cards that open full articles in a new tab
* 🔒 API key hidden safely in Netlify environment variables

---

## 🚀 Tech Stack

* **Frontend:** HTML, CSS, JavaScript (Vanilla)
* **Backend (serverless):** Netlify Functions (Node.js)
* **API:** [NewsAPI.org](https://newsapi.org/)
* **Deployment:** Netlify

---

## 📂 Project Structure

```
├── index.html            # Main page
├── style.css             # Styling
├── script.js             # Frontend logic
├── netlify/
│   └── functions/
│       └── news.js       # Netlify serverless function
└── README.md             # Project documentation
```

---

## ⚡ Setup & Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/news-app.git
   cd news-app
   ```

2. **Install dependencies (for Netlify functions)**

   ```bash
   npm install
   ```

3. **Set up environment variable in Netlify**

   * Go to **Netlify Dashboard → Site Settings → Environment Variables**
   * Add:

     ```
     NEWS_API_KEY = your_news_api_key
     ```

4. **Run locally with Netlify CLI**

   ```bash
   npm install -g netlify-cli
   netlify dev
   ```

   Runs your app at `http://localhost:8888` and proxies API calls to your serverless function.

---

## 🌐 Deployment

1. Push your code to GitHub
2. Connect the repo to **Netlify**
3. Add the `NEWS_API_KEY` in Netlify’s **Environment Variables**
4. Deploy → your app will be live 🎉

---
Made with Love ❤️ By Kanishka
## 📸 Demo

👉 *https://globalink-news.netlify.app/*

---
