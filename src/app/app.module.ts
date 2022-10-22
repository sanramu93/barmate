import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LogoLoaderComponent } from './shared/logo-loader/logo-loader.component';
import { HeaderNavComponent } from './shared/header-nav/header-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoLoaderComponent,
    HeaderNavComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
