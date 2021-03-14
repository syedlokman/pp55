# How to Contribute

Any type of contribution to the project is also welcome! I use the GitHub issues as a todo list, so if you want to help, read existing issues. Or, if you want to add something new, write new issues with your ideas, and we will discuss it.

## Contribution to the README.md

Contributions to the README are welcome, especially considering that English is not my native language.

However, remember that you need to edit this README: https://github.com/Chronoblog/gatsby-theme-chronoblog/blob/master/packages/gatsby-theme-chronoblog/README.md - this one located in `packages/gatsby-theme-chronoblog/README.md` is "real".

## Process

At the moment I am working to ensure that the development process here is consistent with [GitHub flow](https://guides.github.com/introduction/flow/)

### Organization of this monorepository

This monorepo uses [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

- [packages](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/packages) folder. At the moment there is only [gatsby-theme-chronoblog/tree/master/packages/gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/packages/gatsby-theme-chronoblog) there, and all the main work on the project takes place in it. Perhaps in the future, additional packages will appear.

- [starters](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/starters) folder contains all the project starters.

- [examples](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/starters) folder contains examples of how Chronoblog can be used.

- [test-builds](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/test-builds) folder for test builds.

Such an organization allows you to check the work of any starter right during the work on the project. For example, by running `npm run start:chronoblog` command, you can make changes to [gatsby-theme-chronoblog/tree/master/packages/gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/packages/gatsby-theme-chronoblog) and immediately look at how the "chronoblog starter" works with these changes (at http://localhost:8000).

### Tests and Publication

The github action scripts can be viewed here: [workflows](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/.github/workflows). Each time changes are added to the repo, tests are launched. This allows to check if everything is working correctly.

We can say that the master branch is a development branch since changes in the branch alone do not lead to the publication of the project. Therefore, there may be bugs and problems in the master branch.

When updating the project version, packages are sent to npm, and starters, using [publish-starters.yml](https://github.com/Chronoblog/gatsby-theme-chronoblog/blob/master/.github/workflows/publish-starters.yml), update their individual repositories. Because of this, chronoblog starters have such strange commits (for example, https://github.com/Chronoblog/gatsby-starter-chronoblog).

### TypeScript and JSDoc for type annotation

If you looked at the `package.json` file in the root of the project, then you saw TypeScript and types for various libraries in the dependencies (`@types/node`, `@types/react`, etc.). But the project is written in `js`?

The fact is that JSDoc comments are used to declare types. Read more about this method in these articles:

- [Type Safe JavaScript with JSDoc](https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76)
- [Type annotations in JavaScript files](https://ricostacruz.com/til/typescript-jsdoc)
- [TypeScript without TypeScript -- JSDoc superpowers](https://fettblog.eu/typescript-jsdoc-superpowers/)