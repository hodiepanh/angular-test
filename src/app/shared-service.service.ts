import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from './item-model/item-interface';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  
  //data to create item
  create_value!:Item; 
  create_length!:number;

  //date to edit item
  edit_value!:Item;
  id!:number;
  update_value!:Item;

  mockValueService: Item[]=[
    { id:0, title: "red", img: "imageOne" },
    { id:1, title: "blue", img: "imgTwo" }
  ]
  
  constructor() { }

  //for filter function
  getAll(): Item[]{
    return this.mockValueService
  }
}
