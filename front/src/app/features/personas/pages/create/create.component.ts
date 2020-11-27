import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { PersonasService } from 'src/app/services/personas.service';
import { Router} from '@angular/router'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service : PersonasService, private router :Router) { }
  
  form:FormGroup;
  
  FormObject: any = {
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    cuit: new FormControl('', [Validators.required]),
    dni: new FormControl('', [Validators.required]),
    idTipoPersona: new FormControl('',[Validators.required])
  };

  verifyField(field: string): string {
    const element = this.form.controls[field];
    let message = '';
    element.status === 'INVALID' && element.touched
      ? (message = `El campo ${field} es Obligatorio`)
      : '';
    return message;
  }
  ngOnInit(): void {
    this.form = new FormGroup(this.FormObject)
  }

  async crearPersona(){
    const result: any =  await this.service.create(this.form.value);
     this.router.navigate(['/home']);
    
  }
}
