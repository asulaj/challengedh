import { Data } from "@angular/router";

export interface Result {
    name: string;
    gender: string;
    probability: number;
    count: number;
    dateSearched: Data;
}