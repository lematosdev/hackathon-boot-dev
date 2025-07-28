// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    interface PageData {}
    interface ActionData {
      success: boolean;
      error?: string;
      data?: unknown;
      originalParams?: {
        race?: string;
        class?: string;
        background?: string;
        alignment?: string;
      };
    }
  }
}

export {};
