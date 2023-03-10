import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'enablement-os-chat-ai-web';

  themeOptions = {
    sidebarBG: '#8039df14',
    contentBG: '#FFFFFF',
    borderColor: '#28034940',
    textColor: '#280349',
    iconColor: '#7A50B3',
    chatFieldBG: '#8039df14',
    sidebarOptionsHoverBG: '#dedcdc',
    sidebarOptionsHoverTextColor: '#000000',
    sidebarOptionsHoverBorderColor: '#28034940'
  };
}
