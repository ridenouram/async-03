const DocumentCollection = require('./lib/document-collection');

const documents = new DocumentCollection('./documents');

// write some code to exercise your document collection

const sample = {
  key: 'value',
  sick: true
};

// documents.save(sample);

console.log('in index', async() => await documents.get('oDIEeqk3')); 
  // .then(object => console.log(object));

// documents.getAll()