import React from 'react';

class CheckAll extends React.Component {
  render() {
    const { allCompleted } = this.props

    //全てのTodoが完了済みならtreu,完了済みじゃなければfalse
    return (
      <label>
        <input type="checkbox" checked={allCompleted} onChange={this.handleChange} />
        全て{allCompleted ? "未完了" : "完了"}にする
      </label>
    )
  }

  handleChange = () => {
    const { onChange, allCompleted } = this.props
    onChange(!allCompleted)
  }
}

export default CheckAll;