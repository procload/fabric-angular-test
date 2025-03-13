import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { ProxyCmp } from '../utils/utils';
import * as i0 from "@angular/core";
/**
 * Angular wrapper for the MenuItem web component
 *
 * The MenuItem component represents an item in a menu with various states and interactions.
 * It supports checked states, disabled states, and different roles.
 *
 * @example
 * <fabric-menu-item
 *   [role]="'menuitemcheckbox'"
 *   [checked]="isChecked"
 *   (change)="handleChange($event)">
 *   Menu Item Text
 * </fabric-menu-item>
 */
let MenuItemComponent = class MenuItemComponent {
    /**
     * Creates an instance of MenuItemComponent.
     * @param el - Reference to the native element
     * @param z - NgZone service for running code inside or outside Angular zone
     */
    constructor(el, z) {
        this.el = el;
        this.z = z;
        /**
         * The checked state of the menu item.
         * This property supports two-way binding with [(checked)].
         */
        this.checked = false;
        /**
         * Event emitted when the checked state changes.
         * Used for two-way binding with [(checked)].
         */
        this.checkedChange = new EventEmitter();
        /**
         * Event emitted when the menu item changes.
         */
        this.change = new EventEmitter();
        this.changeHandler = (event) => {
            const customEvent = event;
            this.z.run(() => {
                // Update the checked state if the role is checkable
                const nativeElement = this.el.nativeElement;
                const role = nativeElement.role;
                if (role === 'menuitemcheckbox' || role === 'menuitemradio') {
                    this.checked = nativeElement.checked;
                    this.checkedChange.emit(this.checked);
                }
                // Emit the change event
                this.change.emit(customEvent.detail);
            });
        };
    }
    /**
     * After view initialization, sets up event listeners and initial state.
     * Runs event listeners outside Angular's zone for better performance.
     */
    ngAfterViewInit() {
        // Set initial checked value
        if (this.el.nativeElement) {
            this.el.nativeElement.checked = this.checked;
        }
        this.z.runOutsideAngular(() => {
            this.el.nativeElement.addEventListener('change', this.changeHandler);
        });
    }
    /**
     * Cleans up event listeners when the component is destroyed.
     * Prevents memory leaks by removing event listeners.
     */
    ngOnDestroy() {
        if (this.el.nativeElement) {
            this.el.nativeElement.removeEventListener('change', this.changeHandler);
        }
    }
    /**
     * Handles changes to input properties.
     * Ensures the web component's checked state stays in sync with Angular.
     * @param changes - SimpleChanges object containing changed properties
     */
    ngOnChanges(changes) {
        if (changes['checked'] && this.el.nativeElement) {
            this.el.nativeElement.checked = this.checked;
        }
    }
    /**
     * Invokes the action associated with the menu item.
     * This is a proxy to the web component's invoke() method.
     */
    invoke() {
        this.z.runOutsideAngular(() => {
            this.el.nativeElement.invoke();
        });
    }
};
MenuItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuItemComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
MenuItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: MenuItemComponent, selector: "fabric-menu-item", inputs: { checked: "checked" }, outputs: { checkedChange: "checkedChange", change: "change" }, usesOnChanges: true, ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
MenuItemComponent = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'role', 'hidden']
        // Note: We don't proxy 'checked' here because we handle it manually for two-way binding
    })
], MenuItemComponent);
export { MenuItemComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-menu-item',
                    template: `
    <ng-content></ng-content>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { checked: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }], change: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZhYnJpYy13cmFwcGVycy9zcmMvbWVudS1pdGVtL21lbnUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sdUJBQXVCLEVBS3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFMUM7Ozs7Ozs7Ozs7Ozs7R0FhRztBQVlJLElBQU0saUJBQWlCLEdBQXZCLE1BQU0saUJBQWlCO0lBd0I1Qjs7OztPQUlHO0lBQ0gsWUFBb0IsRUFBYyxFQUFVLENBQVM7UUFBakMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLE1BQUMsR0FBRCxDQUFDLENBQVE7UUE1QnJEOzs7V0FHRztRQUNNLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFbEM7OztXQUdHO1FBQ08sa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRXREOztXQUVHO1FBQ08sV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFjekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ3BDLE1BQU0sV0FBVyxHQUFHLEtBQW9CLENBQUM7WUFDekMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNkLG9EQUFvRDtnQkFDcEQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzVDLE1BQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2hDLElBQUksSUFBSSxLQUFLLGtCQUFrQixJQUFJLElBQUksS0FBSyxlQUFlLEVBQUU7b0JBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztvQkFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUN2QztnQkFFRCx3QkFBd0I7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsNEJBQTRCO1FBQzVCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDOUM7UUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekU7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUMvQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM5QztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNO1FBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzsrR0EzRlUsaUJBQWlCO21HQUFqQixpQkFBaUIsNEtBTGxCOztHQUVUO0FBR1UsaUJBQWlCO0lBWDdCLFFBQVEsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDO1FBQ3RDLHdGQUF3RjtLQUN6RixDQUFDO0dBUVcsaUJBQWlCLENBNEY3QjtTQTVGWSxpQkFBaUI7NEZBQWpCLGlCQUFpQjtrQkFQN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEO3NIQU1VLE9BQU87c0JBQWYsS0FBSztnQkFNSSxhQUFhO3NCQUF0QixNQUFNO2dCQUtHLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lbnVJdGVtUm9sZSB9IGZyb20gJ0BmYWJyaWMtbXNmdC9mYWJyaWMtd2ViJztcbmltcG9ydCB7IFByb3h5Q21wIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuXG4vKipcbiAqIEFuZ3VsYXIgd3JhcHBlciBmb3IgdGhlIE1lbnVJdGVtIHdlYiBjb21wb25lbnRcbiAqXG4gKiBUaGUgTWVudUl0ZW0gY29tcG9uZW50IHJlcHJlc2VudHMgYW4gaXRlbSBpbiBhIG1lbnUgd2l0aCB2YXJpb3VzIHN0YXRlcyBhbmQgaW50ZXJhY3Rpb25zLlxuICogSXQgc3VwcG9ydHMgY2hlY2tlZCBzdGF0ZXMsIGRpc2FibGVkIHN0YXRlcywgYW5kIGRpZmZlcmVudCByb2xlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogPGZhYnJpYy1tZW51LWl0ZW1cbiAqICAgW3JvbGVdPVwiJ21lbnVpdGVtY2hlY2tib3gnXCJcbiAqICAgW2NoZWNrZWRdPVwiaXNDaGVja2VkXCJcbiAqICAgKGNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiPlxuICogICBNZW51IEl0ZW0gVGV4dFxuICogPC9mYWJyaWMtbWVudS1pdGVtPlxuICovXG5AUHJveHlDbXAoe1xuICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAncm9sZScsICdoaWRkZW4nXVxuICAvLyBOb3RlOiBXZSBkb24ndCBwcm94eSAnY2hlY2tlZCcgaGVyZSBiZWNhdXNlIHdlIGhhbmRsZSBpdCBtYW51YWxseSBmb3IgdHdvLXdheSBiaW5kaW5nXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFicmljLW1lbnUtaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNZW51SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBjaGVja2VkIHN0YXRlIG9mIHRoZSBtZW51IGl0ZW0uXG4gICAqIFRoaXMgcHJvcGVydHkgc3VwcG9ydHMgdHdvLXdheSBiaW5kaW5nIHdpdGggWyhjaGVja2VkKV0uXG4gICAqL1xuICBASW5wdXQoKSBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgY2hlY2tlZCBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBVc2VkIGZvciB0d28td2F5IGJpbmRpbmcgd2l0aCBbKGNoZWNrZWQpXS5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIG1lbnUgaXRlbSBjaGFuZ2VzLlxuICAgKi9cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciB0aGUgY2hhbmdlIGV2ZW50IGZyb20gdGhlIHdlYiBjb21wb25lbnQuXG4gICAqIFN0b3JlZCBhcyBhIHByb3BlcnR5IGZvciBwcm9wZXIgY2xlYW51cCBpbiBuZ09uRGVzdHJveS5cbiAgICovXG4gIHByaXZhdGUgY2hhbmdlSGFuZGxlcjogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBNZW51SXRlbUNvbXBvbmVudC5cbiAgICogQHBhcmFtIGVsIC0gUmVmZXJlbmNlIHRvIHRoZSBuYXRpdmUgZWxlbWVudFxuICAgKiBAcGFyYW0geiAtIE5nWm9uZSBzZXJ2aWNlIGZvciBydW5uaW5nIGNvZGUgaW5zaWRlIG9yIG91dHNpZGUgQW5ndWxhciB6b25lXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHo6IE5nWm9uZSkge1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlciA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gZXZlbnQgYXMgQ3VzdG9tRXZlbnQ7XG4gICAgICB0aGlzLnoucnVuKCgpID0+IHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBjaGVja2VkIHN0YXRlIGlmIHRoZSByb2xlIGlzIGNoZWNrYWJsZVxuICAgICAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb25zdCByb2xlID0gbmF0aXZlRWxlbWVudC5yb2xlO1xuICAgICAgICBpZiAocm9sZSA9PT0gJ21lbnVpdGVtY2hlY2tib3gnIHx8IHJvbGUgPT09ICdtZW51aXRlbXJhZGlvJykge1xuICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IG5hdGl2ZUVsZW1lbnQuY2hlY2tlZDtcbiAgICAgICAgICB0aGlzLmNoZWNrZWRDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW1pdCB0aGUgY2hhbmdlIGV2ZW50XG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoY3VzdG9tRXZlbnQuZGV0YWlsKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgdmlldyBpbml0aWFsaXphdGlvbiwgc2V0cyB1cCBldmVudCBsaXN0ZW5lcnMgYW5kIGluaXRpYWwgc3RhdGUuXG4gICAqIFJ1bnMgZXZlbnQgbGlzdGVuZXJzIG91dHNpZGUgQW5ndWxhcidzIHpvbmUgZm9yIGJldHRlciBwZXJmb3JtYW5jZS5cbiAgICovXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBTZXQgaW5pdGlhbCBjaGVja2VkIHZhbHVlXG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgdGhpcy56LnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUhhbmRsZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFucyB1cCBldmVudCBsaXN0ZW5lcnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAgICogUHJldmVudHMgbWVtb3J5IGxlYWtzIGJ5IHJlbW92aW5nIGV2ZW50IGxpc3RlbmVycy5cbiAgICovXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGNoYW5nZXMgdG8gaW5wdXQgcHJvcGVydGllcy5cbiAgICogRW5zdXJlcyB0aGUgd2ViIGNvbXBvbmVudCdzIGNoZWNrZWQgc3RhdGUgc3RheXMgaW4gc3luYyB3aXRoIEFuZ3VsYXIuXG4gICAqIEBwYXJhbSBjaGFuZ2VzIC0gU2ltcGxlQ2hhbmdlcyBvYmplY3QgY29udGFpbmluZyBjaGFuZ2VkIHByb3BlcnRpZXNcbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1snY2hlY2tlZCddICYmIHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgdGhlIGFjdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIG1lbnUgaXRlbS5cbiAgICogVGhpcyBpcyBhIHByb3h5IHRvIHRoZSB3ZWIgY29tcG9uZW50J3MgaW52b2tlKCkgbWV0aG9kLlxuICAgKi9cbiAgcHVibGljIGludm9rZSgpOiB2b2lkIHtcbiAgICB0aGlzLnoucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50Lmludm9rZSgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=