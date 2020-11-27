import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignacionService } from 'src/app/services/asignacion.service';
import { PersonasService } from 'src/app/services/personas.service';
import { ReunionesService } from 'src/app/services/reuniones.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(
    private serviceR: ReunionesService,
    private serviceAsig: AsignacionService,
    private servicePer: PersonasService,
    private route: Router,
  ) {}


  personas: any = [];
  reuniones: any = [];
  idPersona: any = 0;
  idReunion: any = 0;
  valorInicialPer = 0;
  valorSeleccionadoPer = 0;
  valorInicialReu = 0;
  valorSeleccionadoReu = 0;
  

  async ngOnInit() {
    const personas = await this.servicePer.all();
    const reuniones = await this.serviceR.all();
    this.personas = personas;
    this.reuniones = reuniones;
  }

  capturar() {
    this.valorSeleccionadoPer = this.valorInicialPer;
    //console.log(this.valorSeleccionadoPer);
    this.valorSeleccionadoReu = this.valorInicialReu;
    //console.log(this.valorSeleccionadoReu);
  }


  async asignarReunion() {
    const personas: any = await this.servicePer.all();
    const reuniones: any = await this.serviceR.all();
    personas.forEach((element) => {
      if (element.dni == this.valorSeleccionadoPer) {
        this.idPersona = element.id;
      }
    });
    reuniones.forEach(element => {
      if(element.nombre == this.valorSeleccionadoReu){
        this.idReunion = element.id;
      }
      
    });
    const obj ={
      idPersona: this.idPersona,
      idReunion: this.idReunion
    }
    this.serviceAsig.create(obj)
    this.route.navigate(['/home'])
  }

}
