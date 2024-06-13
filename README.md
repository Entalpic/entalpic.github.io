# Entalpic's website

From [Start Bootstrap - Grayscale](https://startbootstrap.com/theme/grayscale/)

## Download and Installation

To begin using this template, choose one of the following options to get started:

- [Download the latest release on Start Bootstrap](https://startbootstrap.com/theme/grayscale/)
- Install using npm: `npm i startbootstrap-grayscale`
- Clone the repo: `git clone https://github.com/StartBootstrap/startbootstrap-grayscale.git`
- [Fork, Clone, or Download on GitHub](https://github.com/StartBootstrap/startbootstrap-grayscale)

## Usage

Clone the source files of the theme and navigate into the theme's root directory. Run `npm install` and then run `npm start` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the `package.json` file to see which scripts are included.

#### `npm` scripts

- `npm run build` builds the project - this builds assets, HTML, JS, and CSS into `dist`
- `npm run build:assets` copies the files in the `src/assets/` directory into `dist`
- `npm run build:pug` compiles the Pug located in the `src/pug/` directory into `dist`
- `npm run build:scripts` brings the `src/js/scripts.js` file into `dist`
- `npm run build:scss` compiles the SCSS files located in the `src/scss/` directory into `dist`
- `npm run clean` deletes the `dist` directory to prepare for rebuilding the project
- `npm run start:debug` runs the project in debug mode
- `npm start` or `npm run start` runs the project, launches a live preview in your default browser, and watches for changes made to files in `src`

You must have npm installed in order to use this build environment.

### Deploy

```bash
git subtree push --prefix dist origin gh-pages
```
