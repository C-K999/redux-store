# [State: Redux Store](https://extra-module-22.herokuapp.com/)

This is a full stack e-commerce web application that was built using REACT, but also an attempt to refactor this e-commerce platform so that it uses [Redux](https://redux.js.org/).

## Table of Contents

- [Technologies Used](#technologies)
- [Usage](#usage)
- [User Story](#user-story)
- [Code Snippets](#code-snippets)
- [Software Demo](#demo)
- [Credits](#credits)

## Technologies

- HTML
- JavaScript
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Heroku](https://www.heroku.com)
- NPM:

1. [Apollo Client Package](https://www.npmjs.com/package/stripe)
2. [Apollo-Server-Express Package](https://www.npmjs.com/package/apollo-server-express)
3. [GraphQL Package](https://www.npmjs.com/package/graphql)
4. [Bcrypt Package](https://www.npmjs.com/package/bcrypt)
5. [Express.js Package](https://www.npmjs.com/package/express)
6. [JSONWebToken](https://www.npmjs.com/package/jsonwebtoken)
7. [Mongoose Package](https://www.npmjs.com/package/mongoose)
8. [Node.js](https://nodejs.org/en/)
9. [nodemon Package](https://www.npmjs.com/package/nodemon)
10. [JWT-Decode Package](https://www.npmjs.com/package/jwt-decode)
11. [React Package](https://www.npmjs.com/package/react)
12. [React-Bootstrap](https://www.npmjs.com/package/react-bootstrap)
13. [React-Dom](https://www.npmjs.com/package/react-dom)
14. [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)
15. [React-Scripts](https://www.npmjs.com/package/react-scripts)
16. [REDUX](https://www.npmjs.com/package/redux)

## Usage

To run locally, run the following commands on the terminal from the root directory:
If you want to run locally perform the following:

```
git clone
npm install
npm start
```

And use the website http://localhost:3001/

## User Story

```md
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

## Code Snippets

The following passage sets up the REDUX package to be used throughout the client side:

```java
import { createStore } from "redux";
import reducer from "../utils/reducers";

const store = createStore(reducer);
export default store;
```

## Demo

Here's a screenshot of the web application.

![default](/assets/demo.png)

## Developer Information

### **Clement Koo**

[LinkdIn](https://www.linkedin.com/in/clement-t-k-459322138/) |
[GitHub](https://github.com/C-K999)

## Credits

UCB - Coding Bootcamp

---

© 2022 Clement Koo. All Rights Reserved.
