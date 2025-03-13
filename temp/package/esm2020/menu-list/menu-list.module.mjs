import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list.component';
import { MenuListDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class MenuListProxyModule {
    constructor() {
        MenuListDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
MenuListProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuListProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MenuListProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: MenuListProxyModule, declarations: [MenuListComponent], imports: [CommonModule], exports: [MenuListComponent] });
MenuListProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuListProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuListProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MenuListComponent],
                    imports: [CommonModule],
                    exports: [MenuListComponent]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZhYnJpYy13cmFwcGVycy9zcmMvbWVudS1saXN0L21lbnUtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQU83RCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCO1FBQ0Usa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNELGFBQWEsQ0FBQyxNQUFzQixJQUFHLENBQUM7O2lIQUo3QixtQkFBbUI7a0hBQW5CLG1CQUFtQixpQkFKZixpQkFBaUIsYUFDdEIsWUFBWSxhQUNaLGlCQUFpQjtrSEFFaEIsbUJBQW1CLFlBSHBCLFlBQVk7NEZBR1gsbUJBQW1CO2tCQUwvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNqQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmdNb2R1bGUsIEFwcGxpY2F0aW9uUmVmLCBEb0Jvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1lbnVMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnVMaXN0RGVmaW5pdGlvbiB9IGZyb20gJ0BmYWJyaWMtbXNmdC9mYWJyaWMtd2ViJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWVudUxpc3RDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW01lbnVMaXN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNZW51TGlzdFByb3h5TW9kdWxlIGltcGxlbWVudHMgRG9Cb290c3RyYXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBNZW51TGlzdERlZmluaXRpb24uZGVmaW5lKCk7XG4gIH1cbiAgbmdEb0Jvb3RzdHJhcChhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxufVxuIl19