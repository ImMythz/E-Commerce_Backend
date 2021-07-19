# E-Commerce_Backend
The E-Commerce Backend is a web application that utilizes a backend server created with Express, MySQL, and Sequelize through Object-Relational Mapping.
## Table of Contents
* [Tech](#tech)
* [Setup](#setup)
* [Usage](#usage)
* [License](#license)

## Tech

Listed below are all of the technologies used in this repo:

- Node.js
- Express
- MySQL
- Sequelize
- Dotenv
- Nodemon (dev dependency)
- Insomnia (testing program)

## Setup
1. Open GitBash
2. You will need to clone to repository to your machine

  `$ git https://github.com/ImMythz/E-Commerce_Backend.git`
  
3. Then open the repository in your code editor of choice (ex: VSCode)

4. Then open the <i>Terminal</i> and run the following command to change directories

  `$ cd Develop/`

5. Then open the <i>Terminal</i> and run the following command to install all dependencies

  `$ npm i`

6. Then you will run the open the .env.EXAMPLE file which looks like the screenshot below and enter your credentials and rename the file to .env

<img src='Assets\EC-screenshot-1.png' alt='E-Commerce Sceenhot One'>

7. Then open the <i>Terminal</i> and run the following command. This will prompt the user to enter their password. 

  `$ mysql -u root -p`

8. Then run the following command to exit sql. 

  `\q`

9. Then run the following command to seed the database

  `npm run seed`
  
10. Then run this command to start the application

  `$ npm run watch`

11. Finally launch Insomnia, create a request collection, and create new POST, PUT, GET, and DELETE routes for products, categories and tags.

The user will be able to view, create, update and delete data from the database.

<img src='Assets\EC-screenshot-2.png' alt='E-Commerce Sceenhot Two'>

## Usage
This application will allow the user to interact with an E-Commerce Backend. This will allow the user to add new products, categories, and tags. As well as update and delete those as well. 

Click the image below to play a video demo of this application

## License
MIT License

Copyright (c) [2021] [Nate Worley]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
