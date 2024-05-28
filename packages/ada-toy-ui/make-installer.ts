import type { Plugin, APP } from "vue";
import { each } from "lodash-es";
import { INSTALLED_KEY } from "@ada-ui/constants";

export const makeInstaller = (components: Plugin[]) => {
  const installer = (app: APP) => {
    if (app[INSTALLED_KEY]) return;
    each(components, (c) => app.use(c));
    app[INSTALLED_KEY] = true;
  };
  return installer;
};
