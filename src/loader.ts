import * as Q from 'q';
const postscribe = require('postscribe');


async function load(APIKey: String) {
  const url = `https://apis.daum.net/maps/maps3.js?apikey=${APIKey}&libraries=services`;
  postscribe(window.document.head, `<script src="${url}"></script>`, {
    done: ()=> {
      deferred.resolve();
    },
    error: (e)=> {
      deferred.reject(e);
    },
  });
}
