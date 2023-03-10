import { OnInit } from '@angular/core';
import { EnablementOsChatAiService } from './enablement-os-chat-ai.service';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class EnablementOsChatAiComponent implements OnInit {
    enablementOsChatAiService: EnablementOsChatAiService;
    http: HttpClient;
    themeOptions: any;
    singleMessaging: boolean;
    apiToken: any;
    betaMode: boolean;
    query: any;
    responseLoading: boolean;
    selectedConversation: any;
    conversations: any[];
    constructor(enablementOsChatAiService: EnablementOsChatAiService, http: HttpClient);
    ngOnInit(): void;
    selectConversation(conversation: any): void;
    clearConversation(): void;
    submitQuery(): void;
    fetchResponse(conversation: any): Promise<void>;
    copyText(text: any): void;
    copyHtml(content: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EnablementOsChatAiComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EnablementOsChatAiComponent, "enablement-os-chat-ai", never, { "themeOptions": "themeOptions"; "singleMessaging": "singleMessaging"; "apiToken": "apiToken"; "betaMode": "betaMode"; }, {}, never, never>;
}
