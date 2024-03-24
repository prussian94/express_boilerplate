import { CustomError } from '@models/exception/Exception';
import { CustomRequest } from '@models/request/CustomRequest';
import { Response } from 'express';
import { CustomResponse } from '@models/response/CustomResponse';

export function routeHelper(func: Function) {
	return async (req: CustomRequest, res: Response) => {
		try {
			const result = await func(req);
			if (result) {
				const { status, data, pagination } = result;
				return res.status(status.statusCode).json(
					new CustomResponse({
						data,
						pagination,
						code: status.code,
						message: status.message,
						statusCode: status.statusCode,
					}),
				);
			}
			res.status(200).json(result);
		} catch (error) {
			if (error instanceof CustomError) {
				res.status(error.statusCode).json(
					new CustomResponse({
						message: error.message,
						code: error.code,
						statusCode: error.statusCode,
					}),
				);
			} else {
				res.status(500).json(error);
			}
		}
	};
}
