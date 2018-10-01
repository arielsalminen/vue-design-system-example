# Using Vue Design System as an NPM Dependency

## Testing things locally

1. Build your design system first for production by running `npm run build:system` inside the vueds project.

2. After done, switch to this project and run first `rm -rf node_modules` to make sure the temporary local installation won’t cause issues (if doing a direct clone of this repo, remove also this line from package.json: `"vue-design-system": "file:../vue-design-system"`).

3. Now install the system locally by running `npm install --save file:/Users/viljamis/code/vue-design-system` (modify the path to match your own system).

4. Once you’ve installed the design system, run `npm install` to install the rest of the dependencies.

5. Now you can run `npm run dev` to test that your design system build and its components work.

6. If everything works you should probably move your system to a private GitHub repository and do the NPM install directly from that repo.
