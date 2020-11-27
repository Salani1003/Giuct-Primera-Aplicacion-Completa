import { Component, OnInit } from '@angular/core';
import { ReunionesService } from 'src/app/services/reuniones.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  reuniones :[]=[];

  constructor(private service : ReunionesService) { }

  async ngOnInit() {
    const reuniones:any = await this.service.all();
    this.reuniones = reuniones
  }

}
