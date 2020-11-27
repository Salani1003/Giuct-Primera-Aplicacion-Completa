import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService extends BaseService{

  common: string='persona_reunion'
  all(){
    
    this.setEndpoint(`${this.common}/all`);
    return this.get();
  }
  singlePer(id){
    this.setEndpoint(`${this.common}/singlePersona/${id}`)
    return this.get();
  } 
   singleReunion(id){
    this.setEndpoint(`${this.common}/singleReunion/${id}`)
    return this.get();
  }
  
  create(obj){
    this.setEndpoint(`${this.common}/create`)
    return this.post(obj)
  }
  update(id,obj){
    this.setEndpoint(`${this.common}/modify/${id}`)
    return this.put(obj)
  }
  del(id,obj){
    this.setEndpoint(`${this.common}/eliminar/${id}`)
    return this.delete(obj)
  }
}
