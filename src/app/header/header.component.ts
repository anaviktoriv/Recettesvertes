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
    document.getElementById('recipeForm').classList.remove('recipe-form-visible');
    document.getElementById('mySidenav').classList.add('menu-sidebar-visible');
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

  openRecipeForm(): void {
    document.getElementById('mySidenav').classList.remove('menu-sidebar-visible');
    document.getElementById('recipeForm').classList.add('recipe-form-visible');
  }
}
