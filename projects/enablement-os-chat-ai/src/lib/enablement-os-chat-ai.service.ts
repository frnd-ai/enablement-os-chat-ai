import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnablementOsChatAiService {
  darkMode = false;

  lightThemeOptions = {
    sidebarBG: '#6b6a6a08',
    contentBG: '#FFFFFF',
    borderColor: '#d3d3d3',
    textColor: '#000000',
    iconColor: '#000000',
    chatFieldBG: '#6b6a6a08',
    sidebarOptionsHoverBG: '#dedcdc',
    sidebarOptionsHoverTextColor: '#000000',
    sidebarOptionsHoverBorderColor: '#d3d3d3'
  }

  darkThemeOptions = {
    sidebarBG: '#262626',
    contentBG: '#3b3b3b',
    borderColor: '#656565',
    textColor: '#cbcbcb',
    iconColor: '#cbcbcb',
    chatFieldBG: '#262626',
    sidebarOptionsHoverBG: '#6b6b6b',
    sidebarOptionsHoverTextColor: '#cbcbcb',
    sidebarOptionsHoverBorderColor: '#656565'
  };

  sidebarBG = this.lightThemeOptions?.sidebarBG;
  contentBG = this.lightThemeOptions?.contentBG;
  borderColor = this.lightThemeOptions?.borderColor;
  textColor = this.lightThemeOptions?.textColor;
  iconColor = this.lightThemeOptions?.iconColor;
  chatFieldBG = this.lightThemeOptions?.chatFieldBG;
  sidebarOptionsHoverBG = this.lightThemeOptions?.sidebarOptionsHoverBG;
  sidebarOptionsHoverTextColor = this.lightThemeOptions?.sidebarOptionsHoverTextColor;
  sidebarOptionsHoverBorderColor = this.lightThemeOptions?.sidebarOptionsHoverBorderColor;

  // Hovers
  sidebarAddNewHover = false;
  sidebarClearChatHover = false;
  sidebarThemeHover = false;

  constructor(private http: HttpClient) {
    this.darkMode = this.fetchSavedDarkMode();
    this.setDarkMode(this.darkMode);
  }

  setDarkMode(isDarkMode: boolean) {
    if (isDarkMode) {
      this.darkMode = true;
      this.sidebarBG = this.darkThemeOptions?.sidebarBG ?? this.sidebarBG;
      this.contentBG = this.darkThemeOptions?.contentBG ?? this.contentBG;
      this.borderColor = this.darkThemeOptions?.borderColor ?? this.borderColor;
      this.textColor = this.darkThemeOptions?.textColor ?? this.textColor;
      this.iconColor = this.darkThemeOptions?.iconColor ?? this.iconColor;
      this.chatFieldBG = this.darkThemeOptions?.chatFieldBG ?? this.sidebarBG;
      this.sidebarOptionsHoverBG = this.darkThemeOptions?.sidebarOptionsHoverBG ?? this.sidebarOptionsHoverBG;
      this.sidebarOptionsHoverTextColor = this.darkThemeOptions?.sidebarOptionsHoverTextColor ?? this.sidebarOptionsHoverTextColor;
      this.sidebarOptionsHoverBorderColor = this.darkThemeOptions?.sidebarOptionsHoverBorderColor ?? this.sidebarOptionsHoverBorderColor;
    } else {
      this.darkMode = false;
      this.sidebarBG = this.lightThemeOptions?.sidebarBG ?? this.sidebarBG;
      this.contentBG = this.lightThemeOptions?.contentBG ?? this.contentBG;
      this.borderColor = this.lightThemeOptions?.borderColor ?? this.borderColor;
      this.textColor = this.lightThemeOptions?.textColor ?? this.textColor;
      this.iconColor = this.lightThemeOptions?.iconColor ?? this.iconColor;
      this.chatFieldBG = this.lightThemeOptions?.chatFieldBG ?? this.sidebarBG;
      this.sidebarOptionsHoverBG = this.lightThemeOptions?.sidebarOptionsHoverBG ?? this.sidebarOptionsHoverBG;
      this.sidebarOptionsHoverTextColor = this.lightThemeOptions?.sidebarOptionsHoverTextColor ?? this.sidebarOptionsHoverTextColor;
      this.sidebarOptionsHoverBorderColor = this.lightThemeOptions?.sidebarOptionsHoverBorderColor ?? this.sidebarOptionsHoverBorderColor;
    }
    this.saveDarkMode();
  }

  saveDarkMode() {
    localStorage.setItem('enablement-os-chat-ai-dark-mode', this.darkMode ? 'true' : 'false');
  }

  fetchSavedDarkMode(): boolean {
    const themeModeString = localStorage.getItem('enablement-os-chat-ai-dark-mode');
    return !!(themeModeString?.length && themeModeString === 'true');
  }

  public fetchResponse(conversation: any, apiToken: any, betaMode: boolean) {
    const requestOptions: any = {headers: {}};
    requestOptions.headers.Authorization = 'Bearer ' + apiToken;
    const url = betaMode ? 'https://classified.frnd.ai/api/v1/brain/chat/' : 'https://service.frnd.ai/api/v1/brain/chat/';
    const body = {prompt: conversation.query};
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100)
    return this.http.post(url, body, requestOptions);
  }
}
