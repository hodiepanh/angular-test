import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { SharedServiceService } from '../shared-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item-model/item-interface';

const mockValue = [
  { name: "name", color: "red", itemcmt: "comment" },
  { name: "name", color: "blue", itemcmt: "comment 2" }
]

const mockValueExtra: Item[]=[
  { title: "red", img: "imageOne" },
  { title: "blue", img: "imgTwo" }
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

  create_value!:Item; 

  constructor(
    private breakpointObserver: BreakpointObserver,
    private shareService: SharedServiceService,
    private router: Router,
    private activeRoute: ActivatedRoute) {
    //auto update created item
    this.addNew()
    
    //sync edited data
    //this.shareService.cast.subscribe(test_value => this.test_value = test_value)
    //this.shareService.createCast.subscribe(create_value => this.create_value=create_value)
    //console.log(this.create_value)
    //console.log(this.editValue.itemName)
    this.updateInfo(this.shareService.id)
    //alert("dashboard"+this.shareService.id)
    //console.log(this.shareService.id)
    this.search()
  }

  //value = mockValueExtra;
  value = this.shareService.mockValueService;
  //value = this.shareService.getAll()


  createValue!:Item;
  editValue: any;
  test_value:string=""
  // itemname: string = ""
  // itemcolor: string = ""
  // itemcmt: string = ""

  itemId!:number;
  itemTitle!:string;
  itemImage!:string;

  //id:number = 0

  // ngOnInIt(){
  //   this.shareService.cast.subscribe(test_value => this.test_value = test_value)
  // }

  //add new item
  addNew() {
      if(this.shareService.create_value!=undefined)
      {
        if(this.shareService.create_value.title!=""){
          this.createValue = this.shareService.create_value;
          //console.log(this.createValue);
          this.value.push(this.createValue);
          //this.shareService.mockValueService.push(this.createValue);
          //console.log(this.shareService.mockValueService)
        }
      }
      // this.itemcmt = this.createValue.itemComment;
      // if(this.createValue!=''){
      //   if(this.createValue.itemName!=''||this.createValue.itemColor!='')
      //   {
      //     this.itemname = this.createValue.itemName;
      //     this.itemcolor = this.createValue.itemColor;
      //     this.value.push({ name: this.itemname, color: this.itemcolor, itemcmt: this.itemcmt })
      //   }
      // }
      this.shareService.create_value = {title:"",img:""}
      // this.shareService.getvalue=''
      //console.log(this.itemname)
  }
  //onselect
  onSelect(value: any) {
    this.router.navigate(['/edit', this.value.indexOf(value)]);
    this.shareService.edit_value = {title: value.title, img: value.img};
    //this.itemId = this.value.indexOf(value);
    //this.shareService.name = value.name;
    //this.shareService.color = value.color;
    //this.shareService.id = this.value.indexOf(value)
    //alert(this.shareService.id)
    //console.log(this.value.indexOf(value))
  }

  //update info
  updateInfo(index:number){
    //console.log(this.shareService.update_value)
    //console.log(this.value[index])
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
  // updateInfo(index: number) {
  //   //this.shareService.cast.subscribe(test_value => this.test_value = this.test_value)
  //   //console.log(this.test_value)
  //   //console.log(this.value[index].color)
  //   if(this.test_value!='')
  //   {
  //     this.value[index].name = this.test_value;
  //   }

  //   if (this.shareService.editvalue!='') {
  //     this.editValue = this.shareService.editvalue;
  //     if(this.editValue.itemName!=''){
  //       //this.value[index].name = this.editValue.itemName;
  //       this.value[index].name = this.test_value;
  //     }
  //     if(this.editValue.itemColor!=''){
  //       this.value[index].color = this.editValue.itemColor;
  //     }
  //     //console.log(index)
  //   }
  //   //this.shareService.cast.subscribe(test_value => this.test_value = this.test_value)
  //   //alert(this.editValue.itemName)
  //   //console.log(this.shareService.editvalue)
  //   //console.log(this.shareService.getvalue)
  // }

  //remove item
  removeItem(index:number){
    //console.log(this.value)
    this.value.splice(index,1)
  }

  search(){
    this.activeRoute.params.subscribe(params => {
      if(params['searchTerm']){
        this.value = this.shareService.getAll().filter(item => item.title.toLowerCase().includes(params['searchTerm'].toLowerCase()));
        this.shareService.searchTerm = params['searchTerm']
        //this.value.filter(value => value.title.toLowerCase().includes(params['searchTerm'].toLowerCase()));
        //console.log(params['searchTerm'])
      }
    })
  }
}
