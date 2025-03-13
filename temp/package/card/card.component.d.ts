import { ElementRef, EventEmitter, NgZone, Renderer2, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { CardFocusMode, CardAppearance, CardOrientation, CardSize } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export declare class CardComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    focusMode: CardFocusMode;
    appearance: CardAppearance;
    orientation: CardOrientation;
    size: CardSize;
    disabled: boolean;
    interactive: boolean;
    ariaDescribedby: string;
    ariaLabelledby: string;
    click: EventEmitter<any>;
    interactiveChanged: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    private handleClick;
    private handleInteractiveChanged;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "fabric-card", never, { "focusMode": "focusMode"; "appearance": "appearance"; "orientation": "orientation"; "size": "size"; "disabled": "disabled"; "interactive": "interactive"; "ariaDescribedby": "ariaDescribedby"; "ariaLabelledby": "ariaLabelledby"; }, { "click": "click"; "interactiveChanged": "interactiveChanged"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=card.component.d.ts.map