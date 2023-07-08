function writeCards(names) {
    let thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYouCards;
}

function countDown(startingNumber) {
    while (startingNumber >= 0) {
        console.log(startingNumber--);
    }
}
