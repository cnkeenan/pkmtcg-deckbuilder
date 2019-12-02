/**
 * Represents the pokemon response back 
 * from the PokeAPI
 */
export class Pokemon {
    constructor(
        public id: number,
        public name: string,
        public base_experience: number,
        public weight: number,
        public abilities: Abilities[],
        public forms: Form[],
        public game_indices: GameIndex[],
        public height: number,
        public moves: Move[],
        public types: Type[],
        public sprites: Sprite[],
        public stats: Stat[]
    ) { }
}

/**
 * Represents the sprite response from the 
 */
export class Sprite {
    front_default: string
}

/**
 * Represents the fields associated with an Ability
 */
export class Abilities {
    constructor(
        public is_hidden: boolean,
        public slot: number,
        public ability: {
            name: string
        }
    ) { }
}

/**
 * Represents the fields associated with Forms
 */
export class Form {
    constructor(
        public name: string
    ) { }
}

/**
 * Represents the Stat object
 */
export class Stat {
    constructor(
        public base_stat: number,
        public effort: number,
        public stat: {
            name: string
        }
    ) { }
}

/**
 * Represents the games the pokemon appears in
 */
export class GameIndex {
    constructor(
        public game_index: number,
        public version: {
            name: string
        }
    ) { }
}

/**
 * Represents the moves the pokemon can learn
 */
export class Move {
    constructor(
        public name: string
    ) { }
}

/**
 * The type of pokemon
 */
export class Type {
    constructor(
        public name: string,
        public url: string
    ) { }
}

/**
 * The related damages
 */
export class DamageRelations {
    constructor(
        public double_damage_from: Type[],
        public double_damage_to: Type[],
        public half_damage_from: Type[],
        public half_damage_to: Type[],
        public no_damage_from: Type[],
        public no_damage_to: Type[]
    ) { }
}