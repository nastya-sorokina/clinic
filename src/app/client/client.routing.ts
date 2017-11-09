import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientCabinetComponent } from './client-cabinet/client-cabinet.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { MyPetsComponent } from './my-pets/my-pets.component';
import {NewClientComponent} from './new-client/new-client.component';

const routes: Routes = [
  { path: 'cabinet/:id', component: ClientCabinetComponent },
  { path: 'detail/:id', component: ClientDetailComponent },
  { path: ':id/my-pets', component: MyPetsComponent},
  { path: 'add-new', component: NewClientComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
