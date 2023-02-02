import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Pizza } from 'src/app/Clases/Pizza/pizza';
import { PizzasService } from 'src/app/Servicios/Pizzas/pizzas.service';

@Component({
    selector: 'app-borrar-pizza',
    templateUrl: './borrar-pizza.component.html',
    styleUrls: ['./borrar-pizza.component.css']
})
export class BorrarPizzaComponent implements OnInit {
    public grupoPizzaBorrar: FormGroup;
    private id = 0;
    public pizza = new Pizza();

    constructor(private formBuilder: FormBuilder, private rutaActiva: ActivatedRoute, private servicioPizzas: PizzasService, private router: Router) {
        this.grupoPizzaBorrar = this.formBuilder.group({
            seraBorrada: [false, Validators.requiredTrue]
        });
    }
    ngOnInit(): void {
        this.ObtenerPizzaBorrar();
    }

    private ObtenerPizzaBorrar() {
        this.rutaActiva.params.subscribe((params) => { this.id = +params['id']; });
        this.servicioPizzas.ObtenerPizza(this.id).subscribe({
            next: (dato: Pizza) => {
                this.pizza = dato;
            },
            error: (error) => {
                alert(`Error: ${error.message}`);
                this.Cancelar();
            },
            complete: () => { }
        });
    }

    public Cancelar() {
        this.router.navigate(['/cocina/dashboard']);
    }

    public BorrarPizza(): void {
        this.servicioPizzas.BorrarPizza(this.pizza.id).subscribe({
            next: (pizza: Pizza) => {
                alert(`Pizza (Ref: ${pizza.id}) borrada correctamente ...`);
                this.Cancelar();
            },
            error: (error) => {
                alert(`Pizza no borrada, hay un error: ${error.message}...`);
            }
        })
    }
}
