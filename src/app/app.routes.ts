import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'app', component: AppComponent},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'login', pathMatch: 'full' },
];
