interface ResponseData<T> {
	data?: T;
	pagination?: string;
	statusCode?: number;
	message?: string;
	code: number;
}

export class CustomResponse<T> {
	data?: T;
	pagination?: string;
	meta: {
		statusCode?: number;
		message?: string;
		code: number;
	};

	constructor(response: ResponseData<T>) {
		this.data = response.data;
		this.pagination = response.pagination;
		this.meta = {
			statusCode: response.statusCode || undefined,
			message: response.message || undefined,
			code: response.code,
		};
	}
}
