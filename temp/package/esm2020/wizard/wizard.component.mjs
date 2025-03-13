import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class WizardComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.ordered = false;
        this.disableOnComplete = false;
        this.currentIndex = 0;
        this.wizardchange = new EventEmitter();
        this.wizardcomplete = new EventEmitter();
        this.handleWizardchange = (event) => {
            this.zone.run(() => {
                this.wizardchange.emit(event.detail);
            });
        };
        this.handleWizardcomplete = (event) => {
            this.zone.run(() => {
                this.wizardcomplete.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.ordered) {
            this.renderer.setAttribute(nativeElement, 'ordered', '');
        }
        if (this.disableOnComplete) {
            this.renderer.setAttribute(nativeElement, 'disable-on-complete', '');
        }
        if (this.currentIndex !== undefined) {
            this.renderer.setAttribute(nativeElement, 'current-index', String(this.currentIndex));
        }
        if (this.ariaLabelledby) {
            this.renderer.setAttribute(nativeElement, 'aria-labelledby', this.ariaLabelledby);
        }
        if (this.ariaDescribedby) {
            this.renderer.setAttribute(nativeElement, 'aria-describedby', this.ariaDescribedby);
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('wizardchange', this.handleWizardchange);
        this.el.nativeElement.addEventListener('wizardcomplete', this.handleWizardcomplete);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('wizardchange', this.handleWizardchange);
        this.el.nativeElement.removeEventListener('wizardcomplete', this.handleWizardcomplete);
    }
}
WizardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
WizardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: WizardComponent, selector: "fabric-wizard", inputs: { ordered: "ordered", disableOnComplete: "disableOnComplete", currentIndex: "currentIndex", ariaLabelledby: "ariaLabelledby", ariaDescribedby: "ariaDescribedby" }, outputs: { wizardchange: "wizardchange", wizardcomplete: "wizardcomplete" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-wizard',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { ordered: [{
                type: Input
            }], disableOnComplete: [{
                type: Input
            }], currentIndex: [{
                type: Input
            }], ariaLabelledby: [{
                type: Input
            }], ariaDescribedby: [{
                type: Input
            }], wizardchange: [{
                type: Output
            }], wizardcomplete: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZhYnJpYy13cmFwcGVycy9zcmMvd2l6YXJkL3dpemFyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTix1QkFBdUIsRUFNeEIsTUFBTSxlQUFlLENBQUM7O0FBTXZCLE1BQU0sT0FBTyxlQUFlO0lBUzFCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQixFQUFVLE1BQWM7UUFBbkUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUDlFLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBR3hCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFzQjNDLHVCQUFrQixHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDTSx5QkFBb0IsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBN0JBLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDTyx5QkFBeUI7UUFDL0IsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMxRDtRQUNQLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN0RTtRQUNQLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7U0FDdkY7UUFDUCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNuRjtRQUNMLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3JGO0lBQ1AsQ0FBQztJQVdELFFBQVE7UUFDTixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7OzZHQXJEVSxlQUFlO2lHQUFmLGVBQWUsbVVBSGhCLDJCQUEyQjs0RkFHMUIsZUFBZTtrQkFMM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzhJQUdVLE9BQU87c0JBQWYsS0FBSztnQkFDRyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0ksWUFBWTtzQkFBckIsTUFBTTtnQkFDRyxjQUFjO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE91dHB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFJlbmRlcmVyMixcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYnJpYy13aXphcmQnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHpvbmU6IE5nWm9uZTtcbiAgQElucHV0KCkgb3JkZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlT25Db21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFyaWFEZXNjcmliZWRieTogc3RyaW5nO1xuICBAT3V0cHV0KCkgd2l6YXJkY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB3aXphcmRjb21wbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLnpvbmUgPSBuZ1pvbmU7XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVDb21wb25lbnRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMub3JkZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ29yZGVyZWQnLCAnJyk7XG4gICAgICAgICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVPbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZGlzYWJsZS1vbi1jb21wbGV0ZScsICcnKTtcbiAgICAgICAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdjdXJyZW50LWluZGV4JywgU3RyaW5nKHRoaXMuY3VycmVudEluZGV4KSk7XG4gICAgICAgICAgfVxuICAgIGlmICh0aGlzLmFyaWFMYWJlbGxlZGJ5KSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2FyaWEtbGFiZWxsZWRieScsIHRoaXMuYXJpYUxhYmVsbGVkYnkpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMuYXJpYURlc2NyaWJlZGJ5KSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2FyaWEtZGVzY3JpYmVkYnknLCB0aGlzLmFyaWFEZXNjcmliZWRieSk7XG4gICAgICAgIH1cbiAgfVxuICBwcml2YXRlIGhhbmRsZVdpemFyZGNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLndpemFyZGNoYW5nZS5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgfSk7XG4gIH07XG4gIHByaXZhdGUgaGFuZGxlV2l6YXJkY29tcGxldGUgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy53aXphcmRjb21wbGV0ZS5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgfSk7XG4gIH07XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50UHJvcGVydGllcygpO1xuICB9XG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMudXBkYXRlQ29tcG9uZW50UHJvcGVydGllcygpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2l6YXJkY2hhbmdlJywgdGhpcy5oYW5kbGVXaXphcmRjaGFuZ2UpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd3aXphcmRjb21wbGV0ZScsIHRoaXMuaGFuZGxlV2l6YXJkY29tcGxldGUpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aXphcmRjaGFuZ2UnLCB0aGlzLmhhbmRsZVdpemFyZGNoYW5nZSk7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dpemFyZGNvbXBsZXRlJywgdGhpcy5oYW5kbGVXaXphcmRjb21wbGV0ZSk7XG4gIH1cbn1cbiJdfQ==