# How to bundle hyper or lit HTML

This repository aim is to compare bundling sizes and techniques between [hyperHTML](https://github.com/WebReflection/hyperHTML#hyperhtml) and [lit-html](https://github.com/polymer/lit-html#-status-in-development).

You can clone it and after an `npm i` you test its result locally via `npm run build`.

The **[test result](https://webreflection.github.io/hyper-bundling/test/)** links to respective _Hello World_ pages that use the minimal amount of features provided by both libraries to render some template literal content inside the body.

If you know other techniques to bundle these libraries please let me know, thanks.

### What to consider

  * _hyperHTML_ has more features than _lit-html_ and these are all available within the library, attached to the main function. This makes _hyperHTML_ less tree-shake friendly, but also more predictable in terms of added size
  * if the testing environment doesn't use Gzip, Deflate, or any other sort of compression, the size you read is a plain one, not usually the one that will land in production.


