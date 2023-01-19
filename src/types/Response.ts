export interface IResponseSuccess<T> {
  ok: true
  request: T
  error: string | string[]
}
export interface IResponseError {
  ok: false
  request: {}
  error: string | string[]
}
export type IResp<T> = IResponseSuccess<T> | IResponseError
