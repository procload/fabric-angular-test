import { ElementRef, EventEmitter, NgZone, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MultiViewGroupComponent implements AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    change: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private handleChange;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiViewGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiViewGroupComponent, "fabric-multi-view-group", never, {}, { "change": "change"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=multi-view-group.component.d.ts.map