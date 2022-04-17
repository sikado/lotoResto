import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <div
      class="item border m-1 p-2 text-center fs-4 flex-fill"
      *ngIf="name"
      [ngClass]="{ 'bg-warning bg-opacity-25': isSelected }"
    >
      {{ name }}
    </div>
  `,
  styles: [
    `
      .item {
        font-family: 'Karla', sans-serif;
      }
      .selected {
        background-color: gray;
      }
    `,
  ],
})
export class ItemComponent {
  @Input() isSelected?: boolean;
  @Input() name?: string;
}
