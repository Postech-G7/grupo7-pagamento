export class CustomResponse {
  readonly statusCode: number;
  readonly message: string;
  readonly content: unknown;
  readonly logging: boolean;

  constructor(
    statusCode: number,
    message: string,
    content: unknown,
    logging: boolean = false
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.content = content;
    this.logging = logging;

    if (logging) console.info(this);
  }
}
