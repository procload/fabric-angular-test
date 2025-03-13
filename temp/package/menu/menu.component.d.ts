import { ElementRef, EventEmitter, NgZone, Renderer2, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MenuComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    openOnHover: boolean;
    openOnContext: boolean;
    closeOnScroll: boolean;
    persistOnItemClick: boolean;
    toggle: EventEmitter<any>;
    change: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    private handleToggle;
    private handleChange;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuComponent, "fabric-menu", never, { "openOnHover": "openOnHover"; "openOnContext": "openOnContext"; "closeOnScroll": "closeOnScroll"; "persistOnItemClick": "persistOnItemClick"; }, { "toggle": "toggle"; "change": "change"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=menu.component.d.ts.map