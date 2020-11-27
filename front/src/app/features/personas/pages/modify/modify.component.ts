import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  constructor(private service : PersonasService, private router: Router, private activatedRoute: ActivatedRoute) { }


  form: FormGroup;
  params:any= this.activatedRoute.snapshot.params.id;
  
  getEdit({nombre,apellido,dni,cuit,idTipoPersona}){
    const obj:any={
      nombre: new FormControl(nombre, [Validators.required]),
      apellido: new FormControl(apellido, [Validators.required]),
      cuit: new FormControl(cuit, [Validators.required]),
      dni: new FormControl(dni, [Validators.required]),
      idTipoPersona: new FormControl(idTipoPersona,[Validators.required])
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
    const persona :any=await this.service.single(this.params);
    this.form = new FormGroup(this.getEdit(persona))
    
  }
  async updatePersona(){
    const obj :any= await this.service.update(this.params,this.form)
    this.router.navigate(['/home'])
  }

}
