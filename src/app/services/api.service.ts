import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Pokemon, DamageRelations } from '../domain/pokemon';
import { CachingService } from './caching.service';
import { Card, Cards, Sets } from '../domain/cards';
import { Observable } from 'rxjs';


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

  constructor(private client: HttpClient, private cache: CachingService) { }


  getCards(pageNum: number): Observable<HttpResponse<Cards>> {
    return this.client.get<Cards>(`${environment.tcgApi}?page=${pageNum}`, { observe: "response" });
  }

  getCardsByFilters(filters: string, pageNum: number = 1): Observable<Cards> {
    return this.client.get<Cards>(`${environment.tcgApi}?name=${filters}&page=${pageNum}`);
  }

  getCardsBySubtype(filters: string, pageNum: number = 1): Observable<Cards> {
    return this.client.get<Cards>(`${environment.tcgApi}?subtype=${filters}&page=${pageNum}`);
  }

  getCardsBySet(filters: string, pageNum: number = 1): Observable<Cards> {
    return this.client.get<Cards>(`${environment.tcgApi}?set=${filters}&page=${pageNum}`);
  }

  getSets(): Observable<Sets> {
    return this.client.get<Sets>(`${environment.sets}`);
  }
}
