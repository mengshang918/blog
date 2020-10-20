---
id: d945d19c0ddc3f3d3fd73e4e1dabfcf1
title: 'Jenkins配合webhook实现push,自动构建并发送邮件'
---

# Jenkins

1. 安装 java8 jdk

   ```shell
   sudo apt-get update
   sudo apt-get install openjdk-8-jdkgit
   ```

2. 安装 jenkins

   ```shell
   sudo apt-get update
   sudo apt-get install jenkins
   ```

   问题：

   1. 在 ubuntu 18.04 上测试发现。使用[官网 linux ununtu 安装方法](https://jenkins.io/zh/doc/book/installing/)安装之后。启动 jenkins 成功，并且开启防火墙以及阿里云安全组也配置了 8080 端口。任然无法通过 ip:8080 访问 jenkins

      解决：卸载重新安装

      - 卸载

        ```shell
        # 服务
        sudo apt-get remove jenkins
        # 安装包，注意这里如果不是ubuntu那就yum
        sudo apt-get remove --auto-remove jenkins
        # 配置和数据
        sudo apt-get purge jenkins
        sudo apt-get purge --auto-remove jenkins
        ```

      - apt-get 直接安装，不配置其他内容

        `sudo apt-get install jenkins`

3. 启动 jenkins

   ```shell
   sudo systemctl start jenkins
   或
   sudo /etc/init.d/jenkins [start|restart|stop]
   ```

   - 当遇到`Job for jenkins.service failed because the control process exited with error code.`报错，运行`systemctl status jenkins.service`查看详细报错内容

4. jenkins 配置修改

   `vim /etc/default/jenkins`

5. jenkins 初始密码文件地址

   `/var/lib/jenkins/secrets/initialAdminPassword`

6. jenkins 插件安装速度慢

   1. jenkins 输入密码之后页面一直加载(被墙)https://www.cnblogs.com/yoyoketang/p/12115432.html

      按照以上方法并未找到文件。

      - 输入 ip:8080/pluginManager/advanced
      - 修改 Update Site 为`http://mirror.xmission.com/jenkins/updates/update-center.json`
      - 点击 submit 之后,重启 jenkins 服务

   2. 更改下载源https://cloud.tencent.com/developer/article/1563303

      - `vim /var/lib/jenkins/updates/default.json`
      - 输入`:`,然后输入`1,$s/http:\/\/updates.jenkins-ci.org\/download/https:\/\/mirrors.tuna.tsinghua.edu.cn\/jenkins/g`
      - 再输入`1,$s/http:\/\/www.google.com/https:\/\/www.baidu.com/g`
      - 保存退出`:wq`
      - 重启 jenkins 服务

7. jenkins 汉化

   1. `http://ip:8080/pluginManager/available`安装 locale 和 Localization: Chinese (Simplified)插件
   2. 重启服务

8. Jenkins 拉取 git 代码失败

   确认是否添加 git 凭据

## 插件

### pipeline

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200327185313318.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_16,color_FFFFFF,t_70#pic_center)

有多种类型，`多分支流水线`和`gitHub Organization`可以读取项目中`Jenkinsfile`执行构建，其余均需手动加入构建

## 例子

   <img src="https://img-blog.csdnimg.cn/2020032718535652.png" alt="w" style="zoom: 33%;" />

1. 使用 github webhooks 触发脚本自动构建

   在 jenkins 上设置好身份验证令牌之后，在 github-》setteing-》webhook 中设置

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200327185511622.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_16,color_FFFFFF,t_70#pic_center)

2.  发送邮件

    - Manage jenkins -> configure system -> jenkins location 设置邮箱，不设置，会出现问题 2 中场景

    - 本文用 qq 邮箱，需开启 qq 邮箱 smtp，详情请 google

    - Manage jenkins -> configure system->**Extended E-mail Notification**设置 smtp 信息
      ![在这里插入图片描述](https://img-blog.csdnimg.cn/2020032718560687.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_16,color_FFFFFF,t_70#pic_center)

           * 注意打开 Allow sending to unregistered users，否则会出现问题1场景
           * 某些情况还需配置邮件通知(使用默认邮件通知)
           * 测试邮箱是否可以发送成功
           * 在项目的配置中选择editable email notification,配置发送邮箱

      ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200327185617825.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21lbmdzaGFuZzUyOQ==,size_16,color_FFFFFF,t_70#pic_center)

## 问题

1. Not sending mail to unregistered user xxx@xx.com because your SCM claimed this was associated with a user ID ‘xxx' which your security realm does not recognize; you may need changes in your SCM plugin

   [Stack Overflow](https://stackoverflow.com/questions/45350740/jenkins-email-plugin-doesnt-send-email-to-user-who-broke-the-build)

2. Failed to send to email（测试邮件是否可以成功发送的时候，一直报错 Can't send command to SMTP host）

   manage jenkins -> configure system ->jenkins location 设置系统管理员邮箱即可
