import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarehouseComponent } from './warehouse.component';
import { ItemComponent } from './item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, WarehouseComponent, ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
