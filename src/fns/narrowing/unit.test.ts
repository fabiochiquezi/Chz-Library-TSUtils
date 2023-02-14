import { forceNarrowString, forceNarrowBoolean, forceNarrowNumber } from './index'

describe('narrowing', () => {
  it('forceNarrowString', () => {
    expect(forceNarrowString('test')).toBe('test')
    expect(forceNarrowString(123)).toBe('123')
    expect(forceNarrowString(true)).toBe('true')
    expect(forceNarrowString(['a', 'b', 'c'])).toBe('a,b,c')
  })

  it('forceNarrowBoolean', () => {
    expect(forceNarrowBoolean('test')).toBe(true)
    expect(forceNarrowBoolean('')).toBe(false)
    expect(forceNarrowBoolean(123)).toBe(true)
    expect(forceNarrowBoolean(0)).toBe(false)
    expect(forceNarrowBoolean(true)).toBe(true)
    expect(forceNarrowBoolean(false)).toBe(false)
    expect(forceNarrowBoolean(['a', 'b', 'c'])).toBe(true)
    expect(forceNarrowBoolean([])).toBe(true)
  })

  it('forceNarrowNumber', () => {
    expect(forceNarrowNumber('test')).toBe(NaN)
    expect(forceNarrowNumber('')).toBe(0)
    expect(forceNarrowNumber(123)).toBe(123)
    expect(forceNarrowNumber(0)).toBe(0)
    expect(forceNarrowNumber(true)).toBe(1)
    expect(forceNarrowNumber(false)).toBe(0)
    expect(forceNarrowNumber(['a', 'b', 'c'])).toBe(NaN)
    expect(forceNarrowNumber([])).toBe(0)
  })
})
