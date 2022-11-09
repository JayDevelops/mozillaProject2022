fetch("https://type.fit/api/quotes")
    .then((response) =>{
        return response.json();
    })
    .then((data) => {
        //  Get the quote and author ID to change on extension. Get the quote object below
        let quoteText = document.getElementById('quote');
        let quoteAuthor = document.getElementById('quoteAuthor');
        let quote = getRandomQuote(data);

        //  Change the quoteText to quote.text and quoteAuthor with the quote.author
        quoteText.innerText = quote.text;
        quoteAuthor.innerText = quote.author;
        console.log(quote);
    })
    .catch(error => {
        console.log(error)
    })
;


getRandomIndex = (min, max) => {
    let randomNum = max - min + 1;
    return Math.floor(Math.random() * randomNum) + min;
}

getRandomQuote = (data) => {
    let randomIndex = getRandomIndex(0, data.length - 1);
    return data[randomIndex];
}
