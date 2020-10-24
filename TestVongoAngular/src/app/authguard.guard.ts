import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthServiceService} from './auth/auth-service.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private authservice: AuthServiceService, private router: Router) {
  }

  canActivate(): boolean {
    if (this.authservice.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'you Need To LogIn',
      });
      return false;
    }
  }
}
