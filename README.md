### Puppy Fetch

A small wrapper for the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) that uses the [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) interface to cancel in-flight fetch requests.

[![Build Status](https://travis-ci.org/dankreiger/puppy-fetch.svg?branch=master)](https://travis-ci.org/dankreiger/puppy-fetch)

### Install

```sh
npm install puppy-fetch
```

or

```sh
yarn add puppy-fetch
```

### Usage

1. import `puppyFetch`

   ```js
   import puppyFetch from 'puppy-fetch';
   ```

2. Give `puppyFetch` a unique identifier, and then use it just like you would use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

   ```js
   const TODOS_RESOURCE_ID = 'TODOS_RESOURCE_ID';
   const POSTS_RESOURCE_ID = 'POSTS_RESOURCE_ID';

   // GET EXAMPLE
   puppyFetch(
     TODOS_RESOURCE_ID,
     'https://jsonplaceholder.typicode.com/todos/1'
   );

   // POST EXAMPLE
   puppyFetch(POSTS_RESOURCE_ID, 'https://jsonplaceholder.typicode.com/posts', {
     method: 'POST',
     body: JSON.stringify({
       title: 'foo',
       body: 'bar',
       userId: 1
     }),
     headers: {
       'Content-type': 'application/json; charset=UTF-8'
     }
   });
   ```

Requests with the same unique identifier will be automatically aborted.

---

You can polyfill older browsers by running:

```sh
npm install --save abortcontroller-polyfill
```

and then importing the polyfill above your `puppy-fetch` import:

```js
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
import puppyFetch from 'puppy-fetch';
```

See https://www.npmjs.com/package/abortcontroller-polyfill for more information.
