import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModuleRoutingModule } from './my-module-routing.module';
import { BadgeWrapperModule } from "@fabric-msft/fluent-angular";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyModuleRoutingModule,
    BadgeWrapperModule
  ]
})
export class MyModuleModule { }
