import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReunionesService } from 'src/app/services/reuniones.service';

@Component({
  selector: 'app-find-del',
  templateUrl: './find-del.component.html',
  styleUrls: ['./find-del.component.css']
})
export class FindDelComponent implements OnInit {

 
  constructor(private service : ReunionesService, private router: Router) { }

  id:any=0;
  valorInicial:any=0;
  valorSeleccionado:any=0;
  reuniones:any=[];
 
 
   async ngOnInit(){
    const reuniones: any= await this.service.all();
    this.reuniones=reuniones;
   }
 
   async capturar(){
     this.valorSeleccionado=this.valorInicial
   }
   
   async eliminar(){
     const reuniones : any = await this.service.all()
     reuniones.forEach(element => {
       if(element.nombre == this.valorSeleccionado){
         this.id= element.id
         const Obj = this.service.del(this.id,{})
         //const ObjDel = await this.service.del(this.id,{})
         this.router.navigate([`/reuniones`])
       }  
     });
   }


}
