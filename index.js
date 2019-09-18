const DocumentCollection = require('./lib/document-collection');

const documents = new DocumentCollection('./documents');

// write some code to exercise your document collection

const sample = {
  key: 'value',
  sick: true
};

documents.save(sample);

// documents.get('oDIEeqk4')
//   .then(stuff => {
//     console.log('get', stuff);
//   });

// documents.getAll()
//   .then(all => console.log(all));