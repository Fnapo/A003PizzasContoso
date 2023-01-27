import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TuplaLoginService } from '../../../../Servicios/TuplaLogin/tupla-login.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    constructor(private tuplaServicio: TuplaLoginService, private router: Router) { }

    public CrearPizza(): void {

    }

    public Logout(): void {
        this.router.navigate(['/front/sobreNosotros']);
    }
}
