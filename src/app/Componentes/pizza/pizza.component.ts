import { Component, Input } from '@angular/core';
import { Pizza } from 'src/app/Clases/Pizza/pizza';

@Component({
    selector: 'app-pizza',
    templateUrl: './pizza.component.html',
    styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
    @Input()
    pizza: Pizza = new Pizza();
    @Input()
    esPar: boolean = false;

    /*
    public TextoGluten(): string {
        return this.pizza.estaLibreGluten ? "Está libre de Gluten"
            : "No está libre de Gluten"
    }
    */
}
