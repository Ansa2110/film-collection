import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './pages/home/home';
import { FilmDetails } from './pages/film-details/film-details';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '',
                component: Home,
            },
            {
                path: 'films/:id',
                component: FilmDetails,
            },
            {
                path: 'about',
                component: About,
            },
            {
                path: '**',
                component: NotFound
            }
        ]
    }
];
