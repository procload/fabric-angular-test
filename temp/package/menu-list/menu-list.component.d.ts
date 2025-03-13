import { ElementRef, EventEmitter, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Angular wrapper for the MenuList web component
 *
 * The MenuList component manages a list of menu items with various interactions,
 * including keyboard navigation and nested menu support.
 *
 * @example
 * <fabric-menu-list (change)="handleChange($event)" (keydown)="handleKeyDown($event)">
 *   <fabric-menu-item>Item 1</fabric-menu-item>
 *   <fabric-menu-item>Item 2</fabric-menu-item>
 *   <fabric-menu-item role="menuitemcheckbox">Checkbox Item</fabric-menu-item>
 * </fabric-menu-list>
 */
export declare class MenuListComponent implements AfterViewInit, OnDestroy {
    private el;
    private z;
    /**
     * Event emitted when a menu item changes.
     */
    change: EventEmitter<any>;
    /**
     * Event emitted when a key is pressed down on the menu.
     */
    keydown: EventEmitter<any>;
    /**
     * Event emitted when an accordion menu item is expanded or collapsed.
     */
    expandedChange: EventEmitter<any>;
    /**
     * Handler for the change event from the web component.
     */
    private changeHandler;
    /**
     * Handler for the keydown event from the web component.
     */
    private keydownHandler;
    /**
     * Handler for the expanded-change event from the web component.
     */
    private expandedChangeHandler;
    /**
     * Creates an instance of MenuListComponent.
     * @param el - Reference to the native element
     * @param z - NgZone service for running code inside or outside Angular zone
     */
    constructor(el: ElementRef, z: NgZone);
    /**
     * After view initialization, sets up event listeners.
     * Runs event listeners outside Angular's zone for better performance.
     */
    ngAfterViewInit(): void;
    /**
     * Cleans up event listeners when the component is destroyed.
     * Prevents memory leaks by removing event listeners.
     */
    ngOnDestroy(): void;
    /**
     * Sets focus to the first menu item.
     * This is a proxy to the web component's focus() method.
     */
    focus(): void;
    /**
     * Clears the selections of radio and checkbox menu items.
     * This is a proxy to the web component's clearSelections() method.
     */
    clearSelections(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuListComponent, "fabric-menu-list", never, {}, { "change": "change"; "keydown": "keydown"; "expandedChange": "expandedChange"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=menu-list.component.d.ts.map