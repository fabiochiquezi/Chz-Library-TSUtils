export const isAsync = (asyncFn: any): boolean => asyncFn instanceof (async () => { }).constructor
export const isString = (s: unknown): boolean => typeof s === 'string'
export const isBoolean = (s: unknown): boolean => typeof s === 'boolean'
export const isNumber = (s: unknown): boolean => typeof s === 'number'
export const isArray = (s: unknown): boolean => Array.isArray(s)
export const isUndefined = (s: unknown): boolean => typeof s === 'undefined'
export const isNull = (s: unknown): boolean => s === null

