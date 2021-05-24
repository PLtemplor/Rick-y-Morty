import {NgModule, Component} from '@angular/core'; 
import {LoginComponent} from './login.component';
import {ReactiveFormsModule, FormControl, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
 


const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    LoginComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    MatFormFieldModule,
    modules,

  ],

  exports: modules,

})



export class LoginModule {}
