import { Routes } from '@angular/router';
import { ListingsPageComponent } from './pages/listings-page/listings-page.component';
import { JobApplicationComponent } from './pages/job-application/job-application.component';

export const routes: Routes = [
    { path: 'listings', component: ListingsPageComponent },
    { path: 'jobs/:id', component: JobApplicationComponent },
    { path: '', redirectTo: '/listings', pathMatch: 'full'}
];
