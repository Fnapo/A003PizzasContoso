import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontComponent } from './Componentes/front/front.component';
import { ListadoPizzasComponent } from './Componentes/Listado-pizzas/listado-pizzas.component';
import { PaginaNoEncontradaComponent } from './Componentes/pagina-no-encontrada/pagina-no-encontrada.component';

let Pagina404: string = "pagina404";

const routes: Routes = [
    {
        path: "front", component: FrontComponent, children: [ // rutas anidadas
            { path: "listado", component: ListadoPizzasComponent },
            //{ path: "sobreNosotros", component: AcercaDeNosotrosComponent },
            { path: "", redirectTo: 'listado', pathMatch: 'full' }
        ]
    },
    { path: "", redirectTo: "/front/listado", pathMatch: "full" }, // Por defecto o primera ruta de acceso
    { path: Pagina404, component: PaginaNoEncontradaComponent },
    { path: "**", redirectTo: Pagina404 } // Error 404, página no encontrada
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
