import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalesService } from './animales.service';
import { Animales } from './animales';

@Component({
    selector: 'app-animales-lista',
    templateUrl: './animales-lista.component.html'
})
export class AnimalesListaComponent implements OnInit {

    lista: Animales[];

    constructor(
        private router: Router,
        private servicio: AnimalesService
    ) { }

    ngOnInit() {
        this.servicio.getInventarios()
            .subscribe(
                rs => this.lista = rs,
                er => console.log(er),
                () => console.log(this.lista)
            )
    }

    Editar(item: Animales) {
        let link = ['/animales/detalle', item.id];
        this.router.navigate(link);
    }

    Borrar(item: Animales) {
        if(!item) return;

        this.servicio.delInventario(item.id)
            .subscribe(
                rs => console.log(rs),
                er => console.log(er),
                () => {
                    this.lista = this.lista.filter(h => h !== item)
                }
            )
    }

    // tslint:disable-next-line:eofline
}