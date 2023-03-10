import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class EnablementOsChatAiService {
    constructor() {
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
}
EnablementOsChatAiService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EnablementOsChatAiService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EnablementOsChatAiService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EnablementOsChatAiService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: EnablementOsChatAiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5hYmxlbWVudC1vcy1jaGF0LWFpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lbmFibGVtZW50LW9zLWNoYXQtYWkvc3JjL2xpYi9lbmFibGVtZW50LW9zLWNoYXQtYWkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8seUJBQXlCO0lBMENwQztRQXpDQSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLHNCQUFpQixHQUFHO1lBQ2xCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLHFCQUFxQixFQUFFLFNBQVM7WUFDaEMsNEJBQTRCLEVBQUUsU0FBUztZQUN2Qyw4QkFBOEIsRUFBRSxTQUFTO1NBQzFDLENBQUE7UUFFRCxxQkFBZ0IsR0FBRztZQUNqQixTQUFTLEVBQUUsU0FBUztZQUNwQixTQUFTLEVBQUUsU0FBUztZQUNwQixXQUFXLEVBQUUsU0FBUztZQUN0QixTQUFTLEVBQUUsU0FBUztZQUNwQixTQUFTLEVBQUUsU0FBUztZQUNwQixXQUFXLEVBQUUsU0FBUztZQUN0QixxQkFBcUIsRUFBRSxTQUFTO1lBQ2hDLDRCQUE0QixFQUFFLFNBQVM7WUFDdkMsOEJBQThCLEVBQUUsU0FBUztTQUMxQyxDQUFDO1FBRUYsY0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUM7UUFDOUMsY0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUM7UUFDOUMsZ0JBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsV0FBVyxDQUFDO1FBQ2xELGNBQVMsR0FBRyxJQUFJ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O1lBQ3pFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUscUJBQXFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDO1lBQ3pHLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsNEJBQTRCLElBQUksSUFBSSxDQUFDLDRCQUE0QixDQUFDO1lBQzlILElBQUksQ0FBQyw4QkFBOEIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsOEJBQThCLElBQUksSUFBSSxDQUFDLDhCQUE4QixDQUFDO1NBQ3JJO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxZQUFZO1FBQ1YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsTUFBTSxlQUFlLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ2hGLE9BQU8sQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLE1BQU0sSUFBSSxlQUFlLEtBQUssTUFBTSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7c0hBakZVLHlCQUF5QjswSEFBekIseUJBQXlCLGNBRnhCLE1BQU07MkZBRVAseUJBQXlCO2tCQUhyQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRW5hYmxlbWVudE9zQ2hhdEFpU2VydmljZSB7XG4gIGRhcmtNb2RlID0gZmFsc2U7XG5cbiAgbGlnaHRUaGVtZU9wdGlvbnMgPSB7XG4gICAgc2lkZWJhckJHOiAnIzZiNmE2YTA4JyxcbiAgICBjb250ZW50Qkc6ICcjRkZGRkZGJyxcbiAgICBib3JkZXJDb2xvcjogJyNkM2QzZDMnLFxuICAgIHRleHRDb2xvcjogJyMwMDAwMDAnLFxuICAgIGljb25Db2xvcjogJyMwMDAwMDAnLFxuICAgIGNoYXRGaWVsZEJHOiAnIzZiNmE2YTA4JyxcbiAgICBzaWRlYmFyT3B0aW9uc0hvdmVyQkc6ICcjZGVkY2RjJyxcbiAgICBzaWRlYmFyT3B0aW9uc0hvdmVyVGV4dENvbG9yOiAnIzAwMDAwMCcsXG4gICAgc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yOiAnI2QzZDNkMydcbiAgfVxuXG4gIGRhcmtUaGVtZU9wdGlvbnMgPSB7XG4gICAgc2lkZWJhckJHOiAnIzI2MjYyNicsXG4gICAgY29udGVudEJHOiAnIzNiM2IzYicsXG4gICAgYm9yZGVyQ29sb3I6ICcjNjU2NTY1JyxcbiAgICB0ZXh0Q29sb3I6ICcjY2JjYmNiJyxcbiAgICBpY29uQ29sb3I6ICcjY2JjYmNiJyxcbiAgICBjaGF0RmllbGRCRzogJyMyNjI2MjYnLFxuICAgIHNpZGViYXJPcHRpb25zSG92ZXJCRzogJyM2YjZiNmInLFxuICAgIHNpZGViYXJPcHRpb25zSG92ZXJUZXh0Q29sb3I6ICcjY2JjYmNiJyxcbiAgICBzaWRlYmFyT3B0aW9uc0hvdmVyQm9yZGVyQ29sb3I6ICcjNjU2NTY1J1xuICB9O1xuXG4gIHNpZGViYXJCRyA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LnNpZGViYXJCRztcbiAgY29udGVudEJHID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uY29udGVudEJHO1xuICBib3JkZXJDb2xvciA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LmJvcmRlckNvbG9yO1xuICB0ZXh0Q29sb3IgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy50ZXh0Q29sb3I7XG4gIGljb25Db2xvciA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/Lmljb25Db2xvcjtcbiAgY2hhdEZpZWxkQkcgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy5jaGF0RmllbGRCRztcbiAgc2lkZWJhck9wdGlvbnNIb3ZlckJHID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uc2lkZWJhck9wdGlvbnNIb3ZlckJHO1xuICBzaWRlYmFyT3B0aW9uc0hvdmVyVGV4dENvbG9yID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uc2lkZWJhck9wdGlvbnNIb3ZlclRleHRDb2xvcjtcbiAgc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yO1xuXG4gIC8vIEhvdmVyc1xuICBzaWRlYmFyQWRkTmV3SG92ZXIgPSBmYWxzZTtcbiAgc2lkZWJhckNsZWFyQ2hhdEhvdmVyID0gZmFsc2U7XG4gIHNpZGViYXJUaGVtZUhvdmVyID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXJrTW9kZSA9IHRoaXMuZmV0Y2hTYXZlZERhcmtNb2RlKCk7XG4gICAgdGhpcy5zZXREYXJrTW9kZSh0aGlzLmRhcmtNb2RlKTtcbiAgfVxuXG4gIHNldERhcmtNb2RlKGlzRGFya01vZGU6IGJvb2xlYW4pIHtcbiAgICBpZiAoaXNEYXJrTW9kZSkge1xuICAgICAgdGhpcy5kYXJrTW9kZSA9IHRydWU7XG4gICAgICB0aGlzLnNpZGViYXJCRyA9IHRoaXMuZGFya1RoZW1lT3B0aW9ucz8uc2lkZWJhckJHID8/IHRoaXMuc2lkZWJhckJHO1xuICAgICAgdGhpcy5jb250ZW50QkcgPSB0aGlzLmRhcmtUaGVtZU9wdGlvbnM/LmNvbnRlbnRCRyA/PyB0aGlzLmNvbnRlbnRCRztcbiAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSB0aGlzLmRhcmtUaGVtZU9wdGlvbnM/LmJvcmRlckNvbG9yID8/IHRoaXMuYm9yZGVyQ29sb3I7XG4gICAgICB0aGlzLnRleHRDb2xvciA9IHRoaXMuZGFya1RoZW1lT3B0aW9ucz8udGV4dENvbG9yID8/IHRoaXMudGV4dENvbG9yO1xuICAgICAgdGhpcy5pY29uQ29sb3IgPSB0aGlzLmRhcmtUaGVtZU9wdGlvbnM/Lmljb25Db2xvciA/PyB0aGlzLmljb25Db2xvcjtcbiAgICAgIHRoaXMuY2hhdEZpZWxkQkcgPSB0aGlzLmRhcmtUaGVtZU9wdGlvbnM/LmNoYXRGaWVsZEJHID8/IHRoaXMuc2lkZWJhckJHO1xuICAgICAgdGhpcy5zaWRlYmFyT3B0aW9uc0hvdmVyQkcgPSB0aGlzLmRhcmtUaGVtZU9wdGlvbnM/LnNpZGViYXJPcHRpb25zSG92ZXJCRyA/PyB0aGlzLnNpZGViYXJPcHRpb25zSG92ZXJCRztcbiAgICAgIHRoaXMuc2lkZWJhck9wdGlvbnNIb3ZlclRleHRDb2xvciA9IHRoaXMuZGFya1RoZW1lT3B0aW9ucz8uc2lkZWJhck9wdGlvbnNIb3ZlclRleHRDb2xvciA/PyB0aGlzLnNpZGViYXJPcHRpb25zSG92ZXJUZXh0Q29sb3I7XG4gICAgICB0aGlzLnNpZGViYXJPcHRpb25zSG92ZXJCb3JkZXJDb2xvciA9IHRoaXMuZGFya1RoZW1lT3B0aW9ucz8uc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yID8/IHRoaXMuc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhcmtNb2RlID0gZmFsc2U7XG4gICAgICB0aGlzLnNpZGViYXJCRyA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LnNpZGViYXJCRyA/PyB0aGlzLnNpZGViYXJCRztcbiAgICAgIHRoaXMuY29udGVudEJHID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uY29udGVudEJHID8/IHRoaXMuY29udGVudEJHO1xuICAgICAgdGhpcy5ib3JkZXJDb2xvciA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LmJvcmRlckNvbG9yID8/IHRoaXMuYm9yZGVyQ29sb3I7XG4gICAgICB0aGlzLnRleHRDb2xvciA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LnRleHRDb2xvciA/PyB0aGlzLnRleHRDb2xvcjtcbiAgICAgIHRoaXMuaWNvbkNvbG9yID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uaWNvbkNvbG9yID8/IHRoaXMuaWNvbkNvbG9yO1xuICAgICAgdGhpcy5jaGF0RmllbGRCRyA9IHRoaXMubGlnaHRUaGVtZU9wdGlvbnM/LmNoYXRGaWVsZEJHID8/IHRoaXMuc2lkZWJhckJHO1xuICAgICAgdGhpcy5zaWRlYmFyT3B0aW9uc0hvdmVyQkcgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy5zaWRlYmFyT3B0aW9uc0hvdmVyQkcgPz8gdGhpcy5zaWRlYmFyT3B0aW9uc0hvdmVyQkc7XG4gICAgICB0aGlzLnNpZGViYXJPcHRpb25zSG92ZXJUZXh0Q29sb3IgPSB0aGlzLmxpZ2h0VGhlbWVPcHRpb25zPy5zaWRlYmFyT3B0aW9uc0hvdmVyVGV4dENvbG9yID8/IHRoaXMuc2lkZWJhck9wdGlvbnNIb3ZlclRleHRDb2xvcjtcbiAgICAgIHRoaXMuc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yID0gdGhpcy5saWdodFRoZW1lT3B0aW9ucz8uc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yID8/IHRoaXMuc2lkZWJhck9wdGlvbnNIb3ZlckJvcmRlckNvbG9yO1xuICAgIH1cbiAgICB0aGlzLnNhdmVEYXJrTW9kZSgpO1xuICB9XG5cbiAgc2F2ZURhcmtNb2RlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbmFibGVtZW50LW9zLWNoYXQtYWktZGFyay1tb2RlJywgdGhpcy5kYXJrTW9kZSA/ICd0cnVlJyA6ICdmYWxzZScpO1xuICB9XG5cbiAgZmV0Y2hTYXZlZERhcmtNb2RlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRoZW1lTW9kZVN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmFibGVtZW50LW9zLWNoYXQtYWktZGFyay1tb2RlJyk7XG4gICAgcmV0dXJuICEhKHRoZW1lTW9kZVN0cmluZz8ubGVuZ3RoICYmIHRoZW1lTW9kZVN0cmluZyA9PT0gJ3RydWUnKTtcbiAgfVxufVxuIl19