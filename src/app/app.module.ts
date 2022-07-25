import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MascotaComponent } from './components/mascota/mascota.component';
import { FormsModule } from '@angular/forms';
import { RazaComponent } from './components/raza/raza.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    MascotaComponent,
    RazaComponent,
    PageNotFoundComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    AsideComponent,
    InicioComponent,
    ConfiguracionComponent,
    PerfilComponent
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
