import { Pokemon } from './pokemon';

/**
 * Object type for caching purposes
 */
export interface CachedObject {
    expiry: number;
    value: any;
}