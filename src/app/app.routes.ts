import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/home/about/about';
import { ProjectsPage } from './components/projects-page/projects-page';
import { ProjectPage } from './components/project-individual/project-individual';
import { NotFound } from './components/exceptions/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: About,
        pathMatch: 'full'
    },
    {
        path: 'projects',
        component: ProjectsPage,
        pathMatch: 'full'
    },
    {
        path: 'projects/:id',
        component: ProjectPage,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFound
    }
];
