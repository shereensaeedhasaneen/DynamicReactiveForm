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

  ///// for step 2 ///////
  registerationForm2: FormGroup;
  dynamicFormArray2: any;

  nextStep =0;
  constructor(private httpClient:HttpClient , private fb:FormBuilder) {
    this.registerationForm = this.fb.group({

    })

    this.registerationForm2 = this.fb.group({

    })

   }

  ngOnInit(): void {
    this.httpClient.get('/assets/DynamicFormControl.json').subscribe(data=>{
      this.dynamicFormArray =data;
      this.createFormControl(this.dynamicFormArray , this.registerationForm);
      console.log(this.dynamicFormArray)
    })

    ////////// for step 2 /////////////////
    this.dynamicFormArray2=[
      {ID: 'FirstName', Label: 'First Name', Type: 'input', Value: '', Required: true},
      {ID: 'Gender', Label: 'Gender', Type: 'radio', Value: 'male , female', Required: true},
      {ID: 'Address', Label: 'Address', Type: 'input', Value: '', Required: true}
                           ]
    this.createFormControl(this.dynamicFormArray2 , this.registerationForm2);
    console.log(this.nextStep)

  }

  createFormControl( arr :any , fG:FormGroup){
    // in this method we create formcontrol based on dynamicFormArra
    arr.forEach((element:any) => {
      if(element.Required){
        fG.addControl(element.ID , new FormControl('' , Validators.required))
      }

      else{
        fG.addControl(element.ID , new FormControl(''))
      }
    });
   // console.log(this.registerationForm)
  }


}
