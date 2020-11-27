import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReunionesService } from 'src/app/services/reuniones.service';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  reunion:any=[]
  constructor(private service : ReunionesService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    const params = this.activatedRoute.snapshot.params.id
    const reunion: any=await this.service.single(params)
    this.reunion = reunion;
    console.log(this.reunion)
  }

}
