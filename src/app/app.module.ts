import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './Componentes/Cabecera/cabecera.component';
import { PieComponent } from './Componentes/Pie/pie.component';
import { MenuComponent } from './Componentes/Menu/menu.component';
import { ListadoPizzasComponent } from './Componentes/Listado-pizzas/listado-pizzas.component';
import { FrontComponent } from './Componentes/front/front.component';
import { PaginaNoEncontradaComponent } from './Componentes/pagina-no-encontrada/pagina-no-encontrada.component';

@NgModule({
    declarations: [
        AppComponent,
        CabeceraComponent,
        PieComponent,
        MenuComponent,
        ListadoPizzasComponent,
        FrontComponent,
        PaginaNoEncontradaComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
