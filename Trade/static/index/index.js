async function fetchPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,polkadot,ripple,litecoin,solana&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();
        const btcChange = data.bitcoin.usd_24h_change;
        const ethChange = data.ethereum.usd_24h_change;
        const dotChange = data.polkadot.usd_24h_change;
        const solChange = data.solana.usd_24h_change;

        const xrpChange = data.ripple.usd_24h_change;
        const ltcChange = data.litecoin.usd_24h_change;
        // Actualizar precios
        document.getElementById('btc-price').innerText = `$${data.bitcoin.usd.toLocaleString()}`;
        const btcChangeElem = document.getElementById('btc-change');
        document.getElementById('btc-change').innerText = `${data.bitcoin.usd_24h_change.toFixed(2)}%`;
        btcChangeElem.style.color = btcChange >= 0 ? '#00ff73' : '#ff4d4d';

        document.getElementById('eth-price').innerText = `$${data.ethereum.usd.toLocaleString()}`;
        const ethChangeElem = document.getElementById('eth-change');
        document.getElementById('eth-change').innerText = `${data.ethereum.usd_24h_change.toFixed(2)}%`;
        ethChangeElem.style.color = ethChange >= 0 ? '#00ff73' : '#ff4d4d';
        
              document.getElementById('dot-price').innerText = `$${data.polkadot.usd.toLocaleString()}`;
      const dotChangeElem = document.getElementById('dot-change');
    document.getElementById('dot-change').innerText = `${data.polkadot.usd_24h_change.toFixed(2)}%`;
      dotChangeElem.style.color = dotChange >= 0 ? '#00ff73' : '#ff4d4d';

        document.getElementById('sol-price').innerText = `$${data.solana.usd.toLocaleString()}`;
        const solChangeElem = document.getElementById('sol-change');
        document.getElementById('sol-change').innerText = `${data.solana.usd_24h_change.toFixed(2)}%`;
        solChangeElem.style.color = solChange >= 0 ? '#00ff73' : '#ff4d4d';

                document.getElementById('xrp-price').innerText = `$${data.ripple.usd.toLocaleString()}`;
        const xrpChangeElem = document.getElementById('xrp-change');
        document.getElementById('xrp-change').innerText = `${data.ripple.usd_24h_change.toFixed(2)}%`;
        xrpChangeElem.style.color = xrpChange >= 0 ? '#00ff73' : '#ff4d4d';


                document.getElementById('ltc-price').innerText = `$${data.litecoin.usd.toLocaleString()}`;
        const ltcChangeElem = document.getElementById('ltc-change');
        document.getElementById('ltc-change').innerText = `${data.litecoin.usd_24h_change.toFixed(2)}%`;
        ltcChangeElem.style.color = ltcChange >= 0 ? '#00ff73' : '#ff4d4d';
    } catch (error) {
        console.error('Error al obtener los precios:', error);
    }
}

fetchPrices();
setInterval(fetchPrices, 20000);
