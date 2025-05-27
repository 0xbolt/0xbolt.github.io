// function randint(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const maxQuotes = 5;

// function shuffleQuotes() {
//     const container = document.getElementById('quotes');
//     let quotes = Array.from(container.getElementsByTagName('blockquote'));
//     container.innerHTML = '';

//     let i = 0;
//     while (i < quotes.length && i < maxQuotes) {
//         let j = randint(i, quotes.length - 1);
//         [quotes[i], quotes[j]] = [quotes[j], quotes[i]];
//         container.appendChild(quotes[i]);
//         i++;
//     }
// }

// document.addEventListener('DOMContentLoaded', shuffleQuotes);

function createQuoteElement(quote) {
    const blockquote = document.createElement('blockquote');
    blockquote.innerHTML = `&ldquo;${quote.text}&rdquo;<footer>— ${quote.author}${quote.note ? ` <span style="font-style: italic; font-size: 0.9em;">(${quote.note})</span>` : ''}</footer>`;
    return blockquote;
}

function loadQuotes() {
    fetch('quotes.json')
        .then(response => response.json())
        .then(data => {
            const quotes = [
                data.quotes['edwin0'],
                data.quotes['senna0'],
                data.quotes['disney0'],
                data.quotes['herbert0'],
                data.quotes['churchill1'],
                data.quotes['edwin3'],
            ];

            const container = document.getElementById('quotes');
            container.innerHTML = '';
            quotes.forEach(quote => container.appendChild(createQuoteElement(quote)));
        });
}

document.addEventListener('DOMContentLoaded', loadQuotes);
