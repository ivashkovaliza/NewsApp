let ErrorHandlerPopupInstance;

export default class ErrorHandlerPopup {
  constructor() {
    if(ErrorHandlerPopupInstance) {
      return ErrorHandlerPopupInstance;
    }
    ErrorHandlerPopupInstance = this;
  }

  async getErrorPopup() {
    const { default: component } = await import(/* webpackChunkName: "ErrorPopup" */ './ErrorPopup.js');
    return component;
  }

  showErrorPopup() {
    this.getErrorPopup()
      .then(ErrorPopup => {
        new ErrorPopup().showErrorPopup();
      });
  }
}