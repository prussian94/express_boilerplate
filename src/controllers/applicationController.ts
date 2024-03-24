export async function healthCheck(req, res) {
  return {
    status: {
      message: 'Aye aye, captain!',
      statusCode: 200,
    },
  }

  //or throw Exceptions.internalServerError
}
