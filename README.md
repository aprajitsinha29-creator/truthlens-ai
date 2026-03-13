# TruthLens AI – Misinformation Detection Tool

TruthLens AI is a web application that analyzes text messages and determines whether they contain misinformation using AI.
Users can paste suspicious messages, and the system evaluates their credibility and provides a short explanation.

This project was built as a prototype for a hackathon to demonstrate how AI can help identify and combat the spread of misinformation online.

---

## 🚀 Features

* Detects potential misinformation in user-submitted text
* Provides an AI-generated explanation
* Simple and intuitive interface
* Fast inference using Groq AI models
* Clean separation of frontend and backend

---

## 🏗️ Architecture

User Input → React Frontend → Node.js Backend API → Groq AI Model → Response → UI Display

The frontend sends user text to the backend API, which queries the AI model and returns an analysis.

---

## 🛠️ Tech Stack

Frontend

* React
* Vite
* CSS

Backend

* Node.js
* Express.js
* Groq AI SDK

Other Tools

* Git & GitHub
* dotenv for environment variables

---

## 📁 Project Structure

```
truthlens-ai
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/your-username/truthlens-ai.git
cd truthlens-ai
```

---

### Backend Setup

```
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```
GROQ_API_KEY=your_api_key_here
```

Run the backend server:

```
node server.js
```

The server will start on:

```
http://localhost:5000
```

---

### Frontend Setup

```
cd frontend
npm install
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

## 🧠 How It Works

1. User pastes a suspicious message into the input box.
2. The frontend sends the text to the backend API.
3. The backend sends the request to the Groq AI model.
4. The AI evaluates the text and returns a credibility analysis.
5. The result and explanation are displayed to the user.

---

## 🔒 Security Note

API keys are stored securely using environment variables (`.env`) and are not committed to the repository.

---

## 🌍 Future Improvements

* Credibility scoring system
* Source verification
* Fact-checking using trusted databases
* Browser extension integration
* Social media API integration

---

## 👨‍💻 Author

Aprajit Sinha

---

## 📜 License

This project is for educational and hackathon demonstration purposes.
