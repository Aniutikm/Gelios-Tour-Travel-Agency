import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-main-contacts',
  templateUrl: './main-contacts.component.html',
  styleUrls: ['./main-contacts.component.css']
})
export class MainContactsComponent implements OnInit {

  name: string = '';
  errorName: string = '';
  phone: string = '';
  errorPhone: string = '';
  text: string = '';
  errorText: string = '';
  result: string = '';
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }
  Send(): void {
    let validate = true;
    if (this.name.length > 0 && this.name.length < 3) {
      validate = false;
      this.errorName = "Введіть мінімум 3 символи!";
    }
    else if (this.name.length <= 0) {
      validate = false;
      this.errorName = "Поле обов'язкове для заповнення!";
    }

    if (this.phone.length > 0 && !/^\d+$/.test(this.phone)) {
      validate = false;
      this.errorPhone = "Допустимо вводити тільки цифри!";
    }
    else if (this.phone.length > 0 && this.phone.length < 12) {
      validate = false;
      this.errorPhone = "Введіть мінімум 12 символів!";
    }

    else if (this.phone.length <= 0) {
      validate = false;
      this.errorPhone = "Поле обов'язкове для заповнення!";
    }

    if (this.text.length <= 0) {
      validate = false;
      this.errorText = "Поле обов'язкове для заповнення!";
    }

    if (validate) {

      this.http.get("https://api.telegram.org/bot5605576496:AAFSxvtXjUsXQpK8YuNndFkgqR-ULzcAFvo/sendMessage?chat_id=253349483&text=" + this.text)
        .subscribe(() => {
          this.result = 'Дякуємо за Ваше повідомлення. Воно було надіслане!';
        },
          error => console.error(error));
      console.log('hello');
    }
  }
}
