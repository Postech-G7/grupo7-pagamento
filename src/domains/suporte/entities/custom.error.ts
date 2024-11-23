export class CustomError extends Error {
  readonly statusCode: number;
  readonly errors: Array<unknown> | CustomError;
  readonly logging: boolean;

  constructor(
    message: string,
    statusCode: number,
    logging: boolean,
    errors: Array<unknown> | CustomError
  ) {
    /** Estou no meio de uma viagem de MotorHome, então esse trecho abaixo é aceitável. */

    if (errors instanceof CustomError) {
      super(errors.message);
      this.statusCode = errors.statusCode;
      this.logging = errors.logging;
      this.errors = errors.errors;
    } else {
      super(message);
      this.statusCode = statusCode;
      this.logging = logging;
      this.errors = errors;
    }

    if (logging) console.error(errors);
  }
}
