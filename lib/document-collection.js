const files = require('./files');
// use npm to find a module for creating ids
const shortid = require('shortid');
const path = require('path');

class DocumentCollection {
  constructor(folder) {
    this.folder = folder;
  }

  save(object) {
    // TODO:
    // 1. assign an id
    let id = shortid.generate();
    object._id = id;
    // 2. serialize object
    let serializedObject = JSON.stringify(object);
    // 3. use promisified fs to write to folder path using id.json as file name
    return files.writeFile(`${this.folder}/${id}.json`, serializedObject, 'utf8')
    // 4. "return" object (which now has an id)
      .then(() => {
        console.log(object);
        return object;
      });
    // 5. if expected, turn promisified fs errors into meaningful database errors
  }

  get(id) {
    // TODO:
    // 1. create file path from id
    const filePath = `${this.folder}/${id}.json`;
    // 1. use promisified fs to read file
    return files.readFile(filePath, 'utf8')
      .then(json => {
        // 2. deserialize contents
        // 4. "return" object
        return JSON.parse(json);
      });
    // 5. if expected, turn promisified fs errors into meaningful database errors
  }

  getAll() {
    // TODO:
    // 1. read folder file names
    return files.readdir(this.folder)
      .then(files => {
        // 2. use Promise.all and map each file name to a this.get call (remove .json file extension!)
        // 3. "return" array of objects  -- don't need a .then to return because this .map is already returning that array
        return Promise.all(files.map(file => {
          const fileId = path.parse(file).name;
          return this.get(fileId);
        }));
      });
    // 4. if expected, turn promisified fs errors into meaningful database errors
  }
}

module.exports = DocumentCollection;