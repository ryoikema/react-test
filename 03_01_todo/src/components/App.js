import React from 'react';
import Form from './Form';

class App extends React.Component {
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
          <option>完了済み</option>
        </select>

        <ul>
          <li>
            <label>
              <input type="checkbox" />
              学習する
            </label>
            <button>編集</button>
            <button>削除</button>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              学習する
            </label>
            <button>編集</button>
            <button>削除</button>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              学習する
            </label>
            <button>編集</button>
            <button>削除</button>
          </li>
        </ul>

        <button>完了済みを全て削除</button>

      </div>
    );
  }
}

export default App;