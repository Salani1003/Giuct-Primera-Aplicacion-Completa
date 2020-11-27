import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService extends BaseService {

  common: string='personas'
  all(){
    
    this.setEndpoint(`${this.common}/all`);
    return this.get();
  }
  single(id){
    this.setEndpoint(`${this.common}/single/${id}`)
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
