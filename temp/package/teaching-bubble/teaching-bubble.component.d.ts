import { ElementRef, EventEmitter, NgZone, Renderer2, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { TeachingBubblePlacement, TeachingBubbleSize } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export declare class TeachingBubbleComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    target: string;
    placement: TeachingBubblePlacement;
    open: boolean;
    disableTrapFocus: boolean;
    size: TeachingBubbleSize;
    openchange: EventEmitter<any>;
    dismiss: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    private handleOpenchange;
    private handleDismiss;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TeachingBubbleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TeachingBubbleComponent, "fabric-teaching-bubble", never, { "target": "target"; "placement": "placement"; "open": "open"; "disableTrapFocus": "disableTrapFocus"; "size": "size"; }, { "openchange": "openchange"; "dismiss": "dismiss"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=teaching-bubble.component.d.ts.map