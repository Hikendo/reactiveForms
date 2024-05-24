import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent implements OnInit{

 /* Forma básica y con mas sintaxis
  public myForm: FormGroup= new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    inStorage: new FormControl(0)
  });
  La de abajo es una sintaxis mas sencilla
  usando Form builder y agrupando los campos PARA
  PASARLOS COMO un objeto
*/


  constructor(private fb: FormBuilder){}
  private prodDefault = {
    name: 'RTX 6090',
    price: 3000,
    inStorage: 5
    }
  ngOnInit(): void {
   this.myForm.reset(this.prodDefault);
  }

  isValidField(field:string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getFieldError(field: string): string | null{
      if(!this.myForm.controls[field]) return null;
      const errors= this.myForm.controls[field].errors || {};
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

  public myForm: FormGroup= this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage:[0, [Validators.required, Validators.min(0)]]
  });

  onSave():void{
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;}
    //alert(this.myForm.value)
    this.myForm.reset({
      name: '',
      price: 1,
      inStorage: 1
    })
  }


}
