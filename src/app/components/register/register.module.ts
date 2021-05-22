import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register.component';
import {RegisterSuccessComponent} from './register-success/register-success.component';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterSuccessComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule {}
