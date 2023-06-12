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
  dropDownMenuVisible = false;

  toggleDropDownMenu(): void {
    this.dropDownMenuVisible = !this.dropDownMenuVisible;
  }

  dropDownMenuVisibleC = false;

  toggleDropDownMenuC(): void {
    this.dropDownMenuVisibleC = !this.dropDownMenuVisibleC;
  }
  dropDownMenuVisibleS = false;

  toggleDropDownMenuS(): void {
    this.dropDownMenuVisibleS = !this.dropDownMenuVisibleS;
  }
  dropDownMenuVisibleA = false;

  toggleDropDownMenuA(): void {
    this.dropDownMenuVisibleA = !this.dropDownMenuVisibleA;
  }
}

