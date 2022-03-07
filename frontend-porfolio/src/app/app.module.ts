import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowDown as faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EditarComponent,
    ExperienciaComponent,
    ProyectosComponent,
    RegistroComponent,
    NoEncontradoComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (library: FaIconLibrary) {
    library.addIcons(faArrowDown);
  }
 }
