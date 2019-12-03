import React from 'react';

class Todo extends React.Component {
  render() {
    const { text } = this.props
    return (
      <div>
        <label>
          <input type="checkbox" />
          {text}
        </label>
        <button>編集</button>
        <button>削除</button>
      </div>
    )
  }
}

export default Todo;