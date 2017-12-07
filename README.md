# Vue, Webpack and SASS

A Vue 2.0 Webpack & vue-loader set up to support a simple SASS and vue workflow. 

## Aims of the project

This project can be used as a starting point if you wish to use vue.js to enhance a simple static html web project. It will allow you to create a few choice vue.js components and use them to add dynamic features to your otherwise static HTML website. It will also take care of SASS compilation. 

I created this project out of necessity when teaching a front end web development course. I needed the students to adopt a simple front end workflow when developing simple multi page HTML websites. 


##  Enviorment configuration 



- This project depends on node version 6 or higher. 
- On a personal computer the version of node should be determined by running `node –v`.
  [If the version is lower than 6, then update node & npm before you progress]( https://docs.npmjs.com/getting-started/installing-node)

- If cloud9 is being used as a learning tool/development environment, the following commands must be run in order to update to the latest version of node:
  - `nvm install 6`
  - `nvm alias default 6` 



## Running the project 
- Clone this repository repository `git clone https://github.com/joeappleton18/Simple-Vue-Webpack-and-SASS.git`
- Using terminal in the root directory of the project run:
- `npm install`  : install the dependencies 
- `npm run watch`: will run webpack continuously 

- The build will be output to the `dist` folder every time you update a file that's part of the 
project bundle. There is no need to edit anything inside the dist folder. 

### Deploying the project 

- `npm run production`: will minify & uglify  


## Creating new HTML pages

- Each time you create a new HTML file you will need to import it in `main.js`

  e.g. ``import '../index.html';``

- Ensure the `<script src="bundle.js"></script>` is included above the `<body>` tag in the HTML page.


## Configuration (webpack.config.js)

- The project works out of the box however it is expected that you will extend it.  

### Copying assets to the dist folder 

- To copy non-bundled assets to the dist folder simply add the asset `from` and `to` location to the `CopyWebpackPlugin array`. The asset can be a file or a whole folder. 

```javascript
new CopyWebpackPlugin([
            {from: 'src/images', to: 'images'},
            {from: 'src/fonts', to:  fonts}
        ])
```

























