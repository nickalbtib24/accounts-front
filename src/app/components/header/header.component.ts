import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showResponsiveMenu;
  public sectionToShow = 1;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showResponsiveMenu = ! this.showResponsiveMenu;
  }

  setSectionToShow(section: number) {
    this.sectionToShow = section;
  }
}
