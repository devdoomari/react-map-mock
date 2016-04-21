import * as Q from 'q';
const postscribe = require('postscribe');

const deferred = Q.defer();
const promise = deferred.promise;

function load(APIKey: String) {
  const url = `https://apis.daum.net/maps/maps3.js?apikey=${APIKey}&libraries=services`;
  if (promise.)
  postscribe(window.document.head, `<script src="${url}"></script>`, {
    done: ()=> {
      deferred.resolve();
    },
    error: (e)=> {
      deferred.reject(e);
    },
  });
}
