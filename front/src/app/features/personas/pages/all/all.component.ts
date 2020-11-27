import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  personas:[]=[];
  constructor(private service: PersonasService) { }

  async ngOnInit() {
    const personas:any = await this.service.all();
    console.log(personas)
    this.personas = personas
    console.log(this.personas)

  }

}
