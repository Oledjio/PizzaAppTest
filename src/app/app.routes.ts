import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/main-layout/main-layout.component').then((c) => c.MainLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./features/pizza-list/pizza-list.component').then((c) => c.PizzaListComponent),
            },
            {
                path: 'drinks',
                loadComponent: () => import('./features/drinks/drinks.component').then((c) => c.DrinksComponent),
            },
            {
                path: 'delivery',
                loadComponent: () => import('./features/delivery/delivery.component').then((c) => c.DeliveryComponent),
            },
            {
                path: 'contacts',
                loadComponent: () => import('./features/contacts/contacts.component').then((c) => c.ContactsComponent),
            },
        ],
    },
];
