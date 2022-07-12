import { PokemonListItem } from "./pokemon-list-item";

export class PokemonListResponse {
    count: number;
    next: string;
    previous: string;
    results: Array<PokemonListItem>;

    constructor(
        count: number,
        next: string,
        previous: string,
        results: Array<PokemonListItem>,
    ) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }
}
