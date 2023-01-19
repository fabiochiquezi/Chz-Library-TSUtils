export const forceNarrowString = (str: any): string =>
  (typeof str === 'string' ? str : String(str))

export const forceNarrowBoolean = (boo: any): boolean =>
  (typeof boo === 'boolean' ? boo : Boolean(boo))

export const forceNarrowNumber = (num: any): number =>
  (typeof num === 'number' ? num : Number(num))

export const narrow = <T>(arg: any): T => arg
export const forceNarrow = <T>(arg: any): T => arg as T
