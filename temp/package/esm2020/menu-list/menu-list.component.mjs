import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Angular wrapper for the MenuList web component
 *
 * The MenuList component manages a list of menu items with various interactions,
 * including keyboard navigation and nested menu support.
 *
 * @example
 * <fabric-menu-list (change)="handleChange($event)" (keydown)="handleKeyDown($event)">
 *   <fabric-menu-item>Item 1</fabric-menu-item>
 *   <fabric-menu-item>Item 2</fabric-menu-item>
 *   <fabric-menu-item role="menuitemcheckbox">Checkbox Item</fabric-menu-item>
 * </fabric-menu-list>
 */
export class MenuListComponent {
    /**
     * Creates an instance of MenuListComponent.
     * @param el - Reference to the native element
     * @param z - NgZone service for running code inside or outside Angular zone
     */
    constructor(el, z) {
        this.el = el;
        this.z = z;
        /**
         * Event emitted when a menu item changes.
         */
        this.change = new EventEmitter();
        /**
         * Event emitted when a key is pressed down on the menu.
         */
        this.keydown = new EventEmitter();
        /**
         * Event emitted when an accordion menu item is expanded or collapsed.
         */
        this.expandedChange = new EventEmitter();
        this.changeHandler = (event) => {
            const customEvent = event;
            this.z.run(() => {
                this.change.emit(customEvent.detail);
            });
        };
        this.keydownHandler = (event) => {
            const keyboardEvent = event;
            this.z.run(() => {
                this.keydown.emit(keyboardEvent);
            });
        };
        this.expandedChangeHandler = (event) => {
            const customEvent = event;
            this.z.run(() => {
                this.expandedChange.emit(customEvent.detail);
            });
        };
    }
    /**
     * After view initialization, sets up event listeners.
     * Runs event listeners outside Angular's zone for better performance.
     */
    ngAfterViewInit() {
        this.z.runOutsideAngular(() => {
            this.el.nativeElement.addEventListener('change', this.changeHandler);
            this.el.nativeElement.addEventListener('keydown', this.keydownHandler);
            this.el.nativeElement.addEventListener('expanded-change', this.expandedChangeHandler);
        });
    }
    /**
     * Cleans up event listeners when the component is destroyed.
     * Prevents memory leaks by removing event listeners.
     */
    ngOnDestroy() {
        if (this.el.nativeElement) {
            this.el.nativeElement.removeEventListener('change', this.changeHandler);
            this.el.nativeElement.removeEventListener('keydown', this.keydownHandler);
            this.el.nativeElement.removeEventListener('expanded-change', this.expandedChangeHandler);
        }
    }
    /**
     * Sets focus to the first menu item.
     * This is a proxy to the web component's focus() method.
     */
    focus() {
        this.z.runOutsideAngular(() => {
            this.el.nativeElement.focus();
        });
    }
    /**
     * Clears the selections of radio and checkbox menu items.
     * This is a proxy to the web component's clearSelections() method.
     */
    clearSelections() {
        this.z.runOutsideAngular(() => {
            this.el.nativeElement.clearSelections();
        });
    }
}
MenuListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuListComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
MenuListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: MenuListComponent, selector: "fabric-menu-list", outputs: { change: "change", keydown: "keydown", expandedChange: "expandedChange" }, ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-menu-list',
                    template: `
    <ng-content></ng-content>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { change: [{
                type: Output
            }], keydown: [{
                type: Output
            }], expandedChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZhYnJpYy13cmFwcGVycy9zcmMvbWVudS1saXN0L21lbnUtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBRVosTUFBTSxFQUNOLHVCQUF1QixFQUd4QixNQUFNLGVBQWUsQ0FBQzs7QUFHdkI7Ozs7Ozs7Ozs7OztHQVlHO0FBUUgsTUFBTSxPQUFPLGlCQUFpQjtJQStCNUI7Ozs7T0FJRztJQUNILFlBQW9CLEVBQWMsRUFBVSxDQUFTO1FBQWpDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBbkNyRDs7V0FFRztRQUNPLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTNDOztXQUVHO1FBQ08sWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFNUM7O1dBRUc7UUFDTyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUF1QmpELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUNwQyxNQUFNLFdBQVcsR0FBRyxLQUFvQixDQUFDO1lBQ3pDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDckMsTUFBTSxhQUFhLEdBQUcsS0FBc0IsQ0FBQztZQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUM1QyxNQUFNLFdBQVcsR0FBRyxLQUFvQixDQUFDO1lBQ3pDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZTtRQUNiLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQzVCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FDcEMsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQyxxQkFBcUIsQ0FDM0IsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FDdkMsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQyxxQkFBcUIsQ0FDM0IsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUs7UUFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxlQUFlO1FBQ3BCLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQzVCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7K0dBM0dVLGlCQUFpQjttR0FBakIsaUJBQWlCLDZJQUxsQjs7R0FFVDs0RkFHVSxpQkFBaUI7a0JBUDdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFOztHQUVUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDtzSEFLVyxNQUFNO3NCQUFmLE1BQU07Z0JBS0csT0FBTztzQkFBaEIsTUFBTTtnQkFLRyxjQUFjO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE5nWm9uZSxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJveHlDbXAgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbi8qKlxuICogQW5ndWxhciB3cmFwcGVyIGZvciB0aGUgTWVudUxpc3Qgd2ViIGNvbXBvbmVudFxuICpcbiAqIFRoZSBNZW51TGlzdCBjb21wb25lbnQgbWFuYWdlcyBhIGxpc3Qgb2YgbWVudSBpdGVtcyB3aXRoIHZhcmlvdXMgaW50ZXJhY3Rpb25zLFxuICogaW5jbHVkaW5nIGtleWJvYXJkIG5hdmlnYXRpb24gYW5kIG5lc3RlZCBtZW51IHN1cHBvcnQuXG4gKlxuICogQGV4YW1wbGVcbiAqIDxmYWJyaWMtbWVudS1saXN0IChjaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIiAoa2V5ZG93bik9XCJoYW5kbGVLZXlEb3duKCRldmVudClcIj5cbiAqICAgPGZhYnJpYy1tZW51LWl0ZW0+SXRlbSAxPC9mYWJyaWMtbWVudS1pdGVtPlxuICogICA8ZmFicmljLW1lbnUtaXRlbT5JdGVtIDI8L2ZhYnJpYy1tZW51LWl0ZW0+XG4gKiAgIDxmYWJyaWMtbWVudS1pdGVtIHJvbGU9XCJtZW51aXRlbWNoZWNrYm94XCI+Q2hlY2tib3ggSXRlbTwvZmFicmljLW1lbnUtaXRlbT5cbiAqIDwvZmFicmljLW1lbnUtbGlzdD5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFicmljLW1lbnUtbGlzdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNZW51TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBFdmVudCBlbWl0dGVkIHdoZW4gYSBtZW51IGl0ZW0gY2hhbmdlcy5cbiAgICovXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogRXZlbnQgZW1pdHRlZCB3aGVuIGEga2V5IGlzIHByZXNzZWQgZG93biBvbiB0aGUgbWVudS5cbiAgICovXG4gIEBPdXRwdXQoKSBrZXlkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZWQgd2hlbiBhbiBhY2NvcmRpb24gbWVudSBpdGVtIGlzIGV4cGFuZGVkIG9yIGNvbGxhcHNlZC5cbiAgICovXG4gIEBPdXRwdXQoKSBleHBhbmRlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciB0aGUgY2hhbmdlIGV2ZW50IGZyb20gdGhlIHdlYiBjb21wb25lbnQuXG4gICAqL1xuICBwcml2YXRlIGNoYW5nZUhhbmRsZXI6IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIHRoZSBrZXlkb3duIGV2ZW50IGZyb20gdGhlIHdlYiBjb21wb25lbnQuXG4gICAqL1xuICBwcml2YXRlIGtleWRvd25IYW5kbGVyOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciB0aGUgZXhwYW5kZWQtY2hhbmdlIGV2ZW50IGZyb20gdGhlIHdlYiBjb21wb25lbnQuXG4gICAqL1xuICBwcml2YXRlIGV4cGFuZGVkQ2hhbmdlSGFuZGxlcjogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBNZW51TGlzdENvbXBvbmVudC5cbiAgICogQHBhcmFtIGVsIC0gUmVmZXJlbmNlIHRvIHRoZSBuYXRpdmUgZWxlbWVudFxuICAgKiBAcGFyYW0geiAtIE5nWm9uZSBzZXJ2aWNlIGZvciBydW5uaW5nIGNvZGUgaW5zaWRlIG9yIG91dHNpZGUgQW5ndWxhciB6b25lXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHo6IE5nWm9uZSkge1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlciA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gZXZlbnQgYXMgQ3VzdG9tRXZlbnQ7XG4gICAgICB0aGlzLnoucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChjdXN0b21FdmVudC5kZXRhaWwpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMua2V5ZG93bkhhbmRsZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBrZXlib2FyZEV2ZW50ID0gZXZlbnQgYXMgS2V5Ym9hcmRFdmVudDtcbiAgICAgIHRoaXMuei5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmtleWRvd24uZW1pdChrZXlib2FyZEV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLmV4cGFuZGVkQ2hhbmdlSGFuZGxlciA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gZXZlbnQgYXMgQ3VzdG9tRXZlbnQ7XG4gICAgICB0aGlzLnoucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5leHBhbmRlZENoYW5nZS5lbWl0KGN1c3RvbUV2ZW50LmRldGFpbCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIHZpZXcgaW5pdGlhbGl6YXRpb24sIHNldHMgdXAgZXZlbnQgbGlzdGVuZXJzLlxuICAgKiBSdW5zIGV2ZW50IGxpc3RlbmVycyBvdXRzaWRlIEFuZ3VsYXIncyB6b25lIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UuXG4gICAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy56LnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUhhbmRsZXIpO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleWRvd25IYW5kbGVyKTtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnZXhwYW5kZWQtY2hhbmdlJyxcbiAgICAgICAgdGhpcy5leHBhbmRlZENoYW5nZUhhbmRsZXJcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW5zIHVwIGV2ZW50IGxpc3RlbmVycyB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICAgKiBQcmV2ZW50cyBtZW1vcnkgbGVha3MgYnkgcmVtb3ZpbmcgZXZlbnQgbGlzdGVuZXJzLlxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlSGFuZGxlcik7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5ZG93bkhhbmRsZXIpO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdleHBhbmRlZC1jaGFuZ2UnLFxuICAgICAgICB0aGlzLmV4cGFuZGVkQ2hhbmdlSGFuZGxlclxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBmb2N1cyB0byB0aGUgZmlyc3QgbWVudSBpdGVtLlxuICAgKiBUaGlzIGlzIGEgcHJveHkgdG8gdGhlIHdlYiBjb21wb25lbnQncyBmb2N1cygpIG1ldGhvZC5cbiAgICovXG4gIHB1YmxpYyBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLnoucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBzZWxlY3Rpb25zIG9mIHJhZGlvIGFuZCBjaGVja2JveCBtZW51IGl0ZW1zLlxuICAgKiBUaGlzIGlzIGEgcHJveHkgdG8gdGhlIHdlYiBjb21wb25lbnQncyBjbGVhclNlbGVjdGlvbnMoKSBtZXRob2QuXG4gICAqL1xuICBwdWJsaWMgY2xlYXJTZWxlY3Rpb25zKCk6IHZvaWQge1xuICAgIHRoaXMuei5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xlYXJTZWxlY3Rpb25zKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==