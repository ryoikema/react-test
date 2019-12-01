import React from 'react';
import Form from './Form';
import Todo from './Todo';


//class component
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [

      ]
    }
  }

  render() {
    return (
      <div>
        <Form />
        <label>
          <input type="checkbox" />
          全て完了にする
        </label>

        <select>
          <option>全て</option>
          <option>未完了</option>
          <option>完了</option>
        </select>

        <ul>
          {this.state.todos.map(({ id, text }) => (
            <li key={id}>
              <Todo text={text} />
            </li>
          ))}
        </ul>

        <button>完了済みを全て削除</button>
      </div>
    );
  }
}

//functional component
// const App = () => <div>app</div>;

export default App;