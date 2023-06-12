import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-search-tour',
  templateUrl: './search-tour.component.html',
  styleUrls: ['./search-tour.component.css']
})
export class SearchTourComponent implements OnInit {
  hotels: IHotel[] = [];
  select: BasicInfo | null = null
  httpClient: HttpClient;
  baseUrl: string;

  changeDate: Date = new Date();

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.httpClient = http;
    this.baseUrl = baseUrl;
  }

  ChangeDate(date: any)
  {
    console.log(date.toString())
    this.changeDate = new Date(date.toString())
  }
  Search(): void {

    this.httpClient.get<IHotel[]>(this.baseUrl + 'search/GetOffers?date=' + this.changeDate.toDateString()).subscribe(result => {
      this.hotels = result;

    }, error => console.error(error));
  }
  ngOnInit(): void {
    this.httpClient.get<BasicInfo>(this.baseUrl + 'search/SearchSelect').subscribe(result => {
      this.select = result;
      console.log(this.select, 123);
    }, error => console.error(error));
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

interface BasicInfo {
  countries: SelectListModel<CountryInfo>,
  cities: SelectListModel<CityInfo>,
  meal: SelectListModel<MealInfo>,
  currencies: SelectListModel<CurrenciesInfo>,
  hotelClasses: SelectListModel<HotelClassesInfo>
}

interface SelectListModel<T> {
  selectedValue: string,
  result: T[]
}

interface CountryInfo {
  text: string,
  value: string
}
interface CityInfo {
  text: string,
  value: string
}
interface MealInfo {
  text: string,
  value: string
}
interface CurrenciesInfo {
  text: string,
  value: string
}
interface HotelClassesInfo {
  text: string,
  value: string
}
