import { ElementRef, EventEmitter, NgZone, Renderer2, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { ButtonAppearance, ButtonFormTarget, ButtonShape, ButtonSize, ButtonType } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export declare class MenuButtonComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    disabled: boolean;
    appearance: ButtonAppearance | undefined;
    autofocus: boolean;
    disabledFocusable: boolean;
    formaction: string | undefined;
    form: string | undefined;
    formenctype: string | undefined;
    formmethod: string | undefined;
    formnovalidate: boolean | undefined;
    formtarget: ButtonFormTarget | undefined;
    iconOnly: boolean;
    name: string | undefined;
    shape: ButtonShape | undefined;
    size: ButtonSize | undefined;
    type: ButtonType;
    value: string | undefined;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuButtonComponent, "fabric-menu-button", never, { "disabled": "disabled"; "appearance": "appearance"; "autofocus": "autofocus"; "disabledFocusable": "disabledFocusable"; "formaction": "formaction"; "form": "form"; "formenctype": "formenctype"; "formmethod": "formmethod"; "formnovalidate": "formnovalidate"; "formtarget": "formtarget"; "iconOnly": "iconOnly"; "name": "name"; "shape": "shape"; "size": "size"; "type": "type"; "value": "value"; }, { "click": "click"; "keypress": "keypress"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=menu-button.component.d.ts.map