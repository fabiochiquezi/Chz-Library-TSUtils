<br />
<p align="center">
    <img src="https://www.chiquezi.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Flogo%2Flogo.c442afade084ba1adfa95e1aecfc83d0.svg&w=384&q=75" width="125">
</p>

# 🤙 TS Utils

Some simple functionalities to help the work with TS

## 🚀 Getting Started

```
<!-- Functionalities to handle types -->
const forceNarrowString: (str: any) => string;
const forceNarrowBoolean: (boo: any) => boolean;
const forceNarrowNumber: (num: any) => number;
const narrow: <T>(arg: any) => T;
const forceNarrow: <T>(arg: any) => T;

const isAsync: (asyncFn: any) => boolean;
const isString: (s: unknown) => boolean;
const isBoolean: (s: unknown) => boolean;
const isNumber: (s: unknown) => boolean;
const isArray: (s: unknown) => boolean;
const isUndefined: (s: unknown) => boolean;
const isNull: (s: unknown) => boolean;

<!-- Helpful types -->
type IOverwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

<!-- Default types -->
interface IResponseSuccess<T> {
    ok: true;
    request: T;
    error: string | string[];
}
interface IResponseError {
    ok: false;
    request: {};
    error: string | string[];
}
type IResp<T> = IResponseSuccess<T> | IResponseError;
```

### 📡 Installing

```
yarn add @fabiochiquezi/ts-utils
```

## ✋ Author

- **Fábio Chiquezi** - [GitHub](https://github.com/fabiochiquezi) / [LinkedIn](https://www.linkedin.com/in/fabiochiquezi/)
