import ErrorHandlerPopup from 'core/ErrorHandlerPopup';

export default class Loader {
  // constructor() {
  //   this.getResponse = this.Factory('GET');
  // }

  async getData(url)  {
    let response = await fetch(url);

    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      new ErrorHandlerPopup().showErrorPopup();
    }
  }

  // Factory(method) {
  //   switch (method) {
  //     case 'GET':
  //       const options =
  //       break;
  //   }
  // }
}