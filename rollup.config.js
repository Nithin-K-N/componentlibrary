import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";


import packageJson from "./package.json" assert { type: "json" };

export default [
    {
      input: "src/index.ts",
      output: [
        {
          file: packageJson.main,
          format: "cjs",
          sourcemap: true,
        },
        {
          file: packageJson.module,
          format: "esm",
          sourcemap: true,
        },
      ],
      plugins: [
        PeerDepsExternalPlugin(),
        terser(),
        resolve(),
        commonjs(),
        typescript(
          { tsconfig: "./tsconfig.json" }
        ),
      ],
      external:["react","react-dom"],
    },
    {
      input: "src/index.ts", // Input the generated declaration file
      output: [
        { file: packageJson.types }
      ],
      plugins: [
        dts()
      ],
    },
  ];