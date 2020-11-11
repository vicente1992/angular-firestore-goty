import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  public success(title: string, text: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
    });
  }
  public error(title: string, text: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
    });
  }
}
