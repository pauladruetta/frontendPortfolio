import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from 'src/app/services/image-service.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-lector-imagen',
  templateUrl: './lector-imagen.component.html',
  styleUrls: ['./lector-imagen.component.sass']
})
export class LectorImagenComponent implements OnInit {

  selectedFile: ImageSnippet;
  url: string = "";

  constructor(
    private imageService: ImageServiceService
    ) { }

  ngOnInit(): void {
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    console.log(imageInput.files[0])
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });

    reader.readAsDataURL(file);
  }

  }
