import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class TooltipComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.open = false;
        this.beak = false;
        this.hidePopover = new EventEmitter();
        this.showPopover = new EventEmitter();
        this.handleHidePopover = (event) => {
            this.zone.run(() => {
                this.hidePopover.emit(event.detail);
            });
        };
        this.handleShowPopover = (event) => {
            this.zone.run(() => {
                this.showPopover.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.position) {
            const positionValue = this.transformPosition(this.position);
            this.renderer.setAttribute(nativeElement, 'position', positionValue);
        }
        if (this.open) {
            this.renderer.setAttribute(nativeElement, 'open', '');
        }
        if (this.beak) {
            this.renderer.setAttribute(nativeElement, 'beak', '');
        }
        if (this.targetId) {
            this.renderer.setAttribute(nativeElement, 'target-id', this.targetId);
        }
        if (this.transitionDuration !== undefined) {
            this.renderer.setAttribute(nativeElement, 'transition-duration', String(this.transitionDuration));
        }
        if (this.transitionDelay !== undefined) {
            this.renderer.setAttribute(nativeElement, 'transition-delay', String(this.transitionDelay));
        }
    }
    transformPosition(position) {
        // Transform the enum value to a valid DOM attribute value
        // Example transformation logic (to be adjusted as necessary)
        return position.toLowerCase().replace('_', '-');
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('hidePopover', this.handleHidePopover);
        this.el.nativeElement.addEventListener('showPopover', this.handleShowPopover);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('hidePopover', this.handleHidePopover);
        this.el.nativeElement.removeEventListener('showPopover', this.handleShowPopover);
    }
}
TooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TooltipComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
TooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: TooltipComponent, selector: "fabric-tooltip", inputs: { position: "position", open: "open", beak: "beak", targetId: "targetId", transitionDuration: "transitionDuration", transitionDelay: "transitionDelay" }, outputs: { hidePopover: "hidePopover", showPopover: "showPopover" }, usesOnChanges: true, ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-tooltip',
                    template: `
    <ng-content></ng-content>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { position: [{
                type: Input
            }], open: [{
                type: Input
            }], beak: [{
                type: Input
            }], targetId: [{
                type: Input
            }], transitionDuration: [{
                type: Input
            }], transitionDelay: [{
                type: Input
            }], hidePopover: [{
                type: Output
            }], showPopover: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9mYWJyaWMtd3JhcHBlcnMvc3JjL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTix1QkFBdUIsRUFNeEIsTUFBTSxlQUFlLENBQUM7O0FBU3ZCLE1BQU0sT0FBTyxnQkFBZ0I7SUFZM0IsWUFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsTUFBYztRQUZkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFWZixTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFJckIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQTZDeEMsc0JBQWlCLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUNNLHNCQUFpQixHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFoREEsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNPLHlCQUF5QjtRQUMvQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN2RDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxTQUFTLEVBQUU7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQ3hCLGFBQWEsRUFDYixxQkFBcUIsRUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUNoQyxDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssU0FBUyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUN4QixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQzdCLENBQUM7U0FDSDtJQUNILENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxRQUFvQztRQUM1RCwwREFBMEQ7UUFDMUQsNkRBQTZEO1FBQzdELE9BQU8sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQVlELFFBQVE7UUFDTixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQ3BDLGFBQWEsRUFDYixJQUFJLENBQUMsaUJBQWlCLENBQ3ZCLENBQUM7UUFDRixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FDcEMsYUFBYSxFQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQ3ZDLGFBQWEsRUFDYixJQUFJLENBQUMsaUJBQWlCLENBQ3ZCLENBQUM7UUFDRixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FDdkMsYUFBYSxFQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQztJQUNKLENBQUM7OzhHQTNGVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQixrVEFMakI7O0dBRVQ7NEZBR1UsZ0JBQWdCO2tCQVA1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRTs7R0FFVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OElBS1UsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTTtnQkFDRyxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFJlbmRlcmVyMixcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2hvcnRoYW5kVmFsdWVzIH0gZnJvbSAnQGZhYnJpYy1tc2Z0L2ZhYnJpYy13ZWInO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFicmljLXRvb2x0aXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3lcbntcbiAgcHVibGljIHpvbmU6IE5nWm9uZTtcbiAgQElucHV0KCkgcG9zaXRpb246IFBvc2l0aW9uaW5nU2hvcnRoYW5kVmFsdWVzO1xuICBASW5wdXQoKSBvcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGJlYWs6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdGFyZ2V0SWQ6IHN0cmluZztcbiAgQElucHV0KCkgdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRyYW5zaXRpb25EZWxheTogbnVtYmVyO1xuICBAT3V0cHV0KCkgaGlkZVBvcG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNob3dQb3BvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy56b25lID0gbmdab25lO1xuICB9XG4gIHByaXZhdGUgdXBkYXRlQ29tcG9uZW50UHJvcGVydGllcygpIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLnBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBwb3NpdGlvblZhbHVlID0gdGhpcy50cmFuc2Zvcm1Qb3NpdGlvbih0aGlzLnBvc2l0aW9uKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdwb3NpdGlvbicsIHBvc2l0aW9uVmFsdWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnb3BlbicsICcnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYmVhaykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2JlYWsnLCAnJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnRhcmdldElkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAndGFyZ2V0LWlkJywgdGhpcy50YXJnZXRJZCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25EdXJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgbmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ3RyYW5zaXRpb24tZHVyYXRpb24nLFxuICAgICAgICBTdHJpbmcodGhpcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy50cmFuc2l0aW9uRGVsYXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIG5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICd0cmFuc2l0aW9uLWRlbGF5JyxcbiAgICAgICAgU3RyaW5nKHRoaXMudHJhbnNpdGlvbkRlbGF5KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uOiBQb3NpdGlvbmluZ1Nob3J0aGFuZFZhbHVlcyk6IHN0cmluZyB7XG4gICAgLy8gVHJhbnNmb3JtIHRoZSBlbnVtIHZhbHVlIHRvIGEgdmFsaWQgRE9NIGF0dHJpYnV0ZSB2YWx1ZVxuICAgIC8vIEV4YW1wbGUgdHJhbnNmb3JtYXRpb24gbG9naWMgKHRvIGJlIGFkanVzdGVkIGFzIG5lY2Vzc2FyeSlcbiAgICByZXR1cm4gcG9zaXRpb24udG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdfJywgJy0nKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSGlkZVBvcG92ZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlUG9wb3Zlci5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgfSk7XG4gIH07XG4gIHByaXZhdGUgaGFuZGxlU2hvd1BvcG92ZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5zaG93UG9wb3Zlci5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgfSk7XG4gIH07XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50UHJvcGVydGllcygpO1xuICB9XG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50UHJvcGVydGllcygpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdoaWRlUG9wb3ZlcicsXG4gICAgICB0aGlzLmhhbmRsZUhpZGVQb3BvdmVyXG4gICAgKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdzaG93UG9wb3ZlcicsXG4gICAgICB0aGlzLmhhbmRsZVNob3dQb3BvdmVyXG4gICAgKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICdoaWRlUG9wb3ZlcicsXG4gICAgICB0aGlzLmhhbmRsZUhpZGVQb3BvdmVyXG4gICAgKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICdzaG93UG9wb3ZlcicsXG4gICAgICB0aGlzLmhhbmRsZVNob3dQb3BvdmVyXG4gICAgKTtcbiAgfVxufVxuIl19