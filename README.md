<img align="right" width="150" height="150" top="100" src="./public/rainplate.jpg">

# rainplate • [![ci](https://github.com/whitenois3/rainplate/actions/workflows/ci.yaml/badge.svg)](https://github.com/whitenois3/rainplate/actions/workflows/ci.yaml) ![license](https://img.shields.io/badge/license-Unlicense-darkgrey) ![version](https://img.shields.io/github/package-json/v/whitenois3/rainplate)

A **Versatile**, **Extensible** Dapp Boilerplate built with [Rainbowkit](https://www.rainbowkit.com/), [Next.js](https://nextjs.org/), and [Chakra-ui](https://chakra-ui.com/).


## Getting Started

Click [`use this template`](https://github.com/whitenois3/rainplate/generate) to create a new repository with this repo as the initial state.

Or, if your repo already exists, run:
```sh
forge init --template https://github.com/whitenois3/rainplate
git submodule update --init --recursive
yarn
```


## Blueprint

```ml
artifacts
├─ pre-generated contract artifacts
pages
├─ api
│  ├─ hello.ts — `/api/hello` route
│  └─ index.ts — `/api` route
├─ _app.tsx — Global Overrides
├─ _document.tsx — Explicit HTML Overrides
├─ index.tsx — The main entry point for the app
public
├─ public resources (e.g. favicon.ico)
styles
└─ Greeter.t — Exhaustive Tests
```


## Development

To begin developing, first run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.


## Learn More

To learn more about using [Rainbowkit](https://www.rainbowkit.com/), check out the [Rainbowkit Documentation](https://www.rainbowkit.com/docs/)!

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## License

[The Unlicense](https://github.com/whitenois3/rainplate/blob/master/LICENSE), go crazy!


## Acknowledgements

- [femplate](https://github.com/abigger87/femplate)
- [web3-next-template](https://github.com/owieth/web3-next-template)

