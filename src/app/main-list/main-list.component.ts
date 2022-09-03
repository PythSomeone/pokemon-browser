import {Component, OnInit} from '@angular/core';
import {PokeapiService} from '../services/poke-api-service';
import {Router} from "@angular/router";
import {Paths} from "../models/paths";
import {BaseModel} from "../models/base_model";


@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {

  pokemons: BaseModel[] = []
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
    let pokemon = new BaseModel()
    this.pokemons = [...this.pokemons, pokemon]
  }

  showPokemon(url: string) {
    this._url = url;
    localStorage.setItem("pokemonUrl", this._url)
    this.router.navigate([Paths.POKEMON])
  }
}
