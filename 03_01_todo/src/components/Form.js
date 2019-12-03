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
      <form>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button>追加</button>
      </form>
    )
  }

  handleChange = e => {
    this.setState({ input: e.currentTarget.value })
  }

}


export default Form;