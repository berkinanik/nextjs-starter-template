# nextjs-starter-template

This is a simple [Next.js](https://nextjs.org/) project template with my preferred setup.

## Specifications

- `npm` for everything
  - _Project is initialized with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app):_
    ```bash
    npx create-next-app --use-npm
    ```
- `.js` with [prop-types](https://github.com/facebook/prop-types)
- [function components](https://reactjs.org/docs/components-and-props.html#function-and-class-components) with `es6+` syntax
- [`sass`](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support) using `.scss`
- [`eslint`](https://nextjs.org/docs/basic-features/eslint) react / next (\w hooks) recommended plugins with many additions
  - from _`arrow-spacing`_ to _`object-curly-spacing`_, many linter rules to improve code readability and reduce suspicious code
- there isn't any example on [`hooks`](https://reactjs.org/docs/hooks-intro.html) yet, but this setup makes hooks look beautiful
- [`Dockerfile`](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile) from recommended example
- custom _`path_aliases`_ for components, static files, sass modules... (basically for everything)
  - `jsconfig.json` for improved development experience in VS Code
  - custom [`babel`](https://nextjs.org/docs/advanced-features/customizing-babel-config): `.babelrc` with required plugins for module resolving with custom aliases
  - `eslint` configs and plugins to work with aliases
  - required packages and plugins for everything which have been mentioned here
- altered folder structure (familiar to many other frameworks): [`src/pages`](https://nextjs.org/docs/advanced-features/src-directory)
- basic [`layout`](https://nextjs.org/docs/basic-features/layouts): `Navbar` | `Wrapper` | `Footer`
  - jsx and styles for these components

### Getting Started

First, clone the repo and install packages:

```bash
$ git clone https://github.com/berkinanik/nextjs-starter-template.git
$ cd nextjs-starter-template
$ npm install
```

Then, run the development server and review the codebase

```bash
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [The Next.js GitHub repository](https://github.com/vercel/next.js/)
