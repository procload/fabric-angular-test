import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class WizardPanelComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.hidden = true;
        this.state = "incomplete";
        this.active = false;
        this.panelchange = new EventEmitter();
        this.handlePanelchange = (event) => {
            this.zone.run(() => {
                this.panelchange.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.hidden) {
            this.renderer.setAttribute(nativeElement, 'hidden', '');
        }
        if (this.state) {
            this.renderer.setAttribute(nativeElement, 'state', this.state);
        }
        if (this.active) {
            this.renderer.setAttribute(nativeElement, 'active', '');
        }
        if (this.id) {
            this.renderer.setAttribute(nativeElement, 'id', this.id);
        }
        if (this.slot) {
            this.renderer.setAttribute(nativeElement, 'slot', this.slot);
        }
        if (this.ariaLabel) {
            this.renderer.setAttribute(nativeElement, 'aria-label', this.ariaLabel);
        }
        if (this.ariaDescribedby) {
            this.renderer.setAttribute(nativeElement, 'aria-describedby', this.ariaDescribedby);
        }
        if (this.ariaLabelledby) {
            this.renderer.setAttribute(nativeElement, 'aria-labelledby', this.ariaLabelledby);
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('panelchange', this.handlePanelchange);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('panelchange', this.handlePanelchange);
    }
}
WizardPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardPanelComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
WizardPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: WizardPanelComponent, selector: "fabric-wizard-panel", inputs: { hidden: "hidden", state: "state", active: "active", id: "id", slot: "slot", ariaLabel: "ariaLabel", ariaDescribedby: "ariaDescribedby", ariaLabelledby: "ariaLabelledby" }, outputs: { panelchange: "panelchange" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-wizard-panel',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { hidden: [{
                type: Input
            }], state: [{
                type: Input
            }], active: [{
                type: Input
            }], id: [{
                type: Input
            }], slot: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], ariaDescribedby: [{
                type: Input
            }], ariaLabelledby: [{
                type: Input
            }], panelchange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZhYnJpYy13cmFwcGVycy9zcmMvd2l6YXJkLXBhbmVsL3dpemFyZC1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTix1QkFBdUIsRUFNeEIsTUFBTSxlQUFlLENBQUM7O0FBT3ZCLE1BQU0sT0FBTyxvQkFBb0I7SUFXL0IsWUFBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQVUsTUFBYztRQUFuRSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUOUUsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixVQUFLLEdBQW9CLFlBQVksQ0FBQztRQUN0QyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBTXZCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQStCeEMsc0JBQWlCLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQWpDQSxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ08seUJBQXlCO1FBQy9CLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekQ7UUFDUCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoRTtRQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekQ7UUFDUCxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxRDtRQUNMLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlEO1FBQ0wsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekU7UUFDTCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNyRjtRQUNMLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ25GO0lBQ1AsQ0FBQztJQU1ELFFBQVE7UUFDTixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25GLENBQUM7O2tIQXpEVSxvQkFBb0I7c0dBQXBCLG9CQUFvQiwrU0FIckIsMkJBQTJCOzRGQUcxQixvQkFBb0I7a0JBTGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzhJQUdVLE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLEVBQUU7c0JBQVYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBSZW5kZXJlcjIsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaXphcmRTdGVwU3RhdGUgfSBmcm9tICdAZmFicmljLW1zZnQvZmFicmljLXdlYic7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWJyaWMtd2l6YXJkLXBhbmVsJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHpvbmU6IE5nWm9uZTtcbiAgQElucHV0KCkgaGlkZGVuOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc3RhdGU6IFdpemFyZFN0ZXBTdGF0ZSA9IFwiaW5jb21wbGV0ZVwiO1xuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgc2xvdDogc3RyaW5nO1xuICBASW5wdXQoKSBhcmlhTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgYXJpYURlc2NyaWJlZGJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBwYW5lbGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLnpvbmUgPSBuZ1pvbmU7XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVDb21wb25lbnRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuaGlkZGVuKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnaGlkZGVuJywgJycpO1xuICAgICAgICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdzdGF0ZScsIHRoaXMuc3RhdGUpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnYWN0aXZlJywgJycpO1xuICAgICAgICAgIH1cbiAgICBpZiAodGhpcy5pZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdpZCcsIHRoaXMuaWQpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMuc2xvdCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdzbG90JywgdGhpcy5zbG90KTtcbiAgICAgICAgfVxuICAgIGlmICh0aGlzLmFyaWFMYWJlbCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdhcmlhLWxhYmVsJywgdGhpcy5hcmlhTGFiZWwpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMuYXJpYURlc2NyaWJlZGJ5KSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2FyaWEtZGVzY3JpYmVkYnknLCB0aGlzLmFyaWFEZXNjcmliZWRieSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5hcmlhTGFiZWxsZWRieSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLmFyaWFMYWJlbGxlZGJ5KTtcbiAgICAgICAgfVxuICB9XG4gIHByaXZhdGUgaGFuZGxlUGFuZWxjaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5wYW5lbGNoYW5nZS5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgfSk7XG4gIH07XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50UHJvcGVydGllcygpO1xuICB9XG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50UHJvcGVydGllcygpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFuZWxjaGFuZ2UnLCB0aGlzLmhhbmRsZVBhbmVsY2hhbmdlKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFuZWxjaGFuZ2UnLCB0aGlzLmhhbmRsZVBhbmVsY2hhbmdlKTtcbiAgfVxufVxuIl19