import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionMenuItemComponent } from './accordion-menu-item.component';
import { AccordionMenuItemDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class AccordionMenuItemProxyModule {
    constructor() {
        // ✅ Only define the custom element if it hasn’t been registered yet
        if (!customElements.get('fabric-accordion-menu-item')) {
            AccordionMenuItemDefinition.define();
        }
    }
}
AccordionMenuItemProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuItemProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AccordionMenuItemProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuItemProxyModule, declarations: [AccordionMenuItemComponent], imports: [CommonModule], exports: [AccordionMenuItemComponent] });
AccordionMenuItemProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuItemProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuItemProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AccordionMenuItemComponent],
                    imports: [CommonModule],
                    exports: [AccordionMenuItemComponent]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLW1lbnUtaXRlbS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9mYWJyaWMtd3JhcHBlcnMvc3JjL2FjY29yZGlvbi1tZW51LWl0ZW0vYWNjb3JkaW9uLW1lbnUtaXRlbS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBT3RFLE1BQU0sT0FBTyw0QkFBNEI7SUFDdkM7UUFDRSxvRUFBb0U7UUFDcEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsRUFBRTtZQUNyRCwyQkFBMkIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN0QztJQUNILENBQUM7OzBIQU5VLDRCQUE0QjsySEFBNUIsNEJBQTRCLGlCQUp4QiwwQkFBMEIsYUFDL0IsWUFBWSxhQUNaLDBCQUEwQjsySEFFekIsNEJBQTRCLFlBSDdCLFlBQVk7NEZBR1gsNEJBQTRCO2tCQUx4QyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUMxQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWNjb3JkaW9uTWVudUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2FjY29yZGlvbi1tZW51LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEFjY29yZGlvbk1lbnVJdGVtRGVmaW5pdGlvbiB9IGZyb20gJ0BmYWJyaWMtbXNmdC9mYWJyaWMtd2ViJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQWNjb3JkaW9uTWVudUl0ZW1Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW0FjY29yZGlvbk1lbnVJdGVtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25NZW51SXRlbVByb3h5TW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g4pyFIE9ubHkgZGVmaW5lIHRoZSBjdXN0b20gZWxlbWVudCBpZiBpdCBoYXNu4oCZdCBiZWVuIHJlZ2lzdGVyZWQgeWV0XG4gICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQoJ2ZhYnJpYy1hY2NvcmRpb24tbWVudS1pdGVtJykpIHtcbiAgICAgIEFjY29yZGlvbk1lbnVJdGVtRGVmaW5pdGlvbi5kZWZpbmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==