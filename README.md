<img src="src/img/brand.png" align="right" width="80px" height="80px" />

# Marchetti Boilerplate

[![Known Vulnerabilities](https://snyk.io/test/github/thallesmarchetti/marchetti-boilerplate/badge.svg)](https://snyk.io/test/github/thallesmarchetti/marchetti-boilerplate)

This is my first open source project, that provides me help to build a static website organized, standardized web apps with quality and agility.

## Requirements

Make sure you have all these dependencies installed before moving on:

- [Node.js](//nodejs.org/en/)
- [NPM](//www.npmjs.com/)
- [Gulp](https://gulpjs.com/)

## Instructions

1. Clone the project:
```bash
$ git clone https://github.com/thallesmarchetti/marchetti-boilerplate.git

2. Change directory to the cloned folder:
$ cd marchetti-boilerplate

3. Install required npm dependences:
$ npm install

4. Build project for development:
$ gulp
```

Now the local dev is running at localhost:8080 :smile:

## Dependencies

Building a project requires a few dependencies, they are needed only during development and should not be installed on production. They will be installed along with your project dependencies when running `npm install` command.

### Tasks

- `gulp`: run all tasks for development and initialize watch for changes and a server
- `gulp -p`: run all tasks for production and initialize watch for changes and a server
- `gulp nunjucks`: compile html files
- `gulp javascript`: execute js files
- `gulp stylus`: compile css files
- `gulp images`: compress image files
- `gulp watch`: call for watch files
- `gulp browser-sync`: inicialize a server
- `gulp deploy-gh`: run all tasks and deploy files to gh-pages

### NPM Scripts

- `npm run lint`: lint all js errors, prepush and precommit
- `npm run fix`: fix all js errors

### Soon :soon:

I will introduce some automated tests.

### Contributing

Feel free to contribute and improve the project.

### License

[MIT License](LICENSE.md) © [Thalles Marchetti](https://github.com/thallesmarchetti)

### Acknowledgments

Inspiration from some projects of my friend [willian_justen](https://github.com/willianjusten)
