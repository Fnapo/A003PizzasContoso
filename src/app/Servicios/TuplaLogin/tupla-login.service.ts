import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TuplaLogin } from '../../Clases/TuplaLogin/tupla-login';

@Injectable({
    providedIn: 'root'
})
export class TuplaLoginService {
    private tuplaLogin: BehaviorSubject<TuplaLogin> = new BehaviorSubject<TuplaLogin>(new TuplaLogin());
    public tuplaLogin$: Observable<TuplaLogin> = this.tuplaLogin.asObservable();

    constructor() { }

    public SetTuplaLogin(token: number, nombre: string): void {
        let nuevaTupla = new TuplaLogin();

        nuevaTupla.nombreUsuario = nombre;
        nuevaTupla.token = token;
        this.tuplaLogin.next(nuevaTupla);
    }
}
