import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{path: 'registro', component: RegisterComponent, data: {title: 'Registrarse'}},
{path: 'login', component: LoginComponent, data: {title: 'Iniciar Sesión'}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
