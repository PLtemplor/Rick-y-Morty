import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CreatePasswordRoutingModule} from './create-password-routing.module';
import {CreatePasswordComponent} from './create-password.component';

@NgModule({
  declarations: [
    CreatePasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreatePasswordRoutingModule
  ]
})
export class CreatePasswordModule {}
