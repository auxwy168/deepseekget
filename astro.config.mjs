import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://deepseekget.com",
  trailingSlash: "never",
  integrations: [
    sitemap({
      serialize: (item) => {
        if (!item.lastmod && item.url) {
          item.lastmod = new Date().toISOString();
        }
        return item;
      },
    }),
  ],
});
