# Credit Card Validation

Implementation of the validation process for the credit card number, to catch users mistakes, and provide them helpful feedback.

## Online Demo

[Click here!](http://45.55.51.227/)

## Requirements

The App was developed using the requirements below:

| npm    | yarn   | node   |
| ------ |:------:|:------:|
| +4.2.0 | +1.0.2 | +7.8.0 |

## Build

### The following yarn commands are available:
- `yarn install` (install dependencies)
- `yarn test` (jest test)
- `yarn testw`(jest test with watch)
- `yarn dev` (development build with watch)
- `yarn build` (production/release minified build)
- `yarn build:dev` (development build)
- `yarn build:dev:no-progress` (development build without progress)

### Known Build issues:

- Node Sass could not find a binding for your current environment: OS X 64-bit with Node.js 7.x

```
npm rebuild node-sass --force
```

## Server

### To run the API server, go to projecr root dir and execute the command below:

```
node server/server.js
```

## Run with live-server (for development)

First you need to install [live-server](https://www.npmjs.com/package/live-server)

### Live-server Command

* After a successful build, go to credit-card-validation root dir and run:

```
live-server --watch=dist --ignore=node_modules
```

* Now you can access via (http://127.0.0.1:8080/dist/)

## User Scenarios

A user can enter its credit card information by filling the presented form and clicking the submit button.

### Validation Process

As the user is entering the credit card number, 4 icons will indicate the validity and classification as follows:

* (Orange question mark): indicates that the number is not VISA, Mastercard nor American Express
* (Credit Card Flags): if it turn blue, indicates that the card number classification. Otherwise, should be gray
* (red X or green Check): the X indicates that the card number is invalid. If it is valid, it turns to a green check

#### Credit Card Number Validation

The validation occours in a few steps:

* [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) is used to check and validate the number itself
* Classification on which type of credit card according to the rules below:

| VISA            | Mastercard    | Amex                              |
| --------------- |:-------------:|:---------------------------------:|
| Starts with 4   | Starts with 5 | Starts with 3, followed by 4 or 7 |
| 13 to 16 digits | 16 digits     | 15 digits                         |

### Examples

| VISA             | Mastercard       | Amex            | Unknown          |
| ---------------- |:----------------:|:---------------:|:----------------:|
| 4716054435536473 | 5234432517395978 | 371495189813044 | 6011240038806135 |
| 47165456591094   | 5496363916395371 | 349581698138574 | 30486343620923   |
| 448545447359203  | 5184526516660231 | 377794705744913 | 36419316382886   |
