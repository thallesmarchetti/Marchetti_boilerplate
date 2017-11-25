<img src="src/img/brand.png" align="right" width="80px" height="80px" />

# Marchetti Boilerplate

[![Known Vulnerabilities](https://snyk.io/test/github/thallesmarchetti/marchetti-boilerplate/badge.svg)](https://snyk.io/test/github/thallesmarchetti/marchetti-boilerplate)

This is my first open source project, that provides me help to build a static website with quality and agility.

## Instructions

1. Install: [NodeJS](https://nodejs.org/en/download/) and [Gulp](https://gulpjs.com/)

2. Clone the project:
```sh
$ git clone https://github.com/thallesmarchetti/marchetti-boilerplate.git
```

3. Then go to the project's folder:
```sh
$ cd marchetti-boilerplate
```

4. Install dependencies:
```sh
$ npm install
```

5. run:
```sh
$ gulp
```

Now the local dev is running at localhost:8080 :smile:

### Tasks

- `gulp`: run all tasks for development and initialize watch for changes and a server
- `gulp -p`: run all tasks for production and initialize watch for changes and a server
- `gulp nunjucks`: compile html files
- `gulp js`: execute js files
- `gulp css`: compile css files
- `gulp images`: compress image files
- `gulp watch`: call for watch files
- `gulp browser-sync`: inicialize a server
- `gulp deploy-surge`: run all tasks and deploy files to surge
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
