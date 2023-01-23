import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
import { Recipe } from "./recipe-list/recipe.model";

@Injectable()

export class RecipeService{

    recipeSelected= new EventEmitter<Recipe>(); // object instatitiate using event emmitter which hold recipe data

    private recipe: Recipe[] = [
        new Recipe('A test Recipe',
         'This is simple test Recipe', 
        'https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries',20)
        ]),

        new Recipe('Another test Recipe',
         'This is simple test Recipe', 
        'https://www.seriouseats.com/thmb/P3xr08w-7ObBgAi5-DnE0JxoFqU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20221103-Crisp-Skinned-Spatchcocked-Butterflied-Roast-Turkey-With-Gravy-Recipe-FredHardy-Hero-d4e17a9e8adb48fe9e65ec72a76aa7fe.JPG',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Buns',3)

        ])
      ];
      constructor(private slServe:ShoppingListService){}

    getRecipe(){
        return this.recipe.slice();
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slServe.addIngredient(ingredients)
    }
}


