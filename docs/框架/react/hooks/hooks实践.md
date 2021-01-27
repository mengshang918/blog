---
id: 9991378aff737eabebd91bfda98cdb30
title: hooks实践
---

性能优化工具：https://react.docschina.org/docs/optimizing-performance.html

twitter - dan reactjs 核心贡献者博客

https://codesandbox.io/多练

reddit.com(国外知乎) react 频道

1. useContext

   Context API 的更新特点，**它是可以穿透`React.memo`或者`shouldComponentUpdate`的比对的，也就是说，一旦 Context 的 Value 变动，所有依赖该 Context 的组件会全部 forceUpdate**

   因为上述原因，所以使用 context 时需要大部分组件都使用的时候(配合 useReducer 传递 dispatch)。或者拆分多个 context。避免影响

   所以直接使用 provider 传递 state 和 dispatch 是有性能问题的。

   如何避免没有使用 context 的组件重新渲染呐？https://zhuanlan.zhihu.com/p/50336226

   将 provider 抽出来单独写一个（hoc）组件。使用 props.children 传递。这样父组件不更新的情况下。props.children 也不会更新（因为是父组件传递过来的，不会重新使用 react.createElement 创建新的 children）

   抽离成（hoc）组件之后还要注意，provider 的父组件更改会改变 provider 的 value 值。所以需要保证 value 不能每次随着父组件的更新导致重新生成新的对象。

   如何避免？https://zhuanlan.zhihu.com/p/74229420?utm_source=wechat_session

   class component 将 value 放到 state 中。function component 使用 useMemo 缓存 value 对象

2. useReducer 代替多个 useState

   当使用 usecontext+useReducer 代替 redux 时，provider 的 value 变化。所有子组件都会变化

3. useMemo 缓存组件，相当于 shouldComponentUpdate

   1. 对所有的组件进行 useMemo

4. 不可以在函数组件内直接申明普通常量或普通函数

   Function Component 每次渲染都会重新执行，常量推荐放到函数外层或使用`useRef`避免性能问题，函数推荐使用 `useCallback` 申明

5. Capture value(快照)

   - **每次 Render 的内容都会形成一个快照并保留下来，因此当状态变更而 Rerender 时，就形成了 N 个 Render 状态，而每个 Render 状态都拥有自己固定不变的 Props 与 State**
   - 快照可以让你每次操作都获取的是当前的 prop 和 state（避免当 props 和 state 多次改变。最后操作无效的情况）
   - 需要在 settimeout 几秒后，获取三秒之后 prop 和 state，而不是使用之前的 prop 和 state，可以使用 useRef()

   https://juejin.im/entry/5c9e0507f265da308939edb0

6. 无法通过 useRef.current 来重新渲染

7. shouleupdate vs purecomponent vs React.memo

   - 函数式组件无法使用 shouldupdate，react.memo 在函数式组件中使用
   - react.memo 仅浅比较 props，purecomponent 浅比较 props 和 state（相当于 component 自带一个 shouldUpdate 生命周期）

8. class component，cloneElement 传递 prop 给 function component，props 没有正确的赋值给 function component.在 devtools 可以看到已经赋值。但是赋值给 fuc com 的事件却无法触发

   ```jsx
   //clone的子组件
   const DeleteButton = ({ style }) => {
     return (
       <div className="customcode-delete--container" style={style}>
         <div className="customcode-deletebutton"></div>
       </div>
     )
   }
   ```

   function component 使用了解构赋值，所以获取不到（具体原因待查看源码）

   ```jsx
   //正确
   const DeleteButton = (props) => {
     return (
       <div className="customcode-delete--container" {...props}>
         <div className="customcode-deletebutton"></div>
       </div>
     )
   }
   ```
