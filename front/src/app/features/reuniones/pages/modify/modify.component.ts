import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReunionesService } from 'src/app/services/reuniones.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  constructor(private service: ReunionesService, private activatedRoute:ActivatedRoute, private router:Router) { }

  form: FormGroup;
  params = this.activatedRoute.snapshot.params.id

  getEdit({nombre,titulo,fecha,ciudad,pais,idTipoReunion}){
    const obj:any={
    nombre: new FormControl(nombre,[Validators.required]),
    titulo: new FormControl(titulo,[Validators.required]),
    fecha: new FormControl(fecha,[Validators.required]),
    ciudad: new FormControl(ciudad,[Validators.required]),
    pais: new FormControl(pais,[Validators.required]),
    idTipoReunion: new FormControl(idTipoReunion,[Validators.required]),
    }
    return obj
  }

  verifyField(field: string): string {
    const element = this.form.controls[field];
    let message = '';
    element.status === 'INVALID' && element.touched
      ? (message = `El campo ${field} es Obligatorio`)
      : '';
    return message;
  }
  async ngOnInit() {
    const reunion :any =await  this.service.single(this.params)
    this.form = new FormGroup(this.getEdit(reunion))
   
  }

  async updateReunion(){
    const params = this.activatedRoute.snapshot.params.id
    const result: any= await this.service.update(params,this.form.value)
    this.router.navigate(['/home'])
  }

}
