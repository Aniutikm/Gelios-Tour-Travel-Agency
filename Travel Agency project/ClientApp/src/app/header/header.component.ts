import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faBars = faBars;

  style = {
    display: "none"
  }
  show: boolean = true;
  MenuClick(): void {
    let newStyle = { ...this.style };
    newStyle.display = this.show ? "flex" : "none";
    this.style = newStyle;
    this.show = !this.show;
  }
}

