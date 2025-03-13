import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardPanelComponent } from './wizard-panel.component';
import { WizardPanelDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class WizardPanelProxyModule {
    constructor() {
        WizardPanelDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
WizardPanelProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardPanelProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
WizardPanelProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: WizardPanelProxyModule, declarations: [WizardPanelComponent], imports: [CommonModule], exports: [WizardPanelComponent] });
WizardPanelProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardPanelProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardPanelProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [WizardPanelComponent],
                    imports: [CommonModule],
                    exports: [WizardPanelComponent]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXBhbmVsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZhYnJpYy13cmFwcGVycy9zcmMvd2l6YXJkLXBhbmVsL3dpemFyZC1wYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQU9oRSxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDO1FBQ0UscUJBQXFCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUNELGFBQWEsQ0FBQyxNQUFzQixJQUFHLENBQUM7O29IQUo3QixzQkFBc0I7cUhBQXRCLHNCQUFzQixpQkFKbEIsb0JBQW9CLGFBQ3pCLFlBQVksYUFDWixvQkFBb0I7cUhBRW5CLHNCQUFzQixZQUh2QixZQUFZOzRGQUdYLHNCQUFzQjtrQkFMbEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlLCBBcHBsaWNhdGlvblJlZiwgRG9Cb290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBXaXphcmRQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vd2l6YXJkLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaXphcmRQYW5lbERlZmluaXRpb24gfSBmcm9tICdAZmFicmljLW1zZnQvZmFicmljLXdlYic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1dpemFyZFBhbmVsQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtXaXphcmRQYW5lbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkUGFuZWxQcm94eU1vZHVsZSBpbXBsZW1lbnRzIERvQm9vdHN0cmFwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgV2l6YXJkUGFuZWxEZWZpbml0aW9uLmRlZmluZSgpO1xuICB9XG4gIG5nRG9Cb290c3RyYXAoYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge31cbn1cbiJdfQ==