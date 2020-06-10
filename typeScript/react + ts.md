1. [react.FC和normal function区别](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components)

   * react.FC

     ```typescript
     type FC<P = {}> = FunctionComponent<P>;
     type PropsWithChildren<P> = P & { children?: ReactNode };
     interface FunctionComponent<P = {}> {
         (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
         propTypes?: WeakValidationMap<P>;
         contextTypes?: ValidationMap<any>;
         defaultProps?: Partial<P>;
         displayName?: string;
     }
     ```

   [Create-react-app从模板中删除React.FC](https://github.com/facebook/create-react-app/pull/8177)

   https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components

   **使用FC需要注意：**

   * 组件defaultProps使用es6方式
   * 无法使用泛型
   * 返会类型是ReactElement和null（不包含undefined，string等）

2. [hooks](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks)

   * 类型会自动推断

   * 初始值是null使用联合类型useState<P | null>(null)

   * useRef<HTMLElement>(null!) or useRef<HTMLElement | *null*>(*null*)

   * 自定义hooks注意返回值的类型推断

     ```tsx
     export function useLoading() {
       const [isLoading, setState] = React.useState(false);
       const load = (aPromise: Promise<any>) => {
         setState(true);
         return aPromise.finally(() => setState(false));
       };
       return [isLoading, load] as const; // infers [boolean, typeof load] instead of (boolean | typeof load)[]
     }
     ```

     * > When declaring a mutable variable or property, TypeScript often *widens* values to make sure that we can assign things later on without writing an explicit type.
       >
       > 在声明可变变量或属性时，TypeScript通常会加宽值，以确保以后可以分配内容而无需编写显式类型

     * 使用const断言，将literal types 、object literals、array literals变成readonly

3. 

4. [class component](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/class_components)

## 参考

- [React + TypeScript备忘单](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets)
- [TypeScript中的React＆Redux-静态键入指南](https://github.com/piotrwitek/react-redux-typescript-guide#react--redux-in-typescript---static-typing-guide)
- [使用TypeScript开发React应用程序](https://egghead.io/courses/use-typescript-to-develop-react-applications)
- [使用Typescript 2.8的Ultimate React组件模式](https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

