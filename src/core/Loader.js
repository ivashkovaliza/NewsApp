import ErrorHandlerPopup from 'core/ErrorHandlerPopup';

export default class Loader {
  constructor() {
    this.getResponse = this.Factory('GET');
  }

  async getData(url, options) {
    let response = await fetch(url, options);

    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      new ErrorHandlerPopup().showErrorPopup();
    }
  }

  Factory(method) {
    switch (method) {
      case 'GET': {
        return (url) => {
          const options = { method: 'GET' };
             return this.getData(url);
        }
      }
      // case 'POST': {
      // }
      // case 'PUT': {
      // }
      // case 'DELETE': {
      // }
    }
  }
}