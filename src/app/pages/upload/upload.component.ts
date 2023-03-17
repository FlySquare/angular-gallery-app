import {Component, ViewChild} from '@angular/core';
import {FormBuilder, NgForm} from "@angular/forms";
import {GlobalService} from "../../services/global.service";


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  @ViewChild('uploadForm') uploadForm: NgForm;
  imagePreview = '/assets/placeholder.png';


  constructor(
    private globalService: GlobalService,

  ) {}

  uploadSubmit() {
    if (!this.formValidation()) {
      alert('Lütfen formu eksiksiz doldurunuz.')
      return;
    }else{
      const formData: any = new FormData();
      formData.append('file', this.imagePreview);
      formData.append('ownerName', this.uploadForm.value.ownerName);
      formData.append('artName', this.uploadForm.value.artName);
      formData.append('password', this.uploadForm.value.password);
      this.globalService.uploadImage(formData).subscribe({
        next: (res: any) => {
          alert('Resim başarıyla yüklendi.');
          this.uploadForm.reset();
          this.imagePreview = '/assets/placeholder.png';
        },
        error: (err: any) => {
          console.log(err);
          alert('Resim yüklenirken bir hata oluştu.');
        }
      });
    }
  }



  formValidation() {
    let error = 0;
    if (this.uploadForm.value.file === ''){
      error++;
    }
    if (this.uploadForm.value.ownerName === ''){
      error++;
    }
    if (this.uploadForm.value.artName === ''){
      error++;
    }

    return error <= 0;
  }

  changeImagePreview(event: any){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imagePreview = reader.result.toString();
      reader.readAsDataURL(file);
    }else{
      this.imagePreview = '/assets/placeholder.png';
    }
  }




















}
