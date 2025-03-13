import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class TeachingBubbleComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.target = "";
        this.placement = "top";
        this.disableTrapFocus = false;
        this.size = "medium";
        this.openchange = new EventEmitter();
        this.dismiss = new EventEmitter();
        this.handleOpenchange = (event) => {
            this.zone.run(() => {
                this.openchange.emit(event.detail);
            });
        };
        this.handleDismiss = (event) => {
            this.zone.run(() => {
                this.dismiss.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.target) {
            this.renderer.setAttribute(nativeElement, 'target', this.target);
        }
        if (this.placement) {
            this.renderer.setAttribute(nativeElement, 'placement', this.placement);
        }
        if (this.open) {
            this.renderer.setAttribute(nativeElement, 'open', '');
        }
        if (this.disableTrapFocus) {
            this.renderer.setAttribute(nativeElement, 'disable-trap-focus', '');
        }
        if (this.size) {
            this.renderer.setAttribute(nativeElement, 'size', this.size);
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('openchange', this.handleOpenchange);
        this.el.nativeElement.addEventListener('dismiss', this.handleDismiss);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('openchange', this.handleOpenchange);
        this.el.nativeElement.removeEventListener('dismiss', this.handleDismiss);
    }
}
TeachingBubbleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TeachingBubbleComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
TeachingBubbleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: TeachingBubbleComponent, selector: "fabric-teaching-bubble", inputs: { target: "target", placement: "placement", open: "open", disableTrapFocus: "disableTrapFocus", size: "size" }, outputs: { openchange: "openchange", dismiss: "dismiss" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TeachingBubbleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-teaching-bubble',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { target: [{
                type: Input
            }], placement: [{
                type: Input
            }], open: [{
                type: Input
            }], disableTrapFocus: [{
                type: Input
            }], size: [{
                type: Input
            }], openchange: [{
                type: Output
            }], dismiss: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hpbmctYnViYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZhYnJpYy13cmFwcGVycy9zcmMvdGVhY2hpbmctYnViYmxlL3RlYWNoaW5nLWJ1YmJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTix1QkFBdUIsRUFNeEIsTUFBTSxlQUFlLENBQUM7O0FBT3ZCLE1BQU0sT0FBTyx1QkFBdUI7SUFTbEMsWUFBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQVUsTUFBYztRQUFuRSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQOUUsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQTRCLEtBQUssQ0FBQztRQUUzQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMsU0FBSSxHQUF1QixRQUFRLENBQUM7UUFDbkMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDckMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFzQnBDLHFCQUFnQixHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDTSxrQkFBYSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUE3QkEsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUNPLHlCQUF5QjtRQUMvQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsRTtRQUNMLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN2RDtRQUNQLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNyRTtRQUNQLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlEO0lBQ1AsQ0FBQztJQVdELFFBQVE7UUFDTixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzRSxDQUFDOztxSEFyRFUsdUJBQXVCO3lHQUF2Qix1QkFBdUIsc1FBSHhCLDJCQUEyQjs0RkFHMUIsdUJBQXVCO2tCQUxuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs4SUFHVSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDSSxVQUFVO3NCQUFuQixNQUFNO2dCQUNHLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgUmVuZGVyZXIyLFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVhY2hpbmdCdWJibGVQbGFjZW1lbnQsIFRlYWNoaW5nQnViYmxlU2l6ZSB9IGZyb20gJ0BmYWJyaWMtbXNmdC9mYWJyaWMtd2ViJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYnJpYy10ZWFjaGluZy1idWJibGUnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUZWFjaGluZ0J1YmJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgem9uZTogTmdab25lO1xuICBASW5wdXQoKSB0YXJnZXQ6IHN0cmluZyA9IFwiXCI7XG4gIEBJbnB1dCgpIHBsYWNlbWVudDogVGVhY2hpbmdCdWJibGVQbGFjZW1lbnQgPSBcInRvcFwiO1xuICBASW5wdXQoKSBvcGVuOiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlVHJhcEZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNpemU6IFRlYWNoaW5nQnViYmxlU2l6ZSA9IFwibWVkaXVtXCI7XG4gIEBPdXRwdXQoKSBvcGVuY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuem9uZSA9IG5nWm9uZTtcbiAgfVxuICBwcml2YXRlIHVwZGF0ZUNvbXBvbmVudFByb3BlcnRpZXMoKSB7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAndGFyZ2V0JywgdGhpcy50YXJnZXQpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMucGxhY2VtZW50KSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ3BsYWNlbWVudCcsIHRoaXMucGxhY2VtZW50KTtcbiAgICAgICAgfVxuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdvcGVuJywgJycpO1xuICAgICAgICAgIH1cbiAgICBpZiAodGhpcy5kaXNhYmxlVHJhcEZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZGlzYWJsZS10cmFwLWZvY3VzJywgJycpO1xuICAgICAgICAgIH1cbiAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ3NpemUnLCB0aGlzLnNpemUpO1xuICAgICAgICB9XG4gIH1cbiAgcHJpdmF0ZSBoYW5kbGVPcGVuY2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMub3BlbmNoYW5nZS5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgfSk7XG4gIH07XG4gIHByaXZhdGUgaGFuZGxlRGlzbWlzcyA9IChldmVudDogYW55KSA9PiB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmRpc21pc3MuZW1pdChldmVudC5kZXRhaWwpO1xuICAgIH0pO1xuICB9O1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFByb3BlcnRpZXMoKTtcbiAgfVxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFByb3BlcnRpZXMoKTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW5jaGFuZ2UnLCB0aGlzLmhhbmRsZU9wZW5jaGFuZ2UpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkaXNtaXNzJywgdGhpcy5oYW5kbGVEaXNtaXNzKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbmNoYW5nZScsIHRoaXMuaGFuZGxlT3BlbmNoYW5nZSk7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Rpc21pc3MnLCB0aGlzLmhhbmRsZURpc21pc3MpO1xuICB9XG59XG4iXX0=