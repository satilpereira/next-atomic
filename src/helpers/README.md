# Helpers

This folder is used to store helper functions that are used in multiple places in the application. It is a good practice to organize the helper files in subfolders, according to the context of the helper function.

For example, if you have a helper function that is used to format dates, you can create a `date` folder and store the helper file there. If you have a helper function that is used to format numbers, you can create a `number` folder and store the helper file there.

This way, you can easily find the helper function you need when you need it.

## Example

```typescript
// src/helpers/date/format.ts
export interface FormatDateOptions {
  date: Date;
  format: string;
}

export function formatDate({ date, format }: FormatDateOptions) {
  // ...
}
```

## Suggestions

- Create a subfolder for each context of the helper function.
- Name the helper file according to the context of the helper function.
- Use the `index.js` file to export the helper functions from the subfolder.

```typescript
// src/helpers/index.ts
import * as dateHelpers from './date';
import * as numberHelpers from './number';

export { dateHelpers, numberHelpers };
```
---