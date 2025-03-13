import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ChangeDetectorRef } from '@angular/core';
import { setTheme, fabricLightTheme } from "@fabric-msft/theme";

  import {
    FabricWrappersModule,
  } from '@fabric-msft/fabric-angular';

  import { ButtonWrapperModule } from '@fabric-msft/fluent-angular';

setTheme(fabricLightTheme);

@Component({
  selector: 'app-my-component',
  standalone: true,
    imports: [
      FabricWrappersModule,
      ButtonWrapperModule
    ],
    templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss',

})
export class MyComponent {
  isItemChecked = false;
  selectedRadio = 1;
  lastChangedItem = 'None';
  expandMode: 'single' | 'multi' = 'single';
  section1Expanded = true;
  section2Expanded = false;
  section3Expanded = false;
  section2Disabled = false;
  
  // Menu item state
  section1Option = false;
  selectedOption: string = 'option1';
  lastSelectedItem = 'None';
  
  // Test properties for wrapper code test
  testIsChecked = false;
  testRadio = 1;
  eventChangedItem = 'None - No Event Yet';
  
  // Properties for standard Angular event test
  standardCheckbox = false;
  standardRadio = 1; 
  standardSelectedItem = 'None';
  standardSelectedValue = 'None';
  standardEventSource = 'None';
  
  
  constructor() {}
  
  ngOnInit() {}
  
}
