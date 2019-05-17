# 考研每周目标表
## 第一版 2019.5.12
### 功能
- 首页展示四个人的任务表（科目-内容）
- 可以点击按钮新增一个任务表

### 技术
- bootstrap
- node.js
- express
- art-template
- mongodb(mongoose)
- jquery
- 云主机部署（forever）
### 下一版将增加的功能
- 删除、修改任务表
- 任务表折叠
- 展现历史数据
- 任务完成打钩，根据完成情况**显示进度条**

## 第二版 2019.5.17

### 技术难点
- 如何实现点击按钮增加输入框：`obj.insertAdjacentHTML()`
- 首页如何展示数据：后台从数据库拿数据，渲染到网页上，发给用户
- 如何获取勾选框数目：

```js
var parent = checkbox.parentNode.parentNode.parentNode.parentNode.parentNode
        var now = $("input[type='checkbox']:checked", parent).length
        var all = $("input[type='checkbox']", parent).length
```

- 如何实现进度条同步更新：`$(parent).find("#pro").attr("style", "width:" + 100 * now / all + "%;")`  
- 如何实现折叠：bootstrap `<div class="panel-heading"><div class="panel-body">`

### 增加的功能
- 首页点击标题可以折叠
- 新增每科计划时，可以自由选择任务数（0-3）
- 首页不再显示冗余文本，更简洁
- 完成任务打钩，进度条同步更新
- 优化了数据库，现在数据库只存储name和html两个项目

### 待开发功能
- 将勾选框、进度条数据提交到服务器，而不是本地
- 优化界面、js代码
- 设计排行榜功能
- 增加网页说明页面
