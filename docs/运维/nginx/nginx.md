---
id: c135a55ada5c373bcd601d340d2d1943
title: nginx
---

# mac 安装 nignx 教程

> 本文档只要讲解如何在 mac 上搭建 nginx，并使用 nginx-full 搭载第三方模块 http-concat-master，以及 nginx 下配置 ssl 使 nginx 可以访问 https

## 常见问题解决

1. nginx 启动出现端口冲突

   - 请确认是否已经成功启动了 nginx
   - 请 google

2. server.crt can not found

   - 请确认是否正确配置了 ssl

3. 之前已经使用 brew 安装过 nginx，使用`ublink`和`link`切换版本

   - `brew unlink nginx`

   - nginx-full 安装成功后

     `brew link nginx-full`切换到 nginx-full

## 安装步骤

1. 先安装 homebrew，一个 mac 里的软件包管理工具。

   - 安装命令：/usr/bin/ruby -e "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   - 如果提示没有权限，则依据提示输入 sudo xcodebuild -license ，然后查看授权许可说明，然后键入 agree ，然后授权成功，此时再重新执行上面的安装命令即可。

2. 下载 nginx-http-concat 模块。

   - 下载地址：https://github.com/alibaba/nginx-http-concat。下载zip包，然后解压，下一步会用到

   - 修改`ngx_http_concat_module.c`文件

     ```js
     static ngx_str_t  ngx_http_concat_default_types[] = {
         ngx_string("application/x-javascript"),
         ngx_string("text/css"),
         ngx_null_string
     };
     //将"application/x-javascript"改成"application/javascript"
     //否则会造成合并的js文件无法访问
     ```

3. 安装 nginx。
   执行命令：

   - `brew search nginx`

   - `brew tap denji/nginx`

   - `brew edit nginx-full`

   - 此时进入编辑包的安装脚本，按 i 进入插入模式，敲键盘移动光标到 nginx 的自动编译参数部分，在任意一行里另外新增一行 --add-module=/nginx-http-concat 的 src 路径

     ```
     args = %W[
       --prefix=#{prefix}
       --with-http_ssl_module
       --with-pcre
       --with-ipv6
       --sbin-path=#{bin}/nginx
       --with-cc-opt=#{cc_opt}
       --with-ld-opt=#{ld_opt}
       --conf-path=#{etc}/nginx/nginx.conf
       --pid-path=#{var}/run/nginx.pid
       --lock-path=#{var}/run/nginx.lock
       --http-client-body-temp-path=#{var}/run/nginx/client_body_temp
       --http-proxy-temp-path=#{var}/run/nginx/proxy_temp
       --http-fastcgi-temp-path=#{var}/run/nginx/fastcgi_temp
       --http-uwsgi-temp-path=#{var}/run/nginx/uwsgi_temp
       --http-scgi-temp-path=#{var}/run/nginx/scgi_temp
       --http-log-path=#{var}/log/nginx/access.log
       --error-log-path=#{var}/log/nginx/error.log
       --add-module=/nginx-http-concat的src路径
     ]
     ```

   - 此时 nginx 安装成功插入完后，按 esc/shift+q 退出插入模式，然后输入 :wq 然后回车，文件保存成功。

   - 再执行安装命令`brew install nginx-full`

4. 配置 nginx 的配置文件
   nginx 的配置文件 nginx.conf 默认所在路径：`/usr/local/etc/nginx`。

   需要修改的两点

   - 项目工程所在路径；

   - 在配置文件顶部增加这么一行 `user jxw staff`; 其中第二个值需要修改成自己的账户名

   - 配置 ssl 使 nginx 可以访问 https

   1. openssl 生成自签名证书

      创建服务器私钥，命令行输入

      `openssl genrsa -out server.key 1024`

   2. 根据私钥生成证书申请,创建签名请求的证书（CSR）

      `openssl req -new -key server.key -out server.csr`

      这时会出现下面选项,至少选择一个选项输入一些信息，才可以生成证书成功

      ps：（就是选一个随便填，填完一直摁 enter 键至结束）

      ```
      Country Name (2 letter code) []: ch
      State or Province Name (full name) []:
      Locality Name (eg, city) []:
      Organization Name (eg, company) []:
      Organizational Unit Name (eg, section) []:
      Common Name (eg, fully qualified host name) []:
      Email Address []:
      ```

   3. 在加载 SSL 支持的 Nginx 并使用上述私钥时除去必须的口令（依次执行下面命令）

      - `cp server.key server.key.org`
      - openssl rsa -in server.key.org -out server.key

   4. 标记证书使用上述私钥和 CSR

      `openssl x509 -req -in server.csr -out server.crt -signkey server.key -days 3650`

5. 给 nginx 配置 root 权限
   nginx 的启动程序默认所在路径：`/usr/local/Cellar/nginx-full/1.14.0/bin`

   - 命令窗口进入`/usr/local/Cellar/nginx-full/1.14.0/bin`路径，然后依次执行如下命令
   - `sudo chown root nginx`
   - `sudo chmod +s nginx`

6. 常用命令
   - 启动：nginx （启动成功后，可以在浏览器访问http://127.0.0.1/看到欢迎界面）
   - 停止：nginx -s stop
   - 重启：nginx -s reload
   - 查看 nginx 是否启动：ps -ef|grep nginx （如果存在 3 条记录，则代表已经启动）
