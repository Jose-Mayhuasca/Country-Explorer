import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/country-list/country-list').then((m) => m.CountryList),
  },
  {
    path: 'detalle-pais/:id',
    loadComponent: () =>
      import('./features/country-detail/country-detail').then((m) => m.CountryDetail),
  },
  {
    path: '**', // Si la ruta no existe, redirigir al home
    redirectTo: '',
    pathMatch: 'full',
  },
];
