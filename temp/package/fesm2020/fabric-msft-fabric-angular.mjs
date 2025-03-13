import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { EventEmitter, Component, ChangeDetectionStrategy, NgModule, Input, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AccordionMenuDefinition, AccordionMenuItemDefinition, ButtonDefinition, FilterPillDefinition, LoadingButtonDefinition, CardDefinition, CardFooterDefinition, CardHeaderDefinition, CardPreviewDefinition, CarouselDefinition, MenuButtonDefinition, MenuItemDefinition, MenuListDefinition, MenuDefinition, PopoverDefinition, MessageBarDefinition, MultiViewControllerDefinition, MultiViewGroupDefinition, MultiViewDefinition, SvgIconDefinition, TagDefinition, TeachingBubbleDefinition, TableDefinition, TableCellDefinition, TooltipDefinition, WizardPanelDefinition, WizardStepDefinition, WizardDefinition } from '@fabric-msft/fabric-web';
export { fabricDarkTheme, fabricLightTheme, setTheme, webDarkTheme, webLightTheme } from '@fabric-msft/theme';

/**
 * proxyInputs
 *
 * Dynamically maps Angular inputs to web component properties and attributes.
 * Updates both the JavaScript property (`this.el[item]`) and the HTML attribute (`this.el.setAttribute(item, val)`).
 *
 * @param Cmp - The Angular component class.
 * @param inputs - List of input property names.
 */
const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el?.nativeElement?.[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => {
                    if (this.el?.nativeElement) {
                        this.el.nativeElement[item] = val;
                        this.el.nativeElement.setAttribute(item, val);
                    }
                });
            }
        });
    });
};
/**
 * proxyMethods
 *
 * Binds Angular methods to corresponding web component methods.
 * Runs method execution outside Angular's change detection.
 *
 * @param Cmp - The Angular component class.
 * @param methods - List of method names to proxy.
 */
const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function (...args) {
            return this.z.runOutsideAngular(() => this.el.nativeElement[methodName](...args));
        };
    });
};
/**
 * proxyOutputs
 *
 * Binds Angular event outputs to web component events using RxJS's `fromEvent()`.
 * Ensures event cleanup when the component is destroyed.
 *
 * @param instance - The Angular component instance.
 * @param el - The web component element.
 * @param events - List of event names to bind.
 */
const proxyOutputs = (instance, el, events) => {
    if (!el)
        return;
    instance.__eventSubscriptions = events.map((eventName) => {
        if (!instance[eventName + 'Event']) {
            instance[eventName + 'Event'] = new EventEmitter();
        }
        const event$ = fromEvent(el, eventName);
        return event$.subscribe((event) => instance.z.run(() => instance[eventName + 'Event'].emit(event)));
    });
};
/**
 * cleanupOutputs
 *
 * Cleans up event listeners to prevent memory leaks.
 *
 * @param instance - The Angular component instance.
 */
const cleanupOutputs = (instance) => {
    if (instance.__eventSubscriptions) {
        instance.__eventSubscriptions.forEach((sub) => sub.unsubscribe());
    }
};
/**
 * ProxyCmp Decorator
 *
 * - Defines the custom element (if applicable).
 * - Applies `proxyInputs()` for one-way binding.
 * - Applies `proxyMethods()` for public method exposure.
 * - Applies `proxyOutputs()` for event binding.
 *
 * @param opts - Configuration options.
 */
function ProxyCmp(opts) {
    return function (cls) {
        const { defineCustomElementFn, inputs, methods, outputs } = opts;
        if (defineCustomElementFn) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        if (outputs) {
            const originalNgOnInit = cls.prototype.ngOnInit;
            const originalNgOnDestroy = cls.prototype.ngOnDestroy;
            cls.prototype.ngOnInit = function () {
                if (this.el?.nativeElement) {
                    proxyOutputs(this, this.el.nativeElement, outputs);
                }
                if (originalNgOnInit) {
                    originalNgOnInit.apply(this);
                }
            };
            cls.prototype.ngOnDestroy = function () {
                cleanupOutputs(this);
                if (originalNgOnDestroy) {
                    originalNgOnDestroy.apply(this);
                }
            };
        }
        return cls;
    };
}

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
let AccordionMenuComponent = class AccordionMenuComponent {
    /**
     * Creates an instance of AccordionMenuComponent.
     * @param el - Reference to the native element
     * @param z - NgZone service for running code inside or outside Angular zone
     */
    constructor(el, z) {
        this.el = el;
        this.z = z;
    }
};
AccordionMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
AccordionMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: AccordionMenuComponent, selector: "fabric-accordion-menu", ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
AccordionMenuComponent = __decorate([
    ProxyCmp({
        // Using the exact property name from the web component
        inputs: ['expandmode'],
        // Proxy the change event that's emitted when items expand/collapse
        outputs: ['change']
    })
], AccordionMenuComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-accordion-menu',
                    template: `
    <ng-content></ng-content>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; } });

class AccordionMenuProxyModule {
    constructor() {
        // ✅ Now defining the custom element only if needed
        if (!customElements.get('fabric-accordion-menu')) {
            AccordionMenuDefinition.define();
        }
    }
}
AccordionMenuProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AccordionMenuProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuProxyModule, declarations: [AccordionMenuComponent], imports: [CommonModule], exports: [AccordionMenuComponent] });
AccordionMenuProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AccordionMenuComponent],
                    imports: [CommonModule],
                    exports: [AccordionMenuComponent]
                }]
        }], ctorParameters: function () { return []; } });

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
let AccordionMenuItemComponent = class AccordionMenuItemComponent {
    /**
     * Creates an instance of AccordionMenuItemComponent.
     * @param el - Reference to the native element
     * @param z - NgZone service for running code inside or outside Angular zone
     */
    constructor(el, z) {
        this.el = el;
        this.z = z;
        /**
         * Controls whether the accordion item is expanded or collapsed.
         * This property supports two-way binding with [(expanded)].
         */
        this.expanded = false;
        /**
         * Event emitted when the expanded state changes.
         * Used for two-way binding with [(expanded)].
         */
        this.expandedChange = new EventEmitter();
        this.expandedChangeHandler = (event) => {
            const customEvent = event;
            this.z.run(() => {
                // Extract the value from the event
                this.expanded = customEvent.detail.expanded;
                this.expandedChange.emit(this.expanded);
            });
        };
    }
    /**
     * After view initialization, sets up event listeners and initial state.
     * Runs event listeners outside Angular's zone for better performance.
     */
    ngAfterViewInit() {
        // Set initial value
        if (this.el.nativeElement) {
            this.el.nativeElement.expanded = this.expanded;
        }
        this.z.runOutsideAngular(() => {
            this.el.nativeElement.addEventListener('expanded-change', this.expandedChangeHandler);
        });
    }
    /**
     * Cleans up event listeners when the component is destroyed.
     * Prevents memory leaks by removing event listeners.
     */
    ngOnDestroy() {
        if (this.el.nativeElement) {
            this.el.nativeElement.removeEventListener('expanded-change', this.expandedChangeHandler);
        }
    }
    /**
     * Handles changes to input properties.
     * Ensures the web component's expanded state stays in sync with Angular.
     * @param changes - SimpleChanges object containing changed properties
     */
    ngOnChanges(changes) {
        if (changes['expanded'] && this.el.nativeElement) {
            this.el.nativeElement.expanded = this.expanded;
        }
    }
};
AccordionMenuItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuItemComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
AccordionMenuItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: AccordionMenuItemComponent, selector: "fabric-accordion-menu-item", inputs: { expanded: "expanded" }, outputs: { expandedChange: "expandedChange" }, usesOnChanges: true, ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
AccordionMenuItemComponent = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'headingLevel', 'size', 'block', 'markerPosition']
        // Note: We don't proxy 'expanded-change' here because we handle it manually for two-way binding
    })
], AccordionMenuItemComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-accordion-menu-item',
                    template: `
    <ng-content></ng-content>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { expanded: [{
                type: Input
            }], expandedChange: [{
                type: Output
            }] } });

