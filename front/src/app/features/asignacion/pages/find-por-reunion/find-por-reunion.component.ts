import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReunionesService } from 'src/app/services/reuniones.service';

@Component({
  selector: 'app-find-por-reunion',
  templateUrl: './find-por-reunion.component.html',
  styleUrls: ['./find-por-reunion.component.css']
})
export class FindPorReunionComponent implements OnInit {

  constructor(private serviceReunion: ReunionesService, private router : Router) { }

  id:any=0;
  valorInicial:any=0;
  valorSeleccionado:any=0;
  reuniones:any=[];

  async ngOnInit() {
    const reuniones:any=await this.serviceReunion.all()
    this.reuniones=reuniones;

  }

  capturar(){
    this.valorSeleccionado=this.valorInicial;
  }

  async mostrarPerReunion(){
    const reuniones:any=await this.serviceReunion.all()
    reuniones.forEach(element => {
        if (element.nombre == this.valorSeleccionado){
          this.id=element.id
          this.router.navigate([`asignacion/reuniones/${this.id}`])
        }
    });

  }


}
