import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {createHostListener} from '@angular/compiler/src/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  touchstartX = 0;
  touchstartY = 0;
  touchendX = 0;
  touchendY = 0;

  shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'Duis maximus arcu in felis semper, vitae laoreet mi pharetra';
  instructions = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Duis maximus arcu in felis semper, vitae laoreet mi pharetra.'];

  recipes: Recipe[] = [
    new Recipe(1, 'Salade Vegan', this.shortDescription, this.instructions, '../../assets/images/recipe-images/vegan-salad-small.jpg',
      '../../assets/images/recipe-images/vegan-salad-large.jpg'),
    new Recipe(2, 'Toast végétarien', this.shortDescription, this.instructions, '../../assets/images/recipe-images/vegan-toast-small.jpg',
      '../../assets/images/recipe-images/vegan-toast-large.jpg'),
    new Recipe(3, 'Plateau de fruits', this.shortDescription, this.instructions, '../../assets/images/recipe-images/fruits-small.jpg',
      '../../assets/images/recipe-images/fruits-large.jpg'),
    new Recipe(4, 'Les pochettes', this.shortDescription, this.instructions, '../../assets/images/recipe-images/pockets-small.jpg',
      '../../assets/images/recipe-images/pockets-large.jpg'),
    new Recipe(5, 'Persimmon Breakfast', this.shortDescription, this.instructions, '../../assets/images/recipe-images/persimmon-small.jpg',
      '../../assets/images/recipe-images/persimmon-large.jpg'),
    new Recipe(6, 'Doughnuts', this.shortDescription, this.instructions, '../../assets/images/recipe-images/doughnuts-small.jpg',
      '../../assets/images/recipe-images/doughnuts-large.jpg'),
    new Recipe(7, 'Sandwich aux lentilles', this.shortDescription, this.instructions, '../../assets/images/recipe-images/vegan-sandwich-small.jpg',
      '../../assets/images/recipe-images/vegan-sandwich-large.jpg'),
    new Recipe(8, 'Cocktail Rose', this.shortDescription, this.instructions, '../../assets/images/recipe-images/cocktail-small.jpg',
      '../../assets/images/recipe-images/cocktail-large.jpg'),
    new Recipe(9, 'Dinner vegan', this.shortDescription, this.instructions, '../../assets/images/recipe-images/vegan-dinner-small.jpg',
      '../../assets/images/recipe-images/vegan-dinner-large.jpg'),
    new Recipe(10, 'Cocktail Paradis Bleu', this.shortDescription, this.instructions, '../../assets/images/recipe-images/blue-cocktail-small.jpg',
      '../../assets/images/recipe-images/blue-cocktail-large.jpg'),
    new Recipe(11, 'Frites Vegan', this.shortDescription, this.instructions, '../../assets/images/recipe-images/vegan-fries-small.jpg',
      '../../assets/images/recipe-images/vegan-fries-large.jpg'),
    new Recipe(12, 'Sunday Breakfast', this.shortDescription, this.instructions, '../../assets/images/recipe-images/vegan-sunday-breakfast-small.jpg',
      '../../assets/images/recipe-images/vegan-sunday-breakfast-large.jpg'),
    new Recipe(13, 'Milkshake fraise', this.shortDescription, this.instructions, '../../assets/images/recipe-images/strawberry-milkshake-small.jpg',
      '../../assets/images/recipe-images/strawberry-milkshake-large.jpg'),
    new Recipe(14, 'Soupe de citrouille', this.shortDescription, this.instructions, '../../assets/images/recipe-images/pumpkin-soup-small.jpg',
      '../../assets/images/recipe-images/pumpkin-soup-large.jpg'),
    new Recipe(15, 'Cookies printaniers', this.shortDescription, this.instructions, '../../assets/images/recipe-images/cookies-small.jpg',
      '../../assets/images/recipe-images/cookies-large.jpg'),
    new Recipe(16, 'Petit-déjeuner vegan', this.shortDescription, this.instructions, '../../assets/images/recipe-images/vegan-breakfast-small.jpg',
      '../../assets/images/recipe-images/vegan-breakfast-large.jpg'),
    new Recipe(17, 'Potatoes', this.shortDescription, this.instructions, '../../assets/images/recipe-images/potatoes-small.jpg',
      '../../assets/images/recipe-images/potatoes-large.jpg'),
    new Recipe(18, 'Petit-déjeuner du samdi', this.shortDescription, this.instructions, '../../assets/images/recipe-images/saturday-green-lunch-small.jpg',
      '../../assets/images/recipe-images/saturday-green-lunch-large.jpg'),
    new Recipe(19, 'Smoothie fraise', this.shortDescription, this.instructions, '../../assets/images/recipe-images/strawberry-smoothie-small.jpg',
      '../../assets/images/recipe-images/strawberry-smoothie-large.jpg'),
    new Recipe(20, 'Déjeuner vegan', this.shortDescription, this.instructions, '../../assets/images/recipe-images/vegan-lunch-small.jpg',
      '../../assets/images/recipe-images/vegan-lunch-large.jpg'),
    new Recipe(21, 'Salade d\'avocats', this.shortDescription, this.instructions, '../../assets/images/recipe-images/avocado-salad-small.jpg',
      '../../assets/images/recipe-images/avocado-salad-large.jpg'),
    new Recipe(22, 'Club sandwich', this.shortDescription, this.instructions, '../../assets/images/recipe-images/club-sandwich-small.jpg',
      '../../assets/images/recipe-images/club-sandwich-large.jpg'),
    new Recipe(23, 'Pétit-déjeuner continental', this.shortDescription, this.instructions, '../../assets/images/recipe-images/continental-breakfast-small.jpg',
      '../../assets/images/recipe-images/continental-breakfast-large.jpg'),
    new Recipe(24, 'Dinner minceur', this.shortDescription, this.instructions, '../../assets/images/recipe-images/diet-dinner-small.jpg',
      '../../assets/images/recipe-images/diet-dinner-large.jpg'),
    new Recipe(25, 'Pancakes Vegan', this.shortDescription, this.instructions, '../../assets/images/recipe-images/vegan-pancakes-small.jpg',
      '../../assets/images/recipe-images/vegan-pancakes-large.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  touchStartHandeler(event): void {
    this.touchstartX = event.changedTouches[0].screenX;
    this.touchstartY = event.changedTouches[0].screenY;
  }

  touchEndHandeler(event): void {
    this.touchendX = event.changedTouches[0].screenX;
    this.touchendY = event.changedTouches[0].screenY;
    this.handleGesture();
  }

  handleGesture(): void {
    if (this.touchendX <= this.touchstartX){
      console.log('Swiped left');
    }
    if (this.touchendX >= this.touchstartX){
      console.log('Swiped right');
    }
  }
}
