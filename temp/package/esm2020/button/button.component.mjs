import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonComponent {
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
        if (this.appearance) {
            this.renderer.setAttribute(nativeElement, 'appearance', String(this.appearance));
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
            this.renderer.setAttribute(nativeElement, 'formnovalidate', '');
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
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: ButtonComponent, selector: "fabric-button", inputs: { appearance: "appearance", autofocus: "autofocus", disabled: "disabled", disabledFocusable: "disabledFocusable", formaction: "formaction", form: "form", formenctype: "formenctype", formmethod: "formmethod", formnovalidate: "formnovalidate", formtarget: "formtarget", iconOnly: "iconOnly", name: "name", shape: "shape", size: "size", type: "type", value: "value" }, outputs: { click: "click", keypress: "keypress" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-button',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { appearance: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZhYnJpYy13cmFwcGVycy9zcmMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTix1QkFBdUIsRUFNeEIsTUFBTSxlQUFlLENBQUM7O0FBT3ZCLE1BQU0sT0FBTyxlQUFlO0lBb0IxQixZQUFvQixFQUFjLEVBQVUsUUFBbUIsRUFBVSxNQUFjO1FBQW5FLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWY5RSxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFPbkMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQU16QixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNoQyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQXVEckMsZ0JBQVcsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBQ00sbUJBQWMsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBOURBLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFB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Q2hEOzhJQUdVLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBSZW5kZXJlcjIsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25BcHBlYXJhbmNlLCBCdXR0b25Gb3JtVGFyZ2V0LCBCdXR0b25TaGFwZSwgQnV0dG9uU2l6ZSwgQnV0dG9uVHlwZSB9IGZyb20gJ0BmYWJyaWMtbXNmdC9mYWJyaWMtd2ViJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZhYnJpYy1idXR0b24nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHpvbmU6IE5nWm9uZTtcbiAgQElucHV0KCkgYXBwZWFyYW5jZTogQnV0dG9uQXBwZWFyYW5jZTtcbiAgQElucHV0KCkgYXV0b2ZvY3VzOiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWRGb2N1c2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZm9ybWFjdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1lbmN0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm1tZXRob2Q6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybW5vdmFsaWRhdGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZvcm10YXJnZXQ6IEJ1dHRvbkZvcm1UYXJnZXQ7XG4gIEBJbnB1dCgpIGljb25Pbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgc2hhcGU6IEJ1dHRvblNoYXBlO1xuICBASW5wdXQoKSBzaXplOiBCdXR0b25TaXplO1xuICBASW5wdXQoKSB0eXBlOiBCdXR0b25UeXBlO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGtleXByZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuem9uZSA9IG5nWm9uZTtcbiAgfVxuICBwcml2YXRlIHVwZGF0ZUNvbXBvbmVudFByb3BlcnRpZXMoKSB7XG4gICAgY29uc3QgbmF0aXZlRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5hcHBlYXJhbmNlKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2FwcGVhcmFuY2UnLCBTdHJpbmcodGhpcy5hcHBlYXJhbmNlKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5hdXRvZm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnJyk7XG4gICAgICAgICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnJyk7XG4gICAgICAgICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkRm9jdXNhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQtZm9jdXNhYmxlJywgJycpO1xuICAgICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtYWN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Zvcm1hY3Rpb24nLCBTdHJpbmcodGhpcy5mb3JtYWN0aW9uKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Zvcm0nLCBTdHJpbmcodGhpcy5mb3JtKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtZW5jdHlwZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdmb3JtZW5jdHlwZScsIFN0cmluZyh0aGlzLmZvcm1lbmN0eXBlKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtbWV0aG9kKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Zvcm1tZXRob2QnLCBTdHJpbmcodGhpcy5mb3JtbWV0aG9kKSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3Jtbm92YWxpZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Zvcm1ub3ZhbGlkYXRlJywgJycpO1xuICAgICAgICAgIH1cbiAgICBpZiAodGhpcy5mb3JtdGFyZ2V0KSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2Zvcm10YXJnZXQnLCBTdHJpbmcodGhpcy5mb3JtdGFyZ2V0KSk7XG4gICAgICAgIH1cbiAgICBpZiAodGhpcy5pY29uT25seSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUobmF0aXZlRWxlbWVudCwgJ2ljb24tb25seScsICcnKTtcbiAgICAgICAgICB9XG4gICAgaWYgKHRoaXMubmFtZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICduYW1lJywgU3RyaW5nKHRoaXMubmFtZSkpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMuc2hhcGUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAnc2hhcGUnLCBTdHJpbmcodGhpcy5zaGFwZSkpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICdzaXplJywgU3RyaW5nKHRoaXMuc2l6ZSkpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMudHlwZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKG5hdGl2ZUVsZW1lbnQsICd0eXBlJywgU3RyaW5nKHRoaXMudHlwZSkpO1xuICAgICAgICB9XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShuYXRpdmVFbGVtZW50LCAndmFsdWUnLCBTdHJpbmcodGhpcy52YWx1ZSkpO1xuICAgICAgICB9XG4gIH1cbiAgcHJpdmF0ZSBoYW5kbGVDbGljayA9IChldmVudDogYW55KSA9PiB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmNsaWNrLmVtaXQoZXZlbnQuZGV0YWlsKTtcbiAgICB9KTtcbiAgfTtcbiAgcHJpdmF0ZSBoYW5kbGVLZXlwcmVzcyA9IChldmVudDogYW55KSA9PiB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmtleXByZXNzLmVtaXQoZXZlbnQuZGV0YWlsKTtcbiAgICB9KTtcbiAgfTtcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVDb21wb25lbnRQcm9wZXJ0aWVzKCk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVDb21wb25lbnRQcm9wZXJ0aWVzKCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuaGFuZGxlS2V5cHJlc3MpO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuaGFuZGxlS2V5cHJlc3MpO1xuICB9XG59XG4iXX0=