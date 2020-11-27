import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReunionesService } from 'src/app/services/reuniones.service';

@Component({
  selector: 'app-find-single',
  templateUrl: './find-single.component.html',
  styleUrls: ['./find-single.component.css']
})
export class FindSingleComponent implements OnInit {

  valorInicial:any=0;
  valorSeleccionado:any=0;
  reuniones:any=[];
  id:any=0;
  constructor(private service : ReunionesService, private router:Router) { }

  async ngOnInit() {

    const reunion : any=await this.service.all();
    this.reuniones=reunion

  }

  capturar(){
    this.valorSeleccionado=this.valorInicial
  }

  async mostrarReunion(){
    const reunion : any= await this.service.all();
    reunion.forEach(element => {
      if(element.nombre == this.valorSeleccionado){
        this.id = element.id;
        this.router.navigate([`reuniones/single/${this.id}`])
      }
      
    });
  }

}