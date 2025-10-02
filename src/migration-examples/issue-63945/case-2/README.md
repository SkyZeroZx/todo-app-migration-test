Case 2: Remove unused module and replace multiple modules

This folder contains two separate example sets:

- Unused module example (`unused.ts`, `unused.module.ts`, `comp-unused.ts`) where the module exports a directive that isn't used in the component. After migration the module should be removed and the component import cleared.

- Multiple modules example (`button.ts`, `button.module.ts`, `card.ts`, `card.module.ts`, `comp-multiple.ts`) where two modules each export a component that is used by a standalone component that imports both modules. After migration the module files should be removed and the standalone component should import the component classes directly.
