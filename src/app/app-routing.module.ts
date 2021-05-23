import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';
import { content } from './shared/routes/content-routes';
import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import {AuthGuard} from './shared/auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './components/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './components/register/register.module#RegisterModule'
  },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ContentComponent,
    children: content
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
