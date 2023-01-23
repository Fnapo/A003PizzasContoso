import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './Componentes/Cabecera/cabecera.component';
import { PieComponent } from './Componentes/Pie/pie.component';
import { MenuComponent } from './Componentes/Menu/menu.component';

@NgModule({
    declarations: [
        AppComponent,
        CabeceraComponent,
        PieComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
