# Webpack Starter Kit

This is a guide that sets up and explains every aspect of setting up a professional and durable project structure using Webpack for module managment in production and development, React for SPA's, babel for transpiling, Jest for testing, and Sass for more extensible styling (including the 7 -1 stylesheet organization).

## Todo

| Section     | Task    | Status |
|-------------|---------|--------|
| Structure   | detail organization and file structure | in progress |
| Public      | what goes here and why | todo |
| src folder  | detail client, server, stylesheets | todo |
| stylesheets | detail 7-1 organization | todo |
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

Starting with webpack.development.js, we have a tiny export that simply specifies our source map for debugging, and a plugin, ["NamedModulesPlugin"](https://webpack.js.org/plugins/named-modules-plugin/) that will display the relative path of a module when [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/) is in effect,

## public-folder

## src

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
