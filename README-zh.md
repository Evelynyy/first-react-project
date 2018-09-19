Step One: 如何创建一个 react 项目？
    使用 'create-react-app'
    1、全局安装 react 环境： npm install create-react-app -g
    2、创建项目：create-react-app project-name
    3、运行项目：npm start


JSX 语法
* JavaScript 的语法扩展
* 可以使用 {} 内嵌任何 JavaScript 表达式
* JSX 属性
注意： 给元素添加类名的时候，需使用 className 代替 html 语法中的 class; for要用 htmlFor 来代替
    自定义组件首字母应当大写

JSX 是一种语法糖 - React.createElement()，返回 ReactElement 对象

Props/State/Forms
Props：在一个组件中，属性是不可变的；props是由上到下单向传递的
State：this.setState() 是更新 state 的唯一方法
生命周期：
    * 组件初始化 componentDidMount
    * 组件更新 componentDidUpdate
    * 组件卸载 componentWillUnmount

React 开发思想以及和其他思想的异同
    * 状态提升（lifting state up）
    * 自上而下的数据流（top-down data flow）
    * 和双向绑定的区别

Context
    为了共享那些对于组件来说全局的数据；不要仅仅为了避免在几个层级下的组件传递 props 而使用 context
    
    使用 Context：
        创建 Context 对象 -> 把想要用 Context 的数据的节点使用 <XxxContext.Provider></XxxContext.Provider> 进行包裹，并传入对应的数据 -> 在使用这个数据的组件中使用 <XxxContext.Consumer></XxxContext.Consumer> 进行包裹，会返回一个函数表达式，函数表达式带的参数就是要使用的值