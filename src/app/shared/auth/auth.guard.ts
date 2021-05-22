import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate, CanActivateChild {
  private exceptions = ['/login'];
  constructor(private router: Router) {}
  private validateUrl(url) {
    console.log(url);
    if (this.exceptions.includes(url)) {
      return true;
    }
    if (localStorage.getItem('authToken') != null) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.validateUrl(state.url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.validateUrl(state.url);
  }
}
