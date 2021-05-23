import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

type UserFields = 'password' | 'retypePassword';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerUserForm: FormGroup;
  showLoader = false;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private router: Router) {
    this.registerUserForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: [{name: `${environment.role}`}, Validators.required]
    });
  }

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  get password() {
    return this.registerUserForm.get('password');
  }

  // tslint:disable-next-line:typedef
  registerUser() {
    this.showLoader = true;

    // stop here if form is invalid
    if (this.registerUserForm.invalid) {
      this.showLoader = false;
      return;
    }

    this.userService.registerUser(this.registerUserForm.value).subscribe(
      (response) => {
        this.showLoader = false;
        this.router.navigate(['/register/success']);
      }, (error) => {
        this.showLoader = false;
      }
    );
  }
}
