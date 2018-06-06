# Webpack Starter Kit

This is a guide that sets up and explains every aspect of setting up a professional and durable project structure using Webpack for module managment in production and development, React for SPA's, babel for transpiling, Jest for testing, and Sass for more extensible styling (including the 7 -1 stylesheet organization).

## Todo

| Section     | Task    | Status |
|-------------|---------|--------|
| Structure   | detail organization and file structure | ✅ |
| Public      | what goes here and why | ✅ |
| src folder  | detail client, server, stylesheets | ✅ |
| stylesheets | detail 7-1 organization | :white_check_mark: |
| .babelrc    | what and why | todo |
| server      | explain basic server side rendering and routing | todo |
| webpack-dev | explain and detail components | todo |
| webpack-prod| explain and detail diff between dev and production | todo |
| testing     | setup testing for basic components to start | todo |
| routing     | setup client and server routes | todo |
| links       | cite docs and other resources | todo |


# Table of Contents

1. [Structure](#structure)
2. [Public folder](#public-folder)
3. [src folder](#src)
4. [style sheets](#stylesheets)
5. [server](#server)
6. [.bablerc](#bablerc)
7. [webpack development](#webpack-dev)
8. [webpack production](#webpack-prod)
9. [testing](#testing)
10. [routing](#routing)
11. [links and resources](#links-resources)





## structure

At the heart of this configuration is how we setup our webpack tools. Here we have a three seperate configurations, Build, Development, and Common. 

Starting with webpack.development.js, we have a tiny export that simply specifies our source map for debugging, and a plugin, ["NamedModulesPlugin"](https://webpack.js.org/plugins/named-modules-plugin/) that will display the relative path of a module when [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/) is in effect.

The webpack.production.js file has two properties, our output file and module property. The module.rules property is an array of rules that determine how a module is created or loaded. In the output, we use 'bundle.[chunkhash:8].js' as the compilation file. What is hashing and why do we use it? For performance reasons, we try to have long term caching, think 'indefinite storage', for static content or assets. Buy doing this we reduce the time it takes to load a file because we do not have to reload other assets, such as images or font files that have not changed, we just use what is cached and plus any other file or request that is new. Chuckhashing in webpack lets us update only those chunk hashes that change. Chunkhashes are based on webpack entrypoints, every entry will have its own hash, if anything changs, that hash is updated.

https://webpack.js.org/guides/caching/

Lastly, the webpack.config.js is the common link between production and development configs. In development, you want certain tools to help for debugging, testing, a hot replacement for modules to view the changes. For production the demands are different, for example we need many optimizations to reduce file sizes with compression. With the file __loadPresets.js__ we check our environment and based on if production or development, we merge that config into the webpack.config.js where plugins and loaders that are mutually beneficial are already set. 

## public-folder

This folder contains our static assets, fonts that we import and images used throughout our project. 

To import fonts with @font-face

1. download a font, ie fonts.google.com, and in the top right corner, select downlaod
2. find the downloaded file on your computer, now you have to convert the fonts
    to particular file types
3. Use a service, such as, [transfonter](https://transfonter.org/) to convert to the file types
    you want.
4. Copy these converted files to the Public/Fonts folder
5. At the top of your main css file, as an example add...

    ```
        @font-face {
            font-family: 'Julius Sans One';
                src: url('./JuliusSansOne-Regular.eot');
                src: url('./JuliusSansOne-Regular.eot?#iefix') format('embedded-opentype'),
                url('./JuliusSansOne-Regular.woff2') format('woff2'),
                url('./JuliusSansOne-Regular.woff') format('woff'),
                url('./JuliusSansOne-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
        }
    ```
More resources:
1. https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face
2. https://css-tricks.com/snippets/css/using-font-face/
3. http://www.miltonbayer.com/font-face/

## src

At the root of the src folder is an index.html and an index.js. Index.html is used as a template for webpack to model (the corresponding plugin is located in webpack.config.js and is "HtmlWebpackPlugin") and insert any additionally generated files such as for our bundle.js and links to the css files. The index.js is the root module where we moungt the Ract app to the DOM.

The three main folders are client, where the React app components live, server, which holds our express app for server side rendering, middleware, and any other server-side code, and lastly a state folder where we place all the nesseccary files for state management using Redux.


## stylesheets

## server

## bablerc

## webpack-dev

## webpack-prod

## testing

## routing

## links-resources
    
    https://sass-guidelin.es/#the-7-1-pattern

unexpected token import error, babel config should be set to transpile everything 
excluding imports. Why? because, webpack supports ES MODULES SO IT CAN CONDUCT TREE SHAKING. Tree 
shaking is the elimination of dead code. Set the 'env' option {modules: false}

by default, jest will set the node environment to 'test'

by having the .babelrc file set to a .js file, in the package.json we can just 
point the babel preset to point to the .js file

by default jest loads jsdom in the enviromnent (window), we get the giant window objhect
provided by jsdom, it is very memory intensive and adds to the start timne
so set the testEnvironment to node, jsdom is the default, no need for installation


node cant import css, it will look at it as either json or js only
