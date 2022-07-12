import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, Subject, Subscription} from "rxjs";
import {Endpoints} from "../../../../src/app/models/endpoints";
import {Pokemon} from "../../../../src/app/models/pokemon-list-item";
import {PokemonResponse} from "../../../../src/app/models/pokemon-response";


@Injectable({providedIn: 'root'})
export class PokeapiService {
  private API_URL = 'https://pokeapi.co/api/v2/'
  pokemonListSource = new Subject<Pokemon[]>()
  pokemonListObservable : Observable<Pokemon[]> = this.pokemonListSource.asObservable()
  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');


  constructor(
    private http: HttpClient,
  ) {
  }

  async getPokemon(): Promise<Pokemon[]> {
    let pokemonResponse : PokemonResponse = new PokemonResponse(0,"","",[new Pokemon("","")]);
    await this.http.get(this.API_URL + Endpoints.Pokemon, {headers: this.headers}).subscribe(
      async response => {
        pokemonResponse = response as PokemonResponse
        this.setPokemon(pokemonResponse.results as Pokemon[])
      }
    )
    return pokemonResponse.results
  }

  setPokemon(pokemons: Pokemon[]) {
    this.pokemonListSource.next(pokemons)
  }



}
