import {PokemonImage} from "./pokemon_image";
import {PokemonAbilities} from "./pokemon_abilities";

export class PokemonResponse {
  name: string;
  weight: string;
  height: string;
  sprites: PokemonImage;
  abilities: PokemonAbilities[];

  constructor(
    name: string = "",
    weight: string = "",
    height: string = "",
    sprites: PokemonImage = new PokemonImage(),
    abilities: PokemonAbilities[] = [],
  ) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.sprites = sprites;
    this.abilities = abilities;
  }
}
