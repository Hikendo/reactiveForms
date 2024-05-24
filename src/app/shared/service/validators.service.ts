import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

      public cantBeStrider=( control: FormControl): ValidationErrors | null =>{

        const value:string = control.value.trim().toLowerCase();
        if(value==='strider'){
          return {
            noStrider:true,
          };

        }
        return null;

      }
      public isValidField( form : FormGroup,field:string){
        return form.controls[field].errors && form.controls[field].touched;
      }

      public getFieldError(form : FormGroup,field: string): string | null{
          if(!form.controls[field]) return null;
          const errors= form.controls[field].errors || {};
        for (const key of Object.keys(errors)) {
          switch(key){
            case 'required':
              return 'Este campo esta vacío'
            case 'minlength':
              return `El minimo requerido es ${errors['minlength'].requiredLength} caracteres`;
            case 'min':
              return `El minimo requerido es 0 `;

          }

        }
        return null;
      }
}
