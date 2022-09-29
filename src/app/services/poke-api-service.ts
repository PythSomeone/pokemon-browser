import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, Subject, Subscription} from "rxjs";
import {PokemonListResponse} from "../models/pokemon-list-response";
import {BaseModel} from "../models/base_model";
import {PokemonResponse} from "../models/pokemon-response";
import {Endpoints} from "../models/endpoints";


@Injectable({providedIn: 'root'})
export class PokeapiService {
  private API_URL = 'https://pokeapi.co/api/v2/'
  pokemonListSource = new Subject<BaseModel[]>()
  pokemonListObservable: Observable<BaseModel[]> = this.pokemonListSource.asObservable()
  currentPokemonSource = new Subject<PokemonResponse>()
  currentPokemonObservable: Observable<PokemonResponse> = this.currentPokemonSource.asObservable()
  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');


  constructor(
    private http: HttpClient,
  ) {
  }

  async getPokemonList(): Promise<Subscription> {
    return this.http.get(this.API_URL + Endpoints.Pokemon, {headers: this.headers}).subscribe(
      response => {
        const pokemonResponse = response as PokemonListResponse
        this.setPokemonList(pokemonResponse.results as BaseModel[])
      }
    )
  }

  setPokemonList(pokemons: BaseModel[]) {
    this.pokemonListSource.next(pokemons)
  }

  async getPokemon(pokemonUrl: string): Promise<Subscription> {
    return this.http.get(pokemonUrl, {headers: this.headers}).subscribe(
      response => {
        const pokemonDetails = response as PokemonResponse
        this.setCurrentPokemon(pokemonDetails)
      }
    )
  }

  setCurrentPokemon(pokemon: PokemonResponse) {
    this.currentPokemonSource.next(pokemon)
  }

}
