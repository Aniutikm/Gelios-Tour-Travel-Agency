import { Component, OnInit } from '@angular/core';
import { faQuoteRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  faQuoteRight = faQuoteRight;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  constructor() { }

  ngOnInit(): void {
  }

}
