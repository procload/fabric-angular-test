import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item.component';
import { MenuItemDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class MenuItemProxyModule {
    constructor() {
        MenuItemDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
MenuItemProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuItemProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MenuItemProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: MenuItemProxyModule, declarations: [MenuItemComponent], imports: [CommonModule], exports: [MenuItemComponent] });
MenuItemProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuItemProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuItemProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MenuItemComponent],
                    imports: [CommonModule],
                    exports: [MenuItemComponent]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZhYnJpYy13cmFwcGVycy9zcmMvbWVudS1pdGVtL21lbnUtaXRlbS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQU83RCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCO1FBQ0Usa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNELGFBQWEsQ0FBQyxNQUFzQixJQUFHLENBQUM7O2lIQUo3QixtQkFBbUI7a0hBQW5CLG1CQUFtQixpQkFKZixpQkFBaUIsYUFDdEIsWUFBWSxhQUNaLGlCQUFpQjtrSEFFaEIsbUJBQW1CLFlBSHBCLFlBQVk7NEZBR1gsbUJBQW1CO2tCQUwvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUNqQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmdNb2R1bGUsIEFwcGxpY2F0aW9uUmVmLCBEb0Jvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1lbnVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9tZW51LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IE1lbnVJdGVtRGVmaW5pdGlvbiB9IGZyb20gJ0BmYWJyaWMtbXNmdC9mYWJyaWMtd2ViJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWVudUl0ZW1Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW01lbnVJdGVtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNZW51SXRlbVByb3h5TW9kdWxlIGltcGxlbWVudHMgRG9Cb290c3RyYXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBNZW51SXRlbURlZmluaXRpb24uZGVmaW5lKCk7XG4gIH1cbiAgbmdEb0Jvb3RzdHJhcChhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxufVxuIl19