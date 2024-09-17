import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Importiere CommonModule
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
   

  ],
  imports: [
    BrowserModule,  // Ermöglicht die Nutzung von Angular im Browser
    FormsModule,    // Unterstützt Template-basierte Formulare und Zwei-Wege-Datenbindung (ngModel)
    HttpClientModule, // Ermöglicht HTTP-Kommunikation mit externen APIs
    CommonModule

  ],
  providers: [],    // Hier kannst du Dienste (Services) registrieren, falls vorhanden
  bootstrap: []  // Entferne AppComponent aus dem Bootstrap-Array
})
export class AppModule { }
