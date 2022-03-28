import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { SharedServiceService } from '../shared-service.service';
import { Router } from '@angular/router';
import { Item } from '../item-model/item-interface';
import { timer } from 'rxjs';
import { Validators, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-dashboard-mat',
  templateUrl: './dashboard-mat.component.html',
  styleUrls: ['./dashboard-mat.component.css']
})
export class DashboardMatComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  
  //get data of created item
  createValue!:Item;

  searchItem = new FormControl('', Validators.required); 

  constructor(
    private breakpointObserver: BreakpointObserver,
    private shareService: SharedServiceService,
    private router: Router) {

    
      //auto update created item
    this.addNew()
    this.shareService.create_length =this.value.length; //auto increment id of created item
    
    //auto update edited item
    this.updateInfo(this.shareService.id)

    //search auto using debounce time
    this.searchItem.valueChanges.pipe(debounceTime(500))
    .subscribe((s)=>{
      this.value = this.shareService.getAll().filter(item => item.title.toLowerCase().includes(this.searchItem.value))
    });
  }

  //pass the data into the dashboard
  value = this.shareService.mockValueService;

  addNew() {
      if(this.shareService.create_value!=undefined)
      {
        if(this.shareService.create_value.title!=""){
          //read the value
          //then push item to cards array
          this.createValue = this.shareService.create_value;
          this.value.push(this.createValue);
        }
      }
      //reset the value
      this.shareService.create_value = {id:0, title:"",img:""}
  }

  //onselect
  onSelect(value: any) {
    this.router.navigate(['/edit', this.value.indexOf(value)]);
    //send data of selected item to edit window
    this.shareService.edit_value = {id: value.id, title: value.title, img: value.img};
  }

  //update info
  updateInfo(index:number){
    if(this.shareService.update_value!=undefined)
    {
      if(this.shareService.update_value.title!=undefined)
      {
        this.value[index].title = this.shareService.update_value.title;
      }
      if(this.shareService.update_value.img!=undefined)
      {
        this.value[index].img = this.shareService.update_value.img;
      }
    }
  }
  
  //remove item
  removeItem(index:number){
    this.value.splice(index,1)
  }
}
