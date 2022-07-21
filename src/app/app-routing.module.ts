import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RazaComponent } from './components/raza/raza.component';
import { TipoAnimalComponent } from './components/tipo-animal/tipo-animal.component';

const routes: Routes = [
  { path: 'mascota', component: MascotaComponent, data: {title: 'Mascota'} },
  { path: '', redirectTo:'/login', pathMatch: 'full'},
  { path: 'raza', component: RazaComponent, data: {title: 'Raza'}},
  { path: 'tipoAnimal', component:TipoAnimalComponent, data: {title: 'Tipo Animal'}},
  { path: 'inicio', component: InicioComponent, data: {title: 'Inicio'}},
  { path: 'configuracion', component: ConfiguracionComponent, data: {title: 'Configuración'}},
  //Comodín de página no encontrada, siempre al final
  //{ path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
