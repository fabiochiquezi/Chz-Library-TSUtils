import { isArray, isAsync, isBoolean, isNull, isNumber, isString, isUndefined } from './index'

describe('general', () => {
  test('isAsync', () => {
    expect(isAsync(async () => { })).toBeTruthy()
    expect(isAsync(() => { })).toBeFalsy()
    expect(isAsync('')).toBeFalsy()
    expect(isAsync(1)).toBeFalsy()
    expect(isAsync(true)).toBeFalsy()
  })

  test('isString', () => {
    expect(isString('a')).toBeTruthy()
    expect(isString(1)).toBeFalsy()
    expect(isString(true)).toBeFalsy()
    expect(isString([])).toBeFalsy()
  })

  test('isBoolean', () => {
    expect(isBoolean(true)).toBeTruthy()
    expect(isBoolean(false)).toBeTruthy()
    expect(isBoolean(1)).toBeFalsy()
    expect(isBoolean('a')).toBeFalsy()
    expect(isBoolean('')).toBeFalsy()
    expect(isBoolean([])).toBeFalsy()
  })

  test('isNumber', () => {
    expect(isNumber(1)).toBeTruthy()
    expect(isNumber(NaN)).toBeTruthy()
    expect(isNumber(true)).toBeFalsy()
    expect(isNumber(false)).toBeFalsy()
    expect(isNumber('a')).toBeFalsy()
    expect(isNumber('')).toBeFalsy()
    expect(isNumber([])).toBeFalsy()
  })

  test('isArray', () => {
    expect(isArray([])).toBeTruthy()
    expect(isArray(1)).toBeFalsy()
    expect(isArray(NaN)).toBeFalsy()
    expect(isArray(true)).toBeFalsy()
    expect(isArray(false)).toBeFalsy()
    expect(isArray('a')).toBeFalsy()
    expect(isArray('')).toBeFalsy()
  })

  test('isUndefined', () => {
    let a
    expect(isUndefined(a)).toBeTruthy()
    expect(isUndefined('a')).toBeFalsy()
    expect(isUndefined(0)).toBeFalsy()
    expect(isUndefined(true)).toBeFalsy()
    expect(isUndefined([])).toBeFalsy()
  })

  test('isNull', () => {
    const a = null
    expect(isNull(a)).toBeTruthy()
    expect(isNull(undefined)).toBeFalsy()
    expect(isNull('a')).toBeFalsy()
    expect(isNull(0)).toBeFalsy()
    expect(isNull(true)).toBeFalsy()
    expect(isNull([])).toBeFalsy()
  })
})
