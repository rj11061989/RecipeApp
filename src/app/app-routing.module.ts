import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path:'recipe', component:RecipeComponent},
  {path: 'shopping',component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //router will be register using this steps
  exports: [RouterModule]                   //now angular knows the router in Routes array
})
export class AppRoutingModule { }
