import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [AppComponent, TableComponent, ItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
