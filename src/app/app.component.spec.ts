import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

describe('AppComponent', () => {
  let mockDataService;

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj(['getConfig']);
    mockDataService.getConfig.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: DataService, useValue: mockDataService }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Loto Resto'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Loto Resto');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container h2')?.textContent).toContain(
      'Loto Resto'
    );
  });
});
