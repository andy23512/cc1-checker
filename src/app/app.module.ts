import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
