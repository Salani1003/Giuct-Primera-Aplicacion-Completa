import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private service : PersonasService) { }
  persona :any=[]
  async ngOnInit() {
    const params = this.activatedRoute.snapshot.params.id
    const persona: any=await this.service.single(params)
    this.persona = persona;
    console.log(this.persona)
  }

}
