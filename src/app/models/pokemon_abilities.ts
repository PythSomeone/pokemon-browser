import {BaseModel} from "./base_model";

export class PokemonAbilities {
  ability: BaseModel;

  constructor(ability: BaseModel) {
    this.ability = ability;
  }
}
