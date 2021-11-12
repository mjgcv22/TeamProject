import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyComponent } from './survey/survey.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [

{ path: '', component: HomeComponent},
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent},
{ path: 'survey', component: SurveyComponent},
{ path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents = [SurveyComponent, HomeComponent, LoginComponent, FooterComponent];
