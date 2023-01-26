import { Component } from '@angular/core';
import { TuplaLoginService } from '../../Servicios/TuplaLogin/tupla-login.service';

@Component({
    selector: 'app-front',
    templateUrl: './front.component.html',
    styleUrls: ['./front.component.css']
})
export class FrontComponent {
    constructor(private servicioTupla: TuplaLoginService) {
        servicioTupla.SetTuplaLogin(0, "");
    }
}
