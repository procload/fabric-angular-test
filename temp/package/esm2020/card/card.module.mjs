import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class CardProxyModule {
    constructor() {
        CardDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
CardProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: CardProxyModule, declarations: [CardComponent], imports: [CommonModule], exports: [CardComponent] });
CardProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CardComponent],
                    imports: [CommonModule],
                    exports: [CardComponent]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9mYWJyaWMtd3JhcHBlcnMvc3JjL2NhcmQvY2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBT3pELE1BQU0sT0FBTyxlQUFlO0lBQzFCO1FBQ0UsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxhQUFhLENBQUMsTUFBc0IsSUFBRyxDQUFDOzs2R0FKN0IsZUFBZTs4R0FBZixlQUFlLGlCQUpYLGFBQWEsYUFDbEIsWUFBWSxhQUNaLGFBQWE7OEdBRVosZUFBZSxZQUhoQixZQUFZOzRGQUdYLGVBQWU7a0JBTDNCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUM3QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlLCBBcHBsaWNhdGlvblJlZiwgRG9Cb290c3RyYXAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkRGVmaW5pdGlvbiB9IGZyb20gJ0BmYWJyaWMtbXNmdC9mYWJyaWMtd2ViJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ2FyZENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbQ2FyZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZFByb3h5TW9kdWxlIGltcGxlbWVudHMgRG9Cb290c3RyYXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBDYXJkRGVmaW5pdGlvbi5kZWZpbmUoKTtcbiAgfVxuICBuZ0RvQm9vdHN0cmFwKGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHt9XG59XG4iXX0=