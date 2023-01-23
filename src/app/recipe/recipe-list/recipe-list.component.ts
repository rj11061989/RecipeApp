import { Component,  OnInit, } from '@angular/core';
import { RecipeService } from '../recipe.servicee';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipe: Recipe[]

  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe();
  }


}