class AccordionMenuItemProxyModule {
    constructor() {
        // ✅ Only define the custom element if it hasn’t been registered yet
        if (!customElements.get('fabric-accordion-menu-item')) {
            AccordionMenuItemDefinition.define();
        }
    }
}
AccordionMenuItemProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuItemProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AccordionMenuItemProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuItemProxyModule, declarations: [AccordionMenuItemComponent], imports: [CommonModule], exports: [AccordionMenuItemComponent] });
AccordionMenuItemProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuItemProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: AccordionMenuItemProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AccordionMenuItemComponent],
                    imports: [CommonModule],
                    exports: [AccordionMenuItemComponent]
                }]
        }], ctorParameters: function () { return []; } });

class ButtonComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.disabledFocusable = false;
        this.iconOnly = false;
        this.click = new EventEmitter();
        this.keypress = new EventEmitter();
        this.handleClick = (event) => {
            this.zone.run(() => {
                this.click.emit(event.detail);
            });
        };
        this.handleKeypress = (event) => {
            this.zone.run(() => {
                this.keypress.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.appearance) {
            this.renderer.setAttribute(nativeElement, 'appearance', String(this.appearance));
        }
        if (this.autofocus) {
            this.renderer.setAttribute(nativeElement, 'autofocus', '');
        }
        if (this.disabled) {
            this.renderer.setAttribute(nativeElement, 'disabled', '');
        }
        if (this.disabledFocusable) {
            this.renderer.setAttribute(nativeElement, 'disabled-focusable', '');
        }
        if (this.formaction) {
            this.renderer.setAttribute(nativeElement, 'formaction', String(this.formaction));
        }
        if (this.form) {
            this.renderer.setAttribute(nativeElement, 'form', String(this.form));
        }
        if (this.formenctype) {
            this.renderer.setAttribute(nativeElement, 'formenctype', String(this.formenctype));
        }
        if (this.formmethod) {
            this.renderer.setAttribute(nativeElement, 'formmethod', String(this.formmethod));
        }
        if (this.formnovalidate) {
            this.renderer.setAttribute(nativeElement, 'formnovalidate', '');
        }
        if (this.formtarget) {
            this.renderer.setAttribute(nativeElement, 'formtarget', String(this.formtarget));
        }
        if (this.iconOnly) {
            this.renderer.setAttribute(nativeElement, 'icon-only', '');
        }
        if (this.name) {
            this.renderer.setAttribute(nativeElement, 'name', String(this.name));
        }
        if (this.shape) {
            this.renderer.setAttribute(nativeElement, 'shape', String(this.shape));
        }
        if (this.size) {
            this.renderer.setAttribute(nativeElement, 'size', String(this.size));
        }
        if (this.type) {
            this.renderer.setAttribute(nativeElement, 'type', String(this.type));
        }
        if (this.value) {
            this.renderer.setAttribute(nativeElement, 'value', String(this.value));
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('click', this.handleClick);
        this.el.nativeElement.addEventListener('keypress', this.handleKeypress);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('click', this.handleClick);
        this.el.nativeElement.removeEventListener('keypress', this.handleKeypress);
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: ButtonComponent, selector: "fabric-button", inputs: { appearance: "appearance", autofocus: "autofocus", disabled: "disabled", disabledFocusable: "disabledFocusable", formaction: "formaction", form: "form", formenctype: "formenctype", formmethod: "formmethod", formnovalidate: "formnovalidate", formtarget: "formtarget", iconOnly: "iconOnly", name: "name", shape: "shape", size: "size", type: "type", value: "value" }, outputs: { click: "click", keypress: "keypress" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-button',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { appearance: [{
                type: Input
            }], autofocus: [{
                type: Input
            }], disabled: [{
                type: Input
            }], disabledFocusable: [{
                type: Input
            }], formaction: [{
                type: Input
            }], form: [{
                type: Input
            }], formenctype: [{
                type: Input
            }], formmethod: [{
                type: Input
            }], formnovalidate: [{
                type: Input
            }], formtarget: [{
                type: Input
            }], iconOnly: [{
                type: Input
            }], name: [{
                type: Input
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], type: [{
                type: Input
            }], value: [{
                type: Input
            }], click: [{
                type: Output
            }], keypress: [{
                type: Output
            }] } });

class ButtonProxyModule {
    constructor() {
        ButtonDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
ButtonProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ButtonProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: ButtonProxyModule, declarations: [ButtonComponent], imports: [CommonModule], exports: [ButtonComponent] });
ButtonProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ButtonProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ButtonProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonComponent],
                    imports: [CommonModule],
                    exports: [ButtonComponent]
                }]
        }], ctorParameters: function () { return []; } });

class FilterPillComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.role = "button";
        this.iconOnly = false;
        this.disabledFocusable = false;
        this.pressedchange = new EventEmitter();
        this.click = new EventEmitter();
        this.keypress = new EventEmitter();
        this.handlePressedchange = (event) => {
            this.zone.run(() => {
                this.pressedchange.emit(event.detail);
            });
        };
        this.handleClick = (event) => {
            this.zone.run(() => {
                this.click.emit(event.detail);
            });
        };
        this.handleKeypress = (event) => {
            this.zone.run(() => {
                this.keypress.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.appearance) {
            this.renderer.setAttribute(nativeElement, 'appearance', String(this.appearance));
        }
        if (this.shape) {
            this.renderer.setAttribute(nativeElement, 'shape', String(this.shape));
        }
        if (this.size) {
            this.renderer.setAttribute(nativeElement, 'size', String(this.size));
        }
        if (this.iconOnly) {
            this.renderer.setAttribute(nativeElement, 'icon-only', '');
        }
        if (this.pressed) {
            this.renderer.setAttribute(nativeElement, 'pressed', '');
        }
        if (this.mixed) {
            this.renderer.setAttribute(nativeElement, 'mixed', '');
        }
        if (this.ariaPressed) {
            this.renderer.setAttribute(nativeElement, 'aria-pressed', String(this.ariaPressed));
        }
        if (this.ariaLabel) {
            this.renderer.setAttribute(nativeElement, 'aria-label', String(this.ariaLabel));
        }
        if (this.autofocus) {
            this.renderer.setAttribute(nativeElement, 'autofocus', '');
        }
        if (this.disabled) {
            this.renderer.setAttribute(nativeElement, 'disabled', '');
        }
        if (this.disabledFocusable) {
            this.renderer.setAttribute(nativeElement, 'disabled-focusable', '');
        }
        if (this.formaction) {
            this.renderer.setAttribute(nativeElement, 'formaction', String(this.formaction));
        }
        if (this.form) {
            this.renderer.setAttribute(nativeElement, 'form', String(this.form));
        }
        if (this.formenctype) {
            this.renderer.setAttribute(nativeElement, 'formenctype', String(this.formenctype));
        }
        if (this.formmethod) {
            this.renderer.setAttribute(nativeElement, 'formmethod', String(this.formmethod));
        }
        if (this.formnovalidate) {
            this.renderer.setAttribute(nativeElement, 'formnovalidate', String(this.formnovalidate));
        }
        if (this.formtarget) {
            this.renderer.setAttribute(nativeElement, 'formtarget', String(this.formtarget));
        }
        if (this.name) {
            this.renderer.setAttribute(nativeElement, 'name', String(this.name));
        }
        if (this.type) {
            this.renderer.setAttribute(nativeElement, 'type', String(this.type));
        }
        if (this.value) {
            this.renderer.setAttribute(nativeElement, 'value', String(this.value));
        }
        if (this.role) {
            this.renderer.setAttribute(nativeElement, 'role', this.role);
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('pressedchange', this.handlePressedchange);
        this.el.nativeElement.addEventListener('click', this.handleClick);
        this.el.nativeElement.addEventListener('keypress', this.handleKeypress);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('pressedchange', this.handlePressedchange);
        this.el.nativeElement.removeEventListener('click', this.handleClick);
        this.el.nativeElement.removeEventListener('keypress', this.handleKeypress);
    }
}
FilterPillComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterPillComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
FilterPillComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: FilterPillComponent, selector: "fabric-filter-pill", inputs: { role: "role", appearance: "appearance", shape: "shape", size: "size", iconOnly: "iconOnly", pressed: "pressed", mixed: "mixed", ariaPressed: "ariaPressed", ariaLabel: "ariaLabel", autofocus: "autofocus", disabled: "disabled", disabledFocusable: "disabledFocusable", formaction: "formaction", form: "form", formenctype: "formenctype", formmethod: "formmethod", formnovalidate: "formnovalidate", formtarget: "formtarget", name: "name", type: "type", value: "value" }, outputs: { pressedchange: "pressedchange", click: "click", keypress: "keypress" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterPillComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-filter-pill',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { role: [{
                type: Input
            }], appearance: [{
                type: Input
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], iconOnly: [{
                type: Input
            }], pressed: [{
                type: Input
            }], mixed: [{
                type: Input
            }], ariaPressed: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], autofocus: [{
                type: Input
            }], disabled: [{
                type: Input
            }], disabledFocusable: [{
                type: Input
            }], formaction: [{
                type: Input
            }], form: [{
                type: Input
            }], formenctype: [{
                type: Input
            }], formmethod: [{
                type: Input
            }], formnovalidate: [{
                type: Input
            }], formtarget: [{
                type: Input
            }], name: [{
                type: Input
            }], type: [{
                type: Input
            }], value: [{
                type: Input
            }], pressedchange: [{
                type: Output
            }], click: [{
                type: Output
            }], keypress: [{
                type: Output
            }] } });

