import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PizzasService } from 'src/app/Servicios/Pizzas/pizzas.service';
import { Pizza } from '../../../../Clases/Pizza/pizza';

@Component({
    selector: 'app-editar-pizza',
    templateUrl: './editar-pizza.component.html',
    styleUrls: ['./editar-pizza.component.css']
})
export class EditarPizzaComponent implements OnInit, AfterViewInit {
    public grupoPizza: FormGroup;
    private id = 0;
    private pizza = new Pizza();
    @ViewChild("inputNombre")
    inputNombre!: ElementRef;

    constructor(private formBuilder: FormBuilder, private rutaActiva: ActivatedRoute, private servicioPizzas: PizzasService, private router: Router) {
        this.grupoPizza = this.formBuilder.group({
            nombre: ['', Validators.required],
            estaLibre: [false],
        });
    }

    ngOnInit(): void {
        this.ObtenerPizzaEditar();
    }

    ngAfterViewInit(): void {
        const elemento = this.inputNombre.nativeElement;

        elemento.focus();
    }

    private ObtenerPizzaEditar() {
        this.rutaActiva.params.subscribe((params) => { this.id = +params['id']; });
        this.servicioPizzas.ObtenerPizza(this.id).subscribe({
            next: (dato: Pizza) => {
                this.pizza = dato;
                this.Resetear();
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

    public Resetear() {
        this.grupoPizza.patchValue({
            nombre: this.pizza.nombre,
            estaLibre: this.pizza.estaLibreGluten
        });
    }

    public EnviarPizza(): void {
        this.ModificarPizza();
        this.servicioPizzas.EditarPizza(this.pizza).subscribe({
            next: (dato: Pizza) => {
                alert(`Entrada editada correctamente (${dato.id} = ${this.pizza.id}) ...`);
                this.Cancelar();
            },
            error: (error) => {
                alert(`Entrada editada con error: ${error.message}...`);
            }
        })
    }

    private ModificarPizza(): void {
        this.pizza.nombre = this.grupoPizza.get('nombre')?.value;
        this.pizza.estaLibreGluten = this.grupoPizza.get('estaLibre')?.value;
    }
}
