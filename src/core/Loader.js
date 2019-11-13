import ErrorHandlerPopup from 'core/ErrorHandlerPopup';

export default class Loader {
  constructor() {
    this.getData = this.setLogger();
    this.getResponse = this.Factory('GET');
  }

  async getData(url, options) {
    let response = await fetch(url, options);

    if(response.ok) {
      let data = await response.json();
      return data;
    } else {
      new ErrorHandlerPopup().showErrorPopup();
    }
  }

  setLogger(){
    const logData = (data) =>{
      console.log(`${new Date().toLocaleString()} Request method - ${data[1].method}; Transmitted parameters - ${JSON.stringify(data)}`);
    };

    return this.createProxy(this.getData, logData);
  }

  Factory(method) {
    switch (method) {
      case 'GET': {
        return (url) => {
          const options = { method: 'GET'};
             return this.getData(url, options);
        }
      }
      case 'POST': {
        return (url, body) => {
          const options = { method: 'POST', body: body};
          return this.getData(url, options);
        }
      }
      case 'PUT': {
        return (url, body) => {
          const options = { method: 'POST', body: body};
          return this.getData(url, options);
        }
      }
      case 'DELETE': {
        return (url, body) => {
          const options = { method: 'POST', body: body};
          return this.getData(url, options);
        }
      }
    }
  }

  createProxy(func, logData) {
    return new Proxy(func, {
      apply(target, thisArg, args) {
        logData(args);
        return target.apply(thisArg, args);
      }
    });
  }
}
