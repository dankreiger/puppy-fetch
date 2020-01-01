type PuppyFetch = (
  id: string,
  uri: Request | string,
  init?: RequestInit
) => Promise<Response>;

let __puppyFetchAbortControllerCache: { [key: string]: AbortController } = {};

const puppyFetch: PuppyFetch = (
  id: string,
  uri: Request | string,
  init: RequestInit = {}
): Promise<Response> => {
  let signal;
  if (
    __puppyFetchAbortControllerCache[id] &&
    typeof __puppyFetchAbortControllerCache[id].abort === 'function'
  ) {
    __puppyFetchAbortControllerCache[id].abort();
  }
  if (typeof window === 'object' && 'AbortController' in window) {
    __puppyFetchAbortControllerCache[id] = new AbortController();
    signal = __puppyFetchAbortControllerCache[id].signal;
  }

  return fetch(uri, {
    ...init,
    signal
  });
};

export default puppyFetch;
