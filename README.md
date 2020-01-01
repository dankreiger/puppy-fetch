### Puppy Fetch

A small wrapper for the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) that uses the [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) interface to cancel in-flight requests.

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
puppyFetch(TODOS_RESOURCE_ID, 'https://jsonplaceholder.typicode.com/todos/1');

// POST EXAMPLE
puppyFetch(POSTS_RESOURCE_ID, 'https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: 'follow', // manual, *follow, error
  referrerPolicy: 'no-referrer', // no-referrer, *client
  body: JSON.stringify(data) // body data type must match "Content-Type" header
});
```

Requests with the same unique identifier will be automatically aborted.
