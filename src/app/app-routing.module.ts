import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnekComponent } from './snek/snek.component';
import { TreeComponent } from './tree/tree.component';
import { CatComponent } from './cat/cat.component';

const routes: Routes = [
  {path: "", component: SnekComponent},
  {path: "snek", component: SnekComponent},
  {path: "tree", component: TreeComponent},
  {path: "cat/:id", component: CatComponent},
  {path: "cat", component: CatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
