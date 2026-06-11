import type { BeforeMount } from '@monaco-editor/react'

export const configureMonaco: BeforeMount = (monaco) => {
    const ts = monaco.languages.typescript
    const compilerOptions = {
        jsx: ts.JsxEmit.ReactJSX,
        esModuleInterop: true,
        allowJs: true,
        allowNonTsExtensions: true,
        target: ts.ScriptTarget.Latest,
    }
    ts.typescriptDefaults.setCompilerOptions(compilerOptions)
    ts.javascriptDefaults.setCompilerOptions(compilerOptions)
    ts.typescriptDefaults.setDiagnosticsOptions({ noSemanticValidation: true })
    ts.javascriptDefaults.setDiagnosticsOptions({ noSemanticValidation: true })
}
