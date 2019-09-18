const DocumentCollection = require('./lib/document-collection');

const documents = new DocumentCollection('./documents');

// write some code to exercise your document collection

const sample = {
  key: 'value',
  sick: true
};

// documents.save(sample);

// documents.get('oDIEeqk3')
//   .then(stuff => {
//     console.log('get', stuff);
//   });
  // .then(object => console.log(object));

documents.getAll()
  .then(all => console.log(all));