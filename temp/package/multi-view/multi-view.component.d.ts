import { ElementRef, EventEmitter, NgZone, Renderer2, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MultiViewComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    hidden: boolean;
    hiddenchanged: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    private handleHiddenchanged;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultiViewComponent, "fabric-multi-view", never, { "hidden": "hidden"; }, { "hiddenchanged": "hiddenchanged"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=multi-view.component.d.ts.map