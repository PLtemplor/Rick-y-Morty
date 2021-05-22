import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(protected http: HttpClient) {}

  registerUser(formData) {
    return this.http.post(`${environment.authMicroserviceUrl}/api/v1/user/register`, formData);
  }

}
