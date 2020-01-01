import puppyFetch from '../src';

describe('puppyFetch', () => {
  const woofGlobal = global as any;
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise
  });
  beforeEach(() => {
    woofGlobal.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    (woofGlobal as any).__puppyFetchAbortControllerCache = {
      unique_woof: { signal: 1 }
    };
  });
  afterEach(() => {
    woofGlobal.fetch.mockClear();
    delete woofGlobal.fetch;
  });

  test('calls fetch', () => {
    puppyFetch('unique_woof', 'http://www.woof.com');
    expect(woofGlobal.fetch).toHaveBeenCalledTimes(1);
  });

  test('calls abort on a previous fetch instance', () => {
    puppyFetch('unique_woof', 'http://www.woof.com');
    expect(woofGlobal.fetch).toHaveBeenCalledTimes(1);

    puppyFetch('unique_woof', 'http://www.woof.com');
    expect(woofGlobal.fetch).toHaveBeenCalledTimes(2);
  });
});
