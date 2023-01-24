import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/Clases/Pizza/pizza';

@Injectable({
    providedIn: 'root'
})
export class PizzasService {
    private pathURL: string = "https://serverapi.somee.com/pizzas"

    constructor(private httpClient: HttpClient) { }

    public RecuperarPizzas(): Observable<Pizza[]> {
        return this.httpClient.get<Pizza[]>(this.pathURL)
        //return this.httpClient.get("assets/json/entradas.json");
    }
}
