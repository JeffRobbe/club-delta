import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  hiddenTopnav = true;
  activeLink = "presentation";

  constructor() { }

  ngOnInit() {
  }

  triggerTopnav() {
    this.hiddenTopnav = !this.hiddenTopnav;
    console.log(this.hiddenTopnav);
  }

  navigateTo(target: string, link: string) {
    this.activeLink = link;
    this.triggerTopnav();
  }

}
