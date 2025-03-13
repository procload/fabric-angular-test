import { ElementRef, NgZone, Renderer2, OnInit, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MultiViewControllerComponent implements OnInit, OnChanges {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    hidden: boolean;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiViewControllerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiViewControllerComponent, "fabric-multi-view-controller", never, { "hidden": "hidden"; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=multi-view-controller.component.d.ts.map