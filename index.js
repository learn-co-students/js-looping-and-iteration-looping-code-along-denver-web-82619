const writeCards = ["Ada", "Brendan", "Ali"];

function callNames(){
  writeCards.forEach(writer => {
    console.log(`Thank you, ${writer}, for the wonderful birthdy gift!`)
  });
};

callNames()
