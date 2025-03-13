import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiViewControllerComponent } from './multi-view-controller.component';
import { MultiViewControllerDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class MultiViewControllerProxyModule {
    constructor() {
        MultiViewControllerDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
MultiViewControllerProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewControllerProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MultiViewControllerProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: MultiViewControllerProxyModule, declarations: [MultiViewControllerComponent], imports: [CommonModule], exports: [MultiViewControllerComponent] });
MultiViewControllerProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewControllerProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewControllerProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MultiViewControllerComponent],
                    imports: [CommonModule],
                    exports: [MultiViewControllerComponent]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktdmlldy1jb250cm9sbGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZhYnJpYy13cmFwcGVycy9zcmMvbXVsdGktdmlldy1jb250cm9sbGVyL211bHRpLXZpZXctY29udHJvbGxlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQU94RSxNQUFNLE9BQU8sOEJBQThCO0lBQ3pDO1FBQ0UsNkJBQTZCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUNELGFBQWEsQ0FBQyxNQUFzQixJQUFHLENBQUM7OzRIQUo3Qiw4QkFBOEI7NkhBQTlCLDhCQUE4QixpQkFKMUIsNEJBQTRCLGFBQ2pDLFlBQVksYUFDWiw0QkFBNEI7NkhBRTNCLDhCQUE4QixZQUgvQixZQUFZOzRGQUdYLDhCQUE4QjtrQkFMMUMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDNUMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztpQkFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlLCBBcHBsaWNhdGlvblJlZiwgRG9Cb290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNdWx0aVZpZXdDb250cm9sbGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tdWx0aS12aWV3LWNvbnRyb2xsZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE11bHRpVmlld0NvbnRyb2xsZXJEZWZpbml0aW9uIH0gZnJvbSAnQGZhYnJpYy1tc2Z0L2ZhYnJpYy13ZWInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNdWx0aVZpZXdDb250cm9sbGVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtNdWx0aVZpZXdDb250cm9sbGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aVZpZXdDb250cm9sbGVyUHJveHlNb2R1bGUgaW1wbGVtZW50cyBEb0Jvb3RzdHJhcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIE11bHRpVmlld0NvbnRyb2xsZXJEZWZpbml0aW9uLmRlZmluZSgpO1xuICB9XG4gIG5nRG9Cb290c3RyYXAoYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge31cbn1cbiJdfQ==