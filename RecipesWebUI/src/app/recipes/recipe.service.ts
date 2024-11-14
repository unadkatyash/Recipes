import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'A super testy Pizza - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg',
      [new Ingredient('Pepperoni', 3), new Ingredient('Olive oil', 4)]
    ),
    new Recipe(
      'Burger',
      'What else you need to say?',
      'https://www.foodandwine.com/thmb/jldKZBYIoXJWXodRE9ut87K8Mag=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Tomato', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
