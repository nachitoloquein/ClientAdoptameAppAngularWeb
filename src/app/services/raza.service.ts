import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dominio } from './dominio';
import { Raza } from '../model/raza'; 

@Injectable({
  providedIn: 'root'
})
export class RazaService {

  selectedRaza: Raza ={
    descripcion: ''
  };

  razas: Raza[];

  URL_API = `${dominio}/api/raza`;

  constructor(private http: HttpClient) { }

  getRazas(){
    return this.http.get<Raza[]>(this.URL_API);
  }

  createRaza(raza: Raza){
    return this.http.post(this.URL_API, raza);
  }

  deleteRaza(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

  putRaza(raza:Raza){
    return this.http.put(`${this.URL_API}/${raza._id}`, raza);
  }
}
