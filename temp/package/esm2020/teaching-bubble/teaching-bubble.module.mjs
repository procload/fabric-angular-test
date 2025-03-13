import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachingBubbleComponent } from './teaching-bubble.component';
import { TeachingBubbleDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class TeachingBubbleProxyModule {
    constructor() {
        TeachingBubbleDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
TeachingBubbleProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TeachingBubbleProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TeachingBubbleProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: TeachingBubbleProxyModule, declarations: [TeachingBubbleComponent], imports: [CommonModule], exports: [TeachingBubbleComponent] });
TeachingBubbleProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TeachingBubbleProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TeachingBubbleProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TeachingBubbleComponent],
                    imports: [CommonModule],
                    exports: [TeachingBubbleComponent]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hpbmctYnViYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZhYnJpYy13cmFwcGVycy9zcmMvdGVhY2hpbmctYnViYmxlL3RlYWNoaW5nLWJ1YmJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQU9uRSxNQUFNLE9BQU8seUJBQXlCO0lBQ3BDO1FBQ0Usd0JBQXdCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUNELGFBQWEsQ0FBQyxNQUFzQixJQUFHLENBQUM7O3VIQUo3Qix5QkFBeUI7d0hBQXpCLHlCQUF5QixpQkFKckIsdUJBQXVCLGFBQzVCLFlBQVksYUFDWix1QkFBdUI7d0hBRXRCLHlCQUF5QixZQUgxQixZQUFZOzRGQUdYLHlCQUF5QjtrQkFMckMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlLCBBcHBsaWNhdGlvblJlZiwgRG9Cb290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUZWFjaGluZ0J1YmJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGVhY2hpbmctYnViYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZWFjaGluZ0J1YmJsZURlZmluaXRpb24gfSBmcm9tICdAZmFicmljLW1zZnQvZmFicmljLXdlYic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RlYWNoaW5nQnViYmxlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtUZWFjaGluZ0J1YmJsZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVGVhY2hpbmdCdWJibGVQcm94eU1vZHVsZSBpbXBsZW1lbnRzIERvQm9vdHN0cmFwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgVGVhY2hpbmdCdWJibGVEZWZpbml0aW9uLmRlZmluZSgpO1xuICB9XG4gIG5nRG9Cb290c3RyYXAoYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge31cbn1cbiJdfQ==