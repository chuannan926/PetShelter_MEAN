import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from'./home/home.component';
import { NewComponent } from'./new/new.component';
import { ViewComponent } from'./view/view.component';
import { EditComponent } from'./edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {path :'pets', component: HomeComponent},// 把something改成显示homeComponent的URL
  {path :'new', component: NewComponent},
  {path :'view/:id', component: ViewComponent},
  {path :'edit/:id', component: EditComponent},

  
  {path :'', pathMatch:"full", redirectTo:'/pets'},//如果在8000显示homeComponent就删了
  {path :'**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
