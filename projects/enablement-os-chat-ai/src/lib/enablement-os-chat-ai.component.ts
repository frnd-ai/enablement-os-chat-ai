import {Component, Input, OnInit} from '@angular/core';
import {EnablementOsChatAiService} from './enablement-os-chat-ai.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'enablement-os-chat-ai',
  templateUrl: './enablement-os-chat-ai.component.html',
  styleUrls: ['./enablement-os-chat-ai.component.scss']
})
export class EnablementOsChatAiComponent implements OnInit {
  @Input() themeOptions: any;
  @Input() singleMessaging: boolean = false;
  @Input() apiToken: any;
  @Input() betaMode = false;

  query: any;
  responseLoading = false;

  selectedConversation: any;
  conversations: any[] = [];

  constructor(public enablementOsChatAiService: EnablementOsChatAiService, public http: HttpClient) { }

  ngOnInit(): void {
    this.enablementOsChatAiService.lightThemeOptions.sidebarBG = this.themeOptions?.sidebarBG ?? this.enablementOsChatAiService.lightThemeOptions.sidebarBG;
    this.enablementOsChatAiService.lightThemeOptions.borderColor = this.themeOptions?.borderColor ?? this.enablementOsChatAiService.lightThemeOptions.borderColor;
    this.enablementOsChatAiService.lightThemeOptions.textColor = this.themeOptions?.textColor ?? this.enablementOsChatAiService.lightThemeOptions.textColor;
    this.enablementOsChatAiService.lightThemeOptions.iconColor = this.themeOptions?.iconColor ?? this.enablementOsChatAiService.lightThemeOptions.iconColor;
    this.enablementOsChatAiService.lightThemeOptions.chatFieldBG = this.themeOptions?.chatFieldBG ?? this.enablementOsChatAiService.lightThemeOptions.chatFieldBG;
    this.enablementOsChatAiService.lightThemeOptions.sidebarOptionsHoverBG = this.themeOptions?.sidebarOptionsHoverBG ?? this.enablementOsChatAiService.lightThemeOptions.sidebarOptionsHoverBG;
    this.enablementOsChatAiService.lightThemeOptions.sidebarOptionsHoverTextColor = this.themeOptions?.sidebarOptionsHoverTextColor ?? this.enablementOsChatAiService.lightThemeOptions.sidebarOptionsHoverTextColor;
    this.enablementOsChatAiService.lightThemeOptions.sidebarOptionsHoverBorderColor = this.themeOptions?.sidebarOptionsHoverBorderColor ?? this.enablementOsChatAiService.lightThemeOptions.sidebarOptionsHoverBorderColor;

    this.enablementOsChatAiService.sidebarBG = this.themeOptions?.sidebarBG ?? this.enablementOsChatAiService.sidebarBG;
    this.enablementOsChatAiService.borderColor = this.themeOptions?.borderColor ?? this.enablementOsChatAiService.borderColor;
    this.enablementOsChatAiService.textColor = this.themeOptions?.textColor ?? this.enablementOsChatAiService.textColor;
    this.enablementOsChatAiService.iconColor = this.themeOptions?.iconColor ?? this.enablementOsChatAiService.iconColor;
    this.enablementOsChatAiService.chatFieldBG = this.themeOptions?.chatFieldBG ?? this.enablementOsChatAiService.chatFieldBG;
    this.enablementOsChatAiService.sidebarOptionsHoverBG = this.themeOptions?.sidebarOptionsHoverBG ?? this.enablementOsChatAiService.sidebarOptionsHoverBG;
    this.enablementOsChatAiService.sidebarOptionsHoverTextColor = this.themeOptions?.sidebarOptionsHoverTextColor ?? this.enablementOsChatAiService.sidebarOptionsHoverTextColor;
    this.enablementOsChatAiService.sidebarOptionsHoverBorderColor = this.themeOptions?.sidebarOptionsHoverBorderColor ?? this.enablementOsChatAiService.sidebarOptionsHoverBorderColor;
  }

  selectConversation(conversation: any) {
    this.selectedConversation = conversation;
  }

  clearConversation() {
    this.conversations = [];
    this.selectedConversation = undefined;
  }

  submitQuery(query?: any) {
    if (query) {
      this.query = query;
    }
    if (this.query?.length && !this.responseLoading) {
      if (!this.singleMessaging) {
        if (this.selectedConversation) {
          this.selectedConversation.conversations = this.selectedConversation.conversations ?? [];
          const conversation = {
            query: String(this.query),
            loading: true
          };
          this.selectedConversation.conversations.push(conversation);
          this.fetchResponse(conversation);
        }
      } else {
        this.selectedConversation = this.selectedConversation ?? {};
        this.selectedConversation.conversations = this.selectedConversation.conversations ?? [];
        const conversation = {
          query: String(this.query),
          loading: true
        };
        this.selectedConversation.conversations.push(conversation);
        this.fetchResponse(conversation);
      }
      this.query = undefined;
    }
  }

  fetchResponse(conversation: any) {
    if (this.apiToken?.length) {
      this.enablementOsChatAiService.fetchResponse(conversation, this.apiToken, this.betaMode)
        .subscribe({
          next: (data: any) => {
            const text = data.text;
            const response = text.split('\n').join('<br />');
            conversation.loading = false;
            conversation.response = response;
            this.responseLoading = false;
            window.scrollTo(0, document.body.scrollHeight);
          },
          error: (error: any) => {
            conversation.loading = false;
            conversation.responseFetchingFailed = true;
            this.responseLoading = false;
            window.scrollTo(0, document.body.scrollHeight);
          }
        });
    }
  }

  copyText(text: any) {
    navigator.clipboard.writeText(text);
  }

  copyHtml(content: any) {
    const type = "text/html";
    const blob = new Blob([ content ], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    navigator.clipboard.write(data);
  }
}
