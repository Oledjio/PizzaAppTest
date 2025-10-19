import { Injectable } from '@angular/core';
import { PizzaItemInterface } from '@core/models';
import { Observable, of, delay } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiPizzaService {
    private readonly pizzas: PizzaItemInterface[] = [
        {
            id: 1,
            image: 'assets/images/Layer2.png',
            name: 'Мясная Делюкс',
            structure: [
                'Пепперони',
                'лук',
                'бекон',
                'томаная паста',
                'колбаски',
                'перец',
                'грибы',
                'соус чили',
                'ананасы',
            ],
        },
        {
            id: 2,
            image: 'assets/images/Layer3.png',
            name: 'Морская Премиум',
            structure: ['Перец', 'сыр', 'креветки', 'кальмары', 'мидии', 'лосось'],
        },
        {
            id: 3,
            image: 'assets/images/Layer4.png',
            name: 'Бекон и Сосиски',
            structure: ['Бекон', 'сыр', 'сосиски', 'ананас', 'томатная паста'],
        },
        {
            id: 4,
            image: 'assets/images/Layer5.png',
            name: 'Куриная Делюкс',
            structure: ['Курица', 'ананас', 'сыр Пепперони', 'соус для пиццы', 'томатная паста'],
        },
        {
            id: 5,
            image: 'assets/images/Layer6.png',
            name: 'Барбекю Премиум',
            structure: ['Свинина BBQ', 'соус Барбекю', 'сыр', 'курица', 'соус для пиццы', 'соус чили'],
        },
        {
            id: 6,
            image: 'assets/images/Layer7.png',
            name: 'Пепперони Дабл',
            structure: ['Пепперони', 'сыр', 'колбаса 2 видов: обжаренная и вареная'],
        },
        {
            id: 7,
            image: 'assets/images/Layer8.png',
            name: 'Куриное трио',
            structure: [
                'Жареная курица',
                'Тушеная курица',
                'Куриные наггетсы',
                'перец',
                'сыр',
                'грибы',
                'соус для пиццы',
            ],
        },
        {
            id: 8,
            image: 'assets/images/Layer9.png',
            name: 'Сырная',
            structure: ['Сыр Джюгас', 'Сыр с плесенью', 'Сыр Моцарелла', 'Сыр секретный'],
        },
    ];

    getPizzas(): Observable<PizzaItemInterface[]> {
        return of(this.pizzas).pipe(delay(800));
    }
}
