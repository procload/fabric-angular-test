import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FabricComponentsDemoComponent } from './fabric-components-demo/fabric-components-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FabricComponentsDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'fabric-angular-test';
}
