## Frontend Coding Interview

We appreciate your time and effort that you put into participating in this challenge!

This assessment consist in 2 parts, first part will be a home assigment where you can develop the solution at your own
pace and a the second
part will be a technical interview where you'll get the time to explain why you took the decisions you took and we will
also ask you to
do some changes to your implementation

For the challenge please clone the repository, create a branch and push your solution there. There's no time limit to
push your solution
but we will take it into consideration.

Your code won't be used for anything other than that and will be removed from our repositories after your assessment has
been completed.


## Background

Credit card schemes (think Mastercard, Visa, AMEX, etc.) communicate with card issuing banks through publications
called "bulletins".
These bulletins are usually concerned with changes around legal, technical, procedural, etc. topics.

Banks are required to implement changes that are relevant to them within a specified time frame, in order to stay
compliant with the rules of a scheme.

The frequent publication of these bulletins poses a significant challenge for issuing banks in tracking and delegating
the necessary changes to responsible parties within the organization.

You've been provided with the backend service that processes the bulletins for card issuing bank. Two resource types are
available via the API - bulletins, brands and categories.

Every bulletin has assigned categories based on the related topics. They also have assigned which brands they cover

A resource with the list of possible brands and categories is provided on the server

For developing the application, you are free to use any tool, as long as it's done using Vue. 

A Graphql server is provided. This server provides a list of bulletins, types, categories and brands, as well as a 
basic mutation for creating new bulletins. If you are not familiar with Graphql and feel that it would take too much time
to get familiar with it, please create a simple in memory service that provide the necessary data; this service can
be on the browser as an in-memory repository.

Please remember to push **regularly** to your repository, so we can see your progress.


## Exercises

Implement a web application that fetches a list of bulletins and perform the following tasks. You can complete as many
challenges as you see can.

Challenge #1: Bulletin List

Implement a screen that displays the list of bulletins provided by the BE. Design wises you can do what you think looks 
more user-friendly, it doesn't have to be a work of art, but we would lie if we say it won't be taken into consideration

Take into consideration that there could be a lot of bulletins coming from the BE. 

Challenge #2: Bulletin List filter

Create a section that provides the user the ability to filter bulletins by `category`, `brand` and `publishedAt`.

Challenge #3: Create framework page

Create a sidebar or header that provides navigation between the bulletin list and a new page called framework in which
the user can see the list of configured categories and brands


**Bonus things!**

 - Create a centralized storage where the bulletin and other data is store  
 - E2E Tests

To start with this exercise, please clone this repo and create a new branch, naming it after your last name.

To run the server which will return the data, you can use the `server` npm script

**NOTE**. Once you read this you'll have 1 day to provide us an estimation of the time you think on this exercise will 
take you to complete it. This is not binding and we'll take it into consideration.

Any problem you find during the development, please let us know. We'll be happy to help you and also know how you 
solved it. We appreciate your time and effort that you put into participating in this challenge.

## Project Setup

#### Prerequisites

* Node.js version 18.10 or higher
* npm version 8.19.0 or higher

#### Install dependencies

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Run unit tests

```sh
npm run test:unit
```

#### Run linter

```sh
npm run lint
```
