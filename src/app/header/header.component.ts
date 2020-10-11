import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchBarIsInvisible = true;
  searchIconPath = '../../assets/images/icons/search-icon.svg';
  crossIconPath = '../../assets/images/icons/cross-icon.svg';
  constructor() { }

  ngOnInit(): void {
  }

  openNav(): void {
    document.getElementById('mySidenav').style.width = '320px';
  }

  openSearchBar(): void {
    this.searchBarIsInvisible = !this.searchBarIsInvisible;
    document.getElementById('searchBarWrapper').classList.toggle('visible');
  }
  changeIcon(): string {
    if (this.searchBarIsInvisible === true) {
      return this.searchIconPath;
    } else {
      return this.crossIconPath;
    }
  }
  changeClass(): string {
    if (this.searchBarIsInvisible === true) {
      return 'menu-icon';
    } else {
      return 'close-icon';
    }
  }
}
