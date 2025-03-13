import { ElementRef, EventEmitter, NgZone, Renderer2, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { ButtonAppearance, ButtonFormTarget, ButtonShape, ButtonSize, ButtonType } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export declare class ButtonComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    appearance: ButtonAppearance;
    autofocus: boolean;
    disabled: boolean;
    disabledFocusable: boolean;
    formaction: string;
    form: string;
    formenctype: string;
    formmethod: string;
    formnovalidate: boolean;
    formtarget: ButtonFormTarget;
    iconOnly: boolean;
    name: string;
    shape: ButtonShape;
    size: ButtonSize;
    type: ButtonType;
    value: string;
    click: EventEmitter<any>;
    keypress: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    private handleClick;
    private handleKeypress;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "fabric-button", never, { "appearance": "appearance"; "autofocus": "autofocus"; "disabled": "disabled"; "disabledFocusable": "disabledFocusable"; "formaction": "formaction"; "form": "form"; "formenctype": "formenctype"; "formmethod": "formmethod"; "formnovalidate": "formnovalidate"; "formtarget": "formtarget"; "iconOnly": "iconOnly"; "name": "name"; "shape": "shape"; "size": "size"; "type": "type"; "value": "value"; }, { "click": "click"; "keypress": "keypress"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=button.component.d.ts.map