import { ChangeDetectionStrategy, Component, computed, EventEmitter, input, Output } from '@angular/core';
import { PizzaItemInterface } from '@core/models';

@Component({
    selector: 'app-pizza-item',
    imports: [],
    templateUrl: './pizza-item.component.html',
    styleUrl: './pizza-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaItemComponent {
    item = input.required<PizzaItemInterface>();
    structure = computed(() => this.item().structure.join(', '));

    @Output() onImageClick = new EventEmitter<string>();

    openImage(url: string): void {
        this.onImageClick.emit(url);
    }
}
