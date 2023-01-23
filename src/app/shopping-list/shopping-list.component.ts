import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient : Ingredient[]


  constructor(private ShoppingServe:ShoppingListService ) { }

  ngOnInit(): void {
    this.ingredient=this.ShoppingServe.getIngredient();
    this.ShoppingServe.ingredientChange.subscribe((ingredient:Ingredient[])=>{
      this.ingredient= ingredient
    })
  }

}
