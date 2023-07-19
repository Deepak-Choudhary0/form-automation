<h1 align="center">
  Puppeteer Cyptocurrency Form Automation 
  <br><br>
<a href="https://twitter.com/c72124925" alt="Twitter Follow">
<img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" /></a>
<a href="https://www.linkedin.com/in/deepakchoudhary2003/">
<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href="https://github.com/Deepak-Choudhary0">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
</h1>
This project demonstrates basic automation using Puppeteer, a library for controlling headful or headless browsers with Node.js.

## Authors

- [@Deepak-Choudhary](https://github.com/Deepak-Choudhary0/)

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Puppeteer Automation Project is a small Node.js project that automates user actions on the swap.defillama.com website using Puppeteer. The script launches a headful browser, navigates to the website, fills a form, and selects certain options as specified in the task description.

1. ### Functionality and Task Completion:

- [x] The program seems to complete the given task as expected. It navigates to the website, fills the form, selects the desired options, and leaves the browser window open as required.

2. ### Consistency and Bugs:

- [x] Since this is a relatively simple automation task, the program should work consistently if there are no changes to the website's structure or content.
However, it's essential to test the code thoroughly to ensure there are no bugs or errors during execution.

3. ### SOLID and OOPs Principles:

- [ ] The code does not implement explicit SOLID or OOPs principles. It follows a procedural approach to complete the task.
The implementation of SOLID principles is not mandatory for a small project like this. However, incorporating them might improve code readability, maintainability, and extensibility.

4. ### Code Quality and Readability:
 - [X] Code is easy to understand
 - The code is relatively straightforward and easy to follow.
 - Variable and function names are mostly descriptive, making it easy for another engineer to understand the code's purpose.
 - Comments are used in some sections to provide explanations, which is helpful for understanding the logic.
 - The code indentation is consistent, which adds to readability.
 - However, the code could benefit from additional comments, especially in complex sections or sections that may be difficult to understand at first glance.

5. ### Documentation:
 - [X] Done 

## Technologies Used
- ### Node.js
  A JavaScript runtime environment for running the server-side code.
- ### TypeScript
  A statically typed superset of JavaScript.
- ### Puppeteer
  A powerful Node.js library for automating web browsers, which allows developers to control and interact with web pages programmatically, making it ideal for tasks such as web scraping, automated testing, and UI interactions.

## Installation
To run this project locally, you need to have Node.js installed on your machine. If you don't have Node.js installed, you can download it from the official website: https://nodejs.org/

Follow these steps to set up the project:

1. Clone the repository to your local machine: `git clone https://github.com/Deepak-Choudhary0/form-automation.git`
2. Change into the project directory: `cd form-automation`
3. Install the project dependencies: `npm install`

## Usage

- To make changes goto file `src/index.ts`
- To compile the changes run command `npx tsc`
- To run the Puppeteer automation script, use the following command : `npm start`

The script will launch a headful browser, perform the specified tasks on the swap.defillama.com website, and leave the browser window open as required.
## Contributing

To contribute to this project read the codebase then make the changes you think it should have and make a PR to it on your branch.

## Task Description
The task entails automation of the following user actions on the swap.defillama.com website:

1. Launch headful browser and go to swap.defillama.com
2. Fill the form:
- Enter "Arbitrum One" in the "chain" field
- Enter "12" in "You Sell" field
- Enter "WBTC" (Wrapped BTC) in the "select token" field on the right-hand side of the "You Sell" field
- Enter "USDC" (USD Coin) in the "select token" field in the "You Buy" section
- Once you enter this data, a section will appear on the right-hand side called - "Select a route to perform a swap"
- Select the second option in this section
3. Leave the browser window open. This is the end of the program.

## Evaluation Criteria
The project will be evaluated based on the following criteria:

- ### Functionality
   Does the program work as expected and complete the specified tasks?
- ### Consistency and Bugs
   Is the program bug-free and consistent in its execution?
- ### Code Quality
   Is the code well-organized, readable, and maintainable?
- ### Documentation
   Is the README clear and comprehensive, providing sufficient instructions for installation and usage?

## license
This project is licensed under the MIT License.

Feel free to reach out to the project owner with any questions or feedback.
