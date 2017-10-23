import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { ClientCabinetComponent }  from './client-cabinet.component';
import { StartPageComponent }      from './start-page.component';
import { ClientService }           from './client.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientCabinetComponent,
    StartPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
