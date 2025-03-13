import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class WizardStepComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.active = false;
        this.disabled = false;
        this.state = "incomplete";
        this.stepchange = new EventEmitter();
        this.handleStepchange = (event) => {
            this.zone.run(() => {
                this.stepchange.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.ordered) {
            this.renderer.setAttribute(nativeElement, 'ordered', '');
        }
        if (this.hideConnector) {
            this.renderer.setAttribute(nativeElement, 'hide-connector', '');
        }
        if (this.active) {
            this.renderer.setAttribute(nativeElement, 'active', '');
        }
        if (this.disabled) {
            this.renderer.setAttribute(nativeElement, 'disabled', '');
        }
        if (this.ariaDescribedby) {
            this.renderer.setAttribute(nativeElement, 'aria-describedby', this.ariaDescribedby);
        }
        if (this.ariaLabelledby) {
            this.renderer.setAttribute(nativeElement, 'aria-labelledby', this.ariaLabelledby);
        }
        if (this.state) {
            this.renderer.setAttribute(nativeElement, 'state', this.state);
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('stepchange', this.handleStepchange);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('stepchange', this.handleStepchange);
    }
}
WizardStepComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardStepComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
WizardStepComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: WizardStepComponent, selector: "fabric-wizard-step", inputs: { ordered: "ordered", hideConnector: "hideConnector", active: "active", disabled: "disabled", ariaDescribedby: "ariaDescribedby", ariaLabelledby: "ariaLabelledby", state: "state" }, outputs: { stepchange: "stepchange" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardStepComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-wizard-step',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { ordered: [{
                type: Input
            }], hideConnector: [{
                type: Input
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], ariaDescribedby: [{
                type: Input
            }], ariaLabelledby: [{
                type: Input
            }], state: [{
                type: Input
            }], stepchange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZmFicmljLXdyYXBwZXJzL3NyYy93aXphcmQtc3RlcC93aXphcmQtc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTix1QkFBdUIsRUFNeEIsTUFBTSxlQUFlLENBQUM7O0FBT3ZCLE1BQU0sT0FBTyxtQkFBbUI7SUFVOUIsWUFBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQVUsTUFBYztRQUFuRSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOOUUsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRzFCLFVBQUssR0FBb0IsWUFBWSxDQUFDO1FBQ3JDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBNEJ2QyxxQkFBZ0IsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBOUJBLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDTyx5QkFBeUI7UUFDL0IsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMxRDtRQUNQLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDakU7UUFDUCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3pEO1FBQ1AsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMzRDtRQUNQLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3JGO1FBQ0wsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDbkY7UUFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoRTtJQUNQLENBQUM7SUFNRCxRQUFRO1FBQ04sSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsZUFBZTtRQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNqRixDQUFDOztpSEFyRFUsbUJBQW1CO3FHQUFuQixtQkFBbUIsb1RBSHBCLDJCQUEyQjs0RkFHMUIsbUJBQW1CO2tCQUwvQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs4SUFHVSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNJLFVBQVU7c0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgUmVuZGVyZXIyLFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2l6YXJkU3RlcFN0YXRlIH0gZnJvbSAnQGZhYnJpYy1tc2Z0L2ZhYnJpYy13ZWInO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmFicmljLXdpemFyZC1zdGVwJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgem9uZTogTmdab25lO1xuICBASW5wdXQoKSBvcmRlcmVkOiBib29sZWFuO1xuICBASW5wdXQoKSBoaWRlQ29ubmVjdG9yOiBib29sZWFuO1xuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYXJpYURlc2NyaWJlZGJ5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIHN0YXRlOiBXaXphcmRTdGVwU3RhdGUgPSBcImluY29tcGxldGVcIjtcbiAgQE91dHB1dCgpIHN0ZXBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy56b25lID0gbmdab25lO1xuICB9XG4gIHByaXZhdGUgdXBkYXRlQ29tcG9uZW50UHJvcGVydGllcygpIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLm9yZGVyZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdvcmRlcmVkJywgJycpO1xuICAgICAgICAgIH1cbiAgICBpZiAodGhpcy5oaWRlQ29ubmVjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnaGlkZS1jb25uZWN0b3InLCAnJyk7XG4gICAgICAgICAgfVxuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScsICcnKTtcbiAgICAgICAgICB9XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgICB9XG4gICAgaWYgKHRoaXMuYXJpYURlc2NyaWJlZGJ5KSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2FyaWEtZGVzY3JpYmVkYnknLCB0aGlzLmFyaWFEZXNjcmliZWRieSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5hcmlhTGFiZWxsZWRieSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLmFyaWFMYWJlbGxlZGJ5KTtcbiAgICAgICAgfVxuICAgIGlmICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ3N0YXRlJywgdGhpcy5zdGF0ZSk7XG4gICAgICAgIH1cbiAgfVxuICBwcml2YXRlIGhhbmRsZVN0ZXBjaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5zdGVwY2hhbmdlLmVtaXQoZXZlbnQuZGV0YWlsKTtcbiAgICB9KTtcbiAgfTtcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVDb21wb25lbnRQcm9wZXJ0aWVzKCk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVDb21wb25lbnRQcm9wZXJ0aWVzKCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdGVwY2hhbmdlJywgdGhpcy5oYW5kbGVTdGVwY2hhbmdlKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3RlcGNoYW5nZScsIHRoaXMuaGFuZGxlU3RlcGNoYW5nZSk7XG4gIH1cbn1cbiJdfQ==