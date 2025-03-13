import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { ProxyCmp } from '../utils/utils';
import * as i0 from "@angular/core";
/**
 * Angular wrapper for the AccordionMenuItem web component
 *
 * The AccordionMenuItem component provides expandable and collapsible sections
 * within an accordion menu. It supports two-way binding for the expanded state.
 *
 * @example
 * <fabric-accordion-menu-item
 *   [expanded]="isExpanded"
 *   (expandedChange)="isExpanded = $event"
 *   [disabled]="isDisabled"
 *   [headingLevel]="2"
 *   [size]="'medium'"
 *   [block]="true"
 *   [markerPosition]="'start'">
 *   <div slot="heading">Accordion Heading</div>
 *   <div>Accordion Content</div>
 * </fabric-accordion-menu-item>
 */
let AccordionMenuItemComponent = class AccordionMenuItemComponent {
    /**
     * Creates an instance of AccordionMenuItemComponent.
     * @param el - Reference to the native element
     * @param z - NgZone service for running code inside or outside Angular zone
     */
    constructor(el, z) {
        this.el = el;
        this.z = z;
        /**
         * Controls whether the accordion item is expanded or collapsed.
         * This property supports two-way binding with [(expanded)].
         */
        this.expanded = false;
        /**
         * Event emitted when the expanded state changes.
         * Used for two-way binding with [(expanded)].
         */
        this.expandedChange = new EventEmitter();
        this.expandedChangeHandler = (event) => {
            const customEvent = event;
            this.z.run(() => {
                // Extract the value from the event
                this.expanded = customEvent.detail.expanded;
                this.expandedChange.emit(this.expanded);
            });
        };
    }
    /**
     * After view initialization, sets up event listeners and initial state.
     * Runs event listeners outside Angular's zone for better performance.
     */
    ngAfterViewInit() {
        // Set initial value
        if (this.el.nativeElement) {
            this.el.nativeElement.expanded = this.expanded;
        }
        this.z.runOutsideAngular(() => {
            this.el.nativeElement.addEventListener('expanded-change', this.expandedChangeHandler);
        });
    }
    /**
     * Cleans up event listeners when the component is destroyed.
     * Prevents memory leaks by removing event listeners.
     */
    ngOnDestroy() {
        if (this.el.nativeElement) {
            this.el.nativeElement.removeEventListener('expanded-change', this.expandedChangeHandler);
        }
    }
    /**
     * Handles changes to input properties.
     * Ensures the web component's expanded state stays in sync with Angular.
     * @param changes - SimpleChanges object containing changed properties
     */
    ngOnChanges(changes) {
        if (changes['expanded'] && this.el.nativeElement) {
            this.el.nativeElement.expanded = this.expanded;
        }
    }
};
AccordionMenuItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuItemComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
AccordionMenuItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: AccordionMenuItemComponent, selector: "fabric-accordion-menu-item", inputs: { expanded: "expanded" }, outputs: { expandedChange: "expandedChange" }, usesOnChanges: true, ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
AccordionMenuItemComponent = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'headingLevel', 'size', 'block', 'markerPosition']
        // Note: We don't proxy 'expanded-change' here because we handle it manually for two-way binding
    })
], AccordionMenuItemComponent);
export { AccordionMenuItemComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-accordion-menu-item',
                    template: `
    <ng-content></ng-content>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { expanded: [{
                type: Input
            }], expandedChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLW1lbnUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9mYWJyaWMtd3JhcHBlcnMvc3JjL2FjY29yZGlvbi1tZW51LWl0ZW0vYWNjb3JkaW9uLW1lbnUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sdUJBQXVCLEVBS3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFMUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQVlJLElBQU0sMEJBQTBCLEdBQWhDLE1BQU0sMEJBQTBCO0lBcUJyQzs7OztPQUlHO0lBQ0gsWUFBb0IsRUFBYyxFQUFVLENBQVM7UUFBakMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLE1BQUMsR0FBRCxDQUFDLENBQVE7UUF2QnJEOzs7V0FHRztRQUNNLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFbkM7OztXQUdHO1FBQ08sbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBY3JELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQzVDLE1BQU0sV0FBVyxHQUFHLEtBQW9CLENBQUM7WUFDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNkLG1DQUFtQztnQkFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixvQkFBb0I7UUFDcEIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUN6QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNoRDtRQUVELElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQzVCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUNwQyxpQkFBaUIsRUFDakIsSUFBSSxDQUFDLHFCQUFxQixDQUMzQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQ3ZDLGlCQUFpQixFQUNqQixJQUFJLENBQUMscUJBQXFCLENBQzNCLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQ2hELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7d0hBN0VVLDBCQUEwQjs0R0FBMUIsMEJBQTBCLHdLQUwzQjs7R0FFVDtBQUdVLDBCQUEwQjtJQVh0QyxRQUFRLENBQUM7UUFDUixNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLENBQUM7UUFDdkUsZ0dBQWdHO0tBQ2pHLENBQUM7R0FRVywwQkFBMEIsQ0E4RXRDO1NBOUVZLDBCQUEwQjs0RkFBMUIsMEJBQTBCO2tCQVB0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRTs7R0FFVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7c0hBUVUsUUFBUTtzQkFBaEIsS0FBSztnQkFNSSxjQUFjO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJveHlDbXAgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbi8qKlxuICogQW5ndWxhciB3cmFwcGVyIGZvciB0aGUgQWNjb3JkaW9uTWVudUl0ZW0gd2ViIGNvbXBvbmVudFxuICpcbiAqIFRoZSBBY2NvcmRpb25NZW51SXRlbSBjb21wb25lbnQgcHJvdmlkZXMgZXhwYW5kYWJsZSBhbmQgY29sbGFwc2libGUgc2VjdGlvbnNcbiAqIHdpdGhpbiBhbiBhY2NvcmRpb24gbWVudS4gSXQgc3VwcG9ydHMgdHdvLXdheSBiaW5kaW5nIGZvciB0aGUgZXhwYW5kZWQgc3RhdGUuXG4gKlxuICogQGV4YW1wbGVcbiAqIDxmYWJyaWMtYWNjb3JkaW9uLW1lbnUtaXRlbVxuICogICBbZXhwYW5kZWRdPVwiaXNFeHBhbmRlZFwiXG4gKiAgIChleHBhbmRlZENoYW5nZSk9XCJpc0V4cGFuZGVkID0gJGV2ZW50XCJcbiAqICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICogICBbaGVhZGluZ0xldmVsXT1cIjJcIlxuICogICBbc2l6ZV09XCInbWVkaXVtJ1wiXG4gKiAgIFtibG9ja109XCJ0cnVlXCJcbiAqICAgW21hcmtlclBvc2l0aW9uXT1cIidzdGFydCdcIj5cbiAqICAgPGRpdiBzbG90PVwiaGVhZGluZ1wiPkFjY29yZGlvbiBIZWFkaW5nPC9kaXY+XG4gKiAgIDxkaXY+QWNjb3JkaW9uIENvbnRlbnQ8L2Rpdj5cbiAqIDwvZmFicmljLWFjY29yZGlvbi1tZW51LWl0ZW0+XG4gKi9cbkBQcm94eUNtcCh7XG4gIGlucHV0czogWydkaXNhYmxlZCcsICdoZWFkaW5nTGV2ZWwnLCAnc2l6ZScsICdibG9jaycsICdtYXJrZXJQb3NpdGlvbiddXG4gIC8vIE5vdGU6IFdlIGRvbid0IHByb3h5ICdleHBhbmRlZC1jaGFuZ2UnIGhlcmUgYmVjYXVzZSB3ZSBoYW5kbGUgaXQgbWFudWFsbHkgZm9yIHR3by13YXkgYmluZGluZ1xufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYnJpYy1hY2NvcmRpb24tbWVudS1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbk1lbnVJdGVtQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXNcbntcbiAgLyoqXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgdGhlIGFjY29yZGlvbiBpdGVtIGlzIGV4cGFuZGVkIG9yIGNvbGxhcHNlZC5cbiAgICogVGhpcyBwcm9wZXJ0eSBzdXBwb3J0cyB0d28td2F5IGJpbmRpbmcgd2l0aCBbKGV4cGFuZGVkKV0uXG4gICAqL1xuICBASW5wdXQoKSBleHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGV4cGFuZGVkIHN0YXRlIGNoYW5nZXMuXG4gICAqIFVzZWQgZm9yIHR3by13YXkgYmluZGluZyB3aXRoIFsoZXhwYW5kZWQpXS5cbiAgICovXG4gIEBPdXRwdXQoKSBleHBhbmRlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICAvKipcbiAgICogSGFuZGxlciBmb3IgdGhlIGV4cGFuZGVkLWNoYW5nZSBldmVudCBmcm9tIHRoZSB3ZWIgY29tcG9uZW50LlxuICAgKiBTdG9yZWQgYXMgYSBwcm9wZXJ0eSBmb3IgcHJvcGVyIGNsZWFudXAgaW4gbmdPbkRlc3Ryb3kuXG4gICAqL1xuICBwcml2YXRlIGV4cGFuZGVkQ2hhbmdlSGFuZGxlcjogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBBY2NvcmRpb25NZW51SXRlbUNvbXBvbmVudC5cbiAgICogQHBhcmFtIGVsIC0gUmVmZXJlbmNlIHRvIHRoZSBuYXRpdmUgZWxlbWVudFxuICAgKiBAcGFyYW0geiAtIE5nWm9uZSBzZXJ2aWNlIGZvciBydW5uaW5nIGNvZGUgaW5zaWRlIG9yIG91dHNpZGUgQW5ndWxhciB6b25lXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHo6IE5nWm9uZSkge1xuICAgIHRoaXMuZXhwYW5kZWRDaGFuZ2VIYW5kbGVyID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgY29uc3QgY3VzdG9tRXZlbnQgPSBldmVudCBhcyBDdXN0b21FdmVudDtcbiAgICAgIHRoaXMuei5ydW4oKCkgPT4ge1xuICAgICAgICAvLyBFeHRyYWN0IHRoZSB2YWx1ZSBmcm9tIHRoZSBldmVudFxuICAgICAgICB0aGlzLmV4cGFuZGVkID0gY3VzdG9tRXZlbnQuZGV0YWlsLmV4cGFuZGVkO1xuICAgICAgICB0aGlzLmV4cGFuZGVkQ2hhbmdlLmVtaXQodGhpcy5leHBhbmRlZCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIHZpZXcgaW5pdGlhbGl6YXRpb24sIHNldHMgdXAgZXZlbnQgbGlzdGVuZXJzIGFuZCBpbml0aWFsIHN0YXRlLlxuICAgKiBSdW5zIGV2ZW50IGxpc3RlbmVycyBvdXRzaWRlIEFuZ3VsYXIncyB6b25lIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UuXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgLy8gU2V0IGluaXRpYWwgdmFsdWVcbiAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZXhwYW5kZWQgPSB0aGlzLmV4cGFuZGVkO1xuICAgIH1cblxuICAgIHRoaXMuei5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2V4cGFuZGVkLWNoYW5nZScsXG4gICAgICAgIHRoaXMuZXhwYW5kZWRDaGFuZ2VIYW5kbGVyXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFucyB1cCBldmVudCBsaXN0ZW5lcnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAgICogUHJldmVudHMgbWVtb3J5IGxlYWtzIGJ5IHJlbW92aW5nIGV2ZW50IGxpc3RlbmVycy5cbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAnZXhwYW5kZWQtY2hhbmdlJyxcbiAgICAgICAgdGhpcy5leHBhbmRlZENoYW5nZUhhbmRsZXJcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgY2hhbmdlcyB0byBpbnB1dCBwcm9wZXJ0aWVzLlxuICAgKiBFbnN1cmVzIHRoZSB3ZWIgY29tcG9uZW50J3MgZXhwYW5kZWQgc3RhdGUgc3RheXMgaW4gc3luYyB3aXRoIEFuZ3VsYXIuXG4gICAqIEBwYXJhbSBjaGFuZ2VzIC0gU2ltcGxlQ2hhbmdlcyBvYmplY3QgY29udGFpbmluZyBjaGFuZ2VkIHByb3BlcnRpZXNcbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1snZXhwYW5kZWQnXSAmJiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5leHBhbmRlZCA9IHRoaXMuZXhwYW5kZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=