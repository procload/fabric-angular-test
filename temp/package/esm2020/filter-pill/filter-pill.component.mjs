import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class FilterPillComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.role = "button";
        this.iconOnly = false;
        this.disabledFocusable = false;
        this.pressedchange = new EventEmitter();
        this.click = new EventEmitter();
        this.keypress = new EventEmitter();
        this.handlePressedchange = (event) => {
            this.zone.run(() => {
                this.pressedchange.emit(event.detail);
            });
        };
        this.handleClick = (event) => {
            this.zone.run(() => {
                this.click.emit(event.detail);
            });
        };
        this.handleKeypress = (event) => {
            this.zone.run(() => {
                this.keypress.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.appearance) {
            this.renderer.setAttribute(nativeElement, 'appearance', String(this.appearance));
        }
        if (this.shape) {
            this.renderer.setAttribute(nativeElement, 'shape', String(this.shape));
        }
        if (this.size) {
            this.renderer.setAttribute(nativeElement, 'size', String(this.size));
        }
        if (this.iconOnly) {
            this.renderer.setAttribute(nativeElement, 'icon-only', '');
        }
        if (this.pressed) {
            this.renderer.setAttribute(nativeElement, 'pressed', '');
        }
        if (this.mixed) {
            this.renderer.setAttribute(nativeElement, 'mixed', '');
        }
        if (this.ariaPressed) {
            this.renderer.setAttribute(nativeElement, 'aria-pressed', String(this.ariaPressed));
        }
        if (this.ariaLabel) {
            this.renderer.setAttribute(nativeElement, 'aria-label', String(this.ariaLabel));
        }
        if (this.autofocus) {
            this.renderer.setAttribute(nativeElement, 'autofocus', '');
        }
        if (this.disabled) {
            this.renderer.setAttribute(nativeElement, 'disabled', '');
        }
        if (this.disabledFocusable) {
            this.renderer.setAttribute(nativeElement, 'disabled-focusable', '');
        }
        if (this.formaction) {
            this.renderer.setAttribute(nativeElement, 'formaction', String(this.formaction));
        }
        if (this.form) {
            this.renderer.setAttribute(nativeElement, 'form', String(this.form));
        }
        if (this.formenctype) {
            this.renderer.setAttribute(nativeElement, 'formenctype', String(this.formenctype));
        }
        if (this.formmethod) {
            this.renderer.setAttribute(nativeElement, 'formmethod', String(this.formmethod));
        }
        if (this.formnovalidate) {
            this.renderer.setAttribute(nativeElement, 'formnovalidate', String(this.formnovalidate));
        }
        if (this.formtarget) {
            this.renderer.setAttribute(nativeElement, 'formtarget', String(this.formtarget));
        }
        if (this.name) {
            this.renderer.setAttribute(nativeElement, 'name', String(this.name));
        }
        if (this.type) {
            this.renderer.setAttribute(nativeElement, 'type', String(this.type));
        }
        if (this.value) {
            this.renderer.setAttribute(nativeElement, 'value', String(this.value));
        }
        if (this.role) {
            this.renderer.setAttribute(nativeElement, 'role', this.role);
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('pressedchange', this.handlePressedchange);
        this.el.nativeElement.addEventListener('click', this.handleClick);
        this.el.nativeElement.addEventListener('keypress', this.handleKeypress);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('pressedchange', this.handlePressedchange);
        this.el.nativeElement.removeEventListener('click', this.handleClick);
        this.el.nativeElement.removeEventListener('keypress', this.handleKeypress);
    }
}
FilterPillComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterPillComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
FilterPillComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: FilterPillComponent, selector: "fabric-filter-pill", inputs: { role: "role", appearance: "appearance", shape: "shape", size: "size", iconOnly: "iconOnly", pressed: "pressed", mixed: "mixed", ariaPressed: "ariaPressed", ariaLabel: "ariaLabel", autofocus: "autofocus", disabled: "disabled", disabledFocusable: "disabledFocusable", formaction: "formaction", form: "form", formenctype: "formenctype", formmethod: "formmethod", formnovalidate: "formnovalidate", formtarget: "formtarget", name: "name", type: "type", value: "value" }, outputs: { pressedchange: "pressedchange", click: "click", keypress: "keypress" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterPillComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-filter-pill',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { role: [{
                type: Input
            }], appearance: [{
                type: Input
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], iconOnly: [{
                type: Input
            }], pressed: [{
                type: Input
            }], mixed: [{
                type: Input
            }], ariaPressed: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], autofocus: [{
                type: Input
            }], disabled: [{
                type: Input
            }], disabledFocusable: [{
                type: Input
            }], formaction: [{
                type: Input
            }], form: [{
                type: Input
            }], formenctype: [{
                type: Input
            }], formmethod: [{
                type: Input
            }], formnovalidate: [{
                type: Input
            }], formtarget: [{
                type: Input
            }], name: [{
                type: Input
            }], type: [{
                type: Input
            }], value: [{
                type: Input
            }], pressedchange: [{
                type: Output
            }], click: [{
                type: Output
            }], keypress: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXBpbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZmFicmljLXdyYXBwZXJzL3NyYy9maWx0ZXItcGlsbC9maWx0ZXItcGlsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTix1QkFBdUIsRUFNeEIsTUFBTSxlQUFlLENBQUM7O0FBT3ZCLE1BQU0sT0FBTyxtQkFBbUI7SUEwQjlCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQixFQUFVLE1BQWM7UUFBbkUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBeEI5RSxTQUFJLEdBQVcsUUFBUSxDQUFDO1FBSXhCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFPMUIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBVWxDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNoQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQW9FckMsd0JBQW1CLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUNNLGdCQUFXLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FB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aUhBM0hVLG1CQUFtQjtxR0FBbkIsbUJBQW1CLDhuQkFIcEIsMkJBQTJCOzRGQUcxQixtQkFBbUI7a0JBTC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzhJQUdVLElBQUk7c0JBQVosS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csaUJBQWlCO3NCQUF6QixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0ksYUFBYTtzQkFBdEIsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBSZW5kZXJlcjIsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25BcHBlYXJhbmNlLCBCdXR0b25TaGFwZSwgQnV0dG9uU2l6ZSwgQnV0dG9uRm9ybVRhcmdldCwgQnV0dG9uVHlwZSB9IGZyb20gJ0BmYWJyaWMtbXNmdC9mYWJyaWMtd2ViJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYnJpYy1maWx0ZXItcGlsbCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclBpbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHpvbmU6IE5nWm9uZTtcbiAgQElucHV0KCkgcm9sZTogc3RyaW5nID0gXCJidXR0b25cIjtcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogQnV0dG9uQXBwZWFyYW5jZSB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgc2hhcGU6IEJ1dHRvblNoYXBlIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBzaXplOiBCdXR0b25TaXplIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBpY29uT25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBwcmVzc2VkOiBib29sZWFuO1xuICBASW5wdXQoKSBtaXhlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgYXJpYVByZXNzZWQ6IHN0cmluZztcbiAgQElucHV0KCkgYXJpYUxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGF1dG9mb2N1czogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkRm9jdXNhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZvcm1hY3Rpb246IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgZm9ybTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBmb3JtZW5jdHlwZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBmb3JtbWV0aG9kOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGZvcm1ub3ZhbGlkYXRlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBmb3JtdGFyZ2V0OiBCdXR0b25Gb3JtVGFyZ2V0IHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIHR5cGU6IEJ1dHRvblR5cGU7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBPdXRwdXQoKSBwcmVzc2VkY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkga2V5cHJlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy56b25lID0gbmdab25lO1xuICB9XG4gIHByaXZhdGUgdXBkYXRlQ29tcG9uZW50UHJvcGVydGllcygpIHtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmFwcGVhcmFuY2UpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnYXBwZWFyYW5jZScsIFN0cmluZyh0aGlzLmFwcGVhcmFuY2UpKTtcbiAgICAgICAgfVxuICAgIGlmICh0aGlzLnNoYXBlKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ3NoYXBlJywgU3RyaW5nKHRoaXMuc2hhcGUpKTtcbiAgICAgICAgfVxuICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnc2l6ZScsIFN0cmluZyh0aGlzLnNpemUpKTtcbiAgICAgICAgfVxuICAgIGlmICh0aGlzLmljb25Pbmx5KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnaWNvbi1vbmx5JywgJycpO1xuICAgICAgICAgIH1cbiAgICBpZiAodGhpcy5wcmVzc2VkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAncHJlc3NlZCcsICcnKTtcbiAgICAgICAgICB9XG4gICAgaWYgKHRoaXMubWl4ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdtaXhlZCcsICcnKTtcbiAgICAgICAgICB9XG4gICAgaWYgKHRoaXMuYXJpYVByZXNzZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnYXJpYS1wcmVzc2VkJywgU3RyaW5nKHRoaXMuYXJpYVByZXNzZWQpKTtcbiAgICAgICAgfVxuICAgIGlmICh0aGlzLmFyaWFMYWJlbCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdhcmlhLWxhYmVsJywgU3RyaW5nKHRoaXMuYXJpYUxhYmVsKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5hdXRvZm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnJyk7XG4gICAgICAgICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkRm9jdXNhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQtZm9jdXNhYmxlJywgJycpO1xuICAgICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtYWN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Zvcm1hY3Rpb24nLCBTdHJpbmcodGhpcy5mb3JtYWN0aW9uKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Zvcm0nLCBTdHJpbmcodGhpcy5mb3JtKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtZW5jdHlwZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdmb3JtZW5jdHlwZScsIFN0cmluZyh0aGlzLmZvcm1lbmN0eXBlKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtbWV0aG9kKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Zvcm1tZXRob2QnLCBTdHJpbmcodGhpcy5mb3JtbWV0aG9kKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3Jtbm92YWxpZGF0ZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdmb3Jtbm92YWxpZGF0ZScsIFN0cmluZyh0aGlzLmZvcm1ub3ZhbGlkYXRlKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtdGFyZ2V0KSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Zvcm10YXJnZXQnLCBTdHJpbmcodGhpcy5mb3JtdGFyZ2V0KSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5uYW1lKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ25hbWUnLCBTdHJpbmcodGhpcy5uYW1lKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy50eXBlKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ3R5cGUnLCBTdHJpbmcodGhpcy50eXBlKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIFN0cmluZyh0aGlzLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5yb2xlKSB7IHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdyb2xlJywgdGhpcy5yb2xlKTsgfVxuICB9XG4gIHByaXZhdGUgaGFuZGxlUHJlc3NlZGNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLnByZXNzZWRjaGFuZ2UuZW1pdChldmVudC5kZXRhaWwpO1xuICAgIH0pO1xuICB9O1xuICBwcml2YXRlIGhhbmRsZUNsaWNrID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMuY2xpY2suZW1pdChldmVudC5kZXRhaWwpO1xuICAgIH0pO1xuICB9O1xuICBwcml2YXRlIGhhbmRsZUtleXByZXNzID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMua2V5cHJlc3MuZW1pdChldmVudC5kZXRhaWwpO1xuICAgIH0pO1xuICB9O1xuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFByb3BlcnRpZXMoKTtcbiAgfVxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnVwZGF0ZUNvbXBvbmVudFByb3BlcnRpZXMoKTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3ByZXNzZWRjaGFuZ2UnLCB0aGlzLmhhbmRsZVByZXNzZWRjaGFuZ2UpO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuaGFuZGxlS2V5cHJlc3MpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwcmVzc2VkY2hhbmdlJywgdGhpcy5oYW5kbGVQcmVzc2VkY2hhbmdlKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLmhhbmRsZUtleXByZXNzKTtcbiAgfVxufVxuIl19