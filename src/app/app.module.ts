import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MainComponent} from './pages/main/main.component';
import {SupportComponent} from './components/support/support.component';
import {OrganizationComponent} from './components/organization/organization.component';
import {ParticipantsComponent} from './components/participants/participants.component';
import {UploadComponent} from './pages/upload/upload.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ImageZoomComponent } from './components/image-zoom/image-zoom.component';
import { DeveloperComponent } from './components/developer/developer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SupportComponent,
    OrganizationComponent,
    ParticipantsComponent,
    UploadComponent,
    ImageZoomComponent,
    DeveloperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
