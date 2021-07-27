# 基于 Electron 的 Markdown 云笔记客户端


## 安装 react + ts

```js
npx create-react-app my-app --template typescript
```
## React 哲学

- 将设计好的UI划分为组件层级
- 创建应用的静态版本

### 划分 UI 组件层级

#### 左侧栏

- 搜索框：fileSearch
- 文件列表：fileList
- 新建和导入按钮：button

#### 右侧界面

- 分页栏：tabList
- 编辑器：editor

## 配置开发环境

### 安装 electron 和 react
npx create-react-app cloud-doc
npm install electron --save-dev

### concurrently
并行运行命令
### wait-on
命令等待
### cross-env
解决跨平台设置环境变量的问题

## 选择样式库

Bootstrap 自动化栅格布局

## react hooks

### useEffect

- 第一个参数：副效应函数
- 第二个参数：依赖参数
- 第一个参数的返回值：清除效应

如果有多个副效应，应该拆分来写，而不是合并在一起。

useEffect hook，可以看作是 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。

函数组件每次重新渲染都会执行 useEffect , 为了减少副作用的运行次数，可以利用依赖参数，只有在依赖参数发生变化的时候，才执行副效应函数。

函数式组件保存了每一次执行时的状态。
### useRef
