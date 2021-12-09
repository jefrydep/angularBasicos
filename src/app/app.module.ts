import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { heroesModule } from './heores/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
      
  ],
  imports: [
    BrowserModule,
    heroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
