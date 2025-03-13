import { ElementRef, EventEmitter, NgZone, Renderer2, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { WizardStepState } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export declare class WizardStepComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    ordered: boolean;
    hideConnector: boolean;
    active: boolean;
    disabled: boolean;
    ariaDescribedby: string | undefined;
    ariaLabelledby: string | undefined;
    state: WizardStepState;
    stepchange: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    private handleStepchange;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WizardStepComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WizardStepComponent, "fabric-wizard-step", never, { "ordered": "ordered"; "hideConnector": "hideConnector"; "active": "active"; "disabled": "disabled"; "ariaDescribedby": "ariaDescribedby"; "ariaLabelledby": "ariaLabelledby"; "state": "state"; }, { "stepchange": "stepchange"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=wizard-step.component.d.ts.map