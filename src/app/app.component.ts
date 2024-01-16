import { Component, OnInit } from '@angular/core';
import { ColleaguesClass } from './colleagues/colleagues';
import { RandomService } from './random';
import { StorageService } from './storage';

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

  private colleaguesClass: ColleaguesClass = new ColleaguesClass(new RandomService(), new StorageService());

  generateName() {
    this.newlyChosen = this.colleaguesClass.getColleague();
    localStorage.setItem(this.newlyChosen.id, this.newlyChosen.firstName);

    this.lastChosenColleagues = localStorage;
    // for(let i: number in localStorage) {
    //   localStorage.getItem(i);
    // }
    console.log(this.newlyChosen.id);
    // console.log(this.lastChosenColleagues);
  }


}





