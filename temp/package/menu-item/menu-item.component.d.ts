import { ElementRef, EventEmitter, NgZone, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Angular wrapper for the MenuItem web component
 *
 * The MenuItem component represents an item in a menu with various states and interactions.
 * It supports checked states, disabled states, and different roles.
 *
 * @example
 * <fabric-menu-item
 *   [role]="'menuitemcheckbox'"
 *   [checked]="isChecked"
 *   (change)="handleChange($event)">
 *   Menu Item Text
 * </fabric-menu-item>
 */
export declare class MenuItemComponent implements OnChanges, AfterViewInit, OnDestroy {
    private el;
    private z;
    /**
     * The checked state of the menu item.
     * This property supports two-way binding with [(checked)].
     */
    checked: boolean;
    /**
     * Event emitted when the checked state changes.
     * Used for two-way binding with [(checked)].
     */
    checkedChange: EventEmitter<boolean>;
    /**
     * Event emitted when the menu item changes.
     */
    change: EventEmitter<any>;
    /**
     * Handler for the change event from the web component.
     * Stored as a property for proper cleanup in ngOnDestroy.
     */
    private changeHandler;
    /**
     * Creates an instance of MenuItemComponent.
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
     * Ensures the web component's checked state stays in sync with Angular.
     * @param changes - SimpleChanges object containing changed properties
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Invokes the action associated with the menu item.
     * This is a proxy to the web component's invoke() method.
     */
    invoke(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuItemComponent, "fabric-menu-item", never, { "checked": "checked"; }, { "checkedChange": "checkedChange"; "change": "change"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=menu-item.component.d.ts.map