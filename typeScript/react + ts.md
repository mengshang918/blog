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
   * 返回类型是ReactElement和null（不包含undefined，string等）

   尽量不要指定组件的return类型（ReactNode或者JSX.Element）,而是让ts自己去推断。

2. [hooks](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks)

   * 类型会自动推断

   * 初始值是null使用联合类型useState<P | null>(null)

   * useRef<HTMLElement>(null!) or useRef<HTMLElement | *null*>(*null*)

     **尽量不用`!`(Non-null、Non-undefined),而是使用非null后者非undefined代码块。程序更易读**

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
       > **在声明可变变量或属性时，TypeScript通常会加宽值，以确保以后可以分配内容而无需编写显式类型**

     * 使用const断言，将literal types 、object literals、array literals变成readonly

3. [defaultProps使用方式](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props)

   [fc和class组件使用defaultProps](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#support-for-defaultprops-in-jsx)

   * **函数式组件尽量使用es6 默认赋值**

4. [type or interface](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/types_or_interfaces)

    **能使用interface就是用interface**,库中interface方便重载

   具体区别请看《重拾ts》中两个对比

5. prop types

   1. [Basic prop types](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example)

     * 对象

       不使用object和{},详细指定具体的属性

     * 函数

       * 指定入参和返回值

       * 事件函数 指定具体的事件类型,使用泛型指定具体的元素

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

      * `JSX.Element` or` JSX.Element[]`
      * `React.ReactChildren` or `React.ReactChild[]` or `React.ReactNode`
      * `React.CSSProperties`指定style对象

      注意：请查看《重拾ts》JSX.Element和React.ReactNode的对比

6.  `JSX.Element` vs `React.ReactNode` vs `React.ReactElement`

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

      从上面可以看出，ReactElement和JSX.Element基本类似。ReactNode类型更多

   [什么时候使用JSX.Element vs ReactNode vs ReactElement？](https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement/59840095#59840095)

7. [class component](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/class_components)

8. [getDerivedStateFromProps](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/get_derived_props_from_state)

9. [context](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context)

10. [forwardRef/createRef](forwardRef/createRef)

   1. class组件中createRef必须指定具体的元素。

      ```tsx
      class CssThemeProvider extends React.PureComponent<Props> {
        private rootRef = React.createRef<HTMLDivElement>(); // like this
        render() {
          return <div ref={this.rootRef}>{this.props.children}</div>;
        }
      }
      ```

   2. forwardRef

   [React Refs with TypeScript](https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315)

11. [Portals](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/portals)

## 参考

- [React + TypeScript备忘单](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets)

- [TypeScript and React](https://fettblog.eu/typescript-react/)

- [TypeScript中的React＆Redux-静态键入指南](https://github.com/piotrwitek/react-redux-typescript-guide#react--redux-in-typescript---static-typing-guide)

- [使用TypeScript开发React应用程序](https://egghead.io/courses/use-typescript-to-develop-react-applications)

- [使用Typescript 2.8的Ultimate React组件模式](https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935)

- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

- https://fettblog.eu/typescript-react/further-reading/

- https://github.com/semlinker/awesome-typescript

  

