import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, RouterLinkActive, MenuModule],
})
export class HeaderComponent {
    public menuItems: MenuItem[] = [
        {
            label: 'Пицца',
            routerLink: '/',
        },
        {
            label: 'Напитки',
            routerLink: '/drinks',
        },
        {
            label: 'Доставка и оплата',
            routerLink: '/delivery',
        },
        {
            label: 'Контакты',
            routerLink: '/contacts',
        },
    ];
}
