import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableDefinition } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export class TableProxyModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZmFicmljLXdyYXBwZXJzL3NyYy90YWJsZS90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBK0IsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBTzFELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0I7UUFDRSxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELGFBQWEsQ0FBQyxNQUFzQixJQUFHLENBQUM7OzhHQUo3QixnQkFBZ0I7K0dBQWhCLGdCQUFnQixpQkFKWixjQUFjLGFBQ25CLFlBQVksYUFDWixjQUFjOytHQUViLGdCQUFnQixZQUhqQixZQUFZOzRGQUdYLGdCQUFnQjtrQkFMNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQzlCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmdNb2R1bGUsIEFwcGxpY2F0aW9uUmVmLCBEb0Jvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVEZWZpbml0aW9uIH0gZnJvbSAnQGZhYnJpYy1tc2Z0L2ZhYnJpYy13ZWInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUYWJsZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbVGFibGVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlUHJveHlNb2R1bGUgaW1wbGVtZW50cyBEb0Jvb3RzdHJhcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhYmxlRGVmaW5pdGlvbi5kZWZpbmUoKTtcbiAgfVxuICBuZ0RvQm9vdHN0cmFwKGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHt9XG59XG4iXX0=