import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class EnablementOsChatAiService {
    private http;
    darkMode: boolean;
    lightThemeOptions: {
        sidebarBG: string;
        contentBG: string;
        borderColor: string;
        textColor: string;
        iconColor: string;
        chatFieldBG: string;
        sidebarOptionsHoverBG: string;
        sidebarOptionsHoverTextColor: string;
        sidebarOptionsHoverBorderColor: string;
    };
    darkThemeOptions: {
        sidebarBG: string;
        contentBG: string;
        borderColor: string;
        textColor: string;
        iconColor: string;
        chatFieldBG: string;
        sidebarOptionsHoverBG: string;
        sidebarOptionsHoverTextColor: string;
        sidebarOptionsHoverBorderColor: string;
    };
    sidebarBG: string;
    contentBG: string;
    borderColor: string;
    textColor: string;
    iconColor: string;
    chatFieldBG: string;
    sidebarOptionsHoverBG: string;
    sidebarOptionsHoverTextColor: string;
    sidebarOptionsHoverBorderColor: string;
    sidebarAddNewHover: boolean;
    sidebarClearChatHover: boolean;
    sidebarThemeHover: boolean;
    constructor(http: HttpClient);
    setDarkMode(isDarkMode: boolean): void;
    saveDarkMode(): void;
    fetchSavedDarkMode(): boolean;
    fetchResponse(conversation: any, apiToken: any, betaMode: boolean): import("rxjs").Observable<ArrayBuffer>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EnablementOsChatAiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EnablementOsChatAiService>;
}
