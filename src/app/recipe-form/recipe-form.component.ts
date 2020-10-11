import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeRecipeForm(): void {
    document.getElementById('recipeForm').classList.remove('recipe-form-visible');
  }
}
