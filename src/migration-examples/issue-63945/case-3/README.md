Case 3: Mixed exports and module+component in same file

This folder contains two related examples:

- Mixed exports (`declarations.ts`, `mixed.module.ts`, `comp.ts`) where a module exports a used component and an unused directive. After migration the module should be removed and only the used component should be imported.

- Module+component in same file (`other.ts`, `comp-module-samefile.ts`) where the module and component are declared in the same file. The migration may update the `imports` array in the standalone component but may require a manual adjustment of the import statement (known limitation).
