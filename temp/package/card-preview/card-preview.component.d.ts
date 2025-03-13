import { ElementRef, NgZone, Renderer2, OnInit, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CardPreviewComponent implements OnInit, OnChanges {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    fullWidth: boolean | undefined;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardPreviewComponent, "fabric-card-preview", never, { "fullWidth": "fullWidth"; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=card-preview.component.d.ts.map