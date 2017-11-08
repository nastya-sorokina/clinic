import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientCabinetComponent } from './client-cabinet/client-cabinet.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { MyPetsComponent } from './my-pets/my-pets.component';

const routes: Routes = [
  { path: 'cabinet/:id', component: ClientCabinetComponent },
  { path: 'detail/:id', component: ClientDetailComponent },
  { path: ':id/my-pets', component: MyPetsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
