import { ApiPizzaService } from './services/api-pizza.service';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PizzaItemInterface } from '@core/models';
import { PizzaItemComponent } from '@shared/components';

@Component({
    selector: 'app-pizza-list',
    imports: [PizzaItemComponent],
    templateUrl: './pizza-list.component.html',
    styleUrl: './pizza-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaListComponent implements OnInit {
    public pizzas = signal<PizzaItemInterface[]>([]);

    constructor(private readonly _apiPizzaService: ApiPizzaService) {}

    ngOnInit(): void {
        this._apiPizzaService.getPizzas().subscribe((res) => this.pizzas.set(res));
    }
}

