# @faiz-ui/accordion

A beautifully crafted accordion component with hand-drawn styling, supporting controlled/uncontrolled modes, multiple selection, smooth animations, and comprehensive accessibility features.

## Features

- 🎨 **Hand-drawn aesthetic** - Unique visual style with slight rotations, shadows, and organic feel
- 🎛️ **Flexible modes** - Both controlled and uncontrolled operation
- 🔢 **Multiple selection** - Allow single or multiple panels to be open simultaneously
- ♿ **Accessibility first** - Full ARIA support and keyboard navigation
- 🎬 **Smooth animations** - React Spring powered expand/collapse transitions
- 🎨 **Customizable styling** - Multiple variants, colors, and sizes
- 📱 **Responsive design** - Works seamlessly across all device sizes
- 🔧 **TypeScript support** - Fully typed with comprehensive interfaces

## Installation

```sh
pnpm add @faiz-ui/accordion
# or
npm i @faiz-ui/accordion
```

## Quick Start

```tsx
import {Accordion, AccordionItem, AccordionHeader, AccordionContent} from "@faiz-ui/accordion";

function App() {
  return (
    <Accordion defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionHeader value="item-1">What is hand-drawn design?</AccordionHeader>
        <AccordionContent value="item-1">
          Hand-drawn design mimics the organic, imperfect nature of hand-crafted elements, creating
          a warm and approachable user interface.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionHeader value="item-2">How does it work?</AccordionHeader>
        <AccordionContent value="item-2">
          Through CSS transforms, shadows, and subtle animations, we create the illusion of
          hand-drawn elements while maintaining digital precision.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

## API Reference

### Accordion

The main container component that manages the state and provides context to child components.

#### Props

| Prop            | Type                                                                       | Default     | Description                         |
| --------------- | -------------------------------------------------------------------------- | ----------- | ----------------------------------- |
| `value`         | `string \| string[]`                                                       | -           | Controlled value of expanded items  |
| `defaultValue`  | `string \| string[]`                                                       | -           | Default value for uncontrolled mode |
| `onValueChange` | `(value: string \| string[]) => void`                                      | -           | Callback when value changes         |
| `allowMultiple` | `boolean`                                                                  | `false`     | Allow multiple items to be expanded |
| `isDisabled`    | `boolean`                                                                  | `false`     | Disable all accordion interactions  |
| `color`         | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` | Color theme                         |
| `size`          | `'sm' \| 'md' \| 'lg'`                                                     | `'md'`      | Size variant                        |
| `variant`       | `'solid' \| 'outline' \| 'ghost' \| 'light' \| 'flat' \| 'sketchy'`        | `'solid'`   | Visual variant                      |
| `customStyles`  | `string`                                                                   | -           | Additional CSS classes              |
| `className`     | `string`                                                                   | -           | CSS class name                      |
| `as`            | `React.ElementType`                                                        | `'div'`     | Component to render as              |

### AccordionItem

Individual accordion item container.

#### Props

| Prop           | Type                | Default      | Description                    |
| -------------- | ------------------- | ------------ | ------------------------------ |
| `value`        | `string`            | **required** | Unique identifier for the item |
| `isDisabled`   | `boolean`           | `false`      | Disable this specific item     |
| `customStyles` | `string`            | -            | Additional CSS classes         |
| `className`    | `string`            | -            | CSS class name                 |
| `as`           | `React.ElementType` | `'div'`      | Component to render as         |

### AccordionHeader

Clickable header that triggers expand/collapse.

#### Props

| Prop           | Type                         | Default      | Description                           |
| -------------- | ---------------------------- | ------------ | ------------------------------------- |
| `value`        | `string`                     | **required** | Must match parent AccordionItem value |
| `customStyles` | `string`                     | -            | Additional CSS classes                |
| `className`    | `string`                     | -            | CSS class name                        |
| `as`           | `React.ElementType`          | `'button'`   | Component to render as                |
| `onClick`      | `React.MouseEventHandler`    | -            | Additional click handler              |
| `onKeyDown`    | `React.KeyboardEventHandler` | -            | Additional keydown handler            |

