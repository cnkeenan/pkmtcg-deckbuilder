import { Injectable } from '@angular/core';
import { Pokemon } from '../domain/pokemon';
import { CachedObject } from '../domain/cache';

/**
 * An in-memory caching provider
 */
@Injectable({
  providedIn: 'root'
})
export class CachingService {

  private cache: Map<string, CachedObject> = new Map<string, CachedObject>();

  private readonly DEFAULT_MAX_CACHE_AGE: number = 500000;

  constructor() { }

  /**
   * Retrieves the cached item from the cache
   * @param key key of the item being cached
   */
  get(key: string): any {
    if (this.isValid(key)) {
      console.log(`%cRetrieving requested item: ${key} from cache`, `color: green`);
      return this.cache.get(key).value;
    }
    else {
      console.log(`%cItem requested: ${key}, aged out of the cache`, `color: blue`);
      return null;
    }
  }

  /**
   * Sets the item to be cached
   * @param key key of the item being cached
   * @param value the value of the item being stored
   * @param expiry the expiration time for this item to exist in the cache
   */
  set(key: string, value: any, expiry: number = this.DEFAULT_MAX_CACHE_AGE): void {
    this.cache.set(key, { value: value, expiry: Date.now() + expiry });
  }

  /**
   * Determines if the item exists in the cache and is a valid hit
   * @param key key of the item being cached
   */
  has(key: string): boolean {
    return this.cache.has(key) && this.isValid(key);
  }

  /**
   * Checks the validity of the cache expiry
   * @param key key of the item being cached
   */
  private isValid(key: string): boolean {
    if (this.cache.has(key)) {
      if (this.cache.get(key).expiry < Date.now()) {
        this.cache.delete(key);
        return false;
      }
      return true;
    }
    else {
      return false;
    }
  }
}
