/**
 * Describes the shape of a card returned from the
 * PokemonTCG Api
 */
export class Card {
    constructor(
        public id: string,
        public name: string,
        public imageUrlHiRes: string,
        public types: string[],
        public supertype: string,
        public subtype: string,
        public evolvesFrom: string,
        public hp: string,
        public retreatCost: string[],
        public number: string,
        public artist: string,
        public rarity: string,
        public series: string,
        public set: string,
        public text: string[],
        public setCode: string,
        public attacks: {
            cost: string[],
            name: string,
            text: string,
            damage: string,
            convertedEnergyCost: number
        }[]
    ) { }
}

export class Cards {
    constructor(
        public cards: Card[]
    ) { }
}

export interface Sets {
    sets: CardSet[]
}

export interface CardSet {
    code: string,
    ptcgoCode: string,
    name: string,
    series: string,
    totalCards: number,
    standardLegal: boolean,
    expandedLegal: boolean,
    releaseDate: string,
    symbolUrl: string,
    logoUrl: string
}

export const COLORLESS: string = 'Colorless';
export const DARKNESS: string = 'Darkness';
export const METAL: string = 'Metal';
export const LIGHTNING: string = 'Lightning';
export const FAIRY: string = 'Fairy';
export const WATER: string = 'Water';
export const FIGHTING: string = 'Fightning';
export const GRASS: string = 'Grass';
export const PSYCHIC: string = 'Psychic';
export const DRAGON: string = 'Dragon';
export const FIRE: string = 'Fire';

export const COLORLESS_ICON: string = '../../assets/colorless.png';
export const DARKNESS_ICON: string = '../../assets/dark.png';
export const METAL_ICON: string = '../../assets/steel.png';
export const LIGHTNING_ICON: string = '../../assets/lightning.png';
export const FAIRY_ICON: string = '../../assets/fairy.png';
export const WATER_ICON: string = '../../assets/water.png';
export const FIGHTING_ICON: string = '../../assets/fighting.png';
export const GRASS_ICON: string = '../../assets/grass.png';
export const PSYCHIC_ICON: string = '../../assets/psychic.png';
export const DRAGON_ICON: string = '../../assets/dragon.png';
export const FIRE_ICON: string = '../../assets/fire.png';

export class TypeNameIcons {

    public static readonly NAMES: string[] = [
        COLORLESS,
        DARKNESS,
        METAL,
        LIGHTNING,
        FAIRY,
        WATER,
        FIGHTING,
        GRASS,
        PSYCHIC,
        DRAGON,
        FIRE
    ];

    public static readonly ICONS: string[] = [
        COLORLESS_ICON,
        DARKNESS_ICON,
        METAL_ICON,
        LIGHTNING_ICON,
        FAIRY_ICON,
        WATER_ICON,
        FIGHTING_ICON,
        GRASS_ICON,
        PSYCHIC_ICON,
        DRAGON_ICON,
        FIRE_ICON
    ];

    public static ICONMAP: Map<string, string> = new Map<string, string>();


    constructor() {


    }
}