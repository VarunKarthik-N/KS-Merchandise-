import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FestComponent } from './fest/fest.component';
import { TopHeader } from './top/top.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FestComponent,
    TopHeader
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
