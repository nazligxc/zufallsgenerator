import { Injectable } from '@angular/core';
import { Colleagues } from '../colleagues';
import { RandomService } from '../random';
import { StorageService } from '../storage';

@Injectable()
export class ColleaguesClass {
    colleaguesList: Colleagues[] = [
        { id: 0, firstName: 'Armin', lastName: 'Otterstätter', imagePath: '../assets/images/mitarbeiter15.jpg'},
        { id: 1, firstName: 'Christian', lastName: 'Löwe', imagePath: '../assets/images/mitarbeiter5.jpg'},
        { id: 2, firstName: 'Dennis', lastName: 'Stanze', imagePath: '../assets/images/mitarbeiter7.jpg'},
        { id: 3, firstName: 'Jerome', lastName: 'Goulet', imagePath: '../assets/images/mitarbeiter11.jpg'},
        { id: 4, firstName: 'Kevin', lastName: 'Kremer', imagePath: '../assets/images/mitarbeiter8.jpg'},
        { id: 5, firstName: 'Marian', lastName: 'Heck', imagePath: '../assets/images/mitarbeiter13.jpg'},
        { id: 6, firstName: 'Mathieu', lastName: 'Weibel', imagePath: '../assets/images/mitarbeiter1.jpg'},
        { id: 7, firstName: 'Maurice', lastName: 'Schlegel', imagePath: '../assets/images/mitarbeiter1.jpg'},
        { id: 8, firstName: 'Max', lastName: 'Wölfel', imagePath: '../assets/images/mitarbeiter10.jpg'},
        { id: 9, firstName: 'Michael', lastName: 'Glatt', imagePath: '../assets/images/mitarbeiter2.jpg'},
        { id: 10, firstName: 'Michael', lastName: 'Maag', imagePath: '../assets/images/mitarbeiter3.jpg'},
        { id: 11, firstName: 'Moritz', lastName: 'Schnaufer', imagePath: '../assets/images/mitarbeiter12.jpg'},
        { id: 12, firstName: 'Muhammad', lastName: 'Abohegab', imagePath: '../assets/images/mitarbeiter9.jpg'},
        { id: 13, firstName: 'Nazligül', lastName: 'Cayoglu', imagePath: '../assets/images/mitarbeiter14.jpg'},
        { id: 14, firstName: 'Philipp', lastName: 'Andrikopoulos', imagePath: '../assets/images/mitarbeiter1.jpg'},
        { id: 15, firstName: 'Richard', lastName: 'Montbrun', imagePath: '../assets/images/mitarbeiter1.jpg'},
        { id: 16, firstName: 'Steffen', lastName: 'Rau', imagePath: '../assets/images/mitarbeiter6.jpg'},
        { id: 17, firstName: 'Thomas', lastName: 'Renner', imagePath: '../assets/images/mitarbeiter4.jpg'},
    ]

    constructor(private randomService: RandomService,
        private storageService: StorageService) {}


    private colleaguesMapping : number[] = this.mapping_init(new Array<number>(14, 14, 14, 14));

    private mapping_init(id_weighted: number[]) : number[]
    {
        let result: Array<number> = id_weighted;

        for (let i = 0; i <= this.colleaguesList.length-1; ++i)
        {
            result.push(i); 
        }

        return result;
    }

    getColleague() {
        var colleague_id: number = -1;
        var last_colleague_id: number = this.storageService.getLastColleagueID();

        do {
            var mapping_id: number = this.randomService.getRandom(this.colleaguesMapping.length-1);
            colleague_id = this.colleaguesMapping[mapping_id];
        } while(last_colleague_id === colleague_id)
        
        this.storageService.setLastColleague(colleague_id);

        return this.colleaguesList[colleague_id];
    }



}