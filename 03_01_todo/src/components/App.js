import React from 'react';
import Form from './Form';
import Todo from './Todo';

let currentId = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }


  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />

        <label>
          <input type="checkbox" />
          全て完了にする
          </label>

        <select>
          <option>全て</option>
          <option>未完了</option>
          <option>完了済み</option>
        </select>

        <ul>
          {this.state.todos.map(({ id, text }) =>
            <li key={id}>
              <Todo text={text} />
            </li>
          )}
        </ul>

        <button>完了済みを全て削除</button>

      </div>
    );
  }

  //Todoを作成
  handleSubmit = text => {
    const newTodo = {
      id: currentId,
      text,
    }
    const newTodos = [...this.state.todos, newTodo]
    this.setState({ todos: newTodos })
    currentId++;
  }
}

export default App;