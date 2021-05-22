import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {concatMap} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import TokenResponseDto from '../dto/token.response.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.authMicroserviceUrl}/api/v1/user/authenticate`, {
      email,
      password
    }).pipe(concatMap((data) => {
          return this.http.post<TokenResponseDto>(`${environment.authMicroserviceUrl}/api/v1/user/getTokens`, { idToken: data.token});
    }));
  }

  refreshToken(refreshToken: string) {
    return this.http.post(`${environment.authMicroserviceUrl}/api/v1/user/getTokens`, { refresh_token: refreshToken});
  }

  setupPassword(authToken: string, password: string) {
    return this.http.post<any>(`${environment.authMicroserviceUrl}/api/v1/user/setupPassword`, {
      authToken,
      password
    });
  }
}
