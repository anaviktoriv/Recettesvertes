import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeNav(): void {
    document.getElementById('mySidenav').classList.remove('menu-sidebar-visible');
  }

  openRecipeForm(): void {
    document.getElementById('mySidenav').classList.remove('menu-sidebar-visible');
    document.getElementById('recipeForm').classList.add('recipe-form-visible');
  }
}
