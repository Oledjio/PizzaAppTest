import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CompanyDescriptionComponent, CreateOrderComponent, HeaderComponent } from '../components';
import { RouterOutlet } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrl: './main-layout.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [HeaderComponent, CompanyDescriptionComponent, CreateOrderComponent, RouterOutlet, ConfirmDialogModule],
})
export class MainLayoutComponent {}

