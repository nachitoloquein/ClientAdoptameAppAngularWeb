import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RazaComponent } from './components/raza/raza.component';
import { TipoAnimalComponent } from './components/tipo-animal/tipo-animal.component';

const routes: Routes = [
  { path: 'mascota', component: MascotaComponent },
  { path: '', redirectTo:'/mascota', pathMatch: 'full'},
  { path: 'raza', component: RazaComponent},
  { path: 'tipoAnimal', component:TipoAnimalComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'configuracion', component: ConfiguracionComponent}
  //Comodín de página no encontrada, siempre al final
  //{ path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
