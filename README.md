# stimpak gulp-babel

Create dynamically loaded gulp tasks that automatically load plugins.

## Installation

```shell
$ npm install stimpak stimpak-gulp-babel -g
```

## Usage

```shell
$ cd my-project-directory
$ stimpak gulp-babel
```

## Dynamic Task & Plugin Loading

1. Create a dynamic task file in the `./tasks` directory.
2. Install the gulp plugins you want to use normally via `npm`.
3. Use plugins without requiring or importing via the dynamic task.
4. Gulp recognizes the new task automatically, so you can immediately use it on the command-line.

```javascript
// ./tasks/do-something.js
module.exports = (gulp, plugins) => {
  gulp.task("do-something", () => {
    gulp.src("**/*.js")
      .pipe(plugins.concat())
      .pipe(gulp.dest("./dist/"));
  });
};
```
