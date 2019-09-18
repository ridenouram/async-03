# LAB: Async

The javascript V8 engine is great at doing things "asynchronously" ... as a coder, you'll need to work in this lab to step out of the iterative coding mindset and use promises and async/await to read a file, as well as to work with converting buffers into text into objects and back again.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Requirements

* The built-in `path` module is very handy for file path manipulation.
* Use TDD and jest mocks, you shouldn't actually write to disk

### Save Object To File

Implement the `save` method. See notes in starter code in `DocumentCollection`.
* Assign the object an id which is also used as the file name (plus `.json`)
* `save` is an asynchronous method and must return a promise
* Handle any expectable errors

### Get Object From File

Implement the `get` method. See notes in starter code in `DocumentCollection`.
* Convert the supplied `id` and `this.folder` into correct path
* `get` is an asynchronous method and must return a promise
* Handle any expectable errors

### Get All Objects in Folder

Implement the `getAll` method. See notes in starter code in `DocumentCollection`.
* Read the file names from `this.folder`
* Manage sequential and parallel workflows correctly
* `getAll` is an asynchronous method and must return a promise
* Handle any expectable errors

### Integration Testing

In `index.js`, write some sample code that saves, gets, and gets all. Use `console.log` as makes sense to "show"
returned objects

### STRETCH GOAL

Refactor your implementation to use async/await.
You can also refactor your tests to use async/await.

## Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations

