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
  },
{
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser"
  },
  {
    quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett"
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau"
  },
  {
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "Do what you can with all you have, wherever you are.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill"
  },
  {
    quote: "Action is the foundational key to all success.",
    author: "Pablo Picasso"
  },
  {
    quote: "Don’t wait. The time will never be just right.",
    author: "Napoleon Hill"
  },
  {
    quote: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    quote: "Great things never come from comfort zones.",
    author: "Unknown"
  },
  {
    quote: "Dream it. Wish it. Do it.",
    author: "Unknown"
  },
  {
    quote: "Sometimes later becomes never. Do it now.",
    author: "Unknown"
  },
  {
    quote: "Little things make big days.",
    author: "Isabel Marant"
  },
  {
    quote: "Don’t stop when you’re tired. Stop when you’re done.",
    author: "Marilyn Monroe"
  },
  {
    quote: "Wake up with determination. Go to bed with satisfaction.",
    author: "George Lorimer"
  },
  {
    quote: "The harder you work for something, the greater you’ll feel when you achieve it.",
    author: "Unknown"
  }

];
//function to generate a random quote and fade effect
function generateQuote() {
    // Remove fade-in class to start fade-out
    quote.classList.remove("fade-in");
    author.classList.remove("fade-in");

    // Wait for fade-out to complete (200ms)
    setTimeout(() => {
        let random = Math.floor(Math.random() * quotes.length);
        quote.innerText = quotes[random].quote;
        author.innerText = quotes[random].author;

        // Add fade-in class to trigger fade-in effect
        quote.classList.add("fade-in");
        author.classList.add("fade-in");
    }, 200);
}

//event listener for button click
btn.addEventListener("click", generateQuote);
//copy quote function
document.getElementById("copy-quote").onclick = () => {
  const text = `"${quote.innerText}" - ${author.innerText}`;
  navigator.clipboard.writeText(text);
  alert("Quote copied!");
};
generateQuote(); // Initial quote generation
// Add fade-in class to both elements
quote.classList.add("fade-in");
author.classList.add("fade-in");


