import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit(): void {
    //console.log(this.activeRoute.snapshot.paramMap.get('id'))
    //console.log(this.shareService.editvalue)
    this.inputName = this.shareService.name;
    this.inputColor = this.shareService.color;

    this.formEdit = this.formBuilder.group({
      itemName: [this.inputName, Validators.required],
      itemColor: [this.inputColor, Validators.required],
      itemComment: ['', Validators.nullValidator]
    })

  }

  updateValue(){
    this.shareService.editvalue = this.formEdit.value;
    //console.log(this.shareService.editvalue)
    //this.formEdit.controls['itemName'].setValue(this.inputName)
  }

  //fill info

}
