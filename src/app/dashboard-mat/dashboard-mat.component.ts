import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { SharedServiceService } from '../shared-service.service';
import { Router } from '@angular/router';

const mockValue = [
  { name: "name", color: "red", itemcmt: "comment" },
  { name: "name", color: "blue", itemcmt: "comment 2" }
]

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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private shareService: SharedServiceService,
    private router: Router) {
    this.addNew()
    //this.updateInfo()

    //console.log(this.value)
  }

  value = mockValue;

  createValue: any;
  editValue: any;
  itemname: string = ""
  itemcolor: string = ""
  itemcmt: string = ""

  //add new item
  addNew() {
      this.createValue = this.shareService.getvalue;
      this.itemcmt = this.createValue.itemComment;
      if(this.createValue!=''){
        if(this.createValue.itemName!=''||this.createValue.itemColor!='')
        {
          this.itemname = this.createValue.itemName;
          this.itemcolor = this.createValue.itemColor;
          this.value.push({ name: this.itemname, color: this.itemcolor, itemcmt: this.itemcmt })
        }
      }

      this.shareService.getvalue=''
      //console.log(this.itemname)
  }
  //onselect
  onSelect(value: any) {
    this.router.navigate(['/edit', value.name]);
    this.shareService.name = value.name;
    this.shareService.color = value.color;
    //console.log(this.value.indexOf(value))


  }
  //update info
  updateInfo(index: number) {
    //console.log(index)
    console.log(this.value[index].color)
    if (this.shareService.editvalue!='') {
      this.editValue = this.shareService.editvalue;
      if(this.editValue.itemName!=''){
        this.value[index].name = this.editValue.itemName;
      }
      if(this.editValue.itemColor!=''){
        this.value[index].color = this.editValue.itemColor;
      }
      //console.log(index)
    }
    //console.log(this.editValue.itemName)
    //console.log(this.shareService.editvalue)
    //console.log(this.shareService.getvalue)
  }

  //remove item
  removeItem(index:number){
    //console.log(this.value)
    this.value.splice(index,1)
  }
}
