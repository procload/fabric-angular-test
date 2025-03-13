import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProxyCmp } from '../utils/utils';
import * as i0 from "@angular/core";
/**
 * Angular wrapper for the AccordionMenu web component
 *
 * The AccordionMenu component provides an interactive accordion interface,
 * allowing for expandable and collapsible sections.
 *
 * @example
 * <fabric-accordion-menu expandmode="single" (change)="handleChange($event)">
 *   <fabric-accordion-menu-item>Item 1</fabric-accordion-menu-item>
 *   <fabric-accordion-menu-item>Item 2</fabric-accordion-menu-item>
 * </fabric-accordion-menu>
 */
let AccordionMenuComponent = class AccordionMenuComponent {
    /**
     * Creates an instance of AccordionMenuComponent.
     * @param el - Reference to the native element
     * @param z - NgZone service for running code inside or outside Angular zone
     */
    constructor(el, z) {
        this.el = el;
        this.z = z;
    }
};
AccordionMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
AccordionMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: AccordionMenuComponent, selector: "fabric-accordion-menu", ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
AccordionMenuComponent = __decorate([
    ProxyCmp({
        // Using the exact property name from the web component
        inputs: ['expandmode'],
        // Proxy the change event that's emitted when items expand/collapse
        outputs: ['change']
    })
], AccordionMenuComponent);
export { AccordionMenuComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-accordion-menu',
                    template: `
    <ng-content></ng-content>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZmFicmljLXdyYXBwZXJzL3NyYy9hY2NvcmRpb24tbWVudS9hY2NvcmRpb24tbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBR1QsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFMUM7Ozs7Ozs7Ozs7O0dBV0c7QUFjSSxJQUFNLHNCQUFzQixHQUE1QixNQUFNLHNCQUFzQjtJQUNqQzs7OztPQUlHO0lBQ0gsWUFBb0IsRUFBYyxFQUFVLENBQVM7UUFBakMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLE1BQUMsR0FBRCxDQUFDLENBQVE7SUFBRyxDQUFDOztvSEFOOUMsc0JBQXNCO3dHQUF0QixzQkFBc0IsNkRBTHZCOztHQUVUO0FBR1Usc0JBQXNCO0lBYmxDLFFBQVEsQ0FBQztRQUNSLHVEQUF1RDtRQUN2RCxNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdEIsbUVBQW1FO1FBQ25FLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztLQUNwQixDQUFDO0dBUVcsc0JBQXNCLENBT2xDO1NBUFksc0JBQXNCOzRGQUF0QixzQkFBc0I7a0JBUGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFOztHQUVUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgTmdab25lLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb3h5Q21wIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuXG4vKipcbiAqIEFuZ3VsYXIgd3JhcHBlciBmb3IgdGhlIEFjY29yZGlvbk1lbnUgd2ViIGNvbXBvbmVudFxuICpcbiAqIFRoZSBBY2NvcmRpb25NZW51IGNvbXBvbmVudCBwcm92aWRlcyBhbiBpbnRlcmFjdGl2ZSBhY2NvcmRpb24gaW50ZXJmYWNlLFxuICogYWxsb3dpbmcgZm9yIGV4cGFuZGFibGUgYW5kIGNvbGxhcHNpYmxlIHNlY3Rpb25zLlxuICpcbiAqIEBleGFtcGxlXG4gKiA8ZmFicmljLWFjY29yZGlvbi1tZW51IGV4cGFuZG1vZGU9XCJzaW5nbGVcIiAoY2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCI+XG4gKiAgIDxmYWJyaWMtYWNjb3JkaW9uLW1lbnUtaXRlbT5JdGVtIDE8L2ZhYnJpYy1hY2NvcmRpb24tbWVudS1pdGVtPlxuICogICA8ZmFicmljLWFjY29yZGlvbi1tZW51LWl0ZW0+SXRlbSAyPC9mYWJyaWMtYWNjb3JkaW9uLW1lbnUtaXRlbT5cbiAqIDwvZmFicmljLWFjY29yZGlvbi1tZW51PlxuICovXG5AUHJveHlDbXAoe1xuICAvLyBVc2luZyB0aGUgZXhhY3QgcHJvcGVydHkgbmFtZSBmcm9tIHRoZSB3ZWIgY29tcG9uZW50XG4gIGlucHV0czogWydleHBhbmRtb2RlJ10sXG4gIC8vIFByb3h5IHRoZSBjaGFuZ2UgZXZlbnQgdGhhdCdzIGVtaXR0ZWQgd2hlbiBpdGVtcyBleHBhbmQvY29sbGFwc2VcbiAgb3V0cHV0czogWydjaGFuZ2UnXVxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYnJpYy1hY2NvcmRpb24tbWVudScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25NZW51Q29tcG9uZW50IHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQWNjb3JkaW9uTWVudUNvbXBvbmVudC5cbiAgICogQHBhcmFtIGVsIC0gUmVmZXJlbmNlIHRvIHRoZSBuYXRpdmUgZWxlbWVudFxuICAgKiBAcGFyYW0geiAtIE5nWm9uZSBzZXJ2aWNlIGZvciBydW5uaW5nIGNvZGUgaW5zaWRlIG9yIG91dHNpZGUgQW5ndWxhciB6b25lXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHo6IE5nWm9uZSkge31cbn1cbiJdfQ==