class FilterPillProxyModule {
    constructor() {
        FilterPillDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
FilterPillProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterPillProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FilterPillProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: FilterPillProxyModule, declarations: [FilterPillComponent], imports: [CommonModule], exports: [FilterPillComponent] });
FilterPillProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterPillProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterPillProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FilterPillComponent],
                    imports: [CommonModule],
                    exports: [FilterPillComponent]
                }]
        }], ctorParameters: function () { return []; } });

class LoadingButtonComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.loading = false;
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.loading) {
            this.renderer.setAttribute(nativeElement, 'loading', '');
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
}
LoadingButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LoadingButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
LoadingButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: LoadingButtonComponent, selector: "fabric-loading-button", inputs: { loading: "loading" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LoadingButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-loading-button',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { loading: [{
                type: Input
            }] } });

class LoadingButtonProxyModule {
    constructor() {
        LoadingButtonDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
LoadingButtonProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LoadingButtonProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LoadingButtonProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: LoadingButtonProxyModule, declarations: [LoadingButtonComponent], imports: [CommonModule], exports: [LoadingButtonComponent] });
LoadingButtonProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LoadingButtonProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: LoadingButtonProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LoadingButtonComponent],
                    imports: [CommonModule],
                    exports: [LoadingButtonComponent]
                }]
        }], ctorParameters: function () { return []; } });

class CardComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.disabled = false;
        this.interactive = false;
        this.click = new EventEmitter();
        this.interactiveChanged = new EventEmitter();
        this.handleClick = (event) => {
            this.zone.run(() => {
                this.click.emit(event.detail);
            });
        };
        this.handleInteractiveChanged = (event) => {
            this.zone.run(() => {
                this.interactiveChanged.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.focusMode) {
            this.renderer.setAttribute(nativeElement, 'focus-mode', String(this.focusMode));
        }
        if (this.appearance) {
            this.renderer.setAttribute(nativeElement, 'appearance', String(this.appearance));
        }
        if (this.orientation) {
            this.renderer.setAttribute(nativeElement, 'orientation', String(this.orientation));
        }
        if (this.size) {
            this.renderer.setAttribute(nativeElement, 'size', String(this.size));
        }
        if (this.disabled) {
            this.renderer.setAttribute(nativeElement, 'disabled', '');
        }
        if (this.interactive) {
            this.renderer.setAttribute(nativeElement, 'interactive', '');
        }
        if (this.ariaDescribedby) {
            this.renderer.setAttribute(nativeElement, 'aria-describedby', String(this.ariaDescribedby));
        }
        if (this.ariaLabelledby) {
            this.renderer.setAttribute(nativeElement, 'aria-labelledby', String(this.ariaLabelledby));
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('click', this.handleClick);
        this.el.nativeElement.addEventListener('interactiveChanged', this.handleInteractiveChanged);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('click', this.handleClick);
        this.el.nativeElement.removeEventListener('interactiveChanged', this.handleInteractiveChanged);
    }
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: CardComponent, selector: "fabric-card", inputs: { focusMode: "focusMode", appearance: "appearance", orientation: "orientation", size: "size", disabled: "disabled", interactive: "interactive", ariaDescribedby: "ariaDescribedby", ariaLabelledby: "ariaLabelledby" }, outputs: { click: "click", interactiveChanged: "interactiveChanged" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-card',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { focusMode: [{
                type: Input
            }], appearance: [{
                type: Input
            }], orientation: [{
                type: Input
            }], size: [{
                type: Input
            }], disabled: [{
                type: Input
            }], interactive: [{
                type: Input
            }], ariaDescribedby: [{
                type: Input
            }], ariaLabelledby: [{
                type: Input
            }], click: [{
                type: Output
            }], interactiveChanged: [{
                type: Output
            }] } });

class CardProxyModule {
    constructor() {
        CardDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
CardProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: CardProxyModule, declarations: [CardComponent], imports: [CommonModule], exports: [CardComponent] });
CardProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CardComponent],
                    imports: [CommonModule],
                    exports: [CardComponent]
                }]
        }], ctorParameters: function () { return []; } });

class CardFooterComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.zone = ngZone;
    }
}
CardFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardFooterComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
CardFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: CardFooterComponent, selector: "fabric-card-footer", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-card-footer',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; } });

class CardFooterProxyModule {
    constructor() {
        CardFooterDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
CardFooterProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardFooterProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardFooterProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: CardFooterProxyModule, declarations: [CardFooterComponent], imports: [CommonModule], exports: [CardFooterComponent] });
CardFooterProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardFooterProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardFooterProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CardFooterComponent],
                    imports: [CommonModule],
                    exports: [CardFooterComponent]
                }]
        }], ctorParameters: function () { return []; } });

class CardHeaderComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.zone = ngZone;
    }
}
CardHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardHeaderComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
CardHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: CardHeaderComponent, selector: "fabric-card-header", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-card-header',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; } });

class CardHeaderProxyModule {
    constructor() {
        CardHeaderDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
CardHeaderProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardHeaderProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardHeaderProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: CardHeaderProxyModule, declarations: [CardHeaderComponent], imports: [CommonModule], exports: [CardHeaderComponent] });
CardHeaderProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardHeaderProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardHeaderProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CardHeaderComponent],
                    imports: [CommonModule],
                    exports: [CardHeaderComponent]
                }]
        }], ctorParameters: function () { return []; } });

class CardPreviewComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.fullWidth) {
            this.renderer.setAttribute(nativeElement, 'full-width', String(this.fullWidth));
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
}
CardPreviewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardPreviewComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
CardPreviewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: CardPreviewComponent, selector: "fabric-card-preview", inputs: { fullWidth: "fullWidth" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardPreviewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-card-preview',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { fullWidth: [{
                type: Input
            }] } });

class CardPreviewProxyModule {
    constructor() {
        CardPreviewDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
CardPreviewProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardPreviewProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CardPreviewProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: CardPreviewProxyModule, declarations: [CardPreviewComponent], imports: [CommonModule], exports: [CardPreviewComponent] });
CardPreviewProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardPreviewProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CardPreviewProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CardPreviewComponent],
                    imports: [CommonModule],
                    exports: [CardPreviewComponent]
                }]
        }], ctorParameters: function () { return []; } });

class CarouselComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.disableAnimation) {
            this.renderer.setAttribute(nativeElement, 'disable-animation', '');
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
}
CarouselComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CarouselComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
CarouselComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: CarouselComponent, selector: "fabric-carousel", inputs: { disableAnimation: "disableAnimation" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-carousel',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { disableAnimation: [{
                type: Input
            }] } });

class CarouselProxyModule {
    constructor() {
        CarouselDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
CarouselProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CarouselProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CarouselProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: CarouselProxyModule, declarations: [CarouselComponent], imports: [CommonModule], exports: [CarouselComponent] });
CarouselProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CarouselProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CarouselProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CarouselComponent],
                    imports: [CommonModule],
                    exports: [CarouselComponent]
                }]
        }], ctorParameters: function () { return []; } });

class MenuButtonComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.disabledFocusable = false;
        this.iconOnly = false;
        this.click = new EventEmitter();
        this.keypress = new EventEmitter();
        this.handleClick = (event) => {
            this.zone.run(() => {
                this.click.emit(event.detail);
            });
        };
        this.handleKeypress = (event) => {
            this.zone.run(() => {
                this.keypress.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.disabled) {
            this.renderer.setAttribute(nativeElement, 'disabled', '');
        }
        if (this.appearance) {
            this.renderer.setAttribute(nativeElement, 'appearance', String(this.appearance));
        }
        if (this.autofocus) {
            this.renderer.setAttribute(nativeElement, 'autofocus', '');
        }
        if (this.disabledFocusable) {
            this.renderer.setAttribute(nativeElement, 'disabled-focusable', '');
        }
        if (this.formaction) {
            this.renderer.setAttribute(nativeElement, 'formaction', String(this.formaction));
        }
        if (this.form) {
            this.renderer.setAttribute(nativeElement, 'form', String(this.form));
        }
        if (this.formenctype) {
            this.renderer.setAttribute(nativeElement, 'formenctype', String(this.formenctype));
        }
        if (this.formmethod) {
            this.renderer.setAttribute(nativeElement, 'formmethod', String(this.formmethod));
        }
        if (this.formnovalidate) {
            this.renderer.setAttribute(nativeElement, 'formnovalidate', String(this.formnovalidate));
        }
        if (this.formtarget) {
            this.renderer.setAttribute(nativeElement, 'formtarget', String(this.formtarget));
        }
        if (this.iconOnly) {
            this.renderer.setAttribute(nativeElement, 'icon-only', '');
        }
        if (this.name) {
            this.renderer.setAttribute(nativeElement, 'name', String(this.name));
        }
        if (this.shape) {
            this.renderer.setAttribute(nativeElement, 'shape', String(this.shape));
        }
        if (this.size) {
            this.renderer.setAttribute(nativeElement, 'size', String(this.size));
        }
        if (this.type) {
            this.renderer.setAttribute(nativeElement, 'type', String(this.type));
        }
        if (this.value) {
            this.renderer.setAttribute(nativeElement, 'value', String(this.value));
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('click', this.handleClick);
        this.el.nativeElement.addEventListener('keypress', this.handleKeypress);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('click', this.handleClick);
        this.el.nativeElement.removeEventListener('keypress', this.handleKeypress);
    }
}
MenuButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
MenuButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: MenuButtonComponent, selector: "fabric-menu-button", inputs: { disabled: "disabled", appearance: "appearance", autofocus: "autofocus", disabledFocusable: "disabledFocusable", formaction: "formaction", form: "form", formenctype: "formenctype", formmethod: "formmethod", formnovalidate: "formnovalidate", formtarget: "formtarget", iconOnly: "iconOnly", name: "name", shape: "shape", size: "size", type: "type", value: "value" }, outputs: { click: "click", keypress: "keypress" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-menu-button',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { disabled: [{
                type: Input
            }], appearance: [{
                type: Input
            }], autofocus: [{
                type: Input
            }], disabledFocusable: [{
                type: Input
            }], formaction: [{
                type: Input
            }], form: [{
                type: Input
            }], formenctype: [{
                type: Input
            }], formmethod: [{
                type: Input
            }], formnovalidate: [{
                type: Input
            }], formtarget: [{
                type: Input
            }], iconOnly: [{
                type: Input
            }], name: [{
                type: Input
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], type: [{
                type: Input
            }], value: [{
                type: Input
            }], click: [{
                type: Output
            }], keypress: [{
                type: Output
            }] } });

class MenuButtonProxyModule {
    constructor() {
        MenuButtonDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
MenuButtonProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuButtonProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MenuButtonProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: MenuButtonProxyModule, declarations: [MenuButtonComponent], imports: [CommonModule], exports: [MenuButtonComponent] });
MenuButtonProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuButtonProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuButtonProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MenuButtonComponent],
                    imports: [CommonModule],
                    exports: [MenuButtonComponent]
                }]
        }], ctorParameters: function () { return []; } });

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
let MenuItemComponent = class MenuItemComponent {
    /**
     * Creates an instance of MenuItemComponent.
     * @param el - Reference to the native element
     * @param z - NgZone service for running code inside or outside Angular zone
     */
    constructor(el, z) {
        this.el = el;
        this.z = z;
        /**
         * The checked state of the menu item.
         * This property supports two-way binding with [(checked)].
         */
        this.checked = false;
        /**
         * Event emitted when the checked state changes.
         * Used for two-way binding with [(checked)].
         */
        this.checkedChange = new EventEmitter();
        /**
         * Event emitted when the menu item changes.
         */
        this.change = new EventEmitter();
        this.changeHandler = (event) => {
            const customEvent = event;
            this.z.run(() => {
                // Update the checked state if the role is checkable
                const nativeElement = this.el.nativeElement;
                const role = nativeElement.role;
                if (role === 'menuitemcheckbox' || role === 'menuitemradio') {
                    this.checked = nativeElement.checked;
                    this.checkedChange.emit(this.checked);
                }
                // Emit the change event
                this.change.emit(customEvent.detail);
            });
        };
    }
    /**
     * After view initialization, sets up event listeners and initial state.
     * Runs event listeners outside Angular's zone for better performance.
     */
    ngAfterViewInit() {
        // Set initial checked value
        if (this.el.nativeElement) {
            this.el.nativeElement.checked = this.checked;
        }
        this.z.runOutsideAngular(() => {
            this.el.nativeElement.addEventListener('change', this.changeHandler);
        });
    }
    /**
     * Cleans up event listeners when the component is destroyed.
     * Prevents memory leaks by removing event listeners.
     */
    ngOnDestroy() {
        if (this.el.nativeElement) {
            this.el.nativeElement.removeEventListener('change', this.changeHandler);
        }
    }
    /**
     * Handles changes to input properties.
     * Ensures the web component's checked state stays in sync with Angular.
     * @param changes - SimpleChanges object containing changed properties
     */
    ngOnChanges(changes) {
        if (changes['checked'] && this.el.nativeElement) {
            this.el.nativeElement.checked = this.checked;
        }
    }
    /**
     * Invokes the action associated with the menu item.
     * This is a proxy to the web component's invoke() method.
     */
    invoke() {
        this.z.runOutsideAngular(() => {
            this.el.nativeElement.invoke();
        });
    }
};
MenuItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuItemComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
MenuItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: MenuItemComponent, selector: "fabric-menu-item", inputs: { checked: "checked" }, outputs: { checkedChange: "checkedChange", change: "change" }, usesOnChanges: true, ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
MenuItemComponent = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'role', 'hidden']
        // Note: We don't proxy 'checked' here because we handle it manually for two-way binding
    })
], MenuItemComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-menu-item',
                    template: `
    <ng-content></ng-content>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { checked: [{
                type: Input
            }], checkedChange: [{
                type: Output
            }], change: [{
                type: Output
            }] } });

class MenuItemProxyModule {
    constructor() {
        MenuItemDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
MenuItemProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuItemProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MenuItemProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: MenuItemProxyModule, declarations: [MenuItemComponent], imports: [CommonModule], exports: [MenuItemComponent] });
MenuItemProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuItemProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuItemProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MenuItemComponent],
                    imports: [CommonModule],
                    exports: [MenuItemComponent]
                }]
        }], ctorParameters: function () { return []; } });

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
class MenuListComponent {
    /**
     * Creates an instance of MenuListComponent.
     * @param el - Reference to the native element
     * @param z - NgZone service for running code inside or outside Angular zone
     */
    constructor(el, z) {
        this.el = el;
        this.z = z;
        /**
         * Event emitted when a menu item changes.
         */
        this.change = new EventEmitter();
        /**
         * Event emitted when a key is pressed down on the menu.
         */
        this.keydown = new EventEmitter();
        /**
         * Event emitted when an accordion menu item is expanded or collapsed.
         */
        this.expandedChange = new EventEmitter();
        this.changeHandler = (event) => {
            const customEvent = event;
            this.z.run(() => {
                this.change.emit(customEvent.detail);
            });
        };
        this.keydownHandler = (event) => {
            const keyboardEvent = event;
            this.z.run(() => {
                this.keydown.emit(keyboardEvent);
            });
        };
        this.expandedChangeHandler = (event) => {
            const customEvent = event;
            this.z.run(() => {
                this.expandedChange.emit(customEvent.detail);
            });
        };
    }
    /**
     * After view initialization, sets up event listeners.
     * Runs event listeners outside Angular's zone for better performance.
     */
    ngAfterViewInit() {
        this.z.runOutsideAngular(() => {
            this.el.nativeElement.addEventListener('change', this.changeHandler);
            this.el.nativeElement.addEventListener('keydown', this.keydownHandler);
            this.el.nativeElement.addEventListener('expanded-change', this.expandedChangeHandler);
        });
    }
    /**
     * Cleans up event listeners when the component is destroyed.
     * Prevents memory leaks by removing event listeners.
     */
    ngOnDestroy() {
        if (this.el.nativeElement) {
            this.el.nativeElement.removeEventListener('change', this.changeHandler);
            this.el.nativeElement.removeEventListener('keydown', this.keydownHandler);
            this.el.nativeElement.removeEventListener('expanded-change', this.expandedChangeHandler);
        }
    }
    /**
     * Sets focus to the first menu item.
     * This is a proxy to the web component's focus() method.
     */
    focus() {
        this.z.runOutsideAngular(() => {
            this.el.nativeElement.focus();
        });
    }
    /**
     * Clears the selections of radio and checkbox menu items.
     * This is a proxy to the web component's clearSelections() method.
     */
    clearSelections() {
        this.z.runOutsideAngular(() => {
            this.el.nativeElement.clearSelections();
        });
    }
}
MenuListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuListComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
MenuListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: MenuListComponent, selector: "fabric-menu-list", outputs: { change: "change", keydown: "keydown", expandedChange: "expandedChange" }, ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-menu-list',
                    template: `
    <ng-content></ng-content>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { change: [{
                type: Output
            }], keydown: [{
                type: Output
            }], expandedChange: [{
                type: Output
            }] } });

