import { Injectable } from '@angular/core';
import { TipoAnimal } from '../model/tipoAnimal';
import { HttpClient } from '@angular/common/http';
import { dominio } from './dominio';

@Injectable({
  providedIn: 'root'
})
export class TipoAnimalService {

  tiposAnimales: TipoAnimal[];

  URL_API = `${dominio}/api/tipoAnimal`;

  constructor(private http: HttpClient) { }

  getTipoAnimales(){
    return this.http.get<TipoAnimal[]>(this.URL_API);
  }

  createTipoAnimal(tipoAnimal: TipoAnimal){
    return this.http.post(this.URL_API, tipoAnimal);
  }

  deleteTipoAnimal(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

  putTipoAnimal(tipoAnimal: TipoAnimal){
    return this.http.put(`${this.URL_API}/${tipoAnimal._id}`, tipoAnimal);
  }
}
