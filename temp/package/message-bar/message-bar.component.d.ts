import { ElementRef, NgZone, Renderer2, OnInit, OnChanges } from '@angular/core';
import { MessageBarShape, MessageBarLayout, MessageBarIntent } from '@fabric-msft/fabric-web';
import * as i0 from "@angular/core";
export declare class MessageBarComponent implements OnInit, OnChanges {
    private el;
    private renderer;
    private ngZone;
    zone: NgZone;
    shape: MessageBarShape | undefined;
    layout: MessageBarLayout | undefined;
    intent: MessageBarIntent | undefined;
    constructor(el: ElementRef, renderer: Renderer2, ngZone: NgZone);
    private updateComponentProperties;
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessageBarComponent, "fabric-message-bar", never, { "shape": "shape"; "layout": "layout"; "intent": "intent"; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=message-bar.component.d.ts.map