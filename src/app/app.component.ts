import { Component, OnInit } from '@angular/core';
import { Colleagues } from './colleagues';
import { ColleaguesClass } from './colleagues/colleagues';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  placeholderName: string = 'Max Mustermann';
  randomColleague: number | undefined;
  lastChosenColleagues: Storage | undefined;
  newlyChosen: any;

  constructor(private colleaguesClass: ColleaguesClass) {}

  
  generateName() {
    this.randomColleague = Math.floor(Math.random() * this.colleaguesClass.colleaguesList.length);
    this.newlyChosen = this.colleaguesClass.colleaguesList[this.randomColleague];
    localStorage.setItem(this.newlyChosen.id, this.newlyChosen.firstName);

    this.lastChosenColleagues = localStorage;
    // for(let i: number in localStorage) {
    //   localStorage.getItem(i);
    // }
    console.log(this.lastChosenColleagues);
  }


}





