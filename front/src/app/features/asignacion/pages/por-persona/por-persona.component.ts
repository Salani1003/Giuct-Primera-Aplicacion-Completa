import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignacionService } from 'src/app/services/asignacion.service';


@Component({
  selector: 'app-por-persona',
  templateUrl: './por-persona.component.html',
  styleUrls: ['./por-persona.component.css']
})
export class PorPersonaComponent implements OnInit {

  constructor(private service: AsignacionService, private activatedRoute: ActivatedRoute) { }

  personas :any=[];

  async ngOnInit() {
    const params = this.activatedRoute.snapshot.params.id
    console.log(params)
    const persona: any=await this.service.singlePer(params)
    this.personas = persona;
    console.log(this.personas)
  }

}
