import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AnimalesService } from './animales.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Animales } from './animales';

@Component({
    selector: 'app-animales-detalle',
    templateUrl: './animales-detalle.component.html'
})
export class AnimalesDetalleComponent implements OnInit {

    titulo = '';
    form: FormGroup;
    animales: Animales[];
    esEdicion = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: AnimalesService,
        private fb: FormBuilder
    ) { this.crearControles(); }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        // tslint:disable-next-line:curly
        if (!id) return;

        this.service.getInventario(id)
            .subscribe(
                rs => this.animales = rs,
                er => console.log('Error: %s', er),
                () => {
                    if (this.animales.length > 0) {
                        this.esEdicion = true;
                        this.form.patchValue({
                            id: this.animales[0].id,
                            nombre_animal: this.animales[0].nombre_animal,
                            fecha_nac: this.animales[0].fecha_nac,
                            descripcion: this.animales[0].descripcion,
                            especie_ani: this.animales[0].especie_ani,
                            imagen: this.animales[0].imagen
                        });
                    }
                }
            )
        console.log(id);
    }

    crearControles() {
        this.form = this.fb.group({
            id: '',
            nombre_animal: ['', Validators.required],
            fecha_nac: '',
            descripcion: '',
            id_finca_fk: '1',
            especie_ani: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3)
            ])],
            imagen: ''
        })
    }

    guardarAnimal() {
        if (this.esEdicion) {
            this.titulo = 'Editar un registro';
            this.updateAnimal(this.form.value);
        } else {
            this.titulo = 'Agregar un nuevo registro';
            this.agregarAnimal(this.form.value);
        }
    }


    agregarAnimal(animales: Animales) {
        this.service.addInventario(animales)
            .subscribe(
                rt => console.log(rt),
                er => console.log(er),
                () => console.log('Terminado')
            );
    }

    updateAnimal(animales: Animales) {
        if (!animales) return;
        this.service.putInventario(animales)
            .subscribe(
                rt => console.log(rt),
                er => console.log(er),
                () => this.goLista()
            )
    }

    limpiarFormulario() {
        this.form.reset();
    }

    goLista() {
        let link = ['/animales/lista'];
        this.router.navigate(link);
    }

    // tslint:disable-next-line:eofline
}