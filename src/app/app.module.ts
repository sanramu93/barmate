import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoLoaderComponent } from './shared/logo-loader/logo-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoLoaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
