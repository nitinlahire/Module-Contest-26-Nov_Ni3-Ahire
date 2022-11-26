const api_url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

async function getapi(url) {

    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}

getapi(api_url);


function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data) {

    let tab =
        `<tr>
    	<th>IMAGE</th>
    	<th>NAME</th>
        <th>SYMBOL</th>
    	<th>CURRENT_PRICE</th>
        <th>PERCENTAGE</th>
    	<th>MARKET_CAP_24hr</th>
        <th>MARKET_CAP</th>
    	</tr>`;
    for (let r of data) {
        tab += `<tr>
            <td> <img src=${r.image } alt=""></td>
            <td>${r.id.toUpperCase()} </td>
             <td>${r.symbol.toUpperCase()}</td>
            <td>${r.current_price}</td>
             <td>${r.price_change_percentage_24h.toFixed(2)}%</td>
            <td>${r.market_cap_change_24h}</td>		
             <td>market_cap  ${r.market_cap}</td>	
        </tr>`;
    }
    document.getElementById("employees").innerHTML = tab;

}
