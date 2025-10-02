Case 1: Replace module with component

Files in this folder represent the state before running the `prune-ng-modules` migration.

- `other.ts` - declares `OtherComponent`.
- `other.module.ts` - declares `OtherModule` that imports and exports `OtherComponent`.
- `comp.ts` - a standalone component that imports `OtherModule` in its `imports` array.

Use these files to reproduce the migration behavior where the module should be removed and replaced with the component import.
