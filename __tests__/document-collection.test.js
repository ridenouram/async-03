const DocumentCollection = require('../lib/document-collection');
const path = require('path');
// jest.mock('fs', () => ({
//   readFile: jest.fn(),
//   writeFile: jest.fn(),
//   readdir: jest.fn(),
// }));

jest.mock('../lib/files.js', () => ({
  readFile: jest.fn(),
  writeFile: jest.fn(),
  readdir: jest.fn(),
}));



// for setting up mock expectations
const { readFile, writeFile, readdir } = require('../lib/files');

describe('Document Collection', () => {
  // it('example', () => {
  //   //arrange
  //   const source = './source.txt';
  //   const dest = './dest.txt';
  //   const fileContents = 'file contents';
  //   const readPromise = Promise.resolve(fileContents);
  //   readFile.mockReturnValueOnce(readPromise);

  //   //act
  //   return copyFile(source, dest)   //copy file uses readFile then writeFile
  //     .then(() => {
  //       //assert
  //       expect(readFile.mock.calls[0][0]).toBe(source);  //[0][0] => first call, first argument
  //       expect(writeFile.mock.calls[0][0]).toBe(dest);
  //       expect(writeFile.mock.calls[0][1]).toBe(fileContents);
        
  //     });
  // });

  // it('error example', () => {
  //   const error = 'read file error';
  //   readFile.mockRejectedValueOnce(error);
  //   expect.assertions(1); //this test can't pass just because the catch never fires - makes it so the catch has to fire or else the test fails

  //   copyFile('badfile', 'dest')
  //     .catch(err => {
  //       expect(err).toBe(error);
  //     });
  // });

  it('writes an object to a new file', () => {
    const sample = {
      key: 'value',
      sick: true
    };
   
    const writePromise = Promise.resolve(sample);
    writeFile.mockReturnValueOnce(writePromise);
    
    const dir = 'documents';
    const documents = new DocumentCollection(dir);
    console.log(sample); 
    
    return documents.save(sample)
      .then(object => {
        console.log('before expect');
        expect(path.dirname(writeFile.mock.calls[0][0])).toBe(dir);
        expect(writeFile.mock.calls[0][1]).toBe(JSON.stringify(sample));
        expect(object._id).toEqual(expect.any(String));
      });
  }); 
});