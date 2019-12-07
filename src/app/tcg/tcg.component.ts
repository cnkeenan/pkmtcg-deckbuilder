import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl } from '@angular/forms';
import '../domain/cards';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { element } from 'protractor';
import { Card, CardSet, COLORLESS_ICON, FIRE_ICON, WATER_ICON, PSYCHIC_ICON, FIGHTING_ICON, METAL_ICON, DARKNESS_ICON, DRAGON_ICON, GRASS_ICON, FAIRY_ICON, LIGHTNING_ICON, Cards } from '../domain/cards';

@Component({
  selector: 'app-tcg',
  templateUrl: './tcg.component.html',
  styleUrls: ['./tcg.component.scss']
})
export class TcgComponent implements OnInit {

  public cards: Card[] = [];
  public sets: CardSet[] = [];
  public pageNum: number = 2;
  public errSet: boolean = false;

  specificPokemon: FormControl = new FormControl();
  iconMap: Map<string, string> = new Map<string, string>();


  /* temporary */
  public errorMessage: string;
  constructor(private api: ApiService) { }

  determineTypeMapping(typeName: string): string {
    switch (typeName) {
      case "Colorless":
        return COLORLESS_ICON;
      case "Fire":
        return FIRE_ICON;
      case "Water":
        return WATER_ICON;
      case "Psychic":
        return PSYCHIC_ICON;
      case "Fighting":
        return FIGHTING_ICON;
      case "Metal":
        return METAL_ICON;
      case "Darkness":
        return DARKNESS_ICON;
      case "Dragon":
        return DRAGON_ICON;
      case "Grass":
        return GRASS_ICON;
      case "Fairy":
        return FAIRY_ICON;
      case "Lightning":
        return LIGHTNING_ICON;
    }
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
            var processedCard: Card[] = [];

            response.cards.forEach(card => {
              processedCard.push(new Card(card.id,
                card.name,
                card.imageUrlHiRes,
                card.types,
                card.supertype,
                card.subtype,
                card.evolvesFrom,
                card.hp,
                card.retreatCost,
                card.number,
                card.artist,
                card.rarity,
                card.series,
                card.set,
                card.text,
                card.setCode,
                card.attacks
              ));
            })

            this.cards = processedCard;

          })
      })




    this.api.getSets().subscribe((data) => {
      this.sets = data.sets;
    }, (error) => {
      this.errSet = true;
      this.errorMessage = error.toString();
    })
  }
}




