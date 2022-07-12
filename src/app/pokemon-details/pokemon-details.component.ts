import {Component, OnInit} from '@angular/core';
import {PokeapiService} from "../services/poke-api-service";
import {PokemonResponse} from "../models/pokemon-response";
import {PokemonImage} from "../models/pokemon_image";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: PokemonResponse = new PokemonResponse("", "", "", new PokemonImage(""))
  imageUrl: string = ""

  constructor(
    private pokeapiService: PokeapiService,
  ) {
  }

  async ngOnInit(): Promise<void> {

    await this.pokeapiService.getPokemon(localStorage.getItem('pokemonUrl') || '{}')
    this.pokeapiService.currentPokemonObservable.subscribe(
      result => {
        this.pokemon = result
      }
    );

  }

}
