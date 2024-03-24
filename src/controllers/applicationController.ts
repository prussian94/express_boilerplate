export async function healthCheck() {
	return {
		status: {
			message: 'Aye aye, captain!',
			statusCode: 200,
		},
	};

	//or throw Exceptions.internalServerError
}
