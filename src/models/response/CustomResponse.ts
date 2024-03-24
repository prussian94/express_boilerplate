export class CustomResponse<T> {
  data?: T
  pagination?: any
  meta: {
    statusCode: number
    message: string
    code: number
  }

  constructor(response: any) {
    this.data = response.data
    this.pagination = response.pagination
    this.meta = {
      statusCode: response.statusCode || undefined,
      message: response.message || undefined,
      code: response.code,
    }
  }
}
