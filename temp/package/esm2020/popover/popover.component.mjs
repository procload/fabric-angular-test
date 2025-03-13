import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class PopoverComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.beak = false;
        this.nonClickable = false;
        this.size = 'medium';
        this.mode = 'manual';
        this.repositionMode = 'flip';
        this.open = false;
        this.transitionDuration = 100;
        this.transitionDelay = 0;
        this.hide = new EventEmitter();
        this.show = new EventEmitter();
        this.toggle = new EventEmitter();
        this.mouseEnter = new EventEmitter();
        this.mouseLeave = new EventEmitter();
        this.handleHide = (event) => {
            this.zone.run(() => {
                this.hide.emit(event.detail);
            });
        };
        this.handleShow = (event) => {
            this.zone.run(() => {
                this.show.emit(event.detail);
            });
        };
        this.handleToggle = (event) => {
            this.zone.run(() => {
                this.toggle.emit(event.detail);
            });
        };
        this.handleMouseEnter = (event) => {
            this.zone.run(() => {
                this.mouseEnter.emit(event.detail);
            });
        };
        this.handleMouseLeave = (event) => {
            this.zone.run(() => {
                this.mouseLeave.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        this.renderer.setProperty(nativeElement, 'open', this.open);
        if (this.beak) {
            this.renderer.setAttribute(nativeElement, 'beak', '');
        }
        if (this.size) {
            this.renderer.setAttribute(nativeElement, 'size', this.size);
        }
        if (this.mode) {
            this.renderer.setAttribute(nativeElement, 'mode', this.mode);
        }
        if (this.position) {
            this.renderer.setAttribute(nativeElement, 'position', this.position);
        }
        if (this.targetId) {
            this.renderer.setAttribute(nativeElement, 'target-id', this.targetId);
        }
        if (this.repositionMode) {
            this.renderer.setAttribute(nativeElement, 'reposition-mode', this.repositionMode);
        }
        if (this.overflowBoundarySelector) {
            this.renderer.setAttribute(nativeElement, 'overflow-boundary-selector', this.overflowBoundarySelector);
        }
        if (this.ariaLabel) {
            this.renderer.setAttribute(nativeElement, 'aria-label', this.ariaLabel);
        }
        if (this.nonClickable) {
            this.renderer.setAttribute(nativeElement, 'non-clickable', '');
        }
        if (this.transitionDuration !== undefined) {
            this.renderer.setAttribute(nativeElement, 'transition-duration', String(this.transitionDuration));
        }
        if (this.transitionDelay !== undefined) {
            this.renderer.setAttribute(nativeElement, 'transition-delay', String(this.transitionDelay));
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('hide', this.handleHide);
        this.el.nativeElement.addEventListener('show', this.handleShow);
        this.el.nativeElement.addEventListener('toggle', this.handleToggle);
        this.el.nativeElement.addEventListener('mouseEnter', this.handleMouseEnter);
        this.el.nativeElement.addEventListener('mouseLeave', this.handleMouseLeave);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('hide', this.handleHide);
        this.el.nativeElement.removeEventListener('show', this.handleShow);
        this.el.nativeElement.removeEventListener('toggle', this.handleToggle);
        this.el.nativeElement.removeEventListener('mouseEnter', this.handleMouseEnter);
        this.el.nativeElement.removeEventListener('mouseLeave', this.handleMouseLeave);
    }
}
PopoverComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PopoverComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PopoverComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PopoverComponent, selector: "fabric-popover", inputs: { beak: "beak", nonClickable: "nonClickable", size: "size", mode: "mode", position: "position", targetId: "targetId", repositionMode: "repositionMode", open: "open", overflowBoundarySelector: "overflowBoundarySelector", ariaLabel: "ariaLabel", transitionDuration: "transitionDuration", transitionDelay: "transitionDelay" }, outputs: { hide: "hide", show: "show", toggle: "toggle", mouseEnter: "mouseEnter", mouseLeave: "mouseLeave" }, usesOnChanges: true, ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PopoverComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-popover',
                    template: `
    <ng-content></ng-content>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { beak: [{
                type: Input
            }], nonClickable: [{
                type: Input
            }], size: [{
                type: Input
            }], mode: [{
                type: Input
            }], position: [{
                type: Input
            }], targetId: [{
                type: Input
            }], repositionMode: [{
                type: Input
            }], open: [{
                type: Input
            }], overflowBoundarySelector: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], transitionDuration: [{
                type: Input
            }], transitionDelay: [{
                type: Input
            }], hide: [{
                type: Output
            }], show: [{
                type: Output
            }], toggle: [{
                type: Output
            }], mouseEnter: [{
                type: Output
            }], mouseLeave: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9mYWJyaWMtd3JhcHBlcnMvc3JjL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTix1QkFBdUIsRUFNeEIsTUFBTSxlQUFlLENBQUM7O0FBY3ZCLE1BQU0sT0FBTyxnQkFBZ0I7SUFxQjNCLFlBQ1UsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLE1BQWM7UUFGZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBcEJmLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsU0FBSSxHQUFnQixRQUFRLENBQUM7UUFDN0IsU0FBSSxHQUFnQixRQUFRLENBQUM7UUFHN0IsbUJBQWMsR0FBMEIsTUFBTSxDQUFDO1FBQy9DLFNBQUksR0FBWSxLQUFLLENBQUM7UUFHdEIsdUJBQWtCLEdBQVcsR0FBRyxDQUFDO1FBQ2pDLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBK0R2QyxlQUFVLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxD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aEIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyx3QkFBd0I7c0JBQWhDLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDSSxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csSUFBSTtzQkFBYixNQUFNO2dCQUNHLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxVQUFVO3NCQUFuQixNQUFNO2dCQUNHLFVBQVU7c0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT3V0cHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgUmVuZGVyZXIyLFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUG9wb3ZlclNpemUsXG4gIFBvcG92ZXJNb2RlLFxuICBQb3NpdGlvbmluZ1Nob3J0aGFuZFZhbHVlcyxcbiAgUG9wb3ZlclJlcG9zaXRpb25Nb2RlXG59IGZyb20gJ0BmYWJyaWMtbXNmdC9mYWJyaWMtd2ViJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYnJpYy1wb3BvdmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95XG57XG4gIHB1YmxpYyB6b25lOiBOZ1pvbmU7XG4gIEBJbnB1dCgpIGJlYWs6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbm9uQ2xpY2thYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNpemU6IFBvcG92ZXJTaXplID0gJ21lZGl1bSc7XG4gIEBJbnB1dCgpIG1vZGU6IFBvcG92ZXJNb2RlID0gJ21hbnVhbCc7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBQb3NpdGlvbmluZ1Nob3J0aGFuZFZhbHVlcztcbiAgQElucHV0KCkgdGFyZ2V0SWQ6IHN0cmluZztcbiAgQElucHV0KCkgcmVwb3NpdGlvbk1vZGU6IFBvcG92ZXJSZXBvc2l0aW9uTW9kZSA9ICdmbGlwJztcbiAgQElucHV0KCkgb3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBvdmVyZmxvd0JvdW5kYXJ5U2VsZWN0b3I6IHN0cmluZztcbiAgQElucHV0KCkgYXJpYUxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyID0gMTAwO1xuICBASW5wdXQoKSB0cmFuc2l0aW9uRGVsYXk6IG51bWJlciA9IDA7XG4gIEBPdXRwdXQoKSBoaWRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzaG93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB0b2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG1vdXNlRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG1vdXNlTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICB0aGlzLnpvbmUgPSBuZ1pvbmU7XG4gIH1cbiAgcHJpdmF0ZSB1cGRhdGVDb21wb25lbnRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KG5hdGl2ZUVsZW1lbnQsICdvcGVuJywgdGhpcy5vcGVuKTtcblxuICAgIGlmICh0aGlzLmJlYWspIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdiZWFrJywgJycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnc2l6ZScsIHRoaXMuc2l6ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1vZGUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdtb2RlJywgdGhpcy5tb2RlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucG9zaXRpb24pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdwb3NpdGlvbicsIHRoaXMucG9zaXRpb24pO1xuICAgIH1cbiAgICBpZiAodGhpcy50YXJnZXRJZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ3RhcmdldC1pZCcsIHRoaXMudGFyZ2V0SWQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXBvc2l0aW9uTW9kZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIG5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICdyZXBvc2l0aW9uLW1vZGUnLFxuICAgICAgICB0aGlzLnJlcG9zaXRpb25Nb2RlXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5vdmVyZmxvd0JvdW5kYXJ5U2VsZWN0b3IpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgICBuYXRpdmVFbGVtZW50LFxuICAgICAgICAnb3ZlcmZsb3ctYm91bmRhcnktc2VsZWN0b3InLFxuICAgICAgICB0aGlzLm92ZXJmbG93Qm91bmRhcnlTZWxlY3RvclxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXJpYUxhYmVsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnYXJpYS1sYWJlbCcsIHRoaXMuYXJpYUxhYmVsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubm9uQ2xpY2thYmxlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnbm9uLWNsaWNrYWJsZScsICcnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgICBuYXRpdmVFbGVtZW50LFxuICAgICAgICAndHJhbnNpdGlvbi1kdXJhdGlvbicsXG4gICAgICAgIFN0cmluZyh0aGlzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLnRyYW5zaXRpb25EZWxheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgbmF0aXZlRWxlbWVudCxcbiAgICAgICAgJ3RyYW5zaXRpb24tZGVsYXknLFxuICAgICAgICBTdHJpbmcodGhpcy50cmFuc2l0aW9uRGVsYXkpXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIGhhbmRsZUhpZGUgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlLmVtaXQoZXZlbnQuZGV0YWlsKTtcbiAgICB9KTtcbiAgfTtcbiAgcHJpdmF0ZSBoYW5kbGVTaG93ID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuc2hvdy5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgfSk7XG4gIH07XG4gIHByaXZhdGUgaGFuZGxlVG9nZ2xlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlLmVtaXQoZXZlbnQuZGV0YWlsKTtcbiAgICB9KTtcbiAgfTtcbiAgcHJpdmF0ZSBoYW5kbGVNb3VzZUVudGVyID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubW91c2VFbnRlci5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgfSk7XG4gIH07XG4gIHByaXZhdGUgaGFuZGxlTW91c2VMZWF2ZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLm1vdXNlTGVhdmUuZW1pdChldmVudC5kZXRhaWwpO1xuICAgIH0pO1xuICB9O1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFByb3BlcnRpZXMoKTtcbiAgfVxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFByb3BlcnRpZXMoKTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCB0aGlzLmhhbmRsZUhpZGUpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzaG93JywgdGhpcy5oYW5kbGVTaG93KTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgdGhpcy5oYW5kbGVUb2dnbGUpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZUVudGVyJywgdGhpcy5oYW5kbGVNb3VzZUVudGVyKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VMZWF2ZScsIHRoaXMuaGFuZGxlTW91c2VMZWF2ZSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hpZGUnLCB0aGlzLmhhbmRsZUhpZGUpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzaG93JywgdGhpcy5oYW5kbGVTaG93KTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgdGhpcy5oYW5kbGVUb2dnbGUpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgJ21vdXNlRW50ZXInLFxuICAgICAgdGhpcy5oYW5kbGVNb3VzZUVudGVyXG4gICAgKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICdtb3VzZUxlYXZlJyxcbiAgICAgIHRoaXMuaGFuZGxlTW91c2VMZWF2ZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==