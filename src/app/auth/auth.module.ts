import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveRoutingModule } from '../reactive/reactive-routing.module';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';


@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class AuthModule { }
