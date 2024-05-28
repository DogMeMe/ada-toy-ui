import type { App, Plugin } from "vue";

export type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(component: T) => {
  (component as Plugin).install = (app: App) => {
    app.component((component as any).name, component as Plugin);
  };
  return component as SFCWithInstall<T>;
};
