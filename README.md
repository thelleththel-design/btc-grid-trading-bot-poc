# BTC/USDT Grid Trading Bot Proof-of-Concept

Professional grid trading bot implemented for Binance Testnet as a proof-of-concept for investor presentation.

## Core Strategy
- **Type:** Neutral Grid Trading
- **Pair:** BTC/USDT
- **Grid Range:** $63,452.26 to $72,274.50
- **Grid Spacing:** $802.02 (approx. 1.18%)
- **Levels:** 12 (6 Buy, 6 Sell)
- **Capital Allocation:** $60 per level ($720 total)
- **Risk Management:** Hard stop-loss at $57,107 (~10% below grid floor)

## Technical Features
- **HMAC-SHA256 Auth:** Pure JavaScript implementation for secure API communication.
- **Resilient Order Placement:** Uses curl-based POST requests to avoid common API library body-parsing issues.
- **Drift Correction:** Incorporates server time offset synchronization to prevent timestamp expiry (Error -1021).
- **Automated Logging:** Integrated with Google Sheets and Agent Interface dashboards for real-time monitoring.

## Setup & Execution
1. Configure `config.json` with your Binance Testnet API keys.
2. Run the deployment script to initialize grid levels.
3. Monitor via the provided Google Sheets dashboard.

---
*Disclaimer: This is a proof-of-concept for educational/investor pitch purposes only. Trading involves significant risk.*