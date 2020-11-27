import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-find-del',
  templateUrl: './find-del.component.html',
  styleUrls: ['./find-del.component.css'],
})
export class FindDelComponent implements OnInit {
  constructor(private service : PersonasService, private router: Router) {}

  id: any = 0;
  valorInicial: any = 0;
  valorSeleccionado: any = 0;
  personas: any = [];
 
  async ngOnInit() {
    const personas:any= await this.service.all()
    this.personas = personas;
  }

  capturar(){
    this.valorSeleccionado= this.valorInicial
  
  }

  async eliminar(){
    const personas : any = await this.service.all()
    personas.forEach(element => {
      if(element.dni == this.valorSeleccionado){
        this.id= element.id
        const Obj = this.service.del(this.id,{})
        //const ObjDel = await this.service.del(this.id,{})
        this.router.navigate([`/personas`])
      }  
    });
  }
}
