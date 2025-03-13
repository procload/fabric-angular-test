import { ElementRef, EventEmitter, NgZone, Renderer2, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class WizardComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    ordered: boolean;
    disableOnComplete: boolean;
    currentIndex: number;
    ariaLabelledby: string;
    ariaDescribedby: string;
    wizardchange: EventEmitter<any>;
    wizardcomplete: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    private handleWizardchange;
    private handleWizardcomplete;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WizardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WizardComponent, "fabric-wizard", never, { "ordered": "ordered"; "disableOnComplete": "disableOnComplete"; "currentIndex": "currentIndex"; "ariaLabelledby": "ariaLabelledby"; "ariaDescribedby": "ariaDescribedby"; }, { "wizardchange": "wizardchange"; "wizardcomplete": "wizardcomplete"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=wizard.component.d.ts.map