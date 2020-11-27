import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReunionesService } from 'src/app/services/reuniones.service';

@Component({
  selector: 'app-find-modify',
  templateUrl: './find-modify.component.html',
  styleUrls: ['./find-modify.component.css'],
})
export class FindModifyComponent implements OnInit {
  constructor(private service: ReunionesService, private router: Router) {}

  id: any = 0;
  valorInicial = 0;
  valorSeleccionado = 0;
  reuniones:any=[]

  async ngOnInit(){
    const reuniones :any= await this.service.all();
    this.reuniones=reuniones;

  }

  capturar(){
    this.valorSeleccionado= this.valorInicial;
  }

  async mostrarModify(){
    const reunion:any=await this.service.all();
    console.log(reunion)
    reunion.forEach(element => {
    if(element.nombre == this.valorSeleccionado){
      console.log(element.id)
      this.id = element.id
      this.router.navigate([`reuniones/modify/${this.id}`])
    }
      
    });
  }
}
