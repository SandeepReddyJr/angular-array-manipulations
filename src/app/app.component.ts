import { Component } from '@angular/core';
import { GLTbYearModel } from './model/gl.model';
import { GL_INFO } from './model/general-ledger.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-array-manipulations';
  glData : any = GL_INFO;


  constructor() {
    const information = JSON.parse(JSON.stringify(this.glData));


    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(console.log);
  }
}
