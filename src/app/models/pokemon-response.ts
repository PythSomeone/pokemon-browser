export class PokemonResponse {
  name: string;
  weight: string;
  height: string;
  sprites: Array<string>;

  constructor(
    name: string,
    weight: string,
    height: string,
    sprites: Array<string>,
  ) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.sprites = sprites;
  }
}
