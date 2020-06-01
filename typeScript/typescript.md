# 。typescript

why使用TS？

1. 提供类型检查(数据约束)

   ```react
   //react 对数据的约束
   import PropTypes from 'prop-types'
   component.propTypes = {
       optionalArray: PropTypes.array,
       optionalBool: PropTypes.bool,
       optionalFunc: PropTypes.func,
       requiredFunc: PropTypes.func.isRequired,
   }
   //ts的约束
   class Component {
       optionalArray?: Array<string> // string 类型的 数组
       optionalBool?: boolean // 写上 ? 号，就表示着这个属性可能为空
       optionalFunc?: (foo: string, bar: number) => boolean // 函数的参数，返回值都一目了然
       requiredFunc: () => void 
   }
   ```

2. 使代码更易阅读理解

   ```typescript
   //不使用ts
   export const fetch = function (url, params, user) {
       // dosomething
   
       return http(options).then(data => {
           return data
       }).catch(err => {
           return err
       })
   }
   
   //使用ts
   export const fetch = function (url: string | object, params?: any, user?: User): Promise<object | Error> {
       // dosomething
   
       return http(options).then(data => {
           return data
       }).catch(err => {
           return err
       })
   }
   ```


## 原始数据类型

1. 布尔值

   `let isDone: boolean = false;`

2. 数字

   `let decLiteral: number = 6;`

3. 字符串

   `let name: string = "bob";`

4. 数组

   - `let list: number[] = [1, 2, 3];`
   - `let list: Array<number> = [1, 2, 3];` 泛型

5. 元组

   * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同

   * 访问越界的元素，会使用联合类型替代

     ```typescript
     let x: [string, number];
     x = ['hello', 10];
     x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型 error
     x.push() 
     ```

6.  空值

    * 用 `void` 表示没有任何返回值的函数 

      ```typescript
      function alertName(): void {
          alert('My name is Tom');
      }
      ```

    * `void`类型变量：undefined、null

      `let unusable: void = undefined;`

7.  Null 和 Undefined

    >  与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型 

    ```typescript
    let u: undefined = undefined;
    let n: null = null;
    // 这样不会报错
    let num: number = undefined; 
    ```

8. nerver

   * 函数throw一个error

   * nerver是任何类型的子类型。但是任何类型都不是nerver的子类型（包括any和它本身）

9. any
   * `any` 类型，允许被赋值为任意类型 
   * 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
   * 变量在声明未指定其类型，会被识别为任意值类型

## 类型推论

* TS会在没有明确的指定类型的时候推测出一个类型------类型推论。

  ```typescript
  let myFavoriteNumber = 'seven';
  myFavoriteNumber = 7;
  //等价于
  let myFavoriteNumber: string = 'seven';
  myFavoriteNumber = 7;
  ```

* 定义的时候没有赋值，都会被推断成 `any` 类型而完全不被类型检查

## 联合类型 |

> 联合类型: 取值可以为多种类型中的一种 

