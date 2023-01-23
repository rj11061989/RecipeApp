import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipeService } from './recipe.servicee';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[RecipeService] //(we provided instance of cervice in recipe 
  //component so it is only accessible for recipe level components not for shopping level comps)

})
export class RecipeComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor( private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
      this.selectedRecipe = recipe
    })
  }

}
