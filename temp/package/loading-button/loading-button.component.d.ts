import { ElementRef, NgZone, Renderer2, OnInit, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class LoadingButtonComponent implements OnInit, OnChanges {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    loading: boolean;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoadingButtonComponent, "fabric-loading-button", never, { "loading": "loading"; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=loading-button.component.d.ts.map