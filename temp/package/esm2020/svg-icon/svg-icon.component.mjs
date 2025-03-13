import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class SvgIconComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.ariaHidden = "true";
        this.focusable = "false";
        this.role = "";
        this.error = new EventEmitter();
        this.handleError = (event) => {
            this.zone.run(() => {
                this.error.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.name) {
            this.renderer.setAttribute(nativeElement, 'name', this.name);
        }
        if (this.size) {
            this.renderer.setAttribute(nativeElement, 'size', this.size);
        }
        if (this.path) {
            this.renderer.setAttribute(nativeElement, 'path', this.path);
        }
        if (this.ariaHidden) {
            this.renderer.setAttribute(nativeElement, 'aria-hidden', this.ariaHidden);
        }
        if (this.focusable) {
            this.renderer.setAttribute(nativeElement, 'focusable', this.focusable);
        }
        if (this.role) {
            this.renderer.setAttribute(nativeElement, 'role', this.role);
        }
        if (this.ariaLabel) {
            this.renderer.setAttribute(nativeElement, 'aria-label', this.ariaLabel);
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('error', this.handleError);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('error', this.handleError);
    }
}
SvgIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SvgIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
SvgIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: SvgIconComponent, selector: "fabric-svg-icon", inputs: { name: "name", size: "size", path: "path", ariaHidden: "ariaHidden", focusable: "focusable", role: "role", ariaLabel: "ariaLabel" }, outputs: { error: "error" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SvgIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-svg-icon',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { name: [{
                type: Input
            }], size: [{
                type: Input
            }], path: [{
                type: Input
            }], ariaHidden: [{
                type: Input
            }], focusable: [{
                type: Input
            }], role: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], error: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZmFicmljLXdyYXBwZXJzL3NyYy9zdmctaWNvbi9zdmctaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTix1QkFBdUIsRUFNeEIsTUFBTSxlQUFlLENBQUM7O0FBTXZCLE1BQU0sT0FBTyxnQkFBZ0I7SUFVM0IsWUFBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQVUsTUFBYztRQUFuRSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMOUUsZUFBVSxHQUFXLE1BQU0sQ0FBQztRQUM1QixjQUFTLEdBQVcsT0FBTyxDQUFDO1FBQzVCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFFakIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUE0QmxDLGdCQUFXLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQTlCQSxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ08seUJBQXlCO1FBQy9CLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlEO1FBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUQ7UUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5RDtRQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzNFO1FBQ0wsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEU7UUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5RDtRQUNMLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pFO0lBQ1AsQ0FBQztJQU1ELFFBQVE7UUFDTixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7OEdBckRVLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLHVQQUhqQiwyQkFBMkI7NEZBRzFCLGdCQUFnQjtrQkFMNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OElBR1UsSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNJLEtBQUs7c0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBSZW5kZXJlcjIsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmYWJyaWMtc3ZnLWljb24nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdmdJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyB6b25lOiBOZ1pvbmU7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKSBwYXRoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFyaWFIaWRkZW46IHN0cmluZyA9IFwidHJ1ZVwiO1xuICBASW5wdXQoKSBmb2N1c2FibGU6IHN0cmluZyA9IFwiZmFsc2VcIjtcbiAgQElucHV0KCkgcm9sZTogc3RyaW5nID0gXCJcIjtcbiAgQElucHV0KCkgYXJpYUxhYmVsOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLnpvbmUgPSBuZ1pvbmU7XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVDb21wb25lbnRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMubmFtZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICduYW1lJywgdGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnc2l6ZScsIHRoaXMuc2l6ZSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5wYXRoKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ3BhdGgnLCB0aGlzLnBhdGgpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMuYXJpYUhpZGRlbikge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdhcmlhLWhpZGRlbicsIHRoaXMuYXJpYUhpZGRlbik7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb2N1c2FibGUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZm9jdXNhYmxlJywgdGhpcy5mb2N1c2FibGUpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMucm9sZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdyb2xlJywgdGhpcy5yb2xlKTtcbiAgICAgICAgfVxuICAgIGlmICh0aGlzLmFyaWFMYWJlbCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdhcmlhLWxhYmVsJywgdGhpcy5hcmlhTGFiZWwpO1xuICAgICAgICB9XG4gIH1cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvciA9IChldmVudDogYW55KSA9PiB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmVycm9yLmVtaXQoZXZlbnQuZGV0YWlsKTtcbiAgICB9KTtcbiAgfTtcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVDb21wb25lbnRQcm9wZXJ0aWVzKCk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVDb21wb25lbnRQcm9wZXJ0aWVzKCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG59XG4iXX0=