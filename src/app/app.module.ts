import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { FormsModule } from '@angular/forms';
import { RazaComponent } from './components/raza/raza.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TipoAnimalComponent } from './components/tipo-animal/tipo-animal.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthRoutingModule } from './auth/auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MascotaComponent,
    RazaComponent,
    PageNotFoundComponent,
    TipoAnimalComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
