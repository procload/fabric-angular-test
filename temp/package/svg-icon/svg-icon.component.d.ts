import { ElementRef, EventEmitter, NgZone, Renderer2, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SvgIconComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    name: string;
    size: string;
    path: string;
    ariaHidden: string;
    focusable: string;
    role: string;
    ariaLabel: string;
    error: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    private handleError;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SvgIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SvgIconComponent, "fabric-svg-icon", never, { "name": "name"; "size": "size"; "path": "path"; "ariaHidden": "ariaHidden"; "focusable": "focusable"; "role": "role"; "ariaLabel": "ariaLabel"; }, { "error": "error"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=svg-icon.component.d.ts.map