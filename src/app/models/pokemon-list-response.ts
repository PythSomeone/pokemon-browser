import { BaseModel } from "./base_model";

export class PokemonListResponse {
    count: number;
    next: string;
    previous: string;
    results: Array<BaseModel>;

    constructor(
        count: number,
        next: string,
        previous: string,
        results: Array<BaseModel>,
    ) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }
}
