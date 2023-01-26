const btnEl = document.getElementById("btn")
const quoteE1 = document.getElementById("quote")

const apiKey = "83hxRT3+sF1cu50TqIlXQw==lgHTKLKr6DThXFAx";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/quotes?category=inspirational"

async function getQuote(){

        try {
              quoteE1.innerText = "Updating....";
    btnEl.ariaDisabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.ariaDisabled = false;
    btnEl.innerText = "Inspire Me";

    quoteE1.innerText = data[0].quote;  
        } catch (error) {
          console.log(error);  
        }
}

btnEl.addEventListener("click", getQuote);