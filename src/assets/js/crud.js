import jsonData from './../../data.js';

class Crud {

  constructor(filePath) {

    this.filePath = filePath;

  }

  getJson() {

    return jsonData;

  }

}

export default Crud;
