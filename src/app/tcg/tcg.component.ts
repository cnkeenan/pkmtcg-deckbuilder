import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl } from '@angular/forms';
import '../domain/cards';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { Card, CardSet } from '../domain/cards';
import { Deck } from '../domain/deck';

@Component({
  selector: 'app-tcg',
  templateUrl: './tcg.component.html',
  styleUrls: ['./tcg.component.scss']
})
export class TcgComponent implements OnInit {

  public cards: Card[] = [];
  public deck: Deck = new Deck();
  public sets: CardSet[] = [];
  public pageNum: number = 2;
  public errSet: boolean = false;

  specificPokemon: FormControl = new FormControl();
  specificSet: FormControl = new FormControl();
  specificSubtype: FormControl = new FormControl();

  iconMap: Map<string, string> = new Map<string, string>();

  public msg: string = "";


  /* temporary */
  public errorMessage: string;
  constructor(private api: ApiService) { }

  addToDeck(card: Card): any {
    this.deck.add(card);

    this.msg = "Card Added!";
  }

  removeFromDeck(card: Card): any {
    this.deck.remove(card);

    this.msg = "Card Removed!";
  }

  ack() {
    this.msg = "";
  }

  ngOnInit() {
    this.api.getCards(this.pageNum)
      .subscribe((data) => {
        this.cards = data.cards;
      }, (error) => {
        this.errSet = true;
        this.errorMessage = error.toString();
      });

    this.specificPokemon.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(specificPokemon => {

        this.api.getCardsByFilters(specificPokemon)
          .subscribe(response => {
            this.cards = response.cards;
          })
      })

    this.specificSet.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(spec => {
        this.api.getCardsBySet(spec)
          .subscribe(response => {
            this.cards = response.cards;
          })
      })

    this.specificSubtype.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(spec => {
        this.api.getCardsBySubtype(spec)
          .subscribe(response => {
            this.cards = response.cards;
          })
      })
  }
}




