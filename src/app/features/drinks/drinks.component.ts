import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-drinks',
  imports: [],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrinksComponent { }
