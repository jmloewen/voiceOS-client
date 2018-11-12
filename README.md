# VoiceOS-Client

## This repo is a front end for our ongoing VoiceOS Project, to be made with React-Redux.

Heroku is fathomless-earth-13428
=======
1. request access by sending me an email address so that I can add you as a contributor to the heroku url.

2. Install NPM with `npm install`

3. `heroku git:clone -a fathomless-earth-13428`

4. `heroku open`

voilà, its open.  there ya go.

# Set up Redux Dev Tools
visit [this page](https://github.com/zalmoxisus/redux-devtools-extension) for set up instructions 

TL;DR:
` yarn add redux-devtools-extension `

# Usage
in your store, add:

```
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
))
```

# ESLint setup
1. ensure eslint is installed
2. ` eslint --init`  
