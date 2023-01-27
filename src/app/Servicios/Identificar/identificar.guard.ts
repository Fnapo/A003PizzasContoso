import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TuplaLogin } from 'src/app/Clases/TuplaLogin/tupla-login';
import { TuplaLoginService } from '../TuplaLogin/tupla-login.service';

@Injectable({
    providedIn: 'root'
})
export class IdentificarGuard implements CanActivate {

    private tuplaLogin: TuplaLogin = new TuplaLogin();

    constructor(private servicioTupla: TuplaLoginService, private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        this.servicioTupla.tuplaLogin$.subscribe((dato: TuplaLogin) => { this.tuplaLogin = dato; });

        if (this.tuplaLogin.token <= 0) {
            this.router.navigate(["/login"]);

            return false;
        }

        return true;
    }

}
