import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { Crud2Component } from './crud2/crud2.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    Crud2Component,
    AdminMainComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'admin-main',component:AdminMainComponent},
      {path:'crud',component:CrudComponent},
      {path:'crud2',component:Crud2Component},
      {path:'aboutus',component:AboutusComponent}
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
