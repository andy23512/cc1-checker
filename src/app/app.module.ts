import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SwitchComponent } from './components/switch/switch.component';
import { CamelToKebabPipe } from './pipes/camel-to-kebab.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SwitchComponent,
    CamelToKebabPipe,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
