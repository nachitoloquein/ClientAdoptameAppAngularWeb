import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { JwtResponse } from '../model/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { dominio } from './dominio';

@Injectable()
export class AuthService {
  URL_API = `${dominio}/api/usuario`
  authSubject = new BehaviorSubject(false);
  private token: any;
  constructor( private http: HttpClient) { }

  register(usuario: Usuario): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(`${this.URL_API}/register`,usuario).pipe(tap(
      (res:JwtResponse)=>{
        if(res){
          //guardarToken
          this.saveToken(res.dataUsuario.accesToken, res.dataUsuario.expiresIn);
        }    
      }
    ))
  }

  login(usuario: Usuario): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(`${this.URL_API}/login`,usuario).pipe(tap(
      (res:JwtResponse)=>{
        if(res){
          //guardarToken 
          this.saveToken(res.dataUsuario.accesToken, res.dataUsuario.expiresIn);
        }    
      }
    ))
  }

  logout(){
    this.token = '';
    localStorage.removeItem("ACCES_TOKEN");
    localStorage.removeItem("EXPIRESIN");
  }

  private saveToken(token: string, expiresIn:string){
    localStorage.setItem("ACCES_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(){
    if(!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
