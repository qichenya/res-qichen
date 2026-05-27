/// <reference types="vite/client" />

interface ImportMeta {
  glob(modules: Record<string, string>): Record<string, () => Promise<any>>
}
