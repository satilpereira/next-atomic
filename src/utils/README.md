<!-- 
  This utils folder is used to store utility functions that are used across the application. For example, if you have a utility function that is used to format a date, you can create a `formatDate` folder and store the utility file there. If you have a utility function that is used to parse a query string, you can create a `parseQueryString` folder and store the utility file there. 
 -->

# Utils

This folder is used to store utility functions that are used across the application. For example, if you have a utility function that is used to format a date, you can create a `formatDate` folder and store the utility file there. If you have a utility function that is used to parse a query string, you can create a `parseQueryString` folder and store the utility file there.

This way, you can easily find the utility function you need when you need it.

## Example

```tsx
// src/utils/formatDate/index.ts
export function formatDate(date: Date) {
  return date.toISOString();
}
```

## Usage

```tsx
// src/pages/index.tsx
import React from 'react';

import { formatDate } from '../utils/formatDate';

export default function Home() {
  const date = new Date();

  return (
    <div>
      <p>Today's date is: {formatDate(date)}</p>
    </div>
  );
}
```

## Suggestions


- If you have a utility function that is used to parse a query string, you can create a `parseQueryString` folder and store the utility file there.
- For example, `src/utils/parseQueryString/index.ts`
- This way, you can easily find the utility function you need when you need it.
- You can also create subfolders within the `utils` folder to organize your utility functions.
- For example, `src/utils/formatDate/index.ts` and `src/utils/parseQueryString/index.ts`
- This way, you can easily find the utility function you need when you need it.

---
