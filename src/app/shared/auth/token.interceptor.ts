import {Injectable} from '@angular/core';
import {HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {environment} from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private microservicesPaths = [environment.authMicroserviceUrl, environment.rickAndMorityUrl];

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (this.microservicesPaths.find(microUrl => req.url.startsWith(microUrl))) {
      const authToken = localStorage.getItem('authToken');
      const request = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
      return next.handle(request);
    }
    return next.handle(req);
  }
}
