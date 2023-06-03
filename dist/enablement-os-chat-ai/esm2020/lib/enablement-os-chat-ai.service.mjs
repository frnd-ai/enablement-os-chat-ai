import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class EnablementOsChatAiService {
    constructor(http) {
        this.http = http;
        this.darkMode = false;
        this.lightThemeOptions = {
            sidebarBG: '#6b6a6a08',
            contentBG: '#FFFFFF',
            borderColor: '#d3d3d3',
            textColor: '#000000',
            iconColor: '#000000',
            chatFieldBG: '#6b6a6a08',
            sidebarOptionsHoverBG: '#dedcdc',
            sidebarOptionsHoverTextColor: '#000000',
            sidebarOptionsHoverBorderColor: '#d3d3d3'
        };
        this.darkThemeOptions = {
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
        this.sidebarBG = this.lightThemeOptions?.sidebarBG;
        this.contentBG = this.lightThemeOptions?.contentBG;
        this.borderColor = this.lightThemeOptions?.borderColor;
        this.textColor = this.lightThemeOptions?.textColor;
        this.iconColor = this.lightThemeOptions?.iconColor;
        this.chatFieldBG = this.lightThemeOptions?.chatFieldBG;
        this.sidebarOptionsHoverBG = this.lightThemeOptions?.sidebarOptionsHoverBG;
        this.sidebarOptionsHoverTextColor = this.lightThemeOptions?.sidebarOptionsHoverTextColor;
        this.sidebarOptionsHoverBorderColor = this.lightThemeOptions?.sidebarOptionsHoverBorderColor;
        // Hovers
        this.sidebarAddNewHover = false;
        this.sidebarClearChatHover = false;
        this.sidebarThemeHover = false;
        this.darkMode = this.fetchSavedDarkMode();
        this.setDarkMode(this.darkMode);
    }
    setDarkMode(isDarkMode) {
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
        }
        else {
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
    fetchSavedDarkMode() {
        const themeModeString = localStorage.getItem('enablement-os-chat-ai-dark-mode');
        return !!(themeModeString?.length && themeModeString === 'true');
    }
    fetchResponse(conversation, apiToken, betaMode) {
        const requestOptions = { headers: {} };
        requestOptions.headers.Authorization = 'Bearer ' + apiToken;
        const url = betaMode ? 'https://classified.frnd.ai/api/v1/brain/chat/' : 'https://service.frnd.ai/api/v1/brain/chat/';
        const body = { prompt: conversation.query };
        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight);
        }, 100);
        return this.http.post(url, body, requestOptions);
    }
}
EnablementOsChatAiService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EnablementOsChatAiService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
EnablementOsChatAiService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EnablementOsChatAiService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EnablementOsChatAiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5hYmxlbWVudC1vcy1jaGF0LWFpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lbmFibGVtZW50LW9zLWNoYXQtYWkvc3JjL2xpYi9lbmFibGVtZW50LW9zLWNoYXQtYWkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLHlCQUF5QjtJQTBDcEMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQXpDcEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixzQkFBaUIsR0FBRztZQUNsQixTQUFTLEVBQUUsV0FBVztZQUN0QixTQUFTLEVBQUUsU0FBUztZQUNwQixXQUFXLEVBQUUsU0FBUztZQUN0QixTQUFTLEVBQUUsU0FBUztZQUNwQixTQUFTLEVBQUUsU0FBUztZQUNwQixXQUFXLEVBQUUsV0FBVztZQUN4QixxQkFBcUIsRUFBRSxTQUFTO1lBQ2hDLDRCQUE0QixFQUFFLFNBQVM7WUFDdkMsOEJBQThCLEVBQUUsU0FBUztTQUMxQyxDQUFBO1FBRUQscUJBQWdCLEdBQUc7WUFDakIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsV0FBVyxFQUFFLFNBQVM7WUFDdEIscUJBQXFCLEVBQUUsU0FBUztZQUNoQyw0QkFBNEIsRUFBRSxTQUFTO1lBQ3ZDLDhCQUE4QixFQUFFLFNBQVM7U0FDMUMsQ0FBQztRQUVGLGNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDO1FBQzlDLGNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDO1FBQzlDLGdCQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFdBQVcsQ0FBQztRQUNsRCxjQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQztRQUM5QyxjQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQztRQUM5QyxnQkFBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUM7UUFDbEQsMEJBQXFCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO1FBQ3RFLGlDQUE0QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSw0QkFBNEIsQ0FBQztRQUNwRixtQ0FBOEIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsOEJBQThCLENBQUM7UUFFeEYsU0FBUztRQUNULHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUMzQiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBR3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxVQUFtQjtRQUM3QixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUscUJBQXFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQ3hHLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsNEJBQTRCLElBQUksSUFBSSxDQUFDLDRCQUE0QixDQUFDO1lBQzdILElBQUksQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsOEJBQThCLElBQUksSUFBSSxDQUFDLDhCQUE4QixDQUFDO1NBQ3BJO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNyRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMzRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNyRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN6RSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUN6RyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLDRCQUE0QixJQUFJLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztZQUM5SCxJQUFJLENBQUMsOEJBQThCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLDhCQUE4QixJQUFJLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztTQUNySTtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWTtRQUNWLFlBQVksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUNoRixPQUFPLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxNQUFNLElBQUksZUFBZSxLQUFLLE1BQU0sQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFTSxhQUFhLENBQUMsWUFBaUIsRUFBRSxRQUFhLEVBQUUsUUFBaUI7UUFDdEUsTUFBTSxjQUFjLEdBQVEsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFDLENBQUM7UUFDMUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM1RCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQyw0Q0FBNEMsQ0FBQztRQUN0SCxNQUFNLElBQUksR0FBRyxFQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsS0FBSyxFQUFDLENBQUM7UUFDMUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O3NIQTVGVSx5QkFBeUI7MEhBQXpCLHlCQUF5QixjQUZ4QixNQUFNOzJGQUVQLHlCQUF5QjtrQkFIckMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRW5hYmxlbWVudE9zQ2hhdEFpU2VydmljZSB7XG4gIGRhcmtNb2RlID0gZmFsc2U7XG5cbiAgbGlnaHRUaGVtZU9wdGlvbnMgPSB7XG4gICAgc2lkZWJhckJHOiAnIzZiNmE2YTA4JyxcbiAgICBjb250ZW50Qkc6ICcjRkZGRkZGJyxcbiAgICBib3JkZXJDb2xvcjogJyNkM2QzZDMnLFxuICAgIHRleHRDb2xvcjogJyMwMDAwMDAnLFxuICAgIGljb25Db2xvcjogJyMwMDAwMDAnLFxuICAgIGNoYXRGaWVsZEJHOiAnIzZiNmE2YTA4JyxcbiAgICBzaWRlYmFyT3B0aW9uc0hvdmVyQkc6ICcjZGVkY2RjJyxcbiAgICBzaWRlYmFyT3B0aW9uc0hvdmVyVGV4dENvbG9yOiAnIzAwMDAwMCcsXG4gICAgc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yOiAnI2QzZDNkMydcbiAgfVxuXG4gIGRhcmtUaGVtZU9wdGlvbnMgPSB7XG4gICAgc2lkZWJhckJHOiAnIzI2MjYyNicsXG4gICAgY29udGVudEJHOiAnIzNiM2IzYicsXG4gICAgYm9yZGVyQ29sb3I6ICcjNjU2NTY1JyxcbiAgICB0ZXh0Q29sb3I6ICcjY2JjYmNiJyxcbiAgICBpY29uQ29sb3I6ICcjY2JjYmNiJyxcbiAgICBjaGF0RmllbGRCRzogJyMyNjI2MjYnLFxuICAgIHNpZGViYXJPcHRpb25zSG92ZXJCRzogJyM2YjZiNmInLFxuICAgIHNpZGViYXJPcHRpb25zSG92ZXJUZXh0Q29sb3I6ICcjY2JjYmNiJyxcbiAgICBzaWRlYmFyT3B0aW9uc0hvdmVyQm9yZGVyQ29sb3I6ICcjNjU2NTY1J1xuICB9O1xuXG4gIHNpZGViYXJCRyA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LnNpZGViYXJCRztcbiAgY29udGVudEJHID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uY29udGVudEJHO1xuICBib3JkZXJDb2xvciA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LmJvcmRlckNvbG9yO1xuICB0ZXh0Q29sb3IgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy50ZXh0Q29sb3I7XG4gIGljb25Db2xvciA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/Lmljb25Db2xvcjtcbiAgY2hhdEZpZWxkQkcgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy5jaGF0RmllbGRCRztcbiAgc2lkZWJhck9wdGlvbnNIb3ZlckJHID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uc2lkZWJhck9wdGlvbnNIb3ZlckJHO1xuICBzaWRlYmFyT3B0aW9uc0hvdmVyVGV4dENvbG9yID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uc2lkZWJhck9wdGlvbnNIb3ZlclRleHRDb2xvcjtcbiAgc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yO1xuXG4gIC8vIEhvdmVyc1xuICBzaWRlYmFyQWRkTmV3SG92ZXIgPSBmYWxzZTtcbiAgc2lkZWJhckNsZWFyQ2hhdEhvdmVyID0gZmFsc2U7XG4gIHNpZGViYXJUaGVtZUhvdmVyID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgdGhpcy5kYXJrTW9kZSA9IHRoaXMuZmV0Y2hTYXZlZERhcmtNb2RlKCk7XG4gICAgdGhpcy5zZXREYXJrTW9kZSh0aGlzLmRhcmtNb2RlKTtcbiAgfVxuXG4gIHNldERhcmtNb2RlKGlzRGFya01vZGU6IGJvb2xlYW4pIHtcbiAgICBpZiAoaXNEYXJrTW9kZSkge1xuICAgICAgdGhpcy5kYXJrTW9kZSA9IHRydWU7XG4gICAgICB0aGlzLnNpZGViYXJCRyA9IHRoaXMuZGFya1RoZW1lT3B0aW9ucz8uc2lkZWJhckJHID8/IHRoaXMuc2lkZWJhckJHO1xuICAgICAgdGhpcy5jb250ZW50QkcgPSB0aGlzLmRhcmtUaGVtZU9wdGlvbnM/LmNvbnRlbnRCRyA/PyB0aGlzLmNvbnRlbnRCRztcbiAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSB0aGlzLmRhcmtUaGVtZU9wdGlvbnM/LmJvcmRlckNvbG9yID8/IHRoaXMuYm9yZGVyQ29sb3I7XG4gICAgICB0aGlzLnRleHRDb2xvciA9IHRoaXMuZGFya1RoZW1lT3B0aW9ucz8udGV4dENvbG9yID8/IHRoaXMudGV4dENvbG9yO1xuICAgICAgdGhpcy5pY29uQ29sb3IgPSB0aGlzLmRhcmtUaGVtZU9wdGlvbnM/Lmljb25Db2xvciA/PyB0aGlzLmljb25Db2xvcjtcbiAgICAgIHRoaXMuY2hhdEZpZWxkQkcgPSB0aGlzLmRhcmtUaGVtZU9wdGlvbnM/LmNoYXRGaWVsZEJHID8/IHRoaXMuc2lkZWJhckJHO1xuICAgICAgdGhpcy5zaWRlYmFyT3B0aW9uc0hvdmVyQkcgPSB0aGlzLmRhcmtUaGVtZU9wdGlvbnM/LnNpZGViYXJPcHRpb25zSG92ZXJCRyA/PyB0aGlzLnNpZGViYXJPcHRpb25zSG92ZXJCRztcbiAgICAgIHRoaXMuc2lkZWJhck9wdGlvbnNIb3ZlclRleHRDb2xvciA9IHRoaXMuZGFya1RoZW1lT3B0aW9ucz8uc2lkZWJhck9wdGlvbnNIb3ZlclRleHRDb2xvciA/PyB0aGlzLnNpZGViYXJPcHRpb25zSG92ZXJUZXh0Q29sb3I7XG4gICAgICB0aGlzLnNpZGViYXJPcHRpb25zSG92ZXJCb3JkZXJDb2xvciA9IHRoaXMuZGFya1RoZW1lT3B0aW9ucz8uc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yID8/IHRoaXMuc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhcmtNb2RlID0gZmFsc2U7XG4gICAgICB0aGlzLnNpZGViYXJCRyA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LnNpZGViYXJCRyA/PyB0aGlzLnNpZGViYXJCRztcbiAgICAgIHRoaXMuY29udGVudEJHID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uY29udGVudEJHID8/IHRoaXMuY29udGVudEJHO1xuICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LmJvcmRlckNvbG9yID8/IHRoaXMuYm9yZGVyQ29sb3I7XG4gICAgICB0aGlzLnRleHRDb2xvciA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LnRleHRDb2xvciA/PyB0aGlzLnRleHRDb2xvcjtcbiAgICAgIHRoaXMuaWNvbkNvbG9yID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uaWNvbkNvbG9yID8/IHRoaXMuaWNvbkNvbG9yO1xuICAgICAgdGhpcy5jaGF0RmllbGRCRyA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LmNoYXRGaWVsZEJHID8/IHRoaXMuc2lkZWJhckJHO1xuICAgICAgdGhpcy5zaWRlYmFyT3B0aW9uc0hvdmVyQkcgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy5zaWRlYmFyT3B0aW9uc0hvdmVyQkcgPz8gdGhpcy5zaWRlYmFyT3B0aW9uc0hvdmVyQkc7XG4gICAgICB0aGlzLnNpZGViYXJPcHRpb25zSG92ZXJUZXh0Q29sb3IgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy5zaWRlYmFyT3B0aW9uc0hvdmVyVGV4dENvbG9yID8/IHRoaXMuc2lkZWJhck9wdGlvbnNIb3ZlclRleHRDb2xvcjtcbiAgICAgIHRoaXMuc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yID8/IHRoaXMuc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yO1xuICAgIH1cbiAgICB0aGlzLnNhdmVEYXJrTW9kZSgpO1xuICB9XG5cbiAgc2F2ZURhcmtNb2RlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbmFibGVtZW50LW9zLWNoYXQtYWktZGFyay1tb2RlJywgdGhpcy5kYXJrTW9kZSA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICB9XG5cbiAgZmV0Y2hTYXZlZERhcmtNb2RlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRoZW1lTW9kZVN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmFibGVtZW50LW9zLWNoYXQtYWktZGFyay1tb2RlJyk7XG4gICAgcmV0dXJuICEhKHRoZW1lTW9kZVN0cmluZz8ubGVuZ3RoICYmIHRoZW1lTW9kZVN0cmluZyA9PT0gJ3RydWUnKTtcbiAgfVxuXG4gIHB1YmxpYyBmZXRjaFJlc3BvbnNlKGNvbnZlcnNhdGlvbjogYW55LCBhcGlUb2tlbjogYW55LCBiZXRhTW9kZTogYm9vbGVhbikge1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zOiBhbnkgPSB7aGVhZGVyczoge319O1xuICAgIHJlcXVlc3RPcHRpb25zLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCZWFyZXIgJyArIGFwaVRva2VuO1xuICAgIGNvbnN0IHVybCA9IGJldGFNb2RlID8gJ2h0dHBzOi8vY2xhc3NpZmllZC5mcm5kLmFpL2FwaS92MS9icmFpbi9jaGF0LycgOiAnaHR0cHM6Ly9zZXJ2aWNlLmZybmQuYWkvYXBpL3YxL2JyYWluL2NoYXQvJztcbiAgICBjb25zdCBib2R5ID0ge3Byb21wdDogY29udmVyc2F0aW9uLnF1ZXJ5fTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCk7XG4gICAgfSwgMTAwKVxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGJvZHksIHJlcXVlc3RPcHRpb25zKTtcbiAgfVxufVxuIl19