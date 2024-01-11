import { Component } from '@angular/core';
import { Colleagues } from './colleagues';
import { colleaguesList } from './colleagues/colleagues';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  placeholderName: string = 'Max Mustermann';
  randomColleague: number | undefined;
  lastChosenColleagues: Colleagues[] = [];
  newlyChosen: any;
  
  generateName() {
    this.randomColleague = Math.floor(Math.random() * colleaguesList.length);
    this.lastChosenColleagues.push(colleaguesList[this.randomColleague]);
    this.newlyChosen = this.lastChosenColleagues[this.lastChosenColleagues.length-1];
  }

}
