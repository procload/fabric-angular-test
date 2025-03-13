import { ElementRef, EventEmitter, NgZone, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TableCellComponent implements AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    hiddenchange: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private handleHiddenchange;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableCellComponent, "fabric-table-cell", never, {}, { "hiddenchange": "hiddenchange"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=table-cell.component.d.ts.map