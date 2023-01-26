import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/Clases/Pizza/pizza';
import { PizzasService } from 'src/app/Servicios/Pizzas/pizzas.service';

@Component({
    selector: 'app-listado-pizzas',
    templateUrl: './listado-pizzas.component.html',
    styleUrls: ['./listado-pizzas.component.css']
})
export class ListadoPizzasComponent implements OnInit {
    public listaPizzas: Pizza[] = [];

    constructor(private servicioPizzas: PizzasService) { }

    ngOnInit(): void {
        this.ObtenerPizzas();
    }

    private ObtenerPizzas(): void {
        this.servicioPizzas.RecuperarPizzas().subscribe({
            next: (dato) => this.listaPizzas = dato, // correcto
            error: (error) => { }, // error
            complete: () => { } // fin
        });
    }
}
