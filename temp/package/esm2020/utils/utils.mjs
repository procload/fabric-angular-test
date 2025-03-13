import { fromEvent } from 'rxjs';
import { EventEmitter } from '@angular/core';
/**
 * proxyInputs
 *
 * Dynamically maps Angular inputs to web component properties and attributes.
 * Updates both the JavaScript property (`this.el[item]`) and the HTML attribute (`this.el.setAttribute(item, val)`).
 *
 * @param Cmp - The Angular component class.
 * @param inputs - List of input property names.
 */
export const proxyInputs = (Cmp, inputs) => {
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
export const proxyMethods = (Cmp, methods) => {
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
export const proxyOutputs = (instance, el, events) => {
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
export const cleanupOutputs = (instance) => {
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
export function ProxyCmp(opts) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9mYWJyaWMtd3JhcHBlcnMvc3JjL3V0aWxzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3Qzs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQVEsRUFBRSxNQUFnQixFQUFFLEVBQUU7SUFDeEQsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDdEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFO1lBQ3JDLEdBQUc7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFDRCxHQUFHLENBQUMsR0FBUTtnQkFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtvQkFDNUIsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRTt3QkFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO3dCQUNsQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUMvQztnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLENBQUMs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QUM5QjtZQUNILENBQUMsQ0FBQztZQUVGLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHO2dCQUMxQixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JCLElBQUksbUJBQW1CLEVBQUU7b0JBQ3ZCLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakM7WUFDSCxDQUFDLENBQUM7U0FDSDtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogcHJveHlJbnB1dHNcbiAqXG4gKiBEeW5hbWljYWxseSBtYXBzIEFuZ3VsYXIgaW5wdXRzIHRvIHdlYiBjb21wb25lbnQgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcy5cbiAqIFVwZGF0ZXMgYm90aCB0aGUgSmF2YVNjcmlwdCBwcm9wZXJ0eSAoYHRoaXMuZWxbaXRlbV1gKSBhbmQgdGhlIEhUTUwgYXR0cmlidXRlIChgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoaXRlbSwgdmFsKWApLlxuICpcbiAqIEBwYXJhbSBDbXAgLSBUaGUgQW5ndWxhciBjb21wb25lbnQgY2xhc3MuXG4gKiBAcGFyYW0gaW5wdXRzIC0gTGlzdCBvZiBpbnB1dCBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHByb3h5SW5wdXRzID0gKENtcDogYW55LCBpbnB1dHM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IFByb3RvdHlwZSA9IENtcC5wcm90b3R5cGU7XG4gIGlucHV0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFByb3RvdHlwZSwgaXRlbSwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbD8ubmF0aXZlRWxlbWVudD8uW2l0ZW1dO1xuICAgICAgfSxcbiAgICAgIHNldCh2YWw6IGFueSkge1xuICAgICAgICB0aGlzLnoucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmVsPy5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnRbaXRlbV0gPSB2YWw7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKGl0ZW0sIHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIHByb3h5TWV0aG9kc1xuICpcbiAqIEJpbmRzIEFuZ3VsYXIgbWV0aG9kcyB0byBjb3JyZXNwb25kaW5nIHdlYiBjb21wb25lbnQgbWV0aG9kcy5cbiAqIFJ1bnMgbWV0aG9kIGV4ZWN1dGlvbiBvdXRzaWRlIEFuZ3VsYXIncyBjaGFuZ2UgZGV0ZWN0aW9uLlxuICpcbiAqIEBwYXJhbSBDbXAgLSBUaGUgQW5ndWxhciBjb21wb25lbnQgY2xhc3MuXG4gKiBAcGFyYW0gbWV0aG9kcyAtIExpc3Qgb2YgbWV0aG9kIG5hbWVzIHRvIHByb3h5LlxuICovXG5leHBvcnQgY29uc3QgcHJveHlNZXRob2RzID0gKENtcDogYW55LCBtZXRob2RzOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBQcm90b3R5cGUgPSBDbXAucHJvdG90eXBlO1xuICBtZXRob2RzLmZvckVhY2goKG1ldGhvZE5hbWUpID0+IHtcbiAgICBQcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHJldHVybiB0aGlzLnoucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT5cbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50W21ldGhvZE5hbWVdKC4uLmFyZ3MpXG4gICAgICApO1xuICAgIH07XG4gIH0pO1xufTtcblxuLyoqXG4gKiBwcm94eU91dHB1dHNcbiAqXG4gKiBCaW5kcyBBbmd1bGFyIGV2ZW50IG91dHB1dHMgdG8gd2ViIGNvbXBvbmVudCBldmVudHMgdXNpbmcgUnhKUydzIGBmcm9tRXZlbnQoKWAuXG4gKiBFbnN1cmVzIGV2ZW50IGNsZWFudXAgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cbiAqXG4gKiBAcGFyYW0gaW5zdGFuY2UgLSBUaGUgQW5ndWxhciBjb21wb25lbnQgaW5zdGFuY2UuXG4gKiBAcGFyYW0gZWwgLSBUaGUgd2ViIGNvbXBvbmVudCBlbGVtZW50LlxuICogQHBhcmFtIGV2ZW50cyAtIExpc3Qgb2YgZXZlbnQgbmFtZXMgdG8gYmluZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHByb3h5T3V0cHV0cyA9IChpbnN0YW5jZTogYW55LCBlbDogYW55LCBldmVudHM6IHN0cmluZ1tdKSA9PiB7XG4gIGlmICghZWwpIHJldHVybjtcblxuICBpbnN0YW5jZS5fX2V2ZW50U3Vic2NyaXB0aW9ucyA9IGV2ZW50cy5tYXAoKGV2ZW50TmFtZSkgPT4ge1xuICAgIGlmICghaW5zdGFuY2VbZXZlbnROYW1lICsgJ0V2ZW50J10pIHtcbiAgICAgIGluc3RhbmNlW2V2ZW50TmFtZSArICdFdmVudCddID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnQkID0gZnJvbUV2ZW50KGVsLCBldmVudE5hbWUpO1xuICAgIHJldHVybiBldmVudCQuc3Vic2NyaWJlKChldmVudCkgPT5cbiAgICAgIGluc3RhbmNlLnoucnVuKCgpID0+IGluc3RhbmNlW2V2ZW50TmFtZSArICdFdmVudCddLmVtaXQoZXZlbnQpKVxuICAgICk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBjbGVhbnVwT3V0cHV0c1xuICpcbiAqIENsZWFucyB1cCBldmVudCBsaXN0ZW5lcnMgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuXG4gKlxuICogQHBhcmFtIGluc3RhbmNlIC0gVGhlIEFuZ3VsYXIgY29tcG9uZW50IGluc3RhbmNlLlxuICovXG5leHBvcnQgY29uc3QgY2xlYW51cE91dHB1dHMgPSAoaW5zdGFuY2U6IGFueSkgPT4ge1xuICBpZiAoaW5zdGFuY2UuX19ldmVudFN1YnNjcmlwdGlvbnMpIHtcbiAgICBpbnN0YW5jZS5fX2V2ZW50U3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWI6IHsgdW5zdWJzY3JpYmU6ICgpID0+IHZvaWQgfSkgPT5cbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBQcm94eUNtcE9wdGlvbnMge1xuICBkZWZpbmVDdXN0b21FbGVtZW50Rm4/OiAoKSA9PiB2b2lkO1xuICBpbnB1dHM/OiBzdHJpbmdbXTtcbiAgbWV0aG9kcz86IHN0cmluZ1tdO1xuICBvdXRwdXRzPzogc3RyaW5nW107XG59XG5cbi8qKlxuICogUHJveHlDbXAgRGVjb3JhdG9yXG4gKlxuICogLSBEZWZpbmVzIHRoZSBjdXN0b20gZWxlbWVudCAoaWYgYXBwbGljYWJsZSkuXG4gKiAtIEFwcGxpZXMgYHByb3h5SW5wdXRzKClgIGZvciBvbmUtd2F5IGJpbmRpbmcuXG4gKiAtIEFwcGxpZXMgYHByb3h5TWV0aG9kcygpYCBmb3IgcHVibGljIG1ldGhvZCBleHBvc3VyZS5cbiAqIC0gQXBwbGllcyBgcHJveHlPdXRwdXRzKClgIGZvciBldmVudCBiaW5kaW5nLlxuICpcbiAqIEBwYXJhbSBvcHRzIC0gQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gUHJveHlDbXAob3B0czogUHJveHlDbXBPcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY2xzOiBhbnkpIHtcbiAgICBjb25zdCB7IGRlZmluZUN1c3RvbUVsZW1lbnRGbiwgaW5wdXRzLCBtZXRob2RzLCBvdXRwdXRzIH0gPSBvcHRzO1xuXG4gICAgaWYgKGRlZmluZUN1c3RvbUVsZW1lbnRGbikge1xuICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuKCk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0cykge1xuICAgICAgcHJveHlJbnB1dHMoY2xzLCBpbnB1dHMpO1xuICAgIH1cbiAgICBpZiAobWV0aG9kcykge1xuICAgICAgcHJveHlNZXRob2RzKGNscywgbWV0aG9kcyk7XG4gICAgfVxuICAgIGlmIChvdXRwdXRzKSB7XG4gICAgICBjb25zdCBvcmlnaW5hbE5nT25Jbml0ID0gY2xzLnByb3RvdHlwZS5uZ09uSW5pdDtcbiAgICAgIGNvbnN0IG9yaWdpbmFsTmdPbkRlc3Ryb3kgPSBjbHMucHJvdG90eXBlLm5nT25EZXN0cm95O1xuXG4gICAgICBjbHMucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5lbD8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIG91dHB1dHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcmlnaW5hbE5nT25Jbml0KSB7XG4gICAgICAgICAgb3JpZ2luYWxOZ09uSW5pdC5hcHBseSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY2xzLnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYW51cE91dHB1dHModGhpcyk7XG4gICAgICAgIGlmIChvcmlnaW5hbE5nT25EZXN0cm95KSB7XG4gICAgICAgICAgb3JpZ2luYWxOZ09uRGVzdHJveS5hcHBseSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xzO1xuICB9O1xufVxuIl19