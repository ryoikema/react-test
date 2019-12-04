import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ""
    };
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button>追加</button>
      </form>
    )
  }
  //inputの入力内容
  handleChange = e => {
    this.setState({ input: e.currentTarget.value })
  };
  //送信したらinputの内容を空にする
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.input) return
    this.props.onSubmit(this.state.input)
    this.setState({ input: "" });
  };
}


export default Form;