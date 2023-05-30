import { Component, OnInit, HostListener } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {
  faChevronUp = faChevronUp;
  style = {
    bottom: "-50px",
    opacity: "0"
  };
  showArrow = false;

  constructor() { }

  ngOnInit(): void { }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showArrow = scrollPosition > window.innerHeight;
    if (this.showArrow) {
      let newStyle = { ...this.style };
      newStyle.bottom = "30px";
      newStyle.opacity = "1";
      this.style = newStyle;
    } else {
      let newStyle = { ...this.style };
      newStyle.bottom = "-50px";
      newStyle.opacity = "0";
      this.style = newStyle;
    }
  }

  @HostListener('click')
  onClick(): void {
    this.scrollToTop();
  }
}


