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
    private pizzaInicial = new Pizza();
    private pizzaFinal = new Pizza();
    public esEditar = false;
    @ViewChild("inputNombre")
    inputNombre!: ElementRef;

    constructor(private formBuilder: FormBuilder, private rutaActiva: ActivatedRoute, private servicioPizzas: PizzasService, private router: Router) {
        this.grupoPizza = this.formBuilder.group({
            nombre: ['', Validators.required],
            estaLibre: [false],
        });
    }

    ngOnInit(): void {
        this.esEditar = (this.router.url.includes("editar"));
        if (this.esEditar) {
            this.ObtenerPizzaEditar();
        }
    }

    ngAfterViewInit(): void {
        const elemento = this.inputNombre.nativeElement;

        elemento.focus();
    }

    private ObtenerPizzaEditar() {
        this.rutaActiva.params.subscribe((params) => {
            this.id = +params['id'];
            this.pizzaFinal.id = this.id;
        });
        this.servicioPizzas.ObtenerPizza(this.id).subscribe({
            next: (dato: Pizza) => {
                this.pizzaInicial = dato;
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
            nombre: this.pizzaInicial.nombre,
            estaLibre: this.pizzaInicial.estaLibreGluten
        });
    }

    public EnviarPizza(): void {
        this.ModificarPizza();
        if (this.esEditar) {
            this.EditandoPizza();
        }
        else {
            this.CreandoPizza();
        }
    }

    private ModificarPizza(): void {
        this.pizzaFinal.nombre = this.grupoPizza.get('nombre')?.value;
        this.pizzaFinal.estaLibreGluten = this.grupoPizza.get('estaLibre')?.value;
    }

    private EditandoPizza(): void {
        this.servicioPizzas.EditarPizza(this.pizzaFinal).subscribe({
            next: (dato: Pizza) => {
                alert(`Pizza editada correctamente (${dato.id} = ${this.pizzaFinal.id}) ...`);
                this.Cancelar();
            },
            error: (error) => {
                alert(`Pizza no editada, existe algún error: ${error.message}...`);
            }
        })
    }

    private CreandoPizza(): void {
        this.servicioPizzas.AgregarPizza(this.pizzaFinal).subscribe({
            next: (dato: Pizza) => {
                alert(`Pizza agregada correctamente (Ref: ${dato.id}) ...`);
                this.Cancelar();
            },
            error: (error) => {
                alert(`Pizza no agregada, existe algún error: ${error.message}...`);
            }
        })
    }
}
