import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../model/mascota';
import { dominio } from './dominio';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {


  selectedMascota: Mascota ={
    nombre: '',
    tipoAnimal:  {
      _id: '',
      descripcion: ''
    },
    raza: {
      _id: '',
      descripcion:''
    }
  };
  mascotas: Mascota[];
  
  URL_API = `${dominio}/api/mascotas`;

  constructor(private http: HttpClient) { }

  getMascotas(){
    return this.http.get<Mascota[]>(this.URL_API);
  }

  createMascota(mascota: Mascota){
    return this.http.post(this.URL_API, mascota);
  }

  deleteMascota(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

  putMascota(mascota:Mascota){
    return this.http.put(`${this.URL_API}/${mascota._id}`, mascota);
  }
}
