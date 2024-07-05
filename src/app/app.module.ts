import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListComponent } from './patita-list/patita-list.component';
import { ProductoCartComponent } from './patita-cart/patita-cart.component';
import { FormsModule } from '@angular/forms';
import { PatitaAboutComponent } from './patita-about/patita-about.component';
import { PatitaHomeComponent } from './patita-home/patita-home.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListComponent,
    ProductoCartComponent,
    PatitaAboutComponent,
    PatitaHomeComponent,
    InputIntegerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
