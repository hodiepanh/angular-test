import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formCreate!: FormGroup;
  form_id!:number;

  constructor(private formBuilder: FormBuilder, private shareService: SharedServiceService) { }

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group({
      itemTitle: ['', Validators.required],
      itemImage: ['', Validators.nullValidator]
    })
    //pass the id from dashboard to create window
    this.form_id = this.shareService.create_length
  }

  getFormValue(  ){
    if(this.formCreate.value.itemTitle==""){
      alert("please enter item name")
    }
    else {
      this.shareService.create_value = {id: this.form_id, title:this.formCreate.value.itemTitle,img:this.formCreate.value.itemImage}
      alert("item has been added, please return to dashboard")

    }
  }

}
