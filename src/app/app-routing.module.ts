import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RazaComponent } from './components/raza/raza.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  { path: 'mascota', component: MascotaComponent, data: {title: 'Mascota'} },
  { path: '', redirectTo:'/login', pathMatch: 'full'},
  { path: 'raza', component: RazaComponent, data: {title: 'Raza'}},
  { path: 'inicio', component: InicioComponent, data: {title: 'Inicio'}},
  { path: 'configuracion', component: ConfiguracionComponent, data: {title: 'Configuración'}},
  { path: 'perfil', component: PerfilComponent, data: {title: 'Perfil'}},
  //Comodín de página no encontrada, siempre al final
  //{ path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
