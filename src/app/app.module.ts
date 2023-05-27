import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MenuDiarioComponent } from './components/menu-diario/menu-diario.component';
import { VerMenuComponent } from './components/ver-menu/ver-menu.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { CartaComponent } from './components/carta/carta.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutUsComponent,
    MenuDiarioComponent,
    VerMenuComponent,
    FooterComponent,
    CartaComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImageModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
