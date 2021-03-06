---
id: 3044cf73a36f83e5344247f79ffb719e
title: Tapable
---

1. hooks 均继承自 hook(lib/Hook.js)

2. Tap tapAsync tappromise 会把 handler 丢入到数组中。

3. call callAsync callpromise 会依次执行数组中的 handler

   ```js
   //以SyncHook为例 精简版
   lass SyncHookCodeFactory extends HookCodeFactory {
   	content({ onError, onDone, rethrowIfPossible }) {
   		return this.callTapsSeries({
   			onError: (i, err) => onError(err),
   			onDone,
   			rethrowIfPossible
   		});
   	}
   }

   const factory = new SyncHookCodeFactory();
   const COMPILE = function(options) {
   	factory.setup(this, options);
   	return factory.create(options);
   };
   ```

   1. `call` 、`callAsync`、`callpromise`最终会调用每个 hook 的`COMPILE`方法

   2. COMPILE 方法会实例化继承自 HookCodeFactory 的相应类并调用 HookCodeFactory 的 create 方法

      - `create`方法用 new Function('a','b','return a+b')方式去创建每个 handler 的执行函数字符串

        问：为啥用 new Function 去创建函数？

        答：函数入参和函数体会根据入参的长度而动态生成，这样你可以根据实际情况来控制传入参数的个数，并且函数也只处理这几个入参。
