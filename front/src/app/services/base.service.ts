import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {environment} from './../../environments/environment'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
urlServer:string=environment.url
endpoint:string='';
  constructor(private http:HttpClient, private router: Router) { }

  setEndpoint(endpoint){
    this.endpoint=endpoint
  }

  async get(){
   try{
     return await this.http.get(`${this.urlServer}/${this.endpoint}`).toPromise();
   }catch(error){
     this.handlerError(error)
   }
  }

  async post(obj){
    try {
      return await this.http.post(`${this.urlServer}/${this.endpoint}`,obj).toPromise();
    } catch (error) {
      this.handlerError(error)
    }
  }

  async put(obj){
    try {
      return await this.http.put(`${this.urlServer}/${this.endpoint}`,obj).toPromise();
    } catch (error) {
      
    }
  }
  async delete(obj){
    try {
      return await this.http.put(`${this.urlServer}/${this.endpoint}`,obj).toPromise();
    } catch (error) {
      
    }
  }


  handlerError(e){
    e.status === 401 ? this.router.navigate(['login']): null;
    e.status === 404 ? this.router.navigate(['notfound']): null;
  }
}
