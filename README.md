# Using Vue Design System as an NPM Dependency

## Testing things locally

1. Build your design system first for production by running `npm run build:system`.
2. After done, switch to this repository and install the system locally by running `npm install --save file:/Users/viljamis/code/vue-design-system` (modify the path to match your own system).
3. Once you’ve installed the design system, run `npm install` to install the rest of the dependencies.
4. Now you can run `npm run dev` to test that your design system build and its components work.
