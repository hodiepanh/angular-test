import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from './item-model/item-interface';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  getvalue ="";
  editvalue=""
  name = ""
  color= ""
  comment=""
  id:number=0;

  create_value!:Item; 
  edit_value!:Item;
  update_value!:Item;
  searchTerm!:string;

  //newValue=""
  //get added item data
  //private create_value = new BehaviorSubject<Item>({id:0,title:"",img:""})
  //createCast = this.create_value.asObservable()

  mockValueService: Item[]=[
    { title: "red", img: "imageOne" },
    { title: "blue", img: "imgTwo" }
  ]

  private test_value = new BehaviorSubject<Item>({title:"",img:""})
  cast = this.test_value.asObservable()
  
  constructor() { }
  
  getValue() : any{
    //return "this.message"
    //return this.getvalue;
    console.log("something")
  }

  editValue(newItemValue:Item){
    this.test_value.next(newItemValue)
  }

  getAll(): Item[]{
    return this.mockValueService
  }
  
  //dont know will work or not lmao
  //createValue(newItem:Item){
  //  this.create_value.next(newItem)
  //}
}
