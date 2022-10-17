import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona.model';
import { PersonasService } from './personas.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string
  persona: ReplaySubject<Persona> = new ReplaySubject<Persona>();
  personal_info: Persona;

  constructor(
    private personasServices: PersonasService,
  ) {

    // this.persona = this.personaSubject.asObservable();
    //console.log("Obtengo informacion personal");
    // this.personasServices.getPersona(281).subscribe(data=> {
    //   this.persona.next(data);
    //   console.log("traigo persona");
    //   console.log(this.persona);
    // })
    //TODO: está hardcodeado, hay que hacer que esté vinculado al usuario
    this.personasServices.getPersonalInfo(281).subscribe(data=> {
      //console.log("traigo persona");
      //this.persona = this.persona.next(data);
      this.persona.next(data);
      //console.log(this.persona.value);
    })
   }

  // getPersonalInfo(): Persona {
  //   console.log("trayendo información personal");
  //   console.log(this.persona);
  //   // this.personal_info.nombre = this.persona.nombre;
  //   // this.personal_info.apellido = this.persona.apellido;
  //   // this.personal_info.titulo = this.persona.titulo;
  //   // this.personal_info.descripcion = this.persona.descripcion;
  //   // this.personal_info.imagen_perfil = this.persona.imagen_perfil;

  //   return this.personal_info;
  // }
}
