import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import { TagDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class TagProxyModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZhYnJpYy13cmFwcGVycy9zcmMvdGFnL3RhZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBT3hELE1BQU0sT0FBTyxjQUFjO0lBQ3pCO1FBQ0UsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxhQUFhLENBQUMsTUFBc0IsSUFBRyxDQUFDOzs0R0FKN0IsY0FBYzs2R0FBZCxjQUFjLGlCQUpWLFlBQVksYUFDakIsWUFBWSxhQUNaLFlBQVk7NkdBRVgsY0FBYyxZQUhmLFlBQVk7NEZBR1gsY0FBYztrQkFMMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQzVCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmdNb2R1bGUsIEFwcGxpY2F0aW9uUmVmLCBEb0Jvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRhZ0NvbXBvbmVudCB9IGZyb20gJy4vdGFnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWdEZWZpbml0aW9uIH0gZnJvbSAnQGZhYnJpYy1tc2Z0L2ZhYnJpYy13ZWInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUYWdDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1RhZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVGFnUHJveHlNb2R1bGUgaW1wbGVtZW50cyBEb0Jvb3RzdHJhcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhZ0RlZmluaXRpb24uZGVmaW5lKCk7XG4gIH1cbiAgbmdEb0Jvb3RzdHJhcChhcHBSZWY6IEFwcGxpY2F0aW9uUmVmKSB7fVxufVxuIl19