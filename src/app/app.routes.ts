import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'app', component: AppComponent},
    { path: 'home', component: HomeComponent },
];
