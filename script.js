const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById("crypto-data");

    data.forEach((coin, index) => {
      const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${coin.name}</td>
          <td>$${coin.current_price.toLocaleString()}</td>
          <td style="color:${coin.price_change_percentage_24h > 0 ? '#16C784' : '#EA3943'}">
            ${coin.price_change_percentage_24h.toFixed(2)}%
          </td>
          <td>$${coin.market_cap.toLocaleString()}</td>
        </tr>
      `;
      table.innerHTML += row;
    });
  });
