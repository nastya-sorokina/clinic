import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientCabinetComponent } from './client-cabinet.component/client-cabinet.component';
import { DoctorCabinetComponent } from './doctor-cabinet.component/doctor-cabinet.component';
import { StartPageComponent } from './start-page.component/start-page.component';
import { AuthorizationComponent } from './authorization.component/authorization.component';
import { MyPetsComponent } from './pets/my-pets.component';
import { AllPetsComponent } from './pets/all-pets.component';
import { PetDetailComponent } from './pet-detail.component/pet-detail.component';
import { ClientDetailComponent } from './client-detail.component/client-detail.component';
import { SearchComponent } from './search.component/search.component';

import { ConsultationService } from './services/consultation.service';
import { PetService } from './services/pet.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientCabinetComponent,
    DoctorCabinetComponent,
    StartPageComponent,
    AuthorizationComponent,
    MyPetsComponent,
    AllPetsComponent,
    PetDetailComponent,
    ClientDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ConsultationService, PetService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
