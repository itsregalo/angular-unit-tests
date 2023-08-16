# AngularTourOfHeroes

1. Creating a new project

```bash
ng new angular-tour-of-heroes
```

2. Serving the application

```bash
cd angular-tour-of-heroes                                               
ng serve --open
```

### Skipping Components, Jumping into testing with Jest

```bash
npm uninstall @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter
```

* In angular.json, remove the karma test runner and replace it with jest
* In package.json, remove the karma and jasmine dependencies and replace them with jest

* Install jest and jest-preset-angular

```bash
npm install jest jest-preset-angular @types/jest --save-dev
```
