const currencySelect = document.getElementById("currencySelect");
const currencySelectRate = document.getElementById("currencySelectRate");
const currencyInput = document.getElementById("currency");
const currencySecond = document.getElementById("currencySecond");
const currencyUpdate = document.getElementById("currencyUpdate");


getCurrencyRate();


function getCurrencyRate() {
     fetch(`https://v6.exchangerate-api.com/v6/e9b41af00c8ef7688595cac3/latest/${currencySelect.value}`)
     .then(res => res.json())
     .then(data => {
        console.log(data)
        const rate = data.conversion_rates[currencySelectRate.value]
        console.log(rate)
        
        currencySecond.innerHTML = (currency.value * rate).toFixed(2);

        currencyUpdate.innerText = ` ${currency.value} ${currencySelect.value} - ${currencySecond.textContent} ${currencySelectRate.value}`
     })

     

}


currencySelect.addEventListener("change",getCurrencyRate)
currencySelectRate.addEventListener("change",getCurrencyRate)
currencyInput.addEventListener("input",getCurrencyRate)