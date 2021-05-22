import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

type UserFields = 'password' | 'retypePassword';
type FormErrors = { [u in UserFields]: string };
@Component({
  selector: 'app-reset-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {

  public resetPasswordForm: FormGroup;
  showLoader = false;
  areDiferents = false;
  authToken: string;

  public formErrors: FormErrors = {
    password: '',
    retypePassword: ''
  };

  get password() {
    return this.resetPasswordForm.get('password');
  }

  public errorMessage: any;

  constructor(public authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.resetPasswordForm = fb.group({
      password: ['', Validators.required],
      retypePassword: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.authToken = params.authToken;
    });
    this.onChanges();
  }

  onChanges(): void {
    this.resetPasswordForm.valueChanges.subscribe(val => {
      this.areDiferents = false;
    });
  }

  setupPassword() {
    if (this.resetPasswordForm.value.password === this.resetPasswordForm.value.retypePassword) {
      this.showLoader = true;
      this.authService.setupPassword(this.authToken, this.resetPasswordForm.value.password).subscribe(setupPasswordResponse => {
        if (setupPasswordResponse.confirmed) {
          this.router.navigate(['/login']);
        }
        this.showLoader = false;
      }, error => {
        this.showLoader = false;
      });
    } else {
      this.areDiferents = true;
      this.showLoader = true;
    }
  }

}
