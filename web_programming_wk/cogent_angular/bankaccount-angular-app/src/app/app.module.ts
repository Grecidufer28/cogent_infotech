import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account.component';
import { DepositComponent } from './deposit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, AccountComponent, DepositComponent
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