### AccordionContent

Collapsible content area with smooth animations.

#### Props

| Prop           | Type                | Default      | Description                           |
| -------------- | ------------------- | ------------ | ------------------------------------- |
| `value`        | `string`            | **required** | Must match parent AccordionItem value |
| `customStyles` | `string`            | -            | Additional CSS classes                |
| `className`    | `string`            | -            | CSS class name                        |
| `as`           | `React.ElementType` | `'div'`      | Component to render as                |

## Usage Examples

### Basic Accordion

```tsx
import {Accordion, AccordionItem, AccordionHeader, AccordionContent} from "@faiz-ui/accordion";

function BasicExample() {
  return (
    <Accordion>
      <AccordionItem value="faq-1">
        <AccordionHeader value="faq-1">What makes this design special?</AccordionHeader>
        <AccordionContent value="faq-1">
          The hand-drawn aesthetic creates a unique, approachable feel that stands out from typical
          flat design patterns.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="faq-2">
        <AccordionHeader value="faq-2">Is it accessible?</AccordionHeader>
        <AccordionContent value="faq-2">
          Yes! Full ARIA support, keyboard navigation, and screen reader compatibility are built-in.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

### Controlled Mode

```tsx
import {useState} from "react";
import {Accordion, AccordionItem, AccordionHeader, AccordionContent} from "@faiz-ui/accordion";

