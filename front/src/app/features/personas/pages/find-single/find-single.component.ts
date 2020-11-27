import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-find-single',
  templateUrl: './find-single.component.html',
  styleUrls: ['./find-single.component.css']
})
export class FindSingleComponent implements OnInit {

  constructor(private service : PersonasService, private router: Router) { }

  personas :any=[]
  valorInicial:any=0;
  valorSeleccionado:any=0;
  id:any=0;
  async ngOnInit() {
    const persona = await this.service.all()
    console.log(persona)
    this.personas=persona;
  }

  capturar(){
    this.valorSeleccionado = this.valorInicial
   // console.log(this.valorSeleccionado) 
  }

  async mostrarPersona(){
   const personas:any=await this.service.all()
   personas.forEach(element => {
     //console.log(this.valorSeleccionado)
     if(this.valorSeleccionado == element.dni){
       this.id=element.id;
       this.router.navigate([`/personas/single/${this.id}`])
       //console.log(this.id)
     }else{
       //console.log("estamo aca pa")
     }
   });
   
  }
}
