## ts的必要

* 静态类型检查
* 代码运行前检查 类型
  一个函数返回一个对象，在一次需求中将函数改成了aysnc ，此时返回promise，但是忘记修改使用该函数的地方。导致返回不是对象。
  使用ts可以interface直接定义返回类型为对象。在切换成async的时候直接报错提示函数必须返回一个对象
* 阅读文章https://ts.chibicode.com/todo/

## learn

1. `interface`通用接口和`type`类型别名区别

   [stackoverflow](https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types/52682220#52682220)

   [官方文档](https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases)

   * interface可以申明对象和函数，type除了对象、函数还可以申明基本类型、联合类型和元祖。

     ```typescript
     // primitive 基本类型
     type Name = string;
     type PartialPointX = { x: number; };
     
     // union 联合类型
     type PartialPoint = PartialPointX | PartialPointY;
     
     // tuple 元祖
     type Data = [number, string];
     ```

   * interface可以合并申明，type不可以

     ```typescript
     interface Point { x: number; }
     interface Point { y: number; }
     
     const point: Point = { x: 1, y: 2 };
     ```

   * object、function用法不同

     ```typescript
     interface Point {
       x: number;
       y: number;
     }
     
     interface SetPoint {
       (x: number, y: number): void;
     }
     
     type Point = {
       x: number;
       y: number;
     };
     
     type SetPoint = (x: number, y: number) => void;
     ```

   * 继承

     **Interface extends interface**

     ```typescript
     interface PartialPointX { x: number; }
     interface Point extends PartialPointX { y: number; }
     ```

     **Type alias extends type alias**

     ```typescript
     type PartialPointX = { x: number; };
     type Point = PartialPointX & { y: number; };
     ```

     **Interface extends type alias**

     ```typescript
     type PartialPointX = { x: number; };
     interface Point extends PartialPointX { y: number; }
     ```

     **Type alias extends interface**

     ```typescript
     interface PartialPointX { x: number; }
     type Point = PartialPointX & { y: number; };
     ```

2. 了解泛型

   https://ts.chibicode.com/generics/

   * 泛型命名：一般是单词首字母的大写

   * 泛型函数 `makeState<S>(){}`

     函数调用才指定类型`makeState<number>()`

   * `extends` 指定泛型可选类型 `makeState<S extends number | string>(){}`

     S只能是字符串或者数字

   * 泛型默认类型 `makeState<S extends number | string = number>(){}`

     不指定，默认为数字

3. 映射类型（mapped types）

4. react + ts 

   [备忘单](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#basic-cheatsheet-table-of-contents)

