import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Dark Souls',Validators.required],
      ['Elden Ring', Validators.required],
    ])
  });

  public newFavorite: FormControl= new FormControl('',Validators.required);


  constructor(private fb : FormBuilder ){}

  get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray;
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
          return `El mínimo requerido es ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `El mínimo requerido es 0 `;

      }
    }
  return null;
  }

  isValidFieldInArray(formArray:FormArray, index: number){

    return formArray.controls[index].errors && formArray.controls[index].touched;
  }

onDeleteFavorite(index:number):void{
  this.favoriteGames.removeAt(index);
}

onAddToFavorites():void{
  //todo

  if(this.newFavorite.invalid) return;


  const newGame:FormControl = this.newFavorite.value;
  this.favoriteGames.push(
    this.fb.control( newGame, Validators.required)
  );
  this.newFavorite.reset();
}

  onSubmit():void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    (this.myForm.controls['favoriteGames'] as FormArray)= this.fb.array([]);
    this.myForm.reset();
  }




}
