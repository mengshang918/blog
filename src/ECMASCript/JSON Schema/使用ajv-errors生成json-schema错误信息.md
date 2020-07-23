## 使用 ajv-errors 生成 json-schema 错误信息

ajv-errors 给 Json-schema 添加了一个`errorMessage`关键字,通过这个关键字来输出错误信息

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

## 用法

1. 单个错误信息

   用一条消息替换当前 schema 和 sub schema 中的所有错误

   ```json
   var schema = {
     type: 'object',
     required: ['foo'],
     properties: {
       foo: { type: 'integer' }
     },
     additionalProperties: false,
     errorMessage: 'should be an object with an integer property foo only'
   };
   ```

2. 关键字错误

   ```json
   var schema = {
     type: 'object',
     required: ['foo'],
     properties: {
       foo: { type: 'integer' }
     },
     additionalProperties: false,
     errorMessage: {
       type: 'should be an object', // will not replace internal "type" error for the property "foo"
       required: 'should have property foo',
       additionalProperties: 'should not have properties other than foo'
     }
   };
   ```

   `required`和`dependencies`可以使用对象指定特定的属性的错误信息。示例如下：

   ```json
   var schema = {
     type: 'object',
     required: ['foo', 'bar'],
     properties: {
       foo: { type: 'integer' },
       bar: { type: 'string' }
     },
     errorMessage: {
       type: 'should be an object', // will not replace internal "type" error for the property "foo"
       required: {
         foo: 'should have an integer property "foo"',
         bar: 'should have a string property "bar"'
       }
     }
   };
   ```

3. 属性的错误信息

   无论属性是在哪里创建的

   ```json
   var schema = {
     type: 'object',
     required: ['foo', 'bar'],
     allOf: [{
       properties: {
         foo: { type: 'integer', minimum: 2 },
         bar: { type: 'string', minLength: 2 }
       },
       additionalProperties: false
     }],
     errorMessage: {
       properties: {
         foo: 'data.foo should be integer >= 2',
         bar: 'data.bar should be string with length >= 2'
       }
     }
   };
   ```

4. 默认错误信息

   当 errorMessage 是一个对象时，可以指定一个默认错误来兜底错误。

   ```json
   var schema = {
     type: 'object',
     required: ['foo', 'bar'],
     allOf: [{
       properties: {
         foo: { type: 'integer', minimum: 2 },
         bar: { type: 'string', minLength: 2 }
       },
       additionalProperties: false
     }],
     errorMessage: {
       type: 'data should be an object',
       properties: {
         foo: 'data.foo should be integer >= 2',
         bar: 'data.bar should be string with length >= 2'
       },
       _: 'data should have properties "foo" and "bar" only'
     }
   };
   ```

5. 模板语法

   配合 json pointer 可以展示当前 json 的实际值

   ```json
   var schema = {
     "type": "object",
     "properties": {
       "size": {
         "type": "number",
         "minimum": 4
       }
     },
     "errorMessage": {
       "properties": {
         "size": "size should be a number bigger or equal to 4, current value is ${/size}"
       }
     }
   }
   ```

validate({size:1})
//validate.error 是个对象。其中会有错误信息如下。error 具体结构参考https://www.npmjs.com/package/ajv-errors
//"size should be a number bigger or equal to 4, current value is 1"

````

可以将 minimum 设置成一个变量，然后 errorMessage 配合变量和 es6 模板字符串达到改变变量，自动更改校验提示。

注意：json pointer 需要使用\转义

```json
//同上一个校验
const minimum = 4
var schema = {
  "type": "object",
  "properties": {
    "size": {
      "type": "number",
      minimum
    }
  },
  "errorMessage": {
    "properties": {
      "size": `size should be a number bigger or equal to ${minimum}, current value is \${/size}`
    }
  }
}
````

## 参考

1. [ajv-errors readme](https://www.npmjs.com/package/ajv-errors)
