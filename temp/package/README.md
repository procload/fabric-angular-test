# Angular Wrappers for Microsoft Fabric web components

The Fabric UX System represents a leap forward in design consistency and extensibility for Microsoft Fabric. Developed by the Fabric UX Team, this system is a collection of design guidance, common patterns, and reusable components created to empower designers and developers to build consistent, accessible, and engaging workload experiences across Fabric surfaces.

View the [Fabric UX System documentation](https://aka.ms/fabricux).

`@fabric-msft/fabric-angular` is a collection of lightweight Angular wrappers around Fabric web components. Each Angular component corresponds to a web component of the same name.

These Angular components accept the same inputs as the corresponding web components and pass these inputs directly to the HTML attributes of the web components. Additionally, the ComponentModules automatically register the web components with the browser’s customElements, allowing the web components to be used in your Angular application with a single import and no additional configuration.

## Installation

**npm**

```bash
yarn add -D @fabric-msft/fabric-angular
```

**Yarn**

```bash
yarn add -D @fabric-msft/fabric-angular
```

## Usage

Import the component into your Angular project's root module file and use it as you would any Angular component:

```typescript
import { LoadingButtonWrapperModule } from "@fabric-msft/fabric-angular";

@NgModule({
  imports: [LoadingButtonWrapperModule]
})

// Use the component selector in your template
<fabric-loading-button shape="rounded" loading>Loading</fabric-loading-button>
```

## Applying styles

Also available from Angular Fabric Components are the methods required for enabling styles and themes. In the root of your application, styling can be enabled like this:

```js
import { fabricLightTheme, setTheme } from "@fabric-msft/theme";

setTheme(fabricLightTheme);

// or use the base Fluent theme
// setTheme(webLightTheme);
```
