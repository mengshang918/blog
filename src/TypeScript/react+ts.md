<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [参考](#%E5%8F%82%E8%80%83)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

1. [react.FC 和 normal function 区别](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components)

   - react.FC

     ```typescript
     type FC<P = {}> = FunctionComponent<P>
     type PropsWithChildren<P> = P & { children?: ReactNode }
     interface FunctionComponent<P = {}> {
       (props: PropsWithChildren<P>, context?: any): ReactElement<
         any,
         any
       > | null
       propTypes?: WeakValidationMap<P>
       contextTypes?: ValidationMap<any>
       defaultProps?: Partial<P>
       displayName?: string
     }
     ```

   [Create-react-app 从模板中删除 React.FC](https://github.com/facebook/create-react-app/pull/8177)

   https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components

   **使用 FC 需要注意：**

   - 组件 defaultProps 使用 es6 方式
   - 无法使用泛型
   - 返回类型是 ReactElement 和 null（不包含 undefined，string 等）

   尽量不要指定组件的 return 类型（ReactNode 或者 JSX.Element）,而是让 ts 自己去推断。

2. [hooks](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks)

   - 类型会自动推断

   - 初始值是 null 使用联合类型 useState<P | null>(null)

   - useRef<HTMLElement>(null!) or useRef<HTMLElement | _null_>(_null_)

     **尽量不用`!`(Non-null、Non-undefined),而是使用非 null 后者非 undefined 代码块。程序更易读**

   - 自定义 hooks 注意返回值的类型推断

     ```tsx
     export function useLoading() {
       const [isLoading, setState] = React.useState(false)
       const load = (aPromise: Promise<any>) => {
         setState(true)
         return aPromise.finally(() => setState(false))
       }
       return [isLoading, load] as const // infers [boolean, typeof load] instead of (boolean | typeof load)[]
     }
     ```

     - > When declaring a mutable variable or property, TypeScript often _widens_ values to make sure that we can assign things later on without writing an explicit type.
       >
       > **在声明可变变量或属性时，TypeScript 通常会加宽值，以确保以后可以分配内容而无需编写显式类型**

     - 使用 const 断言，将 literal types 、object literals、array literals 变成 readonly

3. [defaultProps 使用方式](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props)

   [fc 和 class 组件使用 defaultProps](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#support-for-defaultprops-in-jsx)

   - **函数式组件尽量使用 es6 默认赋值**

4. [type or interface](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/types_or_interfaces)

   **能使用 interface 就是用 interface**,库中 interface 方便重载

   具体区别请看《重拾 ts》中两个对比

5. prop types

   1. [Basic prop types](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example)

   - 对象

     不使用 object 和{},详细指定具体的属性

   - 函数

     - 指定入参和返回值

     - 事件函数 指定具体的事件类型,使用泛型指定具体的元素

       ```tsx
       //用法1 作为方法
       handleClick(event: React.MouseEvent<HTMLButtonElement>) {
           event.preventDefault();
           alert(event.currentTarget.tagName); // alerts BUTTON
         }
       //用法2 作为props传递 可参考DefinitelyTyped/types/react/index.d.ts DOMAttributes
       interface Props {
         handleClick:React.MouseEventHandler<HTMLButtonElement>
         //or
         handleClick: (event:React.MouseEvent<HTMLButtonElement>)=>void
       }
       ```

       [支持的事件类型 ](https://fettblog.eu/typescript-react/events/#basic-event-handling)

       [`AnimationEvent`](https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent), [`ChangeEvent`](https://developer.mozilla.org/en-US/docs/Web/API/ChangeEvent), [`ClipboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent), [`CompositionEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent), [`DragEvent`](https://developer.mozilla.org/en-US/docs/Web/API/DragEvent), [`FocusEvent`](https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent), [`FormEvent`](https://developer.mozilla.org/en-US/docs/Web/API/FormEvent), [`KeyboardEvent`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent), [`MouseEvent`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent), [`PointerEvent`](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent), [`TouchEvent`](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent), [`TransitionEvent`](https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent), [`WheelEvent`](https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent). As well as [ `SyntheticEvent`](https://reactjs.org/docs/events.html#reference)

   2. [Useful prop types](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/react_prop_type_example)

      - `JSX.Element` or`JSX.Element[]`
      - `React.ReactChildren` or `React.ReactChild[]` or `React.ReactNode`
      - `React.CSSProperties`指定 style 对象

      注意：请查看《重拾 ts》JSX.Element 和 React.ReactNode 的对比

6. `JSX.Element` vs `React.ReactNode` vs `React.ReactElement`

   - `JSX.Element` -> Return value of `React.createElement`
   - `React.ReactNode` -> Return value of a component

   ```tsx
   declare namespce React {
     interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
           type: T;
           props: P;
           key: Key | null;
       }

     type ReactText = string | number;
     type ReactChild = ReactElement | ReactText;
     interface ReactNodeArray extends Array<ReactNode> {}
     type ReactFragment = {} | ReactNodeArray;
     type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
   }

   declare global {
     namespace JSX {
       interface Element extends React.ReactElement<any, any> { }
     }
   }
   ```

   从上面可以看出，ReactElement 和 JSX.Element 基本类似。ReactNode 类型更多

[什么时候使用 JSX.Element vs ReactNode vs ReactElement？](https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement/59840095#59840095)

7. [class component](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/class_components)

8. [getDerivedStateFromProps](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/get_derived_props_from_state)

9. [context](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context)

10. [forwardRef/createRef](forwardRef/createRef)

11. class 组件中 createRef 必须指定具体的元素。

    ```tsx
    class CssThemeProvider extends React.PureComponent<Props> {
      private rootRef = React.createRef<HTMLDivElement>() // like this
      render() {
        return <div ref={this.rootRef}>{this.props.children}</div>
      }
    }
    ```

12. forwardRef

[React Refs with TypeScript](https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315)

11. [Portals](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/portals)

## 参考

- [React + TypeScript 备忘单](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets)

- [TypeScript and React](https://fettblog.eu/typescript-react/)

- [TypeScript 中的 React＆Redux-静态键入指南](https://github.com/piotrwitek/react-redux-typescript-guide#react--redux-in-typescript---static-typing-guide)

- [使用 TypeScript 开发 React 应用程序](https://egghead.io/courses/use-typescript-to-develop-react-applications)

- [使用 Typescript 2.8 的 Ultimate React 组件模式](https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935)

- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

- https://fettblog.eu/typescript-react/further-reading/

- https://github.com/semlinker/awesome-typescript
