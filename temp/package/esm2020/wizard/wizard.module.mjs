import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import { WizardDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class WizardProxyModule {
    constructor() {
        WizardDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
WizardProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
WizardProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: WizardProxyModule, declarations: [WizardComponent], imports: [CommonModule], exports: [WizardComponent] });
WizardProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [WizardComponent],
                    imports: [CommonModule],
                    exports: [WizardComponent]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZhYnJpYy13cmFwcGVycy9zcmMvd2l6YXJkL3dpemFyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFPM0QsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QjtRQUNFLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCxhQUFhLENBQUMsTUFBc0IsSUFBRyxDQUFDOzsrR0FKN0IsaUJBQWlCO2dIQUFqQixpQkFBaUIsaUJBSmIsZUFBZSxhQUNwQixZQUFZLGFBQ1osZUFBZTtnSEFFZCxpQkFBaUIsWUFIbEIsWUFBWTs0RkFHWCxpQkFBaUI7a0JBTDdCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMvQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlLCBBcHBsaWNhdGlvblJlZiwgRG9Cb290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBXaXphcmRDb21wb25lbnQgfSBmcm9tICcuL3dpemFyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2l6YXJkRGVmaW5pdGlvbiB9IGZyb20gJ0BmYWJyaWMtbXNmdC9mYWJyaWMtd2ViJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbV2l6YXJkQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtXaXphcmRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZFByb3h5TW9kdWxlIGltcGxlbWVudHMgRG9Cb290c3RyYXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBXaXphcmREZWZpbml0aW9uLmRlZmluZSgpO1xuICB9XG4gIG5nRG9Cb290c3RyYXAoYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge31cbn1cbiJdfQ==