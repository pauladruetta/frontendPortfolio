import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './pages/editar/editar.component';
import { ExperienciasPageComponent } from './pages/experiencias-page/experiencias-page.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { ProyectosPageComponent } from './pages/proyectosPage/proyectos.page.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', component: InicioComponent  },
  {path:'editar', component: EditarComponent},
  {path:'proyectos', component: ProyectosPageComponent},
  {path:'experiencia', component: ExperienciasPageComponent},
  {path:'registro', component: RegistroComponent},
  {path:'**', component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
