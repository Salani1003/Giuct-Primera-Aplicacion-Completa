import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignacionService } from 'src/app/services/asignacion.service';
import { PersonasService } from 'src/app/services/personas.service';


@Component({
  selector: 'app-find-por-persona',
  templateUrl: './find-por-persona.component.html',
  styleUrls: ['./find-por-persona.component.css']
})
export class FindPorPersonaComponent implements OnInit {
  
  constructor(private servicePer: PersonasService,private serviceAsig: AsignacionService, private router:Router ) { }
  
  id:any=0;
  valorInicial:any=0;
  valorSeleccionado:any=0;
  personas:any=[];


  async ngOnInit() {
    const personas:any=await this.servicePer.all()
    this.personas=personas;

  }

  capturar(){
    this.valorSeleccionado=this.valorInicial;
  }
  async mostrarPerReunion(){
    const personas:any=await this.servicePer.all()
    personas.forEach(element => {
        if (element.dni == this.valorSeleccionado){
          this.id=element.id
          this.router.navigate([`asignacion/personas/${this.id}`])
        }
    });

  }

}
