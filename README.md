# 🚀 BFHL API (Backend Logic) | Chitkara University Qualifier 2026

![Node.js](https://img.shields.io/badge/Node.js-v18+-green?style=flat&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.x-blue?style=flat&logo=express)
![Status](https://img.shields.io/badge/Status-Qualifier_Ready-orange)

A robust, secure, and publicly accessible REST API built for the **Chitkara University 2026 Qualifier**. This project implements strict backend logic for mathematical operations (Fibonacci, Primes, LCM, HCF) and integrates LLM-based AI responses using **Groq (Llama 3)**.

---

## 🌐 Deployment
**Live Base URL:** `[PASTE YOUR RENDER/VERCEL LINK HERE]`  
*(Example: https://bfhl-api-ritik.onrender.com)*

| Endpoint | Method | Status | Description |
| :--- | :--- | :--- | :--- |
| `/bfhl` | `POST` | 🟢 Live | Main logic endpoint (Math + AI) |
| `/health` | `GET` | 🟢 Live | Server health & uptime check |

---

## 🛠 Features & Guardrails
This API is engineered to meet strict qualifier standards:
* **Strict JSON Structure:** Consistent response format `{ is_success, official_email, data }`.
* **AI Integration:** Uses **Llama 3 (via Groq)** for intelligent single-word responses.
* **Security:**
    * 🛡️ **Helmet:** Secure HTTP headers.
    * 🚦 **Rate Limiting:** Protects against DDoS/Abuse (100 req/15min).
    * 🔒 **Environment Variables:** API keys are never hardcoded.
* **Robust Validation:** Inputs are sanitized to prevent server crashes.

---

## 📚 API Documentation

### 1. Main Endpoint: `/bfhl`
Processes mathematical or AI logic based on the input key.

**URL:** `POST /bfhl`  
**Headers:** `Content-Type: application/json`

#### **Request Types & Examples**

**A. Fibonacci Series**
```json
{ "fibonacci": 7 }


Response
{
  "is_success": true,
  "official_email": "ritik.bansal2026@chitkara.edu.in",
  "data": [0, 1, 1, 2, 3, 5, 8]
}


🅑 Prime Numbers Filter

Filters only prime numbers from an input array.

Request
{
  "prime": [2, 4, 7, 9, 11]
}

Response
{
  "is_success": true,
  "official_email": "ritik.bansal2026@chitkara.edu.in",
  "data": [2, 7, 11]
}

🅒 LCM / HCF

Calculates Least Common Multiple (LCM) or Highest Common Factor (HCF).

Request
{
  "lcm": [12, 18, 24]
}

Response
{
  "is_success": true,
  "official_email": "ritik.bansal2026@chitkara.edu.in",
  "data": 72
}

🅓 AI Question (Llama 3)

Returns a strict single-word answer.

Request
{
  "AI": "What is the capital of France?"
}

Response
{
  "is_success": true,
  "official_email": "ritik.bansal2026@chitkara.edu.in",
  "data": "Paris"
}

🔹 2. GET /health

Used by uptime monitors to ensure the API is running.

Response
{
  "operation_code": 1,
  "status": "Healthy",
  "timestamp": "2026-02-10T10:00:00.000Z"
}

💻 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/bfhl-api.git
cd bfhl-api

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment

Create a .env file:

PORT=3000
OFFICIAL_EMAIL=ritik.bansal2026@chitkara.edu.in
GROQ_API_KEY=gsk_your_key_here

4️⃣ Run Server
npm start


Server runs at:

http://localhost:3000
