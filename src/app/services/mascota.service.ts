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
    raza: '',
    fotoURL: '',
    sexo: ''
  }

  mascotas: Mascota[];
  
  URL_API = `${dominio}/api/mascotas`;

  constructor(private http: HttpClient) { }

  getMascotas(){
    return this.http.get<Mascota[]>(this.URL_API);
  }

  createMascota(mascota: Mascota, foto1: File,/*  foto2: File, foto3: File, foto4: File, foto5: File */){
    const formData: any = new FormData();
    formData.append('foto', foto1);
    /* formData.append('foto', foto2);
    formData.append('foto', foto3);
    formData.append('foto', foto4);
    formData.append('foto', foto5); */
    formData.append('raza', mascota.raza);
    formData.append('nombre', mascota.nombre);
    formData.append('sexo', mascota.sexo)
    return this.http.post(this.URL_API, formData);
  }

  deleteMascota(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

  putMascota(mascota:Mascota){
    return this.http.put(`${this.URL_API}/${mascota._id}`, mascota);
  }
}
