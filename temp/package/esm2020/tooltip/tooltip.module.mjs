import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class TooltipProxyModule {
    constructor() {
        TooltipDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
TooltipProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TooltipProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TooltipProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: TooltipProxyModule, declarations: [TooltipComponent], imports: [CommonModule], exports: [TooltipComponent] });
TooltipProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TooltipProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TooltipProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TooltipComponent],
                    imports: [CommonModule],
                    exports: [TooltipComponent]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9mYWJyaWMtd3JhcHBlcnMvc3JjL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQU81RCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCO1FBQ0UsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELGFBQWEsQ0FBQyxNQUFzQixJQUFHLENBQUM7O2dIQUo3QixrQkFBa0I7aUhBQWxCLGtCQUFrQixpQkFKZCxnQkFBZ0IsYUFDckIsWUFBWSxhQUNaLGdCQUFnQjtpSEFFZixrQkFBa0IsWUFIbkIsWUFBWTs0RkFHWCxrQkFBa0I7a0JBTDlCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZ01vZHVsZSwgQXBwbGljYXRpb25SZWYsIERvQm9vdHN0cmFwIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9vbHRpcERlZmluaXRpb24gfSBmcm9tICdAZmFicmljLW1zZnQvZmFicmljLXdlYic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1Rvb2x0aXBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1Rvb2x0aXBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBQcm94eU1vZHVsZSBpbXBsZW1lbnRzIERvQm9vdHN0cmFwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgVG9vbHRpcERlZmluaXRpb24uZGVmaW5lKCk7XG4gIH1cbiAgbmdEb0Jvb3RzdHJhcChhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxufVxuIl19