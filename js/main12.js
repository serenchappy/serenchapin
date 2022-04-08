// document.querySelector('button');
// document.querySelector('new-quote button');
const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click',getQuote);

async function getQuote() {
  console.log("clicked");
  try{
    const response = await fetch(endpoint);
    if(!response.ok){
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json.quote);
    displayQuote(json.quote);
  }
  catch(err){
    console.log(err)
    alert('Failed');
  }
}
function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
const endpoint= 'https://api.kanye.rest/'


//Pictures of Kanye

const imagesArray = ["../img/Kanye1.jpeg", "../img/Kanye2.jpeg","../img/Kanye3.jpeg","../img/Kanye4.jpeg"];
let index = 0;

document.getElementById("buttonImage").addEventListener("click", buttonClicked);

function buttonClicked() {
  console.log(imagesArray[index]);
  document.getElementById("theImage").src = imagesArray[index];
  if (index >= 3){
    index = 0;
  }
  else{
    index++;
  }
}
