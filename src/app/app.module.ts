import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JovemdevTitleComponent } from './jovemdev-title/jovemdev-title.component';
import { FormsModule } from '@angular/forms';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { FormImcComponent } from './form-imc/form-imc.component';
import { TableImcComponent } from './table-imc/table-imc.component';

@NgModule({
  declarations: [
    AppComponent,
    JovemdevTitleComponent,
    ExemploBindingComponent,
    FormImcComponent,
    TableImcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
