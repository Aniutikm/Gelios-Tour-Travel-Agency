import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faGooglePlusG = faGooglePlusG;

  constructor() { }

  ngOnInit(): void {
  }

}
