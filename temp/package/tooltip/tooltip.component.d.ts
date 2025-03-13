import { ElementRef, EventEmitter, NgZone, Renderer2, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { PositioningShorthandValues } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export declare class TooltipComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    position: PositioningShorthandValues;
    open: boolean;
    beak: boolean;
    targetId: string;
    transitionDuration: number;
    transitionDelay: number;
    hidePopover: EventEmitter<any>;
    showPopover: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    private transformPosition;
    private handleHidePopover;
    private handleShowPopover;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipComponent, "fabric-tooltip", never, { "position": "position"; "open": "open"; "beak": "beak"; "targetId": "targetId"; "transitionDuration": "transitionDuration"; "transitionDelay": "transitionDelay"; }, { "hidePopover": "hidePopover"; "showPopover": "showPopover"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=tooltip.component.d.ts.map