/**
 * BTC/USDT Grid Trading Bot Logic
 * Developed for Investor Pitch POC
 */

const crypto = require('crypto'); // If in Node.js
// For the Twin sandbox, we use a custom HMAC implementation

function calculateGrid(lower, upper, levels) {
    const spacing = (upper - lower) / (levels - 1);
    const grid = [];
    for (let i = 0; i < levels; i++) {
        grid.push(lower + (i * spacing));
    }
    return grid;
}

function generateSignature(queryString, secret) {
    // In actual deployment, use native crypto.createHmac
    return crypto.createHmac('sha256', secret).update(queryString).digest('hex');
}

/**
 * Learned Pattern: Curl-based order placement
 * To avoid the "read 9 sent 10" error, we send parameters in the query string
 * and use a clean POST request with no body.
 */
function buildOrderUrl(baseUrl, params) {
    const sortedKeys = Object.keys(params).sort();
    const query = sortedKeys.map(k => `${k}=${params[k]}`).join('&');
    const signature = generateSignature(query, process.env.BINANCE_SECRET);
    return `${baseUrl}?${query}&signature=${signature}`;
}

// Risk Management Logic
function checkStopLoss(currentPrice, stopLoss) {
    if (currentPrice <= stopLoss) {
        console.log("CRITICAL: Stop-loss triggered. Cancelling all orders.");
        return true;
    }
    return false;
}

module.exports = { calculateGrid, buildOrderUrl, checkStopLoss };
