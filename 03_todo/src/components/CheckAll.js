import React from 'react';


class CheckAll extends React.Component {

  render() {
    const { allCompleted } = this.props


    return (
      <div>
        <label>
          <input type="checkbox" checked={allCompleted} onChange={this.handleChange} />
          全て{allCompleted ? "未完了" : "完了"}にする
        </label>
      </div>
    );
  }

  handleChange = e => {
    const { onChange, allCompleted } = this.props
    onChange(!allCompleted)
  }

}

export default CheckAll;

