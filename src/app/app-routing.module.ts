import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnekComponent } from './snek/snek.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {path: "", component: SnekComponent},
  {path: "snek", component: SnekComponent},
  {path: "tree", component: TreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
