import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataUrl = 'assets/restoList.json';

  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get<string[]>(this.dataUrl).pipe(shareReplay(1));
  }
}
