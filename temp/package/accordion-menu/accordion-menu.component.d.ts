import { ElementRef, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Angular wrapper for the AccordionMenu web component
 *
 * The AccordionMenu component provides an interactive accordion interface,
 * allowing for expandable and collapsible sections.
 *
 * @example
 * <fabric-accordion-menu expandmode="single" (change)="handleChange($event)">
 *   <fabric-accordion-menu-item>Item 1</fabric-accordion-menu-item>
 *   <fabric-accordion-menu-item>Item 2</fabric-accordion-menu-item>
 * </fabric-accordion-menu>
 */
export declare class AccordionMenuComponent {
    private el;
    private z;
    /**
     * Creates an instance of AccordionMenuComponent.
     * @param el - Reference to the native element
     * @param z - NgZone service for running code inside or outside Angular zone
     */
    constructor(el: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionMenuComponent, "fabric-accordion-menu", never, {}, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=accordion-menu.component.d.ts.map