import { ApiPizzaService } from './services/api-pizza.service';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { PizzaItemInterface } from '@core/models';
import { PizzaItemComponent } from '@shared/components';

@Component({
    selector: 'app-pizza-list',
    templateUrl: './pizza-list.component.html',
    styleUrl: './pizza-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PizzaItemComponent, GalleriaModule],
})
export class PizzaListComponent implements OnInit {
    public pizzas = signal<PizzaItemInterface[]>([]);
    public galleryVisible = signal(false);

    public images: string[] | undefined;

    constructor(private readonly _apiPizzaService: ApiPizzaService) {}

    ngOnInit(): void {
        this._apiPizzaService.getPizzas().subscribe((res) => this.pizzas.set(res));
    }

    public openImage(event: string): void {
        this.images = [event];
        this.galleryVisible.set(true);
    }

    public onGalleryVisibleChange(event: boolean): void {
        this.galleryVisible.set(event);
    }
}

