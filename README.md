# TS Utils

Some simple functionalities to help the work with TS. See more in the documentation at [chiquezi.com/libraries/ts-utils](https://www.chiquezi.com/libraries/ts-utils)

### 🚀 Getting Started

```
// Install
yarn add @fabiochiquezi/ts-utils or npm install @fabiochiquezi/ts-utils

// Usage
import * as fns from '@fabiochiquezi/ts-utils'
```

### 📡 Examples

```
const forceNarrowString: (str: any) => string;

type IResp<T> = IResponseSuccess<T> | IResponseError;

type IOverwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
```

### ✋ Author

- **Fábio Chiquezi** - [GitHub](https://github.com/fabiochiquezi) / [LinkedIn](https://www.linkedin.com/in/fabiochiquezi/)
