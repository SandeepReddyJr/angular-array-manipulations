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
  usersInfo: any[] = [];

  constructor() {
    const information = JSON.parse(JSON.stringify(this.glData));


    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(res => {
      this.usersInfo = res?.users;
      
      const users = JSON.parse(JSON.stringify(this.usersInfo));
      console.log("USERS INFO",users);
      // users?.forEach((user: any,index: any) => {
      // //   const sc = user?.company?.address?.stateCode;
      // //   // console.log("User OBject For the Index",index,sc);
      // //   const stateCodeIndex = ["MS", "WI", "CA"].indexOf(sc);
      // //   // console.log("Index Value of the Ssate Code",stateCodeIndex);

      // //   if(stateCodeIndex >= 0) {
      // //     console.log("State Code is Present in Given List",user)
      // //   } 
      // //   // else {
      // //   //   console.log("State Code is Not Present in the Given List");
      // //   // }
      //   const homeAddress = user?.address?.city
      //   const officeAddress = user?.company?.address?.city;
        
      // });

      const updatedUsers = JSON.parse(JSON.stringify(this.usersInfo))?.sort((a:any,b: any) =>  b?.age - a?.age);

      console.log("TRANSFORMED USERS ",updatedUsers)


    //   const hasSelectedCity = users.some((user: any,index: any) => {
    //     const homeAddress = user?.address?.city
    //     const officeAddress = user?.company?.address?.city;
    //     if(homeAddress === 'India' || officeAddress === 'India') {
    //      return true
    //     }
    //     return false
    //   });

    //   console.log("hasSelectedCity",hasSelectedCity)
    });
  
  }
}
