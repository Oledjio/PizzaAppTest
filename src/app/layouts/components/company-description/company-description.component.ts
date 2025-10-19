import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-company-description',
    templateUrl: './company-description.component.html',
    styleUrl: './company-description.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
})
export class CompanyDescriptionComponent {}

