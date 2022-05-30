import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { MascotaComponent } from './components/mascota/mascota.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RazaComponent } from './components/raza/raza.component';
import { TipoAnimalComponent } from './components/tipo-animal/tipo-animal.component';

const routes: Routes = [
  { path: 'mascota', component: MascotaComponent },
  { path: '', redirectTo:'/mascota', pathMatch: 'full'},
  { path: 'raza', component: RazaComponent},
  { path: '**', component:PageNotFoundComponent},
  { path: 'tipoAnimal', component:TipoAnimalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
