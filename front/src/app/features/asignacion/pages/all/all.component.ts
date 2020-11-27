import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignacionService } from 'src/app/services/asignacion.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private service: AsignacionService, private router:Router) { }

  asignacion:any=[]

  async ngOnInit() {
    const asignacion : any= await this.service.all();
    this.asignacion=asignacion;
  
  }

}
