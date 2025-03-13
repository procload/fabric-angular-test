import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonComponent } from './loading-button.component';
import { LoadingButtonDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class LoadingButtonProxyModule {
    constructor() {
        LoadingButtonDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
LoadingButtonProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LoadingButtonProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LoadingButtonProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: LoadingButtonProxyModule, declarations: [LoadingButtonComponent], imports: [CommonModule], exports: [LoadingButtonComponent] });
LoadingButtonProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LoadingButtonProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LoadingButtonProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LoadingButtonComponent],
                    imports: [CommonModule],
                    exports: [LoadingButtonComponent]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1idXR0b24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZmFicmljLXdyYXBwZXJzL3NyYy9sb2FkaW5nLWJ1dHRvbi9sb2FkaW5nLWJ1dHRvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQU9sRSxNQUFNLE9BQU8sd0JBQXdCO0lBQ25DO1FBQ0UsdUJBQXVCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUNELGFBQWEsQ0FBQyxNQUFzQixJQUFHLENBQUM7O3NIQUo3Qix3QkFBd0I7dUhBQXhCLHdCQUF3QixpQkFKcEIsc0JBQXNCLGFBQzNCLFlBQVksYUFDWixzQkFBc0I7dUhBRXJCLHdCQUF3QixZQUh6QixZQUFZOzRGQUdYLHdCQUF3QjtrQkFMcEMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDdEMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlLCBBcHBsaWNhdGlvblJlZiwgRG9Cb290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMb2FkaW5nQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ0J1dHRvbkRlZmluaXRpb24gfSBmcm9tICdAZmFicmljLW1zZnQvZmFicmljLXdlYic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0xvYWRpbmdCdXR0b25Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0xvYWRpbmdCdXR0b25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdCdXR0b25Qcm94eU1vZHVsZSBpbXBsZW1lbnRzIERvQm9vdHN0cmFwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgTG9hZGluZ0J1dHRvbkRlZmluaXRpb24uZGVmaW5lKCk7XG4gIH1cbiAgbmdEb0Jvb3RzdHJhcChhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxufVxuIl19