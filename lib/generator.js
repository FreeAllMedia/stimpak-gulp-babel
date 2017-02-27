export default class StimpakGulp {
	setup(stimpak) {
		stimpak
			.command("npm install gulp gulp-load-plugins yargs gulp-babel babel-preset-env --save-dev", (stimpak, stdout, stderr) => {
				process.stdout.write(stdout);
			})
			.render("**/*", `${__dirname}/../templates`);
	}
}
