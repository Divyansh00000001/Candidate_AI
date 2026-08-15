# 🤖 Candidate AI

Candidate AI is an AI-powered candidate representative that allows recruiters, interviewers, and visitors to interact with a candidate's professional profile through a conversational interface.

Instead of simply reading a traditional resume, users can ask questions about the candidate's **skills, projects, certifications, experience, interview preparation, and suitability for a particular job description**.

## ✨ Features

* 💬 **AI Chat** — Ask questions about the candidate's professional profile.
* ⚡ **Streaming Responses** — AI responses are displayed progressively for a conversational experience.
* 📁 **Project Cards** — Projects are displayed with descriptions, technologies used, and GitHub links.
* 🛠️ **Skills Card** — Technical skills are organized by category.
* 🎓 **Certifications** — View the candidate's certifications and relevant links.
* 🎯 **Job Match** — Analyze how well a candidate's profile matches a given job description.
* 🎤 **Interview Questions** — Generate interview-related questions based on the candidate's profile.
* ⭐ **Why Hire Me** — Provides an AI-generated summary of the candidate's strengths.
* 💾 **Conversation History** — Conversations can be saved and accessed from the sidebar.
* 🗑️ **Conversation Management** — Individual conversations can be deleted.
* 📋 **Copy Prompt** — Quickly copy user prompts.
* 📄 **Resume Access** — View/download the candidate's resume.
* 🚨 **Error Handling** — Handles API and AI service failures gracefully.
* 🌐 **Production Deployment** — Frontend and backend are deployed separately using Vercel and Render.

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Markdown
* Lucide React

### Backend

* Python
* FastAPI
* Uvicorn

### AI

* Groq API
* Llama 3.3 70B Versatile

### Deployment

* Vercel — Frontend
* Render — Backend

### Development Tools

* Git
* GitHub
* VS Code
* Postman

## 🏗️ Project Structure

```text
Candidate-AI/
│
├── backend/
│   ├── data/
│   │   └── candidate.json
│   │
│   ├── models/
│   │   ├── chat.py
│   │   └── job_match.py
│   │
│   ├── routes/
│   │   ├── candidate.py
│   │   └── chat.py
│   │
│   ├── services/
│   │   ├── candidate.py
│   │   ├── llm.py
│   │   ├── memory.py
│   │   └── prompt.py
│   │
│   └── app.py
│
├── frontend/
│   ├── public/
│   │   └── resume/
│   │
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── App.jsx
│
├── .gitignore
└── README.md
```

## 🔄 How It Works

```text
User
  │
  ▼
React Frontend
  │
  │ HTTP Requests
  ▼
FastAPI Backend
  │
  ├── Candidate Data
  │
  ├── Job Match
  │
  └── LLM Service
          │
          ▼
       Groq API
          │
          ▼
     AI Response
          │
          ▼
   React Chat Interface
```

The candidate information is stored in `candidate.json`. The FastAPI backend loads this information and provides it to the relevant services. AI-powered questions are processed through the Groq API while the frontend handles the conversational interface and presentation.

## 🚀 Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/Divyansh00000001/Candidate-AI.git
cd Candidate-AI
```

### 2. Backend Setup

Navigate to the backend:

```bash
cd backend
```

Create and activate a virtual environment:

**Windows:**

```powershell
python -m venv .venv
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
GROQ_API_KEY=your_groq_api_key
```

Start the FastAPI server:

```bash
uvicorn app:app --reload
```

The backend will run at:

```text
http://127.0.0.1:8000
```

API documentation is available at:

```text
http://127.0.0.1:8000/docs
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:8000
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

## 🔐 Environment Variables

### Backend

```env
GROQ_API_KEY=your_groq_api_key
```

### Frontend

```env
VITE_API_URL=http://localhost:8000
```

For production, `VITE_API_URL` should point to the deployed backend.

**Never commit `.env` files or API keys to GitHub.**

## 📌 Future Improvements

* Authentication and user accounts
* Persistent database-backed conversation history
* More advanced candidate-job matching
* Additional AI-powered interview features
* Improved analytics and usage monitoring


⭐ If you find the project interesting, feel free to explore the repository and try the live application.
