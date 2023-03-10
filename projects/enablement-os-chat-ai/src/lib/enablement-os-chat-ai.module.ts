import { NgModule } from '@angular/core';
import { EnablementOsChatAiComponent } from './enablement-os-chat-ai.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    EnablementOsChatAiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    EnablementOsChatAiComponent
  ]
})
export class EnablementOsChatAiModule { }
