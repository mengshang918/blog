1. hooks均继承自hook(lib/Hook.js)

2. Tap tapAsync tappromise会把handler丢入到数组中。

3. call callAsync callpromise会依次执行数组中的handler

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

   1. `call` 、`callAsync`、` callpromise`最终会调用每个hook的`COMPILE`方法

   2. COMPILE方法会实例化继承自HookCodeFactory的相应类并调用HookCodeFactory的create方法

      * `create`方法用new Function('a','b','return a+b')方式去创建每个handler的执行函数字符串

        问：为啥用new Function去创建函数？

        答：函数入参和函数体会根据入参的长度而动态生成，这样你可以根据实际情况来控制传入参数的个数，并且函数也只处理这几个入参。

      

      

      

      