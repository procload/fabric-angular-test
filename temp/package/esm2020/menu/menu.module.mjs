import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class MenuProxyModule {
    constructor() {
        MenuDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
MenuProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MenuProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: MenuProxyModule, declarations: [MenuComponent], imports: [CommonModule], exports: [MenuComponent] });
MenuProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MenuComponent],
                    imports: [CommonModule],
                    exports: [MenuComponent]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9mYWJyaWMtd3JhcHBlcnMvc3JjL21lbnUvbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBT3pELE1BQU0sT0FBTyxlQUFlO0lBQzFCO1FBQ0UsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxhQUFhLENBQUMsTUFBc0IsSUFBRyxDQUFDOzs2R0FKN0IsZUFBZTs4R0FBZixlQUFlLGlCQUpYLGFBQWEsYUFDbEIsWUFBWSxhQUNaLGFBQWE7OEdBRVosZUFBZSxZQUhoQixZQUFZOzRGQUdYLGVBQWU7a0JBTDNCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUM3QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlLCBBcHBsaWNhdGlvblJlZiwgRG9Cb290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW51RGVmaW5pdGlvbiB9IGZyb20gJ0BmYWJyaWMtbXNmdC9mYWJyaWMtd2ViJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWVudUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTWVudUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWVudVByb3h5TW9kdWxlIGltcGxlbWVudHMgRG9Cb290c3RyYXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBNZW51RGVmaW5pdGlvbi5kZWZpbmUoKTtcbiAgfVxuICBuZ0RvQm9vdHN0cmFwKGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHt9XG59XG4iXX0=