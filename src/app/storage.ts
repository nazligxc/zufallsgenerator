import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    private lastId: number = 0;

    setLastColleague(id: number) { 
        this.lastId = id;
    }

    getLastColleagueID(): number {
        return this.lastId;
    }
}