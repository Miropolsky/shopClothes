import { HeadComponent } from './head/head.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './main/info/info.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import { AboutComponent } from './main/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeadComponent,
    InfoComponent,
    CatalogComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
