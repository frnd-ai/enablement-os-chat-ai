import { EventEmitter, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class EnablementOsChatAiService {
    constructor(http) {
        this.http = http;
        this.darkMode = false;
        this.onResponse = new EventEmitter();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5hYmxlbWVudC1vcy1jaGF0LWFpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lbmFibGVtZW50LW9zLWNoYXQtYWkvc3JjL2xpYi9lbmFibGVtZW50LW9zLWNoYXQtYWkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBT3ZELE1BQU0sT0FBTyx5QkFBeUI7SUE0Q3BDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUEzQ3BDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFckMsc0JBQWlCLEdBQUc7WUFDbEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIscUJBQXFCLEVBQUUsU0FBUztZQUNoQyw0QkFBNEIsRUFBRSxTQUFTO1lBQ3ZDLDhCQUE4QixFQUFFLFNBQVM7U0FDMUMsQ0FBQTtRQUVELHFCQUFnQixHQUFHO1lBQ2pCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLHFCQUFxQixFQUFFLFNBQVM7WUFDaEMsNEJBQTRCLEVBQUUsU0FBUztZQUN2Qyw4QkFBOEIsRUFBRSxTQUFTO1NBQzFDLENBQUM7UUFFRixjQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQztRQUM5QyxjQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFp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LEdBQUcsRUFBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLEtBQUssRUFBQyxDQUFDO1FBQzFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNuRCxDQUFDOztzSEE5RlUseUJBQXlCOzBIQUF6Qix5QkFBeUIsY0FGeEIsTUFBTTsyRkFFUCx5QkFBeUI7a0JBSHJDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtFbmFibGVtZW50T3NDaGF0QWlDb21wb25lbnR9IGZyb20gJy4vZW5hYmxlbWVudC1vcy1jaGF0LWFpLmNvbXBvbmVudCc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRW5hYmxlbWVudE9zQ2hhdEFpU2VydmljZSB7XG4gIGRhcmtNb2RlID0gZmFsc2U7XG5cbiAgb25SZXNwb25zZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGxpZ2h0VGhlbWVPcHRpb25zID0ge1xuICAgIHNpZGViYXJCRzogJyM2YjZhNmEwOCcsXG4gICAgY29udGVudEJHOiAnI0ZGRkZGRicsXG4gICAgYm9yZGVyQ29sb3I6ICcjZDNkM2QzJyxcbiAgICB0ZXh0Q29sb3I6ICcjMDAwMDAwJyxcbiAgICBpY29uQ29sb3I6ICcjMDAwMDAwJyxcbiAgICBjaGF0RmllbGRCRzogJyM2YjZhNmEwOCcsXG4gICAgc2lkZWJhck9wdGlvbnNIb3ZlckJHOiAnI2RlZGNkYycsXG4gICAgc2lkZWJhck9wdGlvbnNIb3ZlclRleHRDb2xvcjogJyMwMDAwMDAnLFxuICAgIHNpZGViYXJPcHRpb25zSG92ZXJCb3JkZXJDb2xvcjogJyNkM2QzZDMnXG4gIH1cblxuICBkYXJrVGhlbWVPcHRpb25zID0ge1xuICAgIHNpZGViYXJCRzogJyMyNjI2MjYnLFxuICAgIGNvbnRlbnRCRzogJyMzYjNiM2InLFxuICAgIGJvcmRlckNvbG9yOiAnIzY1NjU2NScsXG4gICAgdGV4dENvbG9yOiAnI2NiY2JjYicsXG4gICAgaWNvbkNvbG9yOiAnI2NiY2JjYicsXG4gICAgY2hhdEZpZWxkQkc6ICcjMjYyNjI2JyxcbiAgICBzaWRlYmFyT3B0aW9uc0hvdmVyQkc6ICcjNmI2YjZiJyxcbiAgICBzaWRlYmFyT3B0aW9uc0hvdmVyVGV4dENvbG9yOiAnI2NiY2JjYicsXG4gICAgc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yOiAnIzY1NjU2NSdcbiAgfTtcblxuICBzaWRlYmFyQkcgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy5zaWRlYmFyQkc7XG4gIGNvbnRlbnRCRyA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LmNvbnRlbnRCRztcbiAgYm9yZGVyQ29sb3IgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy5ib3JkZXJDb2xvcjtcbiAgdGV4dENvbG9yID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8udGV4dENvbG9yO1xuICBpY29uQ29sb3IgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy5pY29uQ29sb3I7XG4gIGNoYXRGaWVsZEJHID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uY2hhdEZpZWxkQkc7XG4gIHNpZGViYXJPcHRpb25zSG92ZXJCRyA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LnNpZGViYXJPcHRpb25zSG92ZXJCRztcbiAgc2lkZWJhck9wdGlvbnNIb3ZlclRleHRDb2xvciA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LnNpZGViYXJPcHRpb25zSG92ZXJUZXh0Q29sb3I7XG4gIHNpZGViYXJPcHRpb25zSG92ZXJCb3JkZXJDb2xvciA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LnNpZGViYXJPcHRpb25zSG92ZXJCb3JkZXJDb2xvcjtcblxuICAvLyBIb3ZlcnNcbiAgc2lkZWJhckFkZE5ld0hvdmVyID0gZmFsc2U7XG4gIHNpZGViYXJDbGVhckNoYXRIb3ZlciA9IGZhbHNlO1xuICBzaWRlYmFyVGhlbWVIb3ZlciA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHRoaXMuZGFya01vZGUgPSB0aGlzLmZldGNoU2F2ZWREYXJrTW9kZSgpO1xuICAgIHRoaXMuc2V0RGFya01vZGUodGhpcy5kYXJrTW9kZSk7XG4gIH1cblxuICBzZXREYXJrTW9kZShpc0RhcmtNb2RlOiBib29sZWFuKSB7XG4gICAgaWYgKGlzRGFya01vZGUpIHtcbiAgICAgIHRoaXMuZGFya01vZGUgPSB0cnVlO1xuICAgICAgdGhpcy5zaWRlYmFyQkcgPSB0aGlzLmRhcmtUaGVtZU9wdGlvbnM/LnNpZGViYXJCRyA/PyB0aGlzLnNpZGViYXJCRztcbiAgICAgIHRoaXMuY29udGVudEJHID0gdGhpcy5kYXJrVGhlbWVPcHRpb25zPy5jb250ZW50QkcgPz8gdGhpcy5jb250ZW50Qkc7XG4gICAgICB0aGlzLmJvcmRlckNvbG9yID0gdGhpcy5kYXJrVGhlbWVPcHRpb25zPy5ib3JkZXJDb2xvciA/PyB0aGlzLmJvcmRlckNvbG9yO1xuICAgICAgdGhpcy50ZXh0Q29sb3IgPSB0aGlzLmRhcmtUaGVtZU9wdGlvbnM/LnRleHRDb2xvciA/PyB0aGlzLnRleHRDb2xvcjtcbiAgICAgIHRoaXMuaWNvbkNvbG9yID0gdGhpcy5kYXJrVGhlbWVPcHRpb25zPy5pY29uQ29sb3IgPz8gdGhpcy5pY29uQ29sb3I7XG4gICAgICB0aGlzLmNoYXRGaWVsZEJHID0gdGhpcy5kYXJrVGhlbWVPcHRpb25zPy5jaGF0RmllbGRCRyA/PyB0aGlzLnNpZGViYXJCRztcbiAgICAgIHRoaXMuc2lkZWJhck9wdGlvbnNIb3ZlckJHID0gdGhpcy5kYXJrVGhlbWVPcHRpb25zPy5zaWRlYmFyT3B0aW9uc0hvdmVyQkcgPz8gdGhpcy5zaWRlYmFyT3B0aW9uc0hvdmVyQkc7XG4gICAgICB0aGlzLnNpZGViYXJPcHRpb25zSG92ZXJUZXh0Q29sb3IgPSB0aGlzLmRhcmtUaGVtZU9wdGlvbnM/LnNpZGViYXJPcHRpb25zSG92ZXJUZXh0Q29sb3IgPz8gdGhpcy5zaWRlYmFyT3B0aW9uc0hvdmVyVGV4dENvbG9yO1xuICAgICAgdGhpcy5zaWRlYmFyT3B0aW9uc0hvdmVyQm9yZGVyQ29sb3IgPSB0aGlzLmRhcmtUaGVtZU9wdGlvbnM/LnNpZGViYXJPcHRpb25zSG92ZXJCb3JkZXJDb2xvciA/PyB0aGlzLnNpZGViYXJPcHRpb25zSG92ZXJCb3JkZXJDb2xvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXJrTW9kZSA9IGZhbHNlO1xuICAgICAgdGhpcy5zaWRlYmFyQkcgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy5zaWRlYmFyQkcgPz8gdGhpcy5zaWRlYmFyQkc7XG4gICAgICB0aGlzLmNvbnRlbnRCRyA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LmNvbnRlbnRCRyA/PyB0aGlzLmNvbnRlbnRCRztcbiAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy5ib3JkZXJDb2xvciA/PyB0aGlzLmJvcmRlckNvbG9yO1xuICAgICAgdGhpcy50ZXh0Q29sb3IgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy50ZXh0Q29sb3IgPz8gdGhpcy50ZXh0Q29sb3I7XG4gICAgICB0aGlzLmljb25Db2xvciA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/Lmljb25Db2xvciA/PyB0aGlzLmljb25Db2xvcjtcbiAgICAgIHRoaXMuY2hhdEZpZWxkQkcgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy5jaGF0RmllbGRCRyA/PyB0aGlzLnNpZGViYXJCRztcbiAgICAgIHRoaXMuc2lkZWJhck9wdGlvbnNIb3ZlckJHID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uc2lkZWJhck9wdGlvbnNIb3ZlckJHID8/IHRoaXMuc2lkZWJhck9wdGlvbnNIb3ZlckJHO1xuICAgICAgdGhpcy5zaWRlYmFyT3B0aW9uc0hvdmVyVGV4dENvbG9yID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uc2lkZWJhck9wdGlvbnNIb3ZlclRleHRDb2xvciA/PyB0aGlzLnNpZGViYXJPcHRpb25zSG92ZXJUZXh0Q29sb3I7XG4gICAgICB0aGlzLnNpZGViYXJPcHRpb25zSG92ZXJCb3JkZXJDb2xvciA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LnNpZGViYXJPcHRpb25zSG92ZXJCb3JkZXJDb2xvciA/PyB0aGlzLnNpZGViYXJPcHRpb25zSG92ZXJCb3JkZXJDb2xvcjtcbiAgICB9XG4gICAgdGhpcy5zYXZlRGFya01vZGUoKTtcbiAgfVxuXG4gIHNhdmVEYXJrTW9kZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW5hYmxlbWVudC1vcy1jaGF0LWFpLWRhcmstbW9kZScsIHRoaXMuZGFya01vZGUgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgfVxuXG4gIGZldGNoU2F2ZWREYXJrTW9kZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB0aGVtZU1vZGVTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5hYmxlbWVudC1vcy1jaGF0LWFpLWRhcmstbW9kZScpO1xuICAgIHJldHVybiAhISh0aGVtZU1vZGVTdHJpbmc/Lmxlbmd0aCAmJiB0aGVtZU1vZGVTdHJpbmcgPT09ICd0cnVlJyk7XG4gIH1cblxuICBwdWJsaWMgZmV0Y2hSZXNwb25zZShjb252ZXJzYXRpb246IGFueSwgYXBpVG9rZW46IGFueSwgYmV0YU1vZGU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9uczogYW55ID0ge2hlYWRlcnM6IHt9fTtcbiAgICByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmVhcmVyICcgKyBhcGlUb2tlbjtcbiAgICBjb25zdCB1cmwgPSBiZXRhTW9kZSA/ICdodHRwczovL2NsYXNzaWZpZWQuZnJuZC5haS9hcGkvdjEvYnJhaW4vY2hhdC8nIDogJ2h0dHBzOi8vc2VydmljZS5mcm5kLmFpL2FwaS92MS9icmFpbi9jaGF0Lyc7XG4gICAgY29uc3QgYm9keSA9IHtwcm9tcHQ6IGNvbnZlcnNhdGlvbi5xdWVyeX07XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpO1xuICAgIH0sIDEwMClcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCByZXF1ZXN0T3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==