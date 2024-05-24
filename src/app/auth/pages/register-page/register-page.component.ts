import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//No usamos funciones para validar, lo cambiamos por un servicio inyectable
//import * as customValidators from '../../../shared/validators/validators.functions';
import { ValidatorsService } from '../../../shared/service/validators.service';
import { ValidatorsEmailService } from '../../../shared/validators/validators-email.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.pattern(this.vs.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)],[this.eVS]],
    //email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)],[new ValidatorsEmailService()]],
    username:['',[Validators.required, this.vs.cantBeStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    confirmPassword:['',[Validators.required]],
    },
    {
      validators:[
        this.vs.isEqualPass('password','confirmPassword')
      ]
    }
  );

  constructor(private fb:FormBuilder,
    private vs:ValidatorsService,
    private eVS: ValidatorsEmailService
  ){}

  //todo isValidField()
  isValidField(field:string){
      return this.vs.isValidField(this.myForm, field);
  }

  //ToDo onSave() service
  onSave(){
    this.myForm.markAllAsTouched();
  }

}
