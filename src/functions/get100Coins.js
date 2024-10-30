import axios from "axios";

export const get100Coins = () => {
  const coins = axios
  .get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false/ping?x_cg_demo_api_key=CG-MYXJwKeYTuvGafCQ1wiU4XBG"
  )
    .then((response) => {
      console.log("RESPONSE>>>", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR>>>", error.message);
    });

  return coins;
};