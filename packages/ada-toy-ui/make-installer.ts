import type { Plugin, App } from "vue";
import { each } from "lodash-es";
import { INSTALLED_KEY } from "@adz-ui/constants";

export const makeInstaller = (components: Plugin[]) => {
  const installer = (app: App) => {
    if (app[INSTALLED_KEY]) return;
    each(components, (c) => app.use(c));
    app[INSTALLED_KEY] = true;
  };
  return installer;
};
