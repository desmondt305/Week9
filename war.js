//Class is the blueprint for the objects used.
//The constructor holds the properties to be called later.
class Card {
  constructor(suit, faceValue, value) {
      this.suit = suit;
      this.faceValue = faceValue;
      this.value = value;
  }
  //Methods are used for actions.
  displayCard() {
      console.log(`${this.faceValue} of ${this.suit}`);
  }
}

class Deck {
  constructor() {
      this.deck = [];
      let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
      let faceValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

      for (let i = 0; i < suits.length; i++) {
          for (let x = 0; x < faceValues.length; x++) {
              this.deck.push(new Card(suits[i], faceValues[x], x));
          }
      }
  }

  shuffle() {
      for (let i = this.deck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
      }
  }

  dealHand(numCards) {
      const hand = [];
      for (let i = 0; i < numCards; i++) {
          hand.push(this.deck.pop());
      }
      return hand;
  }
}

let deck = new Deck();
deck.shuffle();

document.getElementById('deal-cards').addEventListener('click', () => {
    let deck = new Deck();
    deck.shuffle();

    let player1Hand = deck.dealHand(5);
    let player2Hand = deck.dealHand(5);

    displayHand(player1Hand, 'player1-hand');
    displayHand(player2Hand, 'player2-hand');
});
