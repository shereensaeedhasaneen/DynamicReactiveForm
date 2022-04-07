import { Formcontrols } from './../../models/formcontrols';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registerationForm: FormGroup;
  dynamicFormArray: any;

  constructor(private httpClient:HttpClient , private fb:FormBuilder) {
    this.registerationForm = this.fb.group({

    })
   }

  ngOnInit(): void {
    this.httpClient.get('/assets/DynamicFormControl.json').subscribe(data=>{
      this.dynamicFormArray =data;
      this.createFormControl();
      console.log(this.dynamicFormArray)
    })


  }

  createFormControl(){
    // in this method we create formcontrol based on dynamicFormArra
    this.dynamicFormArray.forEach((element:any) => {
      if(element.Required){
        this.registerationForm.addControl(element.ID , new FormControl('' , Validators.required))
      }

      else{
        this.registerationForm.addControl(element.ID , new FormControl(''))
      }
    });
    console.log(this.registerationForm)
  }
}
