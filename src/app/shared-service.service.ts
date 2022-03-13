import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  getvalue ="";
  editvalue=""
  name = ""
  color= ""
  comment=""
  constructor() { }
  
  getValue() : any{
    //return "this.message"
    //return this.getvalue;
    console.log("something")
  }
}
