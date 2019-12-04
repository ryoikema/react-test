import React from 'react';
import Form from './Form';
import Todo from './Todo';
import CheckAll from './CheckAll';
import Filter from './Filter';

let currentId = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      todos: []
    }
  }


  render() {
    const { todos, filter } = this.state
    //filterされたTodosを作る completedの状態とfilterの状態がなにかによって切り分ける
    const filteredTodos = todos.filter(({ completed }) => {
      switch (filter) {
        case 'all':
          return true

        case 'uncompleted':
          return !completed

        case 'completed':
          return completed

        default:
          return true

      }
    })

    return (
      <div>
        <Form onSubmit={this.handleSubmit} />

        <CheckAll allCompleted={todos.length > 0 && todos.every(({ completed }) => completed)}
          onChange={this.handleChangeAllCompleted}
        />

        <Filter filter={filter} onChange={this.handleChangeFilter} />

        <ul>
          {filteredTodos.map(({ id, text, completed }) =>
            <li key={id}>
              <Todo
                id={id}
                text={text}
                completed={completed}
                onChange={this.handleChangeCompleted}
                onDelete={this.handleClickDelete}
              />
            </li>
          )}
        </ul>

        <button onClick={this.handleClickDeleteCompleted}>完了済みを全て削除</button>

      </div>
    );
  }

  //Todoを作成
  handleSubmit = text => {
    const newTodo = {
      id: currentId,
      text,
      completed: false,
    }
    const newTodos = [...this.state.todos, newTodo]
    this.setState({ todos: newTodos })
    currentId++;
  }

  handleChangeAllCompleted = completed => {
    const newTodos = this.state.todos.map(todo => ({

      ...todo,
      completed

    }))
    this.setState({ todos: newTodos })
  }

  //全て、未完了、完了済み
  handleChangeFilter = filter => {
    this.setState({ filter })
  }

  //Todoの完了状態を変更できるようにする　チェックボックス
  handleChangeCompleted = (id, completed) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        }
      }
      return todo
    })
    this.setState({ todos: newTodos })
  }

  //個別Todoの削除機能 渡したidのTodoだけ除外した新たな配列が作られる
  handleClickDelete = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos: newTodos });

  }


  //completedが未完了のものだけが newTodosに入る
  handleClickDeleteCompleted = () => {
    const newTodos = this.state.todos.filter(({ completed }) => !completed)
    this.setState({ todos: newTodos })
  }
}


export default App;