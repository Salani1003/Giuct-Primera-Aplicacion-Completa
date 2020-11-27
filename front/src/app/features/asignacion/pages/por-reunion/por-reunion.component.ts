import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsignacionService } from 'src/app/services/asignacion.service';

@Component({
  selector: 'app-por-reunion',
  templateUrl: './por-reunion.component.html',
  styleUrls: ['./por-reunion.component.css']
})
export class PorReunionComponent implements OnInit {

  constructor(private service: AsignacionService, private activatedRoute:ActivatedRoute) { }

  reuniones :any=[];
  async ngOnInit() {
    const params = this.activatedRoute.snapshot.params.id
    console.log(params)
    const reunion: any=await this.service.singleReunion(params)
    this.reuniones = reunion;
    console.log(this.reuniones)
  }
}
