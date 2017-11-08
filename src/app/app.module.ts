import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClientModule } from './client/client.module';
import { DoctorModule } from './doctor/doctor.module';
import { PetsModule } from './pets/pets.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StartPageComponent } from './start-page.component/start-page.component';
import { AuthorizationComponent } from './authorization.component/authorization.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    AuthorizationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ClientModule,
    DoctorModule,
    PetsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
