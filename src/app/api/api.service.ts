import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Pokemon, DamageRelations } from '../domain/pokemon.interface';


/**
 * Service for requesting pokedex entries of pokemon
 * by either Id or by Name. If more than pokemon 
 * are required to be listed in this site we want to 
 * refactor this to split api components with a shared
 * Client. For now, one Client is enough for making individual 
 * requests.
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http: HttpClient;

  constructor(private client: HttpClient) {
    this.http = client;
  }

  /**
   * Gets the pokedex entry for the pokemon
   * by name
   * @param name  name of pokemon
   */
  getPokemon(name: string) {
    return this.http.get<Pokemon>(`${environment.pokemonUri}${name}`);
  }

  /**
   * Gets the associated type relations
   * ex. Ghost is 2x damaged by Dark
   * @param url   url of the type
   */
  getTypeRelations(url: string) {
    return this.http.get<DamageRelations>(`${url}`);
  }
}
