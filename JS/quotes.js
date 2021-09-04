const quotes = [

   { key: "Colin R. Davis", value: "The road to success and the road to failure are almost exactly the same" },
   { key: "Herman Melville", value: "It is better to fail in originality than to succeed in imitation" },
   { key: "Winston Churchill", value: "Success is walking from failure to failure with no loss of enthusiasm" },
   { key: "Michael John Bobak", value: "All progress takes place outside the comfort zone" },
   { key: "Henry David", value: "Success usually comes to those who are too busy to be looking for it" },
   { key: "Walt Disney", value: "The way to get started is to quit talking and begin doing" },
   { key: "Albert Schweitzer", value: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful" },
   { key: "Conrad Hilton", value: "Success seems to be connected with action. Successful people keep moving" },
   { key: "Nikos Kazantzakis", value: "In order to succeed, we must first believe that we can" },
   { key: "Vidal Sassoon", value: "The only place where success comes before work is in the dictionary" },
];


const quotesInHTML = document.querySelector("#quotes");
const NUM_ARR_LENGTH = quotes.length;

let numRand = Math.floor(Math.random() * NUM_ARR_LENGTH);

const arthor_name = quotes[numRand].key;
const contentOfQuote = quotes[numRand].value;

quotesInHTML.innerText = `${contentOfQuote} - ${arthor_name} `;

