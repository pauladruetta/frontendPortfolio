import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowDown as faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithub, faLinkedinIn as faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ProyectosPageComponent } from './pages/proyectosPage/proyectos.page.component';
import { ExperienciaComponent } from './inicio/experiencia/experiencia.component';
import { ProyectosComponent } from './inicio/proyectos/proyectos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BannerComponent } from './layout/banner/banner.component';
import { AcercaComponent } from './inicio/acerca/acerca.component';
import { EducacionComponent } from './inicio/educacion/educacion.component';
import { HabilidadesComponent } from './inicio/habilidades/habilidades.component';
import { CardComponent } from './components/card/card.component';
import { ExperienciasPageComponent } from './pages/experiencias-page/experiencias-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EditarComponent,
    ExperienciaComponent,
    ProyectosPageComponent,
    ProyectosComponent,
    RegistroComponent,
    NoEncontradoComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    BannerComponent,
    AcercaComponent,
    EducacionComponent,
    HabilidadesComponent,
    CardComponent,
    ExperienciasPageComponent
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
    library.addIcons(faArrowDown, faGithub, faLinkedinIn);
  }
 }
