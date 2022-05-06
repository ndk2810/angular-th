import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('Pizza', 'Pepperoni pizza recipe', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg', [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Spaghett', 'Spaghetti recipe', 'https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg', [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ]),
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes;
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
    }
}