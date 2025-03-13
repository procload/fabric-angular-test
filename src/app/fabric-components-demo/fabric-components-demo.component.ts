import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FabricWrappersModule } from '@fabric-msft/fabric-angular';

interface CarouselItem {
  title: string;
  description: string;
}

interface DynamicPill {
  label: string;
  appearance: string;
  disabled: boolean;
}

@Component({
  selector: 'app-fabric-components-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FabricWrappersModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './fabric-components-demo.component.html',
  styleUrls: ['./fabric-components-demo.component.scss']
})
export class FabricComponentsDemoComponent {
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
      carouselCurrentIndex: this.carouselCurrentIndex,
      disableCarouselAnimation: this.disableCarouselAnimation,
      carouselItemsCount: this.carouselItems.length
    };
  }
} 