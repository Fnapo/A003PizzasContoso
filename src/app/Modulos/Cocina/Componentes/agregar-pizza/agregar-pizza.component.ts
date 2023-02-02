import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Pizza } from '../../../../Clases/Pizza/pizza';
import { PizzasService } from '../../../../Servicios/Pizzas/pizzas.service';

@Component({
    selector: 'app-agregar-pizza',
    templateUrl: './agregar-pizza.component.html',
    styleUrls: ['./agregar-pizza.component.css']
})
export class AgregarPizzaComponent implements AfterViewInit {
    public grupoPizza: FormGroup;
    private pizza = new Pizza();
    @ViewChild("inputNombre")
    inputNombre!: ElementRef;

    constructor(private formBuilder: FormBuilder, private router: Router, private servicioPizzas: PizzasService) {
        this.grupoPizza = this.formBuilder.group({
            nombre: ['', Validators.required],
            estaLibre: [false],
        });
    }

    ngAfterViewInit(): void {
        const elemento = this.inputNombre.nativeElement;

        elemento.focus();
    }

    public Cancelar() {
        this.router.navigate(['/cocina/dashboard']);
    }

    public Resetear() {
        this.grupoPizza.patchValue({
            nombre: this.pizza.nombre,
            estaLibre: this.pizza.estaLibreGluten
        });
    }

    public AgregarPizza(): void {
        this.ModificarPizza();
        this.servicioPizzas.EditarPizza(this.pizza).subscribe({
            next: (dato: Pizza) => {
                alert(`Pizza creada correctamente (${dato.id} = ${this.pizza.id}) ...`);
                this.Cancelar();
            },
            error: (error) => {
                alert(`Pizza no creda, existen algún error: ${error.message}...`);
            }
        })
    }

    private ModificarPizza(): void {
        this.pizza.nombre = this.grupoPizza.get('nombre')?.value;
        this.pizza.estaLibreGluten = this.grupoPizza.get('estaLibre')?.value;
    }
}
