import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { BtnMenuComponent } from './components/btn-menu/btn-menu.component';
import { TextboxAreaComponent } from './components/textbox-area/textbox-area.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    BtnMenuComponent,
    TextboxAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
