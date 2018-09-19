import React from 'react'

class Welcome extends React.Component {
    render() {
        // 1、 const todoList = ['Learn React', 'Learn Redux']
        // 2、const isLogin = false
        const test = <h1>Hello React</h1>
        console.log(test);
        return React.createElement (
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Hello React"
            )
            // class -> className="demo"; for -> htmlFor
            // <div>
                /* <h1>hello world</h1> */
                /* 1、 <ul>
                    {
                        todoList.map(item => 
                            <li>{ item }</li>
                        )
                    }
                </ul> */
                /* 2、 { isLogin ? <p>你已经登录</p> : <p>请登录</p> } */
            // </div>

        )
    }
}

export default Welcome