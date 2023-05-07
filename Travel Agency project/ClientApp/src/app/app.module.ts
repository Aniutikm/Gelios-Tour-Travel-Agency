import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HeaderComponent } from './header/header.component';
import { ArrowComponent } from './home/arrow/arrow.component';
import { BannerComponent } from './home/banner/banner.component';
import { TourTypesComponent } from './home/tour-types/tour-types.component';
import { FindTourComponent } from './home/find-tour/find-tour.component';
import { SearchTourComponent } from './home/search-tour/search-tour.component';
import { FooterComponent } from './footer/footer.component';
import { BestToursComponent } from './home/best-tours/best-tours.component';
import { ServicesComponent } from './home/services/services.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { NewsComponent } from './home/news/news.component';
import { ContactsComponent } from './home/contacts/contacts.component';
import { MapComponent } from './home/map/map.component';
import { SearchToursComponent } from './search-tours/search-tours.component';
import { HotToursComponent } from './hot-tours/hot-tours.component';
import { ToursComponent } from './tours/tours.component';
import { QueryComponent } from './query/query.component';
import { CountriesComponent } from './countries/countries.component';
import { MainContactsComponent } from './main-contacts/main-contacts.component';
import { CruisesComponent } from './cruises/cruises.component';
import { GastroTuryComponent } from './gastro-tury/gastro-tury.component';
import { GirskoLyzhniTuryComponent } from './girsko-lyzhni-tury/girsko-lyzhni-tury.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    HeaderComponent,

    ArrowComponent,
    BannerComponent,
    TourTypesComponent,
    FindTourComponent,
    SearchTourComponent,
    BestToursComponent,
    ServicesComponent,
    FeedbackComponent,
    NewsComponent,
    ContactsComponent,
    MapComponent,

    SearchToursComponent,
    HotToursComponent,
    ToursComponent,
    CountriesComponent,
    MainContactsComponent,
    CruisesComponent,
    GastroTuryComponent,
    GirskoLyzhniTuryComponent,

    QueryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'search-tours', component: SearchToursComponent },
      { path: 'hot-tours', component: HotToursComponent },
      { path: 'tours', component: ToursComponent },
      { path: 'countries', component: CountriesComponent },
      { path: 'main-contacts', component: MainContactsComponent },
      { path: 'cruises', component: CruisesComponent },
      { path: 'gastro-tury', component: GastroTuryComponent },
      { path: 'girskolyzhni-tury', component: GirskoLyzhniTuryComponent },
    ]),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

