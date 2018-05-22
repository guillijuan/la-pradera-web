import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GallosComponent } from './gallos/gallos.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { AnimalesModule } from './animales/animales.module';

import { AnimalesComponent } from './animales/animales.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'gallos', component: GallosComponent },
    { path: 'produccion', component: ProduccionComponent },
    { path: 'animales', component: AnimalesModule }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        AnimalesModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
