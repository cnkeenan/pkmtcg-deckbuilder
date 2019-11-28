import { Component, OnInit } from '@angular/core';
import { ApiService } from './api/api.service';
import { Pokemon, DamageRelations } from './domain/pokemon.interface';
import { Router, RouterEvent, NavigationEnd, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  private title: string = 'pokedex';
  public pokemon: Pokemon;
  public damages: DamageRelations[] = [];
  public search: string;

  ngOnInit() {
    this.showPokemon("charizard");
  }

  showPokemon(pokemon: string) {
    this.apiService.getPokemon(pokemon)
      .subscribe((data: Pokemon) => this.pokemon = new Pokemon(
        data.id,
        data.name,
        data.base_experience,
        data.weight,
        data.abilities,
        data.forms,
        data.game_indices,
        data.height,
        data.moves,
        data.types,
        data.sprites,
        data.stats
      ), (error) => {
        alert(`This pokemon could not be found`);
      });

    this.pokemon.types.forEach((element) => {
      this.apiService.getTypeRelations(element.url)
        .subscribe((data: DamageRelations) => {
          this.damages.push(new DamageRelations(
            data.double_damage_from,
            data.double_damage_to,
            data.half_damage_from,
            data.half_damage_to,
            data.no_damage_from,
            data.no_damage_to)
          );
        })
    })
  }
}
