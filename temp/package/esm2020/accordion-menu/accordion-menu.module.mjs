import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionMenuComponent } from './accordion-menu.component';
import { AccordionMenuDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class AccordionMenuProxyModule {
    constructor() {
        // ✅ Now defining the custom element only if needed
        if (!customElements.get('fabric-accordion-menu')) {
            AccordionMenuDefinition.define();
        }
    }
}
AccordionMenuProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AccordionMenuProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuProxyModule, declarations: [AccordionMenuComponent], imports: [CommonModule], exports: [AccordionMenuComponent] });
AccordionMenuProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AccordionMenuComponent],
                    imports: [CommonModule],
                    exports: [AccordionMenuComponent]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLW1lbnUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZmFicmljLXdyYXBwZXJzL3NyYy9hY2NvcmRpb24tbWVudS9hY2NvcmRpb24tbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBT2xFLE1BQU0sT0FBTyx3QkFBd0I7SUFDbkM7UUFDRSxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsRUFBRTtZQUNoRCx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7O3NIQU5VLHdCQUF3Qjt1SEFBeEIsd0JBQXdCLGlCQUpwQixzQkFBc0IsYUFDM0IsWUFBWSxhQUNaLHNCQUFzQjt1SEFFckIsd0JBQXdCLFlBSHpCLFlBQVk7NEZBR1gsd0JBQXdCO2tCQUxwQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO29CQUN0QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWNjb3JkaW9uTWVudUNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IEFjY29yZGlvbk1lbnVEZWZpbml0aW9uIH0gZnJvbSAnQGZhYnJpYy1tc2Z0L2ZhYnJpYy13ZWInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBY2NvcmRpb25NZW51Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtBY2NvcmRpb25NZW51Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25NZW51UHJveHlNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDinIUgTm93IGRlZmluaW5nIHRoZSBjdXN0b20gZWxlbWVudCBvbmx5IGlmIG5lZWRlZFxuICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdmYWJyaWMtYWNjb3JkaW9uLW1lbnUnKSkge1xuICAgICAgQWNjb3JkaW9uTWVudURlZmluaXRpb24uZGVmaW5lKCk7XG4gICAgfVxuICB9XG59XG4iXX0=