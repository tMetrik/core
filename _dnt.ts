import { build, emptyDir } from "jsr:@deno/dnt@0.41.1";
import config from "./deno.json" with { type: "json" };

const { version, name } = config;
await emptyDir("./dist");

await build({
  entryPoints: ["mod.ts"],
  outDir: "./dist",
  typeCheck: false,
  test: true,
  shims: {},
  compilerOptions: {
    lib: ["ESNext", "DOM", "ESNext.AsyncIterable"],
  },
  packageManager: "pnpm",
  package: {
    name,
    version,
    description: "tMetrik core",
    author: "Roj <rojvv@icloud.com>",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/tMetrik/core.git",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "dist/LICENSE");
  },
});
