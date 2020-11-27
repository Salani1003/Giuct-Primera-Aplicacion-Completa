import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-find-modify',
  templateUrl: './find-modify.component.html',
  styleUrls: ['./find-modify.component.css']
})
export class FindModifyComponent implements OnInit {

  constructor(private service : PersonasService, private router:Router) { }

  id: any = 0;
  valorInicial = 0;
  valorSeleccionado = 0;
  personas:any=[]

  async ngOnInit() {
    const personas :any= await this.service.all();
    this.personas=personas;
  }

  capturar(){
    this.valorSeleccionado= this.valorInicial;
  }

  async mostrarModify(){
    const personas:any=await this.service.all();
    //console.log(personas)
    personas.forEach(element => {
    if(element.dni == this.valorSeleccionado){
      console.log(element.id)
      this.id = element.id
      this.router.navigate([`personas/modify/${this.id}`])
    }else{
      console.log("entre por aca macho")
    }
      
    });
  }
}