class MenuListProxyModule {
    constructor() {
        MenuListDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
MenuListProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuListProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MenuListProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: MenuListProxyModule, declarations: [MenuListComponent], imports: [CommonModule], exports: [MenuListComponent] });
MenuListProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuListProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuListProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MenuListComponent],
                    imports: [CommonModule],
                    exports: [MenuListComponent]
                }]
        }], ctorParameters: function () { return []; } });

class MenuComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.openOnHover = false;
        this.openOnContext = false;
        this.closeOnScroll = false;
        this.persistOnItemClick = false;
        this.toggle = new EventEmitter();
        this.change = new EventEmitter();
        this.handleToggle = (event) => {
            this.zone.run(() => {
                this.toggle.emit(event.detail);
            });
        };
        this.handleChange = (event) => {
            this.zone.run(() => {
                this.change.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.openOnHover) {
            this.renderer.setAttribute(nativeElement, 'open-on-hover', '');
        }
        if (this.openOnContext) {
            this.renderer.setAttribute(nativeElement, 'open-on-context', '');
        }
        if (this.closeOnScroll) {
            this.renderer.setAttribute(nativeElement, 'close-on-scroll', '');
        }
        if (this.persistOnItemClick) {
            this.renderer.setAttribute(nativeElement, 'persist-on-item-click', '');
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('toggle', this.handleToggle);
        this.el.nativeElement.addEventListener('change', this.handleChange);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('toggle', this.handleToggle);
        this.el.nativeElement.removeEventListener('change', this.handleChange);
    }
}
MenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
MenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: MenuComponent, selector: "fabric-menu", inputs: { openOnHover: "openOnHover", openOnContext: "openOnContext", closeOnScroll: "closeOnScroll", persistOnItemClick: "persistOnItemClick" }, outputs: { toggle: "toggle", change: "change" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-menu',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { openOnHover: [{
                type: Input
            }], openOnContext: [{
                type: Input
            }], closeOnScroll: [{
                type: Input
            }], persistOnItemClick: [{
                type: Input
            }], toggle: [{
                type: Output
            }], change: [{
                type: Output
            }] } });

class MenuProxyModule {
    constructor() {
        MenuDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
MenuProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MenuProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: MenuProxyModule, declarations: [MenuComponent], imports: [CommonModule], exports: [MenuComponent] });
MenuProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MenuProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MenuComponent],
                    imports: [CommonModule],
                    exports: [MenuComponent]
                }]
        }], ctorParameters: function () { return []; } });

class PopoverComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.beak = false;
        this.nonClickable = false;
        this.size = 'medium';
        this.mode = 'manual';
        this.repositionMode = 'flip';
        this.open = false;
        this.transitionDuration = 100;
        this.transitionDelay = 0;
        this.hide = new EventEmitter();
        this.show = new EventEmitter();
        this.toggle = new EventEmitter();
        this.mouseEnter = new EventEmitter();
        this.mouseLeave = new EventEmitter();
        this.handleHide = (event) => {
            this.zone.run(() => {
                this.hide.emit(event.detail);
            });
        };
        this.handleShow = (event) => {
            this.zone.run(() => {
                this.show.emit(event.detail);
            });
        };
        this.handleToggle = (event) => {
            this.zone.run(() => {
                this.toggle.emit(event.detail);
            });
        };
        this.handleMouseEnter = (event) => {
            this.zone.run(() => {
                this.mouseEnter.emit(event.detail);
            });
        };
        this.handleMouseLeave = (event) => {
            this.zone.run(() => {
                this.mouseLeave.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        this.renderer.setProperty(nativeElement, 'open', this.open);
        if (this.beak) {
            this.renderer.setAttribute(nativeElement, 'beak', '');
        }
        if (this.size) {
            this.renderer.setAttribute(nativeElement, 'size', this.size);
        }
        if (this.mode) {
            this.renderer.setAttribute(nativeElement, 'mode', this.mode);
        }
        if (this.position) {
            this.renderer.setAttribute(nativeElement, 'position', this.position);
        }
        if (this.targetId) {
            this.renderer.setAttribute(nativeElement, 'target-id', this.targetId);
        }
        if (this.repositionMode) {
            this.renderer.setAttribute(nativeElement, 'reposition-mode', this.repositionMode);
        }
        if (this.overflowBoundarySelector) {
            this.renderer.setAttribute(nativeElement, 'overflow-boundary-selector', this.overflowBoundarySelector);
        }
        if (this.ariaLabel) {
            this.renderer.setAttribute(nativeElement, 'aria-label', this.ariaLabel);
        }
        if (this.nonClickable) {
            this.renderer.setAttribute(nativeElement, 'non-clickable', '');
        }
        if (this.transitionDuration !== undefined) {
            this.renderer.setAttribute(nativeElement, 'transition-duration', String(this.transitionDuration));
        }
        if (this.transitionDelay !== undefined) {
            this.renderer.setAttribute(nativeElement, 'transition-delay', String(this.transitionDelay));
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('hide', this.handleHide);
        this.el.nativeElement.addEventListener('show', this.handleShow);
        this.el.nativeElement.addEventListener('toggle', this.handleToggle);
        this.el.nativeElement.addEventListener('mouseEnter', this.handleMouseEnter);
        this.el.nativeElement.addEventListener('mouseLeave', this.handleMouseLeave);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('hide', this.handleHide);
        this.el.nativeElement.removeEventListener('show', this.handleShow);
        this.el.nativeElement.removeEventListener('toggle', this.handleToggle);
        this.el.nativeElement.removeEventListener('mouseEnter', this.handleMouseEnter);
        this.el.nativeElement.removeEventListener('mouseLeave', this.handleMouseLeave);
    }
}
PopoverComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PopoverComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PopoverComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: PopoverComponent, selector: "fabric-popover", inputs: { beak: "beak", nonClickable: "nonClickable", size: "size", mode: "mode", position: "position", targetId: "targetId", repositionMode: "repositionMode", open: "open", overflowBoundarySelector: "overflowBoundarySelector", ariaLabel: "ariaLabel", transitionDuration: "transitionDuration", transitionDelay: "transitionDelay" }, outputs: { hide: "hide", show: "show", toggle: "toggle", mouseEnter: "mouseEnter", mouseLeave: "mouseLeave" }, usesOnChanges: true, ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PopoverComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-popover',
                    template: `
    <ng-content></ng-content>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { beak: [{
                type: Input
            }], nonClickable: [{
                type: Input
            }], size: [{
                type: Input
            }], mode: [{
                type: Input
            }], position: [{
                type: Input
            }], targetId: [{
                type: Input
            }], repositionMode: [{
                type: Input
            }], open: [{
                type: Input
            }], overflowBoundarySelector: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], transitionDuration: [{
                type: Input
            }], transitionDelay: [{
                type: Input
            }], hide: [{
                type: Output
            }], show: [{
                type: Output
            }], toggle: [{
                type: Output
            }], mouseEnter: [{
                type: Output
            }], mouseLeave: [{
                type: Output
            }] } });

class PopoverProxyModule {
    constructor() {
        PopoverDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
PopoverProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PopoverProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PopoverProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: PopoverProxyModule, declarations: [PopoverComponent], imports: [CommonModule], exports: [PopoverComponent] });
PopoverProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PopoverProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: PopoverProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PopoverComponent],
                    imports: [CommonModule],
                    exports: [PopoverComponent]
                }]
        }], ctorParameters: function () { return []; } });

class MessageBarComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.shape) {
            this.renderer.setAttribute(nativeElement, 'shape', this.shape);
        }
        if (this.layout) {
            this.renderer.setAttribute(nativeElement, 'layout', this.layout);
        }
        if (this.intent) {
            this.renderer.setAttribute(nativeElement, 'intent', this.intent);
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
}
MessageBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MessageBarComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
MessageBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: MessageBarComponent, selector: "fabric-message-bar", inputs: { shape: "shape", layout: "layout", intent: "intent" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MessageBarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-message-bar',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { shape: [{
                type: Input
            }], layout: [{
                type: Input
            }], intent: [{
                type: Input
            }] } });

class MessageBarProxyModule {
    constructor() {
        MessageBarDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
MessageBarProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MessageBarProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MessageBarProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: MessageBarProxyModule, declarations: [MessageBarComponent], imports: [CommonModule], exports: [MessageBarComponent] });
MessageBarProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MessageBarProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MessageBarProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MessageBarComponent],
                    imports: [CommonModule],
                    exports: [MessageBarComponent]
                }]
        }], ctorParameters: function () { return []; } });

class MultiViewControllerComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.hidden) {
            this.renderer.setAttribute(nativeElement, 'hidden', '');
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
}
MultiViewControllerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewControllerComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
MultiViewControllerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: MultiViewControllerComponent, selector: "fabric-multi-view-controller", inputs: { hidden: "hidden" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewControllerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-multi-view-controller',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { hidden: [{
                type: Input
            }] } });

class MultiViewControllerProxyModule {
    constructor() {
        MultiViewControllerDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
MultiViewControllerProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewControllerProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MultiViewControllerProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: MultiViewControllerProxyModule, declarations: [MultiViewControllerComponent], imports: [CommonModule], exports: [MultiViewControllerComponent] });
MultiViewControllerProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewControllerProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewControllerProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MultiViewControllerComponent],
                    imports: [CommonModule],
                    exports: [MultiViewControllerComponent]
                }]
        }], ctorParameters: function () { return []; } });

class MultiViewGroupComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.change = new EventEmitter();
        this.handleChange = (event) => {
            this.zone.run(() => {
                this.change.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('change', this.handleChange);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('change', this.handleChange);
    }
}
MultiViewGroupComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewGroupComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
MultiViewGroupComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: MultiViewGroupComponent, selector: "fabric-multi-view-group", outputs: { change: "change" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-multi-view-group',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { change: [{
                type: Output
            }] } });

class MultiViewGroupProxyModule {
    constructor() {
        MultiViewGroupDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
MultiViewGroupProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewGroupProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MultiViewGroupProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: MultiViewGroupProxyModule, declarations: [MultiViewGroupComponent], imports: [CommonModule], exports: [MultiViewGroupComponent] });
MultiViewGroupProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewGroupProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewGroupProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MultiViewGroupComponent],
                    imports: [CommonModule],
                    exports: [MultiViewGroupComponent]
                }]
        }], ctorParameters: function () { return []; } });

class MultiViewComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.hidden = true;
        this.hiddenchanged = new EventEmitter();
        this.handleHiddenchanged = (event) => {
            this.zone.run(() => {
                this.hiddenchanged.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.hidden) {
            this.renderer.setAttribute(nativeElement, 'hidden', '');
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('hiddenchanged', this.handleHiddenchanged);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('hiddenchanged', this.handleHiddenchanged);
    }
}
MultiViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
MultiViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: MultiViewComponent, selector: "fabric-multi-view", inputs: { hidden: "hidden" }, outputs: { hiddenchanged: "hiddenchanged" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-multi-view',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { hidden: [{
                type: Input
            }], hiddenchanged: [{
                type: Output
            }] } });

class MultiViewProxyModule {
    constructor() {
        MultiViewDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
MultiViewProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MultiViewProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: MultiViewProxyModule, declarations: [MultiViewComponent], imports: [CommonModule], exports: [MultiViewComponent] });
MultiViewProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: MultiViewProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MultiViewComponent],
                    imports: [CommonModule],
                    exports: [MultiViewComponent]
                }]
        }], ctorParameters: function () { return []; } });

class SvgIconComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.ariaHidden = "true";
        this.focusable = "false";
        this.role = "";
        this.error = new EventEmitter();
        this.handleError = (event) => {
            this.zone.run(() => {
                this.error.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.name) {
            this.renderer.setAttribute(nativeElement, 'name', this.name);
        }
        if (this.size) {
            this.renderer.setAttribute(nativeElement, 'size', this.size);
        }
        if (this.path) {
            this.renderer.setAttribute(nativeElement, 'path', this.path);
        }
        if (this.ariaHidden) {
            this.renderer.setAttribute(nativeElement, 'aria-hidden', this.ariaHidden);
        }
        if (this.focusable) {
            this.renderer.setAttribute(nativeElement, 'focusable', this.focusable);
        }
        if (this.role) {
            this.renderer.setAttribute(nativeElement, 'role', this.role);
        }
        if (this.ariaLabel) {
            this.renderer.setAttribute(nativeElement, 'aria-label', this.ariaLabel);
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('error', this.handleError);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('error', this.handleError);
    }
}
SvgIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SvgIconComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
SvgIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: SvgIconComponent, selector: "fabric-svg-icon", inputs: { name: "name", size: "size", path: "path", ariaHidden: "ariaHidden", focusable: "focusable", role: "role", ariaLabel: "ariaLabel" }, outputs: { error: "error" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SvgIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-svg-icon',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { name: [{
                type: Input
            }], size: [{
                type: Input
            }], path: [{
                type: Input
            }], ariaHidden: [{
                type: Input
            }], focusable: [{
                type: Input
            }], role: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], error: [{
                type: Output
            }] } });

class SvgIconProxyModule {
    constructor() {
        SvgIconDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
SvgIconProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SvgIconProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SvgIconProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: SvgIconProxyModule, declarations: [SvgIconComponent], imports: [CommonModule], exports: [SvgIconComponent] });
SvgIconProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SvgIconProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: SvgIconProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SvgIconComponent],
                    imports: [CommonModule],
                    exports: [SvgIconComponent]
                }]
        }], ctorParameters: function () { return []; } });

class TagComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.dismissButton = false;
        this.disabled = false;
        this.size = "medium";
        this.shape = "rounded";
        this.appearance = "filled";
        this.dismiss = new EventEmitter();
        this.handleDismiss = (event) => {
            this.zone.run(() => {
                this.dismiss.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.dismissButton) {
            this.renderer.setAttribute(nativeElement, 'dismiss-button', '');
        }
        if (this.disabled) {
            this.renderer.setAttribute(nativeElement, 'disabled', '');
        }
        if (this.size) {
            this.renderer.setAttribute(nativeElement, 'size', String(this.size));
        }
        if (this.shape) {
            this.renderer.setAttribute(nativeElement, 'shape', String(this.shape));
        }
        if (this.appearance) {
            this.renderer.setAttribute(nativeElement, 'appearance', String(this.appearance));
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('dismiss', this.handleDismiss);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('dismiss', this.handleDismiss);
    }
}
TagComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TagComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
TagComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: TagComponent, selector: "fabric-tag", inputs: { dismissButton: "dismissButton", disabled: "disabled", size: "size", shape: "shape", appearance: "appearance" }, outputs: { dismiss: "dismiss" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-tag',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { dismissButton: [{
                type: Input
            }], disabled: [{
                type: Input
            }], size: [{
                type: Input
            }], shape: [{
                type: Input
            }], appearance: [{
                type: Input
            }], dismiss: [{
                type: Output
            }] } });

class TagProxyModule {
    constructor() {
        TagDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
TagProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TagProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TagProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: TagProxyModule, declarations: [TagComponent], imports: [CommonModule], exports: [TagComponent] });
TagProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TagProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TagProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TagComponent],
                    imports: [CommonModule],
                    exports: [TagComponent]
                }]
        }], ctorParameters: function () { return []; } });

class TeachingBubbleComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.target = "";
        this.placement = "top";
        this.disableTrapFocus = false;
        this.size = "medium";
        this.openchange = new EventEmitter();
        this.dismiss = new EventEmitter();
        this.handleOpenchange = (event) => {
            this.zone.run(() => {
                this.openchange.emit(event.detail);
            });
        };
        this.handleDismiss = (event) => {
            this.zone.run(() => {
                this.dismiss.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.target) {
            this.renderer.setAttribute(nativeElement, 'target', this.target);
        }
        if (this.placement) {
            this.renderer.setAttribute(nativeElement, 'placement', this.placement);
        }
        if (this.open) {
            this.renderer.setAttribute(nativeElement, 'open', '');
        }
        if (this.disableTrapFocus) {
            this.renderer.setAttribute(nativeElement, 'disable-trap-focus', '');
        }
        if (this.size) {
            this.renderer.setAttribute(nativeElement, 'size', this.size);
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('openchange', this.handleOpenchange);
        this.el.nativeElement.addEventListener('dismiss', this.handleDismiss);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('openchange', this.handleOpenchange);
        this.el.nativeElement.removeEventListener('dismiss', this.handleDismiss);
    }
}
TeachingBubbleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TeachingBubbleComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
TeachingBubbleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: TeachingBubbleComponent, selector: "fabric-teaching-bubble", inputs: { target: "target", placement: "placement", open: "open", disableTrapFocus: "disableTrapFocus", size: "size" }, outputs: { openchange: "openchange", dismiss: "dismiss" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TeachingBubbleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-teaching-bubble',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { target: [{
                type: Input
            }], placement: [{
                type: Input
            }], open: [{
                type: Input
            }], disableTrapFocus: [{
                type: Input
            }], size: [{
                type: Input
            }], openchange: [{
                type: Output
            }], dismiss: [{
                type: Output
            }] } });

class TeachingBubbleProxyModule {
    constructor() {
        TeachingBubbleDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
TeachingBubbleProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TeachingBubbleProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TeachingBubbleProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: TeachingBubbleProxyModule, declarations: [TeachingBubbleComponent], imports: [CommonModule], exports: [TeachingBubbleComponent] });
TeachingBubbleProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TeachingBubbleProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TeachingBubbleProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TeachingBubbleComponent],
                    imports: [CommonModule],
                    exports: [TeachingBubbleComponent]
                }]
        }], ctorParameters: function () { return []; } });

class TableComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.sortable = false;
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.sortable) {
            this.renderer.setAttribute(nativeElement, 'sortable', '');
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
}
TableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TableComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
TableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: TableComponent, selector: "fabric-table", inputs: { sortable: "sortable" }, usesOnChanges: true, ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-table',
                    template: `
    <ng-content></ng-content>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { sortable: [{
                type: Input
            }] } });

