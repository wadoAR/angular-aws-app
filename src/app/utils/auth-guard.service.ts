import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../authentication/service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authService.isUserAuthenticated()) {
      this.authService.logout();
      this.router.navigate(['/login']).then();
      return false;
    }

    if (next.data.roles && next.data.roles.indexOf(this.authService.currentUserRole) === -1) {
      this.router.navigate(['/']).then();
      return false;
    }
    return true;
  }
}
