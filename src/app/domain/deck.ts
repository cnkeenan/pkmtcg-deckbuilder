import { Card } from './cards';

/**
 * Represents the idea of a virtual deck that the user can 
 * export as a decklist, etc.
 */
export class Deck {
    public cards: Card[] = []

    public cardMap: Map<Card, number> = new Map<Card, number>();
    private decklist: string;

    constructor() { }

    /**
     * Validates if the card is beyond its maximum allowed
     * card type
     * @param card  The card we are validating
     */
    private validate(card: Card): boolean {
        if (this.cardMap.has(card)) {
            if (card.supertype != 'Energy') {
                if (this.cardMap.get(card) == 4) {
                    console.log('This card has already been added the max amounts of times');
                    return false;
                }
                else if (this.cardMap.get(card) < 4) {
                    var count = this.cardMap.get(card);
                    this.cardMap.delete(card);
                    count++
                    this.cardMap.set(card, count);
                    return true;
                }
            }
            else {
                var count = this.cardMap.get(card);
                this.cardMap.delete(card);
                count++;
                this.cardMap.set(card, count);
                return true;
            }
        }
        else {
            this.cardMap.set(card, 1);
            return true;
        }
    }

    /**
     * Validates and add's a card to the deck
     * @param card  The card we are adding
     */
    add(card: Card): void {
        if (this.validate(card)) {
            this.cards.push(card);
        }
    }

    /**
     * Removes a card from the deck
     * @param card The card we are removing
     */
    remove(card: Card): void {
        const index = this.cards.indexOf(card, 0);
        if (index > -1) {
            this.cards.splice(index, 1);
        }
    }

    /**
     * Checks to see if the deck contains a card
     * @param card The card we are checking is in the deck
     */
    containsCard(card: Card): boolean {
        return this.cards.includes(card);
    }

    generateDecklist(): string {
        return this.decklist;
    }
}