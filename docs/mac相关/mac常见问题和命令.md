---
id: f9043ab4f4bd67e13820f42a3e175b56
title: mac常见问题和命令
---

# mac 下一些常用问题和命令

1. curl ip.cn 查看当前 ip 地址信息
   proxy zsh 下打开代理，只对当前窗口有效，之前需 source .zshrc
   unproxy zsh 下关闭代理

2. brew list
   ​ install
   uninstall

3. 查看端口冲突

   - lsof -i:端口号
   - kill 端口号

4. mac 上 80 端口冲突

   - 使用 sudo

5. 删除一个文件夹（不论文件夹是否为空）

   - `rm -rf 文件夹`

6. 打开 Devtools

   - Command+Opiton+I

7. 查看隐藏文件

   - command+shift+.

8. 根目录下修改.zshrc

   配置结束 source .zshrc

9. zsh 代理

   根目录下修改.zshrc

   查看翻墙的高级设置本地 socks5 监听地址 && 监听端口

   配置结束 source .zshrc

10. webpack 默认全局路径

    ```
    /usr/local/lib/node_modules/
    ```

11. 确定 npm 安装的全局路径

    ```
    npm root -g
    ```

12. '~'和'/'区别

    /是根目录，~是用户的家目录

13. zsh 下 git 命令 abort 或者超时、给 git 设置代理

- [Stack Overflow](https://stackoverflow.com/questions/783811/getting-git-to-work-with-a-proxy-server-fails-with-request-timed-out)

- [git 设置代理，提高速度](https://www.baidu.com/link?url=1pTxDhHKjWV9PtsKS6ruQXL9CV-0JYLskzbDZgLpuBH_JoHLRmC129lfVmW7AvFEnGbQQrLBHnqmz9Q95jc9HY1ElVrMa34UF4bnua_s78q&wd=&eqid=896b8b99000b47aa000000065e7d7c35)

- zsh 设置 proxy 和 unproxy 函数（需提前科学 xx）

  ```shell
  function proxy() {
    export https_proxy=http://127.0.0.1:端口 http_proxy=http://127.0.0.1:端口 all_proxy=socks5://127.0.0.1:端口
    git config --global https.proxy socks5://127.0.0.1:端口
    git config --global http.proxy socks5://127.0.0.1:端口
    echo "HTTP Proxy on"
  }

  # where noproxy
  function noproxy() {
    unset http_proxy
    unset https_proxy
    unset all_proxy
    git config --global --unset https.proxy
    git config --global --unset http.proxy
    echo "HTTP Proxy off"
  }

  alias proxy='proxy'
  alias unproxy='noproxy'
  ```
