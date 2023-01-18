# public-bdd-starterkit-selenium
An entry-level BDD starter kit using Cucumber + Selenium with NodeJS


# Cucumber + Selenium + NodeJS
> A tutorial for behavior driven, end-to-end testing.

### Setup
* Install dependencies with `npm i`.
* Create a `.env` file in the root of your project.
* Use the `.env` file to specify the browser for your tests.
    * If you have Safari on your machine, then you can skip straight to setting the browser to `BROWSER=safari` via the `.env` file. 
    * Otherwise, must download the version of "chromedriver" that matches your current version of chrome. See https://chromedriver.chromium.org/downloads for help. 
    * After downloading chromedriver, place it in the root of this project folder. 

What to put in the .env file:
```
BROWSER=safari
```
or
```
BROWSER=chrome
```
---
### Running tests
* In the terminal, type ```npm test``` to run all of the tests. 

### Using Cucumber Tags
Tags can help organize youir test suite. This is especially helpful once your suite becomes larger. The tags can be used to run only a specific selection of tests.   
* Tagging a Feature
    * In the terminal, type ```npm run blog``` 
    * This will run the two test scenarios from the feature that was tagged ```@blog```.
* Tagging a Scenario
    * In the terminal, type ```npm run fast``` 
    * This will run the one test scenario that was tagged with ```@fast```.


---
### Practice
* Try adding a new Scenario to the `blog.feature` file. 
* After adding the new scenario, run the tests again. 
* The result should be a new error followed by advice for what snippets to add into the `blog.stepdefs.js` file. 
* Use the provided snippets to craft new step definitions. 
