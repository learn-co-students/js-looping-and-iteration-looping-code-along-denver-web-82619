// Code your solutions in this file

function writeCards(personArray, eventName) {
    const cardsArray = [];
    for (let i = 0; i < personArray.length; i++) {
        cardsArray.push(`Thank you, ${personArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return cardsArray;
}

function countdown(start) {
    while (start >= 0) {
        console.log(start);
        start--;
    }
}