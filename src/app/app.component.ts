import { Component } from '@angular/core';
import { Mitarbeiter } from './mitarbeiter';
import { mitarbeiterListe } from './colleagues/colleagues';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  random: number | undefined;
  chosenHistory: Mitarbeiter[] = [];
  newChosen: any;
  
  onGenerate() {
    this.random = Math.floor(Math.random() * mitarbeiterListe.length);
    this.chosenHistory.push(mitarbeiterListe[this.random]);
    this.newChosen = this.chosenHistory[this.chosenHistory.length-1];
  }

}
