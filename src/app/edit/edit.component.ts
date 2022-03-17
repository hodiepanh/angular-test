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
  
  //to pass into the update function
  id!:number;

  inputEdit!:Item;
  editNewItem!:Item;

  ngOnInit(): void {
    this.shareService.id = parseInt(this.activeRoute.snapshot.paramMap.get('id')!)
    //read data from dashboard to edit window
    //paste data into form
    this.inputEdit = this.shareService.edit_value
    this.formEdit = this.formBuilder.group({
      itemTitle: [this.inputEdit.title, Validators.required],
      //itemImage: [this.inputEdit.img, Validators.nullValidator]
    })
  }

  updateEditValue(index:number){
    //pass the edited data
    //send to dashboard
    this.editNewItem = {id: index, title:this.formEdit.value.itemTitle, img:this.formEdit.value.itemImage}
    this.shareService.update_value= this.editNewItem;
  }
}
