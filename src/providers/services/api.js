import HttpClient from "@tronprotocol/wallet-api/src/client/http";

// It uses `https://tronscan.io` by default if not set
const API_URL = process.env.API_URL;

export const Client = new HttpClient({
  url: API_URL,
});
