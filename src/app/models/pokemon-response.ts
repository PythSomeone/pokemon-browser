import { Pokemon } from "./pokemon-list-item";

export class PokemonResponse {
    count: number;
    next: string;
    previous: string;
    results: Array<Pokemon>;

    constructor(
        count: number,
        next: string,
        previous: string,
        results: Array<Pokemon>,
    ) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }
}