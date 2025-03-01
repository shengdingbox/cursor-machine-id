# 20250220更新下载地址,github限制大文件，下载地址统一修改
## cursor无限额度，可以无限次使用cursor的自动提示补全和代码生成,无需换账号，一键执行可试用，注册得500额度 ，https://cursoracct.wgets.org/
有问题加我微信吧  shengdingbox
![QQ_1739870692591.png](https://g.wgets.org/https://raw.githubusercontent.com/shengdingbox/cursor-machine-id/refs/heads/master/WX20250220-152303@2x.png)
# 1.程序使用
视频教程 Bilibili https://space.bilibili.com/256233305/lists/4834498?type=season

## 🚀 使用说明
## 下载地址  [https://github.com/shengdingbox/cursor-machine-id/releases/tag/v0.47](https://github.com/shengdingbox/cursor-machine-id/releases/tag/v0.47)
![alt text](https://g.wgets.org/https://raw.githubusercontent.com/shengdingbox/cursor-machine-id/refs/heads/master/download.png)

### Windows

```
右击 CursorPro.exe，使用管理员权限运行
```

![QQ_1739870692591.png](https://g.wgets.org/https://raw.githubusercontent.com/shengdingbox/cursor-machine-id/refs/heads/master/logo.png)


### Mac

>  mac用户你的CPU是ARM也就是苹果的CPU的请使用ARM版本，Intel的请使用X86-64版本

![QQ_1739870692591.png](https://g.wgets.org/https://raw.githubusercontent.com/shengdingbox/cursor-machine-id/refs/heads/master/kaifzhe.png)
![QQ_1739870692591.png](https://g.wgets.org/https://raw.githubusercontent.com/shengdingbox/cursor-machine-id/refs/heads/master/shezhi.png)
![QQ_1739870692591.png](https://g.wgets.org/https://raw.githubusercontent.com/shengdingbox/cursor-machine-id/refs/heads/master/anquan.png)
![QQ_1739870692591.png](https://g.wgets.org/https://raw.githubusercontent.com/shengdingbox/cursor-machine-id/refs/heads/master/open.png)

### linux
```
sudo ./CursorPro

或者使用root用户执行脚本
```

1. **首次使用**
   - 运行程序会自动创建 .env 文件
   - 按照提示配置邮箱信息
   - 确保所有配置正确填写
2. **注册流程**
   - 获取UA，并且随机生成浏览器指纹
   - 程序会自动生成随机账号
   - 自动填写注册信息
   - 自动处理验证码
   - 完成注册后会自动替换旧账号
3. **ID修改**
   - 自动备份原有配置
   - 生成新的机器码
   - 更新系统配置
   - 禁用自动更新
## 🚀 最新更新 v6.0.0
- 新增支持 Cursor v0.45.x 版本
- 优化界面显示和用户体验
- **优化整体注册速度**
- **新增自动获取UA**
- **新增浏览器随机指纹**
- **新增自动清理验证码邮件功能**
- **新增自动登录重试获取令牌功能**
- 改进邮箱验证码获取逻辑
- 增强系统稳定性和兼容性
- 修复已知问题和bug

## 📋 功能特性
1. **自动注册功能**
   - 自动生成随机账号信息
   - 自定义邮箱域名
   - 浏览器随机指纹
   - 自动获取UA
   - 自动处理人机验证
   - 自动获取验证码
   - 自动清理验证码邮件
   - 自动替换旧账户
   
2. **ID修改功能**
   - 支持自动修改机器码
   - 自动备份原有配置
   - 支持禁用自动更新
   - 兼容多系统平台

3. **邮箱支持**
   - 支持 IMAP 邮箱配置
   - 支持临时邮箱(tempmail.plus)
   - 支持自定义域名邮箱
   - 多种邮箱验证方式

## 💻 系统要求
- Windows/macOS/Linux 系统
- 已安装 Google Chrome 浏览器
- 稳定的网络连接

## ⚙️ 配置说明
1. **环境配置**
   - 确保已安装 Chrome 浏览器
   - 确保系统时间正确
   - 确保网络连接稳定

2. **.env 文件配置(不使用自动注册可以不用配置)**
   
   ```ini
   # 代理 一般不需要，如果需要请使用软件的代理
   # BROWSER_PROXY='http://127.0.0.1:2080' 
   
   # 无头模式
   BROWSER_HEADLESS='False' # True False
   
   ```
## ❗ 常见问题
1. **验证码获取失败**
   - 检查邮箱配置是否正确
   - 确认网络连接是否稳定
   - 尝试更换QQ邮箱或其他稳定的邮箱
2. **浏览器相关问题**
   - 确保 Chrome 浏览器已正确安装
   - 检查浏览器版本是否兼容
   - 尝试更新浏览器版本
   - 有谷歌浏览器还报错可以尝试重装谷歌浏览器
3. **注册失败问题**
   - 检查网络连接
   - 确认配置文件正确
   - 查看错误提示信息
4. **人机验证过不去**
   - 检查网络环境手动注册是否能过去
   - 更换网络环境
   - 开启或关闭代理以及更换节点
5. **注册受到限制**
   - 检查网络环境手动注册是否能过去
   - 更换网络环境
   - 开启或关闭代理以及更换节点


## ✅新功能已经解决的问题

1. **随机浏览器指纹** （解决`注册受到限制`和`身份认证被阻止`）
   ![](./img/0b5eeafc3fa8feb57fe04516abd52459.png)

   ![](./img/7dc6c2dd748d307e6885bb0fdccbec51.png)

2. **自定义UA** （解决`人机认证过不去问题`）
   ![](./img/3ad2bf842a3758a2da24126398bbdc76.jpg)

3. **自动登录重试获取令牌**（解决`自动注册令牌获取失败，导致自动替换旧账户失败`）
   ![](./img/922a42c26da7f6c5faa5b246f87c2526.png)


## 🔒 安全提示
- 请勿将.env配置文件分享给他人
- 妥善保管注册的账号信息

## 🆘 获取帮助
- 遇到问题请提交issues
- 提供详细的错误信息和截图

## 📝 免责声明
1. 本工具仅供学习和研究使用
2. 请勿用于任何商业用途
3. 使用本工具所产生的一切后果由使用者自行承担
4. 如有侵权请联系我们删除

## 🎯 更新计划
- [ ] 暂无，你有什么好的建议吗？


## 🎁 打赏与交流
> 如果觉得工具好用，可以点个star！


## ⭐ 特别说明
1. 本工具完全免费，谨防受骗
2. 定期关注更新，及时获取新功能
3. 欢迎加群交流使用心得
4. 感谢大家的支持和反馈
