import React from 'react';
import Form from './Form';
import Todo from './Todo';
import CheckAll from './CheckAll';
import Filter from './Filter';

let currentId = 0;

//class component
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: 'all',
      todos: []
    }
  }

  render() {
    const { todos, filter } = this.state;
    //filterとcompletedの状態によって、新しいTodoを作る
    const filteredTodos = todos.filter(({ completed }) => {
      switch (filter) {
        case 'all':
          return true

        case 'uncompleted':
          return !completed;

        case 'completed':
          return completed

        default:
          return true
      }
    })

    return (
      <div>
        <Form onSubmit={this.handleSubmit} />
        <CheckAll
          allCompleted={todos.length > 0 && todos.every(({ completed }) => completed)}
          onChange={this.handleChangeAllCompleted}
        />

        <Filter filter={filter} onChange={this.handleChangeFilter} />

        <ul>
          {filteredTodos.map(({ id, text, completed }) => (
            <li key={id}>
              <Todo
                id={id}
                text={text}
                completed={completed}
                onChange={this.handleChangeCompleted}
                onDelete={this.handleClickDelete}
              />
            </li>
          ))}
        </ul>

        <button onClick={this.handleClickDeleteCompleted}>完了済みを全て削除</button>
      </div>
    );
  }


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
      completed,
    }));
    this.setState({ todos: newTodos })
  }

  handleChangeCompleted = (id, completed) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: completed
        }
      }
      return todo
    })
    this.setState({ todos: newTodos })
  };


  handleChangeFilter = filter => {
    this.setState({ filter })
  }
  //削除機能
  handleClickDelete = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos: newTodos })
  }

  handleClickDeleteCompleted = () => {
    const newTodos = this.state.todos.filter(({ completed }) => !completed)
    this.setState({ todos: newTodos })
  };

}


//functional component
// const App = () => <div>app</div>;

export default App;