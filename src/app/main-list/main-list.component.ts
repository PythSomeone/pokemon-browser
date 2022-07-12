import {Component, OnInit} from '@angular/core';
import {PokeapiService} from '../services/poke-api-service';
import {Pokemon} from "../../../../src/app/models/pokemon-list-item";
import {firstValueFrom, lastValueFrom} from "rxjs";


@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit {


  pokemons: Pokemon[] = []


  constructor(
    public pokeapiService: PokeapiService
  ) {

  }

  async ngOnInit(): Promise<void> {


    await this.pokeapiService.getPokemon()
    this.pokeapiService.pokemonListObservable.subscribe(
      result => {
        console.log(result)
        this.pokemons = result
      }
    );
    console.log(this.pokeapiService.pokemonListObservable)

  }


}
