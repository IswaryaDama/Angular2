import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RouterService } from './services/router.service';
import { AuthenticationService } from './services/authentication.service';
@Injectable()
export class CanActivateRouteGuard implements CanActivate {
  //private bearertoken: string;
  //private isAuthenticated: boolean;
  constructor(private routeService: RouterService, private authService: AuthenticationService) {
   // this.bearertoken = this.authService.getBearerToken();
   // this.isAuthenticated = true;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {

      const bearerToken=localStorage.getItem('bearerToken');

      console.log("Guard "+bearerToken);

      if(bearerToken!=null)
      {
        const authStatus= this.authService.isUserAuthenticated(bearerToken).then(
          (data)=>{
            return data;
          },
          err=>{
            console.log(err);
          });
          
          authStatus.then(result=>{
            console.log("Final Result "+result);
          })

          if(authStatus)
          {
            return true
          }
      }
      else
      {
        this.routeService.routeToLogin();
        return false;
      }
  }
}