```typescript
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

* 当 TS 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型里共有的属性或方法** 

  ```typescript
  //error: Property 'length' does not exist on type 'number'.
  function getLength(something: string | number): number {
      return something.length;
  }
  
  //success
  function getString(something: string | number): string {
      return something.toString();
  }
  ```

## 类型断言

1. **语法**

   - `<类型>值`
   - `值 as 类型`

2. **将一个联合类型的变量指定为一个更加具体的类型**

   ```typescript
   function getLength(something: string | number): number {
       if ((<string>something).length) {
           return (<string>something).length;
       } else {
           return something.toString().length;
       }
   }
   ```

3. **类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的** 

## 对象的类型——接口

```typescript
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
```

* 接口一般首字母大写 
*  赋值的时候，变量的形状必须和接口的形状保持一致(不可多属性、少属性)

1. **可选属性**

   不完全匹配一个形状 

   ```typescript
   interface Person {
       name: string;
       age?: number;
   }
   let tom: Person = {
       name: 'Tom'
   };
   ```

2. **任意属性**

   `[propName: string]: any;`

   **一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性** 

   ```typescript
   interface Person {
       name: string;
       age?: number;
       [propName: string]: string;
   }
   
   let tom: Person = {
       name: 'Tom',
       age: 25,
       gender: 'male'
   };
   //error 任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性
   ```

3. **只读属性**

   用 `readonly` 定义只读属性 

   **只读约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候**

   Q:什么时候使用readonly，什么时候使用const？
   
   a: 对象属性使用readonly，变量使用const
   
   ```typescript
   interface Person {
       readonly id: number;
       name: string;
       age?: number;
       [propName: string]: any;
   }
   let tom: Person = {
       id: 89757,
       name: 'Tom',
       gender: 'male'
   };
   tom.id = 9527;
   //error 使用 readonly 定义的属性 id 初始化后，又被赋值了，所以报错了数组的类型
   ```
   

## 数组类型

1. **「类型 + 方括号」表示法**

   * 数组的项中不允许出现其他的类型 
   * 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制 

   ```typescript
   let fibonacci: number[] = [1, 1, 2, 3, 5];
   ```

2. **数组泛型**

   ```typescript
   let fibonacci: Array<number> = [1, 1, 2, 3, 5];
   ```

3. **任意类型数组**

   ```typescript
   let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];
   ```

4. **类数组**

   常见的类数组都有自己的接口定义，如 `IArguments`, `NodeList`, `HTMLCollection` 等 

   详见**内置对象**

## 函数的类型

1. **函数声明**

   ```typescript
   function sum(x: number, y: number): number {
       return x + y;
   }
   ```

   * **输入多余的（或者少于要求的）参数，是不被允许的** 

2. **函数表达式**

   * 不要混淆了 TS 中的 `=>` 和 ES6 中的 `=>` 
   * 在 TS 的类型定义中，`=>` 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
   * 在 ES6 中，`=>` 叫做箭头函数

   ```typescript
   let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
       return x + y;
   };
   ```

3. **用接口定义函数的形状**

   ```typescript
   interface SearchFunc {
       (source: string, subString: string): boolean;
   }
   
   let mySearch: SearchFunc;
   mySearch = function(source: string, subString: string) {
       return source.search(subString) !== -1;
   }
   ```

4. **可选参数**

   用 `?` 表示可选的参数 

   * **可选参数后面不允许再出现必须参数** (可选参数必须接在必需参数后面 )

     ```typescript
     function buildName(firstName: string, lastName?: string) {
         if (lastName) {
             return firstName + ' ' + lastName;
         } else {
             return firstName;
         }
     }
     ```

5. **参数默认值**

   * **TS 会将添加了默认值的参数识别为可选参数**

   * 参数有默认值后，就不受「可选参数必须接在必需参数后面」的限制了 

     ```typescript
     function buildName(firstName: string = 'Tom', lastName: string) {
         return firstName + ' ' + lastName;
     }
     ```

6. **剩余参数**

   * rest 参数只能是最后一个参数 

     ```typescript
     //items 是一个数组。所以我们可以用数组的类型来定义
     function push(array: any[], ...items: any[]) {
         items.forEach(function(item) {
             array.push(item);
         });
     }
     
     let a = [];
     push(a, 1, 2, 3);
     ```


## 内置对象

1. **ECMAScript 的内置对象**

   ```typescript
   let b: Boolean = new Boolean(1);
   let e: Error = new Error('Error occurred');
   let d: Date = new Date();
   let r: RegExp = /[a-z]/;
   ```

2. **DOM 和 BOM 的内置对象**

   `Document`、`HTMLElement`、`Event`、`NodeList` 

   ```typescript
   let body: HTMLElement = document.body;
   let allDiv: NodeList = document.querySelectorAll('div');
   document.addEventListener('click', function(e: MouseEvent) {
     // Do something
   });
   ```

## 类型别名

> 使用 `type` 创建类型别名 

```typescript
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```

## 字符串字面量类型

> * 字符串字面量类型用来约束取值只能是某几个字符串中的一个 
> * 类型别名与字符串字面量类型都是使用` type `进行定义

```typescript
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'
```

## 元祖

> 元组合并了不同类型的对象 

* 直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项 

* 先声明变量，可只赋值部分

* 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型 

  ```typescript
  let xcatliu: [string, number] = ['Xcat Liu'];//error
  
  let xcatliu: [string, number];
  xcatliu = ['Xcat Liu', 25];
  ```

## 枚举

> 枚举类型用于取值被限定在一定范围内的场景 

* 枚举成员会被赋值为从 `0` 开始递增的数字，同时也会对枚举值到枚举名进行反向映射 

  ```typescript
  enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
  
  console.log(Days["Sun"] === 0); // true
  console.log(Days["Mon"] === 1); // true
  console.log(Days["Tue"] === 2); // true
  console.log(Days["Sat"] === 6); // true
  
  console.log(Days[0] === "Sun"); // true
  console.log(Days[1] === "Mon"); // true
  console.log(Days[2] === "Tue"); // true
  console.log(Days[6] === "Sat"); // true
  ```

1. **手动赋值**

   * 未手动赋值的枚举项会接着上一个枚举项递增 

     ```typescript
     enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
     
     console.log(Days["Sun"] === 7); // true
     console.log(Days["Mon"] === 1); // true
     console.log(Days["Tue"] === 2); // true
     console.log(Days["Sat"] === 6); // true
     ```

   * 注意未手动赋值覆盖手动赋值情况

     ```typescript
     enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};
     
     console.log(Days["Sun"] === 3); // true
     console.log(Days["Wed"] === 3); // true
     console.log(Days[3] === "Sun"); // false
     console.log(Days[3] === "Wed"); // true
     ```

   * 手动赋值的枚举项可以不是数字（使用类型断言）

     ```typescript
     enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};
     ```

2. **常数项和计算所得项**

   * 计算所得项

     ```typescript
     enum Color {Red, Green, Blue = "blue".length};
     ```

   * 未手动赋值的项不能在计算所得项后面

3. **常数枚举**

   > 常数枚举是使用 `const enum` 定义的枚举类型 

   * 常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员 

     ```typescript
     const enum Directions {
         Up,
         Down,
         Left,
         Right
     }
     ```

4. **外部枚举**

   > * 外部枚举是使用 `declare enum` 定义的枚举类型 
   > * `declare` 定义的类型只会用于编译时的检查，编译结果中会被删除 

## 类

1. **public private 和 protected**

   - `public` 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 `public` 的
   - `private` 修饰的属性或方法是私有的，不能在声明它的类的外部访问
   - `protected` 修饰的属性或方法是受保护的，它和 `private` 类似，区别是它在子类中也是允许被访问的

2. **抽象类**

   * `abstract` 用于定义抽象类和其中的抽象方法 
   * 抽象类是不允许被实例化 
   * 抽象类中的抽象方法必须被子类实现 

   ```typescript
   abstract class Animal {
       public name;
       public constructor(name) {
           this.name = name;
       }
       public abstract sayHi();
   }
   
   class Cat extends Animal {
       public sayHi() {
           console.log(`Meow, My name is ${this.name}`);
       }
   }
   
   let cat = new Cat('Tom');
   ```

3. **类的类型**

   ```typescript
   class Animal {
       name: string;
       constructor(name: string) {
           this.name = name;
       }
       sayHi(): string {
         return `My name is ${this.name}`;
       }
   }
   
   let a: Animal = new Animal('Jack');
   console.log(a.sayHi()); // My name is Jack
   ```

## 类与接口

> 接口的用途：
>
> - 接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述。
> - 接口可以对类的一部分行为进行抽象

1. **类实现接口**

   > * 一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 `implements` 关键字来实现 
   > * 一个类可以实现多个接口 

   ```typescript
   interface Alarm {
       alert();
   }
   
   interface Light {
       lightOn();
       lightOff();
   }
   
   class Car implements Alarm, Light {
       alert() {
           console.log('Car alert');
       }
       lightOn() {
           console.log('Car light on');
       }
       lightOff() {
           console.log('Car light off');
       }
   }
   //Car 实现了 Alarm 和 Light 接口，既能报警，也能开关车灯
   ```

2. **接口继承接口**

   ```typescript
   interface Alarm {
       alert();
   }
   
   interface LightableAlarm extends Alarm {
       lightOn();
       lightOff();
   }
   ```

3. **接口继承类**

   ```typescript
   class Point {
       x: number;
       y: number;
   }
   
   interface Point3d extends Point {
       z: number;
   }
   
   let point3d: Point3d = {x: 1, y: 2, z: 3};
   ```

4. **混合类型**

## 泛型

> 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性 

```typescript
//在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了。
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
//接着在调用的时候，可以指定它具体的类型为 string
createArray<string>(3, 'x'); // ['x', 'x', 'x']
```

1. **多个类型参数**

   > 定义泛型的时候，可以一次定义多个类型参数 

   ```typescript
   function swap<T, U>(tuple: [T, U]): [U, T] {
       return [tuple[1], tuple[0]];
   }
   
   swap([7, 'seven']); // ['seven', 7]
   ```

2. **泛型约束**

   > 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法 ，可以对泛型进行约束，只允许这个函数传入那些包含 `length` 属性的变量。这就是泛型约束 

   * 使用了 extends 约束了泛型 T 必须符合接口 的形状

     ```typescript
     interface Lengthwise {
         length: number;
     }
     
     function loggingIdentity<T extends Lengthwise>(arg: T): T {
         console.log(arg.length);
         return arg;
     }
     //使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性
     ```

   * 多个类型参数之间也可以互相约束 

     ```typescript
     function copyFields<T extends U, U>(target: T, source: U): T {
         for (let id in source) {
             target[id] = (<T>source)[id];
         }
         return target;
     }
     
     let x = { a: 1, b: 2, c: 3, d: 4 };
     
     copyFields(x, { b: 10, d: 20 });
     //使用了两个类型参数，其中要求 T 继承 U，这样就保证了 U 上不会出现 T 中不存在的字段
     ```

3. **泛型接口**

   > 使用含有泛型的接口来定义函数的形状 

   ```typescript
   //可以把泛型参数提前到接口名上
   interface CreateArrayFunc<T> {
       (length: number, value: T): Array<T>;
   }
   //此时在使用泛型接口的时候，需要定义泛型的类型
   let createArray: CreateArrayFunc<any>;
   createArray = function<T>(length: number, value: T): Array<T> {
       let result: T[] = [];
       for (let i = 0; i < length; i++) {
           result[i] = value;
       }
       return result;
   }
   
   createArray(3, 'x'); // ['x', 'x', 'x']
   ```

4. **泛型类**

   ```typescript
   class GenericNumber<T> {
       zeroValue: T;
       add: (x: T, y: T) => T;
   }
   
   let myGenericNumber = new GenericNumber<number>();
   myGenericNumber.zeroValue = 0;
   myGenericNumber.add = function(x, y) { return x + y; };
   ```

5. **泛型参数的默认类型**

   > 当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用 

   ```typescript
   function createArray<T = string>(length: number, value: T): Array<T> {
       let result: T[] = [];
       for (let i = 0; i < length; i++) {
           result[i] = value;
       }
       return result;
   }
   ```

## 声明合并

> 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型 

1. **函数的合并**

   ```typescript
   function reverse(x: number): number;
   function reverse(x: string): string;
   function reverse(x: number | string): number | string {
       if (typeof x === 'number') {
           return Number(x.toString().split('').reverse().join(''));
       } else if (typeof x === 'string') {
           return x.split('').reverse().join('');
       }
   }
   ```

2. **接口的合并**

   * 接口中的属性在合并时会简单的合并到一个接口 

     * 合并的属性的类型必须是**唯一**的 

       ```typescript
       interface Alarm {
           price: number;
       }
       interface Alarm {
           weight: number;
       }
       //相当于
       interface Alarm {
           price: number;
           weight: number;
       }
       ```

     * 若不唯一，类型必须相同，否则会报错

       ```typescript
       interface Alarm {
           price: number;
       }
       interface Alarm {
           price: number;  // 虽然重复了，但是类型都是 `number`，所以不会报错
           weight: number;
       }
       ```

   * 接口中方法的合并，与函数的合并一样 

     ```typescript
     interface Alarm {
         price: number;
         alert(s: string): string;
     }
     interface Alarm {
         weight: number;
         alert(s: string, n: number): string;
     }
     //相当于
     interface Alarm {
         price: number;
         weight: number;
         alert(s: string): string;
         alert(s: string, n: number): string;
     }
     ```

3. **类的合并**

   类的合并与接口的合并规则一致 

## 映射类型