import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { EditarPizzaComponent } from './Componentes/editar-pizza/editar-pizza.component';
import { BorrarPizzaComponent } from './Componentes/borrar-pizza/borrar-pizza.component';

const rutasCocina: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'editarPizza/:id', component: EditarPizzaComponent },
    { path: 'borrarPizza/:id', component: BorrarPizzaComponent },
    { path: '', redirectTo: '/cocina/dashboard', pathMatch: "full" }
]

@NgModule({
    declarations: [
        DashboardComponent,
        EditarPizzaComponent,
        BorrarPizzaComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(rutasCocina),
        ReactiveFormsModule
    ]
})
export class CocinaModule { }
