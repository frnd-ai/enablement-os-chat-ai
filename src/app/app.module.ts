import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EnablementOsChatAiModule} from '../../projects/enablement-os-chat-ai/src/lib/enablement-os-chat-ai.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnablementOsChatAiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
