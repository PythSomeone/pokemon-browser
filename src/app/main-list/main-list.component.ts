import {Component, OnInit} from '@angular/core';
import {PokeapiService} from '../services/poke-api-service';
import {Router} from "@angular/router";
import {PokemonListItem} from "../models/pokemon-list-item";


@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {

  pokemons: PokemonListItem[] = []
  private _url: string = "";

  constructor(
    private pokeapiService: PokeapiService,
    private router: Router
  ) {

  }

  async ngOnInit(): Promise<void> {

    await this.pokeapiService.getPokemonList()
    this.pokeapiService.pokemonListObservable.subscribe(
      result => {
        this.pokemons = result
      }
    );
  }

  appendPokemons() {
    let pokemon = new PokemonListItem("", "")
    this.pokemons = [...this.pokemons, pokemon]
  }

  showPokemon(url: string) {
    this._url = url;
    this.pokeapiService.getPokemon(this._url)
    localStorage.setItem("pokemonUrl", this._url)
    this.router.navigate(['pokemon'])
  }
}
