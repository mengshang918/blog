## 使用ajv-errors生成json-schema错误信息

ajv-errors给Json-schema添加了一个`errorMessage`关键字,通过这个关键字来输出错误信息

```js
const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
require('ajv-errors')(ajv)
//一个json schema规范的对象
const schema = {}
//待校验的json对象
const data = {}
const validate = ajv.compile(schema)
validate(data) //返回boolean，是否校验通过
validate.errors //错误详细信息
```