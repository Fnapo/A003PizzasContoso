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

    public ObtenerPizza(id: number): Observable<Pizza> {
        return this.httpClient.get<Pizza>(`${this.pathURL}/${id}`);
    }

    public AgregarPizza(pizza: Pizza): Observable<Pizza> {
        const cabecera: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.httpClient.post<Pizza>(`${this.pathURL}`,
            pizza, { headers: cabecera })
    }

    public EditarPizza(pizza: Pizza): Observable<Pizza> {
        const cabecera: HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.httpClient.put<Pizza>(`${this.pathURL}/${pizza.id}`,
            pizza, { headers: cabecera })
    }

    public BorrarPizza(id: number): Observable<Pizza> {
        return this.httpClient.delete<Pizza>(`${this.pathURL}/${id}`);
    }
}
