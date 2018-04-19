class BackendBadRequestError {
  constructor(error) {
    this.error_code = error.error_code;
    this.error_message = error.error_message;
  }
}

export default BackendBadRequestError;
