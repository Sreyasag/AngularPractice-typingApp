import { Component } from '@angular/core';
import {faker} from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.lorem.sentence(5);
  inputText="";
  takeInputData(event:any){
    this.inputText=event.target.value;
  }
  compare(randomLetter:string, inputLetter:string){
    return !inputLetter ? "pending" : inputLetter===randomLetter ? "correct" : "incorrect" ;
  }

}
