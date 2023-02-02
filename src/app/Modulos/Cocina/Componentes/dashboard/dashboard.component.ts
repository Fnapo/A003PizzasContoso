import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Pizza } from 'src/app/Clases/Pizza/pizza';
import { PizzasService } from 'src/app/Servicios/Pizzas/pizzas.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public listadoPizzas: (Pizza[] | null) = null;
    public readonly minimo = 5;
    public readonly maximo = 1000;

    constructor(private servicioPizzas: PizzasService, private router: Router) { }

    ngOnInit(): void {
        this.servicioPizzas.RecuperarPizzas().subscribe({
            next: dato => this.listadoPizzas = dato,
            error: () => { },
            complete: () => { }
        })
    }

    LongitudLista(): number {
        return this.listadoPizzas == null ? 0 : this.listadoPizzas.length;
    }

    /*
        public CrearPizza(): void {

        }
    */

    public Logout(): void {
        this.router.navigate(['/front/sobreNosotros']);
    }
}
