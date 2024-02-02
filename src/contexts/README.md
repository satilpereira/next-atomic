<!-- 
  This folder stores context providers and consumers that are used in multiple places in the application. It is a good practice to organize the context files in subfolders, according to the context of the context.
 -->

# Contexts

This folder is used to store context providers and consumers that are used in multiple places in the application. It is a good practice to organize the context files in subfolders, according to the context of the context.

For example, if you have a context that is used to manage the state of a theme, you can create a `Theme` folder and store the context file there. If you have a context that is used to manage the state of the user, you can create a `user` folder and store the context file there.

This way, you can easily find the context you need when you need it.

## Example

```tsx
// src/contexts/Theme/index.tsx

import React, { createContext, useContext, useState } from 'react';

export interface ThemeContextValue {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

## Usage

```tsx
// src/pages/index.tsx

import React from 'react';

import { ThemeProvider, useTheme } from '../contexts/Theme';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider>
      <div>
        <button onClick={() => setTheme('dark')}>Switch to dark theme</button>
      </div>
    </ThemeProvider>
  );
}
```

## Suggestions

- Create a subfolder for each context of the context.
- Name the context file according to the context of the context.
- Use the `index.tsx` file to export the context from the subfolder.

```tsx
// src/contexts/index.ts
import * as themeContexts from './theme';

export { themeContexts };
```

---

<!-- 
  SPDX-License-Identifier: (EUPL-1.2 AND MIT)
 -->
