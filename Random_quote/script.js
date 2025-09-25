const quotes = [
  'Success is not final, failure is not fatal: It is the courage to continue that counts.',
  'Don’t watch the clock; do what it does. Keep going.',
  'The secret of getting ahead is getting started.',
  'Dream big and dare to fail.',
  'It always seems impossible until it’s done.',
  "Believe you can and you're halfway there.",
];

const usedQuote = new Set();
const quoteElement = document.getElementById('quote');
function generate() {
  if (usedQuote.size >= quotes.length) {
    usedQuote.clear();
  }
  while (true) {
    const indexValue = Math.floor(Math.random() * quotes.length);

    if (usedQuote.has(indexValue)) continue;

    quoteElement.innerHTML = quotes[indexValue];

    break;
  }
}
