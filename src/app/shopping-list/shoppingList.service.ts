import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChange = new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Tomato',5),
      ];
      getIngredient(){
        return this.ingredients.slice(); //using slice i will get copy of ingedient array
      }

      addIngredient(ingredient: Ingredient[]){
        // for(let ingredient of ingredients){
        //   this.addIngredients(ingredient)
        // }
         this.ingredients.push(...ingredient)  //
         this.ingredientChange.emit(this.ingredients.slice())
      }
}