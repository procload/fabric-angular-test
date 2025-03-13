import { ElementRef, NgZone, Renderer2, OnInit, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CarouselComponent implements OnInit, OnChanges {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    disableAnimation: boolean;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CarouselComponent, "fabric-carousel", never, { "disableAnimation": "disableAnimation"; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=carousel.component.d.ts.map