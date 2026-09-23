import { build } from "vite";
import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

// Use the same Vite asset naming for browser and server builds so the
// prerendered image and PDF URLs refer to the production assets.
await build();
const serverDir = resolve("node_modules/.cache/portfolio-prerender");
await build({
  build: {
    ssr: "src/entry-server.jsx",
    outDir: serverDir,
    emptyOutDir: false,
    copyPublicDir: false,
    rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
  },
});
const { render } = await import(pathToFileURL(resolve(serverDir, "entry-server.mjs")));
const file = resolve("dist/index.html");
const template = await readFile(file, "utf8");
if (!template.includes('<div id="root"></div>')) {
  throw new Error("Cannot prerender: missing root placeholder");
}
await writeFile(file, template.replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`));
console.log("Prerendered Spanish portfolio into dist/index.html");
