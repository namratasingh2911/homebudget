import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DemoMaterialModule} from './material-module';
import { FlexLayoutModule} from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetTableComponent } from './components/budget-table/budget-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEntryComponent } from './components/add-entry/add-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetTableComponent,
    AddEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    DemoMaterialModule
   
  ],
  providers: [],
  exports:[
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
