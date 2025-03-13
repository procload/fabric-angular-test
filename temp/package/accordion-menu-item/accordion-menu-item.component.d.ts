import { ElementRef, EventEmitter, NgZone, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Angular wrapper for the AccordionMenuItem web component
 *
 * The AccordionMenuItem component provides expandable and collapsible sections
 * within an accordion menu. It supports two-way binding for the expanded state.
 *
 * @example
 * <fabric-accordion-menu-item
 *   [expanded]="isExpanded"
 *   (expandedChange)="isExpanded = $event"
 *   [disabled]="isDisabled"
 *   [headingLevel]="2"
 *   [size]="'medium'"
 *   [block]="true"
 *   [markerPosition]="'start'">
 *   <div slot="heading">Accordion Heading</div>
 *   <div>Accordion Content</div>
 * </fabric-accordion-menu-item>
 */
export declare class AccordionMenuItemComponent implements AfterViewInit, OnDestroy, OnChanges {
    private el;
    private z;
    /**
     * Controls whether the accordion item is expanded or collapsed.
     * This property supports two-way binding with [(expanded)].
     */
    expanded: boolean;
    /**
     * Event emitted when the expanded state changes.
     * Used for two-way binding with [(expanded)].
     */
    expandedChange: EventEmitter<boolean>;
    /**
     * Handler for the expanded-change event from the web component.
     * Stored as a property for proper cleanup in ngOnDestroy.
     */
    private expandedChangeHandler;
    /**
     * Creates an instance of AccordionMenuItemComponent.
     * @param el - Reference to the native element
     * @param z - NgZone service for running code inside or outside Angular zone
     */
    constructor(el: ElementRef, z: NgZone);
    /**
     * After view initialization, sets up event listeners and initial state.
     * Runs event listeners outside Angular's zone for better performance.
     */
    ngAfterViewInit(): void;
    /**
     * Cleans up event listeners when the component is destroyed.
     * Prevents memory leaks by removing event listeners.
     */
    ngOnDestroy(): void;
    /**
     * Handles changes to input properties.
     * Ensures the web component's expanded state stays in sync with Angular.
     * @param changes - SimpleChanges object containing changed properties
     */
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionMenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionMenuItemComponent, "fabric-accordion-menu-item", never, { "expanded": "expanded"; }, { "expandedChange": "expandedChange"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=accordion-menu-item.component.d.ts.map