class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); //from Error => add message property
    this.code = errorCode; //add code property
  }
}

module.exports = HttpError;
