import { Component } from '@angular/core';
import {
  combineLatest,
  map,
  Observable,
  startWith,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import packageJson from '../../package.json';
import { DataService } from './data.service';

function getRand(max: number) {
  return Math.floor(Math.random() * max);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public version: string = packageJson.version;

  MAX_LIGNE = 3;

  private data$ = this.dataService.getConfig();

  table$: Observable<string[][]> = this.data$.pipe(
    map((data) => {
      const table: string[][] = [[]];

      if (data.length % 4 === 0) {
        this.MAX_LIGNE = 4;
      }
      data.forEach((el, index) => {
        if (index % this.MAX_LIGNE === 0 && index !== 0) {
          table.push([]);
        }

        table[table.length - 1].push(el);
      });
      return table;
    })
  );

  launchRandAction = new Subject<void>();
  selectedId$ = this.launchRandAction.pipe(
    switchMap(() => this.data$.pipe(map((data) => data.length))),
    map((dataLenght) => getRand(dataLenght)),
    startWith(null)
  );

  vm$ = combineLatest([this.selectedId$, this.table$]).pipe(
    map(([selectedId, table]) => ({ selectedId, table }))
  );

  constructor(private dataService: DataService) {}

  launchRand() {
    let count = 0;
    const timeout = setInterval(() => {
      this.launchRandAction.next();
      ++count;
      if (count > 20) {
        clearInterval(timeout);
      }
    }, 100);
    /* let count = 0;
    const that = this;

    const interval = setInterval(() => {
      that.selectedId = getRand(data.length);
      ++count;
      if (count === 20) {
        clearInterval(interval);
      }
    }, 100);*/
  }
}
