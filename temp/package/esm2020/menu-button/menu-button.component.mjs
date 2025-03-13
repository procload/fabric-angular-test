import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class MenuButtonComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.disabledFocusable = false;
        this.iconOnly = false;
        this.click = new EventEmitter();
        this.keypress = new EventEmitter();
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
        if (this.disabled) {
            this.renderer.setAttribute(nativeElement, 'disabled', '');
        }
        if (this.appearance) {
            this.renderer.setAttribute(nativeElement, 'appearance', String(this.appearance));
        }
        if (this.autofocus) {
            this.renderer.setAttribute(nativeElement, 'autofocus', '');
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
        if (this.iconOnly) {
            this.renderer.setAttribute(nativeElement, 'icon-only', '');
        }
        if (this.name) {
            this.renderer.setAttribute(nativeElement, 'name', String(this.name));
        }
        if (this.shape) {
            this.renderer.setAttribute(nativeElement, 'shape', String(this.shape));
        }
        if (this.size) {
            this.renderer.setAttribute(nativeElement, 'size', String(this.size));
        }
        if (this.type) {
            this.renderer.setAttribute(nativeElement, 'type', String(this.type));
        }
        if (this.value) {
            this.renderer.setAttribute(nativeElement, 'value', String(this.value));
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('click', this.handleClick);
        this.el.nativeElement.addEventListener('keypress', this.handleKeypress);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('click', this.handleClick);
        this.el.nativeElement.removeEventListener('keypress', this.handleKeypress);
    }
}
MenuButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
MenuButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: MenuButtonComponent, selector: "fabric-menu-button", inputs: { disabled: "disabled", appearance: "appearance", autofocus: "autofocus", disabledFocusable: "disabledFocusable", formaction: "formaction", form: "form", formenctype: "formenctype", formmethod: "formmethod", formnovalidate: "formnovalidate", formtarget: "formtarget", iconOnly: "iconOnly", name: "name", shape: "shape", size: "size", type: "type", value: "value" }, outputs: { click: "click", keypress: "keypress" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-menu-button',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { disabled: [{
                type: Input
            }], appearance: [{
                type: Input
            }], autofocus: [{
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
            }], iconOnly: [{
                type: Input
            }], name: [{
                type: Input
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], type: [{
                type: Input
            }], value: [{
                type: Input
            }], click: [{
                type: Output
            }], keypress: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZmFicmljLXdyYXBwZXJzL3NyYy9tZW51LWJ1dHRvbi9tZW51LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTix1QkFBdUIsRUFNeEIsTUFBTSxlQUFlLENBQUM7O0FBT3ZCLE1BQU0sT0FBTyxtQkFBbUI7SUFvQjlCLFlBQW9CLEVBQWMsRUFBVSxRQUFtQixFQUFVLE1BQWM7UUFBbkUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBZjlFLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQU9uQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBTXpCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2hDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBdURyQyxnQkFBVyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDTSxtQkFBYyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUE5REEsSUFBSSxD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USxFQUFFLDJCQUEyQjtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzhJQUdVLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBSZW5kZXJlcjIsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25BcHBlYXJhbmNlLCBCdXR0b25Gb3JtVGFyZ2V0LCBCdXR0b25TaGFwZSwgQnV0dG9uU2l6ZSwgQnV0dG9uVHlwZSB9IGZyb20gJ0BmYWJyaWMtbXNmdC9mYWJyaWMtd2ViJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYnJpYy1tZW51LWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHpvbmU6IE5nWm9uZTtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFwcGVhcmFuY2U6IEJ1dHRvbkFwcGVhcmFuY2UgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGF1dG9mb2N1czogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWRGb2N1c2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZm9ybWFjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBmb3JtOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGZvcm1lbmN0eXBlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGZvcm1tZXRob2Q6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgZm9ybW5vdmFsaWRhdGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGZvcm10YXJnZXQ6IEJ1dHRvbkZvcm1UYXJnZXQgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGljb25Pbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgc2hhcGU6IEJ1dHRvblNoYXBlIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBzaXplOiBCdXR0b25TaXplIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSB0eXBlOiBCdXR0b25UeXBlO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGtleXByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuem9uZSA9IG5nWm9uZTtcbiAgfVxuICBwcml2YXRlIHVwZGF0ZUNvbXBvbmVudFByb3BlcnRpZXMoKSB7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJycpO1xuICAgICAgICAgIH1cbiAgICBpZiAodGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2FwcGVhcmFuY2UnLCBTdHJpbmcodGhpcy5hcHBlYXJhbmNlKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5hdXRvZm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnJyk7XG4gICAgICAgICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkRm9jdXNhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQtZm9jdXNhYmxlJywgJycpO1xuICAgICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtYWN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Zvcm1hY3Rpb24nLCBTdHJpbmcodGhpcy5mb3JtYWN0aW9uKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Zvcm0nLCBTdHJpbmcodGhpcy5mb3JtKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtZW5jdHlwZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdmb3JtZW5jdHlwZScsIFN0cmluZyh0aGlzLmZvcm1lbmN0eXBlKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtbWV0aG9kKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Zvcm1tZXRob2QnLCBTdHJpbmcodGhpcy5mb3JtbWV0aG9kKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3Jtbm92YWxpZGF0ZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdmb3Jtbm92YWxpZGF0ZScsIFN0cmluZyh0aGlzLmZvcm1ub3ZhbGlkYXRlKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtdGFyZ2V0KSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Zvcm10YXJnZXQnLCBTdHJpbmcodGhpcy5mb3JtdGFyZ2V0KSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5pY29uT25seSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2ljb24tb25seScsICcnKTtcbiAgICAgICAgICB9XG4gICAgaWYgKHRoaXMubmFtZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICduYW1lJywgU3RyaW5nKHRoaXMubmFtZSkpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMuc2hhcGUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnc2hhcGUnLCBTdHJpbmcodGhpcy5zaGFwZSkpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdzaXplJywgU3RyaW5nKHRoaXMuc2l6ZSkpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMudHlwZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICd0eXBlJywgU3RyaW5nKHRoaXMudHlwZSkpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAndmFsdWUnLCBTdHJpbmcodGhpcy52YWx1ZSkpO1xuICAgICAgICB9XG4gIH1cbiAgcHJpdmF0ZSBoYW5kbGVDbGljayA9IChldmVudDogYW55KSA9PiB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmNsaWNrLmVtaXQoZXZlbnQuZGV0YWlsKTtcbiAgICB9KTtcbiAgfTtcbiAgcHJpdmF0ZSBoYW5kbGVLZXlwcmVzcyA9IChldmVudDogYW55KSA9PiB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmtleXByZXNzLmVtaXQoZXZlbnQuZGV0YWlsKTtcbiAgICB9KTtcbiAgfTtcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVDb21wb25lbnRQcm9wZXJ0aWVzKCk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVDb21wb25lbnRQcm9wZXJ0aWVzKCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuaGFuZGxlS2V5cHJlc3MpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuaGFuZGxlS2V5cHJlc3MpO1xuICB9XG59XG4iXX0=