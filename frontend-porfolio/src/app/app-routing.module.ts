import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './pages/editar/editar.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NoEncontradoComponent } from './pages/no-encontrado/no-encontrado.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', component: InicioComponent  },
  {path:'editar', component: EditarComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'experiencia', component: ExperienciaComponent},
  {path:'registro', component: RegistroComponent},
  {path:'**', component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
