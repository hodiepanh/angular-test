import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedServiceService } from 'src/app/shared-service.service';
import { Item } from '../item-model/item-interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formCreate!: FormGroup;
  constructor(private formBuilder: FormBuilder, private shareService: SharedServiceService) { }

  //test_value: string = ""
  create_value!: Item;
  creatNewValue !:Item; 

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group({
      itemTitle: ['', Validators.required],
      //itemColor: ['', Validators.required],
      itemImage: ['', Validators.nullValidator]
    })
    //this.shareService.getvalue = this.formCreate.value;
    //this.shareService.cast.subscribe(test_value => this.test_value = test_value)
    //this.shareService.createCast.subscribe(create_value=>this.create_value=create_value)

  }

  getFormValue(  ){
    //creat new card
    //this.shareService.getvalue = this.formCreate.value;
    //this.create_value = this.formCreate.value.itemTitle;
    this.shareService.create_value = {title:this.formCreate.value.itemTitle,img:this.formCreate.value.itemImage}
    //this.shareService.createCast.subscribe(create_value => this.create_value= create_value)
    //this.shareService.createValue(this.create_value)
    //console.log(this.shareService.create_value)
    //alert(this.shareService.getvalue)
    //console.log( this.shareService.getvalue);
  }

}
