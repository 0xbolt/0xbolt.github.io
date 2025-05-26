function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const maxQuotes = 5;

function shuffleQuotes() {
    const container = document.getElementById('quotes');
    let quotes = Array.from(container.getElementsByTagName('blockquote'));
    container.innerHTML = '';

    let i = 0;
    while (i < quotes.length && i < maxQuotes) {
        let j = randint(i, quotes.length - 1);
        [quotes[i], quotes[j]] = [quotes[j], quotes[i]];
        container.appendChild(quotes[i]);
        i++;
    }
}

document.addEventListener('DOMContentLoaded', shuffleQuotes);