class TableProxyModule {
    constructor() {
        TableDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
TableProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TableProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TableProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: TableProxyModule, declarations: [TableComponent], imports: [CommonModule], exports: [TableComponent] });
TableProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TableProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TableProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TableComponent],
                    imports: [CommonModule],
                    exports: [TableComponent]
                }]
        }], ctorParameters: function () { return []; } });

class TableCellComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.hiddenchange = new EventEmitter();
        this.handleHiddenchange = (event) => {
            this.zone.run(() => {
                this.hiddenchange.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('hiddenchange', this.handleHiddenchange);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('hiddenchange', this.handleHiddenchange);
    }
}
TableCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TableCellComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
TableCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: TableCellComponent, selector: "fabric-table-cell", outputs: { hiddenchange: "hiddenchange" }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TableCellComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-table-cell',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { hiddenchange: [{
                type: Output
            }] } });

class TableCellProxyModule {
    constructor() {
        TableCellDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
TableCellProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TableCellProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TableCellProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: TableCellProxyModule, declarations: [TableCellComponent], imports: [CommonModule], exports: [TableCellComponent] });
TableCellProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TableCellProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TableCellProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TableCellComponent],
                    imports: [CommonModule],
                    exports: [TableCellComponent]
                }]
        }], ctorParameters: function () { return []; } });

class TooltipComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.open = false;
        this.beak = false;
        this.hidePopover = new EventEmitter();
        this.showPopover = new EventEmitter();
        this.handleHidePopover = (event) => {
            this.zone.run(() => {
                this.hidePopover.emit(event.detail);
            });
        };
        this.handleShowPopover = (event) => {
            this.zone.run(() => {
                this.showPopover.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.position) {
            const positionValue = this.transformPosition(this.position);
            this.renderer.setAttribute(nativeElement, 'position', positionValue);
        }
        if (this.open) {
            this.renderer.setAttribute(nativeElement, 'open', '');
        }
        if (this.beak) {
            this.renderer.setAttribute(nativeElement, 'beak', '');
        }
        if (this.targetId) {
            this.renderer.setAttribute(nativeElement, 'target-id', this.targetId);
        }
        if (this.transitionDuration !== undefined) {
            this.renderer.setAttribute(nativeElement, 'transition-duration', String(this.transitionDuration));
        }
        if (this.transitionDelay !== undefined) {
            this.renderer.setAttribute(nativeElement, 'transition-delay', String(this.transitionDelay));
        }
    }
    transformPosition(position) {
        // Transform the enum value to a valid DOM attribute value
        // Example transformation logic (to be adjusted as necessary)
        return position.toLowerCase().replace('_', '-');
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('hidePopover', this.handleHidePopover);
        this.el.nativeElement.addEventListener('showPopover', this.handleShowPopover);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('hidePopover', this.handleHidePopover);
        this.el.nativeElement.removeEventListener('showPopover', this.handleShowPopover);
    }
}
TooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TooltipComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
TooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: TooltipComponent, selector: "fabric-tooltip", inputs: { position: "position", open: "open", beak: "beak", targetId: "targetId", transitionDuration: "transitionDuration", transitionDelay: "transitionDelay" }, outputs: { hidePopover: "hidePopover", showPopover: "showPopover" }, usesOnChanges: true, ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-tooltip',
                    template: `
    <ng-content></ng-content>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { position: [{
                type: Input
            }], open: [{
                type: Input
            }], beak: [{
                type: Input
            }], targetId: [{
                type: Input
            }], transitionDuration: [{
                type: Input
            }], transitionDelay: [{
                type: Input
            }], hidePopover: [{
                type: Output
            }], showPopover: [{
                type: Output
            }] } });

class TooltipProxyModule {
    constructor() {
        TooltipDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
TooltipProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TooltipProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TooltipProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: TooltipProxyModule, declarations: [TooltipComponent], imports: [CommonModule], exports: [TooltipComponent] });
TooltipProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TooltipProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TooltipProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TooltipComponent],
                    imports: [CommonModule],
                    exports: [TooltipComponent]
                }]
        }], ctorParameters: function () { return []; } });

class WizardPanelComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.hidden = true;
        this.state = "incomplete";
        this.active = false;
        this.panelchange = new EventEmitter();
        this.handlePanelchange = (event) => {
            this.zone.run(() => {
                this.panelchange.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.hidden) {
            this.renderer.setAttribute(nativeElement, 'hidden', '');
        }
        if (this.state) {
            this.renderer.setAttribute(nativeElement, 'state', this.state);
        }
        if (this.active) {
            this.renderer.setAttribute(nativeElement, 'active', '');
        }
        if (this.id) {
            this.renderer.setAttribute(nativeElement, 'id', this.id);
        }
        if (this.slot) {
            this.renderer.setAttribute(nativeElement, 'slot', this.slot);
        }
        if (this.ariaLabel) {
            this.renderer.setAttribute(nativeElement, 'aria-label', this.ariaLabel);
        }
        if (this.ariaDescribedby) {
            this.renderer.setAttribute(nativeElement, 'aria-describedby', this.ariaDescribedby);
        }
        if (this.ariaLabelledby) {
            this.renderer.setAttribute(nativeElement, 'aria-labelledby', this.ariaLabelledby);
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('panelchange', this.handlePanelchange);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('panelchange', this.handlePanelchange);
    }
}
WizardPanelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardPanelComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
WizardPanelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: WizardPanelComponent, selector: "fabric-wizard-panel", inputs: { hidden: "hidden", state: "state", active: "active", id: "id", slot: "slot", ariaLabel: "ariaLabel", ariaDescribedby: "ariaDescribedby", ariaLabelledby: "ariaLabelledby" }, outputs: { panelchange: "panelchange" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardPanelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-wizard-panel',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { hidden: [{
                type: Input
            }], state: [{
                type: Input
            }], active: [{
                type: Input
            }], id: [{
                type: Input
            }], slot: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], ariaDescribedby: [{
                type: Input
            }], ariaLabelledby: [{
                type: Input
            }], panelchange: [{
                type: Output
            }] } });

class WizardPanelProxyModule {
    constructor() {
        WizardPanelDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
WizardPanelProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardPanelProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
WizardPanelProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: WizardPanelProxyModule, declarations: [WizardPanelComponent], imports: [CommonModule], exports: [WizardPanelComponent] });
WizardPanelProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardPanelProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardPanelProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [WizardPanelComponent],
                    imports: [CommonModule],
                    exports: [WizardPanelComponent]
                }]
        }], ctorParameters: function () { return []; } });

class WizardStepComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.active = false;
        this.disabled = false;
        this.state = "incomplete";
        this.stepchange = new EventEmitter();
        this.handleStepchange = (event) => {
            this.zone.run(() => {
                this.stepchange.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.ordered) {
            this.renderer.setAttribute(nativeElement, 'ordered', '');
        }
        if (this.hideConnector) {
            this.renderer.setAttribute(nativeElement, 'hide-connector', '');
        }
        if (this.active) {
            this.renderer.setAttribute(nativeElement, 'active', '');
        }
        if (this.disabled) {
            this.renderer.setAttribute(nativeElement, 'disabled', '');
        }
        if (this.ariaDescribedby) {
            this.renderer.setAttribute(nativeElement, 'aria-describedby', this.ariaDescribedby);
        }
        if (this.ariaLabelledby) {
            this.renderer.setAttribute(nativeElement, 'aria-labelledby', this.ariaLabelledby);
        }
        if (this.state) {
            this.renderer.setAttribute(nativeElement, 'state', this.state);
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('stepchange', this.handleStepchange);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('stepchange', this.handleStepchange);
    }
}
WizardStepComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardStepComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
WizardStepComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: WizardStepComponent, selector: "fabric-wizard-step", inputs: { ordered: "ordered", hideConnector: "hideConnector", active: "active", disabled: "disabled", ariaDescribedby: "ariaDescribedby", ariaLabelledby: "ariaLabelledby", state: "state" }, outputs: { stepchange: "stepchange" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardStepComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-wizard-step',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { ordered: [{
                type: Input
            }], hideConnector: [{
                type: Input
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], ariaDescribedby: [{
                type: Input
            }], ariaLabelledby: [{
                type: Input
            }], state: [{
                type: Input
            }], stepchange: [{
                type: Output
            }] } });

class WizardStepProxyModule {
    constructor() {
        WizardStepDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
WizardStepProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardStepProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
WizardStepProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: WizardStepProxyModule, declarations: [WizardStepComponent], imports: [CommonModule], exports: [WizardStepComponent] });
WizardStepProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardStepProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardStepProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [WizardStepComponent],
                    imports: [CommonModule],
                    exports: [WizardStepComponent]
                }]
        }], ctorParameters: function () { return []; } });

class WizardComponent {
    constructor(el, renderer, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.ordered = false;
        this.disableOnComplete = false;
        this.currentIndex = 0;
        this.wizardchange = new EventEmitter();
        this.wizardcomplete = new EventEmitter();
        this.handleWizardchange = (event) => {
            this.zone.run(() => {
                this.wizardchange.emit(event.detail);
            });
        };
        this.handleWizardcomplete = (event) => {
            this.zone.run(() => {
                this.wizardcomplete.emit(event.detail);
            });
        };
        this.zone = ngZone;
    }
    updateComponentProperties() {
        const nativeElement = this.el.nativeElement;
        if (this.ordered) {
            this.renderer.setAttribute(nativeElement, 'ordered', '');
        }
        if (this.disableOnComplete) {
            this.renderer.setAttribute(nativeElement, 'disable-on-complete', '');
        }
        if (this.currentIndex !== undefined) {
            this.renderer.setAttribute(nativeElement, 'current-index', String(this.currentIndex));
        }
        if (this.ariaLabelledby) {
            this.renderer.setAttribute(nativeElement, 'aria-labelledby', this.ariaLabelledby);
        }
        if (this.ariaDescribedby) {
            this.renderer.setAttribute(nativeElement, 'aria-describedby', this.ariaDescribedby);
        }
    }
    ngOnInit() {
        this.updateComponentProperties();
    }
    ngOnChanges() {
        this.updateComponentProperties();
    }
    ngAfterViewInit() {
        this.el.nativeElement.addEventListener('wizardchange', this.handleWizardchange);
        this.el.nativeElement.addEventListener('wizardcomplete', this.handleWizardcomplete);
    }
    ngOnDestroy() {
        this.el.nativeElement.removeEventListener('wizardchange', this.handleWizardchange);
        this.el.nativeElement.removeEventListener('wizardcomplete', this.handleWizardcomplete);
    }
}
WizardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
WizardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: WizardComponent, selector: "fabric-wizard", inputs: { ordered: "ordered", disableOnComplete: "disableOnComplete", currentIndex: "currentIndex", ariaLabelledby: "ariaLabelledby", ariaDescribedby: "ariaDescribedby" }, outputs: { wizardchange: "wizardchange", wizardcomplete: "wizardcomplete" }, usesOnChanges: true, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fabric-wizard',
                    template: `<ng-content></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.NgZone }]; }, propDecorators: { ordered: [{
                type: Input
            }], disableOnComplete: [{
                type: Input
            }], currentIndex: [{
                type: Input
            }], ariaLabelledby: [{
                type: Input
            }], ariaDescribedby: [{
                type: Input
            }], wizardchange: [{
                type: Output
            }], wizardcomplete: [{
                type: Output
            }] } });

class WizardProxyModule {
    constructor() {
        WizardDefinition.define();
    }
    ngDoBootstrap(appRef) { }
}
WizardProxyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardProxyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
WizardProxyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: WizardProxyModule, declarations: [WizardComponent], imports: [CommonModule], exports: [WizardComponent] });
WizardProxyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardProxyModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: WizardProxyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [WizardComponent],
                    imports: [CommonModule],
                    exports: [WizardComponent]
                }]
        }], ctorParameters: function () { return []; } });

/*
 * Public API Surface of fabric-wrappers
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionMenuComponent, AccordionMenuItemComponent, AccordionMenuItemProxyModule, AccordionMenuProxyModule, ButtonComponent, ButtonProxyModule, CardComponent, CardFooterComponent, CardFooterProxyModule, CardHeaderComponent, CardHeaderProxyModule, CardPreviewComponent, CardPreviewProxyModule, CardProxyModule, CarouselComponent, CarouselProxyModule, FilterPillComponent, FilterPillProxyModule, LoadingButtonComponent, LoadingButtonProxyModule, MenuButtonComponent, MenuButtonProxyModule, MenuComponent, MenuItemComponent, MenuItemProxyModule, MenuListComponent, MenuListProxyModule, MenuProxyModule, MessageBarComponent, MessageBarProxyModule, MultiViewComponent, MultiViewControllerComponent, MultiViewControllerProxyModule, MultiViewGroupComponent, MultiViewGroupProxyModule, MultiViewProxyModule, PopoverComponent, PopoverProxyModule, SvgIconComponent, SvgIconProxyModule, TableCellComponent, TableCellProxyModule, TableComponent, TableProxyModule, TagComponent, TagProxyModule, TeachingBubbleComponent, TeachingBubbleProxyModule, TooltipComponent, TooltipProxyModule, WizardComponent, WizardPanelComponent, WizardPanelProxyModule, WizardProxyModule, WizardStepComponent, WizardStepProxyModule };
//# sourceMappingURL=fabric-msft-fabric-angular.mjs.map
