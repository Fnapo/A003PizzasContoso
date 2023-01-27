import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './Componentes/dashboard/dashboard.component';

const rutasCocina: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    // { path: 'editarEntrada/:id', component: EditarEntradaComponent },
    { path: '', redirectTo: '/cocina/dashboard', pathMatch: "full" }
]

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(rutasCocina),
        ReactiveFormsModule
    ]
})
export class CocinaModule { }
