import { PizzaItemInterface } from './pizza-item.interface';

export interface CartItemInterface extends PizzaItemInterface {
    quantity: number;
}
