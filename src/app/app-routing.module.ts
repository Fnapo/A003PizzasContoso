import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontComponent } from './Componentes/front/front.component';
import { ListadoPizzasComponent } from './Componentes/Listado-pizzas/listado-pizzas.component';
import { LoginComponent } from './Componentes/login/login.component';
import { PaginaNoEncontradaComponent } from './Componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { SobreNosotrosComponent } from './Componentes/sobre-nosotros/sobre-nosotros.component';
import { IdentificarGuard } from './Servicios/Identificar/identificar.guard';

let Pagina404: string = "pagina404";

const routes: Routes = [
    {
        path: "front", component: FrontComponent, children: [ // rutas anidadas
            { path: "listado", component: ListadoPizzasComponent },
            { path: "sobreNosotros", component: SobreNosotrosComponent },
            { path: "", redirectTo: 'listado', pathMatch: 'full' }
        ]
    },
    {
        path: "cocina", canActivate: [IdentificarGuard],
        loadChildren: () => import('src/app/Modulos/Cocina/cocina.module').then((m) => { return m.CocinaModule; })
    },
    { path: "login", component: LoginComponent },
    { path: "", redirectTo: "/front/listado", pathMatch: "full" }, // Por defecto o primera ruta de acceso
    { path: Pagina404, component: PaginaNoEncontradaComponent },
    { path: "**", redirectTo: Pagina404 } // Error 404, página no encontrada
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
