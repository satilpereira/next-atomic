<!-- 
  This folder is the react components folder for use with next.js, being them server or client components. Write a brief description of the folder here.
  Suggest folder organization, usage, etc... with example and detailed
 -->

# Components

This folder is used to store React components that are used in multiple places in the application. It is a good practice to organize the components in subfolders, according to the context of the component.

For example, if you have a component that is used to display a button, you can create a `Button` folder and store the component file there. If you have a component that is used to display a form, you can create a `form` folder and store the component file there.

This way, you can easily find the component you need when you need it.

## Example

```tsx
// src/components/Button/index.tsx
import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>{children}</button>
  );
}
```

## Usage

```tsx
// src/pages/index.tsx
import React from 'react';
import { Button } from '../components/Button';

export default function Home() {
  return (
    <div>
      <Button onClick={() => alert('Hello, world!')}>Click me!</Button>
    </div>
  );
}
```

## Detailed

- Create a subfolder for each context of the component.
- Name the component file according to the context of the component.
- Use the `index.tsx` file to export the component from the subfolder.

```tsx
// src/components/index.ts
import * as buttonComponents from './button';
import * as formComponents from './form';

export { buttonComponents, formComponents };
```

---