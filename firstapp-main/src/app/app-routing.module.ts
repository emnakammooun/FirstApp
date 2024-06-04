import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { ArticleFormComponent } from './article-form/article-form.component';

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
    path:'tools',
    pathMatch:'full',
    component:ToolsComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
