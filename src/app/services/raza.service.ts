import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { dominio } from './dominio';
import { Raza } from '../model/raza'; 

@Injectable({
  providedIn: 'root'
})
export class RazaService {

  /* selectedRaza: Raza ={
    descripcion: ''
  }; */

  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '25c577684cmshbc0eb3f1b32b0bbp1252f6jsn28232380e116',
      'X-RapidAPI-Host': 'razas-de-perros.p.rapidapi.com'
    }
  };
  

  razas: Raza[];

  URL_API = `https://razas-de-perros.p.rapidapi.com/TypeOfBreeds`;

  constructor(private http: HttpClient) { }

  getRazas(){
    return this.http.get<Raza[]>(this.URL_API, this.options);
  }
}
