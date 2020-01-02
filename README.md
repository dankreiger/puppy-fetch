### Puppy Fetch

A small wrapper for the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) that uses the [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) interface to cancel in-flight fetch requests.

Using `puppy-fetch` helps by making repeated `fetch` calls abortable by default. This is especially helpful for speeding up the UX for users with a slower internet connection.

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
   const some_unique_string = 'some_unique_string';
   const another_unique_string = 'another_unique_string';

   // GET EXAMPLE
   puppyFetch(
     some_unique_string,
     'https://jsonplaceholder.typicode.com/todos/1'
   );

   // POST EXAMPLE
   puppyFetch(another_unique_string, 'https://jsonplaceholder.typicode.com/posts', {
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

---

More info:

Aborting an instance of a finished request does nothing, and therefore is [fine to do](https://developers.google.com/web/updates/2017/09/abortable-fetch).
