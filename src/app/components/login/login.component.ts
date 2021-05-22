import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ClientService} from '../../services/client.service';

type UserFields = 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public loginForm: FormGroup;
  showLoader = false;

  public formErrors: FormErrors = {
    email: '',
    password: '',
  };

  public errorMessage: any;

  constructor(public authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private clientService: ClientService) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async login() {
    this.showLoader = true;
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(async tokenInfo => {
      localStorage.setItem('authToken', tokenInfo.authToken);
      localStorage.setItem('refreshToken', tokenInfo.refreshToken);
      await this.clientService.hasAClient().toPromise().then((data) => {
        localStorage.setItem('hasAClient', data);
      }).catch((error) => {localStorage.setItem('hasAClient', 'false'); });
      this.router.navigate(['/campaign/list']);
      this.showLoader = false;
    }, error => {
      this.showLoader = false;
    });
  }

  goToRegister() {
    this.router.navigate(['register']);
  }

}
