import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

const mockValue =[
  {name:"name", color:"color", itemcmt:"comment"},
  {name:"name", color:"color", itemcmt:"comment 2"}
]
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private shareService: SharedServiceService) { }

  ngOnInit(): void {
  }

  value = mockValue;

  createValue: any;
  itemname: string =""
  itemcolor: string =""
  itemcmt: string =""
  getDetail() {
    this.createValue = this.shareService.getvalue;
    this.itemname = this.createValue.itemName;
    this.itemcolor = this.createValue.itemColor;
    this.itemcmt=this.createValue.itemComment;
    this.value.push({name:this.itemname,color:this.itemcolor,itemcmt:this.itemcmt})
    console.log(this.value)
  }

}
