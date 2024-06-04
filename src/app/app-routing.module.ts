import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import {AdherentComponent} from './adherent/adherent.component'
import {AdherentFormComponent } from './adhernt-form/adherent-form.component';
import { BicycleTypeComponent } from './bicycle-type/bicycle-type.component';
import { BicycleTypeFormComponent } from './bicycle-type-form/bicycle-type-form.component';
import { BicyclesComponent } from './bicycles/bicycles.component';
import { BicycleFormComponent } from './bicycle-form/bicycle-form.component';


const routes: Routes = [
  {
    path:'members',
    pathMatch:'full',
    component:MemberComponent
  },
  {
    path:'create',
    pathMatch:'full',
    component:MemberFormComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:':id/edit',
    pathMatch:'full',
    component:MemberFormComponent
  },
  {
    path:'dashboard',
    pathMatch:'full',
    component:DashboardComponent
  },

  {
    path:'articles',
    pathMatch:'full',
    component:ArticlesComponent
  },
  {
    path:'createArt',
    pathMatch:'full',
    component:ArticleFormComponent
  },
  {
    path:':id/editArt',
    pathMatch:'full',
    component:ArticleFormComponent
  },
  {
    path:'events',
    pathMatch:'full',
    component:EventsComponent
  },
  {
    path:'login',
    pathMatch:'full',
    component:LoginComponent
  },
  {
    path:'adherents',
    pathMatch:'full',
    component:AdherentComponent
  },
  {
    path:':id/edit',
    pathMatch:'full',
    component:AdherentFormComponent
  },
  {
    path:'types',
    pathMatch:'full',
    component:BicycleTypeComponent
  },
  {
    path:':id/edit',
    pathMatch:'full',
    component:BicycleTypeFormComponent
  },
  {
    path:'bicycles',
    pathMatch:'full',
    component:BicyclesComponent
  },
  {
    path:':id/edit',
    pathMatch:'full',
    component:BicycleFormComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
