import Card from './Card.js'

export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
    }

    get deckLength() {
        return this.cards.length
    }

    shuffle() {
        for(let i = this.deckLength - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }

    insert(element) {
        this.cards.map(card => card.append(element, card.suit, card.value))
    }

}

const SUITS = [
    '&spades;',
    '&hearts;',
    '&diams;',
    '&clubs;',
]

const VALUES = [
    'A',
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    'J',
    'Q',
    'K',
]

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}