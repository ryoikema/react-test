import React, { Component } from 'react';
//実際に入力された値はe.target.valueで取り出せる
//setState()でstateを保存する


class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: ''
    };
  }

  //テキストフィールドに入力された値を保存する
  onInput = e => {
    this.setState({
      name: e.target.value
    })
  }

  //登録ボタンをクリックした際の処理
  addTodo = () => {
    const { todos, name } = this.state
    this.setState({
      todos: [...todos, name]
    })
  }

  render() {
    const { todos } = this.state;

    return (<div>
      <input type="text" onInput={this.onInput} />
      <button onClick={this.addTodo}>登録</button>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>);
  }
}

export default Todo;