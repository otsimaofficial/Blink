# 🪩 Blink – Real-Time Web3 Prediction Platform

**Built on Linera Blockchain | Wave 1 – Linear Buildathon (Oct 27–29, 2025)**

Blink is a **Web3 virtual prediction platform** powered by Linera’s **microchain architecture**, enabling **real-time, low-latency** prediction experiences.
Users predict AI-generated virtual sports outcomes, compete solo or in teams, and see results **instantly verified on-chain** — showcasing Linera’s unmatched scalability and real-time UX.

---

## 🚀 Key Features

| Feature                     | Description                                                                  |
| --------------------------- | ---------------------------------------------------------------------------- |
| **AI Match Simulation**     | AI generates virtual sports fixtures and probabilistic results in real time. |
| **Solo & Team Predictions** | Predict individually or as part of a team; results stored on-chain.          |
| **Leaderboard System**      | Dynamic ranking for top players and teams (daily, weekly, overall).          |
| **Competitive Mode**        | Engage in competitive challenges with point-based scoring.                   |
| **On-Chain Transparency**   | Predictions, outcomes, and scores recorded on Linera blockchain.             |

---

## 🧠 Why Blink?

Blink is built to **push Linera’s speed and scalability** to the edge.
By combining **AI simulation**, **real-time user interactions**, and **microchain-backed instant finality**, Blink demonstrates how predictive and interactive markets can feel as fast as Web2 — but remain fully decentralized.

> “Don’t wait for the future — *predict it* in real time.”

---

## 🏗️ Architecture Overview

**Stack Overview**

| Layer           | Tool / Framework                            |
| --------------- | ------------------------------------------- |
| Blockchain      | **Linera Layer-1 (Microchains)**            |
| Smart Contracts | **Rust (Linera SDK)**                       |
| Frontend        | **React / Next.js**                         |
| Backend         | **Node.js / Python (AI Integration Layer)** |
| AI Engine       | **External Simulation API**                 |
| Storage         | **On-chain (Predictions, Results)**         |
| Design          | **Figma / Linera Builder UI Kit**           |

**Flow Summary**

1. AI module generates fixtures & odds
2. Users make predictions (solo or team)
3. Predictions are recorded on Linera microchains
4. AI generates match outcomes
5. Smart contract verifies results
6. Leaderboard updates instantly

---

## 🧩 Project Structure

```
blink/
├── contracts/
│   ├── BlinkPrediction.rs        # Core smart contract logic
│   ├── Leaderboard.rs            # Handles scoring & ranking
│   └── utils.rs                  # Common helpers
│
├── frontend/
│   ├── components/               # React components (Cards, Buttons, Panels)
│   ├── pages/                    # Pages (Home, Predict, Leaderboard, Profile)
│   └── styles/                   # CSS/Tailwind setup
│
├── backend/
│   ├── ai_engine.py              # AI match generator (simulation)
│   ├── api_routes.js             # Prediction endpoints
│   └── leaderboard_service.js    # Aggregates & updates leaderboards
│
├── tests/
│   ├── contract_tests.rs
│   └── api_tests.js
│
├── README.md
└── LICENSE
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/<your-org>/blink.git
cd blink
```

### 2️⃣ Install Dependencies

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Backend:

```bash
cd backend
npm install  # or pip install -r requirements.txt
npm start
```

### 3️⃣ Deploy Contracts (Testnet)

```bash
linera project deploy --to testnet
```

### 4️⃣ Connect Wallet

Use the Linera Wallet (testnet) to interact with predictions and view results.

---

## 🧮 Points & Rewards System

| Type            | Basis                              | Reward                           |
| --------------- | ---------------------------------- | -------------------------------- |
| **Solo**        | Correct predictions                | Points added to solo score       |
| **Team**        | Aggregate correct team predictions | Points added to team leaderboard |
| **Top Players** | Highest scores                     | Highlighted on homepage          |

---

## 📊 Roadmap (Post-MVP)

| Phase | Focus                         | Description                                          |
| ----- | ----------------------------- | ---------------------------------------------------- |
| 2     | Real-World Events             | Predict real sports & live events                    |
| 3     | Political Predictions         | Governance, elections & policy outcomes              |
| 4     | Social & Cultural Predictions | Pop culture, health, and social outcomes             |
| 5     | Tokenization                  | Introduce $BLINK token, staking, and team entry fees |
| 6     | Full AI Market Automation     | Autonomous prediction markets driven by AI agents    |

---

## 🧪 Current Status

* ✅ AI-generated virtual match engine (MVP)
* ✅ On-chain predictions and leaderboard
* ✅ Functional testnet deployment
* 🧩 Next: Tokenization and external data oracles

---

## 👥 Team

| Role                 | Member               |
| -------------------- | -------------------- |
| Blockchain Developer & Product Manager      | Otsima |
| Frontend & Backend Developer   | Joshua                |
| Product Designer     | Genesis                  |
| QA Engineer          | TBD                  |

---

## 🧾 License

MIT License © 2025 Blink Team

---

## 💬 Connect

* Website: [blink.xyz](#)
* Discord: [Linera Builders Hub](#)
* Twitter: [@blinkonchain](#)