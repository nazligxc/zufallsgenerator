import { Component } from '@angular/core';
import { Mitarbeiter } from './mitarbeiter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  random: number | undefined;
  chosenHistory: Mitarbeiter[] = [];
  newChosen: any;

  mitarbeiterListe: Mitarbeiter[] = [
    { id: 0, vorname: 'Armin', nachname: 'Otterstätter'},
    { id: 1, vorname: 'Christian', nachname: 'Löwe'},
    { id: 2, vorname: 'Dennis', nachname: 'Stanze'},
    { id: 3, vorname: 'Jerome', nachname: 'Goulet'},
    { id: 4, vorname: 'Kevin', nachname: 'Kremer'},
    { id: 5, vorname: 'Marian', nachname: 'Heck'},
    { id: 6, vorname: 'Mathieu', nachname: 'Weibel'},
    { id: 7, vorname: 'Maurice', nachname: 'Schlegel'},
    { id: 8, vorname: 'Max', nachname: 'Wölfel'},
    { id: 9, vorname: 'Michael', nachname: 'Glatt'},
    { id: 10, vorname: 'Michael', nachname: 'Maag'},
    { id: 11, vorname: 'Moritz', nachname: 'Schnaufer'},
    { id: 12, vorname: 'Muhammad', nachname: 'Abohegab'},
    { id: 13, vorname: 'Nazligül', nachname: 'Cayoglu'},
    { id: 14, vorname: 'Philipp', nachname: 'Andrikopoulos'},
    { id: 15, vorname: 'Richard', nachname: 'Montbrun'},
    { id: 16, vorname: 'Steffen', nachname: 'Rau'},
    { id: 17, vorname: 'Thomas', nachname: 'Renner'}
  ]
  
  onGenerate() {
    this.random = Math.floor(Math.random() * this.mitarbeiterListe.length);
    this.chosenHistory.push(this.mitarbeiterListe[this.random]);
    this.newChosen = this.chosenHistory[this.chosenHistory.length-1];
  }

}
