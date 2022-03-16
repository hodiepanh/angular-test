import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../item-model/item-interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formEdit!: FormGroup;
  constructor(private activeRoute: ActivatedRoute,
    private shareService: SharedServiceService,
    private formBuilder: FormBuilder) { }

  inputName: string = ""
  inputColor: string =""
  test_value: string = ""
  editNewValue: string =""
  id:number = 0

  testItem!:Item;
  inputEdit!:Item;
  editNewItem!:Item;
  editTitle!:string;
  editImg!:string;

  ngOnInit(): void {
    //console.log(this.activeRoute.snapshot.paramMap.get('id'))
    //console.log(this.shareService.editvalue)
    this.shareService.id = parseInt(this.activeRoute.snapshot.paramMap.get('id')!)
    //alert(this.id)
    this.inputEdit = this.shareService.edit_value
    //console.log(this.inputEdit)
    //this.inputName = this.shareService.name;
    //this.inputColor = this.shareService.color;
    //this.id = this.shareService.id;
    //alert(this.id)
    this.formEdit = this.formBuilder.group({
      itemName: [this.inputEdit.title, Validators.required],
      //itemColor: [this.inputColor, Validators.required],
      itemComment: [this.inputEdit.img, Validators.nullValidator]
    })

    //this.shareService.cast.subscribe(test_value => this.test_value = test_value)
    //this.shareService.cast.subscribe(test_value => this.testItem = test_value)
  this.shareService.update_value = {title:"",img:""}
  //console.log(this.editNewItem)
    //this.shareService.cast.subscribe(id=>this.id=id)
    //alert(this.test_value)
  }

  // updateValue(){
  //   this.shareService.editvalue = this.formEdit.value;
  //   //this.shareService.cast.subscribe(this.formEdit.value => {this.shareService.editvalue  = this.formEdit.value)
  //   //alert(this.test_value)
  //   //console.log(this.shareService.editvalue)
  //   //this.formEdit.controls['itemName'].setValue(this.inputName)
  // }

  editValueTest(index:number){
    this.editNewItem = {title:this.formEdit.value.itemName, img:this.formEdit.value.itemComment}
    //this.shareService.editValue(this.editNewItem)
    this.shareService.update_value= this.editNewItem;
    //console.log(this.shareService.update_value)
    //console.log(this.test_value)
    //alert(this.test_value)
  }
  //fill info

}
