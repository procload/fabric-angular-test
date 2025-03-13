/**
 * proxyInputs
 *
 * Dynamically maps Angular inputs to web component properties and attributes.
 * Updates both the JavaScript property (`this.el[item]`) and the HTML attribute (`this.el.setAttribute(item, val)`).
 *
 * @param Cmp - The Angular component class.
 * @param inputs - List of input property names.
 */
export declare const proxyInputs: (Cmp: any, inputs: string[]) => void;
/**
 * proxyMethods
 *
 * Binds Angular methods to corresponding web component methods.
 * Runs method execution outside Angular's change detection.
 *
 * @param Cmp - The Angular component class.
 * @param methods - List of method names to proxy.
 */
export declare const proxyMethods: (Cmp: any, methods: string[]) => void;
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
export declare const proxyOutputs: (instance: any, el: any, events: string[]) => void;
/**
 * cleanupOutputs
 *
 * Cleans up event listeners to prevent memory leaks.
 *
 * @param instance - The Angular component instance.
 */
export declare const cleanupOutputs: (instance: any) => void;
export interface ProxyCmpOptions {
    defineCustomElementFn?: () => void;
    inputs?: string[];
    methods?: string[];
    outputs?: string[];
}
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
export declare function ProxyCmp(opts: ProxyCmpOptions): (cls: any) => any;
//# sourceMappingURL=utils.d.ts.map