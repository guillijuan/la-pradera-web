import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AnimalesComponent } from './animales.component';
import { AnimalesListaComponent } from './animales-lista.component';
import { AnimalesDetalleComponent } from './animales-detalle.component';
import { AnimalesService } from './animales.service';

import { AnimalesRoutingModule } from './animales-routing.module';

@NgModule({
    declarations: [
        AnimalesComponent,
        AnimalesListaComponent,
        AnimalesDetalleComponent
    ],
    imports: [
       CommonModule,
       ReactiveFormsModule,
       HttpModule,
       AnimalesRoutingModule
    ],
    exports: [
        AnimalesComponent,
        AnimalesListaComponent,
        AnimalesDetalleComponent
    ],
    providers: [AnimalesService]
})
export class AnimalesModule { }