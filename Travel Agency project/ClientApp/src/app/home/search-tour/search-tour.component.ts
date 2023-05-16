import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-tour',
  templateUrl: './search-tour.component.html',
  styleUrls: ['./search-tour.component.css']
})
export class SearchTourComponent implements OnInit {
  hotels: IHotel[] = [];
  httpClient: HttpClient;
  baseUrl: string;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpClient = http;
    this.baseUrl = baseUrl;
  }

  Search(): void {
    this.httpClient.get<IHotel[]>(this.baseUrl + 'search/GetOffers?Date=2023.05.28').subscribe(result => {
      this.hotels = result;
    }, error => console.error(error));
  }
  ngOnInit(): void {
  }

}
interface IHotel {
  hImage: string,
  hName: string,
  date: string,
  day: string,
  price: string,
  nights: string
}