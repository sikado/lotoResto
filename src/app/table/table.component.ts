import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() selectedId: number | null | undefined;
  @Input() data: string[] | null | undefined;
  @Input() MAX_LIGNE!: number;
}
