//variables
let btn=document.querySelector("#new-quote");
let quote=document.querySelector(".quote-text")
let author=document.querySelector(".author");

//array of quotes
const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Do not wait for the perfect moment, take the moment and make it perfect.",
    author: "Unknown"
  },
  {
    quote: "You don’t have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar"
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  }
];
//function to generate a random quote
function generateQuote() {
    let random=Math.floor(Math.random() * quotes.length);
    quote.innerText=quotes[random].quote;
    author.innerText=quotes[random].author;
}
//event listener for button click
btn.addEventListener("click", generateQuote);
//function to generate a random quote
