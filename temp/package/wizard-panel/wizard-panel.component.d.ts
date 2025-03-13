import { ElementRef, EventEmitter, NgZone, Renderer2, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { WizardStepState } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export declare class WizardPanelComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    hidden: boolean;
    state: WizardStepState;
    active: boolean;
    id: string;
    slot: string;
    ariaLabel: string;
    ariaDescribedby: string;
    ariaLabelledby: string;
    panelchange: EventEmitter<any>;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    private handlePanelchange;
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WizardPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WizardPanelComponent, "fabric-wizard-panel", never, { "hidden": "hidden"; "state": "state"; "active": "active"; "id": "id"; "slot": "slot"; "ariaLabel": "ariaLabel"; "ariaDescribedby": "ariaDescribedby"; "ariaLabelledby": "ariaLabelledby"; }, { "panelchange": "panelchange"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=wizard-panel.component.d.ts.map