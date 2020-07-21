本文为使用puppeteer进行自动化测试的实践总结，持续更新。

## puppeteer用途

> - 网页截图或者生成 PDF
>
> - 爬取 SPA 或 SSR 网站
> - UI 自动化测试，模拟表单提交，键盘输入，点击等行为
> - 捕获网站的时间线，帮助诊断性能问题
> - 创建一个最新的自动化测试环境，使用最新的 js 和最新的 Chrome 浏览器运行测试用例
> - 测试 Chrome 扩展程序

## 常见用法

1. 非无头模式、全屏

   ```js
   puppeteer.launch({
       headless:false, //非无头模式
       defaultViewport:null, //页面窗口随浏览器大小展示 或者 defaultViewport:{width:0,height:0}
       args: [
           '--start-fullscreen' //浏览器全屏
       ]
   })
   ```

2. 等待指定的选择器匹配的元素出现在页面中

   ```js
   page.waitForSelector(selector[, options])
   ```

3. 点击某个元素

   ```js
   page.click(selector)
   ```

4. 点击某个表单元素并输入

   ```js
   //将options设为{delay:20}，输入时会延迟20ms,更有feel哦
   page.type(selector, text[, options])
   ```

5. 获取页面元素

   ```js
   page.$(selector) //类似document.querySelector
   page.$$(selector) //类似document.querySelectorAll
   ```

6. 打开某个页面

   ```js
   page.goto(url[, options])
   ```

7. 当点击某个会引起跳转跳转的元素时

   ```js
   await Promise.all([
           page.waitForNavigation(),
           page.click(selector)
       ])
   ```

8. 监听浏览器打开新的页面

   ```js
   browser.on('targetcreated',async target =>{
           const page = await target.page()
       })
   ```

9. 关闭浏览器

   ```js
   browser.close()
   ```

10. 执行某段js代码

    ```js
    page.evaluate(()=>{
        //js代码
    })
    ```

11. 请求拦截

    * page.on('request',request=>{}) 请求触发

    * page.on('requestfailed',request=>{}) 请求失败触发

    * page.on('requestfinished',request=>{}) 请求完成触发

    * page.on('response',response=>{}) 请求返回response时触发

    * [requset对象](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v1.20.0&show=api-class-request)

      * requset.respond() 完成请求后会返回一个响应
      * request.continue() 继续请求
      * response.abort() 中断请求

      以上都需要开启`page.setRequestInterception(true)`来开启拦截

    * [response对象](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v1.20.0&show=api-class-response)

## 参考

1. [git example](https://github.com/transitive-bullshit/awesome-puppeteer)
2. [结合项目来谈谈 Puppeteer](https://blog.csdn.net/zdplife/article/details/98112895#commentBox)
3. [puppeteer中文文档](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v1.20.0&show=api-overview)

4. [puppeteer英文文档](https://pptr.dev/)

5. [在线测试](https://try-puppeteer.appspot.com/)

6. [puppeteer官网](https://github.com/GoogleChrome/puppeteer)

