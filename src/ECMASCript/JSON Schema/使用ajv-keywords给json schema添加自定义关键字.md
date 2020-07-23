> JSON Schema 的关键字太少，有些默认的校验无法满足效果，需要自定义校验关键字，ajv-errors 提供一些常见的 validator 关键字

## 用法

```js
var Ajv = require('ajv')
var ajv = new Ajv({ $data: true })
//添加所有的关键字
require('ajv-keywords')(ajv)
//只添加instanceof关键字
require('ajv-keywords')(ajv, 'instanceof')
//添加多个关键字
require('ajv-keywords')(ajv, ['typeof', 'instanceof'])
//只添加instanceof关键字，其他代码不添加（类似按需加载）
require('ajv-keywords/keywords/instanceof')(ajv)
```

## 关键字

1. [typeof](https://www.npmjs.com/package/ajv-keywords#typeof)

   基于 js 的 typeof 实现

2. [instaceof](https://www.npmjs.com/package/ajv-keywords#instanceof)

   基于 js 的 instaceof 实现

### number

- [range 和 exclusiveRange](https://www.npmjs.com/package/ajv-keywords#range-and-exclusiverange)

### string

- [regexp](https://www.npmjs.com/package/ajv-keywords#regexp)

  - 支持标准`pattern`不支持的标志

  - 此关键字仅适用于字符串。如果数据不是字符串，则验证成功

- [formatmaximum、formatminimum、formatexclusivemaximum、formatexclusiveminimum](https://www.npmjs.com/package/ajv-keywords#formatmaximum--formatminimum-and-formatexclusivemaximum--formatexclusiveminimum)

  校验 format：datetime、time、date 类型 的范围

- [transform](https://www.npmjs.com/package/ajv-keywords#transform)

  Json schema 是严格校验的，所以字符串中的空格也会影响校验结果

  `transform`可以在校验前改变字符串

  - `trim`: remove whitespace from start and end
  - `trimLeft`: remove whitespace from start
  - `trimRight`: remove whitespace from end
  - `toLowerCase`: case string to all lower case
  - `toUpperCase`: case string to all upper case
  - `toEnumCase`: case string to match case in schema

### arrays

- [uniqueitemproperties](https://www.npmjs.com/package/ajv-keywords#uniqueitemproperties)

  对象组成的数组每个值必须是不同的

### objects

- [allRequired](https://www.npmjs.com/package/ajv-keywords#allrequired)

  对象中所有的都要满足

- [anyRequired](https://www.npmjs.com/package/ajv-keywords#anyrequired)

  对象中只要有一个满足

- [oneRequired](https://www.npmjs.com/package/ajv-keywords#onerequired)

  对象中有且只有一个满足

- [prohibited](https://www.npmjs.com/package/ajv-keywords#prohibited)

  对象中不存在 prohibited 中指定的属性

- [deepPropperties](https://www.npmjs.com/package/ajv-keywords#deepproperties)

  - 校验深层结构中某个属性具体的校验

- [deepRequired](https://www.npmjs.com/package/ajv-keywords#deeprequired)

  - 校验数组（对象）深层结构中某个值是必须的

### computer keywords

- [switch](https://www.npmjs.com/package/ajv-keywords#switch-deprecated)

  可用 if/then/else 代替

- [select/selectcases/selectdefault](https://www.npmjs.com/package/ajv-keywords#select--selectcases--selectdefault)

  select 查询某个值，匹配 selectcases 找那个值，并执行其中校验。匹配不到则校验 selectdefault

### All types

- [dynamicDefaults](https://www.npmjs.com/package/ajv-keywords#dynamicdefaults)

  设置默认值，并且可以扩展自定义函数。类似 uuid 等

## 参考

1. [ajv-keywords readme](https://www.npmjs.com/package/ajv-keywords)
