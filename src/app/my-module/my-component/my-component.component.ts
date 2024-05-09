import { Component } from '@angular/core';
import { setTheme, fabricLightTheme } from "@fabric-msft/theme";
import { BadgeWrapperModule } from "@fabric-msft/fluent-angular";

setTheme(fabricLightTheme);

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [BadgeWrapperModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponent {

}
