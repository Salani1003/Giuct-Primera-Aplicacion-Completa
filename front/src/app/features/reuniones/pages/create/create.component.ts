import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReunionesService } from 'src/app/services/reuniones.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service: ReunionesService, private router : Router) { }
  form:FormGroup;

  FormObject:any={
    nombre: new FormControl('',[Validators.required]),
    titulo: new FormControl('',[Validators.required]),
    fecha: new FormControl('',[Validators.required]),
    ciudad: new FormControl('',[Validators.required]),
    pais: new FormControl('',[Validators.required]),
    idTipoReunion: new FormControl('',[Validators.required]),

  }
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
  
  async crearReunion(){
    const result: any =  await this.service.create(this.form.value)
    console.log(result)
    this.router.navigate(['/home'])
  }

  
}
