import React from 'react';

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     value: ''
        // }
        // 需要绑定 this
        // this.handleChange = this.handleChange.bind(this)
    }
    // handleChange(event) {
    //     this.setState({
    //         value: event.target.value
    //     })
    // }
    handleSubmit(event) {
        this.props.onAddComment(this.textInput.value)
        event.preventDefault()
    }
    render() {
        return (
            <form className="p-5" onSubmit={(event) => { this.handleSubmit(event) }}>
                <div className="formm-group">
                    <label>留言内容</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="请输入内容"
                        // onChange={this.handleChange}
                        // onChange={(event) => { this.handleChange(event) }}
                        // value={this.state.value}
                        ref={(textInput) => {this.textInput = textInput}}
                    />
                </div>
                <button type="submit" className="btn btn-primary">留言</button>
                <p>已有{ this.props.commentsLength }条评论</p>
            </form>
        )
    }
}

export default CommentBox