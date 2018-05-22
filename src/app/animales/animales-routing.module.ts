import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimalesComponent } from './animales.component';
import { AnimalesListaComponent } from './animales-lista.component';
import { AnimalesDetalleComponent } from './animales-detalle.component';

const animalesRoutes: Routes = [
    {
        path: 'animales',
        component: AnimalesComponent,
        children: [
            { path: '', redirectTo: 'lista', pathMatch: 'full' },
            { path: 'lista', component: AnimalesListaComponent },
            { path: 'detalle', component: AnimalesDetalleComponent },
            { path: 'detalle/:id', component: AnimalesDetalleComponent }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(animalesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AnimalesRoutingModule { }
