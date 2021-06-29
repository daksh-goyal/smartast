# Smartast

Smartast is a web app that detects faces in an image provided to it. It is built using modern web development libraries and frameworks with [React](https://reactjs.org/) in frontend and [NodeJS](https://nodejs.org/en/) in backend. The database used is [PostgreSQL](https://www.postgresql.org/). The app uses [clarifai's](https://www.clarifai.com/) machine learning and deep learning API to detect faces in an image provided to it. A live version of the app is available [here](https://daksh-goyal.github.io/smartast/).

The backend code for the project is available [here](https://github.com/daksh-goyal/smartast-api). 

## Installation and Set Up

1. Clone this repo

   ```sh
   git clone https://github.com/daksh-goyal/smartast.git
   cd smartast/
   ```

2. Get the latest version of node for your OS from the official [NodeJS](https://nodejs.org/en/) website.

3. Install all the dependencies

   ```sh
   npm install
   ```
   
4. Start the development server

   ```sh
   npm start
   ```
## Building and Deploying on Github Pages

1. Generate a production build 

   ```sh
   npm run build
   ```
 
2. Publish on Github pages

   ```sh
   gh-pages -d build
   ```

The above steps can also be executed bu running the script

   ```sh
   npm run deploy
   ```
   
If you wish to preview the build before depoying to github, run the following commands instead

   ```sh
   npm install -g serve
   serve -s build
   ```
   
## Packages Used

1. [React Tilt](https://www.npmjs.com/package/react-tilt) was used to create the animation on the logo of the website.
2. [React PartclesJS](https://www.npmjs.com/package/react-particles-js) was used to create the dynamic particles on the background of the webpage.
3. [Tachyons](https://tachyons.io/) was used to aid out the styling process.
