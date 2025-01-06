# componentlibrary
This repository documents my learning process in developing a custom React component library. It includes experiments, code examples, and best practices.

# 1. Project Setup
1. Create a new folder: `mkdir componentlibrary && cd componentlibrary`
2. Initialize npm: `npm init -y` 
3. Install dependencies:
   - `npm install react typescript tslib`
   - `npm install rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript @rollup/plugin-peer-deps-external @rollup/plugin-terser rollup-plugin-dts --save-dev`
   - `npm install rollup-plugin-postcss --save-dev` 
   - `npm install @types/react --save-dev`
4. Create TypeScript configuration: `npm tsc --init` 
5. Create project structure:
   - Create `src` folder
   - Inside `src`, create `components` folder
   - Create `src/index.ts` 

# 2. Development (example)
   - Create a component file: `src/components/Button/Button.tsx`
   - (Implement your component logic)

# 3. Build & Publish
1. Run Rollup to build the library: `npm run rollup` (you'll need to create a `rollup.config.js` file)
2. Publish to npm:
   - `npm login`
   - `npm publish`

# 4. Usage in another project
1. Install the library: `npm i kn-componentlibrary` 
   

# Base Version Commit
1. Commit the initial project setup, including `package.json`, `tsconfig.json`, `rollup.config.js`, and basic component structure.
2. Add a note to the commit message describing the initial setup and the purpose of the library.
3. Push the commit to your Git repository.
