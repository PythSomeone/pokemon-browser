import {PokemonImage} from "./pokemon_image";

export class PokemonResponse {
  name: string;
  weight: string;
  height: string;
  sprites: PokemonImage;

  constructor(
    name: string,
    weight: string,
    height: string,
    sprites: PokemonImage,
  ) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.sprites = sprites;
  }
}
