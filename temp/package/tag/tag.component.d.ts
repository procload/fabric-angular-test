import { ElementRef, EventEmitter, NgZone, Renderer2, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { TagSize, TagShape, TagAppearance } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export declare class TagComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    dismissButton: boolean;
    disabled: boolean;
    size: TagSize;
    shape: TagShape;
    appearance: TagAppearance;
    dismiss: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    private handleDismiss;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TagComponent, "fabric-tag", never, { "dismissButton": "dismissButton"; "disabled": "disabled"; "size": "size"; "shape": "shape"; "appearance": "appearance"; }, { "dismiss": "dismiss"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=tag.component.d.ts.map