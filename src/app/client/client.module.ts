import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './client.routing';

import { ClientCabinetComponent } from './client-cabinet/client-cabinet.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { MyPetsComponent } from './my-pets/my-pets.component';

import { ConsultationService } from '../services/consultation.service';
import { UserService } from '../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ClientCabinetComponent, ClientDetailComponent, MyPetsComponent],
  exports: [ClientCabinetComponent, ClientDetailComponent],
  providers: [ConsultationService, UserService]
})
export class ClientModule { }
