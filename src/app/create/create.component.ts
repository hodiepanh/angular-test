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
  constructor(private formBuilder: FormBuilder, private shareService: SharedServiceService) { }

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group({
      itemName: ['', Validators.required],
      itemColor: ['', Validators.required],
      itemComment: ['', Validators.nullValidator]
    })
    //this.shareService.getvalue = this.formCreate.value;
  }

  getFormValue(  ){
    //creat new card
    this.shareService.getvalue = this.formCreate.value;
    //alert(this.shareService.getvalue)
    //console.log( this.shareService.getvalue);
  }

}
