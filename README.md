<img src="app/images/logo.png" align="right" width="100px" height="100px" />

# Marchetti_boilerplate

[![Known Vulnerabilities](https://snyk.io/test/github/thallesmarchetti/marchetti-boilerplate/badge.svg)](https://snyk.io/test/github/thallesmarchetti/marchetti-boilerplate)
[![devDependency Status](https://david-dm.org/thallesmarchetti/marchetti-boilerplate/dev-status.svg)](https://david-dm.org/thallesmarchetti/marchetti-boilerplate#info=devDependencies)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GitHub stars](https://img.shields.io/github/stars/thallesmarchetti/Marchetti_boilerplate?style=social)](https://github.com/thallesmarchetti/Marchetti_boilerplate/stargazers)

This is my first open source project, that provides me help to build a static website organized, standardized web apps with quality and agility.

## Requirements

Make sure you have all these dependencies installed before moving on:

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/en/)
- [Gulp](https://gulpjs.com/)

## Instructions

```bash
1. Clone the project:
$ git clone https://github.com/thallesmarchetti/marchetti-boilerplate.git

2. Change directory to the cloned folder:
$ cd marchetti-boilerplate

3. Install required dependences:
$ yarn

4. Build project for development:
$ gulp
```

Now the local dev is running at localhost:8080 :smile:

## Structure

The basic structure of the project is given in the following way:

```
│
├── app/
│   │── images/
│   │── javascript/
│   │    ├── scripts.js
│   │── stylus/
│   │    ├── main.styl
│   │── views/
│   │    │── content/
│   │    │   ├── main.html
│   │    │── includes/
│   │    │   ├── footer.html
│   │    │   ├── head.html
│   │    │   ├── header.html
│   │    │── layout/
│   │    │   ├── layout.html
│   │    │
│   └── index.html
│
├── .editorconfig
├── .eslintrc
├── .gitignore
├── gulpfile.js
├── LICENSE.md
├── package.json
└── README.md
```

## Dependencies

Building a project requires a few dependencies, they are needed only during development and should not be installed on production. They will be installed along with your project dependencies when running  `yarn` command.

### Tasks

- `gulp`: run all tasks for development and initialize watch for changes and a server
- `gulp deploy`: run all tasks to build

### Scripts

- `yarn dev`: run all tasks for development and initialize watch for changes and a server.
- `yarn build`: run all tasks to build.

### License

[MIT License](LICENSE.md) © [Thalles Marchetti](https://github.com/thallesmarchetti)

### Acknowledgments

Inspiration from some projects of my friend [willian_justen](https://github.com/willianjusten)
