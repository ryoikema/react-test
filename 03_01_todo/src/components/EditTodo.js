import React from 'react';

class EditTodo extends React.Component {
  //Todoの新しい名前をこのstate内で管理する
  constructor(props) {
    super(props)

    this.state = {
      text: props.text //渡されるテキスト
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClickCancel}>キャンンセル</button>
      </div>
    )
  }

  handleChange = e => {
    this.setState({ text: e.currentTarget.value })
  }

  handleClickCancel = () => {
    const { onCancel, id } = this.props
    onCancel(id, 'editing', false)
  }

}

export default EditTodo;