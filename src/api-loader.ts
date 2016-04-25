import * as Q from 'q';
const postscribe = require('postscribe');

const deferred = Q.defer();
const promise = deferred.promise;

export function loadAPI(APIKey: String) {
  const url = `https://apis.daum.net/maps/maps3.js?apikey=${APIKey}&libraries=services`;
  if (!promise.isFulfilled()) {
    postscribe(window.document.head, `<script src="${url}"></script>`, {
      done: () => {
        deferred.resolve(window['daum']['maps']);
      },
      error: (e) => {
        deferred.reject(e);
      },
    });
  }
  return promise;
}

export function getDaumMapAPI() {
  if (!window['daum'] || !window['daum']['maps']) {
    throw new Error('Daum Map not loaded yet!');
  }
  return window['daum']['maps'];
}
