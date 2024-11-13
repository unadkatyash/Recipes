import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/korean-bibimbap-flatlay.jpg?w=600&quality=80'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/korean-bibimbap-flatlay.jpg?w=600&quality=80'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
