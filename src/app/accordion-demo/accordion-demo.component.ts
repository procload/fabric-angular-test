import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FabricWrappersModule } from '@fabric-msft/fabric-angular';

interface DynamicPill {
  label: string;
  appearance: string;
  disabled: boolean;
}

interface AccordionItem {
  title: string;
  content: string;
  expanded: boolean;
  disabled: boolean;
}

interface CarouselItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-accordion-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FabricWrappersModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './accordion-demo.component.html',
  styleUrls: ['./accordion-demo.component.scss']
})
export class AccordionDemoComponent {
  // Original accordion properties
  expandMode: 'single' | 'multi' = 'single';
  section1Expanded = true;
  section2Expanded = false;
  section2Disabled = false;
  item1Checked = false;
  lastSelectedItem = 'None';
  
  // New accordion menu properties
  accordionItems: AccordionItem[] = [
    { title: 'Section 1', content: 'This is the content for section 1', expanded: true, disabled: false },
    { title: 'Section 2', content: 'This is the content for section 2', expanded: false, disabled: false },
    { title: 'Section 3', content: 'This is the content for section 3', expanded: false, disabled: true }
  ];
  
  // Carousel properties
  disableCarouselAnimation = false;
  carouselCurrentIndex = 0;
  carouselItems: CarouselItem[] = [
    { title: 'Item 1', description: 'Description for item 1' },
    { title: 'Item 2', description: 'Description for item 2' },
    { title: 'Item 3', description: 'Description for item 3' },
    { title: 'Item 4', description: 'Description for item 4' },
    { title: 'Item 5', description: 'Description for item 5' }
  ];
  
  // FilterPill test properties
  pillAppearance: string = 'accent';
  pillSize: string = 'medium';
  isPillDisabled: boolean = false;
  isPillPressed: boolean = false;
  pillLabel: string = 'Category';
  
  // Event handling
  lastEvent: string = 'None';
  lastEventDetails: any = {};
  
  // Two-way binding test
  isPillTwoWayPressed: boolean = false;
  
  // Dynamic creation
  dynamicPills: DynamicPill[] = [
    { label: 'Filter 1', appearance: 'accent', disabled: false },
    { label: 'Filter 2', appearance: 'neutral', disabled: false }
  ];
  
  // Boolean attribute testing
  disabledState: boolean = true;
  
  // Carousel event handlers
  onCarouselIndexChange(event: any): void {
    // The event from the Fabric component might be a custom event with detail
    this.carouselCurrentIndex = event?.detail?.index ?? event;
    console.log('Carousel index changed to:', this.carouselCurrentIndex);
  }
  
  addCarouselItem(): void {
    const newIndex = this.carouselItems.length + 1;
    this.carouselItems.push({
      title: `Item ${newIndex}`,
      description: `Description for item ${newIndex}`
    });
    console.log('Added new carousel item');
  }
  
  removeCarouselItem(): void {
    if (this.carouselItems.length > 1) {
      this.carouselItems.pop();
      console.log('Removed last carousel item');
    } else {
      console.log('Cannot remove the last carousel item');
    }
  }
  
  // Event handlers
  onPillClick(event: any): void {
    this.lastEvent = 'click';
    this.lastEventDetails = event;
    console.log('Pill clicked:', event);
  }
  
  onPillPressedChange(event: any): void {
    // The event from the Fabric component might be a custom event with detail
    const isPressed = event?.detail?.pressed ?? event;
    this.isPillPressed = !!isPressed;
    this.lastEvent = 'pressedchange';
    this.lastEventDetails = event;
    console.log('Pill pressed state changed:', isPressed);
  }
  
  onPillKeyPress(event: any): void {
    this.lastEvent = 'keypress';
    this.lastEventDetails = event;
    console.log('Pill key press:', event);
  }
  
  clearEventLog(): void {
    this.lastEvent = 'None';
    this.lastEventDetails = {};
  }
  
  // Dynamic pill methods
  addPill(): void {
    const appearances = ['primary', 'outline', 'subtle', 'transparent'];
    const randomAppearance = appearances[Math.floor(Math.random() * appearances.length)];
    
    this.dynamicPills.push({
      label: `Filter ${this.dynamicPills.length + 1}`,
      appearance: randomAppearance,
      disabled: false
    });
  }
  
  removePill(index: number): void {
    this.dynamicPills.splice(index, 1);
  }
  
  clearPills(): void {
    this.dynamicPills = [];
  }
  
  // Boolean attribute testing
  toggleDisabledState(): void {
    this.disabledState = !this.disabledState;
    console.log('Disabled state toggled to:', this.disabledState);
  }
  
  // Accordion menu methods
  toggleAccordionItem(index: number): void {
    if (this.expandMode === 'single') {
      // Close all other sections
      this.accordionItems.forEach((item, i) => {
        if (i !== index) {
          item.expanded = false;
        }
      });
    }
    
    // Toggle the clicked section
    this.accordionItems[index].expanded = !this.accordionItems[index].expanded;
  }
  
  toggleAccordionItemDisabled(index: number): void {
    // Simply toggle the disabled state
    this.accordionItems[index].disabled = !this.accordionItems[index].disabled;
    console.log(`Accordion item ${index} disabled state toggled to:`, this.accordionItems[index].disabled);
  }
  
  expandAllAccordionItems(): void {
    this.accordionItems.forEach(item => item.expanded = true);
  }
  
  collapseAllAccordionItems(): void {
    this.accordionItems.forEach(item => item.expanded = false);
  }
  
  onAccordionExpandedChange(event: any, index: number): void {
    console.log(`Accordion item ${index} expanded changed:`, event);
    this.accordionItems[index].expanded = event;
  }
  
  // Component state display
  getComponentState(): any {
    return {
      pillAppearance: this.pillAppearance,
      pillSize: this.pillSize,
      isPillDisabled: this.isPillDisabled,
      isPillPressed: this.isPillPressed,
      pillLabel: this.pillLabel,
      isPillTwoWayPressed: this.isPillTwoWayPressed,
      dynamicPillCount: this.dynamicPills.length,
      disabledState: this.disabledState,
      expandMode: this.expandMode,
      accordionItemsCount: this.accordionItems.length,
      carouselCurrentIndex: this.carouselCurrentIndex,
      disableCarouselAnimation: this.disableCarouselAnimation,
      carouselItemsCount: this.carouselItems.length
    };
  }
  
  // Original accordion methods
  onSection1ExpandedChange(expanded: boolean): void {
    this.section1Expanded = expanded;
    console.log('Section 1 expanded state changed:', expanded);
  }
  
  onExpandedChange(event: any): void {
    console.log('Accordion expanded change:', event);
  }
  
  onMenuItemSelect(itemName: string): void {
    this.lastSelectedItem = itemName;
    console.log('Menu item selected:', itemName);
  }
  
  onCheckboxChange(itemName: string, checked: boolean): void {
    this.lastSelectedItem = `${itemName} (${checked ? 'Checked' : 'Unchecked'})`;
    console.log('Checkbox changed:', itemName, checked);
  }
  
  toggleExpandMode(): void {
    this.expandMode = this.expandMode === 'single' ? 'multi' : 'single';
    console.log('Expand mode toggled to:', this.expandMode);
  }
  
  toggleSection2Disabled(): void {
    this.section2Disabled = !this.section2Disabled;
    console.log('Section 2 disabled state toggled to:', this.section2Disabled);
  }
  
  expandAllSections(): void {
    this.section1Expanded = true;
    this.section2Expanded = true;
  }
  
  collapseAllSections(): void {
    this.section1Expanded = false;
    this.section2Expanded = false;
  }
} 