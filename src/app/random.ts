import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {

    getRandom(max: number) {
        return Math.round((Math.random() * max + 1) - 0.5);

    }
}