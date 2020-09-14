---
id: 718deb34c13a2d51e3c2ba69f472fce9
title: JSONSchema
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [类型](#%E7%B1%BB%E5%9E%8B)
- [关键字](#%E5%85%B3%E9%94%AE%E5%AD%97)
  - [不会校验的关键字](#%E4%B8%8D%E4%BC%9A%E6%A0%A1%E9%AA%8C%E7%9A%84%E5%85%B3%E9%94%AE%E5%AD%97)
  - [会校验的关键字](#%E4%BC%9A%E6%A0%A1%E9%AA%8C%E7%9A%84%E5%85%B3%E9%94%AE%E5%AD%97)
- [非 json 格式的数据校验](#%E9%9D%9E-json-%E6%A0%BC%E5%BC%8F%E7%9A%84%E6%95%B0%E6%8D%AE%E6%A0%A1%E9%AA%8C)
- [组合模式](#%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F)
- [条件](#%E6%9D%A1%E4%BB%B6)
- [高级](#%E9%AB%98%E7%BA%A7)
- [使用 ajv、ajv-keywords、ajv-errors 校验](#%E4%BD%BF%E7%94%A8-ajvajv-keywordsajv-errors-%E6%A0%A1%E9%AA%8C)
- [参考](#%E5%8F%82%E8%80%83)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 类型

> type
>
> - Number/string/boolean/object/array/null
> - 字符串、字符串数组形式

1. string

   - minLength 非负数
   - maxLength 非负数
   - pattern 正则‘
   - format 常用格式
     - 日期
     - 邮件
     - 主机名
     - ip
     - uri
     - 正则表达式
     - ...

2. number/integer(整数)

   - multipleOf 倍数
   - _X_ ≥`minimum`
   - _x_ >`exclusiveMinimum`
   - _X_ ≤`maximum`
   - _x_ <`exclusiveMaximum`

3. object 键值必须是字符串

   - properties 对象属性

   - additionalProperties 是否允许有额外属性

   - required 必填的属性 字符串数组

   - propertyNames 键值名称

     - pattern 正则匹配键值名称是否符合

   - minProperties 属性最小数量 非负整数

   - maxProperties 属性最大数量 非负整数

   - patternProperties 给定的属性名符合正则

     ```json
     {
       "type": "object",
       "patternProperties": {
         "^S_": { "type": "string" },
         "^I_": { "type": "integer" }
       },
       "additionalProperties": false
     }
     ```

   - dependencies 依赖

     - 属性依赖

       ```json
       {
         "type": "object",
         "properties": {
           "name": {
             "type": "string",
             "age": "number"
           }
         },
         "dependencies": {
           "name": ["age"]
         }
       }
       //有name时，必须有age
       ```

     - schema 依赖

       ```json
       {
         "type": "object",
         "properties": {
           "name": {
             "type": "string",
             "age": "number"
           }
         },
         "dependencies": {
           "name": {
             "properties": {
               "address": {
                 "type": "string"
               },
               "required": ["address"]
             }
           }
         }
       }
       //有name的时候，必须有string类型的address
       ```

   7. array

      - Items 验证数组每个元素

        ```json
        {
          "type": "array",
          "items": {
            "type": "number"
          }
        }
        ```

      - contains 验证数组中某个元素符合条件

      - items 是数组，单独验证每个元素是否符合相应条件

      - additionalItems 附加项验证

        ```json
        {
          "type": "array",
          "items": [
            {
              "type": "number"
            },
            {
              "type": "string",
              "enum": ["Street", "Avenue", "Boulevard"]
            }
          ],
          "additionalItems": { "type": "string" }
        }
        //数组第一个元素是number，第二个元素是“street”/"avenue"/"boulevard"中的一个,后续元素都是string
        ```

      - minItems 最少

      - maxItems 最大

      - uniqueItems 数组中每个元素都是唯一的

   8. boolean

      必须严格相等===

   9. null

      严格相等===

## 关键字

### 不会校验的关键字

1. title

   string

2. description

   string

3. default

   默认值

4. examples

   例子

5. \$comment 严格注释：将注释留给 JSON 模式的未来编辑者

### 会校验的关键字

1. enum

2. const 作为 enum 1 个时的语法糖

   ```json
   { "const": "United States of America" }
   //等价于
   { "enum": [ "United States of America" ] }
   ```

## 非 json 格式的数据校验

1. contentMediaType 数据类型 图片、文档类型....

   参考：

   - https://www.iana.org/assignments/media-types/media-types.xhtml

   - https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

2. contentEncoding 编码类型

   可接受的值为`7bit`，`8bit`，`binary`，`quoted-printable` 和`base64`。如果未指定，则编码与包含的 JSON 文档相同`UTF-8`。

## 组合模式

- [allOf](https://json-schema.org/understanding-json-schema/reference/combining.html#allof)：所有的都符合

- [anyOf](https://json-schema.org/understanding-json-schema/reference/combining.html#anyof)：符合一个或者多个

- [oneOf](https://json-schema.org/understanding-json-schema/reference/combining.html#oneof)：只有一个符合，多个符合会失败

- not 不满足

  ```json
  { "not": { "type": "string" } }
  ```

## 条件

> `if/then/else`
>
> 假设您要编写一个模式来处理美国和加拿大的地址。这些国家/地区的邮政编码格式不同，我们希望根据国家/地区选择要验证的格式。如果地址在美国，则该`postal_code`字段为“邮政编码”：五位数字，后跟可选的四位后缀。如果地址在加拿大，则该`postal_code`字段为六位字母数字字符串，字母和数字交替出现。

```json
{
  "type": "object",
  "properties": {
    "street_address": {
      "type": "string"
    },
    "country": {
      "enum": ["United States of America", "Canada"]
    }
  },
  "if": {
    "properties": { "country": { "const": "United States of America" } }
  },
  "then": {
    "properties": { "postal_code": { "pattern": "[0-9]{5}(-[0-9]{4})?" } }
  },
  "else": {
    "properties": {
      "postal_code": { "pattern": "[A-Z][0-9][A-Z] [0-9][A-Z][0-9]" }
    }
  }
}
```

可以配合 allof 实现多个的场景

## 高级

1. \$schema

   指定当前 schema 使用的规范

2. \$id

   - 它为模式声明了唯一的标识符。
   - 它声明了一个基础 URI，可以根据该基础 URI `$ref`引用进行解析。

3. \$ref

   1. 可以配合 definition 实现重用

      > 当某几个属性具有相同的格式时，可以在父 schema 的定义一个 definition 并配合\$ref 实现重用

      - 当前文件#

        `{ "$ref": "#/definitions/address" }`

      - 当前 json 相同 URI 的 json 文件

        `{ "$ref": "definitions.json#/address" }`

      ```json
      {
        "$schema": "http://json-schema.org/draft-07/schema#",

        "definitions": {
          "address": {
            "type": "object",
            "properties": {
              "street_address": { "type": "string" },
              "city": { "type": "string" },
              "state": { "type": "string" }
            },
            "required": ["street_address", "city", "state"]
          }
        },

        "type": "object",

        "properties": {
          "billing_address": { "$ref": "#/definitions/address" },
          "shipping_address": { "$ref": "#/definitions/address" }
        }
      }
      ```

   2. 实现递归，调用自身

      ```json
      {
        "$schema": "http://json-schema.org/draft-07/schema#",

        "definitions": {
          "person": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "children": {
                "type": "array",
                "items": { "$ref": "#/definitions/person" },
                "default": []
              }
            }
          }
        },

        "type": "object",

        "properties": {
          "person": { "$ref": "#/definitions/person" }
        }
      }
      ```

   3. 配合\$id 使用，无需依照位置

      ```json
      {
        "$schema": "http://json-schema.org/draft-07/schema#",

        "definitions": {
          "address": {
            "$id": "#address",
            "type": "object",
            "properties": {
              "street_address": { "type": "string" },
              "city": { "type": "string" },
              "state": { "type": "string" }
            },
            "required": ["street_address", "city", "state"]
          }
        },

        "type": "object",

        "properties": {
          "billing_address": { "$ref": "#address" },
          "shipping_address": { "$ref": "#address" }
        }
      }
      ```

   4. 配合条件 allOf、anyOf、oneOf

## 使用 ajv、ajv-keywords、ajv-errors 校验

```js
const Ajv = require('ajv')
const ajv = new Ajv({ allErrors: true, jsonPointers: true, $data: true })
require('ajv-errors')(ajv)
require('ajv-keywords')(ajv)

//json schema
const schema = {}
//待校验数据
const data = {}

//方法一
const validate = ajv.compile(schema)
console.log(validate(data)) //返回boolean，是否校验通过
console.log(validate.error) //校验的错误对象

//方法二
const bol = ajv.validate(schema, data)
```

## 参考

1. [json-schema](https://json-schema.org/)

2. [start json-schema](https://json-schema.org/understanding-json-schema/)
