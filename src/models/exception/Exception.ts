interface ErrorObject {
	message: string;
	code: number;
	statusCode: number;
}

export class CustomError extends Error {
	message: string;
	code: number;
	statusCode: number;

	constructor(errorObj: ErrorObject) {
		super();
		this.message = errorObj.message;
		this.code = errorObj.code;
		this.statusCode = errorObj.statusCode;

		Object.setPrototypeOf(this, CustomError.prototype);
	}
}
