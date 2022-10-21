// Your code here

class ValidationError extends Error {
  constructor(messsage = null, ...params){  ///all within constructor block
    super(...params)


  if(Error.captureStackTrace) {
    Error.captureStackTrace(this, ValidationError)
  }

  this.name = ValidationError
  this.messsage = messsage || `invalid input`

}
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
