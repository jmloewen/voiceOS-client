How to open:

1. Install Heroku.

2. request access by sending me an email address so that I can add you as a contributor to the heroku url.

3. Install NPM

4. npm install

5. heroku git:clone -a fathomless-earth-13428

6. heroku open

walla, its open.  there ya go.

# Set up Redux Dev Tools
` https://github.com/zalmoxisus/redux-devtools-extension `
This page has the complete setup

TLDR;
` yarn add redux-devtools-extension `

Then, in your store, use it like so,

```
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
))
```


