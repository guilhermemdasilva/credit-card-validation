# Credit Card Validation

Implementation of the validation process for​ the​ credit card​ number​, to​ catch​ users​ mistakes, and provide​ them​ helpful​ feedback.

## Build

### The following yarn commands are available:
- `yarn install` (install dependencies)
- `yarn build` (production/release build)
- `yarn build:dev` (development build)
- `yarn build:dev:no-progress` (development build without progress)

### Known Build issues:

- Node Sass could not find a binding for your current environment: OS X 64-bit with Node.js 7.x

```
npm rebuild node-sass --force
```

## Run with live-server

First you need to install [live-server](https://www.npmjs.com/package/live-server)

### Live-server Command

* After a successful build, go to credit-card-validation root dir and run:

```
live-server --watch=dist --ignore=node_modules
```

* Now you can access via (http://127.0.0.1:8080/dist/)