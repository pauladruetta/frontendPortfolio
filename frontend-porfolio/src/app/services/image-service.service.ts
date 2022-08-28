import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    //this.baseUrl = "http://localhost:8080/persona/image-upload"
    this.baseUrl = "https://backendapdruetta.herokuapp.com/persona/image-upload";
    console.log("El servicio de imágenes está corriendo")
   }

  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post<Response>(this.baseUrl, formData);
  }
}

