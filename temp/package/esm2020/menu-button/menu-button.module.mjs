import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button.component';
import { MenuButtonDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class MenuButtonProxyModule {
    constructor() {
        MenuButtonDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
MenuButtonProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuButtonProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MenuButtonProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: MenuButtonProxyModule, declarations: [MenuButtonComponent], imports: [CommonModule], exports: [MenuButtonComponent] });
MenuButtonProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuButtonProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuButtonProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MenuButtonComponent],
                    imports: [CommonModule],
                    exports: [MenuButtonComponent]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1idXR0b24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZmFicmljLXdyYXBwZXJzL3NyYy9tZW51LWJ1dHRvbi9tZW51LWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQU8vRCxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDO1FBQ0Usb0JBQW9CLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNELGFBQWEsQ0FBQyxNQUFzQixJQUFHLENBQUM7O21IQUo3QixxQkFBcUI7b0hBQXJCLHFCQUFxQixpQkFKakIsbUJBQW1CLGFBQ3hCLFlBQVksYUFDWixtQkFBbUI7b0hBRWxCLHFCQUFxQixZQUh0QixZQUFZOzRGQUdYLHFCQUFxQjtrQkFMakMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDbkMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlLCBBcHBsaWNhdGlvblJlZiwgRG9Cb290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNZW51QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVudUJ1dHRvbkRlZmluaXRpb24gfSBmcm9tICdAZmFicmljLW1zZnQvZmFicmljLXdlYic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01lbnVCdXR0b25Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW01lbnVCdXR0b25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVCdXR0b25Qcm94eU1vZHVsZSBpbXBsZW1lbnRzIERvQm9vdHN0cmFwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgTWVudUJ1dHRvbkRlZmluaXRpb24uZGVmaW5lKCk7XG4gIH1cbiAgbmdEb0Jvb3RzdHJhcChhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxufVxuIl19