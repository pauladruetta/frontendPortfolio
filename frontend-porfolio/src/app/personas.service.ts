import { Injectable } from '@angular/core';
import { PERSONAS } from './db/Personas.db';
import { Persona } from './models/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor() { }

  getAll(): Persona[] {
    return PERSONAS;
  }

  getAllPromise(): Promise<Persona[]> {
    return new Promise((resolve, reject) => {
      resolve(PERSONAS);
    });
  }
}
