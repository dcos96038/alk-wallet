import axios from "axios";

export const walletApi = axios.create({
  baseURL: "http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com",
  timeout: 10 * 1000,
});
