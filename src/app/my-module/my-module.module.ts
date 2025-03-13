import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MyModuleRoutingModule } from './my-module-routing.module';

import {
  ButtonWrapperModule,
  DialogWrapperModule,
  DialogBodyWrapperModule
} from '@fabric-msft/fluent-angular';

import {
  FabricWrappersModule,
} from '@fabric-msft/fabric-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyModuleRoutingModule,
    FabricWrappersModule,
    ButtonWrapperModule,
    DialogWrapperModule,
    DialogBodyWrapperModule
    ],
})
export class MyModuleModule { }
