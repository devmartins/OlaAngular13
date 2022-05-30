import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaudacaoComponent } from './components/saudacao/saudacao.component';
import { SegundoComponent } from './components/segundo/segundo.component';

@NgModule({
  declarations: [
    AppComponent,
    SaudacaoComponent,
    SegundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
