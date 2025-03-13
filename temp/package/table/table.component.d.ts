import { ElementRef, NgZone, Renderer2, OnInit, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TableComponent implements OnInit, OnChanges {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    sortable: boolean;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "fabric-table", never, { "sortable": "sortable"; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=table.component.d.ts.map