function ControlledExample() {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <div className="mb-4">
        <button onClick={() => setValue("item-1")}>Open First</button>
        <button onClick={() => setValue("item-2")}>Open Second</button>
        <button onClick={() => setValue("")}>Close All</button>
      </div>

      <Accordion value={value} onValueChange={setValue}>
        <AccordionItem value="item-1">
          <AccordionHeader value="item-1">Controlled Item 1</AccordionHeader>
          <AccordionContent value="item-1">
            This accordion is controlled by external state.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionHeader value="item-2">Controlled Item 2</AccordionHeader>
          <AccordionContent value="item-2">
            You can control which items are open programmatically.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
```

### Multiple Selection

```tsx
import {Accordion, AccordionItem, AccordionHeader, AccordionContent} from "@faiz-ui/accordion";

function MultipleExample() {
  return (
    <Accordion allowMultiple defaultValue={["feature-1", "feature-3"]}>
      <AccordionItem value="feature-1">
        <AccordionHeader value="feature-1">Feature 1</AccordionHeader>
        <AccordionContent value="feature-1">
          Multiple items can be open simultaneously.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="feature-2">
        <AccordionHeader value="feature-2">Feature 2</AccordionHeader>
        <AccordionContent value="feature-2">
          Users can expand as many sections as needed.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="feature-3">
        <AccordionHeader value="feature-3">Feature 3</AccordionHeader>
        <AccordionContent value="feature-3">
          Perfect for feature comparisons or detailed information.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

### Different Variants and Colors

```tsx
import {Accordion, AccordionItem, AccordionHeader, AccordionContent} from "@faiz-ui/accordion";

function VariantsExample() {
  return (
    <div className="space-y-6">
      {/* Sketchy variant with secondary color */}
      <Accordion variant="sketchy" color="secondary" size="lg">
        <AccordionItem value="sketchy-1">
          <AccordionHeader value="sketchy-1">Sketchy Design</AccordionHeader>
          <AccordionContent value="sketchy-1">
            Extra hand-drawn feel with mixed border styles.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Outline variant with success color */}
      <Accordion variant="outline" color="success">
        <AccordionItem value="outline-1">
          <AccordionHeader value="outline-1">Outline Style</AccordionHeader>
          <AccordionContent value="outline-1">
            Clean outline design with transparent background.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Ghost variant with warning color */}
      <Accordion variant="ghost" color="warning" size="sm">
        <AccordionItem value="ghost-1">
          <AccordionHeader value="ghost-1">Ghost Style</AccordionHeader>
          <AccordionContent value="ghost-1">
            Subtle dashed borders for a lighter appearance.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
```

## Accessibility

The accordion component is built with accessibility as a first-class citizen:

### ARIA Support

- **`aria-expanded`**: Indicates whether the accordion panel is expanded
- **`aria-controls`**: Links the header to its corresponding content panel
- **`aria-labelledby`**: Links the content panel to its header
- **`role="region"`**: Identifies the content area as a landmark region

### Keyboard Navigation

| Key     | Action                               |
| ------- | ------------------------------------ |
| `Tab`   | Move focus between accordion headers |
| `Enter` | Toggle the focused accordion panel   |
| `Space` | Toggle the focused accordion panel   |

### Screen Reader Support

- Headers are properly announced as buttons
- Expansion state is communicated to screen readers
- Content relationships are clearly established through ARIA attributes

## Best Practices

### Content Organization

```tsx
// ✅ Good: Logical grouping and clear hierarchy
<Accordion>
  <AccordionItem value="overview">
    <AccordionHeader value="overview">Product Overview</AccordionHeader>
    <AccordionContent value="overview">
      Brief description of the main features and benefits.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="features">
    <AccordionHeader value="features">Key Features</AccordionHeader>
    <AccordionContent value="features">
      <ul>
        <li>Feature 1: Description</li>
        <li>Feature 2: Description</li>
      </ul>
    </AccordionContent>
  </AccordionItem>
</Accordion>

// ❌ Avoid: Too many nested accordions
<Accordion>
  <AccordionItem value="section1">
    <AccordionHeader value="section1">Section 1</AccordionHeader>
    <AccordionContent value="section1">
      <Accordion> {/* Avoid nesting accordions */}
        <AccordionItem value="subsection1">
          <AccordionHeader value="subsection1">Subsection</AccordionHeader>
          <AccordionContent value="subsection1">Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Performance Considerations

```tsx
// ✅ Good: Memoize expensive content
const ExpensiveContent = React.memo(() => {
  const data = useMemo(() => processLargeDataset(), []);
  return <div>{data}</div>;
});

<AccordionContent value="data">
  <ExpensiveContent />
</AccordionContent>

// ✅ Good: Lazy load content when needed
<AccordionContent value="charts">
  <Suspense fallback={<div>Loading charts...</div>}>
    <LazyChartComponent />
  </Suspense>
</AccordionContent>
```

### Responsive Design

```tsx
// ✅ Good: Responsive sizing
<Accordion size={{base: "sm", md: "md", lg: "lg"}} className="w-full max-w-4xl mx-auto">
  {/* Content */}
</Accordion>
```

## Styling Customization

### Custom CSS Classes

```tsx
<Accordion customStyles="my-custom-accordion" className="shadow-lg">
  <AccordionItem value="item-1" customStyles="bg-gradient-to-r from-blue-50 to-purple-50">
    <AccordionHeader value="item-1">Custom Styled Header</AccordionHeader>
    <AccordionContent value="item-1">Custom content styling</AccordionContent>
  </AccordionItem>
</Accordion>
```

### CSS Variables

The component respects CSS custom properties for theming:

```css
.my-custom-accordion {
  --accordion-border-color: #e2e8f0;
  --accordion-shadow-color: rgba(0, 0, 0, 0.1);
  --accordion-rotation: -0.5deg;
}
```

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import type {AccordionProps, AccordionValue, UseAccordionProps} from "@faiz-ui/accordion";

// Type-safe controlled accordion
const [value, setValue] = useState<AccordionValue>("");

const handleValueChange = (newValue: AccordionValue) => {
  setValue(newValue);
  // newValue is properly typed as string | string[]
};

<Accordion
  value={value}
  onValueChange={handleValueChange}
  allowMultiple={false} // When false, value is string
>
  {/* Content */}
</Accordion>;
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for details.

## License

MIT © [Faiz UI](https://github.com/faiz-ui/faiz-ui)
