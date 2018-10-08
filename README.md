# Vue, Webpack 4 and SASS

This project can be used as a starting point if you wish to use vue.js to enhance a simple static HTML website. It will allow you to create a few choice vue.js components and use them to add dynamic features to an otherwise static HTML pages. What's more, it will also support SASS compilation. 

I created this project out of necessity when teaching a front end web development course. I needed the students to adopt a simple front end workflow when developing simple multi page HTML websites. Most of the starter Webpack projects I encountered were geared towards single page web applications. 


##  Environment configuration 

- This project depends on node version 6 or higher. 
- On a personal computer the version of node should be determined by running `node –v`.
  [If the version is lower than 6, then update node & npm before you progress]( https://docs.npmjs.com/getting-started/installing-node)
- If cloud9 is being used as a learning tool/development environment node version manager(nvm) can be used to upgrade to the correct version of node. From within your root workspace folder simply run:

  - `nvm install 6`
  - `nvm alias default 6` 


## Running the project 
- Clone this repository `git clone https://github.com/joeappleton18/Simple-Vue-Webpack-and-SASS.git`
- Run the following commands:

- `npm install`  : install the dependencies 
- `npm run watch`: will run webpack continuously 

- The build will be output to the `dist` folder every time you update a file that's part of the 
project bundle. Never edit anything in the dev folder. 


## Creating new HTML pages

- Each time you create a new HTML file you will need to import it in `main.js`
  e.g. ``import '../index.html';``
- Ensure the `<script src="bundle.js"></script>` tag is included above the `</body>` tag in the HTML page.


## Configuration (webpack.config.js)

- The project works out of the box, however it is expected that you will extend it.  

### Copying assets to the dist folder 

- To copy non-bundled assets to the dist folder simply add the asset `from` and `to` location to the `CopyWebpackPlugin array`. The asset can be a file or a whole folder. 

```javascript
new CopyWebpackPlugin([
            {from: 'src/images', to: 'images'},
            {from: 'src/fonts', to:  fonts}
        ])
```

























