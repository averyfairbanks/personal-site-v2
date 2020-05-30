import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {
  CarouselModule,
  WavesModule,
  ButtonsModule,
  CardsModule,
  InputsModule,
  CheckboxComponent,
  CheckboxModule
} from 'angular-bootstrap-md';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmailHandlerService} from './services/email-handler.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    WavesModule.forRoot(),
    ButtonsModule,
    CardsModule,
    CheckboxModule,
    InputsModule.forRoot(),
  ],
  providers: [EmailHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
