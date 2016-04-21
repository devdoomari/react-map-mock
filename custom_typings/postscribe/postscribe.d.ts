interface PostScribeStatic {
  (elem?: any, html?: any, options?: any): any;
};
declare module 'postscribe' {
  export = postScribeStatic;
}
